import { shuffle } from "../../utils/helpers";

// Kindergarten English — beginning sounds and rhyming, picture-first. Koko
// reads the prompt aloud; the child taps the matching picture.

export const K_ENGLISH_INTRO = {
  "kg-eng1": {
    title: "Beginning Sounds",
    pages: [
      { text: "Every word starts with a sound. Ball starts with 'b'. Sun starts with 's'.", emoji: "⚽ ☀️" },
      { text: "Listen to the sound Koko says, then tap the picture that starts with it!", emoji: "🦊 🔊" },
    ],
  },
};

const PIC_ICONS = {
  Ball: "⚽", Cat: "🐱", Sun: "☀️", Dog: "🐶", Mouse: "🐭", Fish: "🐟",
  Hat: "🎩", Bat: "🦇", Star: "⭐", Bee: "🐝", Tree: "🌳", Car: "🚗",
};

function buildKgEng1() {
  // Beginning sounds — "Which word starts with the /_/ sound?"
  return shuffle([
    { q: "Which word starts with the 'b' sound? (buh)", a: "Ball", choices: ["Ball", "Cat", "Sun"] },
    { q: "Which word starts with the 's' sound? (sss)", a: "Sun", choices: ["Sun", "Dog", "Fish"] },
    { q: "Which word starts with the 'd' sound? (duh)", a: "Dog", choices: ["Dog", "Cat", "Ball"] },
    { q: "Which word starts with the 'c' sound? (kuh)", a: "Cat", choices: ["Cat", "Sun", "Mouse"] },
    { q: "Which word starts with the 'm' sound? (mmm)", a: "Mouse", choices: ["Mouse", "Fish", "Dog"] },
    { q: "Which word starts with the 'f' sound? (fff)", a: "Fish", choices: ["Fish", "Ball", "Cat"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: PIC_ICONS,
  }));
}

function buildKgEng2() {
  // Rhyming — "Which word rhymes with __?"
  return shuffle([
    { q: "Which word rhymes with 'cat'? [PIC:🐱]", a: "Hat", choices: ["Hat", "Dog", "Sun"] },
    { q: "Which word rhymes with 'bee'? [PIC:🐝]", a: "Tree", choices: ["Tree", "Car", "Fish"] },
    { q: "Which word rhymes with 'bat'? [PIC:🦇]", a: "Hat", choices: ["Hat", "Star", "Dog"] },
    { q: "Which word rhymes with 'car'? [PIC:🚗]", a: "Star", choices: ["Star", "Cat", "Bee"] },
    { q: "Which word rhymes with 'fish'? [PIC:🐟]", a: "Dish", choices: ["Dish", "Ball", "Tree"] },
    { q: "Which word rhymes with 'sun'? [PIC:☀️]", a: "Bun", choices: ["Bun", "Cat", "Car"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: { Hat: "🎩", Dog: "🐶", Sun: "☀️", Tree: "🌳", Car: "🚗", Fish: "🐟", Star: "⭐", Cat: "🐱", Bee: "🐝", Ball: "⚽", Dish: "🍽️", Bun: "🍞" },
  }));
}

const BUILDERS = { "kg-eng1": buildKgEng1, "kg-eng2": buildKgEng2 };
export const K_ENGLISH_QUESTION_COUNTS = { "kg-eng1": 6, "kg-eng2": 6 };
export function buildKgEnglishQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
