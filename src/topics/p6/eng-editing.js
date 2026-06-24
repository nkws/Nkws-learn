import { shuffle } from "../../utils/helpers";

export const P6_EDITING_INTRO = {
  "p6e-ed1": {
    title: "Editing",
    pages: [
      { text: "In editing, you spot grammar or spelling errors in a sentence and pick the correction.", emoji: "🔍 ✏️" },
      { text: "Common errors: wrong tense, wrong subject-verb agreement, wrong preposition, misspelling, missing article.", emoji: "⚠️" },
      { text: "Read each sentence carefully. If it sounds wrong, identify WHAT is wrong, then pick the fix.", emoji: "👂 → 🧠 → ✅" },
    ],
  },
};

function buildP6eEd1() {
  return shuffle([
    { q: "Spot the error: 'She walk to school every day.'", a: "walk → walks", choices: ["walk → walks", "She → Her", "No error"], explain: "This tests subject-verb agreement in the present simple. A singular subject ('She') needs the -s ending, so it should be 'walks'. 'Every day' confirms the present tense." },
    { q: "Spot the error: 'The childrens are playing outside.'", a: "childrens → children", choices: ["childrens → children", "are → is", "No error"], explain: "'Children' is already an irregular plural, so adding -s is wrong. Irregular plurals (child/children, man/men) never take an extra plural ending." },
    { q: "Spot the error: 'He has went to the shop.'", a: "went → gone", choices: ["went → gone", "has → had", "No error"], explain: "The present perfect uses 'has/have + past participle'. 'Went' is the simple past; the past participle of 'go' is 'gone', so it should be 'has gone'." },
    { q: "Spot the error: 'I am more taller than my brother.'", a: "more taller → taller", choices: ["more taller → taller", "am → is", "No error"], explain: "Comparatives use either -er OR 'more', never both. Short adjectives like 'tall' take -er, giving 'taller'. 'More taller' is a double comparative." },
    { q: "Spot the error: 'She have been waiting for an hour.'", a: "have → has", choices: ["have → has", "waiting → waited", "No error"], explain: "The auxiliary must agree with the subject. The singular 'She' takes 'has', not 'have', in the present perfect continuous 'has been waiting'." },
    { q: "Spot the error: 'Each of the boys have a book.'", a: "have → has", choices: ["have → has", "boys → boy", "No error"], explain: "'Each' is always singular, even when followed by a plural like 'of the boys'. The verb agrees with 'each', so use the singular 'has'." },
    { q: "Spot the error: 'Neither Tom or Jerry was there.'", a: "or → nor", choices: ["or → nor", "was → were", "No error"], explain: "The correlative pair is fixed: 'neither' must go with 'nor', just as 'either' goes with 'or'. So it should read 'Neither Tom nor Jerry'." },
    { q: "Spot the error: 'The news are shocking.'", a: "are → is", choices: ["are → is", "shocking → shocked", "No error"], explain: "Some nouns look plural but are uncountable and singular, such as 'news', 'information' and 'advice'. They take a singular verb, so use 'is'." },
    { q: "Spot the error: 'She is the most prettiest girl.'", a: "most prettiest → prettiest", choices: ["most prettiest → prettiest", "is → was", "No error"], explain: "Superlatives use either -est OR 'most', never both. 'Pretty' takes -est to give 'prettiest'. 'Most prettiest' is a double superlative." },
    { q: "Spot the error: 'He did not went to school yesterday.'", a: "went → go", choices: ["went → go", "did → had", "No error"], explain: "After the auxiliary 'did', the main verb returns to its base form. 'Did' already carries the past tense, so use 'go', not the past form 'went'." },
    { q: "Which sentence is correct?", a: "She has been living here since 2015.", choices: ["She has been living here since 2015.", "She has been living here for 2015.", "She has been living here from 2015."], explain: "With the present perfect, 'since' marks a starting point in time. '2015' is a point, so 'since' is right; 'for' needs a duration and 'from' needs a matching 'to'." },
    { q: "Which sentence is correct?", a: "The teacher asked us to hand in our homework.", choices: ["The teacher asked us to hand in our homework.", "The teacher asked us to hand on our homework.", "The teacher asked us to hand up our homework."], explain: "Phrasal verbs have fixed particles. 'Hand in' means to submit work; 'hand on' and 'hand up' are not standard for submitting, so only 'hand in' fits." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6e-ed1": buildP6eEd1 };
export const P6_EDITING_QUESTION_COUNTS = { "p6e-ed1": 12 };
export function buildEditingQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
