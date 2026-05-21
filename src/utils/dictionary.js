// Dictionary lookup for spelling-list words.
//   - English: api.dictionaryapi.dev (Free Dictionary API)
//   - Chinese: pinyin only, derived locally via pinyin-pro. We don't fetch
//     Chinese definitions — no reliable free source produced acceptable
//     quality. The Learn card just shows the word + pinyin + TTS.
//
// Results are cached forever in localStorage — definitions don't change and
// network can be slow. Cache key is `koko-dictionary-cache`; value is a map
// of "<lang>:<word>" → entry.

const CACHE_KEY = "koko-dictionary-cache";
// Bump this when the entry shape changes so old cached payloads get re-fetched.
const CACHE_VERSION = 5;

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

export async function lookupWord(word, lang) {
  if (!word) return null;
  const cached = cacheGet(lang, word);
  if (cached) return cached;

  if (lang === "zh") {
    // Chinese: pinyin only. We deliberately don't fetch a definition — no
    // free source produced acceptable quality for primary-school 词语.
    let pinyinStr = null;
    try {
      const { pinyin } = await import("pinyin-pro");
      pinyinStr = pinyin(word, { toneType: "symbol", type: "string" });
    } catch { /* ignore */ }
    const entry = { lang: "zh", word, pinyin: pinyinStr };
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
