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
    { q: "What is the main function of roots?", a: "Absorb water and minerals from the soil", choices: ["Absorb water and minerals from the soil", "Make food for the plant", "Produce seeds"], explain: "Roots reach into the soil to soak up the water and minerals the plant needs. Making food is the leaves' job, not the roots'." },
    { q: "Roots also help to?", a: "Anchor the plant in the ground", choices: ["Anchor the plant in the ground", "Attract bees", "Produce oxygen"], explain: "As well as absorbing water, roots grip the soil to hold the plant firmly in place, so it does not topple over in wind or rain." },
    { q: "What does the stem do?", a: "Transports water and food, and supports the plant", choices: ["Transports water and food, and supports the plant", "Makes food using sunlight", "Absorbs water from soil"], explain: "The stem is like the plant's highway: it carries water up from the roots and food from the leaves, while also holding the plant upright." },
    { q: "Where does photosynthesis mainly take place?", a: "Leaves", choices: ["Leaves", "Roots", "Flowers"], explain: "Leaves are the plant's food factories. They are spread out to catch sunlight, which they use to make food in a process called photosynthesis." },
    { q: "For photosynthesis, leaves need sunlight, water, and?", a: "Carbon dioxide", choices: ["Carbon dioxide", "Soil", "Oxygen"], explain: "To make food, leaves combine sunlight, water from the roots, and carbon dioxide gas from the air. Oxygen is what the plant gives out, not what it takes in." },
    { q: "What is the function of flowers?", a: "Reproduction — producing seeds", choices: ["Reproduction — producing seeds", "Absorbing water", "Making food"], explain: "Flowers are the plant's way of making new plants. They produce seeds, which can grow into the next generation of plants." },
    { q: "What happens if all the leaves of a plant are removed?", a: "The plant cannot make food and will die", choices: ["The plant cannot make food and will die", "The plant will grow faster", "Nothing happens"], explain: "Leaves make the plant's food using sunlight. Without any leaves, the plant cannot make food, so it runs out of energy and dies." },
    { q: "What happens if the roots of a plant are damaged?", a: "The plant cannot absorb water and minerals", choices: ["The plant cannot absorb water and minerals", "The plant makes more food", "The flowers grow bigger"], explain: "Roots take in water and minerals from the soil. If they are damaged, the plant cannot get what it needs and will struggle to survive." },
    { q: "Water travels from the roots to the leaves through the?", a: "Stem", choices: ["Stem", "Flowers", "Soil"], explain: "Water is absorbed by the roots and must reach the leaves. The stem carries it upward like a pipe connecting the roots to the leaves." },
    { q: "Plants need water, light, air, and?", a: "Minerals", choices: ["Minerals", "Meat", "Sugar"], explain: "To grow well, plants need water, light, and air, plus minerals from the soil. They make their own food, so they do not eat meat or sugar." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
