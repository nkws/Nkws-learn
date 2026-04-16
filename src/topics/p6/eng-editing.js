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
    { q: "Spot the error: 'She walk to school every day.'", a: "walk → walks", choices: ["walk → walks", "She → Her", "No error"] },
    { q: "Spot the error: 'The childrens are playing outside.'", a: "childrens → children", choices: ["childrens → children", "are → is", "No error"] },
    { q: "Spot the error: 'He has went to the shop.'", a: "went → gone", choices: ["went → gone", "has → had", "No error"] },
    { q: "Spot the error: 'I am more taller than my brother.'", a: "more taller → taller", choices: ["more taller → taller", "am → is", "No error"] },
    { q: "Spot the error: 'She have been waiting for an hour.'", a: "have → has", choices: ["have → has", "waiting → waited", "No error"] },
    { q: "Spot the error: 'Each of the boys have a book.'", a: "have → has", choices: ["have → has", "boys → boy", "No error"] },
    { q: "Spot the error: 'Neither Tom or Jerry was there.'", a: "or → nor", choices: ["or → nor", "was → were", "No error"] },
    { q: "Spot the error: 'The news are shocking.'", a: "are → is", choices: ["are → is", "shocking → shocked", "No error"] },
    { q: "Spot the error: 'She is the most prettiest girl.'", a: "most prettiest → prettiest", choices: ["most prettiest → prettiest", "is → was", "No error"] },
    { q: "Spot the error: 'He did not went to school yesterday.'", a: "went → go", choices: ["went → go", "did → had", "No error"] },
    { q: "Which sentence is correct?", a: "She has been living here since 2015.", choices: ["She has been living here since 2015.", "She has been living here for 2015.", "She has been living here from 2015."] },
    { q: "Which sentence is correct?", a: "The teacher asked us to hand in our homework.", choices: ["The teacher asked us to hand in our homework.", "The teacher asked us to hand on our homework.", "The teacher asked us to hand up our homework."] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6e-ed1": buildP6eEd1 };
export const P6_EDITING_QUESTION_COUNTS = { "p6e-ed1": 12 };
export function buildEditingQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
