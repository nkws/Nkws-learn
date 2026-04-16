import { shuffle } from "../../utils/helpers";

export const P2_ENG_EXTENDED_INTRO = {
  "p2e-cl1": {
    title: "Cloze Practice",
    pages: [
      { text: "Choose the word that best fits the sentence.", emoji: "📖 ✏️" },
    ],
  },
  "p2e-ed1": {
    title: "Editing",
    pages: [
      { text: "Find the mistake in the sentence and pick the correction.", emoji: "🔍 ✏️" },
    ],
  },
};

function buildP2eCl1() {
  return shuffle([
    { q: "The cat ___ on the mat.", a: "sits", choices: ["sits", "sit", "sitting"] },
    { q: "I ___ to the shop yesterday.", a: "went", choices: ["went", "go", "going"] },
    { q: "She ___ a good girl.", a: "is", choices: ["is", "are", "am"] },
    { q: "We ___ playing in the garden.", a: "are", choices: ["are", "is", "am"] },
    { q: "He ___ his teeth every morning.", a: "brushes", choices: ["brushes", "brush", "brushing"] },
    { q: "The dog ran ___ the ball.", a: "after", choices: ["after", "before", "on"] },
    { q: "I have ___ apples.", a: "two", choices: ["two", "too", "to"] },
    { q: "She will ___ to school tomorrow.", a: "go", choices: ["go", "goes", "went"] },
    { q: "The birds ___ in the sky.", a: "fly", choices: ["fly", "flies", "flying"] },
    { q: "He is ___ than his brother.", a: "taller", choices: ["taller", "more tall", "tallest"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP2eEd1() {
  return shuffle([
    { q: "Spot the error: 'She have a cat.'", a: "have → has", choices: ["have → has", "a → an", "No error"] },
    { q: "Spot the error: 'He goed home.'", a: "goed → went", choices: ["goed → went", "He → Him", "No error"] },
    { q: "Spot the error: 'I are happy.'", a: "are → am", choices: ["are → am", "happy → sad", "No error"] },
    { q: "Spot the error: 'The dogs is barking.'", a: "is → are", choices: ["is → are", "dogs → dog", "No error"] },
    { q: "Spot the error: 'She eated the cake.'", a: "eated → ate", choices: ["eated → ate", "the → a", "No error"] },
    { q: "Which sentence is correct?", a: "I have an umbrella.", choices: ["I have an umbrella.", "I have a umbrella.", "I have the umbrella one."] },
    { q: "Which sentence is correct?", a: "They are playing outside.", choices: ["They are playing outside.", "They is playing outside.", "Them are playing outside."] },
    { q: "Spot the error: 'The childs are singing.'", a: "childs → children", choices: ["childs → children", "are → is", "No error"] },
    { q: "Spot the error: 'She runned very fast.'", a: "runned → ran", choices: ["runned → ran", "very → so", "No error"] },
    { q: "Which sentence is correct?", a: "He does not like milk.", choices: ["He does not like milk.", "He do not like milk.", "He not like milk."] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p2e-cl1": buildP2eCl1, "p2e-ed1": buildP2eEd1 };
export const P2_ENG_EXTENDED_QUESTION_COUNTS = { "p2e-cl1": 10, "p2e-ed1": 10 };
export function buildEngExtended2Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
