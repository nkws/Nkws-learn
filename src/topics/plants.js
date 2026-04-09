function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ INTRO CONTENT ============

export const PLANTS_INTRO = {
  "pl-1": {
    title: "Parts of a Plant",
    pages: [
      { text: "Plants have different parts, and each part has a job!", emoji: "🌱 🌿 🌸" },
      { text: "ROOTS grow underground. They drink up water from the soil.", emoji: "🌱⬇️💧" },
      { text: "The STEM holds the plant up and carries water to the leaves.", emoji: "🌿⬆️" },
      { text: "LEAVES catch sunlight to make food for the plant!", emoji: "🍃 ☀️ → 🍽️" },
      { text: "FLOWERS are colorful and make seeds. FRUIT holds the seeds inside!", emoji: "🌸 → 🍎" },
      { text: "Let's learn about plant parts! Koko is ready to quiz you!", emoji: "🦊 🌱 = 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildPl1() {
  return shuffle([
    { q: "Which part of a plant is underground?", a: "Roots", choices: ["Roots", "Stem", "Leaves"] },
    { q: "Which part holds the plant up?", a: "Stem", choices: ["Roots", "Stem", "Flower"] },
    { q: "Which part catches sunlight to make food?", a: "Leaves", choices: ["Roots", "Stem", "Leaves"] },
    { q: "Which part is colorful and makes seeds?", a: "Flower", choices: ["Roots", "Flower", "Stem"] },
    { q: "Which part holds seeds inside?", a: "Fruit", choices: ["Fruit", "Stem", "Roots"] },
    { q: "What do roots drink from the soil?", a: "Water", choices: ["Water", "Milk", "Juice"] },
    { q: "Where do roots grow?", a: "Underground", choices: ["In the sky", "Underground", "On top"] },
    { q: "An apple is which part of a plant?", a: "Fruit", choices: ["Flower", "Leaf", "Fruit"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPl2() {
  return shuffle([
    { q: "What do plants need from the sky?", a: "Sunlight", choices: ["Sunlight", "Candy", "Toys"] },
    { q: "What do plants drink?", a: "Water", choices: ["Water", "Soda", "Milk"] },
    { q: "Do plants need air?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Where do plant roots get water from?", a: "Soil", choices: ["Soil", "Sky", "River"] },
    { q: "Can a plant grow without sunlight?", a: "No", choices: ["Yes", "No", "Maybe"] },
    { q: "Can a plant grow without water?", a: "No", choices: ["Yes", "No", "Maybe"] },
    { q: "What gives plants energy to make food?", a: "Sunlight", choices: ["Darkness", "Sunlight", "Wind"] },
    { q: "Plants grow best in good ___.", a: "Soil", choices: ["Soil", "Sand", "Ice"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPl3() {
  return shuffle([
    { q: "What does a plant start as?", a: "Seed", choices: ["Seed", "Flower", "Fruit"] },
    { q: "What grows out of a seed first?", a: "Sprout", choices: ["Flower", "Fruit", "Sprout"] },
    { q: "What comes after the sprout stage?", a: "Plant", choices: ["Seed", "Plant", "Flower"] },
    { q: "What appears on a grown plant?", a: "Flower", choices: ["Seed", "Sprout", "Flower"] },
    { q: "Put in order: seed, flower, sprout. What comes first?", a: "Seed", choices: ["Seed", "Flower", "Sprout"] },
    { q: "Put in order: seed, flower, sprout. What comes last?", a: "Flower", choices: ["Seed", "Sprout", "Flower"] },
    { q: "A seed needs water to start ___.", a: "Growing", choices: ["Sleeping", "Growing", "Flying"] },
    { q: "What do flowers turn into?", a: "Fruit", choices: ["Roots", "Stems", "Fruit"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "pl-1": buildPl1, "pl-2": buildPl2, "pl-3": buildPl3,
};

export const PLANTS_QUESTION_COUNTS = {
  "pl-1": 8, "pl-2": 8, "pl-3": 8,
};

export function buildPlantsQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
