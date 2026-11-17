'use strict';

// ---------- Stockage ----------
const CLE_RECETTES = 'cuisine.recettes';
const CLE_COURSES = 'cuisine.courses';

function charger(cle, defaut) {
  try { const v = localStorage.getItem(cle); return v ? JSON.parse(v) : defaut; }
  catch { return defaut; }
}
function sauver(cle, val) {
  try { localStorage.setItem(cle, JSON.stringify(val)); } catch { /* stockage indisponible */ }
}

const RECETTES_DEMO = [
  { id: 'r1', nom: 'Crêpes', categorie: 'Dessert', personnes: 4, temps: 30, favori: true,
    ingredients: ['250 g farine', '4 œufs', '50 cl lait', '50 g beurre fondu', '1 pincée sel', '2 c. à soupe sucre'],
    etapes: ['Mélanger la farine, le sucre et le sel.', 'Ajouter les œufs puis le lait petit à petit en fouettant.',
      'Incorporer le beurre fondu et laisser reposer 1 heure.', 'Cuire dans une poêle chaude légèrement beurrée.'] },
  { id: 'r2', nom: 'Ratatouille', categorie: 'Plat', personnes: 4, temps: 75, favori: false,
    ingredients: ['2 aubergines', '3 courgettes', '2 poivrons', '4 tomates', '2 oignons', '3 gousses ail', '4 c. à soupe huile d\'olive', '1 branche thym'],
    etapes: ['Couper tous les légumes en dés.', 'Faire revenir les oignons et l\'ail dans l\'huile.',
      'Ajouter poivrons et aubergines, cuire 10 minutes.', 'Ajouter courgettes, tomates et thym.',
      'Laisser mijoter à couvert 45 minutes à feu doux.'] },
  { id: 'r3', nom: 'Velouté de potiron', categorie: 'Entrée', personnes: 4, temps: 40, favori: false,
    ingredients: ['800 g potiron', '1 pomme de terre', '1 oignon', '1 l bouillon de légumes', '10 cl crème', 'sel et poivre'],
    etapes: ['Éplucher et couper les légumes.', 'Faire suer l\'oignon, ajouter potiron et pomme de terre.',
      'Couvrir de bouillon et cuire 25 minutes.', 'Mixer, ajouter la crème, assaisonner.'] },
  { id: 'r4', nom: 'Citronnade maison', categorie: 'Boisson', personnes: 6, temps: 10, favori: false,
    ingredients: ['4 citrons', '100 g sucre', '1,5 l eau fraîche', '6 feuilles menthe'],
    etapes: ['Presser les citrons.', 'Dissoudre le sucre dans un peu d\'eau.', 'Mélanger le tout avec l\'eau et la menthe, servir frais.'] },
];

let recettes = charger(CLE_RECETTES, null) || RECETTES_DEMO;
let courses = charger(CLE_COURSES, []);
const enregistrerRecettes = () => sauver(CLE_RECETTES, recettes);
const enregistrerCourses = () => { sauver(CLE_COURSES, courses); majCompteurCourses(); };

// ---------- Utilitaires ----------
const $ = (s) => document.querySelector(s);
const echapper = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sansAccent = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Ajuste la quantité en tête d'ingrédient (« 250 g farine », « 1,5 l eau », « 1/2 citron »)
function ajusterIngredient(ligne, facteur) {
  if (facteur === 1) return ligne;
  const m = ligne.match(/^(\d+(?:[.,]\d+)?)(?:\/(\d+))?(.*)$/);
  if (!m) return ligne;
  let q = parseFloat(m[1].replace(',', '.'));
  if (m[2]) q /= parseInt(m[2], 10);
  const n = Math.round(q * facteur * 100) / 100;
  return n.toString().replace('.', ',') + m[3];
}

function formatTemps(min) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60), r = min % 60;
  return r ? `${h} h ${r}` : `${h} h`;
}

// ---------- Navigation ----------
function afficherVue(nom) {
  document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.id === 'view-' + nom));
  document.querySelectorAll('nav button').forEach((b) => b.classList.toggle('active', b.dataset.view === nom));
  window.scrollTo(0, 0);
}
document.querySelectorAll('nav button').forEach((b) => b.addEventListener('click', () => {
  if (b.dataset.view === 'ajout') ouvrirFormulaire();
  else { if (b.dataset.view === 'recettes') rendreListe(); afficherVue(b.dataset.view); }
}));

// ---------- Liste ----------
function rendreListe() {
  const q = sansAccent($('#recherche').value.trim());
  const cat = $('#filtre-cat').value;
  const fav = $('#filtre-fav').checked;
  const res = recettes.filter((r) =>
    (!cat || r.categorie === cat) && (!fav || r.favori) &&
    (!q || sansAccent(r.nom + ' ' + r.ingredients.join(' ')).includes(q))
  ).sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));

  $('#liste').innerHTML = res.length ? res.map((r) => `
    <article class="carte" data-id="${r.id}">
      <h3>${r.favori ? '★ ' : ''}${echapper(r.nom)}</h3>
      <div class="meta"><span class="badge">${echapper(r.categorie)}</span>
        <span>⏱ ${formatTemps(r.temps)}</span><span>👤 ${r.personnes}</span></div>
    </article>`).join('') : '<p class="vide">Aucune recette trouvée.</p>';
}
$('#liste').addEventListener('click', (e) => {
  const c = e.target.closest('.carte');
  if (c) afficherDetail(c.dataset.id);
});
['#recherche', '#filtre-cat', '#filtre-fav'].forEach((s) => $(s).addEventListener('input', rendreListe));

// ---------- Détail ----------
let detail = { id: null, personnes: 0 };

function afficherDetail(id, personnes) {
  const r = recettes.find((x) => x.id === id);
  if (!r) return;
  detail = { id, personnes: personnes || r.personnes };
  const f = detail.personnes / r.personnes;
  $('#view-detail').innerHTML = `
    <div class="detail-entete">
      <div><h2>${echapper(r.nom)}</h2>
        <div class="meta"><span class="badge">${echapper(r.categorie)}</span><span>⏱ ${formatTemps(r.temps)}</span></div></div>
      <button class="secondaire" data-act="retour">← Retour</button>
    </div>
    <div class="actions">
      <button data-act="fav">${r.favori ? '★ Retirer des favoris' : '☆ Favori'}</button>
      <button data-act="courses">🛒 Ajouter aux courses</button>
      <button data-act="minuteur">⏲ Minuteur ${formatTemps(r.temps)}</button>
      <button class="secondaire" data-act="modifier">Modifier</button>
      <button class="secondaire" data-act="supprimer">Supprimer</button>
    </div>
    <div class="colonnes">
      <div>
        <h3>Ingrédients</h3>
        <div class="portions"><button data-act="moins">−</button><strong>${detail.personnes} pers.</strong><button data-act="plus">+</button></div>
        <ul>${r.ingredients.map((i) => `<li>${echapper(ajusterIngredient(i, f))}</li>`).join('')}</ul>
      </div>
      <div>
        <h3>Préparation <small>(touchez une étape pour la cocher)</small></h3>
        <ol>${r.etapes.map((e) => `<li>${echapper(e)}</li>`).join('')}</ol>
      </div>
    </div>`;
  afficherVue('detail');
}

$('#view-detail').addEventListener('click', (e) => {
  const li = e.target.closest('ol li');
  if (li) { li.classList.toggle('fait'); return; }
  const act = e.target.closest('[data-act]')?.dataset.act;
  if (!act) return;
  const r = recettes.find((x) => x.id === detail.id);
  const f = detail.personnes / r.personnes;
  switch (act) {
    case 'retour': rendreListe(); afficherVue('recettes'); break;
    case 'plus': afficherDetail(r.id, detail.personnes + 1); window.scrollTo(0, 0); break;
    case 'moins': if (detail.personnes > 1) afficherDetail(r.id, detail.personnes - 1); break;
    case 'fav': r.favori = !r.favori; enregistrerRecettes(); afficherDetail(r.id, detail.personnes); break;
    case 'courses': {
      const existants = new Set(courses.map((c) => c.texte));
      r.ingredients.map((i) => ajusterIngredient(i, f)).forEach((t) => {
        if (!existants.has(t)) courses.push({ texte: t, coche: false });
      });
      enregistrerCourses();
      e.target.textContent = '✓ Ajouté !';
      break;
    }
    case 'minuteur': demarrerMinuteur(r.temps * 60); break;
    case 'modifier': ouvrirFormulaire(r); break;
    case 'supprimer':
      if (confirm(`Supprimer « ${r.nom} » ?`)) {
        recettes = recettes.filter((x) => x.id !== r.id);
        enregistrerRecettes(); rendreListe(); afficherVue('recettes');
      }
      break;
  }
});

// ---------- Formulaire ----------
const form = $('#form-recette');
function ouvrirFormulaire(r) {
  form.reset();
  $('#titre-form').textContent = r ? 'Modifier la recette' : 'Nouvelle recette';
  form.rid.value = r?.id || '';
  if (r) {
    form.nom.value = r.nom; form.categorie.value = r.categorie;
    form.personnes.value = r.personnes; form.temps.value = r.temps;
    form.ingredients.value = r.ingredients.join('\n'); form.etapes.value = r.etapes.join('\n');
  }
  afficherVue('ajout');
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const lignes = (t) => t.split('\n').map((s) => s.trim()).filter(Boolean);
  const donnees = {
    nom: form.nom.value.trim(), categorie: form.categorie.value,
    personnes: Math.max(1, parseInt(form.personnes.value, 10)), temps: Math.max(1, parseInt(form.temps.value, 10)),
    ingredients: lignes(form.ingredients.value), etapes: lignes(form.etapes.value),
  };
  let id = form.rid.value;
  if (id) Object.assign(recettes.find((x) => x.id === id), donnees);
  else { id = 'r' + Date.now(); recettes.push({ id, favori: false, ...donnees }); }
  enregistrerRecettes();
  afficherDetail(id);
});
$('#annuler').addEventListener('click', () => {
  if (form.rid.value) afficherDetail(form.rid.value); else { rendreListe(); afficherVue('recettes'); }
});

// ---------- Courses ----------
function majCompteurCourses() {
  const n = courses.filter((c) => !c.coche).length;
  $('#nb-courses').textContent = n ? `(${n})` : '';
}
function rendreCourses() {
  $('#courses').innerHTML = courses.length ? courses.map((c, i) => `
    <li class="${c.coche ? 'coche' : ''}" data-i="${i}">
      <input type="checkbox" ${c.coche ? 'checked' : ''}><span>${echapper(c.texte)}</span>
      <button aria-label="Supprimer">✕</button></li>`).join('')
    : '<li class="vide">Votre liste est vide.</li>';
}
$('#courses').addEventListener('click', (e) => {
  const li = e.target.closest('li[data-i]');
  if (!li) return;
  const i = +li.dataset.i;
  if (e.target.tagName === 'BUTTON') courses.splice(i, 1);
  else courses[i].coche = !courses[i].coche;
  enregistrerCourses(); rendreCourses();
});
$('#form-course').addEventListener('submit', (e) => {
  e.preventDefault();
  courses.push({ texte: $('#course-input').value.trim(), coche: false });
  $('#course-input').value = '';
  enregistrerCourses(); rendreCourses();
});
$('#vider-coches').addEventListener('click', () => {
  courses = courses.filter((c) => !c.coche); enregistrerCourses(); rendreCourses();
});
document.querySelector('nav button[data-view="courses"]').addEventListener('click', rendreCourses);

// ---------- Minuteur ----------
let minuteurId = null;
function demarrerMinuteur(secondes) {
  clearInterval(minuteurId);
  const fin = Date.now() + secondes * 1000;
  const el = $('#minuteur');
  el.hidden = false; el.classList.remove('fini');
  const tic = () => {
    const reste = Math.max(0, Math.round((fin - Date.now()) / 1000));
    const m = String(Math.floor(reste / 60)).padStart(2, '0'), s = String(reste % 60).padStart(2, '0');
    $('#minuteur-temps').textContent = `${m}:${s}`;
    if (reste === 0) {
      clearInterval(minuteurId);
      el.classList.add('fini');
      $('#minuteur-temps').textContent = 'C\'est prêt !';
      try { navigator.vibrate?.([300, 100, 300]); } catch { /* non supporté */ }
    }
  };
  tic(); minuteurId = setInterval(tic, 1000);
}
$('#minuteur-stop').addEventListener('click', () => { clearInterval(minuteurId); $('#minuteur').hidden = true; });

// ---------- Démarrage ----------
majCompteurCourses();
rendreListe();
