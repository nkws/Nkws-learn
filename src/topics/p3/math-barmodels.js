import { shuffle } from "../../utils/helpers";

export const P3_MATH_BARMODELS_INTRO = {
  "p3m-bm1": {
    title: "Bar Models",
    pages: [
      { text: "Bar models help you SEE word problems! Draw bars to represent numbers, then solve.", emoji: "📊 📐" },
      { text: "Part-whole model: the total bar on top, the parts below. If two parts are 30 and 50, the whole is 80.", emoji: "80 = 30 + 50" },
      { text: "Comparison model: draw two bars side by side. The difference is how much longer one bar is.", emoji: "📊 ↔ 📊" },
    ],
  },
};

function buildP3mBm1() {
  return shuffle([
    { q: "Ali has 45 marbles. Ben has 23 marbles. How many do they have altogether?", a: "68", choices: ["68", "22", "58"], explain: "A bar model draws the two parts so you can see the total. Put 45 and 23 end to end and add them: 45 + 23 = 68." },
    { q: "A ribbon is 90 cm long. 35 cm is cut off. How much is left?", a: "55 cm", choices: ["55 cm", "125 cm", "45 cm"], explain: "In a bar model the whole ribbon is one bar. Cutting a part off means taking it away: 90 take away 35 leaves 55 cm." },
    { q: "Tom has 24 stickers. Jerry has 18 more than Tom. How many does Jerry have?", a: "42", choices: ["42", "6", "36"], explain: "Draw Jerry's bar as Tom's bar plus an extra piece. More than means add: 24 + 18 = 42." },
    { q: "Mei has $50. She spends $18 on a book and $12 on food. How much is left?", a: "$20", choices: ["$20", "$30", "$80"], explain: "The bar model shows the whole $50 with two parts spent. Take both away from the total: 50 minus 18 minus 12 leaves $20." },
    { q: "A class has 40 students. 15 are boys. How many are girls?", a: "25", choices: ["25", "55", "15"], explain: "The whole bar is all 40 students, split into boys and girls. The girls are the missing part: 40 take away 15 is 25." },
    { q: "Ali has 3 times as many cards as Ben. Ben has 12 cards. How many does Ali have?", a: "36", choices: ["36", "15", "4"], explain: "Three times as many means Ali's bar is 3 equal copies of Ben's bar. So multiply: 3 times 12 is 36." },
    { q: "The total of two numbers is 100. One number is 65. What is the other?", a: "35", choices: ["35", "165", "45"], explain: "A part-whole bar shows the total 100 split into two parts. Find the missing part by subtracting the known one: 100 minus 65 is 35." },
    { q: "Sara is 8 years older than her brother. Her brother is 5 years old. How old is Sara?", a: "13", choices: ["13", "3", "40"], explain: "Older than means add an extra piece to the brother's bar. Sara is 5 + 8, which makes 13." },
    { q: "A bag of rice weighs 3 times as much as a bag of sugar. The sugar weighs 4 kg. How heavy is the rice?", a: "12 kg", choices: ["12 kg", "7 kg", "1 kg"], explain: "Three times as heavy means the rice bar is 3 equal copies of the sugar bar. So multiply: 3 times 4 is 12 kg." },
    { q: "240 children are split into 6 equal groups. How many in each group?", a: "40", choices: ["40", "234", "246"], explain: "Splitting the whole bar into equal groups means dividing. Share 240 into 6 equal parts: 240 divided by 6 is 40." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p3m-bm1": buildP3mBm1 };
export const P3_MATH_BARMODELS_QUESTION_COUNTS = { "p3m-bm1": 10 };
export function buildBarModelsQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
