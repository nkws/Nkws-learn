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
    { q: "Spot the error: 'He don't like vegetables.'", a: "don't → doesn't", choices: ["don't → doesn't", "like → likes", "No error"] },
    { q: "Spot the error: 'She is more better at Math than English.'", a: "more better → better", choices: ["more better → better", "at → in", "No error"] },
    { q: "Spot the error: 'The group of students are waiting outside.'", a: "are → is", choices: ["are → is", "waiting → waited", "No error"] },
    { q: "Spot the error: 'He runned to the finish line.'", a: "runned → ran", choices: ["runned → ran", "to → at", "No error"] },
    { q: "Spot the error: 'Me and Tom went to the library.'", a: "Me and Tom → Tom and I", choices: ["Me and Tom → Tom and I", "went → go", "No error"] },
    { q: "Spot the error: 'She has not never been late.'", a: "not never → never (double negative)", choices: ["not never → never (double negative)", "has → had", "No error"] },
    { q: "Spot the error: 'Everyone have finished their work.'", a: "have → has", choices: ["have → has", "their → his", "No error"] },
    { q: "Spot the error: 'The furnitures in the room are new.'", a: "furnitures → furniture", choices: ["furnitures → furniture", "are → is", "No error"] },
    { q: "Which sentence is correct?", a: "He is one of the tallest boys in the class.", choices: ["He is one of the tallest boys in the class.", "He is one of the tallest boy in the class.", "He is one of the most tallest boys in the class."] },
    { q: "Which sentence is correct?", a: "I have been waiting since 3 o'clock.", choices: ["I have been waiting since 3 o'clock.", "I have been waiting for 3 o'clock.", "I have been waiting from 3 o'clock."] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5e-ed1": buildP5eEd1 };
export const P5_EDITING5_QUESTION_COUNTS = { "p5e-ed1": 10 };
export function buildEditing5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
