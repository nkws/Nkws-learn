// Pinyin lookup for Chinese spelling-list words, derived locally via pinyin-pro.
// There is no network dictionary: spelling lists are for practising spelling,
// not vocabulary, so English words need no lookup at all, and no free source
// gave acceptable Chinese definitions. The Learn card shows word + pinyin + TTS.
//
// Cached forever in localStorage (`koko-dictionary-cache`) — pinyin doesn't
// change. Value is a map of "zh:<word>" → { lang, word, pinyin }.

const CACHE_KEY = "koko-dictionary-cache";
// Bump when the entry shape changes so old cached payloads are dropped.
// v6: removed English dictionary entries (definitions/phonetic) entirely.
const CACHE_VERSION = 6;

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

function cacheGet(word) {
  const cache = loadCache();
  return cache[`zh:${word}`] || null;
}

function cachePut(word, entry) {
  const cache = loadCache();
  cache[`zh:${word}`] = entry;
  saveCache(cache);
}

// Returns { lang: "zh", word, pinyin } for Chinese words, or null otherwise
// (English words need no lookup).
export async function lookupWord(word, lang) {
  if (!word || lang !== "zh") return null;
  const cached = cacheGet(word);
  if (cached) return cached;

  let pinyinStr = null;
  try {
    const { pinyin } = await import("pinyin-pro");
    pinyinStr = pinyin(word, { toneType: "symbol", type: "string" });
  } catch { /* ignore */ }
  const entry = { lang: "zh", word, pinyin: pinyinStr };
  cachePut(word, entry);
  return entry;
}
