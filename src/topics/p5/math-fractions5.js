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
    { q: "1/2 + 1/3 = ?", a: "5/6", choices: ["5/6", "2/5", "1/5"] },
    { q: "3/4 − 1/3 = ?", a: "5/12", choices: ["5/12", "2/1", "2/12"] },
    { q: "2/5 + 1/4 = ?", a: "13/20", choices: ["13/20", "3/9", "3/20"] },
    { q: "5/6 − 1/3 = ?", a: "1/2", choices: ["1/2", "4/3", "4/6"] },
    { q: "1/4 + 2/3 = ?", a: "11/12", choices: ["11/12", "3/7", "3/12"] },
    { q: "7/8 − 1/2 = ?", a: "3/8", choices: ["3/8", "6/6", "6/8"] },
    { q: "1/3 + 1/6 = ?", a: "1/2", choices: ["1/2", "2/9", "1/9"] },
    { q: "3/5 − 1/4 = ?", a: "7/20", choices: ["7/20", "2/1", "2/20"] },
    { q: "There are 20 sweets. Ali eats 1/4 and Ben eats 1/5. What fraction did they eat altogether?", a: "9/20", choices: ["9/20", "2/9", "5/20"] },
    { q: "A ribbon is 3/4 m long. If 1/3 m is cut off, how much is left?", a: "5/12 m", choices: ["5/12 m", "2/1 m", "1/4 m"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5mFr2() {
  return shuffle([
    { q: "2/3 × 3/4 = ?", a: "1/2", choices: ["1/2", "5/7", "6/12"] },
    { q: "1/2 × 4/5 = ?", a: "2/5", choices: ["2/5", "5/10", "4/10"] },
    { q: "3/4 ÷ 1/2 = ?", a: "3/2", choices: ["3/2", "3/8", "1/2"] },
    { q: "2/5 ÷ 2/3 = ?", a: "3/5", choices: ["3/5", "4/15", "4/8"] },
    { q: "5/6 × 3/10 = ?", a: "1/4", choices: ["1/4", "15/60", "8/16"] },
    { q: "4/7 ÷ 2 = ?", a: "2/7", choices: ["2/7", "8/7", "4/9"] },
    { q: "3 × 2/5 = ?", a: "6/5", choices: ["6/5", "5/5", "3/5"] },
    { q: "A recipe needs 3/4 kg of flour. If you make half the recipe, how much flour?", a: "3/8 kg", choices: ["3/8 kg", "3/2 kg", "1/4 kg"] },
    { q: "A rope is 2/3 m. It is cut into 4 equal pieces. How long is each piece?", a: "1/6 m", choices: ["1/6 m", "8/3 m", "2/12 m"] },
    { q: "What is 2/3 of 45?", a: "30", choices: ["30", "15", "67"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5m-fr1": buildP5mFr1, "p5m-fr2": buildP5mFr2 };
export const P5_MATH_FRACTIONS_QUESTION_COUNTS = { "p5m-fr1": 10, "p5m-fr2": 10 };
export function buildMathFractions5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
