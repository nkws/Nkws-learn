import { shuffle } from "../../utils/helpers";

export const P5_GRAMMAR5_INTRO = {
  "p5e-gr1": {
    title: "Grammar — Active, Passive, and Speech",
    pages: [
      { text: "Active voice: The dog bit the man. Passive voice: The man was bitten by the dog. Same event, different focus!", emoji: "🐕 ➡️ 👨 vs 👨 ⬅️ 🐕" },
      { text: "Direct speech uses the exact words: She said, 'I am tired.' Indirect speech reports the meaning: She said that she was tired.", emoji: "💬 ➡️ 📝" },
    ],
  },
};

function buildP5eGr1() {
  return shuffle([
    { q: "Change to passive: 'The boy kicked the ball.'", a: "The ball was kicked by the boy", choices: ["The ball was kicked by the boy", "The boy was kicked by the ball", "The ball kicked the boy"] },
    { q: "Change to passive: 'The chef cooked the meal.'", a: "The meal was cooked by the chef", choices: ["The meal was cooked by the chef", "The chef was cooked by the meal", "The meal cooked the chef"] },
    { q: "Which sentence is in passive voice?", a: "The window was broken by the boy", choices: ["The window was broken by the boy", "The boy broke the window", "The boy is breaking the window"] },
    { q: "Which sentence is in active voice?", a: "The cat chased the mouse", choices: ["The cat chased the mouse", "The mouse was chased by the cat", "The mouse had been chased"] },
    { q: "Change to indirect speech: He said, 'I am happy.'", a: "He said that he was happy", choices: ["He said that he was happy", "He said that I am happy", "He says that he is happy"] },
    { q: "Change to indirect speech: She said, 'I will come.'", a: "She said that she would come", choices: ["She said that she would come", "She said that I will come", "She says she will come"] },
    { q: "'Must' changes to ___ in indirect speech.", a: "Had to", choices: ["Had to", "Must", "Will"] },
    { q: "'Can' changes to ___ in indirect speech.", a: "Could", choices: ["Could", "Can", "Will"] },
    { q: "In passive voice, the ___ receives the action.", a: "Subject", choices: ["Subject", "Object", "Verb"] },
    { q: "Which word signals passive voice?", a: "By", choices: ["By", "To", "For"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5eGr2() {
  return shuffle([
    { q: "___ she was tired, she continued working.", a: "Although", choices: ["Although", "Because", "So"] },
    { q: "He will not pass ___ he studies harder.", a: "unless", choices: ["unless", "because", "although"] },
    { q: "She is ___ smart ___ hardworking.", a: "not only ... but also", choices: ["not only ... but also", "either ... or", "neither ... nor"] },
    { q: "You can have ___ tea ___ coffee.", a: "either ... or", choices: ["either ... or", "neither ... nor", "not only ... but also"] },
    { q: "He is ___ rich ___ famous.", a: "neither ... nor", choices: ["neither ... nor", "either ... or", "both ... and"] },
    { q: "___ the rain, we went for a walk.", a: "Despite", choices: ["Despite", "Because of", "Due to"] },
    { q: "The girl ___ won the prize is my sister.", a: "who", choices: ["who", "which", "where"] },
    { q: "The book ___ is on the table is mine.", a: "which", choices: ["which", "who", "where"] },
    { q: "This is the place ___ we first met.", a: "where", choices: ["where", "which", "who"] },
    { q: "The man ___ car was stolen called the police.", a: "whose", choices: ["whose", "who", "which"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5eVc1() {
  return shuffle([
    { q: "The word 'reluctant' means?", a: "Unwilling", choices: ["Unwilling", "Eager", "Happy"] },
    { q: "What is a synonym of 'conceal'?", a: "Hide", choices: ["Hide", "Show", "Find"] },
    { q: "What is an antonym of 'expand'?", a: "Shrink", choices: ["Shrink", "Grow", "Stretch"] },
    { q: "The word 'plummeted' means?", a: "Fell rapidly", choices: ["Fell rapidly", "Rose slowly", "Stayed the same"] },
    { q: "'She gave in to his request' means she?", a: "Agreed", choices: ["Agreed", "Refused", "Ignored"] },
    { q: "'Look into' means?", a: "Investigate", choices: ["Investigate", "Ignore", "Admire"] },
    { q: "The word 'reluctantly' is used as?", a: "An adverb", choices: ["An adverb", "A noun", "An adjective"] },
    { q: "What is a synonym of 'astonished'?", a: "Amazed", choices: ["Amazed", "Bored", "Angry"] },
    { q: "What is an antonym of 'timid'?", a: "Bold", choices: ["Bold", "Shy", "Quiet"] },
    { q: "The word 'diligent' means?", a: "Hardworking", choices: ["Hardworking", "Lazy", "Slow"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5e-gr1": buildP5eGr1, "p5e-gr2": buildP5eGr2, "p5e-vc1": buildP5eVc1 };
export const P5_GRAMMAR5_QUESTION_COUNTS = { "p5e-gr1": 10, "p5e-gr2": 10, "p5e-vc1": 10 };
export function buildGrammar5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
