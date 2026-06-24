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
    { q: "A pizza cut into 2 equal pieces. Each piece is?", a: "One half", choices: ["One half", "One third", "One quarter"], explain: "A fraction is one of the equal parts of a whole. Cut a whole into 2 equal parts and each part is one half." },
    { q: "A cake cut into 4 equal pieces. Each piece is?", a: "One quarter", choices: ["One half", "One third", "One quarter"], explain: "A fraction names one equal part of a whole. Cut a whole into 4 equal parts and each part is one quarter." },
    { q: "A pie cut into 3 equal pieces. Each piece is?", a: "One third", choices: ["One half", "One third", "One quarter"], explain: "A fraction is one equal part of a whole. Split a whole into 3 equal parts and each part is one third." },
    { q: "What does 'half' mean?", a: "1 of 2 equal parts", choices: ["1 of 2 equal parts", "1 of 3 equal parts", "1 of 4 equal parts"], explain: "A fraction is one of the equal parts of a whole. A half means the whole was split into 2 equal parts and you take 1." },
    { q: "How many halves make a whole?", a: "2", choices: ["1", "2", "4"], explain: "Equal parts join back into the whole they came from. A half is 1 of 2 equal parts, so 2 halves rebuild the whole." },
    { q: "How many quarters make a whole?", a: "4", choices: ["2", "3", "4"], explain: "All the equal parts together make the whole again. A quarter is 1 of 4 equal parts, so it takes 4 quarters." },
    { q: "A fraction is a __ of a whole.", a: "Part", choices: ["Part", "Whole", "Double"], explain: "A fraction is one of the equal parts of a whole, never the whole thing and never more than it." },
    { q: "How many thirds make a whole?", a: "3", choices: ["2", "3", "4"], explain: "The equal parts together rebuild the whole. A third is 1 of 3 equal parts, so 3 thirds make the whole." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildFr2() {
  // Halves and Quarters
  return shuffle([
    { q: "What is half of 8?", a: "4", choices: ["3", "4", "5"], explain: "A half means splitting a whole into 2 equal parts. Share 8 into 2 equal groups and each is 4, so half of 8 is 4." },
    { q: "What is half of 6?", a: "3", choices: ["2", "3", "4"], explain: "Finding a half means sharing into 2 equal parts. Split 6 into 2 equal groups and each is 3, so half of 6 is 3." },
    { q: "What is half of 10?", a: "5", choices: ["4", "5", "6"], explain: "A half splits a whole into 2 equal parts. Share 10 into 2 equal groups and each is 5, so half of 10 is 5." },
    { q: "What is half of 4?", a: "2", choices: ["1", "2", "3"], explain: "A half means 2 equal parts. Split 4 into 2 equal groups and each one is 2, so half of 4 is 2." },
    { q: "What is half of 12?", a: "6", choices: ["5", "6", "7"], explain: "Halving shares a whole into 2 equal parts. Split 12 into 2 equal groups and each is 6, so half of 12 is 6." },
    { q: "What is a quarter of 8?", a: "2", choices: ["1", "2", "3"], explain: "A quarter means splitting a whole into 4 equal parts. Share 8 into 4 equal groups and each is 2, so a quarter of 8 is 2." },
    { q: "What is a quarter of 12?", a: "3", choices: ["2", "3", "4"], explain: "A quarter is 1 of 4 equal parts. Split 12 into 4 equal groups and each is 3, so a quarter of 12 is 3." },
    { q: "What is a quarter of 20?", a: "5", choices: ["4", "5", "6"], explain: "A quarter splits a whole into 4 equal parts. Share 20 into 4 equal groups and each is 5, so a quarter of 20 is 5." },
    { q: "What is half of 20?", a: "10", choices: ["8", "10", "12"], explain: "Halving shares a whole into 2 equal parts. Split 20 into 2 equal groups and each is 10, so half of 20 is 10." },
    { q: "What is a quarter of 16?", a: "4", choices: ["3", "4", "5"], explain: "A quarter is 1 of 4 equal parts. Split 16 into 4 equal groups and each is 4, so a quarter of 16 is 4." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildFr3() {
  // Thirds
  return shuffle([
    { q: "What is one third of 9?", a: "3", choices: ["2", "3", "4"], explain: "A third means splitting a whole into 3 equal parts. Share 9 into 3 equal groups and each is 3, so a third of 9 is 3." },
    { q: "What is one third of 6?", a: "2", choices: ["1", "2", "3"], explain: "A third is 1 of 3 equal parts. Split 6 into 3 equal groups and each is 2, so a third of 6 is 2." },
    { q: "What is one third of 12?", a: "4", choices: ["3", "4", "5"], explain: "A third splits a whole into 3 equal parts. Share 12 into 3 equal groups and each is 4, so a third of 12 is 4." },
    { q: "What is one third of 15?", a: "5", choices: ["4", "5", "6"], explain: "A third means 3 equal parts. Split 15 into 3 equal groups and each is 5, so a third of 15 is 5." },
    { q: "What is one third of 3?", a: "1", choices: ["1", "2", "3"], explain: "A third is 1 of 3 equal parts. Split 3 into 3 equal groups and each is 1, so a third of 3 is 1." },
    { q: "What is one third of 18?", a: "6", choices: ["5", "6", "7"], explain: "A third splits a whole into 3 equal parts. Share 18 into 3 equal groups and each is 6, so a third of 18 is 6." },
    { q: "What is one third of 21?", a: "7", choices: ["6", "7", "8"], explain: "A third means 3 equal parts. Split 21 into 3 equal groups and each is 7, so a third of 21 is 7." },
    { q: "What is one third of 24?", a: "8", choices: ["7", "8", "9"], explain: "A third is 1 of 3 equal parts. Split 24 into 3 equal groups and each is 8, so a third of 24 is 8." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
