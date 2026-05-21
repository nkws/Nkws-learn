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

const NUMBERING_PREFIX = /^\s*(?:\d+\s*[.)、:-]|[-*•·])\s*/;
const TRIM_PUNCT_EDGES = /^[\s.,;:()[\]"“”'‘’、，。；：!?！？]+|[\s.,;:()[\]"“”'‘’、，。；：!?！？]+$/g;
const CJK_RE = /[㐀-䶿一-鿿]/;

// Split a free-form input into clean candidate words. Supports newlines,
// commas, semicolons, tabs, and runs of whitespace as separators. Strips
// common bullet/numbering prefixes (e.g. "1.", "2)", "- "). Returns a
// deduped array in input order. Behaviour varies by language:
//   - "en": lowercase, drop tokens shorter than 2 chars, must contain a letter
//   - "zh": keep tokens that contain at least one CJK character (drops pinyin/
//     numbering noise); preserves order and original casing/characters
export function splitWordInput(raw, lang = "en") {
  if (!raw) return [];
  // For zh keep CJK-friendly separators too; for en use Latin-friendly ones.
  const separators = lang === "zh"
    ? /[\s,;，；、]+/
    : /[\s,;]+/;
  const tokens = raw.split(separators);

  const seen = new Set();
  const out = [];
  for (const t of tokens) {
    if (!t) continue;
    const stripped = t.replace(NUMBERING_PREFIX, "").replace(TRIM_PUNCT_EDGES, "");
    if (!stripped) continue;

    if (lang === "zh") {
      if (!CJK_RE.test(stripped)) continue;
      if (seen.has(stripped)) continue;
      seen.add(stripped);
      out.push(stripped);
    } else {
      if (stripped.length < 2) continue;
      if (!/[A-Za-zÀ-ſ]/.test(stripped)) continue;
      const lower = stripped.toLowerCase();
      if (seen.has(lower)) continue;
      seen.add(lower);
      out.push(lower);
    }
  }
  return out;
}
