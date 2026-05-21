// Dictionary lookup for spelling-list words. Free, no-API-key sources:
//   - English: api.dictionaryapi.dev (Free Dictionary API)
//   - Chinese: moedict.tw — Taiwan MOE's online dictionary, modern Chinese
//     definitions with pinyin and examples. Inputs are converted from
//     simplified → traditional via opencc-js before querying.
//   - Chinese fallback: zh.wiktionary.org for entries moedict doesn't have.
//   - Chinese secondary: MyMemory free translation for an English gloss so
//     parents and bilingual learners still see a quick English meaning.
//
// Results are cached forever in localStorage — definitions don't change and
// network can be slow. Cache key is `koko-dictionary-cache`; value is a map
// of "<lang>:<word>" → entry. We keep failures in the cache too (as null
// meaning fields) so we don't hammer the API on repeated misses.

const CACHE_KEY = "koko-dictionary-cache";
// Bump this when the entry shape changes so old cached payloads get re-fetched
// instead of being returned with missing fields (e.g. no `explanation`).
const CACHE_VERSION = 4;

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

// Lazy-loaded character converters (opencc-js). Only needed for Chinese
// lookups so we don't ship them in the main bundle.
//   - s2t: simplified → traditional (to query moedict.tw, which is keyed by
//     traditional characters)
//   - t2s: traditional → simplified (to convert moedict / Wiktionary output
//     back to simplified, since Singapore reads simplified)
let s2tConverterPromise = null;
async function getS2tConverter() {
  if (!s2tConverterPromise) {
    s2tConverterPromise = import("opencc-js").then((opencc) =>
      opencc.Converter({ from: "cn", to: "tw" })
    );
  }
  return s2tConverterPromise;
}

let t2sConverterPromise = null;
async function getT2sConverter() {
  if (!t2sConverterPromise) {
    t2sConverterPromise = import("opencc-js").then((opencc) =>
      opencc.Converter({ from: "tw", to: "cn" })
    );
  }
  return t2sConverterPromise;
}

async function toSimplified(text) {
  if (!text) return text;
  try {
    const conv = await getT2sConverter();
    return conv(text);
  } catch {
    return text;
  }
}

async function fetchMoedict(word) {
  // moedict.tw: Taiwan MOE's online Chinese dictionary. Modern definitions,
  // free, CORS-enabled. The /uni endpoint returns JSON with `heteronyms`
  // (different readings) each containing `definitions`. We pull the first
  // definition's `def` field — the most common modern sense.
  const url = `https://www.moedict.tw/uni/${encodeURIComponent(word)}.json`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const heteronyms = data?.heteronyms;
  if (!Array.isArray(heteronyms) || heteronyms.length === 0) return null;
  // Concatenate the first 2 definitions across the first heteronym; if the
  // first one is too short, allow more.
  const first = heteronyms[0];
  const defs = first?.definitions;
  if (!Array.isArray(defs) || defs.length === 0) return null;
  const cleanDef = (d) => {
    const raw = (d?.def || "").replace(/<[^>]+>/g, "").trim();
    return raw;
  };
  const top = defs.map(cleanDef).filter(Boolean);
  if (top.length === 0) return null;
  // Prefer up to two short definitions joined; if first one is already long,
  // use it alone.
  const combined = top[0].length > 60 ? top[0] : top.slice(0, 2).join("；");
  return combined;
}

async function fetchWiktionary(word) {
  const url = `https://zh.wiktionary.org/api/rest_v1/page/summary/${encodeURIComponent(word)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const raw = data?.extract;
  if (!raw) return null;
  const cleaned = raw
    .replace(/\[\d+\]/g, "")
    .replace(/\{\{[^}]*\}\}/g, "")
    .trim();
  if (!cleaned) return null;
  return cleaned;
}

async function fetchChineseExplanation(word) {
  // Primary: moedict.tw with the word as-typed (handles traditional input).
  let r = await fetchMoedict(word).catch(() => null);
  if (r) return toSimplified(r);

  // Convert simplified → traditional and retry moedict — Singapore inputs are
  // simplified and moedict is keyed by traditional, so this is the common path.
  try {
    const conv = await getS2tConverter();
    const trad = conv(word);
    if (trad && trad !== word) {
      r = await fetchMoedict(trad).catch(() => null);
      if (r) return toSimplified(r);
    }
  } catch { /* ignore */ }

  // Fallback: Chinese Wiktionary. Output can be either form, so normalise to
  // simplified before returning.
  r = await fetchWiktionary(word).catch(() => null);
  if (r) return toSimplified(r);

  return null;
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
