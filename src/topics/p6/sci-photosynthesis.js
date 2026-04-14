import { shuffle } from "../../utils/helpers";

export const P6_PHOTOSYNTHESIS_INTRO = {
  "p6s-ph1": {
    title: "Photosynthesis",
    pages: [
      { text: "Plants are producers — they make their own food through photosynthesis!", emoji: "🌿 ☀️ 🍽️" },
      { text: "Photosynthesis uses water, carbon dioxide, and sunlight to produce glucose (food) and oxygen.", emoji: "💧 + CO₂ + ☀️ = 🍬 + O₂" },
    ],
  },
};

function buildP6sPh1() {
  return shuffle([
    { q: "What is photosynthesis?", a: "The process by which plants make food using sunlight", choices: ["The process by which plants make food using sunlight", "The process of breathing", "How animals find food"] },
    { q: "What three things do plants need for photosynthesis?", a: "Water, carbon dioxide, and sunlight", choices: ["Water, carbon dioxide, and sunlight", "Soil, oxygen, and heat", "Minerals, nitrogen, and wind"] },
    { q: "What does photosynthesis produce?", a: "Glucose (food) and oxygen", choices: ["Glucose (food) and oxygen", "Carbon dioxide and water", "Minerals and soil"] },
    { q: "Where does photosynthesis mainly occur?", a: "In the leaves", choices: ["In the leaves", "In the roots", "In the stem"] },
    { q: "The green pigment in leaves that captures sunlight is?", a: "Chlorophyll", choices: ["Chlorophyll", "Oxygen", "Glucose"] },
    { q: "Plants are called producers because?", a: "They make their own food", choices: ["They make their own food", "They eat other plants", "They produce carbon dioxide"] },
    { q: "The oxygen released during photosynthesis?", a: "Is used by animals for breathing", choices: ["Is used by animals for breathing", "Is poisonous", "Goes into the soil"] },
    { q: "Without sunlight, can a plant carry out photosynthesis?", a: "No", choices: ["No", "Yes, it uses moonlight", "Yes, it uses soil instead"] },
    { q: "A plant kept in a dark room for weeks will?", a: "Weaken and eventually die because it cannot make food", choices: ["Weaken and eventually die because it cannot make food", "Grow faster", "Turn into a mushroom"] },
    { q: "Carbon dioxide enters the leaf through?", a: "Tiny openings on the leaf surface", choices: ["Tiny openings on the leaf surface", "The roots", "The stem"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6s-ph1": buildP6sPh1 };
export const P6_PHOTOSYNTHESIS_QUESTION_COUNTS = { "p6s-ph1": 10 };
export function buildPhotosynthesisQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
