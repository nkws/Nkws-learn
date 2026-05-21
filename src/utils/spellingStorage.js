const SPELLING_KEY = "koko-spelling-lists";

const DEFAULT_STATE = { lists: [] };

export function loadSpellingLists() {
  try {
    const saved = localStorage.getItem(SPELLING_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.lists)) return parsed;
    }
  } catch { /* ignore */ }
  return { ...DEFAULT_STATE };
}

export function saveSpellingLists(state) {
  try { localStorage.setItem(SPELLING_KEY, JSON.stringify(state)); } catch { /* ignore */ }
}

export function newListId() {
  return `sl-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

// Tokenise raw OCR text into candidate spelling words. Behaviour depends
// on the list's language:
//   - "en": split on whitespace/punctuation, keep apostrophes and hyphens
//     (e.g. "don't", "ice-cream"), lowercase, dedupe, drop very short tokens.
//   - "zh": extract runs of CJK Unified Ideographs as candidate 词语. Stray
//     pinyin/numbers are dropped; the parent can edit/merge afterwards.
export function parseOcrText(rawText, lang = "en") {
  if (!rawText) return [];

  if (lang === "zh") {
    const matches = rawText.match(/[㐀-䶿一-鿿]+/g) || [];
    const cleaned = [];
    const seen = new Set();
    for (const tok of matches) {
      if (!tok || seen.has(tok)) continue;
      seen.add(tok);
      cleaned.push(tok);
    }
    return cleaned;
  }

  const tokens = rawText
    .replace(/[“”"]/g, "")
    .split(/[^A-Za-zÀ-ſ'-]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

  const cleaned = [];
  const seen = new Set();
  for (const tok of tokens) {
    const trimmed = tok.replace(/^['-]+|['-]+$/g, "");
    if (trimmed.length < 2) continue;
    const lower = trimmed.toLowerCase();
    if (seen.has(lower)) continue;
    seen.add(lower);
    cleaned.push(lower);
  }
  return cleaned;
}

// Pre-process a loaded image for OCR: downscale very large photos,
// convert to grayscale, then stretch contrast so faded school worksheets
// become black text on white background. Returns a fresh canvas suitable
// to hand to Tesseract.
export function preprocessForOcr(img) {
  const MAX_DIM = 2000;
  let w = img.naturalWidth || img.width;
  let h = img.naturalHeight || img.height;
  if (!w || !h) return img;

  const scale = Math.min(1, MAX_DIM / Math.max(w, h));
  w = Math.max(1, Math.round(w * scale));
  h = Math.max(1, Math.round(h * scale));

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, w, h);

  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;
  const n = w * h;

  // Pass 1: convert to grayscale and find min/max for contrast stretch.
  // Use 2nd/98th percentile (via histogram) to ignore specks of noise.
  const gray = new Uint8Array(n);
  const hist = new Uint32Array(256);
  for (let i = 0, p = 0; p < n; i += 4, p++) {
    const g = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) | 0;
    gray[p] = g;
    hist[g]++;
  }
  const lowCount = Math.floor(n * 0.02);
  const highCount = Math.floor(n * 0.98);
  let cum = 0;
  let lo = 0;
  let hi = 255;
  for (let v = 0; v < 256; v++) {
    cum += hist[v];
    if (cum >= lowCount) { lo = v; break; }
  }
  cum = 0;
  for (let v = 0; v < 256; v++) {
    cum += hist[v];
    if (cum >= highCount) { hi = v; break; }
  }
  if (hi <= lo) { lo = 0; hi = 255; }
  const span = hi - lo;

  // Pass 2: stretch grayscale into 0..255 and write back as RGB.
  for (let i = 0, p = 0; p < n; i += 4, p++) {
    const v = gray[p] <= lo ? 0 : gray[p] >= hi ? 255 : Math.round(((gray[p] - lo) * 255) / span);
    data[i] = data[i + 1] = data[i + 2] = v;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas;
}
