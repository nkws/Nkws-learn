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
    { q: "1 litre = how many millilitres?", a: "1000 mL", choices: ["1000 mL", "100 mL", "10 mL"], explain: "1 litre always equals 1000 millilitres. The litre is the big unit and the millilitre is tiny, so it takes 1000 of them to fill one litre." },
    { q: "500 mL = how many litres?", a: "½ litre", choices: ["½ litre", "5 litres", "50 litres"], explain: "Since 1 litre is 1000 mL, half a litre is 500 mL. So 500 mL is one half of a litre." },
    { q: "A bottle holds 2 litres. How many mL is that?", a: "2000 mL", choices: ["2000 mL", "200 mL", "20 mL"], explain: "To change litres to millilitres, multiply by 1000 because 1 litre is 1000 mL. So 2 litres is 2 times 1000, which is 2000 mL." },
    { q: "Which holds more: a cup (250 mL) or a bottle (1 L)?", a: "The bottle", choices: ["The bottle", "The cup", "Same"], explain: "Put them in the same unit to compare. The bottle is 1 L which is 1000 mL, much more than the cup's 250 mL, so the bottle holds more." },
    { q: "3 L 500 mL = how many mL in total?", a: "3500 mL", choices: ["3500 mL", "350 mL", "3050 mL"], explain: "Change the litres to mL first: 3 L is 3000 mL. Then add the extra 500 mL: 3000 + 500 = 3500 mL." },
    { q: "A jug holds 1500 mL. How many litres and mL is that?", a: "1 L 500 mL", choices: ["1 L 500 mL", "15 L", "150 L"], explain: "Every 1000 mL makes 1 litre. 1500 mL has one full 1000 plus 500 left over, so it is 1 L 500 mL." },
    { q: "You pour 750 mL from a 2 L bottle. How much is left?", a: "1250 mL", choices: ["1250 mL", "1750 mL", "750 mL"], explain: "Work in the same unit. A 2 L bottle is 2000 mL, and pouring out means taking away: 2000 minus 750 leaves 1250 mL." },
    { q: "4 cups each hold 250 mL. What is the total?", a: "1000 mL (1 L)", choices: ["1000 mL (1 L)", "100 mL", "250 mL"], explain: "Four equal cups means add 250 four times, or multiply: 4 times 250 is 1000 mL, which is exactly 1 litre." },
    { q: "Which is a reasonable capacity for a bathtub?", a: "200 L", choices: ["200 L", "2 L", "2000 L"], explain: "Think about real sizes. A 2 L bottle is small and 2000 L would flood a room, so a bathtub holding about 200 L is sensible." },
    { q: "A recipe needs 300 mL of milk. You have 1 litre. How much is left after?", a: "700 mL", choices: ["700 mL", "300 mL", "1300 mL"], explain: "Use the same unit: 1 litre is 1000 mL. Using some up means taking it away: 1000 minus 300 leaves 700 mL." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p3m-ca1": buildP3mCa1 };
export const P3_MATH_CAPACITY_QUESTION_COUNTS = { "p3m-ca1": 10 };
export function buildCapacityQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
