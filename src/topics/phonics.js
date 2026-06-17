import { shuffle } from "../utils/helpers";
// ============ INTRO CONTENT ============

export const PHONICS_INTRO = {
  "ph-1": {
    title: "Letter Sounds",
    pages: [
      {
        text: "Every letter makes a special sound!",
        emoji: "🔤 🔊",
      },
      {
        text: "The letter A says 'ah' like in apple!",
        emoji: "🍎 A = ah",
      },
      {
        text: "The letter B says 'buh' like in ball!",
        emoji: "⚽ B = buh",
      },
      {
        text: "When you know letter sounds, you can read new words!",
        emoji: "🔤 ➡️ 📖",
      },
      {
        text: "Let's learn the sounds of the alphabet!",
        emoji: "🦊 🔊 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildPh1() {
  return shuffle([
    { q: "What sound does A make?", a: "ah", choices: ["ah", "ee", "oh"], explain: "Each letter has its own sound. Open your mouth wide and say 'ah', like the start of apple. That soft 'ah' is the sound A makes." },
    { q: "What sound does B make?", a: "buh", choices: ["buh", "duh", "puh"], explain: "Press your lips together, then pop them open to say 'buh', like the start of ball and bat. That popping sound is B." },
    { q: "What sound does C make?", a: "kuh", choices: ["kuh", "suh", "guh"], explain: "Listen to the start of cat and cup. C makes a hard 'kuh' sound at the back of your mouth, just like K does." },
    { q: "What sound does D make?", a: "duh", choices: ["duh", "buh", "tuh"], explain: "Put your tongue behind your top teeth and say 'duh', like the start of dog and door. That tapping sound is D." },
    { q: "What sound does E make?", a: "eh", choices: ["eh", "ah", "uh"], explain: "Listen to the start of egg and elephant. E makes a short 'eh' sound, with your mouth a little bit open." },
    { q: "What sound does F make?", a: "fuh", choices: ["fuh", "vuh", "puh"], explain: "Rest your top teeth on your bottom lip and blow softly to say 'fuh', like the start of fish and fan. That is F." },
    { q: "What sound does G make?", a: "guh", choices: ["guh", "kuh", "juh"], explain: "Listen to the start of goat and gate. G makes a hard 'guh' sound at the back of your mouth." },
    { q: "What sound does H make?", a: "huh", choices: ["huh", "ah", "kuh"], explain: "Breathe out gently to make 'huh', like the start of hat and hop. H is a quiet, breathy sound." },
    { q: "What sound does I make?", a: "ih", choices: ["ih", "eh", "ah"], explain: "Listen to the start of igloo and insect. I makes a short 'ih' sound with your mouth only a little open." },
    { q: "What sound does M make?", a: "muh", choices: ["muh", "nuh", "buh"], explain: "Close your lips and hum to make 'mmm', like the start of map and moon. That humming sound is M." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildPh2() {
  return shuffle([
    { q: "What sound does N make?", a: "nuh", choices: ["nuh", "muh", "luh"], explain: "Put your tongue behind your top teeth and hum 'nnn', like the start of net and nose. That is the N sound." },
    { q: "What sound does O make?", a: "oh", choices: ["oh", "ah", "uh"], explain: "Make your mouth round like an O and say 'oh', like the start of octopus and orange. That round sound is O." },
    { q: "What sound does P make?", a: "puh", choices: ["puh", "buh", "duh"], explain: "Press your lips together and pop them open with a puff of air to say 'puh', like the start of pig and pan." },
    { q: "What sound does R make?", a: "ruh", choices: ["ruh", "luh", "wuh"], explain: "Listen to the start of red and rabbit. R makes a 'ruh' sound with your tongue pulled back a little." },
    { q: "What sound does S make?", a: "sss", choices: ["sss", "zzz", "fff"], explain: "Make a hissing sound like a snake to say 'sss', like the start of sun and sock. That hiss is S." },
    { q: "What sound does T make?", a: "tuh", choices: ["tuh", "duh", "kuh"], explain: "Tap your tongue behind your top teeth to say 'tuh', like the start of top and tap. That sharp tap is T." },
    { q: "What sound does U make?", a: "uh", choices: ["uh", "ah", "oh"], explain: "Listen to the start of umbrella and up. U makes a short 'uh' sound with your mouth a little open." },
    { q: "What sound does W make?", a: "wuh", choices: ["wuh", "ruh", "yuh"], explain: "Round your lips and say 'wuh', like the start of water and wind. That is the W sound." },
    { q: "What sound does Y make?", a: "yuh", choices: ["yuh", "wuh", "juh"], explain: "Listen to the start of yes and yellow. Y makes a 'yuh' sound with the middle of your tongue raised." },
    { q: "What sound does Z make?", a: "zzz", choices: ["zzz", "sss", "fff"], explain: "Make a buzzing sound like a bee to say 'zzz', like the start of zip and zoo. That buzz is Z." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildPh3() {
  return shuffle([
    { q: "Cat starts with which letter?", a: "C", choices: ["C", "K", "S"], explain: "Say cat slowly and listen to the very first sound: 'kuh'. The letter that makes that sound here is c." },
    { q: "Dog starts with which letter?", a: "D", choices: ["D", "B", "G"], explain: "Say dog slowly and listen to the first sound: 'duh'. The letter that makes that sound is d." },
    { q: "Fish starts with which letter?", a: "F", choices: ["F", "V", "P"], explain: "Say fish slowly and listen to the first sound: 'fuh'. The letter that makes that sound is f." },
    { q: "Ball starts with which letter?", a: "B", choices: ["B", "D", "P"], explain: "Say ball slowly and listen to the first sound: 'buh'. The letter that makes that popping sound is b." },
    { q: "Sun starts with which letter?", a: "S", choices: ["S", "Z", "C"], explain: "Say sun slowly and listen to the first sound: the hiss 'sss'. The letter that makes that sound is s." },
    { q: "Tree starts with which letter?", a: "T", choices: ["T", "D", "P"], explain: "Say tree slowly and listen to the first sound: 'tuh'. The letter that makes that tapping sound is t." },
    { q: "Moon starts with which letter?", a: "M", choices: ["M", "N", "W"], explain: "Say moon slowly and listen to the first sound: the hum 'mmm'. The letter that makes that sound is m." },
    { q: "Hand starts with which letter?", a: "H", choices: ["H", "A", "N"], explain: "Say hand slowly and listen to the first sound: the breathy 'huh'. The letter that makes that sound is h." },
    { q: "Ring starts with which letter?", a: "R", choices: ["R", "L", "W"], explain: "Say ring slowly and listen to the first sound: 'ruh'. The letter that makes that sound is r." },
    { q: "Jump starts with which letter?", a: "J", choices: ["J", "G", "Y"], explain: "Say jump slowly and listen to the first sound: 'juh'. The letter that makes that sound is j." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildPh4() {
  return shuffle([
    { q: "Cat ends with which letter?", a: "T", choices: ["T", "K", "P"], explain: "Say cat slowly and listen to the very last sound: 'tuh'. The letter that makes the ending sound is t." },
    { q: "Dog ends with which letter?", a: "G", choices: ["G", "D", "K"], explain: "Say dog slowly and listen to the last sound: 'guh'. The letter that makes the ending sound is g." },
    { q: "Bus ends with which letter?", a: "S", choices: ["S", "Z", "X"], explain: "Say bus slowly and listen to the last sound: the hiss 'sss'. The letter that makes the ending sound is s." },
    { q: "Sun ends with which letter?", a: "N", choices: ["N", "M", "D"], explain: "Say sun slowly and listen to the last sound: 'nnn'. The letter that makes the ending sound is n." },
    { q: "Bed ends with which letter?", a: "D", choices: ["D", "B", "T"], explain: "Say bed slowly and listen to the last sound: 'duh'. The letter that makes the ending sound is d." },
    { q: "Cup ends with which letter?", a: "P", choices: ["P", "B", "T"], explain: "Say cup slowly and listen to the last sound: 'puh'. The letter that makes the ending sound is p." },
    { q: "Red ends with which letter?", a: "D", choices: ["D", "T", "B"], explain: "Say red slowly and listen to the last sound: 'duh'. The letter that makes the ending sound is d." },
    { q: "Pig ends with which letter?", a: "G", choices: ["G", "K", "D"], explain: "Say pig slowly and listen to the last sound: 'guh'. The letter that makes the ending sound is g." },
    { q: "Net ends with which letter?", a: "T", choices: ["T", "D", "N"], explain: "Say net slowly and listen to the last sound: 'tuh'. The letter that makes the ending sound is t." },
    { q: "Jam ends with which letter?", a: "M", choices: ["M", "N", "B"], explain: "Say jam slowly and listen to the last sound: the hum 'mmm'. The letter that makes the ending sound is m." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildPh5() {
  return shuffle([
    { q: "Which word rhymes with cat?", a: "hat", choices: ["hat", "dog", "cup"], explain: "Words rhyme when they end with the same sound. Cat ends in '-at', and hat also ends in '-at', so they rhyme." },
    { q: "Which word rhymes with ball?", a: "tall", choices: ["tall", "run", "bed"], explain: "Rhyming words end with the same sound. Ball ends in '-all', and tall also ends in '-all', so they rhyme." },
    { q: "Which word rhymes with cake?", a: "lake", choices: ["lake", "fish", "tree"], explain: "Rhyming words end with the same sound. Cake ends in '-ake', and lake also ends in '-ake', so they rhyme." },
    { q: "Which word rhymes with sun?", a: "fun", choices: ["fun", "cat", "bed"], explain: "Rhyming words end with the same sound. Sun ends in '-un', and fun also ends in '-un', so they rhyme." },
    { q: "Which word rhymes with bed?", a: "red", choices: ["red", "big", "cup"], explain: "Rhyming words end with the same sound. Bed ends in '-ed', and red also ends in '-ed', so they rhyme." },
    { q: "Which word rhymes with ring?", a: "sing", choices: ["sing", "run", "hat"], explain: "Rhyming words end with the same sound. Ring ends in '-ing', and sing also ends in '-ing', so they rhyme." },
    { q: "Which word rhymes with top?", a: "hop", choices: ["hop", "sit", "red"], explain: "Rhyming words end with the same sound. Top ends in '-op', and hop also ends in '-op', so they rhyme." },
    { q: "Which word rhymes with bug?", a: "hug", choices: ["hug", "pen", "box"], explain: "Rhyming words end with the same sound. Bug ends in '-ug', and hug also ends in '-ug', so they rhyme." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

const PHONICS_BUILDERS = {
  "ph-1": buildPh1,
  "ph-2": buildPh2,
  "ph-3": buildPh3,
  "ph-4": buildPh4,
  "ph-5": buildPh5,
};

export const PHONICS_QUESTION_COUNTS = {
  "ph-1": 10, "ph-2": 10, "ph-3": 10, "ph-4": 10, "ph-5": 8,
};

export function buildPhonicsQuestions(moduleId) {
  const builder = PHONICS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
