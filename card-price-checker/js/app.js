import { GAMES, getGame, marketLinks } from "./games.js";
import { searchCards, sortValue } from "./providers.js";
import { scanCard } from "./scan.js";

const $ = (sel) => document.querySelector(sel);
const WATCHLIST_KEY = "cpc.watchlist.v1";

const state = {
  game: GAMES[0],
  query: "",
  results: [],
  sort: "relevance",
  requestId: 0,
};

// ---------- utilitaires ----------

const formatters = {
  EUR: new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
  USD: new Intl.NumberFormat("fr-FR", { style: "currency", currency: "USD" }),
};
const formatPrice = (p) => formatters[p.currency].format(p.value);

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === "class") node.className = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c === null || c === undefined || c === false) continue;
    node.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return node;
}

function externalLink(link, cls = "chip") {
  return el("a", { class: cls, href: link.url, target: "_blank", rel: "noopener noreferrer" }, link.label, " ↗");
}

// ---------- liste de suivi (localStorage) ----------

function loadWatchlist() {
  try {
    return JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];
  } catch {
    return [];
  }
}

function saveWatchlist(list) {
  try {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
  } catch {
    /* stockage indisponible (navigation privée) : on ignore */
  }
}

const watchKey = (gameId, cardId) => `${gameId}:${cardId}`;

function isWatched(gameId, cardId) {
  return loadWatchlist().some((w) => w.key === watchKey(gameId, cardId));
}

function toggleWatch(card) {
  const key = watchKey(state.game.id, card.id);
  let list = loadWatchlist();
  if (list.some((w) => w.key === key)) {
    list = list.filter((w) => w.key !== key);
  } else {
    list.unshift({
      key,
      gameId: state.game.id,
      cardId: card.id,
      name: card.name,
      subtitle: card.subtitle,
      image: card.image,
      price: card.prices[0] || null,
      savedAt: new Date().toISOString(),
    });
  }
  saveWatchlist(list);
  renderWatchlist();
}

function renderWatchlist() {
  const list = loadWatchlist();
  const container = $("#watchlist");
  $("#watch-count").textContent = list.length;
  container.replaceChildren();
  if (!list.length) {
    container.append(el("p", { class: "muted" }, "Cliquez sur ☆ sur une carte pour la suivre ici."));
    return;
  }
  for (const w of list) {
    const game = getGame(w.gameId);
    container.append(
      el(
        "div",
        { class: "watch-item" },
        w.image ? el("img", { src: w.image, alt: "", loading: "lazy" }) : el("div", { class: "thumb-placeholder" }),
        el(
          "div",
          { class: "watch-info" },
          el("strong", {}, w.name),
          el("span", { class: "muted small" }, `${game.emoji} ${game.name}`),
          el(
            "span",
            { class: "small" },
            w.price ? `${formatPrice(w.price)} le ${new Date(w.savedAt).toLocaleDateString("fr-FR")}` : "Pas de prix"
          )
        ),
        el(
          "div",
          { class: "watch-actions" },
          el(
            "button",
            {
              class: "btn-small",
              title: "Revoir le prix actuel",
              onclick: () => {
                selectGame(w.gameId);
                $("#search-input").value = w.name.replace(/\s*\(.*\)$/, "");
                runSearch();
                $("#watch-panel").removeAttribute("open");
              },
            },
            "Actualiser"
          ),
          el(
            "button",
            {
              class: "btn-small danger",
              title: "Retirer",
              "aria-label": `Retirer ${w.name}`,
              onclick: () => {
                saveWatchlist(loadWatchlist().filter((x) => x.key !== w.key));
                renderWatchlist();
                renderResults();
              },
            },
            "✕"
          )
        )
      )
    );
  }
}

// ---------- sélection du jeu ----------

function renderGameTiles() {
  const grid = $("#games");
  grid.replaceChildren(
    ...GAMES.map((g, i) =>
      el(
        "button",
        {
          class: "game-tile" + (g.id === state.game.id ? " active" : ""),
          style: `--accent:${g.color}`,
          "data-game": g.id,
          "aria-pressed": String(g.id === state.game.id),
          onclick: () => {
            selectGame(g.id);
            $("#search-input").focus();
          },
        },
        el("span", { class: "rank" }, `#${i + 1}`),
        el("span", { class: "emoji", "aria-hidden": "true" }, g.emoji),
        el("span", { class: "game-name" }, g.name),
        el("span", { class: "badge " + (g.live ? "live" : "links") }, g.live ? "Prix en direct" : "Liens marchés")
      )
    )
  );
}

function selectGame(id) {
  const game = getGame(id);
  if (game.id !== state.game.id) {
    state.game = game;
    state.results = [];
    $("#results").replaceChildren();
    $("#status").textContent = "";
    $("#market-links").replaceChildren();
    $("#scan-candidates").replaceChildren();
  }
  document.documentElement.style.setProperty("--game-accent", game.color);
  $("#search-input").placeholder = game.placeholder;
  $("#source").textContent = `Source : ${game.source}`;
  $("#sort-label").hidden = !game.live;
  renderGameTiles();
}

// ---------- recherche ----------

function updateHash() {
  const params = new URLSearchParams({ jeu: state.game.id });
  if (state.query) params.set("q", state.query);
  history.replaceState(null, "", `#${params}`);
}

async function runSearch() {
  const query = $("#search-input").value.trim();
  if (!query) {
    $("#status").textContent = "Saisissez le nom d'une carte.";
    return;
  }
  state.query = query;
  updateHash();
  const game = state.game;
  const reqId = ++state.requestId;

  $("#market-links").replaceChildren(
    el("span", { class: "muted small" }, "Comparer aussi sur : "),
    ...marketLinks(game, query).map((l) => externalLink(l))
  );

  if (!game.live) {
    state.results = [];
    $("#results").replaceChildren(
      el(
        "div",
        { class: "notice" },
        el("h3", {}, `${game.emoji} ${game.name}`),
        el(
          "p",
          {},
          "Aucune API de prix publique et gratuite n'existe pour ce jeu. Ouvrez directement les prix du marché pour « ",
          el("strong", {}, query),
          " » :"
        ),
        el("div", { class: "big-links" }, ...marketLinks(game, query).map((l) => externalLink(l, "btn-link")))
      )
    );
    $("#status").textContent = "";
    return;
  }

  $("#status").textContent = "Recherche en cours…";
  $("#results").setAttribute("aria-busy", "true");
  $("#results").replaceChildren(...Array.from({ length: 6 }, () => el("div", { class: "card skeleton" })));

  try {
    const results = await searchCards(game.id, query);
    if (reqId !== state.requestId) return; // une recherche plus récente a été lancée
    state.results = results;
    $("#status").textContent = results.length
      ? `${results.length} carte${results.length > 1 ? "s" : ""} trouvée${results.length > 1 ? "s" : ""}`
      : `Aucune carte trouvée pour « ${query} ».`;
    renderResults();
  } catch (err) {
    if (reqId !== state.requestId) return;
    state.results = [];
    $("#results").replaceChildren(
      el("div", { class: "notice error" }, el("p", {}, `⚠️ ${err.message}`), el("p", { class: "small" }, "Les liens ci-dessus restent disponibles."))
    );
    $("#status").textContent = "";
  } finally {
    if (reqId === state.requestId) $("#results").removeAttribute("aria-busy");
  }
}

function sortedResults() {
  const list = [...state.results];
  if (state.sort === "price-desc") list.sort((a, b) => sortValue(b) - sortValue(a));
  if (state.sort === "price-asc") {
    list.sort((a, b) => (sortValue(a) || Infinity) - (sortValue(b) || Infinity));
  }
  if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  return list;
}

function renderCard(card) {
  const watched = isWatched(state.game.id, card.id);
  const [main, ...others] = card.prices;
  return el(
    "article",
    { class: "card" },
    el(
      "a",
      { class: "card-img", href: card.imageLarge || card.image || "#", target: "_blank", rel: "noopener noreferrer" },
      card.image ? el("img", { src: card.image, alt: card.name, loading: "lazy" }) : el("div", { class: "thumb-placeholder" }, "?")
    ),
    el(
      "div",
      { class: "card-body" },
      el(
        "div",
        { class: "card-head" },
        el("h3", {}, card.name),
        el(
          "button",
          {
            class: "star" + (watched ? " on" : ""),
            title: watched ? "Ne plus suivre" : "Suivre cette carte",
            "aria-label": watched ? `Ne plus suivre ${card.name}` : `Suivre ${card.name}`,
            "aria-pressed": String(watched),
            onclick: () => {
              toggleWatch(card);
              renderResults();
            },
          },
          watched ? "★" : "☆"
        )
      ),
      el("p", { class: "muted small" }, card.subtitle),
      main
        ? el("p", { class: "main-price" }, formatPrice(main), el("span", { class: "muted small" }, ` ${main.label}`))
        : el("p", { class: "muted" }, "Pas de prix disponible"),
      others.length
        ? el(
            "ul",
            { class: "price-list" },
            ...others.map((p) => el("li", {}, el("span", {}, p.label), el("strong", {}, formatPrice(p))))
          )
        : null,
      card.updatedAt ? el("p", { class: "muted tiny" }, `Mis à jour : ${card.updatedAt}`) : null,
      card.links.length ? el("div", { class: "card-links" }, ...card.links.map((l) => externalLink(l))) : null
    )
  );
}

function renderResults() {
  if (!state.game.live || !state.results.length) return;
  $("#results").replaceChildren(...sortedResults().map(renderCard));
}

// ---------- recherche par photo ----------

function renderScanCandidates(candidates, current) {
  $("#scan-candidates").replaceChildren(
    el("span", { class: "muted small" }, "Lu sur la photo : "),
    ...candidates.map((text) =>
      el(
        "button",
        {
          type: "button",
          class: "chip" + (text === current ? " current" : ""),
          onclick: () => {
            $("#search-input").value = text;
            renderScanCandidates(candidates, text);
            runSearch();
          },
        },
        text
      )
    )
  );
}

async function handleScan(file) {
  if (!file) return;
  const btn = $("#scan-btn");
  btn.disabled = true;
  $("#scan-candidates").replaceChildren();
  $("#status").textContent = "Lecture de la photo…";
  try {
    const candidates = await scanCard(file, state.game.id, (progress) => {
      $("#status").textContent = `Lecture de la photo… ${Math.round(progress * 100)} %`;
    });
    if (!candidates.length) {
      $("#status").textContent =
        "Nom illisible sur la photo. Reprenez-la bien à plat, de près, avec un bon éclairage et sans reflet.";
      return;
    }
    $("#search-input").value = candidates[0];
    renderScanCandidates(candidates, candidates[0]);
    await runSearch();
  } catch (err) {
    $("#status").textContent = `⚠️ ${err.message}`;
  } finally {
    btn.disabled = false;
  }
}

// ---------- initialisation ----------

function init() {
  const params = new URLSearchParams(location.hash.slice(1));
  state.game = getGame(params.get("jeu") || GAMES[0].id);
  selectGame(state.game.id);
  renderWatchlist();

  $("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    runSearch();
  });
  $("#scan-btn").addEventListener("click", () => $("#scan-input").click());
  $("#scan-input").addEventListener("change", (e) => {
    const file = e.target.files[0];
    e.target.value = ""; // permet de rescanner la même photo
    handleScan(file);
  });
  // Coller une photo (Ctrl+V, ou « Coller » dans la recherche sur téléphone) lance aussi la lecture.
  document.addEventListener("paste", (e) => {
    const image = Array.from(e.clipboardData?.files || []).find((f) => f.type.startsWith("image/"));
    if (!image) return; // texte collé : comportement normal
    e.preventDefault();
    if (!$("#scan-btn").disabled) handleScan(image);
  });
  $("#sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderResults();
  });

  const q = params.get("q");
  if (q) {
    $("#search-input").value = q;
    runSearch();
  }
}

init();
