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
    { q: "The cat ___ on the mat.", a: "sits", choices: ["sits", "sit", "sitting"], explain: "One animal doing something now takes a verb ending in -s. The cat 'sits', so 'sits' fits this sentence." },
    { q: "I ___ to the shop yesterday.", a: "went", choices: ["went", "go", "going"], explain: "'Yesterday' shows it already happened, so we need the past tense. 'Go' becomes 'went' in the past." },
    { q: "She ___ a good girl.", a: "is", choices: ["is", "are", "am"], explain: "We use 'is' with one person like 'she'. We say 'am' with I and 'are' with we or they, so 'is' fits here." },
    { q: "We ___ playing in the garden.", a: "are", choices: ["are", "is", "am"], explain: "We use 'are' with 'we'. 'Is' goes with one person and 'am' goes with I, so 'are' is correct." },
    { q: "He ___ his teeth every morning.", a: "brushes", choices: ["brushes", "brush", "brushing"], explain: "One person doing something every day takes a verb ending in -es here. 'He brushes' is correct." },
    { q: "The dog ran ___ the ball.", a: "after", choices: ["after", "before", "on"], explain: "We need the word that shows the dog chased the ball. 'After' means going to fetch it, so it fits best." },
    { q: "I have ___ apples.", a: "two", choices: ["two", "too", "to"], explain: "'Two' is the number 2. 'Too' means also and 'to' shows direction, so the counting word 'two' is right." },
    { q: "She will ___ to school tomorrow.", a: "go", choices: ["go", "goes", "went"], explain: "After 'will' we use the plain verb with no ending. So we say 'will go', not 'will goes' or 'will went'." },
    { q: "The birds ___ in the sky.", a: "fly", choices: ["fly", "flies", "flying"], explain: "More than one bird takes the plain verb with no -s. So we say 'birds fly', not 'birds flies'." },
    { q: "He is ___ than his brother.", a: "taller", choices: ["taller", "more tall", "tallest"], explain: "To compare two people we add -er to the describing word. So we say 'taller than', not 'more tall'." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP2eEd1() {
  return shuffle([
    { q: "Spot the error: 'She have a cat.'", a: "have → has", choices: ["have → has", "a → an", "No error"], explain: "With one person like 'she', we use 'has', not 'have'. So 'She have' should be 'She has'." },
    { q: "Spot the error: 'He goed home.'", a: "goed → went", choices: ["goed → went", "He → Him", "No error"], explain: "'Go' is irregular, so its past tense is not 'goed'. It changes completely to 'went'." },
    { q: "Spot the error: 'I are happy.'", a: "are → am", choices: ["are → am", "happy → sad", "No error"], explain: "We always use 'am' with 'I', never 'are'. So 'I are' should be 'I am'." },
    { q: "Spot the error: 'The dogs is barking.'", a: "is → are", choices: ["is → are", "dogs → dog", "No error"], explain: "More than one, like 'dogs', takes 'are', not 'is'. So 'dogs is' should be 'dogs are'." },
    { q: "Spot the error: 'She eated the cake.'", a: "eated → ate", choices: ["eated → ate", "the → a", "No error"], explain: "'Eat' is irregular, so its past tense is not 'eated'. It changes to 'ate'." },
    { q: "Which sentence is correct?", a: "I have an umbrella.", choices: ["I have an umbrella.", "I have a umbrella.", "I have the umbrella one."], explain: "Before a word starting with a vowel sound, like 'umbrella', we use 'an' instead of 'a'." },
    { q: "Which sentence is correct?", a: "They are playing outside.", choices: ["They are playing outside.", "They is playing outside.", "Them are playing outside."], explain: "'They' is the right word to start the sentence, and 'they' takes 'are', not 'is'." },
    { q: "Spot the error: 'The childs are singing.'", a: "childs → children", choices: ["childs → children", "are → is", "No error"], explain: "Some plurals do not just add -s. The plural of 'child' is 'children', not 'childs'." },
    { q: "Spot the error: 'She runned very fast.'", a: "runned → ran", choices: ["runned → ran", "very → so", "No error"], explain: "'Run' is irregular, so its past tense is not 'runned'. It changes to 'ran'." },
    { q: "Which sentence is correct?", a: "He does not like milk.", choices: ["He does not like milk.", "He do not like milk.", "He not like milk."], explain: "With one person like 'he', we use 'does not', not 'do not'. So 'He does not like milk.' is correct." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p2e-cl1": buildP2eCl1, "p2e-ed1": buildP2eEd1 };
export const P2_ENG_EXTENDED_QUESTION_COUNTS = { "p2e-cl1": 10, "p2e-ed1": 10 };
export function buildEngExtended2Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
