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

// Tokenise raw OCR text into candidate English spelling words.
// Strategy: split on whitespace and punctuation, drop empties and short
// numeric-only tokens, and keep apostrophes (e.g. "don't") and hyphens
// (e.g. "ice-cream"). Returns lowercase candidates; parent edits anyway.
export function parseOcrText(rawText) {
  if (!rawText) return [];
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
