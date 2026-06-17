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
    { q: "Ali and Ben share $84 in the ratio 1:3. How much does Ben get?", a: "$63", choices: ["$63", "$21", "$28"], explain: "Draw the share as equal units: 1 + 3 = 4 units. Find one unit first — $84 ÷ 4 = $21 — then scale up to Ben's 3 units = $63. Finding one unit is the key move in every sharing problem." },
    { q: "Tom has 3 times as many stickers as Sam. Together they have 48 stickers. How many does Sam have?", a: "12", choices: ["12", "16", "36"], explain: "'3 times as many' means draw Sam as 1 unit and Tom as 3 equal units, so the bar is 4 units long. One unit = 48 ÷ 4 = 12, which is Sam's amount." },
    { q: "A pencil and a pen cost $9. The pen costs twice as much as the pencil. How much is the pen?", a: "$6", choices: ["$6", "$3", "$4.50"], explain: "Let the pencil be 1 unit; 'twice as much' makes the pen 2 units, so together they are 3 units = $9. One unit = $3, so the pen's 2 units = $6." },
    { q: "Mei spent 1/3 of her money on a book. She had $40 left. How much did she have at first?", a: "$60", choices: ["$60", "$120", "$80"], explain: "Draw the whole bar in thirds: spending 1/3 leaves 2/3, and that leftover is the $40 you're told. So 2/3 = $40 means 1/3 = $20, and the whole = $60." },
    { q: "Ravi spent 1/4 of his savings, then 1/3 of the remainder. He had $40 left. How much did he start with?", a: "$80", choices: ["$80", "$60", "$120"], explain: "With remainder problems, work backwards through each bar. After spending 1/4, the remainder is 3/4. Spending 1/3 of that leaves 2/3 of it = $40, so the remainder = $60. That remainder is 3/4 of the start, so the start = $80." },
    { q: "A class has 36 children. The ratio of boys to girls is 5:4. How many boys are there?", a: "20", choices: ["20", "16", "9"], explain: "A ratio splits the bar into equal units: 5 + 4 = 9 units make the whole class. One unit = 36 ÷ 9 = 4, so the boys' 5 units = 20." },
    { q: "Jia had twice as many marbles as Wei. After Jia gave 12 marbles to Wei, they had the same number. How many did Jia have at first?", a: "48", choices: ["48", "24", "36"], explain: "When one person gives to another, the total stays the same — so look at the gap. Jia started 1 unit ahead of Wei. Giving 12 away closes a gap of 2×12 = 24, so 1 unit = 24. Jia had 2 units = 48." },
    { q: "A and B share some sweets in the ratio 2:5. B gets 18 more sweets than A. How many sweets are there in total?", a: "42", choices: ["42", "30", "63"], explain: "The difference between the bars is the key: 5 − 2 = 3 units, and that gap is the 18 extra sweets. So 1 unit = 18 ÷ 3 = 6, and the total of 2 + 5 = 7 units = 42." },
    { q: "Lin's age is 4 times her brother's. In 6 years, Lin will be twice her brother's age. How old is Lin now?", a: "12", choices: ["12", "8", "16"], explain: "Both ages grow by the same 6 years, so the difference between the bars never changes. Lin is 4 units, brother 1 unit, a gap of 3 units. Later Lin is twice the brother, a gap of 1 'later-unit' that equals 3 old units; solving gives the brother now = 3, so Lin = 4 × 3 = 12." },
    { q: "A box has red and blue balls in the ratio 3:2. After 9 red balls are removed, the ratio becomes 1:1. How many balls were there at first?", a: "45", choices: ["45", "27", "18"], explain: "Blue never changes, so anchor on it. Red is 3 units, blue 2 units; after removing reds they're equal, so red drops to 2 units. The 9 removed = 3 − 2 = 1 unit, so 1 unit = 9. The start was 3 + 2 = 5 units = 45." },
    { q: "Two-thirds of the children in a class are boys. There are 8 more boys than girls. How many children are in the class?", a: "24", choices: ["24", "16", "32"], explain: "Split the whole bar into thirds: boys are 2/3, girls 1/3. The difference is 2/3 − 1/3 = 1/3 of the class, and that equals the 8 extra boys. So 1/3 = 8 and the whole class = 24." },
    { q: "Sara saved 3/5 of her pocket money. She spent the rest, which was $24. How much did she save?", a: "$36", choices: ["$36", "$60", "$40"], explain: "Draw the bar in fifths: she saved 3/5, so the rest is 2/5, and that's the $24 she spent. So 1/5 = $12, and what she saved (3/5) = 3 × $12 = $36." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6m-bm1": buildP6mBm1 };
export const P6_MATH_BARMODELS6_QUESTION_COUNTS = { "p6m-bm1": 12 };
export function buildBarModels6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
