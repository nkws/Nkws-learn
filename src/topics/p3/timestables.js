function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nearbyWrongs(correct, base, count = 2) {
  const wrongs = new Set();
  const offsets = shuffle([-base, base, -1, 1, -(base - 1), base + 1]);
  for (const off of offsets) {
    if (wrongs.size >= count) break;
    const fake = correct + off;
    if (fake > 0 && fake !== correct) wrongs.add(fake);
  }
  while (wrongs.size < count) {
    const fake = correct + Math.floor(Math.random() * 10) - 5;
    if (fake > 0 && fake !== correct) wrongs.add(fake);
  }
  return [...wrongs];
}

// ============ QUESTION BANKS ============

function buildTT1() {
  // Times Tables 6, 7
  const questions = [];
  for (let i = 1; i <= 10; i++) {
    const t = i <= 5 ? 6 : 7;
    const answer = t * i;
    const wrongs = nearbyWrongs(answer, t);
    questions.push({
      question: `${t} x ${i} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  const extras = [{ a: 6, b: 8 }, { a: 7, b: 9 }];
  for (const e of extras) {
    const answer = e.a * e.b;
    const wrongs = nearbyWrongs(answer, e.a);
    questions.push({
      question: `${e.a} x ${e.b} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  return shuffle(questions);
}

function buildTT2() {
  // Times Tables 8, 9
  const questions = [];
  for (let i = 1; i <= 10; i++) {
    const t = i <= 5 ? 8 : 9;
    const answer = t * i;
    const wrongs = nearbyWrongs(answer, t);
    questions.push({
      question: `${t} x ${i} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  const extras = [{ a: 8, b: 7 }, { a: 9, b: 6 }];
  for (const e of extras) {
    const answer = e.a * e.b;
    const wrongs = nearbyWrongs(answer, e.a);
    questions.push({
      question: `${e.a} x ${e.b} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  return shuffle(questions);
}

function buildTT3() {
  // Mixed Times Tables 2-9
  const questions = [];
  const used = new Set();
  while (questions.length < 12) {
    const a = Math.floor(Math.random() * 8) + 2;
    const b = Math.floor(Math.random() * 9) + 2;
    const key = `${a}x${b}`;
    if (used.has(key)) continue;
    used.add(key);
    const answer = a * b;
    const wrongs = nearbyWrongs(answer, a);
    questions.push({
      question: `${a} x ${b} = ?`,
      answer: String(answer),
      choices: shuffle([String(answer), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  return shuffle(questions);
}

function buildTT4() {
  // Division Facts
  const questions = [];
  const used = new Set();
  while (questions.length < 12) {
    const divisor = Math.floor(Math.random() * 8) + 2;
    const quotient = Math.floor(Math.random() * 9) + 2;
    const dividend = divisor * quotient;
    const key = `${dividend}/${divisor}`;
    if (used.has(key)) continue;
    used.add(key);
    const wrongs = nearbyWrongs(quotient, 1);
    questions.push({
      question: `${dividend} \u00f7 ${divisor} = ?`,
      answer: String(quotient),
      choices: shuffle([String(quotient), String(wrongs[0]), String(wrongs[1])]),
    });
  }
  return shuffle(questions);
}

const BUILDERS = {
  "p3m-tt1": buildTT1, "p3m-tt2": buildTT2, "p3m-tt3": buildTT3, "p3m-tt4": buildTT4,
};

export const P3_TIMESTABLES_QUESTION_COUNTS = {
  "p3m-tt1": 12, "p3m-tt2": 12, "p3m-tt3": 12, "p3m-tt4": 12,
};

export function buildTimesTablesQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
