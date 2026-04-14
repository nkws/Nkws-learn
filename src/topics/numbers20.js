import { shuffle } from "../utils/helpers";
function nearby(n, min, max, count = 2) {
  const wrongs = new Set();
  const offsets = shuffle([-1, 1, -2, 2, -3, 3]);
  for (const off of offsets) {
    if (wrongs.size >= count) break;
    const f = n + off;
    if (f >= min && f <= max && f !== n) wrongs.add(f);
  }
  return [...wrongs];
}

export const NUMBERS20_INTRO = {
  "n20-1": {
    title: "Numbers 11 to 20",
    pages: [
      { text: "You already know numbers 1 to 10. Now let's learn 11 to 20!", emoji: "🔢" },
      { text: "After 10 comes 11, 12, 13, 14, 15, 16, 17, 18, 19, 20!", emoji: "1️⃣1️⃣ ➡️ 2️⃣0️⃣" },
      { text: "11 means 10 and 1 more. 15 means 10 and 5 more.", emoji: "10 + 1 = 11\n10 + 5 = 15" },
      { text: "20 means two groups of 10!", emoji: "🔟🔟 = 20" },
      { text: "Let's practise counting and comparing numbers!", emoji: "🦊 🔢 💪" },
    ],
  },
};

function buildN20_1() {
  return shuffle([
    { q: "What number comes after 10?", a: "11", choices: ["9", "11", "12"] },
    { q: "What number comes after 15?", a: "16", choices: ["14", "16", "17"] },
    { q: "What number comes before 20?", a: "19", choices: ["18", "19", "21"] },
    { q: "How many is 10 and 3 more?", a: "13", choices: ["12", "13", "14"] },
    { q: "How many is 10 and 7 more?", a: "17", choices: ["16", "17", "18"] },
    { q: "What number comes after 19?", a: "20", choices: ["18", "20", "21"] },
    { q: "What number is between 11 and 13?", a: "12", choices: ["10", "12", "14"] },
    { q: "How many is 10 and 10?", a: "20", choices: ["10", "20", "12"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildN20_2() {
  // Counting: "How many dots?" using numbers
  return shuffle(
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((n) => {
      const dots = "●".repeat(n);
      const wrongs = nearby(n, 11, 20);
      return {
        question: `Count the dots: ${dots.slice(0, 10)} ${dots.slice(10)}. How many?`,
        answer: String(n),
        choices: shuffle([String(n), String(wrongs[0]), String(wrongs[1])]),
      };
    })
  );
}

function buildN20_3() {
  // Comparing: which is bigger/smaller
  const questions = [];
  const pairs = [[12, 15], [18, 13], [11, 19], [20, 14], [16, 17], [13, 11], [19, 20], [14, 18], [15, 12], [17, 16]];
  for (const [a, b] of pairs) {
    const bigger = Math.max(a, b);
    const wrongs = [Math.min(a, b), nearby(bigger, 11, 20, 1)[0] || bigger - 2];
    questions.push({
      question: `Which is bigger: ${a} or ${b}?`,
      answer: String(bigger),
      choices: shuffle([String(bigger), ...wrongs.map(String)].filter((v, i, arr) => arr.indexOf(v) === i).slice(0, 3)),
    });
  }
  return shuffle(questions);
}

function buildN20_4() {
  // Ordering: what comes next / between
  return shuffle([
    { q: "What comes next: 11, 12, 13, __?", a: "14", choices: ["13", "14", "15"] },
    { q: "What comes next: 15, 16, 17, __?", a: "18", choices: ["17", "18", "19"] },
    { q: "What comes next: 17, 18, 19, __?", a: "20", choices: ["19", "20", "21"] },
    { q: "Count backwards: 20, 19, 18, __?", a: "17", choices: ["16", "17", "19"] },
    { q: "Count backwards: 15, 14, 13, __?", a: "12", choices: ["11", "12", "14"] },
    { q: "What is between 13 and 15?", a: "14", choices: ["12", "14", "16"] },
    { q: "What is between 17 and 19?", a: "18", choices: ["16", "18", "20"] },
    { q: "What is between 10 and 12?", a: "11", choices: ["9", "11", "13"] },
    { q: "Count by 2: 10, 12, 14, __?", a: "16", choices: ["15", "16", "18"] },
    { q: "Count by 2: 14, 16, 18, __?", a: "20", choices: ["19", "20", "22"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildN20_5() {
  // Number bonds
  return shuffle([
    { q: "10 + __ = 14. What is missing?", a: "4", choices: ["3", "4", "5"] },
    { q: "10 + __ = 17. What is missing?", a: "7", choices: ["6", "7", "8"] },
    { q: "10 + __ = 11. What is missing?", a: "1", choices: ["0", "1", "2"] },
    { q: "10 + __ = 20. What is missing?", a: "10", choices: ["8", "10", "12"] },
    { q: "10 + __ = 15. What is missing?", a: "5", choices: ["4", "5", "6"] },
    { q: "__ + 10 = 19. What is missing?", a: "9", choices: ["8", "9", "10"] },
    { q: "__ + 10 = 12. What is missing?", a: "2", choices: ["1", "2", "3"] },
    { q: "__ + 10 = 16. What is missing?", a: "6", choices: ["5", "6", "7"] },
    { q: "13 = 10 + __?", a: "3", choices: ["2", "3", "4"] },
    { q: "18 = 10 + __?", a: "8", choices: ["7", "8", "9"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "n20-1": buildN20_1, "n20-2": buildN20_2, "n20-3": buildN20_3,
  "n20-4": buildN20_4, "n20-5": buildN20_5,
};

export const NUMBERS20_QUESTION_COUNTS = {
  "n20-1": 8, "n20-2": 10, "n20-3": 10, "n20-4": 10, "n20-5": 10,
};

export function buildNumbers20Questions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
