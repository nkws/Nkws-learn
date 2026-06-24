import { shuffle } from "../../utils/helpers";
function nearbyWrongs(correct, count = 2) {
  const wrongs = new Set();
  const offsets = shuffle([-1, 1, -2, 2, -3, 3]);
  for (const off of offsets) {
    if (wrongs.size >= count) break;
    const fake = correct + off;
    if (fake >= 0 && fake !== correct) wrongs.add(fake);
  }
  while (wrongs.size < count) {
    const fake = correct + Math.floor(Math.random() * 6) - 3;
    if (fake >= 0 && fake !== correct) wrongs.add(fake);
  }
  return [...wrongs];
}

// ============ INTRO CONTENT ============

export const P2_DIVISION_INTRO = {
  "p2m-div1": {
    title: "What is Division?",
    pages: [
      { text: "Division means sharing things equally into groups!", emoji: "🍪 ➗ 👫" },
      { text: "If you have 6 cookies and share them equally among 2 friends, each gets 3!", emoji: "🍪🍪🍪 | 🍪🍪🍪" },
      { text: "We write this as 6 ÷ 2 = 3. The ÷ sign means divide or share!", emoji: "6 ÷ 2 = 3" },
      { text: "10 sweets shared among 5 children: each child gets 2!", emoji: "🍬🍬 🍬🍬 🍬🍬 🍬🍬 🍬🍬" },
      { text: "Let's practise division! You can do it!", emoji: "🦊 ➗ 🧠 = 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildDiv1() {
  return shuffle([
    { q: "Which number sentence shows 12 shared equally among 3?", a: "12 ÷ 3 = 4", choices: ["12 ÷ 3 = 4", "12 + 3 = 15", "12 × 3 = 36"], explain: "Division uses the ÷ sign to share equally. 12 shared among 3 groups gives 4 each, so the correct sentence is 12 ÷ 3 = 4." },
    { q: "6 shared equally among 2 is?", a: "3", choices: ["2", "3", "4"], explain: "Division shares into equal groups. Hand out 6 things one at a time to 2 friends and each ends up with 3, so 6 ÷ 2 = 3." },
    { q: "8 shared equally among 2 is?", a: "4", choices: ["3", "4", "5"], explain: "Division splits a total into equal groups. Share 8 fairly between 2 and each side gets 4, so 8 ÷ 2 = 4." },
    { q: "10 shared equally among 5 is?", a: "2", choices: ["2", "3", "5"], explain: "Division makes equal groups. Split 10 into 5 equal shares and each share is 2, so 10 ÷ 5 = 2." },
    { q: "9 shared equally among 3 is?", a: "3", choices: ["2", "3", "4"], explain: "Division shares a total equally. Put 9 into 3 equal groups and each group holds 3, so 9 ÷ 3 = 3." },
    { q: "12 shared equally among 4 is?", a: "3", choices: ["2", "3", "4"], explain: "Division splits fairly. Share 12 between 4 groups and each group gets 3, so 12 ÷ 4 = 3." },
    { q: "4 shared equally among 2 is?", a: "2", choices: ["1", "2", "3"], explain: "Division means equal sharing. Split 4 into 2 equal groups and each one has 2, so 4 ÷ 2 = 2." },
    { q: "5 children share 15 stickers equally. Each child gets?", a: "3", choices: ["2", "3", "5"], explain: "Division shares a total into equal groups. 15 stickers among 5 children: 15 ÷ 5 = 3, so each child gets 3." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildDiv2() {
  // Dividing by 2
  const pairs = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  return shuffle(pairs.map((n) => {
    const answer = n / 2;
    const wrongs = nearbyWrongs(answer);
    return {
      question: `${n} ÷ 2 = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
      explain: `Division shares into equal groups: split ${n} into 2 equal halves and each half has ${answer}, so ${n} ÷ 2 = ${answer}.`,
    };
  }));
}

function buildDiv3() {
  // Dividing by 3, 4, 5
  const items = [
    { n: 9, d: 3 }, { n: 12, d: 3 }, { n: 15, d: 3 }, { n: 21, d: 3 },
    { n: 8, d: 4 }, { n: 12, d: 4 }, { n: 16, d: 4 }, { n: 20, d: 4 },
    { n: 10, d: 5 }, { n: 25, d: 5 },
  ];
  return shuffle(items.map(({ n, d }) => {
    const answer = n / d;
    const wrongs = nearbyWrongs(answer);
    return {
      question: `${n} ÷ ${d} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
      explain: `Division shares into equal groups: put ${n} into ${d} equal groups and each group gets ${answer}, so ${n} ÷ ${d} = ${answer}.`,
    };
  }));
}

function buildDiv4() {
  // Mixed Division
  const items = [
    { n: 6, d: 2 }, { n: 10, d: 2 }, { n: 14, d: 2 },
    { n: 9, d: 3 }, { n: 18, d: 3 }, { n: 24, d: 3 },
    { n: 16, d: 4 }, { n: 28, d: 4 },
    { n: 15, d: 5 }, { n: 30, d: 5 },
    { n: 20, d: 10 }, { n: 40, d: 10 },
  ];
  return shuffle(items.map(({ n, d }) => {
    const answer = n / d;
    const wrongs = nearbyWrongs(answer);
    return {
      question: `${n} ÷ ${d} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
      explain: `Division shares a total into equal groups: share ${n} among ${d} groups and each gets ${answer}. You can check it by multiplying back: ${d} × ${answer} = ${n}.`,
    };
  }));
}

const BUILDERS = {
  "p2m-div1": buildDiv1, "p2m-div2": buildDiv2, "p2m-div3": buildDiv3, "p2m-div4": buildDiv4,
};

export const P2_DIVISION_QUESTION_COUNTS = {
  "p2m-div1": 8, "p2m-div2": 10, "p2m-div3": 10, "p2m-div4": 12,
};

export function buildDivisionQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
