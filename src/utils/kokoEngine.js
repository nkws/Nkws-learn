import { buildTimeQuestions, TIME_QUESTION_COUNTS, TIME_INTRO } from "../topics/time";
import { buildAdditionQuestions, ADDITION_QUESTION_COUNTS, ADDITION_INTRO } from "../topics/addition";

export function buildModuleQuestions(moduleId) {
  if (moduleId.startsWith("time-")) return buildTimeQuestions(moduleId);
  if (moduleId.startsWith("add-")) return buildAdditionQuestions(moduleId);
  return [];
}

export const MODULE_QUESTION_COUNTS = {
  ...TIME_QUESTION_COUNTS,
  ...ADDITION_QUESTION_COUNTS,
};

export function getIntro(moduleId) {
  return TIME_INTRO[moduleId] || ADDITION_INTRO[moduleId] || null;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const PRAISE = [
  "Correct! Well done!",
  "You got it! Great job!",
  "Well done! You're a champion!",
  "Great job, Keanu! So clever!",
  "Exactly right! Awesome!",
  "Perfect! You're amazing!",
  "Brilliant! Koko is so proud of you!",
  "Spot on! You're doing so well!",
];

const HINTS = [
  "Hmm, not quite! Have another look!",
  "Almost! Let's think about it again!",
  "Let's try again! You're so close!",
  "So close! Don't worry, you're learning!",
  "Not quite, but that's okay! Keep going!",
];

export function getPraise() {
  return pick(PRAISE);
}

export function getHint(correctAnswer) {
  return `${pick(HINTS)} The answer was ${correctAnswer}.`;
}
