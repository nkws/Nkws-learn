import { shuffle } from "../../utils/helpers";

export const P4_MATH_FRACTIONS_INTRO = {
  "p4m-fr1": {
    title: "Fractions",
    pages: [
      { text: "A fraction shows parts of a whole. 1/4 means 1 out of 4 equal parts.", emoji: "🍕 ¼" },
      { text: "Equivalent fractions look different but are the same size: 1/2 = 2/4 = 3/6.", emoji: "½ = 2/4 = 3/6" },
      { text: "To add fractions with the same bottom number: add the tops, keep the bottom. 1/5 + 2/5 = 3/5.", emoji: "1/5 + 2/5 = 3/5" },
    ],
  },
  "p4m-fr2": {
    title: "Mixed Numbers",
    pages: [
      { text: "A mixed number has a whole part and a fraction part: 1½ means 1 and a half.", emoji: "1½" },
      { text: "An improper fraction has a bigger top than bottom: 5/3 = 1⅔.", emoji: "5/3 = 1⅔" },
      { text: "To convert: divide the top by the bottom. 7/4 = 1 remainder 3 = 1¾.", emoji: "7 ÷ 4 = 1 R3" },
    ],
  },
};

function buildP4mFr1() {
  return shuffle([
    { q: "What fraction of this shape is shaded if 3 out of 8 parts are shaded?", a: "3/8", choices: ["3/8", "8/3", "5/8"] },
    { q: "Which fraction is equivalent to 1/2?", a: "3/6", choices: ["3/6", "2/6", "1/6"] },
    { q: "1/4 + 2/4 = ?", a: "3/4", choices: ["3/4", "3/8", "1/2"] },
    { q: "5/7 − 2/7 = ?", a: "3/7", choices: ["3/7", "7/7", "3/14"] },
    { q: "Which is bigger: 2/5 or 3/5?", a: "3/5", choices: ["3/5", "2/5", "Same"] },
    { q: "Simplify 4/8.", a: "1/2", choices: ["1/2", "2/4", "4/8"] },
    { q: "What is 1/3 of 12?", a: "4", choices: ["4", "3", "6"] },
    { q: "Which fraction is equivalent to 2/3?", a: "4/6", choices: ["4/6", "3/6", "2/6"] },
    { q: "3/10 + 4/10 = ?", a: "7/10", choices: ["7/10", "7/20", "1/10"] },
    { q: "There are 20 marbles. 1/4 are red. How many are red?", a: "5", choices: ["5", "4", "10"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4mFr2() {
  return shuffle([
    { q: "Convert 7/4 to a mixed number.", a: "1¾", choices: ["1¾", "1½", "3/4"] },
    { q: "Convert 2½ to an improper fraction.", a: "5/2", choices: ["5/2", "4/2", "2/5"] },
    { q: "Convert 11/3 to a mixed number.", a: "3⅔", choices: ["3⅔", "3⅓", "2⅔"] },
    { q: "Which is an improper fraction?", a: "7/5", choices: ["7/5", "3/5", "5/7"] },
    { q: "Convert 1⅓ to an improper fraction.", a: "4/3", choices: ["4/3", "3/3", "1/3"] },
    { q: "Is 5/5 equal to a whole number?", a: "Yes, it equals 1", choices: ["Yes, it equals 1", "No, it is a fraction", "Yes, it equals 5"] },
    { q: "Convert 9/2 to a mixed number.", a: "4½", choices: ["4½", "4¼", "2½"] },
    { q: "1¼ + 2¼ = ?", a: "3½", choices: ["3½", "3¼", "3¾"] },
    { q: "Which is bigger: 1⅓ or 1½?", a: "1½", choices: ["1½", "1⅓", "Same"] },
    { q: "Convert 3¼ to an improper fraction.", a: "13/4", choices: ["13/4", "12/4", "7/4"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4m-fr1": buildP4mFr1, "p4m-fr2": buildP4mFr2 };
export const P4_MATH_FRACTIONS_QUESTION_COUNTS = { "p4m-fr1": 10, "p4m-fr2": 10 };
export function buildMathFractions4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
