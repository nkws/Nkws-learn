function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildP2eGr1() {
  return shuffle([
    { q: "The __ cat sat on the mat.", a: "big", choices: ["big", "run", "quickly"] },
    { q: "She wore a __ dress.", a: "pretty", choices: ["pretty", "swim", "loudly"] },
    { q: "The __ boy ran home.", a: "little", choices: ["little", "jump", "slowly"] },
    { q: "I ate a __ apple.", a: "red", choices: ["red", "walk", "happily"] },
    { q: "We saw a __ elephant at the zoo.", a: "huge", choices: ["huge", "sing", "softly"] },
    { q: "The soup was very __.", a: "hot", choices: ["hot", "eat", "nicely"] },
    { q: "She has __ hair.", a: "long", choices: ["long", "play", "gently"] },
    { q: "The __ dog chased the ball.", a: "happy", choices: ["happy", "read", "slowly"] },
    { q: "He found a __ shell on the beach.", a: "beautiful", choices: ["beautiful", "climb", "carefully"] },
    { q: "The ice cream was __.", a: "cold", choices: ["cold", "throw", "loudly"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2eGr2() {
  return shuffle([
    { q: "I like cats __ dogs.", a: "and", choices: ["and", "but", "or"] },
    { q: "She was tired __ she kept working.", a: "but", choices: ["but", "and", "or"] },
    { q: "Do you want milk __ juice?", a: "or", choices: ["or", "and", "but"] },
    { q: "He ran fast __ he won the race.", a: "and", choices: ["and", "but", "or"] },
    { q: "I wanted to play __ it was raining.", a: "but", choices: ["but", "and", "or"] },
    { q: "We can go to the park __ the beach.", a: "or", choices: ["or", "and", "but"] },
    { q: "She sings __ dances very well.", a: "and", choices: ["and", "but", "or"] },
    { q: "He studied hard __ he did not pass.", a: "but", choices: ["but", "and", "or"] },
    { q: "Would you like tea __ coffee?", a: "or", choices: ["or", "and", "but"] },
    { q: "Mum cooked dinner __ Dad washed the dishes.", a: "and", choices: ["and", "but", "or"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2eGr3() {
  return shuffle([
    { q: "Which sentence has correct punctuation?", a: "Is it raining?", choices: ["Is it raining?", "Is it raining.", "Is it raining"] },
    { q: "Which sentence has correct punctuation?", a: "I like cake.", choices: ["I like cake.", "I like cake?", "I like cake"] },
    { q: "Which sentence has correct punctuation?", a: "Wow, that is great!", choices: ["Wow, that is great!", "Wow that is great.", "Wow that is great"] },
    { q: "Which sentence has correct punctuation?", a: "What is your name?", choices: ["What is your name?", "What is your name.", "What is your name"] },
    { q: "Which sentence has correct punctuation?", a: "The cat is sleeping.", choices: ["The cat is sleeping.", "The cat is sleeping?", "The cat is sleeping"] },
    { q: "Which sentence has correct punctuation?", a: "Help! The house is on fire!", choices: ["Help! The house is on fire!", "Help the house is on fire.", "Help. The house is on fire"] },
    { q: "Which sentence has correct punctuation?", a: "Where are you going?", choices: ["Where are you going?", "Where are you going.", "Where are you going"] },
    { q: "Which sentence has correct punctuation?", a: "She is my friend.", choices: ["She is my friend.", "She is my friend?", "She is my friend"] },
    { q: "Which sentence has correct punctuation?", a: "Can I have some water?", choices: ["Can I have some water?", "Can I have some water.", "Can I have some water"] },
    { q: "Which sentence has correct punctuation?", a: "Stop! Do not run!", choices: ["Stop! Do not run!", "Stop do not run.", "Stop. do not run"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
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
