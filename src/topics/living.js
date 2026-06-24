import { shuffle } from "../utils/helpers";
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
    { q: "Do living things grow?", a: "Yes", choices: ["Yes", "No", "Sometimes"], explain: "Growing bigger over time is one special thing living things do, like a seed turning into a tree." },
    { q: "Do living things need food?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "Food gives living things energy to stay alive, so every living thing needs to eat or make food." },
    { q: "Can living things move?", a: "Yes", choices: ["Yes", "No", "Never"], explain: "Moving on their own is something living things can do, like animals that walk, swim or fly." },
    { q: "Do living things breathe?", a: "Yes", choices: ["Yes", "No", "Sometimes"], explain: "Living things need air to stay alive, so breathing is one of the special things they all do." },
    { q: "Does a rock grow?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "A rock is not alive, and only living things grow, so a rock stays the same and does not grow." },
    { q: "Which one is a living thing?", a: "Cat", choices: ["Cat", "Chair", "Stone"], explain: "Living things grow, move, eat and breathe. A cat does all of these, but a chair and a stone do not." },
    { q: "What do living things need to survive?", a: "Food", choices: ["Food", "Toys", "Books"], explain: "To stay alive, living things need food for energy, plus water and air. Toys and books are just for fun." },
    { q: "Which can breathe?", a: "Dog", choices: ["Dog", "Table", "Spoon"], explain: "Only living things breathe air. A dog is alive and breathes, but a table and a spoon are not alive." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildLv2() {
  return shuffle([
    { q: "Is a dog living?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "A dog grows, eats, moves and breathes, and doing all of those things is what makes it a living thing." },
    { q: "Is a rock living?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "A rock cannot grow, eat or breathe, and only living things do those, so a rock is not living." },
    { q: "Is a flower living?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "A flower grows from a seed and needs water and sunlight, so it is a living thing, just like all plants." },
    { q: "Is a car living?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "A car can roll, but it cannot grow or eat by itself and it needs a person to drive it, so it is not living." },
    { q: "Is a fish living?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "A fish swims, eats and breathes through gills, and doing those things makes it a living thing." },
    { q: "Is a pencil living?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "A pencil never grows, eats or breathes on its own, and only living things do that, so it is not living." },
    { q: "Is a tree living?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "A tree grows tall over many years and needs water and sunlight, so it is a living thing." },
    { q: "Is a toy living?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "A toy cannot grow, eat or breathe by itself, so even though it is fun to play with, it is not living." },
    { q: "Is a bird living?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "A bird flies, eats and breathes air, and doing all of those things makes it a living thing." },
    { q: "Is a shoe living?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "A shoe never grows, eats or breathes, and those are things only living things can do, so it is not living." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildLv3() {
  return shuffle([
    { q: "What do living things need to drink?", a: "Water", choices: ["Water", "Juice", "Milk"], explain: "Every living thing needs water inside it to stay alive and healthy. Juice and milk are mostly water but plain water is what all living things truly need." },
    { q: "What do living things breathe?", a: "Air", choices: ["Air", "Water", "Sunlight"], explain: "Living things take in air through their lungs, gills, or leaves to stay alive. Water and sunlight are also needed, but breathing means taking in air." },
    { q: "Plants need ___ to make food.", a: "Sunlight", choices: ["Sunlight", "Darkness", "Ice"], explain: "Plants use light from the sun to make their own food in their leaves, so without sunlight they cannot make food." },
    { q: "What do animals eat to get energy?", a: "Food", choices: ["Food", "Sunlight", "Water"], explain: "Eating food gives animals the energy to move, grow and play. Plants use sunlight for energy, but animals must eat food to get theirs." },
    { q: "Can a plant live without water?", a: "No", choices: ["Yes", "No", "Maybe"], explain: "Plants drink water through their roots to stay alive, so without any water a plant cannot live." },
    { q: "Do fish need water to live?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "Fish breathe through gills that only work underwater, so they need water around them to stay alive." },
    { q: "Which do all living things need?", a: "Air", choices: ["Toys", "Air", "TV"], explain: "Air is something every living thing needs to breathe and stay alive. Toys and TV are just for fun." },
    { q: "What happens to a plant without sunlight?", a: "It dies", choices: ["It dies", "It grows", "It sings"], explain: "Plants need sunlight to make their food, so with no light at all a plant cannot eat and it dies." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
