import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP3eVc1() {
  return shuffle([
    { q: "Which word means the same as 'happy'?", a: "glad", choices: ["glad", "sad", "angry"] },
    { q: "Which word means the same as 'big'?", a: "large", choices: ["large", "tiny", "short"] },
    { q: "Which word means the same as 'fast'?", a: "quick", choices: ["quick", "slow", "lazy"] },
    { q: "Which word means the same as 'small'?", a: "tiny", choices: ["tiny", "huge", "tall"] },
    { q: "Which word means the same as 'start'?", a: "begin", choices: ["begin", "finish", "stop"] },
    { q: "Which word means the same as 'angry'?", a: "mad", choices: ["mad", "happy", "calm"] },
    { q: "Which word means the same as 'kind'?", a: "nice", choices: ["nice", "mean", "rude"] },
    { q: "Which word means the same as 'scared'?", a: "afraid", choices: ["afraid", "brave", "calm"] },
    { q: "Which word means the same as 'shut'?", a: "close", choices: ["close", "open", "push"] },
    { q: "Which word means the same as 'correct'?", a: "right", choices: ["right", "wrong", "left"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3eVc2() {
  return shuffle([
    { q: "What is the opposite of 'hot'?", a: "cold", choices: ["cold", "warm", "cool"] },
    { q: "What is the opposite of 'big'?", a: "small", choices: ["small", "tall", "wide"] },
    { q: "What is the opposite of 'happy'?", a: "sad", choices: ["sad", "glad", "mad"] },
    { q: "What is the opposite of 'fast'?", a: "slow", choices: ["slow", "quick", "rush"] },
    { q: "What is the opposite of 'light'?", a: "dark", choices: ["dark", "bright", "dim"] },
    { q: "What is the opposite of 'hard'?", a: "soft", choices: ["soft", "tough", "rough"] },
    { q: "What is the opposite of 'open'?", a: "close", choices: ["close", "push", "pull"] },
    { q: "What is the opposite of 'old'?", a: "young", choices: ["young", "aged", "new"] },
    { q: "What is the opposite of 'tall'?", a: "short", choices: ["short", "long", "thin"] },
    { q: "What is the opposite of 'loud'?", a: "quiet", choices: ["quiet", "noisy", "soft"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3eVc3() {
  return shuffle([
    { q: "She is good __ playing the piano.", a: "at", choices: ["at", "in", "on"] },
    { q: "I listen __ music every day.", a: "to", choices: ["to", "at", "for"] },
    { q: "The train arrives __ 3 o'clock.", a: "at", choices: ["at", "on", "in"] },
    { q: "We go to school __ Monday.", a: "on", choices: ["on", "at", "in"] },
    { q: "She was born __ January.", a: "in", choices: ["in", "on", "at"] },
    { q: "He is afraid __ spiders.", a: "of", choices: ["of", "at", "for"] },
    { q: "We play outside __ the afternoon.", a: "in", choices: ["in", "on", "at"] },
    { q: "The shop closes __ night.", a: "at", choices: ["at", "in", "on"] },
    { q: "She is waiting __ the bus.", a: "for", choices: ["for", "to", "at"] },
    { q: "He is interested __ reading.", a: "in", choices: ["in", "at", "for"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const VOCABULARY2_BUILDERS = {
  "p3e-vc1": buildP3eVc1,
  "p3e-vc2": buildP3eVc2,
  "p3e-vc3": buildP3eVc3,
};

export const P3_VOCABULARY2_QUESTION_COUNTS = {
  "p3e-vc1": 10, "p3e-vc2": 10, "p3e-vc3": 10,
};

export function buildVocabulary2Questions(moduleId) {
  const builder = VOCABULARY2_BUILDERS[moduleId];
  return builder ? builder() : [];
}
