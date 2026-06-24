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
    { q: "She ___ to school every morning.", a: "walks", choices: ["walks", "walk", "walking"], explain: "Subject-verb agreement: a singular subject like 'she' takes a verb ending in -s in the present simple. 'Every morning' shows a regular habit, so 'walks' is right." },
    { q: "The children ___ playing in the park yesterday.", a: "were", choices: ["were", "was", "are"], explain: "Past continuous needs 'was' or 'were' plus -ing. 'Children' is plural, so it takes 'were', and 'yesterday' tells us it is in the past." },
    { q: "He has ___ finished his lunch.", a: "already", choices: ["already", "yet", "still"], explain: "'Already' is used with the present perfect (has finished) to say something happened sooner than expected. 'Yet' belongs in questions or negatives, not this positive sentence." },
    { q: "I will call you ___ I reach home.", a: "when", choices: ["when", "until", "because"], explain: "We need a time word linking two actions. 'When' shows the call happens at the moment of reaching home; 'until' or 'because' would change the meaning." },
    { q: "She is good ___ drawing.", a: "at", choices: ["at", "in", "on"], explain: "Prepositions follow fixed patterns. The phrase 'good at' always pairs with a skill or activity, so 'good at drawing' is the correct collocation." },
    { q: "The book ___ is on the table belongs to me.", a: "that", choices: ["that", "who", "where"], explain: "Relative pronouns must match what they describe. 'That' (or 'which') refers to a thing like a book; 'who' is only for people and 'where' for places." },
    { q: "There ___ many people at the park.", a: "were", choices: ["were", "was", "is"], explain: "The verb agrees with what follows 'there'. 'Many people' is plural, so it takes 'were'. 'Was' and 'is' are singular and would not match." },
    { q: "He ran ___ he would not miss the bus.", a: "so that", choices: ["so that", "because", "although"], explain: "We need a word showing purpose — the reason he ran. 'So that' introduces a purpose; 'because' gives a cause and 'although' shows contrast." },
    { q: "Mother told us ___ be quiet in the library.", a: "to", choices: ["to", "must", "should"], explain: "After 'told us', we use a to-infinitive to report an instruction. 'To be quiet' is correct; 'must' and 'should' cannot follow 'told us' here." },
    { q: "The girl ___ won the race is my classmate.", a: "who", choices: ["who", "which", "whose"], explain: "Relative pronouns must suit what they describe. 'Who' is used for people like the girl; 'which' is for things and 'whose' shows possession." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p4e-cl1": buildP4eCl1 };
export const P4_CLOZE4_QUESTION_COUNTS = { "p4e-cl1": 10 };
export function buildCloze4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
