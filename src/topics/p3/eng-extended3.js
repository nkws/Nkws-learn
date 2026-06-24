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
    { q: "She ___ to the library every Tuesday.", a: "goes", choices: ["goes", "go", "going"], explain: "With 'she' and a regular habit, use the simple present and add -s to the verb, so it becomes goes." },
    { q: "The boys ___ playing football in the field.", a: "are", choices: ["are", "is", "was"], explain: "The verb must match the subject. 'The boys' is more than one, so we use the plural 'are', not 'is'." },
    { q: "He ___ already finished his homework.", a: "has", choices: ["has", "have", "is"], explain: "Present perfect = has/have + the past form. With 'he' we use 'has', so it is has already finished." },
    { q: "We went to the zoo ___ saw many animals.", a: "and", choices: ["and", "but", "or"], explain: "A joining word links two ideas. 'And' adds one idea to another, and both halves agree, so 'and' fits." },
    { q: "She was happy ___ she won a prize.", a: "because", choices: ["because", "but", "so"], explain: "'Because' gives a reason. Winning a prize is the reason she was happy, so 'because' joins them correctly." },
    { q: "Tom is taller ___ his sister.", a: "than", choices: ["than", "then", "that"], explain: "When we compare two people we use 'than'. 'Then' means next in time, so the comparing word here is than." },
    { q: "The cat sat ___ the mat.", a: "on", choices: ["on", "in", "at"], explain: "A position word shows where. 'On' means resting on top of a surface, so the cat sat on the mat." },
    { q: "I have ___ eating my lunch.", a: "finished", choices: ["finished", "finish", "finishing"], explain: "Present perfect = have/has + the past form. After 'have' we need finished, the past form of finish." },
    { q: "___ it was raining, we stayed indoors.", a: "Since", choices: ["Since", "But", "And"], explain: "'Since' here means because. The rain is the reason they stayed indoors, so 'Since' starts the sentence correctly." },
    { q: "She is ___ girl in the class.", a: "the tallest", choices: ["the tallest", "the taller", "the most tall"], explain: "To compare three or more, use the superlative ending in -est with 'the'. So it is the tallest, not the taller." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP3eEd1() {
  return shuffle([
    { q: "Spot the error: 'She go to school every day.'", a: "go → goes", choices: ["go → goes", "to → at", "No error"], explain: "In the simple present, 'she' needs a verb ending in -s. So 'go' must become goes to match the subject." },
    { q: "Spot the error: 'He drawed a picture.'", a: "drawed → drew", choices: ["drawed → drew", "a → the", "No error"], explain: "Some verbs are irregular and do not just add -ed. The past tense of draw is drew, not drawed." },
    { q: "Spot the error: 'The mouses ran away.'", a: "mouses → mice", choices: ["mouses → mice", "ran → run", "No error"], explain: "Some plurals are irregular and do not just add -s. More than one mouse are mice, not mouses." },
    { q: "Spot the error: 'Her and me went to the park.'", a: "Her and me → She and I", choices: ["Her and me → She and I", "went → go", "No error"], explain: "When the people are doing the action, use subject pronouns. So 'Her and me' should be She and I." },
    { q: "Spot the error: 'There is many people here.'", a: "is → are", choices: ["is → are", "many → much", "No error"], explain: "The verb must match the subject. 'People' is plural, so we use 'are', not 'is'." },
    { q: "Which sentence is correct?", a: "I saw two deer in the forest.", choices: ["I saw two deer in the forest.", "I saw two deers in the forest.", "I saw two dears in the forest."], explain: "Some nouns stay the same in the plural. 'Deer' does not change, so two deer is correct, not deers." },
    { q: "Which sentence is correct?", a: "She has been sick since Monday.", choices: ["She has been sick since Monday.", "She has been sick for Monday.", "She has been sick from Monday."], explain: "We use 'since' with a point in time when something started. Monday is a starting point, so 'since Monday' is right." },
    { q: "Spot the error: 'He is more stronger than me.'", a: "more stronger → stronger", choices: ["more stronger → stronger", "me → I", "No error"], explain: "To compare, use either 'more' or the -er ending, never both. 'More stronger' is double, so just say stronger." },
    { q: "Spot the error: 'The sheeps are in the field.'", a: "sheeps → sheep", choices: ["sheeps → sheep", "are → is", "No error"], explain: "Some nouns stay the same in the plural. The plural of sheep is sheep, so 'sheeps' is wrong." },
    { q: "Which sentence is correct?", a: "Each student has a book.", choices: ["Each student has a book.", "Each student have a book.", "Each students has a book."], explain: "'Each' means one at a time, so it takes a singular verb. We say each student has, not have." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p3e-cl1": buildP3eCl1, "p3e-ed1": buildP3eEd1 };
export const P3_ENG_EXTENDED_QUESTION_COUNTS = { "p3e-cl1": 10, "p3e-ed1": 10 };
export function buildEngExtended3Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
