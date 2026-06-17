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
    { q: "What is a pattern?", a: "Something that repeats", choices: ["Something that repeats", "A number", "A shape"], explain: "A pattern is something that happens over and over in the same order, like red, blue, red, blue. So a pattern is something that repeats." },
    { q: "🔴🔵🔴🔵🔴 — What comes next?", a: "🔵", choices: ["🔴", "🔵", "🟢"], explain: "A pattern repeats in the same order. It goes red, blue, red, blue, red, so after red comes blue next." },
    { q: "⭐🌙⭐🌙⭐ — What comes next?", a: "🌙", choices: ["⭐", "🌙", "☀️"], explain: "A pattern repeats in the same order. It goes star, moon, star, moon, star, so after the star comes the moon next." },
    { q: "🍎🍌🍎🍌🍎 — What comes next?", a: "🍌", choices: ["🍎", "🍌", "🍇"], explain: "A pattern repeats in the same order. It goes apple, banana, apple, banana, apple, so the banana comes next." },
    { q: "1, 2, 1, 2, 1 — What comes next?", a: "2", choices: ["1", "2", "3"], explain: "A pattern repeats in the same order. It goes one, two, one, two, one, so the number 2 comes next." },
    { q: "A, B, A, B, A — What comes next?", a: "B", choices: ["A", "B", "C"], explain: "A pattern repeats in the same order. It goes A, B, A, B, A, so the letter B comes next." },
    { q: "🔺⭕🔺⭕🔺 — What comes next?", a: "⭕", choices: ["🔺", "⭕", "⬜"], explain: "A pattern repeats in the same order. It goes triangle, circle, triangle, circle, triangle, so the circle comes next." },
    { q: "Big, small, big, small — What comes next?", a: "Big", choices: ["Big", "Small", "Medium"], explain: "A pattern repeats in the same order. It goes big, small, big, small, so after small it starts again with big." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPat2() {
  return shuffle([
    { q: "🔴🔴🔵🔴🔴🔵 — What comes next?", a: "🔴", choices: ["🔴", "🔵", "🟢"], explain: "Find the part that repeats: here it is red, red, blue. After each blue the group starts again, so red comes next." },
    { q: "🟢🟡🟡🟢🟡🟡 — What comes next?", a: "🟢", choices: ["🟢", "🟡", "🔴"], explain: "Find the part that repeats: here it is green, yellow, yellow. After the last yellow the group starts again, so green comes next." },
    { q: "🔵🔵🔴🔵🔵🔴 — What comes next?", a: "🔵", choices: ["🔴", "🔵", "🟡"], explain: "Find the part that repeats: here it is blue, blue, red. After each red the group starts again, so blue comes next." },
    { q: "🟡🔴🔵🟡🔴🔵 — What comes next?", a: "🟡", choices: ["🟡", "🔴", "🔵"], explain: "Find the part that repeats: here it is yellow, red, blue. After the blue the group starts again, so yellow comes next." },
    { q: "🟢🔴🔴🟢🔴🔴🟢 — What comes next?", a: "🔴", choices: ["🟢", "🔴", "🔵"], explain: "Find the part that repeats: here it is green, red, red. We just had a green, so the next two are red, red — red comes next." },
    { q: "🔵🔵🟡🟡🔵🔵🟡🟡 — What comes next?", a: "🔵", choices: ["🔵", "🟡", "🔴"], explain: "Find the part that repeats: here it is blue, blue, yellow, yellow. After the last yellow the group starts again, so blue comes next." },
    { q: "🔴🟢🔵🔴🟢🔵🔴 — What comes next?", a: "🟢", choices: ["🔴", "🟢", "🔵"], explain: "Find the part that repeats: here it is red, green, blue. We just had a red, so green comes next in the group." },
    { q: "🟡🟡🟡🔴🟡🟡🟡 — What comes next?", a: "🔴", choices: ["🟡", "🔴", "🟢"], explain: "Find the part that repeats: here it is yellow, yellow, yellow, red. We just had three yellows, so red comes next." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPat3() {
  return shuffle([
    { q: "⭕⬜🔺⭕⬜🔺 — What comes next?", a: "⭕", choices: ["⭕", "⬜", "🔺"], explain: "Find the part that repeats: here it is circle, square, triangle. After the triangle the group starts again, so the circle comes next." },
    { q: "⬜⬜⭕⬜⬜⭕ — What comes next?", a: "⬜", choices: ["⬜", "⭕", "🔺"], explain: "Find the part that repeats: here it is square, square, circle. After the circle the group starts again, so the square comes next." },
    { q: "🔺⭕⭕🔺⭕⭕ — What comes next?", a: "🔺", choices: ["🔺", "⭕", "⬜"], explain: "Find the part that repeats: here it is triangle, circle, circle. After the last circle the group starts again, so the triangle comes next." },
    { q: "⬜🔺⬜🔺⬜ — What comes next?", a: "🔺", choices: ["⬜", "🔺", "⭕"], explain: "Find the part that repeats: here it is square, triangle. We just had a square, so the triangle comes next." },
    { q: "⭕⭕⬜⭕⭕⬜ — What comes next?", a: "⭕", choices: ["⭕", "⬜", "🔺"], explain: "Find the part that repeats: here it is circle, circle, square. After the square the group starts again, so the circle comes next." },
    { q: "🔺🔺⭕🔺🔺⭕🔺 — What comes next?", a: "🔺", choices: ["🔺", "⭕", "⬜"], explain: "Find the part that repeats: here it is triangle, triangle, circle. We just had one triangle, so another triangle comes next." },
    { q: "⬜⭕🔺⬜⭕🔺⬜ — What comes next?", a: "⭕", choices: ["⬜", "⭕", "🔺"], explain: "Find the part that repeats: here it is square, circle, triangle. We just had a square, so the circle comes next." },
    { q: "⭕🔺🔺⭕🔺🔺 — What comes next?", a: "⭕", choices: ["⭕", "🔺", "⬜"], explain: "Find the part that repeats: here it is circle, triangle, triangle. After the last triangle the group starts again, so the circle comes next." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPat4() {
  return shuffle([
    { q: "2, 4, 6, 8, __?", a: "10", choices: ["9", "10", "12"], explain: "A number pattern grows by the same jump each time. Each number is 2 more than the one before, and 8 + 2 = 10." },
    { q: "5, 10, 15, 20, __?", a: "25", choices: ["22", "25", "30"], explain: "A number pattern grows by the same jump each time. Each number is 5 more than the one before, and 20 + 5 = 25." },
    { q: "1, 3, 5, 7, __?", a: "9", choices: ["8", "9", "10"], explain: "A number pattern grows by the same jump each time. Each number is 2 more than the one before, and 7 + 2 = 9." },
    { q: "10, 20, 30, 40, __?", a: "50", choices: ["45", "50", "60"], explain: "A number pattern grows by the same jump each time. Each number is 10 more than the one before, and 40 + 10 = 50." },
    { q: "3, 6, 9, 12, __?", a: "15", choices: ["13", "15", "18"], explain: "A number pattern grows by the same jump each time. Each number is 3 more than the one before, and 12 + 3 = 15." },
    { q: "1, 2, 3, 4, __?", a: "5", choices: ["4", "5", "6"], explain: "A number pattern grows by the same jump each time. Each number is 1 more than the one before, and 4 + 1 = 5." },
    { q: "2, 4, 6, __, 10?", a: "8", choices: ["7", "8", "9"], explain: "A number pattern jumps by the same amount each time. The numbers go up by 2, so the missing one is 6 + 2 = 8." },
    { q: "10, 9, 8, 7, __?", a: "6", choices: ["5", "6", "8"], explain: "A number pattern can also count down by the same jump. Each number is 1 less than the one before, and 7 − 1 = 6." },
    { q: "20, 18, 16, 14, __?", a: "12", choices: ["10", "12", "13"], explain: "A number pattern can also count down by the same jump. Each number is 2 less than the one before, and 14 − 2 = 12." },
    { q: "5, 10, 15, __, 25?", a: "20", choices: ["18", "20", "22"], explain: "A number pattern jumps by the same amount each time. The numbers go up by 5, so the missing one is 15 + 5 = 20." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
