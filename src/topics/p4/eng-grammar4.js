import { shuffle } from "../../utils/helpers";

export const P4_GRAMMAR4_INTRO = {
  "p4e-gr1": {
    title: "Grammar — Tenses and Agreement",
    pages: [
      { text: "Using the correct tense tells us WHEN something happens — past, present, or future!", emoji: "⏮️ ⏺️ ⏭️" },
      { text: "Subject-verb agreement means the verb must match the subject. 'She runs' not 'She run'!", emoji: "✅ 🏃‍♀️" },
    ],
  },
};

function buildP4eGr1() {
  return shuffle([
    { q: "She ___ to school every day.", a: "walks", choices: ["walks", "walk", "walked"] },
    { q: "They ___ playing in the park yesterday.", a: "were", choices: ["were", "was", "are"] },
    { q: "He ___ already finished his homework.", a: "has", choices: ["has", "have", "had"] },
    { q: "The children ___ singing right now.", a: "are", choices: ["are", "is", "was"] },
    { q: "I ___ go to the library tomorrow.", a: "will", choices: ["will", "was", "am"] },
    { q: "She ___ her lunch before the bell rang.", a: "had eaten", choices: ["had eaten", "has eaten", "eats"] },
    { q: "The dog ___ loudly every night.", a: "barks", choices: ["barks", "bark", "barking"] },
    { q: "We ___ to the zoo last Sunday.", a: "went", choices: ["went", "go", "goes"] },
    { q: "My mother ___ cooking dinner now.", a: "is", choices: ["is", "are", "were"] },
    { q: "The boys ___ playing football since morning.", a: "have been", choices: ["have been", "has been", "was"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4eGr2() {
  return shuffle([
    { q: "Choose the correct preposition: The cat is ___ the table.", a: "under", choices: ["under", "since", "during"] },
    { q: "Choose the correct conjunction: I wanted to play, ___ it was raining.", a: "but", choices: ["but", "so", "because"] },
    { q: "She is taller ___ her brother.", a: "than", choices: ["than", "then", "that"] },
    { q: "I will wait ___ you finish.", a: "until", choices: ["until", "during", "since"] },
    { q: "He ran fast ___ he could catch the bus.", a: "so that", choices: ["so that", "because", "although"] },
    { q: "Choose the correct article: I saw ___ owl in the tree.", a: "an", choices: ["an", "a", "the"] },
    { q: "___ it was late, she continued studying.", a: "Although", choices: ["Although", "Because", "So"] },
    { q: "The book is ___ the shelf.", a: "on", choices: ["on", "at", "in"] },
    { q: "We play outside ___ it is sunny.", a: "when", choices: ["when", "until", "before"] },
    { q: "He is good ___ mathematics.", a: "at", choices: ["at", "in", "on"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4eVc1() {
  return shuffle([
    { q: "What is a synonym of 'happy'?", a: "Glad", choices: ["Glad", "Sad", "Angry"] },
    { q: "What is an antonym of 'brave'?", a: "Cowardly", choices: ["Cowardly", "Bold", "Strong"] },
    { q: "The word 'enormous' means?", a: "Very large", choices: ["Very large", "Very small", "Very fast"] },
    { q: "What is a synonym of 'begin'?", a: "Start", choices: ["Start", "End", "Stop"] },
    { q: "What is an antonym of 'ancient'?", a: "Modern", choices: ["Modern", "Old", "Broken"] },
    { q: "The word 'famished' means?", a: "Very hungry", choices: ["Very hungry", "Very tired", "Very happy"] },
    { q: "What is a synonym of 'furious'?", a: "Angry", choices: ["Angry", "Happy", "Calm"] },
    { q: "What is an antonym of 'generous'?", a: "Selfish", choices: ["Selfish", "Kind", "Wealthy"] },
    { q: "The word 'cautious' means?", a: "Careful", choices: ["Careful", "Careless", "Quick"] },
    { q: "What is a synonym of 'assist'?", a: "Help", choices: ["Help", "Hinder", "Ignore"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4e-gr1": buildP4eGr1, "p4e-gr2": buildP4eGr2, "p4e-vc1": buildP4eVc1 };
export const P4_GRAMMAR4_QUESTION_COUNTS = { "p4e-gr1": 10, "p4e-gr2": 10, "p4e-vc1": 10 };
export function buildGrammar4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
