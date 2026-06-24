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
    { q: "What fraction of this shape is shaded if 3 out of 8 parts are shaded?", a: "3/8", choices: ["3/8", "8/3", "5/8"], explain: "A fraction is parts out of the whole: the bottom number is the total equal parts (8) and the top is how many are shaded (3), so 3/8." },
    { q: "Which fraction is equivalent to 1/2?", a: "3/6", choices: ["3/6", "2/6", "1/6"], explain: "Equivalent fractions scale top and bottom by the same number. Multiply 1/2 by 3/3: 1×3 = 3 and 2×3 = 6, giving 3/6 — same size, different look." },
    { q: "1/4 + 2/4 = ?", a: "3/4", choices: ["3/4", "3/8", "1/2"], explain: "When the bottom numbers match, the parts are the same size, so just add the tops and keep the bottom: 1 + 2 = 3 quarters = 3/4." },
    { q: "5/7 − 2/7 = ?", a: "3/7", choices: ["3/7", "7/7", "3/14"], explain: "Same bottom means same-sized parts, so subtract the tops and keep the bottom: 5 − 2 = 3 sevenths = 3/7. The bottom never changes when you add or subtract like fractions." },
    { q: "Which is bigger: 2/5 or 3/5?", a: "3/5", choices: ["3/5", "2/5", "Same"], explain: "When the bottoms are equal the parts are the same size, so more of them is bigger: 3 fifths beats 2 fifths, so 3/5 is larger." },
    { q: "Simplify 4/8.", a: "1/2", choices: ["1/2", "2/4", "4/8"], explain: "To simplify a fraction, divide top and bottom by their highest common factor. For 4/8 that factor is 4: 4÷4 = 1 and 8÷4 = 2, giving 1/2." },
    { q: "What is 1/3 of 12?", a: "4", choices: ["4", "3", "6"], explain: "Finding a fraction of an amount means sharing it into equal parts: 'one third of 12' is 12 split into 3 groups, 12 ÷ 3 = 4." },
    { q: "Which fraction is equivalent to 2/3?", a: "4/6", choices: ["4/6", "3/6", "2/6"], explain: "Equivalent fractions scale top and bottom by the same number. Double 2/3: 2×2 = 4 and 3×2 = 6, so 4/6 is the same value as 2/3." },
    { q: "3/10 + 4/10 = ?", a: "7/10", choices: ["7/10", "7/20", "1/10"], explain: "The bottoms match, so the tenths are the same size: add the tops and keep the bottom, 3 + 4 = 7, giving 7/10. Don't add the bottoms." },
    { q: "There are 20 marbles. 1/4 are red. How many are red?", a: "5", choices: ["5", "4", "10"], explain: "A fraction of a group means split it into that many equal parts: one quarter of 20 is 20 ÷ 4 = 5 marbles." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4mFr2() {
  return shuffle([
    { q: "Convert 7/4 to a mixed number.", a: "1¾", choices: ["1¾", "1½", "3/4"], explain: "An improper fraction is a whole-and-a-bit. Divide top by bottom to pull out the wholes: 7 ÷ 4 = 1 remainder 3, so 1 whole and 3/4 left over = 1¾." },
    { q: "Convert 2½ to an improper fraction.", a: "5/2", choices: ["5/2", "4/2", "2/5"], explain: "A mixed number turns into an improper fraction by counting all the parts: 2 wholes are 2×2 = 4 halves, plus the 1 half = 5 halves = 5/2." },
    { q: "Convert 11/3 to a mixed number.", a: "3⅔", choices: ["3⅔", "3⅓", "2⅔"], explain: "Divide top by bottom to find the wholes: 11 ÷ 3 = 3 remainder 2, so 3 wholes and 2/3 remaining = 3⅔." },
    { q: "Which is an improper fraction?", a: "7/5", choices: ["7/5", "3/5", "5/7"], explain: "An improper fraction has a top bigger than its bottom, meaning it is worth more than one whole. 7 is bigger than 5, so 7/5 is improper." },
    { q: "Convert 1⅓ to an improper fraction.", a: "4/3", choices: ["4/3", "3/3", "1/3"], explain: "Count everything in thirds: 1 whole is 3 thirds, plus the 1 third = 4 thirds = 4/3. Multiply the whole by the bottom, then add the top." },
    { q: "Is 5/5 equal to a whole number?", a: "Yes, it equals 1", choices: ["Yes, it equals 1", "No, it is a fraction", "Yes, it equals 5"], explain: "When the top equals the bottom you have all the parts of one whole, so the fraction equals 1: 5 fifths make exactly one whole." },
    { q: "Convert 9/2 to a mixed number.", a: "4½", choices: ["4½", "4¼", "2½"], explain: "Divide top by bottom to count the wholes: 9 ÷ 2 = 4 remainder 1, so 4 wholes and 1/2 left = 4½." },
    { q: "1¼ + 2¼ = ?", a: "3½", choices: ["3½", "3¼", "3¾"], explain: "Add the whole numbers and the fractions separately: 1 + 2 = 3 wholes, and ¼ + ¼ = 2/4 = ½. Together that's 3½." },
    { q: "Which is bigger: 1⅓ or 1½?", a: "1½", choices: ["1½", "1⅓", "Same"], explain: "The wholes match (both are 1), so compare the fraction parts. ½ is more than ⅓ because thirds are smaller pieces than halves, so 1½ is bigger." },
    { q: "Convert 3¼ to an improper fraction.", a: "13/4", choices: ["13/4", "12/4", "7/4"], explain: "Count everything in quarters: 3 wholes are 3×4 = 12 quarters, plus the 1 quarter = 13 quarters = 13/4." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p4m-fr1": buildP4mFr1, "p4m-fr2": buildP4mFr2 };
export const P4_MATH_FRACTIONS_QUESTION_COUNTS = { "p4m-fr1": 10, "p4m-fr2": 10 };
export function buildMathFractions4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
