import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP3eVc1() {
  return shuffle([
    { q: "Which word means the same as 'happy'?", a: "glad", choices: ["glad", "sad", "angry"], explain: "A synonym is a word with almost the same meaning. 'Glad' means feeling happy, so it is the synonym here." },
    { q: "Which word means the same as 'big'?", a: "large", choices: ["large", "tiny", "short"], explain: "A synonym means nearly the same thing. Something big takes up a lot of space, and so does something large." },
    { q: "Which word means the same as 'fast'?", a: "quick", choices: ["quick", "slow", "lazy"], explain: "A synonym is a word that means the same. Moving fast and moving quick both mean moving at high speed." },
    { q: "Which word means the same as 'small'?", a: "tiny", choices: ["tiny", "huge", "tall"], explain: "A synonym means almost the same thing. Something small is little, and 'tiny' also means very little." },
    { q: "Which word means the same as 'start'?", a: "begin", choices: ["begin", "finish", "stop"], explain: "A synonym is a word with the same meaning. To start something and to begin it both mean to set it going." },
    { q: "Which word means the same as 'angry'?", a: "mad", choices: ["mad", "happy", "calm"], explain: "A synonym means nearly the same. Feeling angry is feeling cross, and 'mad' can mean cross too." },
    { q: "Which word means the same as 'kind'?", a: "nice", choices: ["nice", "mean", "rude"], explain: "A synonym is a word that means the same thing. A kind person is friendly and caring, and so is a nice person." },
    { q: "Which word means the same as 'scared'?", a: "afraid", choices: ["afraid", "brave", "calm"], explain: "A synonym means almost the same. Feeling scared is feeling frightened, and 'afraid' means frightened too." },
    { q: "Which word means the same as 'shut'?", a: "close", choices: ["close", "open", "push"], explain: "A synonym is a word with the same meaning. To shut a door and to close it both mean the same action." },
    { q: "Which word means the same as 'correct'?", a: "right", choices: ["right", "wrong", "left"], explain: "A synonym means the same thing. If an answer is correct it has no mistakes, and 'right' also means with no mistakes." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3eVc2() {
  return shuffle([
    { q: "What is the opposite of 'hot'?", a: "cold", choices: ["cold", "warm", "cool"], explain: "An antonym is a word that means the opposite. The opposite of hot is cold, because cold has no heat at all." },
    { q: "What is the opposite of 'big'?", a: "small", choices: ["small", "tall", "wide"], explain: "An antonym means the opposite. The opposite of big is small, because small takes up very little space." },
    { q: "What is the opposite of 'happy'?", a: "sad", choices: ["sad", "glad", "mad"], explain: "An antonym is a word that means the opposite. The opposite of happy is sad, the unhappy feeling. Watch out: glad is a synonym, not the opposite." },
    { q: "What is the opposite of 'fast'?", a: "slow", choices: ["slow", "quick", "rush"], explain: "An antonym means the opposite. The opposite of fast is slow, because slow means moving at a low speed." },
    { q: "What is the opposite of 'light'?", a: "dark", choices: ["dark", "bright", "dim"], explain: "An antonym is a word that means the opposite. The opposite of light is dark, because dark means having no light." },
    { q: "What is the opposite of 'hard'?", a: "soft", choices: ["soft", "tough", "rough"], explain: "An antonym means the opposite. The opposite of hard is soft, because soft things squash easily and hard things do not." },
    { q: "What is the opposite of 'open'?", a: "close", choices: ["close", "push", "pull"], explain: "An antonym is a word that means the opposite. The opposite of open is close, because closing shuts something up." },
    { q: "What is the opposite of 'old'?", a: "young", choices: ["young", "aged", "elderly"], explain: "An antonym is a word that means the opposite, so the opposite of old is young. Aged and elderly mean the same as old, not the opposite." },
    { q: "What is the opposite of 'tall'?", a: "short", choices: ["short", "long", "thin"], explain: "An antonym means the opposite. The opposite of tall is short, because short means not high up." },
    { q: "What is the opposite of 'loud'?", a: "quiet", choices: ["quiet", "noisy", "deafening"], explain: "An antonym is a word that means the opposite. The opposite of loud is quiet, because quiet means making little sound." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3eVc3() {
  return shuffle([
    { q: "She is good __ playing the piano.", a: "at", choices: ["at", "in", "on"], explain: "Some words always pair with a fixed preposition. We say good 'at' doing something, so 'at' is the right partner for good." },
    { q: "I listen __ music every day.", a: "to", choices: ["to", "at", "for"], explain: "Some verbs always take a set preposition. The verb listen is always followed by 'to', so we say listen to music." },
    { q: "The train arrives __ 3 o'clock.", a: "at", choices: ["at", "on", "in"], explain: "We use 'at' for a clock time. Because 3 o'clock is an exact time, the right preposition is at." },
    { q: "We go to school __ Monday.", a: "on", choices: ["on", "at", "in"], explain: "We use 'on' for days of the week. Monday is a day, so the matching preposition is on." },
    { q: "She was born __ January.", a: "in", choices: ["in", "on", "at"], explain: "We use 'in' for months and years. January is a month, so the right preposition is in." },
    { q: "He is afraid __ spiders.", a: "of", choices: ["of", "at", "for"], explain: "Some words always pair with a fixed preposition. We always say afraid 'of' something, so 'of' is correct." },
    { q: "We play outside __ the afternoon.", a: "in", choices: ["in", "on", "at"], explain: "We use 'in' for parts of the day like the morning or afternoon, so the answer is in the afternoon." },
    { q: "The shop closes __ night.", a: "at", choices: ["at", "in", "on"], explain: "'Night' is a special case that uses 'at', unlike the morning or afternoon. So we say at night." },
    { q: "She is waiting __ the bus.", a: "for", choices: ["for", "to", "at"], explain: "The verb wait pairs with a set preposition. We say wait 'for' something or someone, so the answer is for." },
    { q: "He is interested __ reading.", a: "in", choices: ["in", "at", "for"], explain: "Some words always take a fixed preposition. We always say interested 'in' something, so 'in' is the right one." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3eVc4() {
  return shuffle([
    { q: "Where is the cat? [SCENE:cat-on-box]", a: "on the box", choices: ["on the box", "under the box", "in the box"], explain: "A position word shows where something is. 'On' means resting on top of a surface, so the cat is on the box." },
    { q: "Where is the cat? [SCENE:cat-under-table]", a: "under the table", choices: ["under the table", "on the table", "behind the table"], explain: "A position word shows where something is. 'Under' means below something, so the cat is under the table." },
    { q: "Where is the cat? [SCENE:cat-in-box]", a: "in the box", choices: ["in the box", "on the box", "behind the box"], explain: "A position word shows where something is. 'In' means inside, with sides around it, so the cat is in the box." },
    { q: "Where is the cat? [SCENE:cat-behind-tree]", a: "behind the tree", choices: ["behind the tree", "in front of the tree", "on the tree"], explain: "A position word shows where something is. 'Behind' means at the back of something, so the cat is behind the tree." },
    { q: "Where is the cat? [SCENE:cat-in-front-of-house]", a: "in front of the house", choices: ["in front of the house", "behind the house", "in the house"], explain: "A position word shows where something is. 'In front of' means before something, so the cat is in front of the house." },
    { q: "Where is the cat? [SCENE:cat-next-to-dog]", a: "next to the dog", choices: ["next to the dog", "behind the dog", "above the dog"], explain: "A position word shows where something is. 'Next to' means right beside something, so the cat is next to the dog." },
    { q: "Where is the cat? [SCENE:cat-between-boxes]", a: "between the boxes", choices: ["between the boxes", "on the boxes", "behind the boxes"], explain: "A position word shows where something is. 'Between' means in the middle of two things, so the cat is between the boxes." },
    { q: "Where is the bird? [SCENE:bird-above-tree]", a: "above the tree", choices: ["above the tree", "under the tree", "next to the tree"], explain: "A position word shows where something is. 'Above' means higher up over something, so the bird is above the tree." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

const VOCABULARY2_BUILDERS = {
  "p3e-vc1": buildP3eVc1,
  "p3e-vc2": buildP3eVc2,
  "p3e-vc3": buildP3eVc3,
  "p3e-vc4": buildP3eVc4,
};

export const P3_VOCABULARY2_QUESTION_COUNTS = {
  "p3e-vc1": 10, "p3e-vc2": 10, "p3e-vc3": 10, "p3e-vc4": 8,
};

export function buildVocabulary2Questions(moduleId) {
  const builder = VOCABULARY2_BUILDERS[moduleId];
  return builder ? builder() : [];
}
