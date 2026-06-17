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
    { q: "John spent 1/3 of his money on a book and 1/4 on a pen. What fraction of his money did he have left?", a: "5/12", choices: ["5/12", "7/12", "1/12"], explain: "All his money is 1 whole, and 'left over' is the whole minus the parts taken. Use a common bottom of 12: 1 − 4/12 − 3/12 = 5/12." },
    { q: "Mary had $60. She spent 2/5 of it. How much did she spend?", a: "$24", choices: ["$24", "$12", "$36"], explain: "A fraction of an amount means split the whole into equal parts and take some. Fifths of $60 are $12 each, and she spent 2 of them: 2 × $12 = $24." },
    { q: "There are 48 students. 3/8 of them are boys. How many are boys?", a: "18", choices: ["18", "24", "30"], explain: "Finding a fraction of a group means cut the whole into equal parts and count some. One eighth of 48 is 6, so 3/8 = 3 × 6 = 18 boys." },
    { q: "1/2 + 1/3 = ?", a: "5/6", choices: ["5/6", "2/5", "1/5"], explain: "You can only add fractions when the parts are the same size, so rename both with a common bottom of 6: 1/2 = 3/6 and 1/3 = 2/6. Then 3/6 + 2/6 = 5/6." },
    { q: "3/4 − 1/3 = ?", a: "5/12", choices: ["5/12", "2/1", "2/12"], explain: "Fractions can only be subtracted when the pieces match in size, so use a common bottom of 12: 3/4 = 9/12 and 1/3 = 4/12. Then 9/12 − 4/12 = 5/12." },
    { q: "A tank is 2/3 full. After 18 litres are added, it is full. What is the tank's full capacity?", a: "54 litres", choices: ["54 litres", "27 litres", "12 litres"], explain: "The added water fills the empty part, so match it to its fraction: full − 2/3 = 1/3, and that 1/3 = 18 L. The whole is 3 thirds: 3 × 18 = 54 L." },
    { q: "Tom ate 1/4 of a pizza. His sister ate 1/3 of what was left. What fraction of the pizza did his sister eat?", a: "1/4", choices: ["1/4", "1/3", "7/12"], explain: "Her share is a fraction of the REMAINDER, not the whole pizza, so find the leftover first: 1 − 1/4 = 3/4. Then 1/3 of 3/4 = 1/3 × 3/4 = 1/4." },
    { q: "A rope is 12 m long. 5/6 of it is used. How many metres are used?", a: "10 m", choices: ["10 m", "2 m", "6 m"], explain: "A fraction of a length means split it into equal parts and take some. One sixth of 12 m is 2 m, so 5/6 = 5 × 2 = 10 m." },
    { q: "Express 9/12 in simplest form.", a: "3/4", choices: ["3/4", "9/12", "1/2"], explain: "A fraction's value doesn't change if you divide top and bottom by the same number. The highest common factor of 9 and 12 is 3, so 9/12 = 3/4." },
    { q: "1 − 2/5 = ?", a: "3/5", choices: ["3/5", "1/5", "2/5"], explain: "One whole is the same as 5/5 when working in fifths, so the fifths match. Then 5/5 − 2/5 = 3/5." },
    { q: "If 3/4 of a number is 36, what is the number?", a: "48", choices: ["48", "27", "12"], explain: "Work back to one whole through one part: if 3 quarters = 36, then 1 quarter = 36 ÷ 3 = 12, and the whole is 4 quarters = 4 × 12 = 48." },
    { q: "A class has 40 students. 2/5 are boys and 1/4 of the girls wear glasses. How many girls wear glasses?", a: "6", choices: ["6", "10", "16"], explain: "Solve in stages, since the glasses fraction is of the GIRLS, not the class. Boys = 2/5 of 40 = 16, so girls = 24; then 1/4 of 24 = 6 wear glasses." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6m-fw1": buildP6mFw1 };
export const P6_MATH_FRACTIONS_QUESTION_COUNTS = { "p6m-fw1": 12 };
export function buildMathFractionsQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
