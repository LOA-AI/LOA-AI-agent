// Lecture du nom d'une carte à partir d'une photo (OCR dans le navigateur).
// La photo n'est envoyée à aucun serveur : Tesseract.js tourne localement.
// La bibliothèque (~quelques Mo) n'est téléchargée qu'au premier scan.

const TESSERACT_URL = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
const MAX_SIDE = 1600;

// Jeux dont le nom de la carte est imprimé tout en haut.
const NAME_ON_TOP = new Set(["pokemon", "mtg", "yugioh", "fab"]);

// Mentions imprimées sur les cartes qui ne sont jamais le nom.
const NOISE = /^(basic|base|stage ?\d?|niveau ?\d?|evolves? from.*|evolution.*|trainer|dresseur|supporter|item|objet|energy|energie|illus.*|weakness|resistance|retreat|faiblesse|retraite|creature.*|instant|sorcery|enchantment|artifact|legendary.*|effect|monster|spell card|trap card|character|action|leader|event)$/i;

let tesseractLoading = null;
let workerPromise = null;
let progressCallback = null;

function loadTesseract() {
  if (window.Tesseract) return Promise.resolve();
  if (!tesseractLoading) {
    tesseractLoading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = TESSERACT_URL;
      s.onload = resolve;
      s.onerror = () => {
        tesseractLoading = null;
        reject(new Error("Impossible de charger le module de lecture de photo (connexion requise au premier scan)."));
      };
      document.head.append(s);
    });
  }
  return tesseractLoading;
}

function getWorker() {
  if (!workerPromise) {
    workerPromise = window.Tesseract.createWorker("eng", 1, {
      logger: (m) => {
        if (m.status === "recognizing text" && progressCallback) progressCallback(m.progress);
      },
    }).catch((e) => {
      workerPromise = null;
      throw new Error("Impossible de démarrer la lecture de photo.");
    });
  }
  return workerPromise;
}

async function loadBitmap(file) {
  if (window.createImageBitmap) {
    try {
      return await createImageBitmap(file, { imageOrientation: "from-image" });
    } catch {
      /* on retente avec <img> ci-dessous */
    }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  } catch {
    throw new Error("Ce fichier n'est pas une image lisible.");
  } finally {
    URL.revokeObjectURL(url);
  }
}

// Redimensionne et passe en niveaux de gris contrastés pour aider l'OCR.
function toCanvas(bitmap) {
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d");
  ctx.filter = "grayscale(1) contrast(1.4)";
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas;
}

export function cleanLine(text) {
  return text
    .normalize("NFC")
    .replace(/\b(HP|PV)\s*\d+|\d+\s*(HP|PV)\b/gi, " ") // points de vie Pokémon
    .replace(/[^\p{L}\s'’,.&-]/gu, " ") // chiffres, symboles de mana, bruit
    .replace(/\s+/g, " ")
    .replace(/^(?:[\s'’,.&-]|\b\p{L}\b\s)+|(?:\s\b\p{L}\b|[\s'’,.&-])+$/gu, "") // lettres isolées aux extrémités
    .trim();
}

export function pickCandidates(lines, gameId) {
  const candidates = lines
    .map((l) => ({
      text: cleanLine(l.text),
      confidence: l.confidence,
      top: l.bbox.y0,
      height: l.bbox.y1 - l.bbox.y0,
    }))
    .filter(
      (l) =>
        l.confidence >= 55 &&
        l.text.length >= 3 &&
        l.text.length <= 45 &&
        (l.text.match(/\p{L}/gu) || []).length >= 3 &&
        !NOISE.test(l.text)
    );

  if (NAME_ON_TOP.has(gameId)) {
    // Le nom est la première ligne lisible en haut de la carte.
    candidates.sort((a, b) => a.top - b.top);
  } else {
    // Sinon, le nom est généralement le texte le plus gros.
    candidates.sort((a, b) => b.height - a.height);
  }

  const seen = new Set();
  const out = [];
  for (const c of candidates) {
    const key = c.text.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(c.text);
    if (out.length === 5) break;
  }
  return out;
}

// Renvoie jusqu'à 5 noms possibles, le plus probable en premier.
export async function scanCard(file, gameId, onProgress) {
  const bitmap = await loadBitmap(file);
  const canvas = toCanvas(bitmap);
  bitmap.close?.();
  await loadTesseract();
  const worker = await getWorker();
  progressCallback = onProgress;
  try {
    const { data } = await worker.recognize(canvas);
    return pickCandidates(data.lines || [], gameId);
  } finally {
    progressCallback = null;
  }
}
