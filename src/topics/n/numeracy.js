import { shuffle } from "../../utils/helpers";

// Nursery Numeracy — counting to 5 and colours, picture-first for the very
// youngest (ages 3-4). Koko reads the prompt; the child taps a big picture.

export const N_NUMERACY_INTRO = {
  "ns-num1": {
    title: "One, Two, Three!",
    pages: [
      { text: "Let's count together. Point and say: one, two, three!", emoji: "🐟🐟🐟" },
      { text: "Listen to Koko, count, and tap the number. Yay!", emoji: "🦊 🔢" },
    ],
  },
};

const COLOUR_ICONS = { Red: "🔴", Blue: "🔵", Green: "🟢", Yellow: "🟡" };

function buildNsNum1() {
  return shuffle([
    { q: "[PIC:🐟] How many fish?", a: "1", choices: ["1", "2", "3"] },
    { q: "[PIC:🐟🐟] How many fish?", a: "2", choices: ["1", "2", "3"] },
    { q: "[PIC:🍎🍎🍎] How many apples?", a: "3", choices: ["2", "3", "4"] },
    { q: "[PIC:⭐⭐⭐⭐] How many stars?", a: "4", choices: ["3", "4", "5"] },
    { q: "[PIC:🌸🌸🌸🌸🌸] How many flowers?", a: "5", choices: ["4", "5", "6"] },
    { q: "[PIC:🐤🐤] How many chicks?", a: "2", choices: ["1", "2", "3"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildNsNum2() {
  return shuffle([
    { q: "[PIC:🔴] What colour is this?", a: "Red", choices: ["Red", "Blue", "Green"] },
    { q: "[PIC:🔵] What colour is this?", a: "Blue", choices: ["Blue", "Red", "Yellow"] },
    { q: "[PIC:🟢] What colour is this?", a: "Green", choices: ["Green", "Yellow", "Blue"] },
    { q: "[PIC:🟡] What colour is this?", a: "Yellow", choices: ["Yellow", "Red", "Green"] },
    { q: "[PIC:🍎] What colour is the apple?", a: "Red", choices: ["Red", "Blue", "Yellow"] },
    { q: "[PIC:🍌] What colour is the banana?", a: "Yellow", choices: ["Yellow", "Green", "Blue"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: COLOUR_ICONS,
  }));
}

const BUILDERS = { "ns-num1": buildNsNum1, "ns-num2": buildNsNum2 };
export const N_NUMERACY_QUESTION_COUNTS = { "ns-num1": 6, "ns-num2": 6 };
export function buildNsNumeracyQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
