import { shuffle } from "../utils/helpers";
function nearby(n, min, max, count = 2) {
  const wrongs = new Set();
  for (const off of shuffle([-10, 10, -1, 1, -11, 11])) {
    if (wrongs.size >= count) break;
    const f = n + off;
    if (f >= min && f <= max && f !== n) wrongs.add(f);
  }
  return [...wrongs];
}

export const NUMBERS100_INTRO = {
  "n100-1": {
    title: "Tens and Ones",
    pages: [
      { text: "Numbers are made of TENS and ONES.", emoji: "🔟 + 1️⃣" },
      { text: "23 means 2 tens and 3 ones. That's 20 + 3!", emoji: "🔟🔟 + ●●● = 23" },
      { text: "50 means 5 tens and 0 ones.", emoji: "🔟🔟🔟🔟🔟 = 50" },
      { text: "100 means 10 tens!", emoji: "🔟 × 10 = 💯" },
      { text: "Let's practice breaking numbers into tens and ones!", emoji: "🦊 🔢 💪" },
    ],
  },
};

function buildN100_1() {
  return shuffle([
    { q: "How many tens in 30?", a: "3", choices: ["2", "3", "4"] },
    { q: "How many tens in 50?", a: "5", choices: ["4", "5", "6"] },
    { q: "How many ones in 23?", a: "3", choices: ["2", "3", "5"] },
    { q: "How many tens in 47?", a: "4", choices: ["3", "4", "7"] },
    { q: "How many ones in 86?", a: "6", choices: ["6", "8", "2"] },
    { q: "What is 3 tens and 5 ones?", a: "35", choices: ["35", "53", "30"] },
    { q: "What is 7 tens and 0 ones?", a: "70", choices: ["7", "70", "17"] },
    { q: "What is 9 tens and 9 ones?", a: "99", choices: ["90", "99", "89"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildN100_2() {
  return shuffle([
    { q: "Count by 10: 10, 20, 30, __?", a: "40", choices: ["35", "40", "50"] },
    { q: "Count by 10: 40, 50, 60, __?", a: "70", choices: ["65", "70", "80"] },
    { q: "Count by 10: 70, 80, 90, __?", a: "100", choices: ["95", "100", "110"] },
    { q: "What is 10 + 10 + 10?", a: "30", choices: ["20", "30", "40"] },
    { q: "What is 10 + 10 + 10 + 10 + 10?", a: "50", choices: ["40", "50", "60"] },
    { q: "Count backwards by 10: 100, 90, 80, __?", a: "70", choices: ["60", "70", "75"] },
    { q: "Count backwards by 10: 50, 40, 30, __?", a: "20", choices: ["10", "20", "25"] },
    { q: "How many tens in 100?", a: "10", choices: ["1", "10", "100"] },
    { q: "Count by 10: 20, 30, __, 50?", a: "40", choices: ["35", "40", "45"] },
    { q: "Count by 10: 60, __, 80, 90?", a: "70", choices: ["65", "70", "75"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildN100_3() {
  const numbers = shuffle([21, 34, 45, 56, 67, 72, 83, 91, 48, 59, 36, 64]);
  return numbers.slice(0, 10).map((n) => {
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    const w = nearby(n, 10, 99);
    return {
      question: `What number has ${tens} tens and ${ones} ones?`,
      answer: String(n),
      choices: shuffle([String(n), String(w[0]), String(w[1])]),
    };
  });
}

function buildN100_4() {
  const pairs = shuffle([[23, 32], [45, 54], [67, 76], [38, 83], [19, 91], [72, 27], [56, 65], [41, 14], [88, 78], [93, 39]]);
  return pairs.slice(0, 10).map(([a, b]) => {
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);
    return {
      question: `Which is bigger: ${a} or ${b}?`,
      answer: String(bigger),
      choices: shuffle([String(bigger), String(smaller), String(nearby(bigger, 10, 99, 1)[0])]),
    };
  });
}

function buildN100_5() {
  return shuffle([
    { q: "Put in order, smallest first: 45, 23, 67", a: "23, 45, 67", choices: ["23, 45, 67", "45, 23, 67", "67, 45, 23"] },
    { q: "Put in order, smallest first: 89, 12, 56", a: "12, 56, 89", choices: ["12, 56, 89", "56, 12, 89", "89, 56, 12"] },
    { q: "Put in order, biggest first: 34, 78, 51", a: "78, 51, 34", choices: ["78, 51, 34", "34, 51, 78", "51, 78, 34"] },
    { q: "What number comes just after 49?", a: "50", choices: ["48", "50", "51"] },
    { q: "What number comes just before 80?", a: "79", choices: ["78", "79", "81"] },
    { q: "What number is between 64 and 66?", a: "65", choices: ["63", "65", "67"] },
    { q: "Which is the smallest: 71, 17, 77?", a: "17", choices: ["17", "71", "77"] },
    { q: "Which is the biggest: 55, 50, 59?", a: "59", choices: ["50", "55", "59"] },
    { q: "What number comes just after 99?", a: "100", choices: ["98", "100", "101"] },
    { q: "What comes between 39 and 41?", a: "40", choices: ["38", "40", "42"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "n100-1": buildN100_1, "n100-2": buildN100_2, "n100-3": buildN100_3,
  "n100-4": buildN100_4, "n100-5": buildN100_5,
};

export const NUMBERS100_QUESTION_COUNTS = {
  "n100-1": 8, "n100-2": 10, "n100-3": 10, "n100-4": 10, "n100-5": 10,
};

export function buildNumbers100Questions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
