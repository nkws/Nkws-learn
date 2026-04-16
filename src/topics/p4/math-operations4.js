import { shuffle } from "../../utils/helpers";

export const P4_MATH_OPERATIONS_INTRO = {
  "p4m-mu1": {
    title: "Multiplication",
    pages: [
      { text: "At P4, we multiply larger numbers! Up to 4 digits by 1 digit, and 2 digits by 2 digits.", emoji: "✕ 📐" },
      { text: "Example: 234 × 3 = (200×3) + (30×3) + (4×3) = 600 + 90 + 12 = 702.", emoji: "234 × 3 = 702" },
    ],
  },
  "p4m-di1": {
    title: "Division",
    pages: [
      { text: "Division splits a number into equal groups. 84 ÷ 4 = 21 means 84 split into 4 groups of 21.", emoji: "÷ 📐" },
      { text: "Sometimes there is a remainder: 17 ÷ 5 = 3 remainder 2.", emoji: "17 ÷ 5 = 3 R 2" },
    ],
  },
};

function buildP4mMu1() {
  return shuffle([
    { q: "234 × 3 = ?", a: "702", choices: ["702", "712", "692"] },
    { q: "156 × 4 = ?", a: "624", choices: ["624", "614", "634"] },
    { q: "23 × 12 = ?", a: "276", choices: ["276", "266", "286"] },
    { q: "45 × 11 = ?", a: "495", choices: ["495", "455", "505"] },
    { q: "1250 × 4 = ?", a: "5000", choices: ["5000", "4000", "5500"] },
    { q: "308 × 5 = ?", a: "1540", choices: ["1540", "1500", "1550"] },
    { q: "36 × 25 = ?", a: "900", choices: ["900", "800", "910"] },
    { q: "A box has 48 crayons. A school buys 15 boxes. How many crayons?", a: "720", choices: ["720", "710", "730"] },
    { q: "Each row has 32 chairs. There are 8 rows. How many chairs?", a: "256", choices: ["256", "246", "266"] },
    { q: "A baker makes 125 buns a day. How many in 6 days?", a: "750", choices: ["750", "700", "760"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4mDi1() {
  return shuffle([
    { q: "84 ÷ 4 = ?", a: "21", choices: ["21", "20", "24"] },
    { q: "135 ÷ 5 = ?", a: "27", choices: ["27", "25", "30"] },
    { q: "256 ÷ 8 = ?", a: "32", choices: ["32", "31", "34"] },
    { q: "1000 ÷ 4 = ?", a: "250", choices: ["250", "200", "400"] },
    { q: "17 ÷ 5 = ? remainder ?", a: "3 remainder 2", choices: ["3 remainder 2", "3 remainder 3", "4 remainder 2"] },
    { q: "100 ÷ 7 = ? remainder ?", a: "14 remainder 2", choices: ["14 remainder 2", "14 remainder 3", "15 remainder 2"] },
    { q: "648 ÷ 6 = ?", a: "108", choices: ["108", "106", "110"] },
    { q: "A farmer has 156 eggs. He packs them in boxes of 12. How many full boxes?", a: "13", choices: ["13", "12", "14"] },
    { q: "345 ÷ 5 = ?", a: "69", choices: ["69", "70", "65"] },
    { q: "$240 is shared equally among 8 children. How much does each get?", a: "$30", choices: ["$30", "$28", "$32"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4m-mu1": buildP4mMu1, "p4m-di1": buildP4mDi1 };
export const P4_MATH_OPERATIONS_QUESTION_COUNTS = { "p4m-mu1": 10, "p4m-di1": 10 };
export function buildMathOperations4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
