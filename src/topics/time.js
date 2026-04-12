import { shuffle } from "../utils/helpers";

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
// Generate nearby wrong hours (e.g. for hour 3, return [2, 4] not [9, 11])
function nearbyHours(h, count = 2) {
  const wrongs = [];
  const offsets = shuffle([-1, 1, -2, 2, -3, 3]);
  for (const off of offsets) {
    if (wrongs.length >= count) break;
    let fake = h + off;
    if (fake < 1) fake += 12;
    if (fake > 12) fake -= 12;
    if (fake !== h) wrongs.push(fake);
  }
  return wrongs;
}

// Generate nearby minute-based wrong choices
function nearbyMinuteChoices(correct, h, m, moduleId) {
  if (moduleId === "time-4") {
    // Quarter past/to — swap between quarter past and quarter to with nearby hours
    const pool = [];
    const nearby = nearbyHours(h);
    pool.push(describeTime(nearby[0], m));
    // Also offer the opposite quarter with same hour
    if (m === 15) pool.push(describeTime(h, 45));
    else pool.push(describeTime(h, 15));
    return pool.filter((c) => c !== correct).slice(0, 2);
  }

  if (moduleId === "time-5") {
    // Five-min intervals — nearby minutes and nearby hours
    const fiveMinOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const mIdx = fiveMinOptions.indexOf(m);
    const wrongs = [];
    // Nearby minutes same hour
    if (mIdx > 0) wrongs.push(describeTime(h, fiveMinOptions[mIdx - 1]));
    if (mIdx < fiveMinOptions.length - 1) wrongs.push(describeTime(h, fiveMinOptions[mIdx + 1]));
    // Nearby hour same minutes
    const nh = nearbyHours(h, 1);
    wrongs.push(describeTime(nh[0], m));
    return shuffle(wrongs.filter((c) => c !== correct)).slice(0, 2);
  }

  // Default: nearby hours
  const nearby = nearbyHours(h, 2);
  return nearby.map((nh) => describeTime(nh, m));
}

// ============ INTRO CONTENT ============

export const TIME_INTRO = {
  "time-1": {
    title: "The Clock Face",
    pages: [
      {
        text: "This is a clock! It has numbers from 1 to 12 arranged in a circle.",
        clock: { h: 12, m: 0 },
      },
      {
        text: "A clock has two hands. The short hand shows the HOUR. The long hand shows the MINUTES.",
        clock: { h: 3, m: 0 },
      },
      {
        text: "The short hand is red — it points to the hour. Right now it points to 3.",
        clock: { h: 3, m: 0 },
      },
      {
        text: "The long hand is green. When it points to 12, it means exactly o'clock!",
        clock: { h: 3, m: 0 },
      },
      {
        text: "When the long hand points to 6, it means half past — the minute hand has gone half way around!",
        clock: { h: 8, m: 30 },
      },
      {
        text: "Now let's test what you learned! Ready?",
        clock: { h: 10, m: 10 },
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildTime1() {
  return shuffle([
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
  ]).map((item) => ({
    question: `[CLOCK:${formatTime(item.h, item.m)}] ${item.q}`,
    answer: item.a,
    choices: shuffle([...item.choices]),
    hours: item.h,
    minutes: item.m,
  }));
}

function buildTime2() {
  return shuffle(
    Array.from({ length: 12 }, (_, i) => {
      const h = i + 1;
      const answer = `${h} o'clock`;
      const nearby = nearbyHours(h, 2);
      return {
        question: `[CLOCK:${formatTime(h, 0)}] What time does this clock show?`,
        answer,
        choices: shuffle([answer, `${nearby[0]} o'clock`, `${nearby[1]} o'clock`]),
        hours: h, minutes: 0,
      };
    })
  );
}

function buildTime3() {
  return shuffle(
    Array.from({ length: 12 }, (_, i) => {
      const h = i + 1;
      const answer = `half past ${h}`;
      const nearby = nearbyHours(h, 2);
      return {
        question: `[CLOCK:${formatTime(h, 30)}] What time does this clock show?`,
        answer,
        choices: shuffle([answer, `half past ${nearby[0]}`, `half past ${nearby[1]}`]),
        hours: h, minutes: 30,
      };
    })
  );
}

function buildTime4() {
  const questions = [];
  const qpHours = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).slice(0, 6);
  for (const h of qpHours) {
    const answer = `quarter past ${h}`;
    const wrongs = nearbyMinuteChoices(answer, h, 15, "time-4");
    questions.push({
      question: `[CLOCK:${formatTime(h, 15)}] What time does this clock show?`,
      answer,
      choices: shuffle([answer, ...wrongs.slice(0, 2)]),
      hours: h, minutes: 15,
    });
  }
  const qtHours = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).slice(0, 6);
  for (const h of qtHours) {
    const nextH = h === 12 ? 1 : h + 1;
    const answer = `quarter to ${nextH}`;
    const wrongs = nearbyMinuteChoices(answer, h, 45, "time-4");
    questions.push({
      question: `[CLOCK:${formatTime(h, 45)}] What time does this clock show?`,
      answer,
      choices: shuffle([answer, ...wrongs.slice(0, 2)]),
      hours: h, minutes: 45,
    });
  }
  return shuffle(questions);
}

function buildTime5() {
  const fiveMinValues = [5, 10, 20, 25, 35, 40, 50, 55];
  const picked = shuffle(fiveMinValues).slice(0, 12);
  const hours = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  return shuffle(
    picked.map((m, i) => {
      const h = hours[i % 12];
      const answer = describeTime(h, m);
      const wrongs = nearbyMinuteChoices(answer, h, m, "time-5");
      return {
        question: `[CLOCK:${formatTime(h, m)}] What time does this clock show?`,
        answer,
        choices: shuffle([answer, ...wrongs.slice(0, 2)]),
        hours: h, minutes: m,
      };
    })
  );
}

function buildTime6() {
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
  return shuffle(
    scenarios.map((s) => {
      const resultH = s.h + s.add;
      const answer = describeTime(resultH, s.m);
      const nearby = nearbyHours(resultH, 2);
      return {
        question: `${s.ctx} [CLOCK:${formatTime(s.h, s.m)}] What time will it be?`,
        answer,
        choices: shuffle([answer, describeTime(nearby[0], s.m), describeTime(nearby[1], s.m)]),
        hours: s.h, minutes: s.m,
      };
    })
  );
}

function buildTime7() {
  const scenarios = [
    { h: 5, m: 0, sub: 1, ctx: "It's 5 o'clock. 1 hour ago you were playing!" },
    { h: 8, m: 0, sub: 2, ctx: "It's 8 o'clock. 2 hours ago you had dinner!" },
    { h: 4, m: 30, sub: 1, ctx: "It's half past 4. 1 hour ago school ended!" },
    { h: 10, m: 0, sub: 3, ctx: "It's 10 o'clock. 3 hours ago you woke up!" },
    { h: 6, m: 0, sub: 2, ctx: "It's 6 o'clock. 2 hours ago it was recess!" },
    { h: 9, m: 30, sub: 2, ctx: "It's half past 9. 2 hours ago you were reading!" },
    { h: 3, m: 0, sub: 1, ctx: "It's 3 o'clock. 1 hour ago you had lunch!" },
    { h: 7, m: 0, sub: 3, ctx: "It's 7 o'clock. 3 hours ago school started!" },
    { h: 11, m: 0, sub: 2, ctx: "It's 11 o'clock. 2 hours ago the bus came!" },
    { h: 12, m: 0, sub: 1, ctx: "It's 12 o'clock. 1 hour ago it was assembly!" },
  ];
  return shuffle(
    scenarios.map((s) => {
      const resultH = s.h - s.sub;
      const answer = describeTime(resultH, s.m);
      const nearby = nearbyHours(resultH, 2);
      return {
        question: `${s.ctx} [CLOCK:${formatTime(s.h, s.m)}] What time was it?`,
        answer,
        choices: shuffle([answer, describeTime(nearby[0], s.m), describeTime(nearby[1], s.m)]),
        hours: s.h, minutes: s.m,
      };
    })
  );
}

const TIME_BUILDERS = {
  "time-1": buildTime1,
  "time-2": buildTime2,
  "time-3": buildTime3,
  "time-4": buildTime4,
  "time-5": buildTime5,
  "time-6": buildTime6,
  "time-7": buildTime7,
};

export const TIME_QUESTION_COUNTS = {
  "time-1": 10, "time-2": 12, "time-3": 12, "time-4": 12,
  "time-5": 12, "time-6": 10, "time-7": 10,
};

export function buildTimeQuestions(moduleId) {
  const builder = TIME_BUILDERS[moduleId];
  return builder ? builder() : [];
}
