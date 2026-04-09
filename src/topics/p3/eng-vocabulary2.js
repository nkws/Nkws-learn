function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
    { q: "The cat is __ the table.", a: "under", choices: ["under", "is", "the"] },
    { q: "She is sitting __ the chair.", a: "on", choices: ["on", "is", "the"] },
    { q: "The ball is __ the box.", a: "in", choices: ["in", "at", "the"] },
    { q: "He is standing __ the door.", a: "behind", choices: ["behind", "is", "the"] },
    { q: "The bird flew __ the tree.", a: "over", choices: ["over", "is", "the"] },
    { q: "We are going __ the park.", a: "to", choices: ["to", "is", "the"] },
    { q: "The book is __ the shelf.", a: "on", choices: ["on", "is", "at"] },
    { q: "She walked __ the bridge.", a: "across", choices: ["across", "is", "the"] },
    { q: "The dog is __ the garden.", a: "in", choices: ["in", "on", "the"] },
    { q: "He put the cup __ the table.", a: "on", choices: ["on", "is", "at"] },
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
