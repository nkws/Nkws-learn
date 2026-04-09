function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ INTRO CONTENT ============

export const PHONICS_INTRO = {
  "ph-1": {
    title: "Letter Sounds",
    pages: [
      {
        text: "Every letter makes a special sound!",
        emoji: "🔤 🔊",
      },
      {
        text: "The letter A says 'ah' like in apple!",
        emoji: "🍎 A = ah",
      },
      {
        text: "The letter B says 'buh' like in ball!",
        emoji: "⚽ B = buh",
      },
      {
        text: "When you know letter sounds, you can read new words!",
        emoji: "🔤 ➡️ 📖",
      },
      {
        text: "Let's learn the sounds of the alphabet!",
        emoji: "🦊 🔊 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildPh1() {
  return shuffle([
    { q: "What sound does A make?", a: "ah", choices: ["ah", "ee", "oh"] },
    { q: "What sound does B make?", a: "buh", choices: ["buh", "duh", "puh"] },
    { q: "What sound does C make?", a: "kuh", choices: ["kuh", "suh", "guh"] },
    { q: "What sound does D make?", a: "duh", choices: ["duh", "buh", "tuh"] },
    { q: "What sound does E make?", a: "eh", choices: ["eh", "ah", "uh"] },
    { q: "What sound does F make?", a: "fuh", choices: ["fuh", "vuh", "puh"] },
    { q: "What sound does G make?", a: "guh", choices: ["guh", "kuh", "juh"] },
    { q: "What sound does H make?", a: "huh", choices: ["huh", "ah", "kuh"] },
    { q: "What sound does I make?", a: "ih", choices: ["ih", "eh", "ah"] },
    { q: "What sound does M make?", a: "muh", choices: ["muh", "nuh", "buh"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildPh2() {
  return shuffle([
    { q: "What sound does N make?", a: "nuh", choices: ["nuh", "muh", "luh"] },
    { q: "What sound does O make?", a: "oh", choices: ["oh", "ah", "uh"] },
    { q: "What sound does P make?", a: "puh", choices: ["puh", "buh", "duh"] },
    { q: "What sound does R make?", a: "ruh", choices: ["ruh", "luh", "wuh"] },
    { q: "What sound does S make?", a: "sss", choices: ["sss", "zzz", "fff"] },
    { q: "What sound does T make?", a: "tuh", choices: ["tuh", "duh", "kuh"] },
    { q: "What sound does U make?", a: "uh", choices: ["uh", "ah", "oh"] },
    { q: "What sound does W make?", a: "wuh", choices: ["wuh", "ruh", "yuh"] },
    { q: "What sound does Y make?", a: "yuh", choices: ["yuh", "wuh", "juh"] },
    { q: "What sound does Z make?", a: "zzz", choices: ["zzz", "sss", "fff"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildPh3() {
  return shuffle([
    { q: "Cat starts with which letter?", a: "C", choices: ["C", "K", "S"] },
    { q: "Dog starts with which letter?", a: "D", choices: ["D", "B", "G"] },
    { q: "Fish starts with which letter?", a: "F", choices: ["F", "V", "P"] },
    { q: "Ball starts with which letter?", a: "B", choices: ["B", "D", "P"] },
    { q: "Sun starts with which letter?", a: "S", choices: ["S", "Z", "C"] },
    { q: "Tree starts with which letter?", a: "T", choices: ["T", "D", "P"] },
    { q: "Moon starts with which letter?", a: "M", choices: ["M", "N", "W"] },
    { q: "Hand starts with which letter?", a: "H", choices: ["H", "A", "N"] },
    { q: "Ring starts with which letter?", a: "R", choices: ["R", "L", "W"] },
    { q: "Jump starts with which letter?", a: "J", choices: ["J", "G", "Y"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildPh4() {
  return shuffle([
    { q: "Cat ends with which letter?", a: "T", choices: ["T", "K", "P"] },
    { q: "Dog ends with which letter?", a: "G", choices: ["G", "D", "K"] },
    { q: "Bus ends with which letter?", a: "S", choices: ["S", "Z", "X"] },
    { q: "Sun ends with which letter?", a: "N", choices: ["N", "M", "D"] },
    { q: "Bed ends with which letter?", a: "D", choices: ["D", "B", "T"] },
    { q: "Cup ends with which letter?", a: "P", choices: ["P", "B", "T"] },
    { q: "Red ends with which letter?", a: "D", choices: ["D", "T", "B"] },
    { q: "Pig ends with which letter?", a: "G", choices: ["G", "K", "D"] },
    { q: "Net ends with which letter?", a: "T", choices: ["T", "D", "N"] },
    { q: "Jam ends with which letter?", a: "M", choices: ["M", "N", "B"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildPh5() {
  return shuffle([
    { q: "Which word rhymes with cat?", a: "hat", choices: ["hat", "dog", "cup"] },
    { q: "Which word rhymes with ball?", a: "tall", choices: ["tall", "run", "bed"] },
    { q: "Which word rhymes with cake?", a: "lake", choices: ["lake", "fish", "tree"] },
    { q: "Which word rhymes with sun?", a: "fun", choices: ["fun", "cat", "bed"] },
    { q: "Which word rhymes with bed?", a: "red", choices: ["red", "big", "cup"] },
    { q: "Which word rhymes with ring?", a: "sing", choices: ["sing", "run", "hat"] },
    { q: "Which word rhymes with top?", a: "hop", choices: ["hop", "sit", "red"] },
    { q: "Which word rhymes with bug?", a: "hug", choices: ["hug", "pen", "box"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const PHONICS_BUILDERS = {
  "ph-1": buildPh1,
  "ph-2": buildPh2,
  "ph-3": buildPh3,
  "ph-4": buildPh4,
  "ph-5": buildPh5,
};

export const PHONICS_QUESTION_COUNTS = {
  "ph-1": 10, "ph-2": 10, "ph-3": 10, "ph-4": 10, "ph-5": 8,
};

export function buildPhonicsQuestions(moduleId) {
  const builder = PHONICS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
