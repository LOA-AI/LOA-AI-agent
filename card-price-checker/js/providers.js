// Fournisseurs de prix : chaque fonction renvoie une liste de cartes normalisées :
// {
//   id, name, subtitle, image,
//   prices: [{ label, value, currency }],   // value: number
//   links:  [{ label, url }],
//   updatedAt?: string
// }

const PAGE_SIZE = 30;

// Taux indicatif utilisé uniquement pour trier des prix USD/EUR ensemble.
export const USD_TO_EUR = 0.86;

class NotFound extends Error {}

async function getJson(url, { notFoundStatuses = [404] } = {}) {
  let res;
  try {
    res = await fetch(url, { headers: { Accept: "application/json" } });
  } catch (e) {
    throw new Error("Impossible de joindre le service de prix (réseau ou blocage CORS).");
  }
  if (notFoundStatuses.includes(res.status)) throw new NotFound();
  if (res.status === 429) throw new Error("Trop de requêtes : réessayez dans quelques secondes.");
  if (!res.ok) throw new Error(`Le service de prix a répondu ${res.status}.`);
  return res.json();
}

const num = (v) => {
  const n = typeof v === "string" ? parseFloat(v) : v;
  return Number.isFinite(n) && n > 0 ? n : null;
};

function addPrice(list, label, value, currency) {
  const n = num(value);
  if (n !== null) list.push({ label, value: n, currency });
}

// ---------- Pokémon : api.pokemontcg.io ----------

const POKEMON_VARIANTS = {
  normal: "Normale",
  holofoil: "Holo",
  reverseHolofoil: "Reverse holo",
  "1stEditionHolofoil": "1ère éd. holo",
  "1stEditionNormal": "1ère éd.",
  unlimitedHolofoil: "Unlimited holo",
  unlimited: "Unlimited",
  "1stEdition": "1ère éd.",
};

function pokemonQuery(term) {
  const clean = term.replace(/["\\]/g, "").trim();
  if (/^[\w'.-]+$/.test(clean)) return `name:${clean}*`;
  return `name:"${clean}"`;
}

async function searchPokemon(term) {
  const params = new URLSearchParams({
    q: pokemonQuery(term),
    pageSize: String(PAGE_SIZE),
    orderBy: "-set.releaseDate",
  });
  const json = await getJson(`https://api.pokemontcg.io/v2/cards?${params}`);
  return (json.data || []).map((c) => {
    const prices = [];
    const tp = c.tcgplayer?.prices || {};
    for (const [variant, p] of Object.entries(tp)) {
      const label = POKEMON_VARIANTS[variant] || variant;
      addPrice(prices, `TCGplayer · ${label} (marché)`, p.market ?? p.mid, "USD");
    }
    const cm = c.cardmarket?.prices || {};
    addPrice(prices, "Cardmarket · tendance", cm.trendPrice, "EUR");
    addPrice(prices, "Cardmarket · moyenne 30 j", cm.avg30, "EUR");
    addPrice(prices, "Cardmarket · reverse holo", cm.reverseHoloTrend, "EUR");

    const links = [];
    if (c.tcgplayer?.url) links.push({ label: "TCGplayer", url: c.tcgplayer.url });
    if (c.cardmarket?.url) links.push({ label: "Cardmarket", url: c.cardmarket.url });

    return {
      id: c.id,
      name: c.name,
      subtitle: [c.set?.name, c.number && `#${c.number}`, c.rarity].filter(Boolean).join(" · "),
      image: c.images?.small,
      imageLarge: c.images?.large,
      prices,
      links,
      updatedAt: c.cardmarket?.updatedAt || c.tcgplayer?.updatedAt,
    };
  });
}

// ---------- Magic : api.scryfall.com ----------

async function searchMtg(term) {
  const params = new URLSearchParams({ q: term, unique: "prints", order: "usd", dir: "desc" });
  const json = await getJson(`https://api.scryfall.com/cards/search?${params}`);
  return (json.data || []).slice(0, PAGE_SIZE).map((c) => {
    const p = c.prices || {};
    const prices = [];
    addPrice(prices, "TCGplayer · normale", p.usd, "USD");
    addPrice(prices, "TCGplayer · foil", p.usd_foil, "USD");
    addPrice(prices, "TCGplayer · etched", p.usd_etched, "USD");
    addPrice(prices, "Cardmarket · normale", p.eur, "EUR");
    addPrice(prices, "Cardmarket · foil", p.eur_foil, "EUR");

    const img = c.image_uris || c.card_faces?.[0]?.image_uris || {};
    const links = [];
    if (c.purchase_uris?.tcgplayer) links.push({ label: "TCGplayer", url: c.purchase_uris.tcgplayer });
    if (c.purchase_uris?.cardmarket) links.push({ label: "Cardmarket", url: c.purchase_uris.cardmarket });
    if (c.scryfall_uri) links.push({ label: "Scryfall", url: c.scryfall_uri });

    return {
      id: c.id,
      name: c.printed_name && c.printed_name !== c.name ? `${c.name} (${c.printed_name})` : c.name,
      subtitle: [c.set_name, c.collector_number && `#${c.collector_number}`, c.rarity].filter(Boolean).join(" · "),
      image: img.small || img.normal,
      imageLarge: img.large || img.normal,
      prices,
      links,
    };
  });
}

// ---------- Yu-Gi-Oh! : db.ygoprodeck.com ----------

async function searchYugioh(term) {
  const params = new URLSearchParams({ fname: term, num: String(PAGE_SIZE), offset: "0" });
  // YGOPRODeck renvoie 400 quand aucune carte ne correspond.
  const json = await getJson(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${params}`, {
    notFoundStatuses: [400, 404],
  });
  return (json.data || []).map((c) => {
    const p = c.card_prices?.[0] || {};
    const prices = [];
    addPrice(prices, "TCGplayer", p.tcgplayer_price, "USD");
    addPrice(prices, "Cardmarket", p.cardmarket_price, "EUR");
    addPrice(prices, "eBay", p.ebay_price, "USD");
    addPrice(prices, "Amazon", p.amazon_price, "USD");
    addPrice(prices, "CoolStuffInc", p.coolstuffinc_price, "USD");

    const sets = (c.card_sets || [])
      .map((s) => ({ ...s, price: num(s.set_price) }))
      .filter((s) => s.price !== null)
      .sort((a, b) => b.price - a.price);
    const mostValuable = sets[0];
    if (mostValuable) {
      prices.push({
        label: `Édition la plus chère · ${mostValuable.set_code} (${mostValuable.set_rarity})`,
        value: mostValuable.price,
        currency: "USD",
      });
    }

    const img = c.card_images?.[0] || {};
    return {
      id: String(c.id),
      name: c.name,
      subtitle: [c.type, c.attribute, c.card_sets?.length && `${c.card_sets.length} éditions`]
        .filter(Boolean)
        .join(" · "),
      image: img.image_url_small || img.image_url,
      imageLarge: img.image_url,
      prices,
      links: c.ygoprodeck_url ? [{ label: "YGOPRODeck", url: c.ygoprodeck_url }] : [],
    };
  });
}

// ---------- Disney Lorcana : api.lorcast.com ----------

async function searchLorcana(term) {
  const params = new URLSearchParams({ q: term });
  const json = await getJson(`https://api.lorcast.com/v0/cards/search?${params}`);
  return (json.results || []).slice(0, PAGE_SIZE).map((c) => {
    const prices = [];
    addPrice(prices, "TCGplayer · normale", c.prices?.usd, "USD");
    addPrice(prices, "TCGplayer · foil", c.prices?.usd_foil, "USD");
    const img = c.image_uris?.digital || {};
    const links = [];
    if (c.tcgplayer_id) {
      links.push({ label: "TCGplayer", url: `https://www.tcgplayer.com/product/${c.tcgplayer_id}` });
    }
    return {
      id: c.id,
      name: c.version ? `${c.name} – ${c.version}` : c.name,
      subtitle: [c.set?.name, c.collector_number && `#${c.collector_number}`, c.rarity]
        .filter(Boolean)
        .join(" · "),
      image: img.small || img.normal,
      imageLarge: img.large || img.normal,
      prices,
      links,
    };
  });
}

const PROVIDERS = {
  pokemon: searchPokemon,
  mtg: searchMtg,
  yugioh: searchYugioh,
  lorcana: searchLorcana,
};

export async function searchCards(gameId, term) {
  const provider = PROVIDERS[gameId];
  if (!provider) return null; // pas d'API : l'interface affiche des liens marché
  try {
    return await provider(term);
  } catch (e) {
    if (e instanceof NotFound) return [];
    throw e;
  }
}

// Valeur utilisée pour trier : le prix le plus élevé, ramené en EUR.
export function sortValue(card) {
  let best = 0;
  for (const p of card.prices) {
    const eur = p.currency === "USD" ? p.value * USD_TO_EUR : p.value;
    if (eur > best) best = eur;
  }
  return best;
}
