// Time generation helpers per level
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

// Shuffle an array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Generate wrong choices that look plausible
function generateChoices(correctAnswer, hours, minutes, level) {
  const wrongs = new Set();

  if (level <= 2) {
    // O'clock or half past — vary the hour
    while (wrongs.size < 2) {
      const fakeH = randomInt(1, 12);
      if (fakeH === hours) continue;
      wrongs.add(describeTime(fakeH, minutes));
    }
  } else if (level === 3) {
    // Quarter past/to — mix quarter past/to with different hours
    const options = [15, 45];
    while (wrongs.size < 2) {
      const fakeH = randomInt(1, 12);
      const fakeM = pick(options);
      const desc = describeTime(fakeH, fakeM);
      if (desc === correctAnswer) continue;
      wrongs.add(desc);
    }
  } else if (level === 4) {
    // Five-minute intervals
    const fiveMinOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 0];
    while (wrongs.size < 2) {
      const fakeH = pick([hours, randomInt(1, 12)]);
      const fakeM = pick(fiveMinOptions);
      const desc = describeTime(fakeH, fakeM);
      if (desc === correctAnswer) continue;
      wrongs.add(desc);
    }
  } else {
    // Time addition/subtraction — vary by 1-2 hours
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

// Generate a question + answer + choices for a given level
function generateQuestion(level) {
  const contexts = [
    "Time to check the clock! 🕐",
    "Look at the clock on the wall! 🏫",
    "Koko checks the time! ⏰",
    "The school bell is ringing! 🔔",
    "Let's see what time it is! 👀",
  ];

  const singapore = [
    "It's time for recess! 🍜",
    "School is starting! 📚",
    "Cartoon time! 📺",
    "Time for bed soon! 🌙",
    "Koko is checking the clock at the canteen! 🦊",
  ];

  let hours, minutes, question, answer;

  switch (level) {
    case 1: {
      hours = randomInt(1, 12);
      minutes = 0;
      question = `${pick(contexts)} ${pick(singapore)} [CLOCK:${formatTime(hours, minutes)}] What time does this clock show?`;
      answer = `${hours} o'clock`;
      break;
    }
    case 2: {
      hours = randomInt(1, 12);
      minutes = 30;
      question = `${pick(contexts)} ${pick(singapore)} [CLOCK:${formatTime(hours, minutes)}] Can you tell me what time this is?`;
      answer = `half past ${hours}`;
      break;
    }
    case 3: {
      hours = randomInt(1, 12);
      minutes = pick([15, 45]);
      question = `${pick(contexts)} ${pick(singapore)} [CLOCK:${formatTime(hours, minutes)}] What time is it?`;
      answer = describeTime(hours, minutes);
      break;
    }
    case 4: {
      hours = randomInt(1, 12);
      minutes = pick([5, 10, 20, 25, 35, 40, 50, 55]);
      question = `${pick(contexts)} ${pick(singapore)} [CLOCK:${formatTime(hours, minutes)}] What time does this clock show?`;
      answer = describeTime(hours, minutes);
      break;
    }
    case 5: {
      hours = randomInt(1, 10);
      const addHours = pick([1, 2, 3]);
      minutes = pick([0, 30]);
      const resultH = hours + addHours;
      const resultM = minutes;
      const scenarios = [
        `It's ${describeTime(hours, minutes)} now. Cartoon starts in ${addHours} hour${addHours > 1 ? "s" : ""}! 📺`,
        `School ends at ${describeTime(hours, minutes)}. Keanu plays for ${addHours} hour${addHours > 1 ? "s" : ""} after that! ⚽`,
        `It's ${describeTime(hours, minutes)}. Dinner is in ${addHours} hour${addHours > 1 ? "s" : ""}! 🍛`,
      ];
      question = `${pick(scenarios)} [CLOCK:${formatTime(hours, minutes)}] What time will it be?`;
      answer = describeTime(resultH, resultM);
      // For choices, use the result hours/minutes
      const choices = generateChoices(answer, resultH, resultM, level);
      return { question, answer, hours, minutes, choices };
    }
    case 6: {
      const resultH = randomInt(2, 11);
      const subHours = pick([1, 2]);
      const minutes2 = pick([0, 30]);
      hours = resultH + subHours;
      const scenarios = [
        `Recess ends at ${describeTime(hours, minutes2)}. It started ${subHours} hour${subHours > 1 ? "s" : ""} ago! 🍜`,
        `Bedtime is at ${describeTime(hours, minutes2)}. ${subHours} hour${subHours > 1 ? "s" : ""} ago Keanu was watching TV! 📺`,
        `It's ${describeTime(hours, minutes2)} now. ${subHours} hour${subHours > 1 ? "s" : ""} ago Keanu left school! 🏫`,
      ];
      question = `${pick(scenarios)} [CLOCK:${formatTime(hours, minutes2)}] What time was it?`;
      answer = describeTime(resultH, minutes2);
      const choices = generateChoices(answer, resultH, minutes2, level);
      return { question, answer, hours, minutes: minutes2, choices };
    }
    default: {
      hours = randomInt(1, 12);
      minutes = 0;
      question = `[CLOCK:${formatTime(hours, minutes)}] What time is this?`;
      answer = `${hours} o'clock`;
    }
  }

  const choices = generateChoices(answer, hours, minutes, level);
  return { question, answer, hours, minutes, choices };
}

// Encouragement phrases
const PRAISE = [
  "Correct! Wah, so smart! ⭐🎉",
  "You got it! Steady lah! 💪⭐",
  "Well done! You're a time champion! 🏆⭐",
  "Great job, Keanu! So clever! 🌟⭐",
  "Exactly right! Awesome! 🎊⭐",
  "Perfect! You're amazing! 🦊⭐",
  "Brilliant! Koko is so proud! 🥳⭐",
  "Spot on! You rock! 🎸⭐",
];

const HINTS = [
  "Hmm, not quite! 🤔 Look at where the short hand is pointing — that tells us the hour!",
  "Almost! 🦊 The short hand shows the hour, the long hand shows the minutes.",
  "Let's try again! 🌟 Count the numbers the short hand is pointing to.",
  "So close! 💫 Remember, when the long hand points to 12, it's exactly o'clock!",
  "Not quite, but that's okay! 🦊 Keep looking at the hands on the clock!",
];

const LEVEL_UP_MSG = "Level up! 🎉🎊🏆 You're getting so good at this, Keanu!";

export function getGreeting(level, stars, firstQuestion) {
  if (level > 1 || stars > 0) {
    return `Welcome back, Keanu! 🦊🎉 You have ${stars} stars — so cool! Let's keep going! ${firstQuestion.question}`;
  }
  return `Hey Keanu! 🦊✨ I'm Koko, your time-telling buddy! Let's learn how to read clocks together — it's going to be fun! ${firstQuestion.question}`;
}

// Main function: evaluate answer and return Koko's response + next question
export function evaluateAndRespond(userAnswer, currentQ, level, streak) {
  const correct = userAnswer === currentQ.answer;

  let newLevel = level;
  let newStreak = correct ? streak + 1 : 0;
  let levelledUp = false;

  if (correct && newStreak >= 3) {
    newLevel = Math.min(level + 1, 6);
    if (newLevel !== level) {
      levelledUp = true;
      newStreak = 0;
    }
  }

  const nextQ = generateQuestion(newLevel);

  let response;
  if (correct && levelledUp) {
    response = `${pick(PRAISE)} ${LEVEL_UP_MSG} ${nextQ.question}`;
  } else if (correct) {
    response = `${pick(PRAISE)} ${nextQ.question}`;
  } else {
    response = `${pick(HINTS)} The answer was ${currentQ.answer}. Let's try this one! ${nextQ.question}`;
  }

  return {
    response,
    correct,
    levelledUp,
    newLevel,
    newStreak,
    nextQuestion: nextQ,
  };
}

export { generateQuestion };
