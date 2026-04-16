import { shuffle } from "../../utils/helpers";

export const P5_CLOZE_INTRO = {
  "p5e-cl1": {
    title: "Cloze Practice",
    pages: [
      { text: "Fill in the blank with the word that fits both the grammar and the meaning of the sentence.", emoji: "📖 ✏️" },
      { text: "Read the WHOLE sentence before choosing — clues are in the words around the blank!", emoji: "🔍 ➡️ ⬅️" },
    ],
  },
};

function buildP5eCl1() {
  return shuffle([
    { q: "She ___ the bus to school every day.", a: "takes", choices: ["takes", "took", "taking"] },
    { q: "If it rains tomorrow, we ___ stay indoors.", a: "will", choices: ["will", "would", "shall"] },
    { q: "He has ___ his homework before dinner.", a: "finished", choices: ["finished", "finish", "finishing"] },
    { q: "The children were playing ___ the rain started.", a: "when", choices: ["when", "while", "because"] },
    { q: "She asked me ___ I had seen her bag.", a: "whether", choices: ["whether", "weather", "that"] },
    { q: "He is taller ___ his brother.", a: "than", choices: ["than", "then", "that"] },
    { q: "The cake was ___ by my grandmother.", a: "baked", choices: ["baked", "baking", "bake"] },
    { q: "Tom has been waiting ___ two hours.", a: "for", choices: ["for", "since", "from"] },
    { q: "We should be grateful ___ what we have.", a: "for", choices: ["for", "of", "with"] },
    { q: "Neither the teacher ___ the students knew the answer.", a: "nor", choices: ["nor", "or", "and"] },
    { q: "The dog, ___ was very old, could barely walk.", a: "which", choices: ["which", "who", "whose"] },
    { q: "She ran quickly ___ she would not be late.", a: "so that", choices: ["so that", "because", "although"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5e-cl1": buildP5eCl1 };
export const P5_CLOZE5_QUESTION_COUNTS = { "p5e-cl1": 12 };
export function buildCloze5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
