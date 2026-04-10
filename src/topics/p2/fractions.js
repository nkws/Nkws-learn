import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P2_FRACTIONS_INTRO = {
  "p2m-fr1": {
    title: "What is a Fraction?",
    pages: [
      { text: "A fraction is a part of a whole! When we cut something into equal pieces, each piece is a fraction.", emoji: "🍕 ➡️ 🍕🍕" },
      { text: "A pizza cut into 2 equal pieces — each piece is one half (1/2)!", emoji: "½ 🍕" },
      { text: "A pizza cut into 4 equal pieces — each piece is one quarter (1/4)!", emoji: "¼ 🍕" },
      { text: "A cake cut into 3 equal pieces — each piece is one third (1/3)!", emoji: "⅓ 🎂" },
      { text: "Let's learn about fractions! You can do it!", emoji: "🦊 🍕 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildFr1() {
  return shuffle([
    { q: "A pizza cut into 2 equal pieces. Each piece is?", a: "One half", choices: ["One half", "One third", "One quarter"] },
    { q: "A cake cut into 4 equal pieces. Each piece is?", a: "One quarter", choices: ["One half", "One third", "One quarter"] },
    { q: "A pie cut into 3 equal pieces. Each piece is?", a: "One third", choices: ["One half", "One third", "One quarter"] },
    { q: "What does 'half' mean?", a: "1 of 2 equal parts", choices: ["1 of 2 equal parts", "1 of 3 equal parts", "1 of 4 equal parts"] },
    { q: "How many halves make a whole?", a: "2", choices: ["1", "2", "4"] },
    { q: "How many quarters make a whole?", a: "4", choices: ["2", "3", "4"] },
    { q: "A fraction is a __ of a whole.", a: "Part", choices: ["Part", "Whole", "Double"] },
    { q: "How many thirds make a whole?", a: "3", choices: ["2", "3", "4"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildFr2() {
  // Halves and Quarters
  return shuffle([
    { q: "What is half of 8?", a: "4", choices: ["3", "4", "5"] },
    { q: "What is half of 6?", a: "3", choices: ["2", "3", "4"] },
    { q: "What is half of 10?", a: "5", choices: ["4", "5", "6"] },
    { q: "What is half of 4?", a: "2", choices: ["1", "2", "3"] },
    { q: "What is half of 12?", a: "6", choices: ["5", "6", "7"] },
    { q: "What is a quarter of 8?", a: "2", choices: ["1", "2", "3"] },
    { q: "What is a quarter of 12?", a: "3", choices: ["2", "3", "4"] },
    { q: "What is a quarter of 20?", a: "5", choices: ["4", "5", "6"] },
    { q: "What is half of 20?", a: "10", choices: ["8", "10", "12"] },
    { q: "What is a quarter of 16?", a: "4", choices: ["3", "4", "5"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildFr3() {
  // Thirds
  return shuffle([
    { q: "What is one third of 9?", a: "3", choices: ["2", "3", "4"] },
    { q: "What is one third of 6?", a: "2", choices: ["1", "2", "3"] },
    { q: "What is one third of 12?", a: "4", choices: ["3", "4", "5"] },
    { q: "What is one third of 15?", a: "5", choices: ["4", "5", "6"] },
    { q: "What is one third of 3?", a: "1", choices: ["1", "2", "3"] },
    { q: "What is one third of 18?", a: "6", choices: ["5", "6", "7"] },
    { q: "What is one third of 21?", a: "7", choices: ["6", "7", "8"] },
    { q: "What is one third of 24?", a: "8", choices: ["7", "8", "9"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "p2m-fr1": buildFr1, "p2m-fr2": buildFr2, "p2m-fr3": buildFr3,
};

export const P2_FRACTIONS_QUESTION_COUNTS = {
  "p2m-fr1": 8, "p2m-fr2": 10, "p2m-fr3": 8,
};

export function buildFractionsQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
