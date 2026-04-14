import { shuffle } from "../../utils/helpers";

export const P4_PLANTS_INTRO = {
  "p4s-pl1": {
    title: "Plant Parts and Functions",
    pages: [
      {
        text: "Every part of a plant has an important job. Roots, stems, leaves, and flowers all work together to keep the plant alive!",
        emoji: "🌱 🌿 🌸",
      },
      {
        text: "Roots absorb water and minerals from the soil and anchor the plant. Stems transport water and food, and support the plant.",
        emoji: "🌳 💧 ⬆️",
      },
      {
        text: "Leaves use sunlight to make food through photosynthesis. Flowers are for reproduction — making seeds and fruits!",
        emoji: "🍃 ☀️ 🌺",
      },
    ],
  },
};

// Module 1: Plant Parts and Functions
function buildP4sPl1() {
  return shuffle([
    { q: "What is the main function of roots?", a: "Absorb water and minerals from the soil", choices: ["Absorb water and minerals from the soil", "Make food for the plant", "Produce seeds"] },
    { q: "Roots also help to?", a: "Anchor the plant in the ground", choices: ["Anchor the plant in the ground", "Attract bees", "Produce oxygen"] },
    { q: "What does the stem do?", a: "Transports water and food, and supports the plant", choices: ["Transports water and food, and supports the plant", "Makes food using sunlight", "Absorbs water from soil"] },
    { q: "Where does photosynthesis mainly take place?", a: "Leaves", choices: ["Leaves", "Roots", "Flowers"] },
    { q: "For photosynthesis, leaves need sunlight, water, and?", a: "Carbon dioxide", choices: ["Carbon dioxide", "Soil", "Oxygen"] },
    { q: "What is the function of flowers?", a: "Reproduction — producing seeds", choices: ["Reproduction — producing seeds", "Absorbing water", "Making food"] },
    { q: "What happens if all the leaves of a plant are removed?", a: "The plant cannot make food and will die", choices: ["The plant cannot make food and will die", "The plant will grow faster", "Nothing happens"] },
    { q: "What happens if the roots of a plant are damaged?", a: "The plant cannot absorb water and minerals", choices: ["The plant cannot absorb water and minerals", "The plant makes more food", "The flowers grow bigger"] },
    { q: "Water travels from the roots to the leaves through the?", a: "Stem", choices: ["Stem", "Flowers", "Soil"] },
    { q: "Plants need water, light, air, and?", a: "Minerals", choices: ["Minerals", "Meat", "Sugar"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const PLANTS_BUILDERS = {
  "p4s-pl1": buildP4sPl1,
};

export const P4_PLANTS_QUESTION_COUNTS = {
  "p4s-pl1": 10,
};

export function buildP4PlantsQuestions(moduleId) {
  const builder = PLANTS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
