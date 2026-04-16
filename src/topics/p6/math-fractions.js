import { shuffle } from "../../utils/helpers";

export const P6_MATH_FRACTIONS_INTRO = {
  "p6m-fw1": {
    title: "Fraction Word Problems",
    pages: [
      { text: "Fraction word problems test how well you can apply fractions in real situations — a major PSLE topic!", emoji: "📐 ½ ¾" },
      { text: "Step 1: Identify the WHOLE (the total). Step 2: Find what fraction of the whole is being described.", emoji: "🧠 1️⃣ 2️⃣" },
      { text: "When something is 'left over', think: WHOLE − (parts taken away). 1 − ⅓ − ¼ = 12/12 − 4/12 − 3/12 = 5/12.", emoji: "1 − ⅓ − ¼ = 5/12" },
      { text: "When two parts are taken from DIFFERENT wholes (e.g. ⅓ of remainder), redraw the bar — solve in stages.", emoji: "📊" },
      { text: "Always express your final fraction in SIMPLEST form. 6/8 should be written as 3/4!", emoji: "✅" },
    ],
  },
};

function buildP6mFw1() {
  return shuffle([
    { q: "John spent 1/3 of his money on a book and 1/4 on a pen. What fraction of his money did he have left?", a: "5/12", choices: ["5/12", "7/12", "1/12"] },
    { q: "Mary had $60. She spent 2/5 of it. How much did she spend?", a: "$24", choices: ["$24", "$12", "$36"] },
    { q: "There are 48 students. 3/8 of them are boys. How many are boys?", a: "18", choices: ["18", "24", "30"] },
    { q: "1/2 + 1/3 = ?", a: "5/6", choices: ["5/6", "2/5", "1/5"] },
    { q: "3/4 − 1/3 = ?", a: "5/12", choices: ["5/12", "2/1", "2/12"] },
    { q: "A tank is 2/3 full. After 18 litres are added, it is full. What is the tank's full capacity?", a: "54 litres", choices: ["54 litres", "27 litres", "12 litres"] },
    { q: "Tom ate 1/4 of a pizza. His sister ate 1/3 of what was left. What fraction of the pizza did his sister eat?", a: "1/4", choices: ["1/4", "1/3", "7/12"] },
    { q: "A rope is 12 m long. 5/6 of it is used. How many metres are used?", a: "10 m", choices: ["10 m", "2 m", "6 m"] },
    { q: "Express 9/12 in simplest form.", a: "3/4", choices: ["3/4", "9/12", "1/2"] },
    { q: "1 − 2/5 = ?", a: "3/5", choices: ["3/5", "1/5", "2/5"] },
    { q: "If 3/4 of a number is 36, what is the number?", a: "48", choices: ["48", "27", "12"] },
    { q: "A class has 40 students. 2/5 are boys and 1/4 of the girls wear glasses. How many girls wear glasses?", a: "6", choices: ["6", "10", "16"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6m-fw1": buildP6mFw1 };
export const P6_MATH_FRACTIONS_QUESTION_COUNTS = { "p6m-fw1": 12 };
export function buildMathFractionsQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
