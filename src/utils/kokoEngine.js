// Math
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
// English
import { buildSightWordsQuestions, SIGHTWORDS_QUESTION_COUNTS, SIGHTWORDS_INTRO } from "../topics/sightwords";
import { buildPhonicsQuestions, PHONICS_QUESTION_COUNTS, PHONICS_INTRO } from "../topics/phonics";
import { buildVocabularyQuestions, VOCABULARY_QUESTION_COUNTS } from "../topics/vocabulary";
import { buildGrammarQuestions, GRAMMAR_QUESTION_COUNTS, GRAMMAR_INTRO } from "../topics/grammar";
import { buildComprehensionQuestions, COMPREHENSION_QUESTION_COUNTS } from "../topics/comprehension";
// Science
import { buildLivingQuestions, LIVING_QUESTION_COUNTS, LIVING_INTRO } from "../topics/living";
import { buildPlantsQuestions, PLANTS_QUESTION_COUNTS, PLANTS_INTRO } from "../topics/plants";
import { buildAnimalsQuestions, ANIMALS_QUESTION_COUNTS, ANIMALS_INTRO } from "../topics/animals";
import { buildBodyQuestions, BODY_QUESTION_COUNTS, BODY_INTRO } from "../topics/body";
import { buildWeatherQuestions, WEATHER_QUESTION_COUNTS, WEATHER_INTRO } from "../topics/weather";
// Chinese
import { buildPinyinQuestions, PINYIN_QUESTION_COUNTS, PINYIN_INTRO } from "../topics/pinyin";
import { buildCharactersQuestions, CHARACTERS_QUESTION_COUNTS, CHARACTERS_INTRO } from "../topics/characters";
import { buildCnVocabQuestions, CNVOCAB_QUESTION_COUNTS } from "../topics/cnvocab";
import { buildCnSentencesQuestions, CNSENTENCES_QUESTION_COUNTS } from "../topics/cnsentences";

const BUILDERS = {
  "time-": buildTimeQuestions, "add-": buildAdditionQuestions, "sub-": buildSubtractionQuestions,
  "n20-": buildNumbers20Questions, "as20-": buildAddSub20Questions, "n100-": buildNumbers100Questions,
  "shp-": buildShapesQuestions, "pat-": buildPatternsQuestions, "msr-": buildMeasurementQuestions,
  "mon-": buildMoneyQuestions, "sw-": buildSightWordsQuestions, "ph-": buildPhonicsQuestions,
  "vc-": buildVocabularyQuestions, "gr-": buildGrammarQuestions, "cp-": buildComprehensionQuestions,
  "lv-": buildLivingQuestions, "pl-": buildPlantsQuestions, "an-": buildAnimalsQuestions,
  "bd-": buildBodyQuestions, "wt-": buildWeatherQuestions, "py-": buildPinyinQuestions,
  "ch-": buildCharactersQuestions, "cnv-": buildCnVocabQuestions, "cns-": buildCnSentencesQuestions,
};

export function buildModuleQuestions(moduleId) {
  for (const [prefix, builder] of Object.entries(BUILDERS)) {
    if (moduleId.startsWith(prefix)) return builder(moduleId);
  }
  return [];
}

export const MODULE_QUESTION_COUNTS = {
  ...TIME_QUESTION_COUNTS, ...ADDITION_QUESTION_COUNTS, ...SUBTRACTION_QUESTION_COUNTS,
  ...NUMBERS20_QUESTION_COUNTS, ...ADDSUB20_QUESTION_COUNTS, ...NUMBERS100_QUESTION_COUNTS,
  ...SHAPES_QUESTION_COUNTS, ...PATTERNS_QUESTION_COUNTS, ...MEASUREMENT_QUESTION_COUNTS,
  ...MONEY_QUESTION_COUNTS, ...SIGHTWORDS_QUESTION_COUNTS, ...PHONICS_QUESTION_COUNTS,
  ...VOCABULARY_QUESTION_COUNTS, ...GRAMMAR_QUESTION_COUNTS, ...COMPREHENSION_QUESTION_COUNTS,
  ...LIVING_QUESTION_COUNTS, ...PLANTS_QUESTION_COUNTS, ...ANIMALS_QUESTION_COUNTS,
  ...BODY_QUESTION_COUNTS, ...WEATHER_QUESTION_COUNTS, ...PINYIN_QUESTION_COUNTS,
  ...CHARACTERS_QUESTION_COUNTS, ...CNVOCAB_QUESTION_COUNTS, ...CNSENTENCES_QUESTION_COUNTS,
};

const ALL_INTROS = {
  ...TIME_INTRO, ...ADDITION_INTRO, ...SUBTRACTION_INTRO, ...NUMBERS20_INTRO,
  ...NUMBERS100_INTRO, ...SHAPES_INTRO, ...PATTERNS_INTRO, ...MEASUREMENT_INTRO,
  ...MONEY_INTRO, ...SIGHTWORDS_INTRO, ...PHONICS_INTRO, ...GRAMMAR_INTRO,
  ...LIVING_INTRO, ...PLANTS_INTRO, ...ANIMALS_INTRO, ...BODY_INTRO,
  ...WEATHER_INTRO, ...PINYIN_INTRO, ...CHARACTERS_INTRO,
};

export function getIntro(moduleId) {
  return ALL_INTROS[moduleId] || null;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const PRAISE_EN = [
  "Correct! Well done!", "You got it! Great job!", "Well done! You're a champion!",
  "Great job, Keanu! So clever!", "Exactly right! Awesome!", "Perfect! You're amazing!",
  "Brilliant! Koko is so proud of you!", "Spot on! You're doing so well!",
];

const PRAISE_ZH = [
  "答对了！真棒！", "你做到了！太厉害了！", "非常好！你是冠军！",
  "太聪明了！", "完全正确！好厉害！", "完美！你太棒了！",
  "真了不起！Koko 很骄傲！", "一点都没错！继续加油！",
];

const HINTS_EN = [
  "Hmm, not quite! Have another look!", "Almost! Let's think about it again!",
  "Let's try again! You're so close!", "So close! Don't worry, you're learning!",
  "Not quite, but that's okay! Keep going!",
];

const HINTS_ZH = [
  "嗯，不太对哦！再看看吧！", "差一点！再想想看！",
  "再试一次！你快要答对了！", "很接近了！别担心，你在学习！",
  "没关系，继续加油！",
];

export function getPraise(lang = "en") { return pick(lang === "zh" ? PRAISE_ZH : PRAISE_EN); }
export function getHint(correctAnswer, lang = "en") {
  const hint = pick(lang === "zh" ? HINTS_ZH : HINTS_EN);
  const answerLabel = lang === "zh" ? `答案是 ${correctAnswer}。` : `The answer was ${correctAnswer}.`;
  return `${hint} ${answerLabel}`;
}
