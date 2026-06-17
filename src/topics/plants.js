import { shuffle } from "../utils/helpers";
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
    { q: "Which part of a plant is underground?", a: "Roots", choices: ["Roots", "Stem", "Leaves"], explain: "The roots grow down into the soil to drink water and hold the plant in place, so they are the underground part." },
    { q: "Which part holds the plant up?", a: "Stem", choices: ["Roots", "Stem", "Flower"], explain: "The stem is like a strong straw in the middle that stands tall and holds the leaves and flowers up." },
    { q: "Which part catches sunlight to make food?", a: "Leaves", choices: ["Roots", "Stem", "Leaves"], explain: "Leaves are flat and wide to catch lots of sunlight, which the plant uses to make its own food." },
    { q: "Which part is colorful and makes seeds?", a: "Flower", choices: ["Roots", "Flower", "Stem"], explain: "The flower is the bright, colourful part, and its job is to make seeds for new plants to grow." },
    { q: "Which part holds seeds inside?", a: "Fruit", choices: ["Fruit", "Stem", "Roots"], explain: "Fruit grows around the seeds to keep them safe inside, so the fruit is the part that holds the seeds." },
    { q: "What do roots drink from the soil?", a: "Water", choices: ["Water", "Milk", "Juice"], explain: "Roots soak up water from the wet soil and send it up to the rest of the plant, so they drink water." },
    { q: "Where do roots grow?", a: "Underground", choices: ["In the sky", "Underground", "On top"], explain: "Roots grow down into the soil under the ground to find water, so they grow underground out of sight." },
    { q: "An apple is which part of a plant?", a: "Fruit", choices: ["Flower", "Leaf", "Fruit"], explain: "An apple grows from a flower and has seeds tucked inside it, and the part that holds seeds is the fruit." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPl2() {
  return shuffle([
    { q: "What do plants need from the sky?", a: "Sunlight", choices: ["Sunlight", "Candy", "Toys"], explain: "Plants use light from the sun to make their food, so sunlight is what they need from up in the sky." },
    { q: "What do plants drink?", a: "Water", choices: ["Water", "Soda", "Milk"], explain: "Plants soak up water through their roots to stay alive and grow, so water is what they drink." },
    { q: "Do plants need air?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "Plants take in air through their leaves to help make their food, so they really do need air to live." },
    { q: "Where do plant roots get water from?", a: "Soil", choices: ["Soil", "Sky", "River"], explain: "Roots reach down into the soil where water is hiding, so the soil is where they get their water." },
    { q: "Can a plant grow without sunlight?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "Plants need sunlight to make their own food, so with no light at all a plant cannot grow." },
    { q: "Can a plant grow without water?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "Plants drink water to stay alive and grow, so without any water a plant will dry up and cannot grow." },
    { q: "What gives plants energy to make food?", a: "Sunlight", choices: ["Darkness", "Sunlight", "Wind"], explain: "Plants catch light in their leaves and turn it into energy to make food, so sunlight gives them that energy." },
    { q: "Plants grow best in good ___.", a: "Soil", choices: ["Soil", "Sand", "Ice"], explain: "Good soil holds water and the food plants need for their roots, so plants grow best when planted in it." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPl3() {
  return shuffle([
    { q: "What does a plant start as?", a: "Seed", choices: ["Seed", "Flower", "Fruit"], explain: "Every plant begins life as a tiny seed, which then grows into a big plant, so the seed comes first." },
    { q: "What grows out of a seed first?", a: "Sprout", choices: ["Flower", "Fruit", "Sprout"], explain: "When a seed gets water it pops open and a tiny green sprout pushes out first, before anything else grows." },
    { q: "What comes after the sprout stage?", a: "Plant", choices: ["Seed", "Plant", "Flower"], explain: "A little sprout keeps growing taller and bigger until it becomes a full plant, so the plant comes next." },
    { q: "What appears on a grown plant?", a: "Flower", choices: ["Seed", "Sprout", "Flower"], explain: "Once a plant is fully grown it makes colourful flowers, so flowers appear when the plant is grown up." },
    { q: "Put in order: seed, flower, sprout. What comes first?", a: "Seed", choices: ["Seed", "Flower", "Sprout"], explain: "A plant grows seed, then sprout, then flower. The very beginning of that order is the seed." },
    { q: "Put in order: seed, flower, sprout. What comes last?", a: "Flower", choices: ["Seed", "Sprout", "Flower"], explain: "A plant grows seed, then sprout, then flower. The last stage in that order is the flower." },
    { q: "A seed needs water to start ___.", a: "Growing", choices: ["Sleeping", "Growing", "Flying"], explain: "Water wakes a seed up and helps it sprout, so a seed needs water to start growing into a plant." },
    { q: "What do flowers turn into?", a: "Fruit", choices: ["Roots", "Stems", "Fruit"], explain: "After a flower blooms, it makes fruit that holds the seeds inside, so flowers turn into fruit." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
