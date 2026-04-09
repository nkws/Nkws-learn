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
    if (fake >= 0 && fake !== correct) wrongs.add(fake);
  }
  while (wrongs.size < count) {
    const fake = correct + Math.floor(Math.random() * 10) - 5;
    if (fake >= 0 && fake !== correct) wrongs.add(fake);
  }
  return [...wrongs];
}

// ============ INTRO CONTENT ============

export const P2_MULTIPLICATION_INTRO = {
  "p2m-mul1": {
    title: "Multiplication Concept",
    pages: [
      { text: "Multiplication is a fast way of adding the same number many times!", emoji: "🔢 ✖️ 🔢" },
      { text: "3 groups of 2 means 2 + 2 + 2 = 6. We write this as 3 x 2 = 6!", emoji: "🍎🍎 🍎🍎 🍎🍎" },
      { text: "The x sign means 'groups of' or 'times'.", emoji: "✖️" },
      { text: "4 groups of 5 means 5 + 5 + 5 + 5 = 20. So 4 x 5 = 20!", emoji: "⭐⭐⭐⭐⭐ x 4" },
      { text: "Let's practice multiplication! You can do it!", emoji: "🦊 ✖️ 🧠 = 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildMul1() {
  return shuffle([
    { q: "What does the x sign mean?", a: "Groups of", choices: ["Groups of", "Take away", "Share"] },
    { q: "3 groups of 2 is?", a: "6", choices: ["5", "6", "8"] },
    { q: "2 groups of 4 is?", a: "8", choices: ["6", "8", "10"] },
    { q: "4 groups of 3 is?", a: "12", choices: ["10", "12", "14"] },
    { q: "5 groups of 2 is?", a: "10", choices: ["8", "10", "12"] },
    { q: "2 groups of 5 is?", a: "10", choices: ["7", "10", "12"] },
    { q: "3 groups of 3 is?", a: "9", choices: ["6", "9", "12"] },
    { q: "Multiplication is a fast way of...?", a: "Adding", choices: ["Adding", "Subtracting", "Sharing"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMul2() {
  // Times Tables 2, 5, 10
  const questions = [];
  for (let i = 1; i <= 10; i++) {
    const tables = [2, 5, 10];
    const t = tables[i % 3];
    const answer = t * i;
    const wrongs = nearbyWrongs(answer);
    questions.push({
      question: `${t} x ${i} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  // Add 2 extras to reach 12
  const extras = [
    { a: 2, b: 6 }, { a: 5, b: 8 },
  ];
  for (const e of extras) {
    const answer = e.a * e.b;
    const wrongs = nearbyWrongs(answer);
    questions.push({
      question: `${e.a} x ${e.b} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  return shuffle(questions);
}

function buildMul3() {
  // Times Tables 3, 4
  const questions = [];
  for (let i = 1; i <= 10; i++) {
    const t = i <= 5 ? 3 : 4;
    const answer = t * i;
    const wrongs = nearbyWrongs(answer);
    questions.push({
      question: `${t} x ${i} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  // Add 2 extras to reach 12
  const extras = [
    { a: 3, b: 7 }, { a: 4, b: 9 },
  ];
  for (const e of extras) {
    const answer = e.a * e.b;
    const wrongs = nearbyWrongs(answer);
    questions.push({
      question: `${e.a} x ${e.b} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  return shuffle(questions);
}

function buildMul4() {
  // Mixed Multiplication — random times tables within 10
  const questions = [];
  const used = new Set();
  while (questions.length < 12) {
    const a = Math.floor(Math.random() * 9) + 2;
    const b = Math.floor(Math.random() * 9) + 2;
    const key = `${a}x${b}`;
    if (used.has(key)) continue;
    used.add(key);
    const answer = a * b;
    const wrongs = nearbyWrongs(answer);
    questions.push({
      question: `${a} x ${b} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  return shuffle(questions);
}

const BUILDERS = {
  "p2m-mul1": buildMul1, "p2m-mul2": buildMul2, "p2m-mul3": buildMul3, "p2m-mul4": buildMul4,
};

export const P2_MULTIPLICATION_QUESTION_COUNTS = {
  "p2m-mul1": 8, "p2m-mul2": 12, "p2m-mul3": 12, "p2m-mul4": 12,
};

export function buildMultiplicationQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
