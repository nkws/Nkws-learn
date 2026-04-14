// P1 Math
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
// P1 English
import { buildSightWordsQuestions, SIGHTWORDS_QUESTION_COUNTS, SIGHTWORDS_INTRO } from "../topics/sightwords";
import { buildPhonicsQuestions, PHONICS_QUESTION_COUNTS, PHONICS_INTRO } from "../topics/phonics";
import { buildVocabularyQuestions, VOCABULARY_QUESTION_COUNTS } from "../topics/vocabulary";
import { buildGrammarQuestions, GRAMMAR_QUESTION_COUNTS, GRAMMAR_INTRO } from "../topics/grammar";
import { buildComprehensionQuestions, COMPREHENSION_QUESTION_COUNTS } from "../topics/comprehension";
// P1 Science
import { buildLivingQuestions, LIVING_QUESTION_COUNTS, LIVING_INTRO } from "../topics/living";
import { buildPlantsQuestions, PLANTS_QUESTION_COUNTS, PLANTS_INTRO } from "../topics/plants";
import { buildAnimalsQuestions, ANIMALS_QUESTION_COUNTS, ANIMALS_INTRO } from "../topics/animals";
import { buildBodyQuestions, BODY_QUESTION_COUNTS, BODY_INTRO } from "../topics/body";
import { buildWeatherQuestions, WEATHER_QUESTION_COUNTS, WEATHER_INTRO } from "../topics/weather";
// P1 Chinese
import { buildPinyinQuestions, PINYIN_QUESTION_COUNTS, PINYIN_INTRO } from "../topics/pinyin";
import { buildCharactersQuestions, CHARACTERS_QUESTION_COUNTS, CHARACTERS_INTRO } from "../topics/characters";
import { buildCnVocabQuestions, CNVOCAB_QUESTION_COUNTS } from "../topics/cnvocab";
import { buildCnSentencesQuestions, CNSENTENCES_QUESTION_COUNTS } from "../topics/cnsentences";
// P2 Math
import { buildMultiplicationQuestions, P2_MULTIPLICATION_QUESTION_COUNTS, P2_MULTIPLICATION_INTRO } from "../topics/p2/multiplication";
import { buildDivisionQuestions, P2_DIVISION_QUESTION_COUNTS, P2_DIVISION_INTRO } from "../topics/p2/division";
import { buildFractionsQuestions, P2_FRACTIONS_QUESTION_COUNTS, P2_FRACTIONS_INTRO } from "../topics/p2/fractions";
import { buildMeasurement2Questions, P2_MEASUREMENT2_QUESTION_COUNTS, P2_MEASUREMENT2_INTRO } from "../topics/p2/measurement2";
import { buildMoney2Questions, P2_MONEY2_QUESTION_COUNTS } from "../topics/p2/money2";
import { buildGraphsQuestions, P2_GRAPHS_QUESTION_COUNTS, P2_GRAPHS_INTRO } from "../topics/p2/graphs";
// P2 English
import { buildTensesQuestions, P2_TENSES_QUESTION_COUNTS, P2_TENSES_INTRO } from "../topics/p2/eng-tenses";
import { buildGrammar2Questions, P2_GRAMMAR2_QUESTION_COUNTS } from "../topics/p2/eng-grammar2";
import { buildComprehension2Questions, P2_COMPREHENSION2_QUESTION_COUNTS } from "../topics/p2/eng-comprehension2";
// P2 Science
import { buildMaterialsQuestions, P2_MATERIALS_QUESTION_COUNTS, P2_MATERIALS_INTRO } from "../topics/p2/sci-materials";
import { buildLifecyclesQuestions, P2_LIFECYCLES_QUESTION_COUNTS, P2_LIFECYCLES_INTRO } from "../topics/p2/sci-lifecycles";
// P2 Chinese
import { buildCharacters2Questions, P2_CHARACTERS2_QUESTION_COUNTS } from "../topics/p2/cn-characters2";
import { buildCnReadingQuestions, P2_CN_READING_QUESTION_COUNTS } from "../topics/p2/cn-reading";
// P3 Math
import { buildTimesTablesQuestions, P3_TIMESTABLES_QUESTION_COUNTS } from "../topics/p3/timestables";
import { buildFractions2Questions, P3_FRACTIONS2_QUESTION_COUNTS, P3_FRACTIONS2_INTRO } from "../topics/p3/fractions2";
import { buildMeasurement3Questions, P3_MEASUREMENT3_QUESTION_COUNTS } from "../topics/p3/measurement3";
import { buildAnglesQuestions, P3_ANGLES_QUESTION_COUNTS, P3_ANGLES_INTRO } from "../topics/p3/angles";
import { buildMoney3Questions, P3_MONEY3_QUESTION_COUNTS } from "../topics/p3/money3";
// P3 English
import { buildTenses2Questions, P3_TENSES2_QUESTION_COUNTS } from "../topics/p3/eng-tenses2";
import { buildVocabulary2Questions, P3_VOCABULARY2_QUESTION_COUNTS } from "../topics/p3/eng-vocabulary2";
import { buildComprehension3Questions, P3_COMPREHENSION3_QUESTION_COUNTS } from "../topics/p3/eng-comprehension3";
// P3 Science
import { buildDiversityQuestions, P3_DIVERSITY_QUESTION_COUNTS, P3_DIVERSITY_INTRO } from "../topics/p3/sci-diversity";
import { buildSystemsQuestions, P3_SYSTEMS_QUESTION_COUNTS, P3_SYSTEMS_INTRO } from "../topics/p3/sci-systems";
// P3 Chinese
import { buildCnGrammarQuestions, P3_CN_GRAMMAR_QUESTION_COUNTS } from "../topics/p3/cn-grammar";
import { buildCnReading2Questions, P3_CN_READING2_QUESTION_COUNTS } from "../topics/p3/cn-reading2";
// P4 Science
import { buildMatterQuestions, P4_MATTER_QUESTION_COUNTS, P4_MATTER_INTRO } from "../topics/p4/sci-matter";
import { buildHeatQuestions, P4_HEAT_QUESTION_COUNTS, P4_HEAT_INTRO } from "../topics/p4/sci-heat";
import { buildLightQuestions, P4_LIGHT_QUESTION_COUNTS, P4_LIGHT_INTRO } from "../topics/p4/sci-light";
import { buildP4PlantsQuestions, P4_PLANTS_QUESTION_COUNTS, P4_PLANTS_INTRO } from "../topics/p4/sci-plants";
import { buildDigestionQuestions, P4_DIGESTION_QUESTION_COUNTS, P4_DIGESTION_INTRO } from "../topics/p4/sci-digestion";
import { buildMagnetsQuestions, P4_MAGNETS_QUESTION_COUNTS, P4_MAGNETS_INTRO } from "../topics/p4/sci-magnets";
// P5 Science
import { buildWaterCycleQuestions, P5_WATER_CYCLE_QUESTION_COUNTS, P5_WATER_CYCLE_INTRO } from "../topics/p5/sci-water-cycle";
import { buildReproductionQuestions, P5_REPRODUCTION_QUESTION_COUNTS, P5_REPRODUCTION_INTRO } from "../topics/p5/sci-reproduction";
import { buildRespiratoryQuestions, P5_RESPIRATORY_QUESTION_COUNTS, P5_RESPIRATORY_INTRO } from "../topics/p5/sci-respiratory";
import { buildElectricalQuestions, P5_ELECTRICAL_QUESTION_COUNTS, P5_ELECTRICAL_INTRO } from "../topics/p5/sci-electrical";
import { buildEnergyQuestions, P5_ENERGY_QUESTION_COUNTS, P5_ENERGY_INTRO } from "../topics/p5/sci-energy";
// P6 Science
import { buildPhotosynthesisQuestions, P6_PHOTOSYNTHESIS_QUESTION_COUNTS, P6_PHOTOSYNTHESIS_INTRO } from "../topics/p6/sci-photosynthesis";
import { buildForcesQuestions, P6_FORCES_QUESTION_COUNTS, P6_FORCES_INTRO } from "../topics/p6/sci-forces";
import { buildFoodChainsQuestions, P6_FOODCHAINS_QUESTION_COUNTS, P6_FOODCHAINS_INTRO } from "../topics/p6/sci-foodchains";
import { buildEnvironmentQuestions, P6_ENVIRONMENT_QUESTION_COUNTS, P6_ENVIRONMENT_INTRO } from "../topics/p6/sci-environment";
// P4 English, Math, Chinese
import { buildGrammar4Questions, P4_GRAMMAR4_QUESTION_COUNTS, P4_GRAMMAR4_INTRO } from "../topics/p4/eng-grammar4";
import { buildMath4Questions, P4_MATH4_QUESTION_COUNTS } from "../topics/p4/math4";
import { buildCnVocab4Questions, P4_CN_VOCAB4_QUESTION_COUNTS } from "../topics/p4/cn-vocab4";
// P5 English, Math, Chinese
import { buildGrammar5Questions, P5_GRAMMAR5_QUESTION_COUNTS, P5_GRAMMAR5_INTRO } from "../topics/p5/eng-grammar5";
import { buildMath5Questions, P5_MATH5_QUESTION_COUNTS } from "../topics/p5/math5";
import { buildCnVocab5Questions, P5_CN_VOCAB5_QUESTION_COUNTS } from "../topics/p5/cn-vocab5";
// P6 English, Math, Chinese
import { buildGrammar6Questions, P6_GRAMMAR6_QUESTION_COUNTS, P6_GRAMMAR6_INTRO } from "../topics/p6/eng-grammar6";
import { buildMath6Questions, P6_MATH6_QUESTION_COUNTS } from "../topics/p6/math6";
import { buildCnVocab6Questions, P6_CN_VOCAB6_QUESTION_COUNTS } from "../topics/p6/cn-vocab6";

const BUILDERS = {
  // P1
  "time-": buildTimeQuestions, "add-": buildAdditionQuestions, "sub-": buildSubtractionQuestions,
  "n20-": buildNumbers20Questions, "as20-": buildAddSub20Questions, "n100-": buildNumbers100Questions,
  "shp-": buildShapesQuestions, "pat-": buildPatternsQuestions, "msr-": buildMeasurementQuestions,
  "mon-": buildMoneyQuestions, "sw-": buildSightWordsQuestions, "ph-": buildPhonicsQuestions,
  "vc-": buildVocabularyQuestions, "gr-": buildGrammarQuestions, "cp-": buildComprehensionQuestions,
  "lv-": buildLivingQuestions, "pl-": buildPlantsQuestions, "an-": buildAnimalsQuestions,
  "bd-": buildBodyQuestions, "wt-": buildWeatherQuestions, "py-": buildPinyinQuestions,
  "ch-": buildCharactersQuestions, "cnv-": buildCnVocabQuestions, "cns-": buildCnSentencesQuestions,
  // P2
  "p2m-mul": buildMultiplicationQuestions, "p2m-div": buildDivisionQuestions, "p2m-fr": buildFractionsQuestions,
  "p2m-ms": buildMeasurement2Questions, "p2m-mn": buildMoney2Questions, "p2m-gr": buildGraphsQuestions,
  "p2e-tn": buildTensesQuestions, "p2e-gr": buildGrammar2Questions, "p2e-cp": buildComprehension2Questions,
  "p2s-mt": buildMaterialsQuestions, "p2s-lc": buildLifecyclesQuestions,
  "p2c-ch": buildCharacters2Questions, "p2c-rd": buildCnReadingQuestions,
  // P3
  "p3m-tt": buildTimesTablesQuestions, "p3m-fr": buildFractions2Questions, "p3m-ms": buildMeasurement3Questions,
  "p3m-an": buildAnglesQuestions, "p3m-mn": buildMoney3Questions,
  "p3e-tn": buildTenses2Questions, "p3e-vc": buildVocabulary2Questions, "p3e-cp": buildComprehension3Questions,
  "p3s-dv": buildDiversityQuestions, "p3s-sy": buildSystemsQuestions,
  "p3c-gr": buildCnGrammarQuestions, "p3c-rd": buildCnReading2Questions,
  // P4
  "p4s-mt": buildMatterQuestions, "p4s-ht": buildHeatQuestions, "p4s-lg": buildLightQuestions,
  "p4s-pl": buildP4PlantsQuestions, "p4s-dg": buildDigestionQuestions, "p4s-mg": buildMagnetsQuestions,
  // P5
  "p5s-wc": buildWaterCycleQuestions, "p5s-rp": buildReproductionQuestions, "p5s-rs": buildRespiratoryQuestions,
  "p5s-el": buildElectricalQuestions, "p5s-en": buildEnergyQuestions,
  // P6
  "p6s-ph": buildPhotosynthesisQuestions, "p6s-fc": buildForcesQuestions,
  "p6s-fd": buildFoodChainsQuestions, "p6s-ev": buildEnvironmentQuestions,
  // P4 English, Math, Chinese
  "p4e-gr": buildGrammar4Questions, "p4e-vc": buildGrammar4Questions,
  "p4m-fm": buildMath4Questions, "p4m-dc": buildMath4Questions,
  "p4c-vc": buildCnVocab4Questions, "p4c-gr": buildCnVocab4Questions,
  // P5 English, Math, Chinese
  "p5e-gr": buildGrammar5Questions, "p5e-vc": buildGrammar5Questions,
  "p5m-pc": buildMath5Questions, "p5m-rt": buildMath5Questions,
  "p5c-vc": buildCnVocab5Questions, "p5c-gr": buildCnVocab5Questions,
  // P6 English, Math, Chinese
  "p6e-gr": buildGrammar6Questions, "p6e-vc": buildGrammar6Questions,
  "p6m-ra": buildMath6Questions, "p6m-al": buildMath6Questions,
  "p6c-vc": buildCnVocab6Questions, "p6c-gr": buildCnVocab6Questions,
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
  ...P2_MULTIPLICATION_QUESTION_COUNTS, ...P2_DIVISION_QUESTION_COUNTS, ...P2_FRACTIONS_QUESTION_COUNTS,
  ...P2_MEASUREMENT2_QUESTION_COUNTS, ...P2_MONEY2_QUESTION_COUNTS, ...P2_GRAPHS_QUESTION_COUNTS,
  ...P2_TENSES_QUESTION_COUNTS, ...P2_GRAMMAR2_QUESTION_COUNTS, ...P2_COMPREHENSION2_QUESTION_COUNTS,
  ...P2_MATERIALS_QUESTION_COUNTS, ...P2_LIFECYCLES_QUESTION_COUNTS,
  ...P2_CHARACTERS2_QUESTION_COUNTS, ...P2_CN_READING_QUESTION_COUNTS,
  ...P3_TIMESTABLES_QUESTION_COUNTS, ...P3_FRACTIONS2_QUESTION_COUNTS, ...P3_MEASUREMENT3_QUESTION_COUNTS,
  ...P3_ANGLES_QUESTION_COUNTS, ...P3_MONEY3_QUESTION_COUNTS,
  ...P3_TENSES2_QUESTION_COUNTS, ...P3_VOCABULARY2_QUESTION_COUNTS, ...P3_COMPREHENSION3_QUESTION_COUNTS,
  ...P3_DIVERSITY_QUESTION_COUNTS, ...P3_SYSTEMS_QUESTION_COUNTS,
  ...P3_CN_GRAMMAR_QUESTION_COUNTS, ...P3_CN_READING2_QUESTION_COUNTS,
  // P4
  ...P4_MATTER_QUESTION_COUNTS, ...P4_HEAT_QUESTION_COUNTS, ...P4_LIGHT_QUESTION_COUNTS,
  ...P4_PLANTS_QUESTION_COUNTS, ...P4_DIGESTION_QUESTION_COUNTS, ...P4_MAGNETS_QUESTION_COUNTS,
  // P5
  ...P5_WATER_CYCLE_QUESTION_COUNTS, ...P5_REPRODUCTION_QUESTION_COUNTS, ...P5_RESPIRATORY_QUESTION_COUNTS,
  ...P5_ELECTRICAL_QUESTION_COUNTS, ...P5_ENERGY_QUESTION_COUNTS,
  // P6
  ...P6_PHOTOSYNTHESIS_QUESTION_COUNTS, ...P6_FORCES_QUESTION_COUNTS,
  ...P6_FOODCHAINS_QUESTION_COUNTS, ...P6_ENVIRONMENT_QUESTION_COUNTS,
  // P4-P6 English, Math, Chinese
  ...P4_GRAMMAR4_QUESTION_COUNTS, ...P4_MATH4_QUESTION_COUNTS, ...P4_CN_VOCAB4_QUESTION_COUNTS,
  ...P5_GRAMMAR5_QUESTION_COUNTS, ...P5_MATH5_QUESTION_COUNTS, ...P5_CN_VOCAB5_QUESTION_COUNTS,
  ...P6_GRAMMAR6_QUESTION_COUNTS, ...P6_MATH6_QUESTION_COUNTS, ...P6_CN_VOCAB6_QUESTION_COUNTS,
};

const ALL_INTROS = {
  ...TIME_INTRO, ...ADDITION_INTRO, ...SUBTRACTION_INTRO, ...NUMBERS20_INTRO,
  ...NUMBERS100_INTRO, ...SHAPES_INTRO, ...PATTERNS_INTRO, ...MEASUREMENT_INTRO,
  ...MONEY_INTRO, ...SIGHTWORDS_INTRO, ...PHONICS_INTRO, ...GRAMMAR_INTRO,
  ...LIVING_INTRO, ...PLANTS_INTRO, ...ANIMALS_INTRO, ...BODY_INTRO,
  ...WEATHER_INTRO, ...PINYIN_INTRO, ...CHARACTERS_INTRO,
  ...P2_MULTIPLICATION_INTRO, ...P2_DIVISION_INTRO, ...P2_FRACTIONS_INTRO,
  ...P2_MEASUREMENT2_INTRO, ...P2_GRAPHS_INTRO, ...P2_TENSES_INTRO,
  ...P2_MATERIALS_INTRO, ...P2_LIFECYCLES_INTRO,
  ...P3_FRACTIONS2_INTRO, ...P3_ANGLES_INTRO,
  ...P3_DIVERSITY_INTRO, ...P3_SYSTEMS_INTRO,
  // P4
  ...P4_MATTER_INTRO, ...P4_HEAT_INTRO, ...P4_LIGHT_INTRO,
  ...P4_PLANTS_INTRO, ...P4_DIGESTION_INTRO, ...P4_MAGNETS_INTRO,
  // P5
  ...P5_WATER_CYCLE_INTRO, ...P5_REPRODUCTION_INTRO, ...P5_RESPIRATORY_INTRO,
  ...P5_ELECTRICAL_INTRO, ...P5_ENERGY_INTRO,
  // P6
  ...P6_PHOTOSYNTHESIS_INTRO, ...P6_FORCES_INTRO, ...P6_FOODCHAINS_INTRO, ...P6_ENVIRONMENT_INTRO,
  // P4-P6 English
  ...P4_GRAMMAR4_INTRO, ...P5_GRAMMAR5_INTRO, ...P6_GRAMMAR6_INTRO,
};

export function getIntro(moduleId) {
  return ALL_INTROS[moduleId] || null;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Pick without repeating the last used phrase
let lastPraiseIdx = -1;
let lastHintIdx = -1;

function pickNoRepeat(arr, lastIdx) {
  let idx;
  do {
    idx = Math.floor(Math.random() * arr.length);
  } while (idx === lastIdx && arr.length > 1);
  return { value: arr[idx], idx };
}

const PRAISE_EN = [
  "Correct! Well done!", "You got it! Great job!", "Well done! You're a champion!",
  "Great job! So clever!", "Exactly right! Awesome!", "Perfect! You're amazing!",
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

export function getPraise(lang = "en") {
  const arr = lang === "zh" ? PRAISE_ZH : PRAISE_EN;
  const { value, idx } = pickNoRepeat(arr, lastPraiseIdx);
  lastPraiseIdx = idx;
  return value;
}

export function getHint(correctAnswer, lang = "en") {
  const arr = lang === "zh" ? HINTS_ZH : HINTS_EN;
  const { value, idx } = pickNoRepeat(arr, lastHintIdx);
  lastHintIdx = idx;
  const answerLabel = lang === "zh" ? `答案是 ${correctAnswer}。` : `The answer was ${correctAnswer}.`;
  return `${value} ${answerLabel}`;
}
