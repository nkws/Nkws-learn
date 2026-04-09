function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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

function generateChoices(correctAnswer, hours, minutes, moduleId) {
  const wrongs = new Set();

  if (moduleId <= 3) {
    while (wrongs.size < 2) {
      const fakeH = randomInt(1, 12);
      if (fakeH === hours) continue;
      wrongs.add(describeTime(fakeH, minutes));
    }
  } else if (moduleId === 4) {
    const options = [15, 45];
    while (wrongs.size < 2) {
      const fakeH = randomInt(1, 12);
      const fakeM = pick(options);
      const desc = describeTime(fakeH, fakeM);
      if (desc === correctAnswer) continue;
      wrongs.add(desc);
    }
  } else if (moduleId === 5) {
    const fiveMinOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 0];
    while (wrongs.size < 2) {
      const fakeH = pick([hours, randomInt(1, 12)]);
      const fakeM = pick(fiveMinOptions);
      const desc = describeTime(fakeH, fakeM);
      if (desc === correctAnswer) continue;
      wrongs.add(desc);
    }
  } else {
    while (wrongs.size < 2) {
      const offset = pick([-2, -1, 1, 2]);
      const fakeH = hours + offset;
      if (fakeH < 1 || fakeH > 12) continue;
      const desc = describeTime(fakeH, minutes);
      if (desc === correctAnswer) continue;
      wrongs.add(desc);
    }
  }

  return shuffle([correctAnswer, ...wrongs]);
}

// Module 1: Clock Face — teaching questions about the clock itself
const CLOCK_FACE_QUESTIONS = [
  {
    question: "How many numbers are on a clock face?",
    answer: "12",
    choices: ["10", "12", "24"],
    hours: 12, minutes: 0,
  },
  {
    question: "Which hand is shorter, the hour hand or the minute hand?",
    answer: "Hour hand",
    choices: ["Hour hand", "Minute hand", "They're the same"],
    hours: 3, minutes: 0,
  },
  {
    question: "The short hand tells us the...?",
    answer: "Hour",
    choices: ["Hour", "Minutes", "Seconds"],
    hours: 9, minutes: 0,
  },
  {
    question: "The long hand tells us the...?",
    answer: "Minutes",
    choices: ["Hour", "Minutes", "Day"],
    hours: 6, minutes: 30,
  },
  {
    question: "What number is at the very top of the clock?",
    answer: "12",
    choices: ["1", "12", "6"],
    hours: 12, minutes: 0,
  },
  {
    question: "What number is at the very bottom of the clock?",
    answer: "6",
    choices: ["3", "6", "9"],
    hours: 6, minutes: 0,
  },
  {
    question: "When the long hand points to 12, it means...?",
    answer: "Exactly o'clock",
    choices: ["Exactly o'clock", "Half past", "Quarter past"],
    hours: 3, minutes: 0,
  },
  {
    question: "When the long hand points to 6, it means...?",
    answer: "Half past",
    choices: ["Exactly o'clock", "Half past", "Quarter to"],
    hours: 8, minutes: 30,
  },
];

export function generateQuestion(moduleId) {
  if (moduleId === 1) {
    const q = pick(CLOCK_FACE_QUESTIONS);
    return {
      question: `[CLOCK:${formatTime(q.hours, q.minutes)}] ${q.question}`,
      answer: q.answer,
      hours: q.hours,
      minutes: q.minutes,
      choices: shuffle([...q.choices]),
    };
  }

  const context = pick([
    "Time to check the clock!",
    "Look at the clock on the wall!",
    "Koko checks the time!",
    "The school bell is ringing!",
    "Let's see what time it is!",
  ]);

  let hours, minutes, question, answer;

  switch (moduleId) {
    case 2: {
      hours = randomInt(1, 12);
      minutes = 0;
      question = `${context} [CLOCK:${formatTime(hours, minutes)}] What time does this clock show?`;
      answer = `${hours} o'clock`;
      break;
    }
    case 3: {
      hours = randomInt(1, 12);
      minutes = 30;
      question = `${context} [CLOCK:${formatTime(hours, minutes)}] Can you tell me what time this is?`;
      answer = `half past ${hours}`;
      break;
    }
    case 4: {
      hours = randomInt(1, 12);
      minutes = pick([15, 45]);
      question = `${context} [CLOCK:${formatTime(hours, minutes)}] What time is it?`;
      answer = describeTime(hours, minutes);
      break;
    }
    case 5: {
      hours = randomInt(1, 12);
      minutes = pick([5, 10, 20, 25, 35, 40, 50, 55]);
      question = `${context} [CLOCK:${formatTime(hours, minutes)}] What time does this clock show?`;
      answer = describeTime(hours, minutes);
      break;
    }
    case 6: {
      hours = randomInt(1, 10);
      const addHours = pick([1, 2, 3]);
      minutes = pick([0, 30]);
      const resultH = hours + addHours;
      const resultM = minutes;
      const scenario = pick([
        `It's ${describeTime(hours, minutes)} now. Cartoon starts in ${addHours} hour${addHours > 1 ? "s" : ""}!`,
        `School ends at ${describeTime(hours, minutes)}. Keanu plays for ${addHours} hour${addHours > 1 ? "s" : ""} after that!`,
        `It's ${describeTime(hours, minutes)}. Dinner is in ${addHours} hour${addHours > 1 ? "s" : ""}!`,
      ]);
      question = `${scenario} [CLOCK:${formatTime(hours, minutes)}] What time will it be?`;
      answer = describeTime(resultH, resultM);
      const choices = generateChoices(answer, resultH, resultM, moduleId);
      return { question, answer, hours, minutes, choices };
    }
    case 7: {
      const resultH = randomInt(2, 11);
      const subHours = pick([1, 2]);
      const mins = pick([0, 30]);
      hours = resultH + subHours;
      const scenario = pick([
        `Recess ends at ${describeTime(hours, mins)}. It started ${subHours} hour${subHours > 1 ? "s" : ""} ago!`,
        `Bedtime is at ${describeTime(hours, mins)}. ${subHours} hour${subHours > 1 ? "s" : ""} ago Keanu was watching TV!`,
        `It's ${describeTime(hours, mins)} now. ${subHours} hour${subHours > 1 ? "s" : ""} ago Keanu left school!`,
      ]);
      question = `${scenario} [CLOCK:${formatTime(hours, mins)}] What time was it?`;
      answer = describeTime(resultH, mins);
      const choices = generateChoices(answer, resultH, mins, moduleId);
      return { question, answer, hours, minutes: mins, choices };
    }
    default: {
      hours = randomInt(1, 12);
      minutes = 0;
      question = `[CLOCK:${formatTime(hours, minutes)}] What time is this?`;
      answer = `${hours} o'clock`;
    }
  }

  const choices = generateChoices(answer, hours, minutes, moduleId);
  return { question, answer, hours, minutes, choices };
}

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
  "Let's try again! Count the numbers the short hand is pointing to. What number is it near?",
  "So close! Remember, when the long hand points to 12, it's exactly o'clock!",
  "Not quite, but that's okay! Keep looking at the hands on the clock!",
];

export function getGreeting(moduleId, moduleTitle) {
  return `Let's learn about ${moduleTitle}! Here's your first question.`;
}

export function evaluateAndRespond(userAnswer, currentQ, moduleId) {
  const correct = userAnswer === currentQ.answer;
  const nextQ = generateQuestion(moduleId);

  let response;
  if (correct) {
    response = `${pick(PRAISE)} ${nextQ.question}`;
  } else {
    response = `${pick(HINTS)} The answer was ${currentQ.answer}. Let's try this one! ${nextQ.question}`;
  }

  return {
    response,
    correct,
    nextQuestion: nextQ,
  };
}
