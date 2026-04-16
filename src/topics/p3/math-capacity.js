import { shuffle } from "../../utils/helpers";

export const P3_MATH_CAPACITY_INTRO = {
  "p3m-ca1": {
    title: "Capacity (Litres & Millilitres)",
    pages: [
      { text: "Capacity is how much liquid a container can hold. We measure in litres (L) and millilitres (mL).", emoji: "🥛 L & mL" },
      { text: "1 litre = 1000 millilitres. A small bottle of water is about 500 mL = half a litre.", emoji: "1 L = 1000 mL" },
    ],
  },
};

function buildP3mCa1() {
  return shuffle([
    { q: "1 litre = how many millilitres?", a: "1000 mL", choices: ["1000 mL", "100 mL", "10 mL"] },
    { q: "500 mL = how many litres?", a: "½ litre", choices: ["½ litre", "5 litres", "50 litres"] },
    { q: "A bottle holds 2 litres. How many mL is that?", a: "2000 mL", choices: ["2000 mL", "200 mL", "20 mL"] },
    { q: "Which holds more: a cup (250 mL) or a bottle (1 L)?", a: "The bottle", choices: ["The bottle", "The cup", "Same"] },
    { q: "3 L 500 mL = how many mL in total?", a: "3500 mL", choices: ["3500 mL", "350 mL", "3050 mL"] },
    { q: "A jug holds 1500 mL. How many litres and mL is that?", a: "1 L 500 mL", choices: ["1 L 500 mL", "15 L", "150 L"] },
    { q: "You pour 750 mL from a 2 L bottle. How much is left?", a: "1250 mL", choices: ["1250 mL", "1750 mL", "750 mL"] },
    { q: "4 cups each hold 250 mL. What is the total?", a: "1000 mL (1 L)", choices: ["1000 mL (1 L)", "100 mL", "250 mL"] },
    { q: "Which is a reasonable capacity for a bathtub?", a: "200 L", choices: ["200 L", "2 L", "2000 L"] },
    { q: "A recipe needs 300 mL of milk. You have 1 litre. How much is left after?", a: "700 mL", choices: ["700 mL", "300 mL", "1300 mL"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p3m-ca1": buildP3mCa1 };
export const P3_MATH_CAPACITY_QUESTION_COUNTS = { "p3m-ca1": 10 };
export function buildCapacityQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
