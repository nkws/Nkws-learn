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
      { text: "Let's practise breaking numbers into tens and ones!", emoji: "🦊 🔢 💪" },
    ],
  },
};

function buildN100_1() {
  return shuffle([
    { q: "How many tens in 30?", a: "3", choices: ["2", "3", "4"], explain: "The first digit of a two-digit number tells how many tens. In 30 the 3 means 3 tens." },
    { q: "How many tens in 50?", a: "5", choices: ["4", "5", "6"], explain: "The first digit tells how many tens. In 50 the 5 means 5 tens." },
    { q: "How many ones in 23?", a: "3", choices: ["2", "3", "5"], explain: "The last digit tells how many ones. In 23 the 3 means 3 ones." },
    { q: "How many tens in 47?", a: "4", choices: ["3", "4", "7"], explain: "The first digit tells how many tens. In 47 the 4 means 4 tens." },
    { q: "How many ones in 86?", a: "6", choices: ["6", "8", "2"], explain: "The last digit tells how many ones. In 86 the 6 means 6 ones." },
    { q: "What is 3 tens and 5 ones?", a: "35", choices: ["35", "53", "30"], explain: "A number is built from tens then ones. Put 3 tens in front and 5 ones after to make 35." },
    { q: "What is 7 tens and 0 ones?", a: "70", choices: ["7", "70", "17"], explain: "A number is built from tens then ones. 7 tens with no ones is written as 70." },
    { q: "What is 9 tens and 9 ones?", a: "99", choices: ["90", "99", "89"], explain: "A number is built from tens then ones. Put 9 tens in front and 9 ones after to make 99." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildN100_2() {
  return shuffle([
    { q: "Count by 10: 10, 20, 30, __?", a: "40", choices: ["35", "40", "50"], explain: "Counting by 10 adds one ten each jump. After 30, add 10 more to reach 40." },
    { q: "Count by 10: 40, 50, 60, __?", a: "70", choices: ["65", "70", "80"], explain: "Counting by 10 adds one ten each jump. After 60, add 10 more to reach 70." },
    { q: "Count by 10: 70, 80, 90, __?", a: "100", choices: ["95", "100", "110"], explain: "Counting by 10 adds one ten each jump. After 90, add 10 more to reach 100." },
    { q: "What is 10 + 10 + 10?", a: "30", choices: ["20", "30", "40"], explain: "Each 10 is one group of ten. Three groups of ten put together make 30." },
    { q: "What is 10 + 10 + 10 + 10 + 10?", a: "50", choices: ["40", "50", "60"], explain: "Each 10 is one group of ten. Five groups of ten put together make 50." },
    { q: "Count backwards by 10: 100, 90, 80, __?", a: "70", choices: ["60", "70", "75"], explain: "Counting back by 10 takes one ten away each jump. From 80, take 10 to reach 70." },
    { q: "Count backwards by 10: 50, 40, 30, __?", a: "20", choices: ["10", "20", "25"], explain: "Counting back by 10 takes one ten away each jump. From 30, take 10 to reach 20." },
    { q: "How many tens in 100?", a: "10", choices: ["1", "10", "100"], explain: "Each ten is a group of ten ones, and 100 is made of ten of those groups, so there are 10 tens." },
    { q: "Count by 10: 20, 30, __, 50?", a: "40", choices: ["35", "40", "45"], explain: "Counting by 10 adds one ten each jump. The number between 30 and 50 in this pattern is 40." },
    { q: "Count by 10: 60, __, 80, 90?", a: "70", choices: ["65", "70", "75"], explain: "Counting by 10 adds one ten each jump. The number between 60 and 80 in this pattern is 70." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
      explain: `A number is built from tens then ones. Put the ${tens} tens digit first and the ${ones} ones digit after to make ${n}.`,
    };
  });
}

function buildN100_4() {
  const pairs = shuffle([[23, 32], [45, 54], [67, 76], [38, 83], [19, 91], [72, 27], [56, 65], [41, 14], [88, 78], [93, 39]]);
  return pairs.slice(0, 10).map(([a, b]) => {
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);
    // The nearby wrong must not collide with the smaller number (e.g. 88 vs
    // 78: nearby(88) can return 78), or the question gets duplicate choices.
    const wrong = nearby(bigger, 10, 99, 2).find((w) => w !== smaller) ?? bigger - 1;
    const bTens = Math.floor(bigger / 10);
    const sTens = Math.floor(smaller / 10);
    const explain = bTens !== sTens
      ? `To compare two-digit numbers, look at the tens first. ${bigger} has ${bTens} tens but ${smaller} has only ${sTens}, so ${bigger} is bigger.`
      : `When the tens are the same, compare the ones. ${bigger} and ${smaller} both have ${bTens} tens, but ${bigger} has more ones, so ${bigger} is bigger.`;
    return {
      question: `Which is bigger: ${a} or ${b}?`,
      answer: String(bigger),
      choices: shuffle([String(bigger), String(smaller), String(wrong)]),
      explain,
    };
  });
}

function buildN100_5() {
  return shuffle([
    { q: "Put in order, smallest first: 45, 23, 67", a: "23, 45, 67", choices: ["23, 45, 67", "45, 23, 67", "67, 45, 23"], explain: "To order numbers, compare the tens first. 23 has the fewest tens so it comes first, then 45, then 67." },
    { q: "Put in order, smallest first: 89, 12, 56", a: "12, 56, 89", choices: ["12, 56, 89", "56, 12, 89", "89, 56, 12"], explain: "To order numbers, compare the tens first. 12 has the fewest tens so it comes first, then 56, then 89." },
    { q: "Put in order, biggest first: 34, 78, 51", a: "78, 51, 34", choices: ["78, 51, 34", "34, 51, 78", "51, 78, 34"], explain: "Biggest first means most tens first. 78 has the most tens, then 51, then 34." },
    { q: "What number comes just after 49?", a: "50", choices: ["48", "50", "51"], explain: "The number just after is one more when counting up. After 49 the ten rolls over to make 50." },
    { q: "What number comes just before 80?", a: "79", choices: ["78", "79", "81"], explain: "The number just before is one less. One less than 80 is 79." },
    { q: "What number is between 64 and 66?", a: "65", choices: ["63", "65", "67"], explain: "The number between sits in the middle when you count. Between 64 and 66 is 65." },
    { q: "Which is the smallest: 71, 17, 77?", a: "17", choices: ["17", "71", "77"], explain: "The smallest number has the fewest tens. 17 has only 1 ten, while 71 and 77 have 7 tens, so 17 is smallest." },
    { q: "Which is the biggest: 55, 50, 59?", a: "59", choices: ["50", "55", "59"], explain: "When the tens are the same, compare the ones. All have 5 tens, but 59 has the most ones, so it is biggest." },
    { q: "What number comes just after 99?", a: "100", choices: ["98", "100", "101"], explain: "The number just after is one more. After 99, all the tens roll over to make 100." },
    { q: "What comes between 39 and 41?", a: "40", choices: ["38", "40", "42"], explain: "The number between sits in the middle when you count. Between 39 and 41 is 40." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
