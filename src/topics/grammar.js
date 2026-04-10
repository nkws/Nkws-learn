import { shuffle } from "../utils/helpers";
// ============ INTRO CONTENT ============

export const GRAMMAR_INTRO = {
  "gr-1": {
    title: "Singular and Plural",
    pages: [
      {
        text: "When we have ONE thing, we say it is singular. One cat!",
        emoji: "🐱 = 1",
      },
      {
        text: "When we have MORE THAN ONE, we say it is plural. Two cats!",
        emoji: "🐱🐱 = 2",
      },
      {
        text: "We usually add 's' to make a word plural. Cat becomes cats!",
        emoji: "cat ➡️ cats",
      },
      {
        text: "Some words are special! Child becomes children, not childs!",
        emoji: "👦 ➡️ 👦👧👦",
      },
      {
        text: "Let's practise making words plural!",
        emoji: "🦊 📝 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildGr1() {
  return shuffle([
    { q: "What is the plural of 'cat'?", a: "cats", choices: ["cats", "cates", "caties"] },
    { q: "What is the plural of 'dog'?", a: "dogs", choices: ["dogs", "doges", "dogies"] },
    { q: "What is the plural of 'book'?", a: "books", choices: ["books", "bookes", "bookies"] },
    { q: "What is the plural of 'child'?", a: "children", choices: ["children", "childs", "childes"] },
    { q: "What is the plural of 'box'?", a: "boxes", choices: ["boxes", "boxs", "boxies"] },
    { q: "What is the plural of 'fish'?", a: "fish", choices: ["fish", "fishes", "fishs"] },
    { q: "What is the plural of 'man'?", a: "men", choices: ["men", "mans", "manes"] },
    { q: "What is the plural of 'foot'?", a: "feet", choices: ["feet", "foots", "footes"] },
    { q: "What is the plural of 'bus'?", a: "buses", choices: ["buses", "buss", "busies"] },
    { q: "What is the plural of 'baby'?", a: "babies", choices: ["babies", "babys", "babyes"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildGr2() {
  return shuffle([
    { q: "Fill in: __ apple", a: "an", choices: ["an", "a", "the"] },
    { q: "Fill in: __ cat", a: "a", choices: ["a", "an", "the"] },
    { q: "Fill in: __ egg", a: "an", choices: ["an", "a", "the"] },
    { q: "Fill in: __ dog", a: "a", choices: ["a", "an", "the"] },
    { q: "Fill in: __ umbrella", a: "an", choices: ["an", "a", "the"] },
    { q: "Fill in: __ ball", a: "a", choices: ["a", "an", "the"] },
    { q: "Fill in: __ orange", a: "an", choices: ["an", "a", "the"] },
    { q: "Fill in: __ ice cream", a: "an", choices: ["an", "a", "the"] },
    { q: "Fill in: __ house", a: "a", choices: ["a", "an", "the"] },
    { q: "Fill in: __ elephant", a: "an", choices: ["an", "a", "the"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildGr3() {
  return shuffle([
    { q: "Fill in: I __ happy.", a: "am", choices: ["am", "is", "are"] },
    { q: "Fill in: She __ tall.", a: "is", choices: ["is", "am", "are"] },
    { q: "Fill in: They __ here.", a: "are", choices: ["are", "is", "am"] },
    { q: "Fill in: He __ my friend.", a: "is", choices: ["is", "am", "are"] },
    { q: "Fill in: We __ in school.", a: "are", choices: ["are", "is", "am"] },
    { q: "Fill in: I __ a boy.", a: "am", choices: ["am", "is", "are"] },
    { q: "Fill in: The cat __ small.", a: "is", choices: ["is", "am", "are"] },
    { q: "Fill in: You __ my friend.", a: "are", choices: ["are", "is", "am"] },
    { q: "Fill in: The dogs __ big.", a: "are", choices: ["are", "is", "am"] },
    { q: "Fill in: I __ hungry.", a: "am", choices: ["am", "is", "are"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildGr4() {
  return shuffle([
    { q: "__ is my book. (pointing near)", a: "This", choices: ["This", "That", "Those"] },
    { q: "__ is your bag. (pointing far)", a: "That", choices: ["That", "This", "These"] },
    { q: "__ is my pencil. (in your hand)", a: "This", choices: ["This", "That", "Those"] },
    { q: "__ is a bird in the sky. (far away)", a: "That", choices: ["That", "This", "These"] },
    { q: "__ is my chair. (you are sitting on it)", a: "This", choices: ["This", "That", "Those"] },
    { q: "__ is the mountain. (very far away)", a: "That", choices: ["That", "This", "These"] },
    { q: "__ is my lunch box. (on your desk)", a: "This", choices: ["This", "That", "Those"] },
    { q: "__ is a plane in the sky. (far away)", a: "That", choices: ["That", "This", "These"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const GRAMMAR_BUILDERS = {
  "gr-1": buildGr1,
  "gr-2": buildGr2,
  "gr-3": buildGr3,
  "gr-4": buildGr4,
};

export const GRAMMAR_QUESTION_COUNTS = {
  "gr-1": 10, "gr-2": 10, "gr-3": 10, "gr-4": 8,
};

export function buildGrammarQuestions(moduleId) {
  const builder = GRAMMAR_BUILDERS[moduleId];
  return builder ? builder() : [];
}
