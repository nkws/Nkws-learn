function formatTime(h, m) {
  return `${h}:${String(m).padStart(2, "0")}`;
}

function describeTime(h, m) {
  if (m === 0) return `${h} o'clock`;
  if (m === 30) return `half past ${h}`;
  if (m === 15) return `quarter past ${h}`;
  if (m === 45) return `quarter to ${h === 12 ? 1 : h + 1}`;
  return `${h}:${String(m).padStart(2, "0")}`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Build wrong choices that are plausible for the module
function wrongChoices(correct, pool, count = 2) {
  const wrongs = [];
  const shuffled = shuffle(pool.filter((c) => c !== correct));
  for (let i = 0; i < count && i < shuffled.length; i++) {
    wrongs.push(shuffled[i]);
  }
  return wrongs;
}

// ============ MODULE QUESTION BANKS ============

// Module 1: Clock Face Basics (8 questions)
function buildModule1() {
  return [
    { q: "How many numbers are on a clock face?", a: "12", choices: ["10", "12", "24"], h: 12, m: 0 },
    { q: "Which hand is shorter?", a: "Hour hand", choices: ["Hour hand", "Minute hand", "They're the same"], h: 3, m: 0 },
    { q: "The short hand tells us the...?", a: "Hour", choices: ["Hour", "Minutes", "Seconds"], h: 9, m: 0 },
    { q: "The long hand tells us the...?", a: "Minutes", choices: ["Hour", "Minutes", "Day"], h: 6, m: 30 },
    { q: "What number is at the very top of the clock?", a: "12", choices: ["1", "12", "6"], h: 12, m: 0 },
    { q: "What number is at the very bottom of the clock?", a: "6", choices: ["3", "6", "9"], h: 6, m: 0 },
    { q: "When the long hand points to 12, it means...?", a: "Exactly o'clock", choices: ["Exactly o'clock", "Half past", "Quarter past"], h: 3, m: 0 },
    { q: "When the long hand points to 6, it means...?", a: "Half past", choices: ["Exactly o'clock", "Half past", "Quarter to"], h: 8, m: 30 },
    { q: "What number comes after 12 on a clock?", a: "1", choices: ["1", "13", "0"], h: 12, m: 0 },
    { q: "How many hands does a clock have?", a: "2", choices: ["1", "2", "3"], h: 10, m: 10 },
  ].map((item) => ({
    question: `[CLOCK:${formatTime(item.h, item.m)}] ${item.q}`,
    answer: item.a,
    choices: shuffle([...item.choices]),
    hours: item.h,
    minutes: item.m,
  }));
}

// Module 2: O'Clock (12 questions — one per hour)
function buildModule2() {
  const pool = [];
  for (let h = 1; h <= 12; h++) {
    pool.push(`${h} o'clock`);
  }
  return shuffle(
    Array.from({ length: 12 }, (_, i) => {
      const h = i + 1;
      const answer = `${h} o'clock`;
      return {
        question: `[CLOCK:${formatTime(h, 0)}] What time does this clock show?`,
        answer,
        choices: shuffle([answer, ...wrongChoices(answer, pool)]),
        hours: h,
        minutes: 0,
      };
    })
  );
}

// Module 3: Half Past (12 questions)
function buildModule3() {
  const pool = [];
  for (let h = 1; h <= 12; h++) {
    pool.push(`half past ${h}`);
  }
  return shuffle(
    Array.from({ length: 12 }, (_, i) => {
      const h = i + 1;
      const answer = `half past ${h}`;
      return {
        question: `[CLOCK:${formatTime(h, 30)}] What time does this clock show?`,
        answer,
        choices: shuffle([answer, ...wrongChoices(answer, pool)]),
        hours: h,
        minutes: 30,
      };
    })
  );
}

// Module 4: Quarter Past & Quarter To (12 questions — 6 quarter past, 6 quarter to)
function buildModule4() {
  const allChoices = [];
  for (let h = 1; h <= 12; h++) {
    allChoices.push(`quarter past ${h}`);
    allChoices.push(`quarter to ${h}`);
  }
  const questions = [];
  // 6 quarter past
  const qpHours = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).slice(0, 6);
  for (const h of qpHours) {
    const answer = `quarter past ${h}`;
    questions.push({
      question: `[CLOCK:${formatTime(h, 15)}] What time does this clock show?`,
      answer,
      choices: shuffle([answer, ...wrongChoices(answer, allChoices)]),
      hours: h,
      minutes: 15,
    });
  }
  // 6 quarter to
  const qtHours = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).slice(0, 6);
  for (const h of qtHours) {
    const nextH = h === 12 ? 1 : h + 1;
    const answer = `quarter to ${nextH}`;
    questions.push({
      question: `[CLOCK:${formatTime(h, 45)}] What time does this clock show?`,
      answer,
      choices: shuffle([answer, ...wrongChoices(answer, allChoices)]),
      hours: h,
      minutes: 45,
    });
  }
  return shuffle(questions);
}

// Module 5: Five-Minute Intervals (12 questions)
function buildModule5() {
  const fiveMinValues = [5, 10, 20, 25, 35, 40, 50, 55];
  const allChoices = [];
  for (let h = 1; h <= 12; h++) {
    for (const m of fiveMinValues) {
      allChoices.push(describeTime(h, m));
    }
  }
  const picked = shuffle(fiveMinValues).slice(0, 12);
  const hours = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  return shuffle(
    picked.map((m, i) => {
      const h = hours[i % 12];
      const answer = describeTime(h, m);
      return {
        question: `[CLOCK:${formatTime(h, m)}] What time does this clock show?`,
        answer,
        choices: shuffle([answer, ...wrongChoices(answer, allChoices)]),
        hours: h,
        minutes: m,
      };
    })
  );
}

// Module 6: Time Addition (10 questions)
function buildModule6() {
  const scenarios = [
    { h: 2, m: 0, add: 1, ctx: "It's 2 o'clock. Cartoon starts in 1 hour!" },
    { h: 3, m: 0, add: 2, ctx: "It's 3 o'clock. Dinner is in 2 hours!" },
    { h: 1, m: 30, add: 1, ctx: "It's half past 1. School ends in 1 hour!" },
    { h: 4, m: 0, add: 3, ctx: "It's 4 o'clock. Bedtime is in 3 hours!" },
    { h: 7, m: 0, add: 2, ctx: "It's 7 o'clock. The movie starts in 2 hours!" },
    { h: 5, m: 30, add: 2, ctx: "It's half past 5. Dad comes home in 2 hours!" },
    { h: 9, m: 0, add: 1, ctx: "It's 9 o'clock. Recess is in 1 hour!" },
    { h: 6, m: 0, add: 3, ctx: "It's 6 o'clock. Bedtime is in 3 hours!" },
    { h: 8, m: 30, add: 1, ctx: "It's half past 8. The show starts in 1 hour!" },
    { h: 10, m: 0, add: 2, ctx: "It's 10 o'clock. Lunch is in 2 hours!" },
  ];
  const allAnswers = scenarios.map((s) => describeTime(s.h + s.add, s.m));
  return shuffle(
    scenarios.map((s) => {
      const answer = describeTime(s.h + s.add, s.m);
      return {
        question: `${s.ctx} [CLOCK:${formatTime(s.h, s.m)}] What time will it be?`,
        answer,
        choices: shuffle([answer, ...wrongChoices(answer, allAnswers)]),
        hours: s.h,
        minutes: s.m,
      };
    })
  );
}

// Module 7: Time Subtraction (10 questions)
function buildModule7() {
  const scenarios = [
    { h: 5, m: 0, sub: 1, ctx: "It's 5 o'clock. 1 hour ago Keanu was playing!" },
    { h: 8, m: 0, sub: 2, ctx: "It's 8 o'clock. 2 hours ago Keanu had dinner!" },
    { h: 4, m: 30, sub: 1, ctx: "It's half past 4. 1 hour ago school ended!" },
    { h: 10, m: 0, sub: 3, ctx: "It's 10 o'clock. 3 hours ago Keanu woke up!" },
    { h: 6, m: 0, sub: 2, ctx: "It's 6 o'clock. 2 hours ago it was recess!" },
    { h: 9, m: 30, sub: 2, ctx: "It's half past 9. 2 hours ago Keanu was reading!" },
    { h: 3, m: 0, sub: 1, ctx: "It's 3 o'clock. 1 hour ago Keanu had lunch!" },
    { h: 7, m: 0, sub: 3, ctx: "It's 7 o'clock. 3 hours ago school started!" },
    { h: 11, m: 0, sub: 2, ctx: "It's 11 o'clock. 2 hours ago the bus came!" },
    { h: 12, m: 0, sub: 1, ctx: "It's 12 o'clock. 1 hour ago it was assembly!" },
  ];
  const allAnswers = scenarios.map((s) => describeTime(s.h - s.sub, s.m));
  return shuffle(
    scenarios.map((s) => {
      const answer = describeTime(s.h - s.sub, s.m);
      return {
        question: `${s.ctx} [CLOCK:${formatTime(s.h, s.m)}] What time was it?`,
        answer,
        choices: shuffle([answer, ...wrongChoices(answer, allAnswers)]),
        hours: s.h,
        minutes: s.m,
      };
    })
  );
}

// Build the full question bank for a module
const MODULE_BUILDERS = {
  1: buildModule1,
  2: buildModule2,
  3: buildModule3,
  4: buildModule4,
  5: buildModule5,
  6: buildModule6,
  7: buildModule7,
};

export function buildModuleQuestions(moduleId) {
  const builder = MODULE_BUILDERS[moduleId];
  return builder ? builder() : [];
}

// Fixed question counts per module (avoids building full questions just to count)
export const MODULE_QUESTION_COUNTS = { 1: 10, 2: 12, 3: 12, 4: 12, 5: 12, 6: 10, 7: 10 };

// ============ RESPONSES ============

const PRAISE = [
  "Correct! Well done!",
  "You got it! Great job!",
  "Well done! You're a time champion!",
  "Great job, Keanu! So clever!",
  "Exactly right! Awesome!",
  "Perfect! You're amazing!",
  "Brilliant! Koko is so proud of you!",
  "Spot on! You're doing so well!",
];

const HINTS = [
  "Hmm, not quite! Look at where the short hand is pointing. That tells us the hour!",
  "Almost! The short hand shows the hour, the long hand shows the minutes. Have another look!",
  "Let's try again! Count the numbers the short hand is pointing to.",
  "So close! Remember, when the long hand points to 12, it's exactly o'clock!",
  "Not quite, but that's okay! Keep looking at the hands on the clock!",
];

export function getPraise() {
  return pick(PRAISE);
}

export function getHint(correctAnswer) {
  return `${pick(HINTS)} The answer was ${correctAnswer}.`;
}
