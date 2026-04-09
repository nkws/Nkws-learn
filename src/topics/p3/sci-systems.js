function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ INTRO CONTENT ============

export const P3_SYSTEMS_INTRO = {
  "p3s-sy1": {
    title: "Plant Systems",
    pages: [
      {
        text: "Plants have different parts that work together like a system!",
        emoji: "🌱 🌿 🌳",
      },
      {
        text: "Roots absorb water and minerals from the soil. They also hold the plant in place!",
        emoji: "🌱 💧 🪨",
      },
      {
        text: "The stem carries water from the roots to the leaves. It holds the plant up!",
        emoji: "🌿 ⬆️ 💧",
      },
      {
        text: "Leaves use sunlight, water and carbon dioxide to make food. This is called photosynthesis!",
        emoji: "🍃 ☀️ 🍽️",
      },
      {
        text: "Flowers help the plant reproduce by making seeds. Let's learn more about plant systems!",
        emoji: "🌸 🌰 🧠",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildP3sSy1() {
  return shuffle([
    { q: "Roots absorb?", a: "Water and minerals", choices: ["Water and minerals", "Sunlight", "Carbon dioxide"] },
    { q: "Which part of the plant carries water from roots to leaves?", a: "Stem", choices: ["Stem", "Flower", "Fruit"] },
    { q: "Leaves use sunlight to make food. This process is called?", a: "Photosynthesis", choices: ["Photosynthesis", "Respiration", "Digestion"] },
    { q: "Which part of the plant makes seeds?", a: "Flower", choices: ["Flower", "Root", "Leaf"] },
    { q: "What do roots also do besides absorbing water?", a: "Hold the plant in the soil", choices: ["Hold the plant in the soil", "Make food", "Attract insects"] },
    { q: "Which gas do leaves take in from the air?", a: "Carbon dioxide", choices: ["Carbon dioxide", "Oxygen", "Nitrogen"] },
    { q: "Plants need sunlight, water and __ to make food.", a: "Carbon dioxide", choices: ["Carbon dioxide", "Soil", "Wind"] },
    { q: "What do leaves give out during photosynthesis?", a: "Oxygen", choices: ["Oxygen", "Carbon dioxide", "Water"] },
    { q: "Where does a plant store its food?", a: "In different parts like roots and stems", choices: ["In different parts like roots and stems", "Only in leaves", "Only in flowers"] },
    { q: "A fruit develops from which part of the plant?", a: "Flower", choices: ["Flower", "Root", "Stem"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3sSy2() {
  return shuffle([
    { q: "The heart pumps?", a: "Blood", choices: ["Blood", "Air", "Water"] },
    { q: "Which organ do we use to breathe?", a: "Lungs", choices: ["Lungs", "Heart", "Stomach"] },
    { q: "Food is broken down in the?", a: "Stomach", choices: ["Stomach", "Lungs", "Heart"] },
    { q: "The digestive system helps us?", a: "Break down food", choices: ["Break down food", "Breathe air", "Move our body"] },
    { q: "The respiratory system helps us?", a: "Breathe", choices: ["Breathe", "Digest food", "Pump blood"] },
    { q: "The circulatory system moves __ around the body.", a: "Blood", choices: ["Blood", "Food", "Air"] },
    { q: "Which body part is part of the digestive system?", a: "Intestines", choices: ["Intestines", "Lungs", "Brain"] },
    { q: "Blood carries __ to all parts of the body.", a: "Oxygen and nutrients", choices: ["Oxygen and nutrients", "Only water", "Only food"] },
    { q: "When we breathe in, air goes into our?", a: "Lungs", choices: ["Lungs", "Stomach", "Heart"] },
    { q: "What does the heart do?", a: "Pumps blood around the body", choices: ["Pumps blood around the body", "Digests food", "Helps us think"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3sSy3() {
  return shuffle([
    { q: "We breathe in air to get?", a: "Oxygen", choices: ["Oxygen", "Carbon dioxide", "Nitrogen"] },
    { q: "The blood carries oxygen from the lungs to the?", a: "Rest of the body", choices: ["Rest of the body", "Stomach only", "Brain only"] },
    { q: "After we digest food, nutrients enter the?", a: "Blood", choices: ["Blood", "Lungs", "Bones"] },
    { q: "Which two systems work together to get oxygen to our muscles?", a: "Respiratory and circulatory", choices: ["Respiratory and circulatory", "Digestive and respiratory", "Digestive and circulatory"] },
    { q: "Why does our heart beat faster when we exercise?", a: "To pump more blood with oxygen", choices: ["To pump more blood with oxygen", "To digest food faster", "To cool us down"] },
    { q: "We breathe faster when we run because our body needs more?", a: "Oxygen", choices: ["Oxygen", "Food", "Sleep"] },
    { q: "The digestive system breaks down food into?", a: "Nutrients the body can use", choices: ["Nutrients the body can use", "Bones and muscles", "Blood and water"] },
    { q: "What carries nutrients from digested food around the body?", a: "Blood", choices: ["Blood", "Air", "Nerves"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const SYSTEMS_BUILDERS = {
  "p3s-sy1": buildP3sSy1,
  "p3s-sy2": buildP3sSy2,
  "p3s-sy3": buildP3sSy3,
};

export const P3_SYSTEMS_QUESTION_COUNTS = {
  "p3s-sy1": 10, "p3s-sy2": 10, "p3s-sy3": 8,
};

export function buildSystemsQuestions(moduleId) {
  const builder = SYSTEMS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
