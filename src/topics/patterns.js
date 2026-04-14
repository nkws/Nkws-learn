import { shuffle } from "../utils/helpers";
export const PATTERNS_INTRO = {
  "pat-1": {
    title: "What is a Pattern?",
    pages: [
      { text: "A pattern is something that repeats over and over!", emoji: "🔴🔵🔴🔵🔴🔵" },
      { text: "Red, blue, red, blue — the next one must be RED!", emoji: "🔴🔵🔴🔵 ➡️ 🔴" },
      { text: "Patterns can use shapes too! Circle, square, circle, square...", emoji: "⭕⬜⭕⬜ ➡️ ⭕" },
      { text: "Patterns can use numbers! 2, 4, 6, 8... what comes next?", emoji: "2, 4, 6, 8 ➡️ 10" },
      { text: "Let's practise finding patterns!", emoji: "🦊 🔁 💪" },
    ],
  },
};

function buildPat1() {
  return shuffle([
    { q: "What is a pattern?", a: "Something that repeats", choices: ["Something that repeats", "A number", "A shape"] },
    { q: "🔴🔵🔴🔵🔴 — What comes next?", a: "🔵", choices: ["🔴", "🔵", "🟢"] },
    { q: "⭐🌙⭐🌙⭐ — What comes next?", a: "🌙", choices: ["⭐", "🌙", "☀️"] },
    { q: "🍎🍌🍎🍌🍎 — What comes next?", a: "🍌", choices: ["🍎", "🍌", "🍇"] },
    { q: "1, 2, 1, 2, 1 — What comes next?", a: "2", choices: ["1", "2", "3"] },
    { q: "A, B, A, B, A — What comes next?", a: "B", choices: ["A", "B", "C"] },
    { q: "🔺⭕🔺⭕🔺 — What comes next?", a: "⭕", choices: ["🔺", "⭕", "⬜"] },
    { q: "Big, small, big, small — What comes next?", a: "Big", choices: ["Big", "Small", "Medium"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPat2() {
  return shuffle([
    { q: "🔴🔴🔵🔴🔴🔵 — What comes next?", a: "🔴", choices: ["🔴", "🔵", "🟢"] },
    { q: "🟢🟡🟡🟢🟡🟡 — What comes next?", a: "🟢", choices: ["🟢", "🟡", "🔴"] },
    { q: "🔵🔵🔴🔵🔵🔴 — What comes next?", a: "🔵", choices: ["🔴", "🔵", "🟡"] },
    { q: "🟡🔴🔵🟡🔴🔵 — What comes next?", a: "🟡", choices: ["🟡", "🔴", "🔵"] },
    { q: "🟢🔴🔴🟢🔴🔴🟢 — What comes next?", a: "🔴", choices: ["🟢", "🔴", "🔵"] },
    { q: "🔵🔵🟡🟡🔵🔵🟡🟡 — What comes next?", a: "🔵", choices: ["🔵", "🟡", "🔴"] },
    { q: "🔴🟢🔵🔴🟢🔵🔴 — What comes next?", a: "🟢", choices: ["🔴", "🟢", "🔵"] },
    { q: "🟡🟡🟡🔴🟡🟡🟡 — What comes next?", a: "🔴", choices: ["🟡", "🔴", "🟢"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPat3() {
  return shuffle([
    { q: "⭕⬜🔺⭕⬜🔺 — What comes next?", a: "⭕", choices: ["⭕", "⬜", "🔺"] },
    { q: "⬜⬜⭕⬜⬜⭕ — What comes next?", a: "⬜", choices: ["⬜", "⭕", "🔺"] },
    { q: "🔺⭕⭕🔺⭕⭕ — What comes next?", a: "🔺", choices: ["🔺", "⭕", "⬜"] },
    { q: "⬜🔺⬜🔺⬜ — What comes next?", a: "🔺", choices: ["⬜", "🔺", "⭕"] },
    { q: "⭕⭕⬜⭕⭕⬜ — What comes next?", a: "⭕", choices: ["⭕", "⬜", "🔺"] },
    { q: "🔺🔺⭕🔺🔺⭕🔺 — What comes next?", a: "🔺", choices: ["🔺", "⭕", "⬜"] },
    { q: "⬜⭕🔺⬜⭕🔺⬜ — What comes next?", a: "⭕", choices: ["⬜", "⭕", "🔺"] },
    { q: "⭕🔺🔺⭕🔺🔺 — What comes next?", a: "⭕", choices: ["⭕", "🔺", "⬜"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPat4() {
  return shuffle([
    { q: "2, 4, 6, 8, __?", a: "10", choices: ["9", "10", "12"] },
    { q: "5, 10, 15, 20, __?", a: "25", choices: ["22", "25", "30"] },
    { q: "1, 3, 5, 7, __?", a: "9", choices: ["8", "9", "10"] },
    { q: "10, 20, 30, 40, __?", a: "50", choices: ["45", "50", "60"] },
    { q: "3, 6, 9, 12, __?", a: "15", choices: ["13", "15", "18"] },
    { q: "1, 2, 3, 4, __?", a: "5", choices: ["4", "5", "6"] },
    { q: "2, 4, 6, __, 10?", a: "8", choices: ["7", "8", "9"] },
    { q: "10, 9, 8, 7, __?", a: "6", choices: ["5", "6", "8"] },
    { q: "20, 18, 16, 14, __?", a: "12", choices: ["10", "12", "13"] },
    { q: "5, 10, 15, __, 25?", a: "20", choices: ["18", "20", "22"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "pat-1": buildPat1, "pat-2": buildPat2, "pat-3": buildPat3, "pat-4": buildPat4,
};

export const PATTERNS_QUESTION_COUNTS = {
  "pat-1": 8, "pat-2": 8, "pat-3": 8, "pat-4": 10,
};

export function buildPatternsQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
