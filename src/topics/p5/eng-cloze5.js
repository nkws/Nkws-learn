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
    { q: "She ___ the bus to school every day.", a: "takes", choices: ["takes", "took", "taking"], explain: "'Every day' signals a habit, which needs the present simple tense. With 'she', the verb takes an -s: 'She takes the bus.'" },
    { q: "If it rains tomorrow, we ___ stay indoors.", a: "will", choices: ["will", "would", "shall"], explain: "This is a first conditional about a likely future. The pattern is 'if + present, will + verb', so 'we will stay indoors' is correct." },
    { q: "He has ___ his homework before dinner.", a: "finished", choices: ["finished", "finish", "finishing"], explain: "After 'has' we use the past participle to form the present perfect tense. 'Finished' is that form: 'He has finished his homework.'" },
    { q: "The children were playing ___ the rain started.", a: "when", choices: ["when", "while", "because"], explain: "'When' marks the moment one action interrupts another. A longer action (playing) was happening at the point the rain started, so 'when' fits." },
    { q: "She asked me ___ I had seen her bag.", a: "whether", choices: ["whether", "weather", "that"], explain: "A reported yes/no question uses 'whether' (or 'if'). 'Weather' is the sound-alike about rain and sun, so the meaning, not the sound, picks 'whether'." },
    { q: "He is taller ___ his brother.", a: "than", choices: ["than", "then", "that"], explain: "Comparisons use 'than' to link the two things compared. 'Then' is about time, so the comparative 'taller' must pair with 'than'." },
    { q: "The cake was ___ by my grandmother.", a: "baked", choices: ["baked", "baking", "bake"], explain: "This is passive voice: 'was' plus a past participle. The cake received the action, so 'was baked by my grandmother' is correct." },
    { q: "Tom has been waiting ___ two hours.", a: "for", choices: ["for", "since", "from"], explain: "Use 'for' with a length of time and 'since' with a starting point. 'Two hours' is a duration, so 'for two hours' is right." },
    { q: "We should be grateful ___ what we have.", a: "for", choices: ["for", "of", "with"], explain: "Some words pair with a fixed preposition. 'Grateful' is always followed by 'for' when naming what we are thankful about." },
    { q: "Neither the teacher ___ the students knew the answer.", a: "nor", choices: ["nor", "or", "and"], explain: "The paired connector 'neither' must be matched by 'nor'. Together they join two negatives: not the teacher and not the students." },
    { q: "The dog, ___ was very old, could barely walk.", a: "which", choices: ["which", "who", "whose"], explain: "Relative pronouns match what they describe. 'Which' is used for animals and things, so it links back to 'the dog'." },
    { q: "She ran quickly ___ she would not be late.", a: "so that", choices: ["so that", "because", "although"], explain: "'So that' introduces a purpose — the reason she ran. She ran in order not to be late, so 'so that' shows that aim." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5e-cl1": buildP5eCl1 };
export const P5_CLOZE5_QUESTION_COUNTS = { "p5e-cl1": 12 };
export function buildCloze5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
