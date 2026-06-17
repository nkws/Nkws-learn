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
    { q: "I like ___ big red ball.", a: "the", choices: ["the", "a", "is"], explain: "We use 'the' to point at one special thing we mean. 'The big red ball' tells us which ball, so 'the' fits the gap." },
    { q: "I have a cat ___ a dog.", a: "and", choices: ["and", "but", "the"], explain: "We use 'and' to join two things together. You have a cat plus a dog, so 'and' links them in one sentence." },
    { q: "She ___ my best friend.", a: "is", choices: ["is", "are", "was"], explain: "We use 'is' for one person happening now. 'She' is one person, so we say 'she is', not 'she are'." },
    { q: "___ are a good student.", a: "You", choices: ["You", "They", "Was"], explain: "The word 'are' goes with 'you'. We say 'you are', so 'You' is the word that starts this sentence." },
    { q: "He ___ at school yesterday.", a: "was", choices: ["was", "is", "are"], explain: "The word 'yesterday' tells us it already happened, so we use the past word 'was', not 'is'." },
    { q: "We ___ going to the park.", a: "are", choices: ["are", "is", "was"], explain: "We use 'are' for more than one person now. 'We' means us together, so we say 'we are'." },
    { q: "___ played in the garden.", a: "They", choices: ["They", "The", "Was"], explain: "We need a naming word that does the playing. 'They' means some people, so 'They played' tells us who played." },
    { q: "Mum ___ it was bedtime.", a: "said", choices: ["said", "is", "are"], explain: "We use 'said' to tell what someone spoke. Mum spoke about bedtime, so 'said' is the word that fits." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildSw2() {
  return shuffle([
    { q: "Which word means to move fast on your feet?", a: "run", choices: ["run", "sit", "read"], explain: "An action word tells what we do. Moving quickly on your feet is what we call 'run', so 'run' is the answer." },
    { q: "Which word means to go up in the air?", a: "jump", choices: ["jump", "eat", "write"], explain: "An action word names what we do. Pushing off the ground to go up is what we call 'jump'." },
    { q: "Which word means to rest in a chair?", a: "sit", choices: ["sit", "sing", "run"], explain: "An action word names what we do. Resting with your bottom on a chair is what we call 'sit'." },
    { q: "Which word means to put food in your mouth?", a: "eat", choices: ["eat", "play", "jump"], explain: "An action word names what we do. Putting food in your mouth to chew is what we call 'eat'." },
    { q: "Which word means to have fun with toys?", a: "play", choices: ["play", "write", "sit"], explain: "An action word names what we do. Having fun with toys and games is what we call 'play'." },
    { q: "Which word means to look at a book?", a: "read", choices: ["read", "run", "sing"], explain: "An action word names what we do. Looking at words in a book to understand them is what we call 'read'." },
    { q: "Which word means to use a pencil on paper?", a: "write", choices: ["write", "eat", "jump"], explain: "An action word names what we do. Making letters and words with a pencil is what we call 'write'." },
    { q: "Which word means to make music with your voice?", a: "sing", choices: ["sing", "play", "read"], explain: "An action word names what we do. Making a tune with your voice is what we call 'sing'." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildSw3() {
  return shuffle([
    { q: "Which word means large in size?", a: "big", choices: ["big", "small", "slow"], explain: "A describing word tells us what something is like. The word for taking up a lot of room is 'big'." },
    { q: "Which word means little in size?", a: "small", choices: ["small", "big", "fast"], explain: "A describing word tells us what something is like. The word for taking up only a little room is 'small'." },
    { q: "Which word means feeling glad?", a: "happy", choices: ["happy", "sad", "cold"], explain: "A describing word tells us how someone feels. When you feel glad and smiley, we say you are 'happy'." },
    { q: "Which word means feeling unhappy?", a: "sad", choices: ["sad", "happy", "hot"], explain: "A describing word tells us how someone feels. When you feel down and want to cry, we say you are 'sad'." },
    { q: "Which word means very warm?", a: "hot", choices: ["hot", "cold", "big"], explain: "A describing word tells us what something is like. The word for very warm, like the sun, is 'hot'." },
    { q: "Which word means very chilly?", a: "cold", choices: ["cold", "hot", "slow"], explain: "A describing word tells us what something is like. The word for very chilly, like ice, is 'cold'." },
    { q: "Which word means quick?", a: "fast", choices: ["fast", "slow", "small"], explain: "A describing word tells us what something is like. The word for moving quickly is 'fast'." },
    { q: "Which word means not quick?", a: "slow", choices: ["slow", "fast", "sad"], explain: "A describing word tells us what something is like. The word for not quick, taking a long time, is 'slow'." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildSw4() {
  return shuffle([
    { q: "Which word means you are able to do something?", a: "can", choices: ["can", "not", "will"], explain: "We use 'can' to show we are able to do something. 'I can swim' means you are able to swim." },
    { q: "Which word means something is going to happen?", a: "will", choices: ["will", "can", "that"], explain: "We use 'will' to talk about the future. 'It will rain' means the rain is going to happen later." },
    { q: "Which word points to something near you?", a: "this", choices: ["this", "that", "want"], explain: "We use 'this' for something close by. 'This book in my hand' points to the one right next to you." },
    { q: "Which word points to something far from you?", a: "that", choices: ["that", "this", "like"], explain: "We use 'that' for something far away. 'That bird in the sky' points to one a long way off." },
    { q: "Which word means to own something?", a: "have", choices: ["have", "want", "not"], explain: "We use 'have' to show we own or keep something. 'I have a pet' means the pet belongs to you." },
    { q: "Which word means to wish for something?", a: "want", choices: ["want", "have", "can"], explain: "We use 'want' to show we wish for something. 'I want a drink' means you would like one." },
    { q: "Which word means to enjoy something?", a: "like", choices: ["like", "not", "will"], explain: "We use 'like' to show we enjoy something. 'I like cake' means cake makes you happy." },
    { q: "Which word do we use to say something is untrue, as in 'I am ___ sad'?", a: "not", choices: ["not", "can", "like"], explain: "We use 'not' to turn a sentence the other way. 'I am not sad' means you are the opposite of sad." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
