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
    { q: "234 × 3 = ?", a: "702", choices: ["702", "712", "692"], explain: "Split by place value and multiply each part: (200×3) + (30×3) + (4×3) = 600 + 90 + 12 = 702. Breaking the number into hundreds, tens and ones keeps it easy." },
    { q: "156 × 4 = ?", a: "624", choices: ["624", "614", "634"], explain: "Multiply each place value then add: (100×4) + (50×4) + (6×4) = 400 + 200 + 24 = 624." },
    { q: "23 × 12 = ?", a: "276", choices: ["276", "266", "286"], explain: "For 2-digit × 2-digit, split one number: 23 × 12 = 23×10 + 23×2 = 230 + 46 = 276." },
    { q: "45 × 11 = ?", a: "495", choices: ["495", "455", "505"], explain: "Multiplying by 11 is ×10 plus one more of the number: 45×10 = 450, plus 45 = 495." },
    { q: "1250 × 4 = ?", a: "5000", choices: ["5000", "4000", "5500"], explain: "Multiply each place value: 1000×4 = 4000, 250×4 = 1000, and 4000 + 1000 = 5000." },
    { q: "308 × 5 = ?", a: "1540", choices: ["1540", "1500", "1550"], explain: "Multiply by place value and mind the zero in the tens: (300×5) + (0×5) + (8×5) = 1500 + 0 + 40 = 1540." },
    { q: "36 × 25 = ?", a: "900", choices: ["900", "800", "910"], explain: "Split for an easy multiply: 36 × 25 = 36×20 + 36×5 = 720 + 180 = 900." },
    { q: "A box has 48 crayons. A school buys 15 boxes. How many crayons?", a: "720", choices: ["720", "710", "730"], explain: "Equal groups means multiply: 48 crayons in each of 15 boxes is 48 × 15. Split it: 48×10 + 48×5 = 480 + 240 = 720." },
    { q: "Each row has 32 chairs. There are 8 rows. How many chairs?", a: "256", choices: ["256", "246", "266"], explain: "Equal rows is a multiplication: 32 × 8. Break it up: (30×8) + (2×8) = 240 + 16 = 256." },
    { q: "A baker makes 125 buns a day. How many in 6 days?", a: "750", choices: ["750", "700", "760"], explain: "Same amount each day means multiply: 125 × 6. Split it: (100×6) + (25×6) = 600 + 150 = 750." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4mDi1() {
  return shuffle([
    { q: "84 ÷ 4 = ?", a: "21", choices: ["21", "20", "24"], explain: "Dividing splits a number into equal groups. Break 84 into easy parts: 80 ÷ 4 = 20 and 4 ÷ 4 = 1, so 20 + 1 = 21." },
    { q: "135 ÷ 5 = ?", a: "27", choices: ["27", "25", "30"], explain: "Split into friendly chunks to share by 5: 100 ÷ 5 = 20 and 35 ÷ 5 = 7, so 20 + 7 = 27." },
    { q: "256 ÷ 8 = ?", a: "32", choices: ["32", "31", "34"], explain: "Division undoes multiplication, so ask 'what times 8 makes 256?'. 8 × 32 = 256, so 256 ÷ 8 = 32." },
    { q: "1000 ÷ 4 = ?", a: "250", choices: ["250", "200", "400"], explain: "Sharing 1000 into 4 equal groups: a quarter of 1000 is 250, since 4 × 250 = 1000." },
    { q: "17 ÷ 5 = ? remainder ?", a: "3 remainder 2", choices: ["3 remainder 2", "3 remainder 3", "4 remainder 2"], explain: "A remainder is what's left when the groups don't fill evenly: 5 goes into 17 three times (3×5 = 15), leaving 17 − 15 = 2 over, so 3 remainder 2." },
    { q: "100 ÷ 7 = ? remainder ?", a: "14 remainder 2", choices: ["14 remainder 2", "14 remainder 3", "15 remainder 2"], explain: "Find the most whole 7s that fit: 7 × 14 = 98, and 100 − 98 = 2 left over, so 14 remainder 2." },
    { q: "648 ÷ 6 = ?", a: "108", choices: ["108", "106", "110"], explain: "Split into easy parts to divide by 6: 600 ÷ 6 = 100 and 48 ÷ 6 = 8, so 100 + 8 = 108. Watch the 0 in the tens place." },
    { q: "A farmer has 156 eggs. He packs them in boxes of 12. How many full boxes?", a: "13", choices: ["13", "12", "14"], explain: "Making equal groups is division: 156 ÷ 12. Since 12 × 13 = 156, it fills exactly 13 full boxes." },
    { q: "345 ÷ 5 = ?", a: "69", choices: ["69", "70", "65"], explain: "Split into chunks that divide by 5: 300 ÷ 5 = 60 and 45 ÷ 5 = 9, so 60 + 9 = 69." },
    { q: "$240 is shared equally among 8 children. How much does each get?", a: "$30", choices: ["$30", "$28", "$32"], explain: "Sharing equally means divide: $240 ÷ 8. Since 8 × 30 = 240, each child gets $30." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p4m-mu1": buildP4mMu1, "p4m-di1": buildP4mDi1 };
export const P4_MATH_OPERATIONS_QUESTION_COUNTS = { "p4m-mu1": 10, "p4m-di1": 10 };
export function buildMathOperations4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
