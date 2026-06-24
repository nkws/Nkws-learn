import { shuffle } from "../../utils/helpers";

export const P5_EDITING_INTRO = {
  "p5e-ed1": {
    title: "Editing",
    pages: [
      { text: "Spot the grammar or spelling error in the sentence, then choose the correction.", emoji: "🔍 ✏️" },
      { text: "Common errors: wrong tense, wrong agreement, wrong preposition, double negative.", emoji: "⚠️" },
    ],
  },
};

function buildP5eEd1() {
  return shuffle([
    { q: "Spot the error: 'He don't like vegetables.'", a: "don't → doesn't", choices: ["don't → doesn't", "like → likes", "No error"], explain: "Subject-verb agreement: a singular subject like 'he' needs 'doesn't', not 'don't'. We say 'he doesn't', just as we say 'he does'." },
    { q: "Spot the error: 'She is more better at Math than English.'", a: "more better → better", choices: ["more better → better", "at → in", "No error"], explain: "A comparative is formed only once. 'Better' is already the comparative of 'good', so adding 'more' doubles it. Use 'better' alone." },
    { q: "Spot the error: 'The group of students are waiting outside.'", a: "are → is", choices: ["are → is", "waiting → waited", "No error"], explain: "The verb agrees with the real subject, not the nearest noun. The subject is the singular 'group', so it takes 'is', not 'are'." },
    { q: "Spot the error: 'He runned to the finish line.'", a: "runned → ran", choices: ["runned → ran", "to → at", "No error"], explain: "'Run' is an irregular verb, so it does not add -ed for the past. Its past tense is the special form 'ran'." },
    { q: "Spot the error: 'Me and Tom went to the library.'", a: "Me and Tom → Tom and I", choices: ["Me and Tom → Tom and I", "went → go", "No error"], explain: "As the subject doing the action, use 'I', not 'me'. Politeness also puts the other person first: 'Tom and I went'." },
    { q: "Spot the error: 'She has not never been late.'", a: "not never → never (double negative)", choices: ["not never → never (double negative)", "has → had", "No error"], explain: "Standard English allows only one negative per idea. 'Not' and 'never' together cancel out, so keep just one: 'has never been late'." },
    { q: "Spot the error: 'Everyone have finished their work.'", a: "have → has", choices: ["have → has", "their → his", "No error"], explain: "'Everyone' is grammatically singular even though it sounds like many people, so it takes the singular verb 'has', not 'have'." },
    { q: "Spot the error: 'The furnitures in the room are new.'", a: "furnitures → furniture", choices: ["furnitures → furniture", "are → is", "No error"], explain: "'Furniture' is an uncountable noun, so it has no plural form. We never add -s; we say 'the furniture is new'." },
    { q: "Which sentence is correct?", a: "He is one of the tallest boys in the class.", choices: ["He is one of the tallest boys in the class.", "He is one of the tallest boy in the class.", "He is one of the most tallest boys in the class."], explain: "After 'one of the' plus a superlative, the noun must be plural ('boys'), and a superlative like 'tallest' never takes 'most' as well." },
    { q: "Which sentence is correct?", a: "I have been waiting since 3 o'clock.", choices: ["I have been waiting since 3 o'clock.", "I have been waiting for 3 o'clock.", "I have been waiting from 3 o'clock."], explain: "'Since' marks a point in time when something began, while 'for' marks a length of time. A clock time is a starting point, so 'since 3 o'clock'." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5e-ed1": buildP5eEd1 };
export const P5_EDITING5_QUESTION_COUNTS = { "p5e-ed1": 10 };
export function buildEditing5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
