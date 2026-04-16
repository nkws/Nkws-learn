import { shuffle } from "../../utils/helpers";

export const P3_ENG_EXTENDED_INTRO = {
  "p3e-cl1": {
    title: "Cloze Practice",
    pages: [
      { text: "Fill in the blank with the word that fits the grammar and meaning.", emoji: "📖 ✏️" },
    ],
  },
  "p3e-ed1": {
    title: "Editing",
    pages: [
      { text: "Read each sentence and spot the grammar or spelling error.", emoji: "🔍 ✏️" },
    ],
  },
};

function buildP3eCl1() {
  return shuffle([
    { q: "She ___ to the library every Tuesday.", a: "goes", choices: ["goes", "go", "going"] },
    { q: "The boys ___ playing football in the field.", a: "are", choices: ["are", "is", "was"] },
    { q: "He ___ already finished his homework.", a: "has", choices: ["has", "have", "had"] },
    { q: "We went to the zoo ___ saw many animals.", a: "and", choices: ["and", "but", "or"] },
    { q: "She was happy ___ she won a prize.", a: "because", choices: ["because", "but", "so"] },
    { q: "Tom is taller ___ his sister.", a: "than", choices: ["than", "then", "that"] },
    { q: "The cat sat ___ the mat.", a: "on", choices: ["on", "in", "at"] },
    { q: "I have ___ eating my lunch.", a: "finished", choices: ["finished", "finish", "finishing"] },
    { q: "___ it was raining, we stayed indoors.", a: "Since", choices: ["Since", "But", "And"] },
    { q: "She is ___ girl in the class.", a: "the tallest", choices: ["the tallest", "the taller", "the most tall"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP3eEd1() {
  return shuffle([
    { q: "Spot the error: 'She go to school every day.'", a: "go → goes", choices: ["go → goes", "to → at", "No error"] },
    { q: "Spot the error: 'He drawed a picture.'", a: "drawed → drew", choices: ["drawed → drew", "a → the", "No error"] },
    { q: "Spot the error: 'The mouses ran away.'", a: "mouses → mice", choices: ["mouses → mice", "ran → run", "No error"] },
    { q: "Spot the error: 'Her and me went to the park.'", a: "Her and me → She and I", choices: ["Her and me → She and I", "went → go", "No error"] },
    { q: "Spot the error: 'There is many people here.'", a: "is → are", choices: ["is → are", "many → much", "No error"] },
    { q: "Which sentence is correct?", a: "I saw two deer in the forest.", choices: ["I saw two deer in the forest.", "I saw two deers in the forest.", "I saw two dears in the forest."] },
    { q: "Which sentence is correct?", a: "She has been sick since Monday.", choices: ["She has been sick since Monday.", "She has been sick for Monday.", "She has been sick from Monday."] },
    { q: "Spot the error: 'He is more stronger than me.'", a: "more stronger → stronger", choices: ["more stronger → stronger", "me → I", "No error"] },
    { q: "Spot the error: 'The sheeps are in the field.'", a: "sheeps → sheep", choices: ["sheeps → sheep", "are → is", "No error"] },
    { q: "Which sentence is correct?", a: "Each student has a book.", choices: ["Each student has a book.", "Each student have a book.", "Each students has a book."] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p3e-cl1": buildP3eCl1, "p3e-ed1": buildP3eEd1 };
export const P3_ENG_EXTENDED_QUESTION_COUNTS = { "p3e-cl1": 10, "p3e-ed1": 10 };
export function buildEngExtended3Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
