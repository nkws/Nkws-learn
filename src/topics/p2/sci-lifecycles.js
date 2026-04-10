import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P2_LIFECYCLES_INTRO = {
  "p2s-lc1": {
    title: "Life Cycle of a Plant",
    pages: [
      {
        text: "Plants have a life cycle! It starts with a tiny seed.",
        emoji: "🌱",
      },
      {
        text: "The seed grows into a sprout, then becomes a big plant!",
        emoji: "🌱 ➡️ 🌿 ➡️ 🌳",
      },
      {
        text: "The plant makes flowers, and flowers make fruits with seeds inside!",
        emoji: "🌸 ➡️ 🍎 ➡️ 🌱",
      },
      {
        text: "Then the cycle starts all over again!",
        emoji: "🔄 🌱 🌳 🌸 🍎",
      },
      {
        text: "Let's learn about life cycles of plants and animals!",
        emoji: "🦊 🔬 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildP2sLc1() {
  return shuffle([
    { q: "What does a plant life cycle start with?", a: "A seed", choices: ["A seed", "A flower", "A fruit"] },
    { q: "What grows from a seed?", a: "A sprout", choices: ["A sprout", "A flower", "A fruit"] },
    { q: "What comes after the sprout stage?", a: "A plant", choices: ["A plant", "A seed", "A fruit"] },
    { q: "What does a plant grow to attract bees?", a: "Flowers", choices: ["Flowers", "Roots", "Thorns"] },
    { q: "What do flowers turn into?", a: "Fruits", choices: ["Fruits", "Seeds", "Leaves"] },
    { q: "Where are new seeds found?", a: "Inside the fruit", choices: ["Inside the fruit", "On the leaves", "On the stem"] },
    { q: "What do plants need to grow?", a: "Water and sunlight", choices: ["Water and sunlight", "Only water", "Only soil"] },
    { q: "What happens after the fruit drops its seeds?", a: "New plants grow", choices: ["New plants grow", "The fruit grows bigger", "The plant dies forever"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2sLc2() {
  return shuffle([
    { q: "What is the first stage of a butterfly's life?", a: "Egg", choices: ["Egg", "Caterpillar", "Butterfly"] },
    { q: "What hatches from a butterfly egg?", a: "A caterpillar", choices: ["A caterpillar", "A butterfly", "A chrysalis"] },
    { q: "What does a caterpillar turn into?", a: "A chrysalis", choices: ["A chrysalis", "A butterfly", "An egg"] },
    { q: "What comes out of a chrysalis?", a: "A butterfly", choices: ["A butterfly", "A caterpillar", "An egg"] },
    { q: "What does a caterpillar eat a lot of?", a: "Leaves", choices: ["Leaves", "Fruit", "Flowers"] },
    { q: "What is another name for a chrysalis?", a: "Pupa", choices: ["Pupa", "Larva", "Cocoon"] },
    { q: "How many stages are in a butterfly's life cycle?", a: "Four", choices: ["Four", "Three", "Five"] },
    { q: "What does the butterfly do after coming out of the chrysalis?", a: "Flies and lays eggs", choices: ["Flies and lays eggs", "Makes a chrysalis", "Becomes a caterpillar"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2sLc3() {
  return shuffle([
    { q: "What is the first stage of a frog's life?", a: "Egg", choices: ["Egg", "Tadpole", "Frog"] },
    { q: "What hatches from a frog egg?", a: "A tadpole", choices: ["A tadpole", "A frog", "A froglet"] },
    { q: "What does a tadpole breathe with?", a: "Gills", choices: ["Gills", "Lungs", "Skin"] },
    { q: "What grows on a tadpole as it changes?", a: "Legs", choices: ["Legs", "Wings", "Fins"] },
    { q: "What is a young frog with a tail called?", a: "A froglet", choices: ["A froglet", "A tadpole", "An egg"] },
    { q: "Where do frogs lay their eggs?", a: "In water", choices: ["In water", "On trees", "Under rocks"] },
    { q: "What happens to the froglet's tail?", a: "It gets shorter and disappears", choices: ["It gets shorter and disappears", "It gets longer", "It stays the same"] },
    { q: "What does an adult frog breathe with?", a: "Lungs", choices: ["Lungs", "Gills", "Fins"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const LIFECYCLES_BUILDERS = {
  "p2s-lc1": buildP2sLc1,
  "p2s-lc2": buildP2sLc2,
  "p2s-lc3": buildP2sLc3,
};

export const P2_LIFECYCLES_QUESTION_COUNTS = {
  "p2s-lc1": 8, "p2s-lc2": 8, "p2s-lc3": 8,
};

export function buildLifecyclesQuestions(moduleId) {
  const builder = LIFECYCLES_BUILDERS[moduleId];
  return builder ? builder() : [];
}
