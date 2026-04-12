import { shuffle } from "../utils/helpers";
// ============ INTRO CONTENT ============

export const SIGHTWORDS_INTRO = {
  "sw-1": {
    title: "What are Sight Words?",
    pages: [
      {
        text: "Sight words are words you see all the time when you read!",
        emoji: "👀 📖",
      },
      {
        text: "Words like 'the', 'and', 'is' appear in almost every book!",
        emoji: "📚 ✨",
      },
      {
        text: "When you know these words by heart, reading becomes much easier!",
        emoji: "❤️ 📖 = 😊",
      },
      {
        text: "Let's learn to recognise some common sight words!",
        emoji: "🦊 👀 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildSw1() {
  return shuffle([
    { q: "I like ___ big red ball.", a: "the", choices: ["the", "a", "is"] },
    { q: "I have a cat ___ a dog.", a: "and", choices: ["and", "but", "the"] },
    { q: "She ___ my best friend.", a: "is", choices: ["is", "are", "was"] },
    { q: "___ are a good student.", a: "You", choices: ["You", "They", "Was"] },
    { q: "He ___ at school yesterday.", a: "was", choices: ["was", "is", "are"] },
    { q: "We ___ going to the park.", a: "are", choices: ["are", "is", "was"] },
    { q: "___ played in the garden.", a: "They", choices: ["They", "The", "Was"] },
    { q: "Mum ___ it was bedtime.", a: "said", choices: ["said", "is", "are"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildSw2() {
  return shuffle([
    { q: "Which word means to move fast on your feet?", a: "run", choices: ["run", "sit", "read"] },
    { q: "Which word means to go up in the air?", a: "jump", choices: ["jump", "eat", "write"] },
    { q: "Which word means to rest in a chair?", a: "sit", choices: ["sit", "sing", "run"] },
    { q: "Which word means to put food in your mouth?", a: "eat", choices: ["eat", "play", "jump"] },
    { q: "Which word means to have fun with toys?", a: "play", choices: ["play", "write", "sit"] },
    { q: "Which word means to look at a book?", a: "read", choices: ["read", "run", "sing"] },
    { q: "Which word means to use a pencil on paper?", a: "write", choices: ["write", "eat", "jump"] },
    { q: "Which word means to make music with your voice?", a: "sing", choices: ["sing", "play", "read"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildSw3() {
  return shuffle([
    { q: "Which word means large in size?", a: "big", choices: ["big", "small", "slow"] },
    { q: "Which word means little in size?", a: "small", choices: ["small", "big", "fast"] },
    { q: "Which word means feeling glad?", a: "happy", choices: ["happy", "sad", "cold"] },
    { q: "Which word means feeling unhappy?", a: "sad", choices: ["sad", "happy", "hot"] },
    { q: "Which word means very warm?", a: "hot", choices: ["hot", "cold", "big"] },
    { q: "Which word means very chilly?", a: "cold", choices: ["cold", "hot", "slow"] },
    { q: "Which word means quick?", a: "fast", choices: ["fast", "slow", "small"] },
    { q: "Which word means not quick?", a: "slow", choices: ["slow", "fast", "sad"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildSw4() {
  return shuffle([
    { q: "Which word means you are able to do something?", a: "can", choices: ["can", "not", "will"] },
    { q: "Which word means something is going to happen?", a: "will", choices: ["will", "can", "that"] },
    { q: "Which word points to something near you?", a: "this", choices: ["this", "that", "want"] },
    { q: "Which word points to something far from you?", a: "that", choices: ["that", "this", "like"] },
    { q: "Which word means to own something?", a: "have", choices: ["have", "want", "not"] },
    { q: "Which word means to wish for something?", a: "want", choices: ["want", "have", "can"] },
    { q: "Which word means to enjoy something?", a: "like", choices: ["like", "not", "will"] },
    { q: "Which word means the opposite of yes?", a: "not", choices: ["not", "can", "like"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const SIGHTWORDS_BUILDERS = {
  "sw-1": buildSw1,
  "sw-2": buildSw2,
  "sw-3": buildSw3,
  "sw-4": buildSw4,
};

export const SIGHTWORDS_QUESTION_COUNTS = {
  "sw-1": 8, "sw-2": 8, "sw-3": 8, "sw-4": 8,
};

export function buildSightWordsQuestions(moduleId) {
  const builder = SIGHTWORDS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
