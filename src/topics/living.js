function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ INTRO CONTENT ============

export const LIVING_INTRO = {
  "lv-1": {
    title: "What Makes Something Living?",
    pages: [
      { text: "Living things are special! They can do things that non-living things cannot.", emoji: "🌱 🐶 👧" },
      { text: "Living things GROW. A tiny seed grows into a big tree!", emoji: "🌱 → 🌳" },
      { text: "Living things need FOOD and WATER to stay alive.", emoji: "🍎 💧" },
      { text: "Living things can MOVE. Animals walk, swim, or fly!", emoji: "🐕 🐟 🦅" },
      { text: "Living things BREATHE. They need air just like you!", emoji: "🌬️ 💨" },
      { text: "Let's find out what is living and what is not! Koko will help you!", emoji: "🦊 🔍 = 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildLv1() {
  return shuffle([
    { q: "Do living things grow?", a: "Yes", choices: ["Yes", "No", "Sometimes"] },
    { q: "Do living things need food?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Can living things move?", a: "Yes", choices: ["Yes", "No", "Never"] },
    { q: "Do living things breathe?", a: "Yes", choices: ["Yes", "No", "Sometimes"] },
    { q: "Does a rock grow?", a: "No", choices: ["Yes", "No", "Maybe"] },
    { q: "Which one is a living thing?", a: "Cat", choices: ["Cat", "Chair", "Stone"] },
    { q: "What do living things need to survive?", a: "Food", choices: ["Food", "Toys", "Books"] },
    { q: "Which can breathe?", a: "Dog", choices: ["Dog", "Table", "Spoon"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildLv2() {
  return shuffle([
    { q: "Is a dog living?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a rock living?", a: "No", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a flower living?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a car living?", a: "No", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a fish living?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a pencil living?", a: "No", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a tree living?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a toy living?", a: "No", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a bird living?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Is a shoe living?", a: "No", choices: ["Yes", "No", "Maybe"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildLv3() {
  return shuffle([
    { q: "What do living things need to drink?", a: "Water", choices: ["Water", "Paint", "Glue"] },
    { q: "What do living things breathe?", a: "Air", choices: ["Air", "Smoke", "Sand"] },
    { q: "Plants need ___ to make food.", a: "Sunlight", choices: ["Sunlight", "Darkness", "Ice"] },
    { q: "What do animals eat to get energy?", a: "Food", choices: ["Food", "Rocks", "Paper"] },
    { q: "Can a plant live without water?", a: "No", choices: ["Yes", "No", "Maybe"] },
    { q: "Do fish need water to live?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Which do all living things need?", a: "Air", choices: ["Toys", "Air", "TV"] },
    { q: "What happens to a plant without sunlight?", a: "It dies", choices: ["It dies", "It grows", "It sings"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "lv-1": buildLv1, "lv-2": buildLv2, "lv-3": buildLv3,
};

export const LIVING_QUESTION_COUNTS = {
  "lv-1": 8, "lv-2": 10, "lv-3": 8,
};

export function buildLivingQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
