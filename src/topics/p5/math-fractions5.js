import { shuffle } from "../../utils/helpers";

export const P5_MATH_FRACTIONS_INTRO = {
  "p5m-fr1": {
    title: "Unlike Fractions",
    pages: [
      { text: "To add or subtract fractions with DIFFERENT denominators, first find a common denominator.", emoji: "½ + ⅓ = ?" },
      { text: "Example: 1/2 + 1/3. The LCD of 2 and 3 is 6. So 1/2 = 3/6 and 1/3 = 2/6. Answer: 3/6 + 2/6 = 5/6!", emoji: "3/6 + 2/6 = 5/6" },
      { text: "For subtraction: 3/4 − 1/3. LCD of 4 and 3 is 12. So 9/12 − 4/12 = 5/12.", emoji: "9/12 − 4/12 = 5/12" },
    ],
  },
  "p5m-fr2": {
    title: "Multiplying & Dividing Fractions",
    pages: [
      { text: "To multiply fractions: multiply tops × tops and bottoms × bottoms. 2/3 × 4/5 = 8/15.", emoji: "× tops, × bottoms" },
      { text: "To divide fractions: flip the second fraction and multiply. 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2.", emoji: "÷ → flip → ×" },
      { text: "Always simplify your answer! 6/4 becomes 3/2 or 1½.", emoji: "✅ simplify" },
    ],
  },
};

function buildP5mFr1() {
  return shuffle([
    { q: "1/2 + 1/3 = ?", a: "5/6", choices: ["5/6", "2/5", "1/5"], explain: "You can only add fractions when the pieces are the same size, so first find a common denominator. The LCD of 2 and 3 is 6: 1/2 = 3/6 and 1/3 = 2/6, so 3/6 + 2/6 = 5/6." },
    { q: "3/4 − 1/3 = ?", a: "5/12", choices: ["5/12", "2/1", "2/12"], explain: "Fractions must share a denominator before you subtract, since the pieces have to match. The LCD of 4 and 3 is 12: 9/12 − 4/12 = 5/12." },
    { q: "2/5 + 1/4 = ?", a: "13/20", choices: ["13/20", "3/9", "3/20"], explain: "Equal-sized pieces are needed to add, so use a common denominator. The LCD of 5 and 4 is 20: 8/20 + 5/20 = 13/20." },
    { q: "5/6 − 1/3 = ?", a: "1/2", choices: ["1/2", "4/3", "4/6"], explain: "Make the denominators match first: rewrite 1/3 as 2/6. Then 5/6 − 2/6 = 3/6, and always simplify — divide top and bottom by 3 to get 1/2." },
    { q: "1/4 + 2/3 = ?", a: "11/12", choices: ["11/12", "3/7", "3/12"], explain: "Adding needs equal pieces, so find a common denominator. The LCD of 4 and 3 is 12: 3/12 + 8/12 = 11/12." },
    { q: "7/8 − 1/2 = ?", a: "3/8", choices: ["3/8", "6/6", "6/8"], explain: "Match the denominators before subtracting: 1/2 = 4/8. Then 7/8 − 4/8 = 3/8." },
    { q: "1/3 + 1/6 = ?", a: "1/2", choices: ["1/2", "2/9", "1/9"], explain: "Find a common denominator so the pieces match: 1/3 = 2/6. Then 2/6 + 1/6 = 3/6, and simplify by dividing top and bottom by 3 to get 1/2." },
    { q: "3/5 − 1/4 = ?", a: "7/20", choices: ["7/20", "2/1", "2/20"], explain: "Subtraction needs equal-sized pieces, so use the common denominator. The LCD of 5 and 4 is 20: 12/20 − 5/20 = 7/20." },
    { q: "There are 20 sweets. Ali eats 1/4 and Ben eats 1/5. What fraction did they eat altogether?", a: "9/20", choices: ["9/20", "2/9", "5/20"], explain: "'Altogether' means add the fractions, but only over a common denominator. The LCD of 4 and 5 is 20: 5/20 + 4/20 = 9/20." },
    { q: "A ribbon is 3/4 m long. If 1/3 m is cut off, how much is left?", a: "5/12 m", choices: ["5/12 m", "2/1 m", "1/4 m"], explain: "'How much is left' means subtract, and you need a common denominator first. The LCD of 4 and 3 is 12: 9/12 − 4/12 = 5/12 m." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5mFr2() {
  return shuffle([
    { q: "2/3 × 3/4 = ?", a: "1/2", choices: ["1/2", "5/7", "6/12"], explain: "Multiply fractions straight across — tops × tops, bottoms × bottoms: (2×3)/(3×4) = 6/12. Always simplify — divide top and bottom by 6 — giving 1/2." },
    { q: "1/2 × 4/5 = ?", a: "2/5", choices: ["2/5", "5/10", "4/10"], explain: "Multiply across the tops and across the bottoms: (1×4)/(2×5) = 4/10. Always simplify — divide top and bottom by 2 — to get 2/5." },
    { q: "3/4 ÷ 1/2 = ?", a: "3/2", choices: ["3/2", "3/8", "1/2"], explain: "Dividing by a fraction is the same as multiplying by its reciprocal — flip the second fraction. So 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2." },
    { q: "2/5 ÷ 2/3 = ?", a: "3/5", choices: ["3/5", "4/15", "4/8"], explain: "To divide by a fraction, flip it and multiply: 2/5 × 3/2 = 6/10. Always simplify — divide top and bottom by 2 — giving 3/5." },
    { q: "5/6 × 3/10 = ?", a: "1/4", choices: ["1/4", "15/60", "8/16"], explain: "Multiply fractions straight across: (5×3)/(6×10) = 15/60. Always simplify — divide top and bottom by 15 — giving 1/4." },
    { q: "4/7 ÷ 2 = ?", a: "2/7", choices: ["2/7", "8/7", "4/9"], explain: "Dividing by a whole number means multiplying by its reciprocal, 1/2: 4/7 × 1/2 = 4/14. Simplify by dividing top and bottom by 2 to get 2/7." },
    { q: "3 × 2/5 = ?", a: "6/5", choices: ["6/5", "5/5", "3/5"], explain: "A whole number is itself over 1, so 3 = 3/1. Multiply straight across: (3×2)/(1×5) = 6/5." },
    { q: "A recipe needs 3/4 kg of flour. If you make half the recipe, how much flour?", a: "3/8 kg", choices: ["3/8 kg", "3/2 kg", "1/4 kg"], explain: "'Half of' an amount means multiply by 1/2. Multiply straight across: 1/2 × 3/4 = 3/8 kg." },
    { q: "A rope is 2/3 m. It is cut into 4 equal pieces. How long is each piece?", a: "1/6 m", choices: ["1/6 m", "8/3 m", "2/12 m"], explain: "Sharing into 4 equal pieces means dividing by 4, which is multiplying by 1/4: 2/3 × 1/4 = 2/12. Simplify by dividing top and bottom by 2 to get 1/6 m." },
    { q: "What is 2/3 of 45?", a: "30", choices: ["30", "15", "67"], explain: "'Of' means multiply: 2/3 × 45. Find one third first — 45 ÷ 3 = 15 — then take 2 of them: 2 × 15 = 30." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5m-fr1": buildP5mFr1, "p5m-fr2": buildP5mFr2 };
export const P5_MATH_FRACTIONS_QUESTION_COUNTS = { "p5m-fr1": 10, "p5m-fr2": 10 };
export function buildMathFractions5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
