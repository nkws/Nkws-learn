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

// Generate a question + answer for a given level
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
      question = `${pick(contexts)} ${pick(singapore)} [CLOCK:${formatTime(hours, minutes)}] What time does this clock show? 🤔`;
      answer = `${hours} o'clock`;
      break;
    }
    case 2: {
      hours = randomInt(1, 12);
      minutes = 30;
      question = `${pick(contexts)} ${pick(singapore)} [CLOCK:${formatTime(hours, minutes)}] Can you tell me what time this is? 🤔`;
      answer = `half past ${hours}`;
      break;
    }
    case 3: {
      hours = randomInt(1, 12);
      minutes = pick([15, 45]);
      question = `${pick(contexts)} ${pick(singapore)} [CLOCK:${formatTime(hours, minutes)}] What time is it? 🤔`;
      answer = describeTime(hours, minutes);
      break;
    }
    case 4: {
      hours = randomInt(1, 12);
      minutes = pick([5, 10, 20, 25, 35, 40, 50, 55]);
      question = `${pick(contexts)} ${pick(singapore)} [CLOCK:${formatTime(hours, minutes)}] What time does this clock show? 🤔`;
      answer = formatTime(hours, minutes);
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
      question = `${pick(scenarios)} [CLOCK:${formatTime(hours, minutes)}] What time will it be? 🤔`;
      answer = describeTime(resultH, resultM);
      break;
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
      question = `${pick(scenarios)} [CLOCK:${formatTime(hours, minutes2)}] What time was it? 🤔`;
      answer = describeTime(resultH, minutes2);
      break;
    }
    default: {
      hours = randomInt(1, 12);
      minutes = 0;
      question = `[CLOCK:${formatTime(hours, minutes)}] What time is this? 🤔`;
      answer = `${hours} o'clock`;
    }
  }

  return { question, answer, hours, minutes };
}

// Check if user's answer is close enough to the correct answer
function isAnswerCorrect(userAnswer, correctAnswer, hours, minutes) {
  const u = userAnswer.toLowerCase().trim();
  const c = correctAnswer.toLowerCase().trim();

  // Direct match
  if (u.includes(c) || c.includes(u)) return true;

  // Check numeric formats: "3:00", "3 00", "300"
  const timeStr = formatTime(hours, minutes);
  if (u.includes(timeStr)) return true;

  // Check just the number for o'clock
  if (minutes === 0 && u.includes(String(hours))) return true;

  // "half past X"
  if (minutes === 30) {
    if (u.includes("half past") && u.includes(String(hours))) return true;
    if (u.includes("30") && u.includes(String(hours))) return true;
  }

  // "quarter past/to"
  if (minutes === 15) {
    if (u.includes("quarter past") && u.includes(String(hours))) return true;
    if (u.includes("15") && u.includes(String(hours))) return true;
  }
  if (minutes === 45) {
    const nextH = hours === 12 ? 1 : hours + 1;
    if (u.includes("quarter to") && u.includes(String(nextH))) return true;
    if (u.includes("45") && u.includes(String(hours))) return true;
  }

  // For 5-min intervals, check if they got the numbers right
  if (u.includes(String(hours)) && u.includes(String(minutes))) return true;

  return false;
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
  "Hmm, not quite! 🤔 Look at where the short hand is pointing — that tells us the hour! Try again! 💪",
  "Almost! 🦊 The short hand shows the hour, the long hand shows the minutes. Have another look! 👀",
  "Let's try again! 🌟 Count the numbers the short hand is pointing to. What number is it near? 🤔",
  "So close! 💫 Remember, when the long hand points to 12, it's exactly o'clock! Try once more! 🙌",
  "Not quite, but that's okay! 🦊 The long hand pointing to 6 means half past. What does the short hand say? 🤔",
];

const LEVEL_UP_MSG = "Level up! 🎉🎊🏆 You're getting so good at this, Keanu!";

export function getGreeting(level, stars, firstQuestion) {
  if (level > 1 || stars > 0) {
    return `Welcome back, Keanu! 🦊🎉 You have ${stars} stars — so cool! Let's keep going! ${firstQuestion.question}`;
  }
  return `Hey Keanu! 🦊✨ I'm Koko, your time-telling buddy! Let's learn how to read clocks together — it's going to be fun! ${firstQuestion.question}`;
}

export function getResponse(userAnswer, level, streak) {
  const q = generateQuestion(level);
  // We need the *previous* question's answer to check — but since we generate new questions each time,
  // we'll store the current question data and check against it.
  // This function is called differently — see below.
  return { ...q, praise: pick(PRAISE), hint: pick(HINTS) };
}

// Main function: evaluate answer and return Koko's response + next question
export function evaluateAndRespond(userAnswer, currentQ, level, streak) {
  const correct = isAnswerCorrect(
    userAnswer,
    currentQ.answer,
    currentQ.hours,
    currentQ.minutes
  );

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
