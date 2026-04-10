import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P3_DIVERSITY_INTRO = {
  "p3s-dv1": {
    title: "Classifying Living Things",
    pages: [
      {
        text: "Scientists group living things to make them easier to study. This is called classification!",
        emoji: "🔬 📋",
      },
      {
        text: "Mammals have fur or hair and feed milk to their babies. Dogs, cats and whales are mammals!",
        emoji: "🐶 🐱 🐋",
      },
      {
        text: "Birds have feathers and lay eggs. Eagles, penguins and sparrows are all birds!",
        emoji: "🦅 🐧 🐦",
      },
      {
        text: "Reptiles have dry, scaly skin. Lizards, snakes and crocodiles are reptiles!",
        emoji: "🦎 🐍 🐊",
      },
      {
        text: "Fish live in water and breathe through gills. Insects have six legs. Let's learn more!",
        emoji: "🐟 🦋 🧠",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildP3sDv1() {
  return shuffle([
    { q: "A whale breathes air and feeds milk to its babies. It is a?", a: "Mammal", choices: ["Mammal", "Fish", "Reptile"] },
    { q: "A robin has feathers and can fly. It is a?", a: "Bird", choices: ["Bird", "Mammal", "Insect"] },
    { q: "A snake has dry, scaly skin and lays eggs. It is a?", a: "Reptile", choices: ["Reptile", "Mammal", "Fish"] },
    { q: "A goldfish lives in water and breathes through gills. It is a?", a: "Fish", choices: ["Fish", "Mammal", "Reptile"] },
    { q: "A butterfly has six legs and wings. It is an?", a: "Insect", choices: ["Insect", "Bird", "Mammal"] },
    { q: "A dog has fur and feeds milk to its puppies. It is a?", a: "Mammal", choices: ["Mammal", "Bird", "Reptile"] },
    { q: "A frog lives on land and in water. It is an?", a: "Amphibian", choices: ["Amphibian", "Reptile", "Fish"] },
    { q: "An ant has six legs and a hard body covering. It is an?", a: "Insect", choices: ["Insect", "Reptile", "Mammal"] },
    { q: "A crocodile has scaly skin and lives near water. It is a?", a: "Reptile", choices: ["Reptile", "Fish", "Amphibian"] },
    { q: "A penguin has feathers and lays eggs. It is a?", a: "Bird", choices: ["Bird", "Fish", "Mammal"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3sDv2() {
  return shuffle([
    { q: "Mushrooms are?", a: "Fungi", choices: ["Fungi", "Plants", "Animals"] },
    { q: "Which of these is NOT a plant?", a: "Mushroom", choices: ["Mushroom", "Rose", "Fern"] },
    { q: "Bacteria are very tiny living things. They are?", a: "Micro-organisms", choices: ["Micro-organisms", "Plants", "Animals"] },
    { q: "Mould that grows on old bread is a type of?", a: "Fungi", choices: ["Fungi", "Plant", "Bacteria"] },
    { q: "Which living thing is too small to see without a microscope?", a: "Bacteria", choices: ["Bacteria", "Mushroom", "Fern"] },
    { q: "Yeast is used to make bread rise. Yeast is a?", a: "Fungus", choices: ["Fungus", "Plant", "Animal"] },
    { q: "Fungi get their food from?", a: "Dead or living things", choices: ["Dead or living things", "Sunlight", "Soil only"] },
    { q: "Unlike plants, fungi cannot make their own food because they lack?", a: "Chlorophyll", choices: ["Chlorophyll", "Roots", "Leaves"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3sDv3() {
  return shuffle([
    { q: "A cactus has thick stems to?", a: "Store water", choices: ["Store water", "Catch insects", "Grow taller"] },
    { q: "A polar bear has thick fur to?", a: "Keep warm", choices: ["Keep warm", "Swim faster", "Hide from prey"] },
    { q: "A camel has a hump to?", a: "Store fat for energy", choices: ["Store fat for energy", "Store water", "Balance itself"] },
    { q: "Fish have streamlined bodies to?", a: "Move easily in water", choices: ["Move easily in water", "Stay warm", "Breathe air"] },
    { q: "A chameleon changes colour to?", a: "Hide from enemies", choices: ["Hide from enemies", "Stay warm", "Find food"] },
    { q: "Birds have hollow bones to?", a: "Be lighter for flying", choices: ["Be lighter for flying", "Store food", "Grow faster"] },
    { q: "A duck has webbed feet to?", a: "Swim in water", choices: ["Swim in water", "Run fast", "Climb trees"] },
    { q: "An owl has large eyes to?", a: "See well at night", choices: ["See well at night", "Scare predators", "Fly higher"] },
    { q: "A giraffe has a long neck to?", a: "Reach tall trees for food", choices: ["Reach tall trees for food", "Run faster", "Breathe better"] },
    { q: "A hedgehog has spines to?", a: "Protect itself from enemies", choices: ["Protect itself from enemies", "Keep warm", "Catch food"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const DIVERSITY_BUILDERS = {
  "p3s-dv1": buildP3sDv1,
  "p3s-dv2": buildP3sDv2,
  "p3s-dv3": buildP3sDv3,
};

export const P3_DIVERSITY_QUESTION_COUNTS = {
  "p3s-dv1": 10, "p3s-dv2": 8, "p3s-dv3": 10,
};

export function buildDiversityQuestions(moduleId) {
  const builder = DIVERSITY_BUILDERS[moduleId];
  return builder ? builder() : [];
}
