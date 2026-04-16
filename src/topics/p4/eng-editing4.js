import { shuffle } from "../../utils/helpers";

export const P4_EDITING_INTRO = {
  "p4e-ed1": {
    title: "Editing",
    pages: [
      { text: "Read each sentence carefully and spot the grammar or spelling error.", emoji: "🔍 ✏️" },
      { text: "Common P4 errors: wrong tense, wrong plural, wrong article (a/an), misspelling.", emoji: "⚠️" },
    ],
  },
};

function buildP4eEd1() {
  return shuffle([
    { q: "Spot the error: 'She goed to the market yesterday.'", a: "goed → went", choices: ["goed → went", "to → at", "No error"] },
    { q: "Spot the error: 'There is many books on the shelf.'", a: "is → are", choices: ["is → are", "many → much", "No error"] },
    { q: "Spot the error: 'He buyed a new bag.'", a: "buyed → bought", choices: ["buyed → bought", "a → the", "No error"] },
    { q: "Spot the error: 'The childs are playing.'", a: "childs → children", choices: ["childs → children", "are → is", "No error"] },
    { q: "Spot the error: 'I have a apple.'", a: "a → an", choices: ["a → an", "have → has", "No error"] },
    { q: "Spot the error: 'She is more faster than me.'", a: "more faster → faster", choices: ["more faster → faster", "me → I", "No error"] },
    { q: "Spot the error: 'The two boys was fighting.'", a: "was → were", choices: ["was → were", "boys → boy", "No error"] },
    { q: "Which sentence is correct?", a: "She enjoys reading books.", choices: ["She enjoys reading books.", "She enjoy reading books.", "She enjoying reading books."] },
    { q: "Which sentence is correct?", a: "I have already eaten.", choices: ["I have already eaten.", "I have already ate.", "I have already eat."] },
    { q: "Which sentence is correct?", a: "He does not like spicy food.", choices: ["He does not like spicy food.", "He do not like spicy food.", "He not like spicy food."] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4e-ed1": buildP4eEd1 };
export const P4_EDITING4_QUESTION_COUNTS = { "p4e-ed1": 10 };
export function buildEditing4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
