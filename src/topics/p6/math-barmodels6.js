import { shuffle } from "../../utils/helpers";

export const P6_MATH_BARMODELS6_INTRO = {
  "p6m-bm1": {
    title: "Bar Model Heuristics",
    pages: [
      { text: "Bar models turn long word problems into pictures. At PSLE level you'll see harder bars: before/after, equal parts, and remaining-fraction problems.", emoji: "📊 ➡️ 🧠" },
      { text: "Equal-parts trick: if the question says 'A and B together have $84 and A has 3 times as much as B', think 4 equal parts → 1 part = $84 ÷ 4 = $21. So B = $21, A = $63.", emoji: "[B][A][A][A] = 84" },
      { text: "Remainder/fraction trick: 'Ali spent 1/3 of his money, then 1/4 of the remainder.' Draw the WHOLE bar, cut off 1/3, then cut 1/4 off what's left. The leftover is what you usually need.", emoji: "🍕 1/3 → 1/4 of rest" },
      { text: "Before-and-after: when totals stay the same but the split changes, draw two bars (before / after) of the same length. The change is the difference between matching parts.", emoji: "📊 ↔ 📊" },
      { text: "Always label the bars with what you know AND what you're looking for. The 1-part value is usually the key — find it first, then scale up.", emoji: "🔑 = 1 part" },
    ],
  },
};

function buildP6mBm1() {
  return shuffle([
    { q: "Ali and Ben share $84 in the ratio 1:3. How much does Ben get?", a: "$63", choices: ["$63", "$21", "$28"] },
    { q: "Tom has 3 times as many stickers as Sam. Together they have 48 stickers. How many does Sam have?", a: "12", choices: ["12", "16", "36"] },
    { q: "A pencil and a pen cost $9. The pen costs twice as much as the pencil. How much is the pen?", a: "$6", choices: ["$6", "$3", "$4.50"] },
    { q: "Mei spent 1/3 of her money on a book. She had $40 left. How much did she have at first?", a: "$60", choices: ["$60", "$120", "$80"] },
    { q: "Ravi spent 1/4 of his savings, then 1/3 of the remainder. He had $40 left. How much did he start with?", a: "$80", choices: ["$80", "$60", "$120"] },
    { q: "A class has 36 children. The ratio of boys to girls is 5:4. How many boys are there?", a: "20", choices: ["20", "16", "9"] },
    { q: "Jia had twice as many marbles as Wei. After Jia gave 12 marbles to Wei, they had the same number. How many did Jia have at first?", a: "48", choices: ["48", "24", "36"] },
    { q: "A and B share some sweets in the ratio 2:5. B gets 18 more sweets than A. How many sweets are there in total?", a: "42", choices: ["42", "30", "63"] },
    { q: "Lin's age is 4 times her brother's. In 6 years, Lin will be twice her brother's age. How old is Lin now?", a: "12", choices: ["12", "8", "16"] },
    { q: "A box has red and blue balls in the ratio 3:2. After 9 red balls are removed, the ratio becomes 1:1. How many balls were there at first?", a: "45", choices: ["45", "27", "18"] },
    { q: "Two-thirds of the children in a class are boys. There are 8 more boys than girls. How many children are in the class?", a: "24", choices: ["24", "16", "32"] },
    { q: "Sara saved 3/5 of her pocket money. She spent the rest, which was $24. How much did she save?", a: "$36", choices: ["$36", "$60", "$40"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6m-bm1": buildP6mBm1 };
export const P6_MATH_BARMODELS6_QUESTION_COUNTS = { "p6m-bm1": 12 };
export function buildBarModels6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
