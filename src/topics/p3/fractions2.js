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
    { q: "3/4 of a pizza is shaded. How many parts out of 4?", a: "3", choices: ["3", "1", "4"], explain: "A fraction's top number tells how many parts you have. In 3/4 the top number is 3, so 3 of the 4 parts are shaded." },
    { q: "A shape has 5 parts, 2 are shaded. What fraction is shaded?", a: "2/5", choices: ["2/5", "3/5", "5/2"], explain: "A fraction is parts out of the whole. Write the shaded parts on top and the total parts on the bottom: 2 shaded out of 5 is 2/5." },
    { q: "A pie is cut into 3 equal pieces. You eat 1. What fraction did you eat?", a: "1/3", choices: ["1/3", "2/3", "3/3"], explain: "A fraction shows parts of a whole. You ate 1 piece out of 3 equal pieces, so that is 1 over 3, written 1/3." },
    { q: "A bar has 8 parts, 5 are coloured. What fraction is coloured?", a: "5/8", choices: ["5/8", "3/8", "8/5"], explain: "Put the coloured parts on top and the total parts on the bottom. 5 coloured out of 8 parts is 5/8." },
    { q: "What does the bottom number of a fraction tell us?", a: "Total parts", choices: ["Total parts", "Parts shaded", "Parts left"], explain: "The bottom number, the denominator, tells how many equal parts the whole is split into. The top number tells how many we take." },
    { q: "What does the top number of a fraction tell us?", a: "Parts chosen", choices: ["Parts chosen", "Total parts", "Parts left"], explain: "The top number, the numerator, tells how many parts we are counting. The bottom number tells how many equal parts there are in all." },
    { q: "A circle is divided into 6 parts, 4 are shaded. What fraction?", a: "4/6", choices: ["4/6", "2/6", "6/4"], explain: "Shaded parts go on top, total parts on the bottom. 4 shaded out of 6 parts is 4/6." },
    { q: "A rectangle has 10 parts, 7 are shaded. What fraction?", a: "7/10", choices: ["7/10", "3/10", "10/7"], explain: "Write the shaded parts over the total parts. 7 shaded out of 10 parts is 7/10." },
    { q: "If 2/4 of a shape is shaded, how many parts are shaded?", a: "2", choices: ["2", "4", "1"], explain: "The top number of a fraction counts the shaded parts. In 2/4 the top number is 2, so 2 parts are shaded." },
    { q: "A cake is cut into 2 equal pieces. 1 piece is eaten. What fraction is left?", a: "1/2", choices: ["1/2", "2/2", "1/1"], explain: "Start with 2 pieces and take 1 away, leaving 1 piece out of the 2. One part of two equal parts is 1/2." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildFR2() {
  // Equivalent Fractions
  return shuffle([
    { q: "1/2 is the same as ?/4", a: "2", choices: ["2", "1", "3"], explain: "Equivalent fractions are the same amount written differently. The bottom went from 2 to 4, that is times 2, so the top must also times 2: 1 becomes 2." },
    { q: "2/4 is the same as ?/2", a: "1", choices: ["1", "2", "3"], explain: "Equivalent fractions show the same amount. The bottom went from 4 to 2, that is divided by 2, so divide the top by 2 too: 2 becomes 1." },
    { q: "1/3 is the same as ?/6", a: "2", choices: ["2", "3", "1"], explain: "Equivalent fractions are equal amounts. The bottom doubled from 3 to 6, so double the top as well: 1 becomes 2." },
    { q: "2/6 is the same as ?/3", a: "1", choices: ["1", "2", "4"], explain: "Equivalent fractions are equal amounts. The bottom halved from 6 to 3, so halve the top too: 2 becomes 1." },
    { q: "3/6 is the same as ?/2", a: "1", choices: ["1", "3", "2"], explain: "Equivalent fractions are equal amounts. The bottom went from 6 to 2, divided by 3, so divide the top by 3 as well: 3 becomes 1." },
    { q: "1/4 is the same as ?/8", a: "2", choices: ["2", "4", "1"], explain: "Equivalent fractions are equal amounts. The bottom doubled from 4 to 8, so double the top too: 1 becomes 2." },
    { q: "2/8 is the same as ?/4", a: "1", choices: ["1", "2", "4"], explain: "Equivalent fractions are equal amounts. The bottom halved from 8 to 4, so halve the top as well: 2 becomes 1." },
    { q: "2/3 is the same as ?/6", a: "4", choices: ["4", "2", "3"], explain: "Equivalent fractions are equal amounts. The bottom doubled from 3 to 6, so double the top too: 2 becomes 4." },
    { q: "4/6 is the same as ?/3", a: "2", choices: ["2", "4", "1"], explain: "Equivalent fractions are equal amounts. The bottom halved from 6 to 3, so halve the top as well: 4 becomes 2." },
    { q: "3/4 is the same as ?/8", a: "6", choices: ["6", "3", "4"], explain: "Equivalent fractions are equal amounts. The bottom doubled from 4 to 8, so double the top too: 3 becomes 6." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildFR3() {
  // Comparing Fractions
  return shuffle([
    { q: "Which is bigger: 1/3 or 1/2?", a: "1/2", choices: ["1/2", "1/3", "Same"], explain: "When the top numbers are the same, fewer pieces means each piece is bigger. Splitting a whole into 2 gives bigger parts than into 3, so 1/2 is bigger." },
    { q: "Which is bigger: 1/4 or 1/2?", a: "1/2", choices: ["1/2", "1/4", "Same"], explain: "With the same top number, the smaller bottom number wins. Cutting a cake into 2 makes bigger slices than into 4, so 1/2 is bigger." },
    { q: "Which is bigger: 3/4 or 1/4?", a: "3/4", choices: ["3/4", "1/4", "Same"], explain: "When the bottoms match, the bigger top number means more pieces. 3 quarters is more than 1 quarter, so 3/4 is bigger." },
    { q: "Which is bigger: 2/5 or 4/5?", a: "4/5", choices: ["4/5", "2/5", "Same"], explain: "When the bottoms are the same, more pieces on top means more. 4 fifths is more than 2 fifths, so 4/5 is bigger." },
    { q: "Which is bigger: 1/6 or 1/3?", a: "1/3", choices: ["1/3", "1/6", "Same"], explain: "With the same top number, fewer parts means bigger parts. Splitting into 3 gives bigger pieces than into 6, so 1/3 is bigger." },
    { q: "Which is smaller: 1/8 or 1/4?", a: "1/8", choices: ["1/8", "1/4", "Same"], explain: "With the same top number, more parts means each part is tinier. Splitting into 8 gives smaller pieces than into 4, so 1/8 is smaller." },
    { q: "Which is smaller: 2/3 or 1/3?", a: "1/3", choices: ["1/3", "2/3", "Same"], explain: "When the bottoms match, fewer pieces on top means less. 1 third is fewer than 2 thirds, so 1/3 is smaller." },
    { q: "Are 2/4 and 1/2 the same?", a: "Yes", choices: ["Yes", "No", "Cannot tell"], explain: "Equivalent fractions are the same amount written differently. Halve both the top and bottom of 2/4 and you get 1/2, so they are equal." },
    { q: "Which is bigger: 5/6 or 1/6?", a: "5/6", choices: ["5/6", "1/6", "Same"], explain: "When the bottoms are the same, the bigger top number is more. 5 sixths is more than 1 sixth, so 5/6 is bigger." },
    { q: "Which is bigger: 3/8 or 5/8?", a: "5/8", choices: ["5/8", "3/8", "Same"], explain: "When the bottoms match, more pieces on top wins. 5 eighths is more than 3 eighths, so 5/8 is bigger." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildFR4() {
  // Adding Fractions (same denominator)
  return shuffle([
    { q: "1/4 + 2/4 = ?", a: "3/4", choices: ["3/4", "2/4", "4/4"], explain: "When the bottom numbers match, the pieces are the same size, so just add the tops and keep the bottom: 1 + 2 = 3, giving 3/4." },
    { q: "1/5 + 3/5 = ?", a: "4/5", choices: ["4/5", "3/5", "2/5"], explain: "The fifths are the same size, so add the top numbers and keep the bottom: 1 + 3 = 4, giving 4/5." },
    { q: "2/6 + 3/6 = ?", a: "5/6", choices: ["5/6", "4/6", "6/6"], explain: "Same bottom means same size pieces, so add the tops and keep the bottom: 2 + 3 = 5, giving 5/6." },
    { q: "1/3 + 1/3 = ?", a: "2/3", choices: ["2/3", "1/3", "3/3"], explain: "Both pieces are thirds, the same size, so add the tops and keep the bottom: 1 + 1 = 2, giving 2/3." },
    { q: "3/8 + 2/8 = ?", a: "5/8", choices: ["5/8", "4/8", "6/8"], explain: "The eighths are equal in size, so add the top numbers and keep the bottom: 3 + 2 = 5, giving 5/8." },
    { q: "1/6 + 4/6 = ?", a: "5/6", choices: ["5/6", "3/6", "6/6"], explain: "Same bottom means same size pieces, so add the tops and keep the bottom: 1 + 4 = 5, giving 5/6." },
    { q: "2/5 + 2/5 = ?", a: "4/5", choices: ["4/5", "3/5", "5/5"], explain: "Both are fifths, so add the tops and keep the bottom the same: 2 + 2 = 4, giving 4/5." },
    { q: "1/8 + 3/8 = ?", a: "4/8", choices: ["4/8", "3/8", "5/8"], explain: "The eighths are the same size, so add the tops and keep the bottom: 1 + 3 = 4, giving 4/8." },
    { q: "4/10 + 5/10 = ?", a: "9/10", choices: ["9/10", "8/10", "10/10"], explain: "The tenths are equal pieces, so add the tops and keep the bottom: 4 + 5 = 9, giving 9/10." },
    { q: "3/10 + 4/10 = ?", a: "7/10", choices: ["7/10", "6/10", "8/10"], explain: "Same bottom means same size pieces, so add the tops and keep the bottom: 3 + 4 = 7, giving 7/10." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
