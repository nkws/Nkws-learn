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
    { q: "What does a plant life cycle start with?", a: "A seed", choices: ["A seed", "A flower", "A fruit"], explain: "A plant's life cycle goes seed → sprout → plant → flower → fruit with new seeds. It starts with a tiny seed." },
    { q: "What grows from a seed?", a: "A sprout", choices: ["A sprout", "A flower", "A fruit"], explain: "In order, a seed first grows into a small sprout. The flower and fruit come later, after the plant gets bigger." },
    { q: "What comes after the sprout stage?", a: "A plant", choices: ["A plant", "A seed", "A fruit"], explain: "The order is seed → sprout → plant. The little sprout keeps growing until it becomes a big plant." },
    { q: "What does a plant grow to attract bees?", a: "Flowers", choices: ["Flowers", "Roots", "Thorns"], explain: "Flowers are bright and sweet, so they bring bees to the plant. The bees help the plant make seeds." },
    { q: "What do flowers turn into?", a: "Fruits", choices: ["Fruits", "Seeds", "Leaves"], explain: "In the cycle, flowers turn into fruits. The fruit grows where the flower was, holding the new seeds inside." },
    { q: "Where are new seeds found?", a: "Inside the fruit", choices: ["Inside the fruit", "On the leaves", "On the stem"], explain: "Seeds grow safely inside the fruit. When the fruit opens or falls, those seeds can start brand new plants." },
    { q: "What do plants need to grow?", a: "Water and sunlight", choices: ["Water and sunlight", "Only water", "Only soil"], explain: "Plants make their own food using both water and sunlight. They need both together to grow strong and healthy." },
    { q: "What happens after the fruit drops its seeds?", a: "New plants grow", choices: ["New plants grow", "The fruit grows bigger", "The plant dies forever"], explain: "The cycle starts again. A dropped seed grows into a new plant, so the life cycle goes round and round." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2sLc2() {
  return shuffle([
    { q: "What is the first stage of a butterfly's life?", a: "Egg", choices: ["Egg", "Caterpillar", "Butterfly"], explain: "A butterfly's life goes egg → caterpillar → chrysalis → butterfly. It begins as a tiny egg laid on a leaf." },
    { q: "What hatches from a butterfly egg?", a: "A caterpillar", choices: ["A caterpillar", "A butterfly", "A chrysalis"], explain: "After the egg comes the caterpillar. A little caterpillar hatches out and starts munching on leaves to grow." },
    { q: "What does a caterpillar turn into?", a: "A chrysalis", choices: ["A chrysalis", "A butterfly", "An egg"], explain: "Next in order comes the chrysalis. The caterpillar wraps into a chrysalis, where its body slowly changes inside." },
    { q: "What comes out of a chrysalis?", a: "A butterfly", choices: ["A butterfly", "A caterpillar", "An egg"], explain: "The last stage is the butterfly. When the chrysalis opens, a grown butterfly comes out with wings to fly." },
    { q: "What does a caterpillar eat a lot of?", a: "Leaves", choices: ["Leaves", "Fruit", "Flowers"], explain: "A caterpillar eats lots of leaves so it has enough energy to grow big and get ready to become a chrysalis." },
    { q: "What is another name for a chrysalis?", a: "Pupa", choices: ["Pupa", "Larva", "Cocoon"], explain: "A chrysalis is also called a pupa. Pupa is the science word for the resting stage where the insect changes shape." },
    { q: "How many stages are in a butterfly's life cycle?", a: "Four", choices: ["Four", "Three", "Five"], explain: "There are four stages: egg, caterpillar, chrysalis, and butterfly. Count them and you get four." },
    { q: "What does the butterfly do after coming out of the chrysalis?", a: "Flies and lays eggs", choices: ["Flies and lays eggs", "Makes a chrysalis", "Becomes a caterpillar"], explain: "The grown butterfly flies away and lays new eggs. Those eggs start the whole life cycle all over again." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2sLc3() {
  return shuffle([
    { q: "What is the first stage of a frog's life?", a: "Egg", choices: ["Egg", "Tadpole", "Frog"], explain: "A frog's life goes egg → tadpole → froglet → frog. It starts as an egg floating in the water." },
    { q: "What hatches from a frog egg?", a: "A tadpole", choices: ["A tadpole", "A frog", "A froglet"], explain: "After the egg comes the tadpole. A tiny tadpole hatches out and swims in the water like a little fish." },
    { q: "What does a tadpole breathe with?", a: "Gills", choices: ["Gills", "Lungs", "Skin"], explain: "A tadpole lives in water, so it breathes with gills to take in air from the water, just like a fish does." },
    { q: "What grows on a tadpole as it changes?", a: "Legs", choices: ["Legs", "Wings", "Fins"], explain: "As a tadpole grows up, it sprouts legs so it can hop on land later. This change is part of becoming a frog." },
    { q: "What is a young frog with a tail called?", a: "A froglet", choices: ["A froglet", "A tadpole", "An egg"], explain: "A froglet is the in-between stage. It has frog legs but still a little tail, just before it becomes a full grown frog." },
    { q: "Where do frogs lay their eggs?", a: "In water", choices: ["In water", "On trees", "Under rocks"], explain: "Frogs lay eggs in water because the eggs and tadpoles need water to live and breathe with their gills." },
    { q: "What happens to the froglet's tail?", a: "It gets shorter and disappears", choices: ["It gets shorter and disappears", "It gets longer", "It stays the same"], explain: "As the froglet becomes an adult frog, its tail slowly shrinks away because a grown frog hops instead of swimming with a tail." },
    { q: "What does an adult frog breathe with?", a: "Lungs", choices: ["Lungs", "Gills", "Fins"], explain: "A grown frog lives on land and in water, so it breathes air with lungs, unlike the tadpole that used gills." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
