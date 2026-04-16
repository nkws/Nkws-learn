import { shuffle } from "../utils/helpers";
// ============ INTRO CONTENT ============

export const BODY_INTRO = {
  "bd-2": {
    title: "The 5 Senses",
    pages: [
      { text: "We have 5 senses that help us understand the world around us!", emoji: "👀 👂 👃 👅 ✋" },
      { text: "We use our EYES to SEE things. Seeing is our sense of sight!", emoji: "👀 🌈" },
      { text: "We use our EARS to HEAR sounds. Hearing is our sense of sound!", emoji: "👂 🎵" },
      { text: "We use our NOSE to SMELL things. Smelling is our sense of smell!", emoji: "👃 🌹" },
      { text: "We use our TONGUE to TASTE food. Tasting is our sense of taste!", emoji: "👅 🍭" },
      { text: "We use our HANDS to TOUCH and feel things. Touching is our sense of touch!", emoji: "✋ 🧸" },
      { text: "Let's test your knowledge of the 5 senses! Koko is excited!", emoji: "🦊 🧠 = 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildBd1() {
  return shuffle([
    { q: "What do we use to see?", a: "Eyes", choices: ["Eyes", "Ears", "Nose"] },
    { q: "What do we use to hear?", a: "Ears", choices: ["Eyes", "Ears", "Hands"] },
    { q: "What do we use to walk?", a: "Legs", choices: ["Arms", "Legs", "Head"] },
    { q: "What do we use to hold things?", a: "Hands", choices: ["Feet", "Hands", "Ears"] },
    { q: "What body part helps us think?", a: "Brain", choices: ["Brain", "Stomach", "Knee"] },
    { q: "What body part pumps blood?", a: "Heart", choices: ["Heart", "Lungs", "Brain"] },
    { q: "What do we use to smell?", a: "Nose", choices: ["Ears", "Nose", "Mouth"] },
    { q: "What do we use to chew food?", a: "Teeth", choices: ["Teeth", "Eyes", "Fingers"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildBd2() {
  return shuffle([
    { q: "Which sense do you use to see a rainbow?", a: "Sight", choices: ["Sight", "Smell", "Touch"] },
    { q: "Which sense do you use to hear music?", a: "Hearing", choices: ["Hearing", "Taste", "Sight"] },
    { q: "Which sense do you use to smell a flower?", a: "Smell", choices: ["Touch", "Smell", "Hearing"] },
    { q: "Which sense do you use to taste ice cream?", a: "Taste", choices: ["Taste", "Sight", "Smell"] },
    { q: "Which sense do you use to feel something soft?", a: "Touch", choices: ["Touch", "Taste", "Hearing"] },
    { q: "Which body part is for the sense of sight?", a: "Eyes", choices: ["Eyes", "Ears", "Nose"] },
    { q: "Which body part is for the sense of hearing?", a: "Ears", choices: ["Tongue", "Ears", "Hands"] },
    { q: "Which body part is for the sense of taste?", a: "Tongue", choices: ["Nose", "Eyes", "Tongue"] },
    { q: "Which body part is for the sense of touch?", a: "Hands", choices: ["Hands", "Ears", "Tongue"] },
    { q: "Which body part is for the sense of smell?", a: "Nose", choices: ["Eyes", "Nose", "Tongue"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildBd3() {
  return shuffle([
    { q: "What should you do every day to stay healthy?", a: "Exercise", choices: ["Exercise", "Watch TV", "Eat candy"] },
    { q: "How many hours of sleep do kids need?", a: "About 10 hours", choices: ["About 10 hours", "About 2 hours", "About 20 hours"] },
    { q: "What kind of food keeps you healthy?", a: "Vegetables", choices: ["Candy", "Vegetables", "Chips"] },
    { q: "When should you brush your teeth?", a: "Morning and night", choices: ["Morning and night", "Never", "Once a year"] },
    { q: "When should you wash your hands?", a: "Before eating", choices: ["Before eating", "Never", "Once a week"] },
    { q: "Is drinking water good for you?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "What helps your body grow strong?", a: "Healthy food", choices: ["Healthy food", "Candy", "Soda"] },
    { q: "What should you do after playing outside?", a: "Wash hands", choices: ["Wash hands", "Eat dirt", "Skip bath"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "bd-1": buildBd1, "bd-2": buildBd2, "bd-3": buildBd3,
};

export const BODY_QUESTION_COUNTS = {
  "bd-1": 8, "bd-2": 10, "bd-3": 8,
};

export function buildBodyQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
