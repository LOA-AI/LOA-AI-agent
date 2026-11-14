// Top 10 des jeux de cartes à collectionner les plus collectionnés,
// avec la source de prix utilisée pour chacun.
//
// live: true  -> recherche + prix en direct via une API publique gratuite
// live: false -> recherche via liens directs vers les places de marché

const enc = encodeURIComponent;

export const GAMES = [
  {
    id: "pokemon",
    name: "Pokémon",
    emoji: "⚡",
    color: "#f5c400",
    live: true,
    source: "Pokémon TCG API (TCGplayer + Cardmarket)",
    placeholder: "ex. Dracaufeu / Charizard, Pikachu…",
    tcgplayer: "pokemon",
    cardmarket: "Pokemon",
  },
  {
    id: "mtg",
    name: "Magic: The Gathering",
    emoji: "🧙",
    color: "#c0562b",
    live: true,
    source: "Scryfall (TCGplayer + Cardmarket)",
    placeholder: "ex. Black Lotus, Sol Ring…",
    tcgplayer: "magic",
    cardmarket: "Magic",
  },
  {
    id: "yugioh",
    name: "Yu-Gi-Oh!",
    emoji: "👁️",
    color: "#7b3fbf",
    live: true,
    source: "YGOPRODeck (TCGplayer, Cardmarket, eBay…)",
    placeholder: "ex. Dark Magician, Blue-Eyes…",
    tcgplayer: "yugioh",
    cardmarket: "YuGiOh",
  },
  {
    id: "sports",
    name: "Cartes de sport",
    emoji: "🏀",
    color: "#1f7a4d",
    live: false,
    source: "Ventes eBay terminées, PriceCharting",
    placeholder: "ex. Michael Jordan 1986 Fleer, Mbappé Panini…",
    sports: true,
  },
  {
    id: "lorcana",
    name: "Disney Lorcana",
    emoji: "✨",
    color: "#2a6fdb",
    live: true,
    source: "Lorcast (prix TCGplayer)",
    placeholder: "ex. Elsa, Stitch, Mickey…",
    tcgplayer: "lorcana-tcg",
    cardmarket: "Lorcana",
  },
  {
    id: "onepiece",
    name: "One Piece Card Game",
    emoji: "🏴‍☠️",
    color: "#d22f2f",
    live: false,
    source: "TCGplayer, Cardmarket, eBay",
    placeholder: "ex. Monkey D. Luffy, Shanks…",
    tcgplayer: "one-piece-card-game",
    cardmarket: "OnePiece",
  },
  {
    id: "dbs",
    name: "Dragon Ball Super",
    emoji: "🐉",
    color: "#f08a00",
    live: false,
    source: "TCGplayer, Cardmarket, eBay",
    placeholder: "ex. Son Goku, Vegeta…",
    tcgplayer: "dragon-ball-super-fusion-world",
    cardmarket: "DragonBallSuper",
  },
  {
    id: "digimon",
    name: "Digimon Card Game",
    emoji: "🦖",
    color: "#0096c7",
    live: false,
    source: "TCGplayer, Cardmarket, eBay",
    placeholder: "ex. Omnimon, Agumon…",
    tcgplayer: "digimon-card-game",
    cardmarket: "Digimon",
  },
  {
    id: "fab",
    name: "Flesh and Blood",
    emoji: "⚔️",
    color: "#8c1c13",
    live: false,
    source: "TCGplayer, Cardmarket, eBay",
    placeholder: "ex. Fyendal's Spring Tunic…",
    tcgplayer: "flesh-and-blood-tcg",
    cardmarket: "FleshAndBlood",
  },
  {
    id: "swu",
    name: "Star Wars: Unlimited",
    emoji: "🌌",
    color: "#3c4a5c",
    live: false,
    source: "TCGplayer, Cardmarket, eBay",
    placeholder: "ex. Darth Vader, Luke Skywalker…",
    tcgplayer: "star-wars-unlimited",
    cardmarket: "StarWarsUnlimited",
  },
];

export function getGame(id) {
  return GAMES.find((g) => g.id === id) || GAMES[0];
}

// Liens de recherche vers les places de marché, pour n'importe quel jeu.
export function marketLinks(game, query) {
  const q = enc(query);
  const links = [];
  if (game.tcgplayer) {
    links.push({
      label: "TCGplayer",
      url: `https://www.tcgplayer.com/search/${game.tcgplayer}/product?q=${q}`,
    });
  }
  if (game.cardmarket) {
    links.push({
      label: "Cardmarket",
      url: `https://www.cardmarket.com/fr/${game.cardmarket}/Products/Search?searchString=${q}`,
    });
  }
  const ebayTerms = game.sports ? query : `${query} ${game.name}`;
  links.push({
    label: "eBay (ventes réalisées)",
    url: `https://www.ebay.fr/sch/i.html?_nkw=${enc(ebayTerms)}&LH_Sold=1&LH_Complete=1`,
  });
  links.push({
    label: "PriceCharting",
    url: `https://www.pricecharting.com/search-products?q=${enc(ebayTerms)}&type=prices`,
  });
  return links;
}
