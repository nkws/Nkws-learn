// Practice categories for spelling/听写/pinyin lists. Each list belongs to one
// kind, and the kind is independent: a pinyin list is a separate collection
// from a 听写 (character-dictation) list, even though both hold Chinese words.
//
//   spelling — English spelling (write the word on the canvas)
//   tingxie  — 中文听写: hear the word, write the Chinese characters
//   pinyin   — 汉语拼音: hear the word, write its hanyu pinyin
export const KIND = { SPELLING: "spelling", TINGXIE: "tingxie", PINYIN: "pinyin" };

// The test mode each kind launches (consumed by SpellingTestScreen).
export const KIND_MODE = {
  spelling: "write",
  tingxie: "character",
  pinyin: "pinyin",
};

// The TTS / voice language each kind uses.
export const KIND_LANG = {
  spelling: "en",
  tingxie: "zh",
  pinyin: "zh",
};

// A list's kind. Lists created before kinds existed stored only `lang`; derive
// their kind so they keep working — English → spelling, Chinese → 听写. Pinyin
// is a new category, so no legacy list is ever silently treated as pinyin.
export function listKind(list) {
  if (list?.kind) return list.kind;
  return list?.lang === "en" ? KIND.SPELLING : KIND.TINGXIE;
}
