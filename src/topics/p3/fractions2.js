import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P3_FRACTIONS2_INTRO = {
  "p3m-fr1": {
    title: "Fractions of a Whole",
    pages: [
      { text: "A fraction shows parts of a whole. If a pizza is cut into 4 slices, each slice is 1/4.", emoji: "\ud83c\udf55 = 4 slices" },
      { text: "The bottom number (denominator) tells how many equal parts there are.", emoji: "1/4 \u2190 4 equal parts" },
      { text: "The top number (numerator) tells how many parts we are talking about.", emoji: "3/4 \u2190 3 parts shaded" },
      { text: "3/4 means 3 out of 4 parts. That's most of the pizza!", emoji: "\ud83c\udf55\ud83c\udf55\ud83c\udf55 \u2b1c" },
      { text: "Let's practise reading fractions! You can do it!", emoji: "\ud83e\udda5 \ud83e\udde0 = \ud83d\udcaa" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildFR1() {
  // Fractions of a Whole
  return shuffle([
    { q: "3/4 of a pizza is shaded. How many parts out of 4?", a: "3", choices: ["3", "1", "4"] },
    { q: "A shape has 5 parts, 2 are shaded. What fraction is shaded?", a: "2/5", choices: ["2/5", "3/5", "5/2"] },
    { q: "A pie is cut into 3 equal pieces. You eat 1. What fraction did you eat?", a: "1/3", choices: ["1/3", "2/3", "3/3"] },
    { q: "A bar has 8 parts, 5 are coloured. What fraction is coloured?", a: "5/8", choices: ["5/8", "3/8", "8/5"] },
    { q: "What does the bottom number of a fraction tell us?", a: "Total parts", choices: ["Total parts", "Parts shaded", "Parts left"] },
    { q: "What does the top number of a fraction tell us?", a: "Parts chosen", choices: ["Parts chosen", "Total parts", "Parts left"] },
    { q: "A circle is divided into 6 parts, 4 are shaded. What fraction?", a: "4/6", choices: ["4/6", "2/6", "6/4"] },
    { q: "A rectangle has 10 parts, 7 are shaded. What fraction?", a: "7/10", choices: ["7/10", "3/10", "10/7"] },
    { q: "If 2/4 of a shape is shaded, how many parts are shaded?", a: "2", choices: ["2", "4", "1"] },
    { q: "A cake is cut into 2 equal pieces. 1 piece is eaten. What fraction is left?", a: "1/2", choices: ["1/2", "2/2", "1/1"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildFR2() {
  // Equivalent Fractions
  return shuffle([
    { q: "1/2 is the same as ?/4", a: "2", choices: ["2", "1", "3"] },
    { q: "2/4 is the same as ?/2", a: "1", choices: ["1", "2", "3"] },
    { q: "1/3 is the same as ?/6", a: "2", choices: ["2", "3", "1"] },
    { q: "2/6 is the same as ?/3", a: "1", choices: ["1", "2", "4"] },
    { q: "3/6 is the same as ?/2", a: "1", choices: ["1", "3", "2"] },
    { q: "1/4 is the same as ?/8", a: "2", choices: ["2", "4", "1"] },
    { q: "2/8 is the same as ?/4", a: "1", choices: ["1", "2", "4"] },
    { q: "2/3 is the same as ?/6", a: "4", choices: ["4", "2", "3"] },
    { q: "4/6 is the same as ?/3", a: "2", choices: ["2", "4", "1"] },
    { q: "3/4 is the same as ?/8", a: "6", choices: ["6", "3", "4"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildFR3() {
  // Comparing Fractions
  return shuffle([
    { q: "Which is bigger: 1/3 or 1/2?", a: "1/2", choices: ["1/2", "1/3", "Same"] },
    { q: "Which is bigger: 1/4 or 1/2?", a: "1/2", choices: ["1/2", "1/4", "Same"] },
    { q: "Which is bigger: 3/4 or 1/4?", a: "3/4", choices: ["3/4", "1/4", "Same"] },
    { q: "Which is bigger: 2/5 or 4/5?", a: "4/5", choices: ["4/5", "2/5", "Same"] },
    { q: "Which is bigger: 1/6 or 1/3?", a: "1/3", choices: ["1/3", "1/6", "Same"] },
    { q: "Which is smaller: 1/8 or 1/4?", a: "1/8", choices: ["1/8", "1/4", "Same"] },
    { q: "Which is smaller: 2/3 or 1/3?", a: "1/3", choices: ["1/3", "2/3", "Same"] },
    { q: "Are 2/4 and 1/2 the same?", a: "Yes", choices: ["Yes", "No", "Cannot tell"] },
    { q: "Which is bigger: 5/6 or 1/6?", a: "5/6", choices: ["5/6", "1/6", "Same"] },
    { q: "Which is bigger: 3/8 or 5/8?", a: "5/8", choices: ["5/8", "3/8", "Same"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildFR4() {
  // Adding Fractions (same denominator)
  return shuffle([
    { q: "1/4 + 2/4 = ?", a: "3/4", choices: ["3/4", "2/4", "4/4"] },
    { q: "1/5 + 3/5 = ?", a: "4/5", choices: ["4/5", "3/5", "2/5"] },
    { q: "2/6 + 3/6 = ?", a: "5/6", choices: ["5/6", "4/6", "6/6"] },
    { q: "1/3 + 1/3 = ?", a: "2/3", choices: ["2/3", "1/3", "3/3"] },
    { q: "3/8 + 2/8 = ?", a: "5/8", choices: ["5/8", "4/8", "6/8"] },
    { q: "1/6 + 4/6 = ?", a: "5/6", choices: ["5/6", "3/6", "6/6"] },
    { q: "2/5 + 2/5 = ?", a: "4/5", choices: ["4/5", "3/5", "5/5"] },
    { q: "1/8 + 3/8 = ?", a: "4/8", choices: ["4/8", "3/8", "5/8"] },
    { q: "2/4 + 1/4 = ?", a: "3/4", choices: ["3/4", "2/4", "4/4"] },
    { q: "3/10 + 4/10 = ?", a: "7/10", choices: ["7/10", "6/10", "8/10"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "p3m-fr1": buildFR1, "p3m-fr2": buildFR2, "p3m-fr3": buildFR3, "p3m-fr4": buildFR4,
};

export const P3_FRACTIONS2_QUESTION_COUNTS = {
  "p3m-fr1": 10, "p3m-fr2": 10, "p3m-fr3": 10, "p3m-fr4": 10,
};

export function buildFractions2Questions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
