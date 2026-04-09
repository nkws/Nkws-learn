function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ INTRO CONTENT ============

export const PINYIN_INTRO = {
  "py-1": {
    title: "What is Pinyin?",
    pages: [
      {
        text: "Pinyin helps us read Chinese! It uses letters you already know to show how Chinese words sound.",
        emoji: "🔤 ➡️ 🇨🇳",
      },
      {
        text: "Pinyin has two parts: initials (beginning sounds) and finals (ending sounds).",
        emoji: "🅱️ + 🅰️ = 🗣️",
      },
      {
        text: "For example, 'b' + 'a' = 'ba' which means dad in Chinese!",
        emoji: "b + a = 爸",
      },
      {
        text: "Let's start by learning some initials! These are the sounds at the beginning of a word.",
        emoji: "🦊 🗣️ 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildPy1() {
  return shuffle([
    { q: "Which pinyin initial sounds like 'b' in 'boy'?", a: "b", choices: ["b", "p", "d"] },
    { q: "Which pinyin initial sounds like 'p' in 'park'?", a: "p", choices: ["p", "b", "t"] },
    { q: "Which pinyin initial sounds like 'm' in 'mother'?", a: "m", choices: ["m", "n", "f"] },
    { q: "Which pinyin initial sounds like 'f' in 'fun'?", a: "f", choices: ["f", "h", "p"] },
    { q: "What initial does 'bà' (dad) start with?", a: "b", choices: ["b", "d", "p"] },
    { q: "What initial does 'māo' (cat) start with?", a: "m", choices: ["m", "n", "l"] },
    { q: "What initial does 'fēi' (fly) start with?", a: "f", choices: ["f", "h", "b"] },
    { q: "What initial does 'pǎo' (run) start with?", a: "p", choices: ["p", "b", "m"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildPy2() {
  return shuffle([
    { q: "Which pinyin initial sounds like 'd' in 'dog'?", a: "d", choices: ["d", "t", "b"] },
    { q: "Which pinyin initial sounds like 't' in 'top'?", a: "t", choices: ["t", "d", "k"] },
    { q: "Which pinyin initial sounds like 'n' in 'no'?", a: "n", choices: ["n", "m", "l"] },
    { q: "Which pinyin initial sounds like 'l' in 'love'?", a: "l", choices: ["l", "n", "r"] },
    { q: "What initial does 'dà' (big) start with?", a: "d", choices: ["d", "t", "g"] },
    { q: "What initial does 'tā' (he/she) start with?", a: "t", choices: ["t", "d", "n"] },
    { q: "What initial does 'nǐ' (you) start with?", a: "n", choices: ["n", "l", "m"] },
    { q: "What initial does 'lái' (come) start with?", a: "l", choices: ["l", "n", "r"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildPy3() {
  return shuffle([
    { q: "Which pinyin initial sounds like 'g' in 'go'?", a: "g", choices: ["g", "k", "h"] },
    { q: "Which pinyin initial sounds like 'k' in 'kite'?", a: "k", choices: ["k", "g", "h"] },
    { q: "Which pinyin initial sounds like 'h' in 'hat'?", a: "h", choices: ["h", "f", "k"] },
    { q: "What initial does 'gǒu' (dog) start with?", a: "g", choices: ["g", "k", "d"] },
    { q: "What initial does 'kàn' (look) start with?", a: "k", choices: ["k", "g", "h"] },
    { q: "What initial does 'hǎo' (good) start with?", a: "h", choices: ["h", "k", "f"] },
    { q: "What initial does 'gē' (song) start with?", a: "g", choices: ["g", "h", "k"] },
    { q: "What initial does 'hē' (drink) start with?", a: "h", choices: ["h", "g", "k"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildPy4() {
  return shuffle([
    { q: "Which final sounds like 'ah'?", a: "a", choices: ["a", "o", "e"] },
    { q: "Which final sounds like 'or' without the r?", a: "o", choices: ["o", "u", "e"] },
    { q: "Which final sounds like 'uh'?", a: "e", choices: ["e", "a", "i"] },
    { q: "Which final sounds like 'ee' in 'see'?", a: "i", choices: ["i", "u", "ü"] },
    { q: "Which final sounds like 'oo' in 'food'?", a: "u", choices: ["u", "ü", "o"] },
    { q: "Which final has two dots above it?", a: "ü", choices: ["ü", "u", "i"] },
    { q: "What final is in 'mā' (mum)?", a: "a", choices: ["a", "e", "o"] },
    { q: "What final is in 'yú' (fish)?", a: "ü", choices: ["ü", "u", "i"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildPy5() {
  return shuffle([
    { q: "First tone is...", a: "high and flat", choices: ["high and flat", "rising", "falling"] },
    { q: "Second tone is...", a: "rising", choices: ["rising", "falling", "high and flat"] },
    { q: "Third tone is...", a: "dipping then rising", choices: ["dipping then rising", "rising", "falling"] },
    { q: "Fourth tone is...", a: "sharp and falling", choices: ["sharp and falling", "high and flat", "rising"] },
    { q: "Which tone mark looks like a flat line (ā)?", a: "First tone", choices: ["First tone", "Second tone", "Fourth tone"] },
    { q: "Which tone mark goes up (á)?", a: "Second tone", choices: ["Second tone", "First tone", "Third tone"] },
    { q: "Which tone mark dips down then up (ǎ)?", a: "Third tone", choices: ["Third tone", "Second tone", "Fourth tone"] },
    { q: "Which tone mark goes down (à)?", a: "Fourth tone", choices: ["Fourth tone", "First tone", "Third tone"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const PINYIN_BUILDERS = {
  "py-1": buildPy1,
  "py-2": buildPy2,
  "py-3": buildPy3,
  "py-4": buildPy4,
  "py-5": buildPy5,
};

export const PINYIN_QUESTION_COUNTS = {
  "py-1": 8, "py-2": 8, "py-3": 8, "py-4": 8, "py-5": 8,
};

export function buildPinyinQuestions(moduleId) {
  const builder = PINYIN_BUILDERS[moduleId];
  return builder ? builder() : [];
}
