import { shuffle } from "../../utils/helpers";

function buildP6mRa1() {
  return shuffle([
    { q: "Simplify the ratio 12:8.", a: "3:2", choices: ["3:2", "6:4", "4:3"] },
    { q: "If the ratio of boys to girls is 3:5, and there are 15 boys, how many girls?", a: "25", choices: ["25", "15", "20"] },
    { q: "The ratio 2:3 is equivalent to?", a: "4:6", choices: ["4:6", "3:2", "6:3"] },
    { q: "If A:B = 1:4, what fraction of the total is A?", a: "1/5", choices: ["1/5", "1/4", "4/5"] },
    { q: "Simplify 20:30.", a: "2:3", choices: ["2:3", "4:6", "3:2"] },
    { q: "Tom and Jerry share $60 in the ratio 1:2. How much does Jerry get?", a: "$40", choices: ["$40", "$20", "$30"] },
    { q: "If 3 parts = 12, what is 1 part?", a: "4", choices: ["4", "3", "12"] },
    { q: "The ratio of red to blue marbles is 5:3. If there are 40 marbles total, how many are red?", a: "25", choices: ["25", "15", "20"] },
    { q: "If A:B = 2:3, and B = 18, what is A?", a: "12", choices: ["12", "27", "9"] },
    { q: "Equivalent ratios are like equivalent?", a: "Fractions", choices: ["Fractions", "Decimals only", "Percentages only"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6mAl1() {
  return shuffle([
    { q: "Simplify: 3x + 2x", a: "5x", choices: ["5x", "6x", "32x"] },
    { q: "If x = 4, what is 2x + 3?", a: "11", choices: ["11", "9", "24"] },
    { q: "Solve: x + 5 = 12", a: "x = 7", choices: ["x = 7", "x = 17", "x = 5"] },
    { q: "Solve: 3x = 15", a: "x = 5", choices: ["x = 5", "x = 45", "x = 3"] },
    { q: "Simplify: 7y - 3y + 2", a: "4y + 2", choices: ["4y + 2", "10y + 2", "4y - 2"] },
    { q: "If y = 3, what is 5y - 2?", a: "13", choices: ["13", "53", "17"] },
    { q: "Solve: 2x + 4 = 10", a: "x = 3", choices: ["x = 3", "x = 7", "x = 5"] },
    { q: "What does '2n' mean?", a: "2 multiplied by n", choices: ["2 multiplied by n", "2 added to n", "n divided by 2"] },
    { q: "Solve: x/3 = 4", a: "x = 12", choices: ["x = 12", "x = 7", "x = 1"] },
    { q: "Simplify: 4a + 3b - 2a + b", a: "2a + 4b", choices: ["2a + 4b", "6a + 4b", "2a + 2b"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6m-ra1": buildP6mRa1, "p6m-al1": buildP6mAl1 };
export const P6_MATH6_QUESTION_COUNTS = { "p6m-ra1": 10, "p6m-al1": 10 };
export function buildMath6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
