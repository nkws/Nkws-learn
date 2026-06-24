import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP2eGr1() {
  return shuffle([
    { q: "The __ cat sat on the mat.", a: "big", choices: ["big", "run", "quickly"], explain: "A describing word, called an adjective, tells us more about a noun. 'Big' describes the cat, so it is the right word." },
    { q: "She wore a __ dress.", a: "pretty", choices: ["pretty", "swim", "loudly"], explain: "We need an adjective to describe the dress. 'Pretty' tells us what the dress is like, so it fits." },
    { q: "The __ boy ran home.", a: "little", choices: ["little", "jump", "slowly"], explain: "An adjective describes a noun. 'Little' tells us more about the boy, so it is the describing word we need." },
    { q: "I ate a __ apple.", a: "red", choices: ["red", "walk", "happily"], explain: "A describing word tells us about the noun. 'Red' describes the apple, so it is an adjective and fits here." },
    { q: "We saw a __ elephant at the zoo.", a: "huge", choices: ["huge", "sing", "softly"], explain: "We need an adjective to describe the elephant. 'Huge' tells us its size, so it is the right word." },
    { q: "The soup was very __.", a: "hot", choices: ["hot", "eat", "nicely"], explain: "After 'very' we need a describing word. 'Hot' is an adjective that tells us what the soup is like." },
    { q: "She has __ hair.", a: "long", choices: ["long", "play", "gently"], explain: "An adjective describes a noun. 'Long' tells us more about her hair, so it is the describing word we need." },
    { q: "The __ dog chased the ball.", a: "happy", choices: ["happy", "read", "slowly"], explain: "A describing word tells us about the dog. 'Happy' is an adjective, so it fits in front of the noun." },
    { q: "He found a __ shell on the beach.", a: "beautiful", choices: ["beautiful", "climb", "carefully"], explain: "We need an adjective to describe the shell. 'Beautiful' tells us what it is like, so it is the right word." },
    { q: "The ice cream was __.", a: "cold", choices: ["cold", "throw", "loudly"], explain: "A describing word tells us what the ice cream is like. 'Cold' is an adjective, so it fits here." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2eGr2() {
  return shuffle([
    { q: "I like cats __ dogs.", a: "and", choices: ["and", "but", "or"], explain: "A joining word links two ideas. 'And' adds one idea to another, so we use it to put cats and dogs together." },
    { q: "She was tired __ she kept working.", a: "but", choices: ["but", "and", "or"], explain: "'But' joins two ideas that are different or surprising. She was tired, yet she kept working, so 'but' fits." },
    { q: "Do you want milk __ juice?", a: "or", choices: ["or", "and", "but"], explain: "'Or' joins ideas when we choose between them. You can pick milk or juice, so 'or' is the right joining word." },
    { q: "He ran fast __ he won the race.", a: "and", choices: ["and", "but", "or"], explain: "'And' joins two ideas that go together. He ran fast and that led to winning, so 'and' fits." },
    { q: "I wanted to play __ it was raining.", a: "but", choices: ["but", "and", "or"], explain: "'But' joins two ideas that do not match. You wanted to play, yet the rain stopped you, so 'but' is right." },
    { q: "We can go to the park __ the beach.", a: "or", choices: ["or", "and", "but"], explain: "'Or' joins ideas when there is a choice. We pick the park or the beach, so 'or' is the right word." },
    { q: "She sings __ dances very well.", a: "and", choices: ["and", "but", "or"], explain: "'And' joins two things that go together. She sings and she also dances, so 'and' links them." },
    { q: "He studied hard __ he did not pass.", a: "but", choices: ["but", "and", "or"], explain: "'But' joins ideas that are surprising together. He studied hard, yet he did not pass, so 'but' fits." },
    { q: "Would you like tea __ coffee?", a: "or", choices: ["or", "and", "but"], explain: "'Or' joins ideas when we choose one. You can have tea or coffee, so 'or' is the right joining word." },
    { q: "Mum cooked dinner __ Dad washed the dishes.", a: "and", choices: ["and", "but", "or"], explain: "'And' joins two ideas that happen together. Mum cooked and Dad washed up, so 'and' links them." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2eGr3() {
  return shuffle([
    { q: "Which sentence has correct punctuation?", a: "Is it raining?", choices: ["Is it raining?", "Is it raining.", "Is it raining"], explain: "A sentence that asks something is a question, and a question ends with a question mark (?). 'Is it raining?' is correct." },
    { q: "Which sentence has correct punctuation?", a: "I like cake.", choices: ["I like cake.", "I like cake?", "I like cake"], explain: "A sentence that tells us something ends with a full stop (.). It is not a question, so 'I like cake.' is correct." },
    { q: "Which sentence has correct punctuation?", a: "Wow, that is great!", choices: ["Wow, that is great!", "Wow that is great.", "Wow that is great"], explain: "A sentence that shows strong feeling ends with an exclamation mark (!). 'Wow, that is great!' is correct." },
    { q: "Which sentence has correct punctuation?", a: "What is your name?", choices: ["What is your name?", "What is your name.", "What is your name"], explain: "This sentence asks something, so it is a question. A question ends with a question mark (?)." },
    { q: "Which sentence has correct punctuation?", a: "The cat is sleeping.", choices: ["The cat is sleeping.", "The cat is sleeping?", "The cat is sleeping"], explain: "This sentence tells us something, so it ends with a full stop (.). It is not asking a question." },
    { q: "Which sentence has correct punctuation?", a: "Help! The house is on fire!", choices: ["Help! The house is on fire!", "Help the house is on fire.", "Help. The house is on fire"], explain: "Words shouted with strong feeling end with an exclamation mark (!). 'Help! The house is on fire!' is correct." },
    { q: "Which sentence has correct punctuation?", a: "Where are you going?", choices: ["Where are you going?", "Where are you going.", "Where are you going"], explain: "This sentence asks something, so it is a question and ends with a question mark (?)." },
    { q: "Which sentence has correct punctuation?", a: "She is my friend.", choices: ["She is my friend.", "She is my friend?", "She is my friend"], explain: "This sentence tells us a fact, so it ends with a full stop (.), not a question mark." },
    { q: "Which sentence has correct punctuation?", a: "Can I have some water?", choices: ["Can I have some water?", "Can I have some water.", "Can I have some water"], explain: "Asking for something is a question, and a question ends with a question mark (?)." },
    { q: "Which sentence has correct punctuation?", a: "Stop! Do not run!", choices: ["Stop! Do not run!", "Stop do not run.", "Stop. do not run"], explain: "Strong orders shouted out end with an exclamation mark (!). 'Stop! Do not run!' is correct." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

const GRAMMAR2_BUILDERS = {
  "p2e-gr1": buildP2eGr1,
  "p2e-gr2": buildP2eGr2,
  "p2e-gr3": buildP2eGr3,
};

export const P2_GRAMMAR2_QUESTION_COUNTS = {
  "p2e-gr1": 10, "p2e-gr2": 10, "p2e-gr3": 10,
};

export function buildGrammar2Questions(moduleId) {
  const builder = GRAMMAR2_BUILDERS[moduleId];
  return builder ? builder() : [];
}
