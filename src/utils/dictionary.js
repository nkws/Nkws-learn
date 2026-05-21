// Dictionary lookup for spelling-list words. Two free, no-API-key sources:
//   - English: api.dictionaryapi.dev (Free Dictionary API)
//   - Chinese: pinyin via pinyin-pro (already a dep) + MyMemory free translation
//     API for an English gloss so the child has a concrete meaning to anchor to
//
// Results are cached forever in localStorage — definitions don't change and
// network can be slow. Cache key is `koko-dictionary-cache`; value is a map
// of "<lang>:<word>" → entry. We keep failures in the cache too (as null
// meaning fields) so we don't hammer the API on repeated misses.

const CACHE_KEY = "koko-dictionary-cache";
// Bump this when the entry shape changes so old cached payloads get re-fetched
// instead of being returned with missing fields (e.g. no `explanation`).
const CACHE_VERSION = 2;

function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && parsed.__v === CACHE_VERSION) {
        return parsed;
      }
    }
  } catch { /* ignore */ }
  return { __v: CACHE_VERSION };
}

function saveCache(cache) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch { /* ignore */ }
}

function cacheGet(lang, word) {
  const cache = loadCache();
  return cache[`${lang}:${word}`] || null;
}

function cachePut(lang, word, entry) {
  const cache = loadCache();
  cache[`${lang}:${word}`] = entry;
  saveCache(cache);
}

async function fetchEnglish(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  if (!Array.isArray(data) || data.length === 0) return null;

  // Pick the first entry; flatten meanings into a simple shape.
  const first = data[0];
  const phonetic =
    first.phonetic ||
    (first.phonetics || []).find((p) => p?.text)?.text ||
    null;
  const meanings = (first.meanings || []).map((m) => ({
    partOfSpeech: m.partOfSpeech || "",
    definitions: (m.definitions || []).slice(0, 2).map((d) => ({
      definition: d.definition || "",
      example: d.example || "",
    })),
  })).filter((m) => m.definitions.length > 0);

  return { phonetic, meanings };
}

async function fetchChineseTranslation(word) {
  // MyMemory: free, no API key, supports CORS. Returns best translation.
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=zh-CN|en`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const t = data?.responseData?.translatedText;
  if (!t) return null;
  // MyMemory sometimes echoes the input on failure; filter that out.
  if (t.trim() === word.trim()) return null;
  return t;
}

async function fetchChineseExplanation(word) {
  // Chinese Wiktionary (zh.wiktionary.org) has Chinese-language definitions
  // for most common 词语. The summary endpoint returns a clean text extract.
  const url = `https://zh.wiktionary.org/api/rest_v1/page/summary/${encodeURIComponent(word)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const raw = data?.extract;
  if (!raw) return null;
  // Strip wikitext-style template residue and trim. Keep paragraph breaks.
  const cleaned = raw
    .replace(/\[\d+\]/g, "")
    .replace(/\{\{[^}]*\}\}/g, "")
    .trim();
  if (!cleaned) return null;
  return cleaned;
}

export async function lookupWord(word, lang) {
  if (!word) return null;
  const cached = cacheGet(lang, word);
  if (cached) return cached;

  if (lang === "zh") {
    let pinyinStr = null;
    try {
      const { pinyin } = await import("pinyin-pro");
      pinyinStr = pinyin(word, { toneType: "symbol", type: "string" });
    } catch { /* ignore */ }
    const [explanation, translation] = await Promise.all([
      fetchChineseExplanation(word).catch(() => null),
      fetchChineseTranslation(word).catch(() => null),
    ]);
    const entry = { lang: "zh", word, pinyin: pinyinStr, explanation, translation };
    cachePut("zh", word, entry);
    return entry;
  }

  // English
  let result = null;
  try {
    result = await fetchEnglish(word);
  } catch { /* ignore */ }
  const entry = {
    lang: "en",
    word,
    phonetic: result?.phonetic || null,
    meanings: result?.meanings || [],
  };
  cachePut("en", word, entry);
  return entry;
}
