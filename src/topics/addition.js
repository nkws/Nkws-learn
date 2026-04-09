function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Generate nearby wrong answers (off by 1 or 2)
function nearbyWrongs(correct, count = 2) {
  const wrongs = new Set();
  const offsets = shuffle([-1, 1, -2, 2, -3, 3]);
  for (const off of offsets) {
    if (wrongs.size >= count) break;
    const fake = correct + off;
    if (fake >= 0 && fake <= 10 && fake !== correct) {
      wrongs.add(fake);
    }
  }
  // Fallback if not enough
  while (wrongs.size < count) {
    const fake = Math.floor(Math.random() * 11);
    if (fake !== correct) wrongs.add(fake);
  }
  return [...wrongs];
}

function makeQ(a, b) {
  const answer = a + b;
  const wrongs = nearbyWrongs(answer);
  return {
    question: `What is ${a} + ${b}?`,
    answer: String(answer),
    choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
  };
}

// ============ INTRO CONTENT ============

export const ADDITION_INTRO = {
  "add-1": {
    title: "What is Addition?",
    pages: [
      {
        text: "Addition means putting things together! When you add, you get MORE.",
        emoji: "🍎 + 🍎 = 🍎🍎",
      },
      {
        text: "If you have 2 apples and get 1 more, you now have 3 apples!",
        emoji: "🍎🍎 + 🍎 = 🍎🍎🍎",
      },
      {
        text: "We write this as: 2 + 1 = 3. The + sign means ADD!",
        emoji: "2 + 1 = 3",
      },
      {
        text: "If you have 3 stars and get 2 more, how many do you have? 3 + 2 = 5!",
        emoji: "⭐⭐⭐ + ⭐⭐ = ⭐⭐⭐⭐⭐",
      },
      {
        text: "Now let's practice! Koko will ask you some addition questions. You can do it!",
        emoji: "🦊 ➕ 🧠 = 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildAdd1() {
  // Intro quiz — basic concept questions
  return shuffle([
    { q: "What does the + sign mean?", a: "Add", choices: ["Add", "Take away", "Equal"], },
    { q: "If you have 1 apple and get 1 more, how many?", a: "2", choices: ["1", "2", "3"] },
    { q: "2 + 1 = ?", a: "3", choices: ["2", "3", "4"] },
    { q: "1 + 1 = ?", a: "2", choices: ["1", "2", "3"] },
    { q: "What is 0 + 3?", a: "3", choices: ["0", "3", "4"] },
    { q: "3 + 0 = ?", a: "3", choices: ["0", "3", "1"] },
    { q: "When we add, do we get more or less?", a: "More", choices: ["More", "Less", "Same"] },
    { q: "2 + 2 = ?", a: "4", choices: ["3", "4", "5"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildAdd2() {
  // Adding 1: x + 1 for x = 0..9
  return shuffle(
    Array.from({ length: 10 }, (_, i) => makeQ(i, 1))
  );
}

function buildAdd3() {
  // Adding 2: x + 2 for x = 0..8
  return shuffle(
    Array.from({ length: 9 }, (_, i) => makeQ(i, 2))
  );
}

function buildAdd4() {
  // Making 5: all pairs that sum to 5
  const pairs = [[0,5],[1,4],[2,3],[3,2],[4,1],[5,0]];
  return shuffle(pairs.map(([a, b]) => makeQ(a, b)));
}

function buildAdd5() {
  // Making 10: all pairs that sum to 10
  const pairs = [[0,10],[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1],[10,0]];
  // Filter to keep within 10
  return shuffle(
    pairs.filter(([a, b]) => a <= 10 && b <= 10).map(([a, b]) => makeQ(a, b))
  );
}

function buildAdd6() {
  // Mixed addition within 10
  const questions = [];
  const used = new Set();
  while (questions.length < 12) {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * (10 - a + 1));
    const key = `${a}+${b}`;
    if (used.has(key)) continue;
    used.add(key);
    questions.push(makeQ(a, b));
  }
  return shuffle(questions);
}

const ADDITION_BUILDERS = {
  "add-1": buildAdd1,
  "add-2": buildAdd2,
  "add-3": buildAdd3,
  "add-4": buildAdd4,
  "add-5": buildAdd5,
  "add-6": buildAdd6,
};

export const ADDITION_QUESTION_COUNTS = {
  "add-1": 8, "add-2": 10, "add-3": 9, "add-4": 6,
  "add-5": 11, "add-6": 12,
};

export function buildAdditionQuestions(moduleId) {
  const builder = ADDITION_BUILDERS[moduleId];
  return builder ? builder() : [];
}
