import { buildTimeQuestions, TIME_QUESTION_COUNTS, TIME_INTRO } from "../topics/time";
import { buildAdditionQuestions, ADDITION_QUESTION_COUNTS, ADDITION_INTRO } from "../topics/addition";
import { buildSubtractionQuestions, SUBTRACTION_QUESTION_COUNTS, SUBTRACTION_INTRO } from "../topics/subtraction";
import { buildNumbers20Questions, NUMBERS20_QUESTION_COUNTS, NUMBERS20_INTRO } from "../topics/numbers20";
import { buildAddSub20Questions, ADDSUB20_QUESTION_COUNTS } from "../topics/addsub20";
import { buildNumbers100Questions, NUMBERS100_QUESTION_COUNTS, NUMBERS100_INTRO } from "../topics/numbers100";
import { buildShapesQuestions, SHAPES_QUESTION_COUNTS, SHAPES_INTRO } from "../topics/shapes";
import { buildPatternsQuestions, PATTERNS_QUESTION_COUNTS, PATTERNS_INTRO } from "../topics/patterns";
import { buildMeasurementQuestions, MEASUREMENT_QUESTION_COUNTS, MEASUREMENT_INTRO } from "../topics/measurement";
import { buildMoneyQuestions, MONEY_QUESTION_COUNTS, MONEY_INTRO } from "../topics/money";

const BUILDERS = {
  "time-": buildTimeQuestions,
  "add-": buildAdditionQuestions,
  "sub-": buildSubtractionQuestions,
  "n20-": buildNumbers20Questions,
  "as20-": buildAddSub20Questions,
  "n100-": buildNumbers100Questions,
  "shp-": buildShapesQuestions,
  "pat-": buildPatternsQuestions,
  "msr-": buildMeasurementQuestions,
  "mon-": buildMoneyQuestions,
};

export function buildModuleQuestions(moduleId) {
  for (const [prefix, builder] of Object.entries(BUILDERS)) {
    if (moduleId.startsWith(prefix)) return builder(moduleId);
  }
  return [];
}

export const MODULE_QUESTION_COUNTS = {
  ...TIME_QUESTION_COUNTS,
  ...ADDITION_QUESTION_COUNTS,
  ...SUBTRACTION_QUESTION_COUNTS,
  ...NUMBERS20_QUESTION_COUNTS,
  ...ADDSUB20_QUESTION_COUNTS,
  ...NUMBERS100_QUESTION_COUNTS,
  ...SHAPES_QUESTION_COUNTS,
  ...PATTERNS_QUESTION_COUNTS,
  ...MEASUREMENT_QUESTION_COUNTS,
  ...MONEY_QUESTION_COUNTS,
};

const ALL_INTROS = {
  ...TIME_INTRO,
  ...ADDITION_INTRO,
  ...SUBTRACTION_INTRO,
  ...NUMBERS20_INTRO,
  ...NUMBERS100_INTRO,
  ...SHAPES_INTRO,
  ...PATTERNS_INTRO,
  ...MEASUREMENT_INTRO,
  ...MONEY_INTRO,
};

export function getIntro(moduleId) {
  return ALL_INTROS[moduleId] || null;
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
