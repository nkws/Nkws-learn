import { shuffle } from "../../utils/helpers";

function buildP4mFm1() {
  return shuffle([
    { q: "What are the factors of 12?", a: "1, 2, 3, 4, 6, 12", choices: ["1, 2, 3, 4, 6, 12", "1, 2, 3, 12", "2, 4, 6, 12"], explain: "Factors are the numbers that divide a number exactly with no remainder. Pair them up: 1×12, 2×6, 3×4 all make 12, so the factors are 1, 2, 3, 4, 6 and 12." },
    { q: "What is the largest factor of 18 (other than 18)?", a: "9", choices: ["9", "6", "3"], explain: "A factor divides the number exactly. The biggest factor below 18 itself is 18 ÷ 2 = 9, since halving gives the largest piece. 9 × 2 = 18, so 9 works." },
    { q: "Which is a common factor of 8 and 12?", a: "4", choices: ["4", "3", "5"], explain: "A common factor divides BOTH numbers exactly. 4 goes into 8 (8 ÷ 4 = 2) and into 12 (12 ÷ 4 = 3), so 4 is shared by both." },
    { q: "What are the first three multiples of 7?", a: "7, 14, 21", choices: ["7, 14, 21", "1, 7, 14", "7, 12, 21"], explain: "Multiples are what you get counting up in equal steps of the number: 7×1, 7×2, 7×3 give 7, 14, 21. They always start at the number itself, never at 1." },
    { q: "Which is a common multiple of 3 and 4?", a: "12", choices: ["12", "8", "9"], explain: "A common multiple appears in both times-tables. 12 is in the 3s (3×4) and the 4s (4×3), so both numbers divide it exactly." },
    { q: "Is 15 a multiple of 4?", a: "No", choices: ["No", "Yes", "Sometimes"], explain: "A multiple of 4 is something you reach by counting in 4s: 4, 8, 12, 16. 15 is skipped, and 15 ÷ 4 leaves a remainder, so it is not a multiple of 4." },
    { q: "Is 1 a factor of every number?", a: "Yes", choices: ["Yes", "No", "Only odd numbers"], explain: "A factor divides a number exactly. Any number divided by 1 gives itself with no remainder, so 1 is a factor of every whole number." },
    { q: "The smallest common multiple of 6 and 8 is?", a: "24", choices: ["24", "48", "12"], explain: "The lowest common multiple is the first number in both times-tables. Multiples of 6 are 6,12,18,24; of 8 are 8,16,24; the first they share is 24." },
    { q: "How many factors does 7 have?", a: "2 (1 and 7) — it is a prime number", choices: ["2 (1 and 7) — it is a prime number", "3", "7"], explain: "A prime number has exactly two factors: 1 and itself. Nothing else divides 7 exactly, so its only factors are 1 and 7." },
    { q: "Which number is both a factor and multiple of itself?", a: "Every number", choices: ["Every number", "Only 1", "Only even numbers"], explain: "Any number divides itself exactly (so it is its own factor) and equals itself times 1 (so it is its own multiple). This is true for every number." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4mDc1() {
  return shuffle([
    { q: "What is 0.5 as a fraction?", a: "1/2", choices: ["1/2", "1/5", "2/5"], explain: "A decimal shows tenths and hundredths. 0.5 means 5 tenths = 5/10, and dividing top and bottom by 5 simplifies it to 1/2 — half of one whole." },
    { q: "What is 3/4 as a decimal?", a: "0.75", choices: ["0.75", "0.34", "0.50"], explain: "A fraction is a division: 3/4 means 3 ÷ 4 = 0.75. Or scale to hundredths — 3/4 = 75/100 = 0.75." },
    { q: "Which is bigger: 0.6 or 0.58?", a: "0.6", choices: ["0.6", "0.58", "They are equal"], explain: "Compare decimals place by place, not by length. 0.6 is 0.60, and 60 hundredths beats 58 hundredths, so 0.6 is bigger." },
    { q: "Round 3.47 to 1 decimal place.", a: "3.5", choices: ["3.5", "3.4", "4.0"], explain: "Rounding looks at the next digit: keep the tenths (4) but check the hundredths (7). 7 is 5 or more, so round up — 3.4 becomes 3.5." },
    { q: "What is 2.3 + 1.45?", a: "3.75", choices: ["3.75", "3.48", "3.57"], explain: "Line up the decimal points so place values match: treat 2.3 as 2.30. Then 2.30 + 1.45 = 3.75, adding hundredths, tenths and ones in their own columns." },
    { q: "What is 5.0 - 2.38?", a: "2.62", choices: ["2.62", "2.72", "3.62"], explain: "Line up the points and fill gaps with zeros: 5.00 − 2.38. Borrowing across the columns gives 2.62." },
    { q: "0.25 is the same as?", a: "1/4", choices: ["1/4", "1/2", "2/5"], explain: "0.25 means 25 hundredths = 25/100. Divide top and bottom by their highest common factor, 25, to simplify to 1/4." },
    { q: "Which decimal is the smallest: 0.3, 0.03, 0.33?", a: "0.03", choices: ["0.03", "0.3", "0.33"], explain: "Line them up as hundredths: 0.30, 0.03, 0.33. The fewest hundredths is 0.03, so it is the smallest — a digit in the tenths place is worth more than one in the hundredths." },
    { q: "What is the place value of 7 in 3.47?", a: "7 hundredths", choices: ["7 hundredths", "7 tenths", "7 ones"], explain: "Place value depends on a digit's position. After the point the columns are tenths then hundredths, so the 7 (second after the point) is worth 7 hundredths." },
    { q: "What is 1.2 × 3?", a: "3.6", choices: ["3.6", "3.23", "4.2"], explain: "Multiply ignoring the point (12 × 3 = 36), then put the point back so the answer has one decimal place like 1.2: that gives 3.6." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p4m-fm1": buildP4mFm1, "p4m-dc1": buildP4mDc1 };
export const P4_MATH4_QUESTION_COUNTS = { "p4m-fm1": 10, "p4m-dc1": 10 };
export function buildMath4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
