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
    { q: "Spot the error: 'She goed to the market yesterday.'", a: "goed → went", choices: ["goed → went", "to → at", "No error"], explain: "This tests irregular past tense. 'Go' does not add -ed; its past form is the irregular 'went', so 'goed' must become 'went'." },
    { q: "Spot the error: 'There is many books on the shelf.'", a: "is → are", choices: ["is → are", "many → much", "No error"], explain: "This tests subject-verb agreement. 'Books' is plural, so the verb must be the plural 'are', not the singular 'is'." },
    { q: "Spot the error: 'He buyed a new bag.'", a: "buyed → bought", choices: ["buyed → bought", "a → the", "No error"], explain: "This tests irregular past tense. 'Buy' does not take -ed; its past form is the irregular 'bought', so 'buyed' is wrong." },
    { q: "Spot the error: 'The childs are playing.'", a: "childs → children", choices: ["childs → children", "are → is", "No error"], explain: "This tests irregular plurals. 'Child' does not add -s; its plural is the irregular 'children', so 'childs' must be corrected." },
    { q: "Spot the error: 'I have a apple.'", a: "a → an", choices: ["a → an", "have → has", "No error"], explain: "This tests the article rule. We use 'an' before a vowel sound, and 'apple' begins with one, so 'a apple' becomes 'an apple'." },
    { q: "Spot the error: 'She is more faster than me.'", a: "more faster → faster", choices: ["more faster → faster", "me → I", "No error"], explain: "This tests comparatives. Short words add -er, so 'faster' is already comparative; adding 'more' makes a double comparative, which is wrong." },
    { q: "Spot the error: 'The two boys was fighting.'", a: "was → were", choices: ["was → were", "boys → boy", "No error"], explain: "This tests subject-verb agreement. 'Two boys' is plural, so the verb must be the plural 'were', not the singular 'was'." },
    { q: "Which sentence is correct?", a: "She enjoys reading books.", choices: ["She enjoys reading books.", "She enjoy reading books.", "She enjoying reading books."], explain: "Subject-verb agreement: the singular 'she' needs a verb with -s, so 'enjoys' is correct. 'Enjoy' and 'enjoying' do not agree with 'she'." },
    { q: "Which sentence is correct?", a: "I have already eaten.", choices: ["I have already eaten.", "I have already ate.", "I have already eat."], explain: "Present perfect uses 'have' plus a past participle. The participle of 'eat' is 'eaten', not 'ate' or 'eat', so 'have eaten' is correct." },
    { q: "Which sentence is correct?", a: "He does not like spicy food.", choices: ["He does not like spicy food.", "He do not like spicy food.", "He not like spicy food."], explain: "Negatives in the present simple use 'do' or 'does'. The singular 'he' takes 'does not', and the main verb stays as the base 'like'." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p4e-ed1": buildP4eEd1 };
export const P4_EDITING4_QUESTION_COUNTS = { "p4e-ed1": 10 };
export function buildEditing4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
