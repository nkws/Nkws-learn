function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nearbyWrongs(correct, count = 2) {
  const wrongs = new Set();
  const offsets = shuffle([-1, 1, -2, 2, -3, 3]);
  for (const off of offsets) {
    if (wrongs.size >= count) break;
    const fake = correct + off;
    if (fake >= 0 && fake <= 10 && fake !== correct) wrongs.add(fake);
  }
  while (wrongs.size < count) {
    const fake = Math.floor(Math.random() * 11);
    if (fake !== correct) wrongs.add(fake);
  }
  return [...wrongs];
}

function makeQ(a, b) {
  const answer = a - b;
  const wrongs = nearbyWrongs(answer);
  return {
    question: `What is ${a} - ${b}?`,
    answer: String(answer),
    choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
  };
}

export const SUBTRACTION_INTRO = {
  "sub-1": {
    title: "What is Subtraction?",
    pages: [
      { text: "Subtraction means taking away! When you subtract, you get LESS.", emoji: "🍎🍎🍎 - 🍎 = 🍎🍎" },
      { text: "If you have 5 apples and eat 2, you have 3 left!", emoji: "🍎🍎🍎🍎🍎 - 🍎🍎 = 🍎🍎🍎" },
      { text: "We write this as: 5 - 2 = 3. The - sign means TAKE AWAY!", emoji: "5 - 2 = 3" },
      { text: "If you have 4 stars and lose 1, how many left? 4 - 1 = 3!", emoji: "⭐⭐⭐⭐ - ⭐ = ⭐⭐⭐" },
      { text: "Now let's practice! You can do it!", emoji: "🦊 ➖ 🧠 = 💪" },
    ],
  },
};

function buildSub1() {
  return shuffle([
    { q: "What does the - sign mean?", a: "Take away", choices: ["Add", "Take away", "Equal"] },
    { q: "If you have 3 apples and eat 1, how many left?", a: "2", choices: ["1", "2", "3"] },
    { q: "5 - 1 = ?", a: "4", choices: ["3", "4", "5"] },
    { q: "3 - 2 = ?", a: "1", choices: ["0", "1", "2"] },
    { q: "4 - 0 = ?", a: "4", choices: ["0", "4", "3"] },
    { q: "2 - 2 = ?", a: "0", choices: ["0", "1", "2"] },
    { q: "When we subtract, do we get more or less?", a: "Less", choices: ["More", "Less", "Same"] },
    { q: "5 - 3 = ?", a: "2", choices: ["1", "2", "3"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildSub2() {
  return shuffle(Array.from({ length: 10 }, (_, i) => makeQ(i + 1, 1)));
}

function buildSub3() {
  return shuffle(Array.from({ length: 9 }, (_, i) => makeQ(i + 2, 2)));
}

function buildSub4() {
  return shuffle([5, 4, 3, 2, 1, 0].map((b) => makeQ(5, b)));
}

function buildSub5() {
  return shuffle(Array.from({ length: 11 }, (_, i) => makeQ(10, i)));
}

function buildSub6() {
  const questions = [];
  const used = new Set();
  while (questions.length < 12) {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * (a + 1));
    const key = `${a}-${b}`;
    if (used.has(key)) continue;
    used.add(key);
    questions.push(makeQ(a, b));
  }
  return shuffle(questions);
}

const BUILDERS = {
  "sub-1": buildSub1, "sub-2": buildSub2, "sub-3": buildSub3,
  "sub-4": buildSub4, "sub-5": buildSub5, "sub-6": buildSub6,
};

export const SUBTRACTION_QUESTION_COUNTS = {
  "sub-1": 8, "sub-2": 10, "sub-3": 9, "sub-4": 6, "sub-5": 11, "sub-6": 12,
};

export function buildSubtractionQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
