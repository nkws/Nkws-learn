import { shuffle } from "../../utils/helpers";

export const P4_CLOZE_INTRO = {
  "p4e-cl1": {
    title: "Cloze Practice",
    pages: [
      { text: "Choose the word that fits both the grammar and meaning of the sentence.", emoji: "📖 ✏️" },
      { text: "Read the whole sentence first — the clue is usually in the words around the blank.", emoji: "🔍" },
    ],
  },
};

function buildP4eCl1() {
  return shuffle([
    { q: "She ___ to school every morning.", a: "walks", choices: ["walks", "walk", "walking"] },
    { q: "The children ___ playing in the park yesterday.", a: "were", choices: ["were", "was", "are"] },
    { q: "He has ___ finished his lunch.", a: "already", choices: ["already", "yet", "still"] },
    { q: "I will call you ___ I reach home.", a: "when", choices: ["when", "until", "because"] },
    { q: "She is good ___ drawing.", a: "at", choices: ["at", "in", "on"] },
    { q: "The book ___ is on the table belongs to me.", a: "that", choices: ["that", "who", "where"] },
    { q: "There ___ many people at the park.", a: "were", choices: ["were", "was", "is"] },
    { q: "He ran ___ he would not miss the bus.", a: "so that", choices: ["so that", "because", "although"] },
    { q: "Mother told us ___ be quiet in the library.", a: "to", choices: ["to", "must", "should"] },
    { q: "The girl ___ won the race is my classmate.", a: "who", choices: ["who", "which", "whose"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4e-cl1": buildP4eCl1 };
export const P4_CLOZE4_QUESTION_COUNTS = { "p4e-cl1": 10 };
export function buildCloze4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
