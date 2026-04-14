import { shuffle } from "../../utils/helpers";

function buildP4mFm1() {
  return shuffle([
    { q: "What are the factors of 12?", a: "1, 2, 3, 4, 6, 12", choices: ["1, 2, 3, 4, 6, 12", "1, 2, 3, 12", "2, 4, 6, 12"] },
    { q: "What is the largest factor of 18 (other than 18)?", a: "9", choices: ["9", "6", "3"] },
    { q: "Which is a common factor of 8 and 12?", a: "4", choices: ["4", "3", "5"] },
    { q: "What is the first three multiples of 7?", a: "7, 14, 21", choices: ["7, 14, 21", "1, 7, 14", "7, 12, 21"] },
    { q: "Which is a common multiple of 3 and 4?", a: "12", choices: ["12", "8", "9"] },
    { q: "Is 15 a multiple of 4?", a: "No", choices: ["No", "Yes", "Sometimes"] },
    { q: "Is 1 a factor of every number?", a: "Yes", choices: ["Yes", "No", "Only odd numbers"] },
    { q: "The smallest common multiple of 6 and 8 is?", a: "24", choices: ["24", "48", "12"] },
    { q: "How many factors does 7 have?", a: "2 (1 and 7) — it is a prime number", choices: ["2 (1 and 7) — it is a prime number", "3", "7"] },
    { q: "Which number is both a factor and multiple of itself?", a: "Every number", choices: ["Every number", "Only 1", "Only even numbers"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4mDc1() {
  return shuffle([
    { q: "What is 0.5 as a fraction?", a: "1/2", choices: ["1/2", "1/5", "5/10"] },
    { q: "What is 3/4 as a decimal?", a: "0.75", choices: ["0.75", "0.34", "0.50"] },
    { q: "Which is bigger: 0.6 or 0.58?", a: "0.6", choices: ["0.6", "0.58", "They are equal"] },
    { q: "Round 3.47 to 1 decimal place.", a: "3.5", choices: ["3.5", "3.4", "4.0"] },
    { q: "What is 2.3 + 1.45?", a: "3.75", choices: ["3.75", "3.48", "3.57"] },
    { q: "What is 5.0 - 2.38?", a: "2.62", choices: ["2.62", "2.72", "3.62"] },
    { q: "0.25 is the same as?", a: "1/4", choices: ["1/4", "1/2", "2/5"] },
    { q: "Which decimal is the smallest: 0.3, 0.03, 0.33?", a: "0.03", choices: ["0.03", "0.3", "0.33"] },
    { q: "What is the place value of 7 in 3.47?", a: "7 hundredths", choices: ["7 hundredths", "7 tenths", "7 ones"] },
    { q: "What is 1.2 × 3?", a: "3.6", choices: ["3.6", "3.23", "4.2"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4m-fm1": buildP4mFm1, "p4m-dc1": buildP4mDc1 };
export const P4_MATH4_QUESTION_COUNTS = { "p4m-fm1": 10, "p4m-dc1": 10 };
export function buildMath4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
