import { shuffle } from "../utils/helpers";
// ============ INTRO CONTENT ============

export const ANIMALS_INTRO = {
  "an-1": {
    title: "Types of Animals",
    pages: [
      { text: "There are many types of animals! Let's learn the main groups.", emoji: "🐶 🐦 🐟 🐛 🦎" },
      { text: "MAMMALS have fur or hair and feed milk to their babies. Dogs, cats, and cows are mammals!", emoji: "🐶 🐱 🐄" },
      { text: "BIRDS have feathers and wings. Most birds can fly!", emoji: "🐦 🦅 🐧" },
      { text: "FISH live in water and breathe through gills. They have fins and scales!", emoji: "🐟 🐠 🐡" },
      { text: "INSECTS are tiny with 6 legs. Ants, bees, and butterflies are insects!", emoji: "🐜 🐝 🦋" },
      { text: "REPTILES have scaly skin. Lizards, snakes, and turtles are reptiles!", emoji: "🦎 🐍 🐢" },
      { text: "Let's see how much you know about animals! Koko believes in you!", emoji: "🦊 🐾 = 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildAn1() {
  return shuffle([
    { q: "A dog is what type of animal?", a: "Mammal", choices: ["Mammal", "Bird", "Fish"] },
    { q: "A robin is what type of animal?", a: "Bird", choices: ["Mammal", "Bird", "Insect"] },
    { q: "A goldfish is what type of animal?", a: "Fish", choices: ["Fish", "Reptile", "Bird"] },
    { q: "An ant is what type of animal?", a: "Insect", choices: ["Mammal", "Fish", "Insect"] },
    { q: "A lizard is what type of animal?", a: "Reptile", choices: ["Reptile", "Bird", "Mammal"] },
    { q: "Which animal group has feathers?", a: "Birds", choices: ["Mammals", "Birds", "Fish"] },
    { q: "Which animal group has 6 legs?", a: "Insects", choices: ["Mammals", "Reptiles", "Insects"] },
    { q: "Which animal group feeds milk to babies?", a: "Mammals", choices: ["Mammals", "Birds", "Fish"] },
    { q: "A turtle is what type of animal?", a: "Reptile", choices: ["Reptile", "Insect", "Bird"] },
    { q: "A butterfly is what type of animal?", a: "Insect", choices: ["Bird", "Insect", "Mammal"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildAn2() {
  return shuffle([
    { q: "Where do fish live?", a: "Water", choices: ["Land", "Water", "Air"] },
    { q: "Where do eagles fly?", a: "Air", choices: ["Land", "Water", "Air"] },
    { q: "Where do lions live?", a: "Land", choices: ["Land", "Water", "Air"] },
    { q: "Where do dolphins live?", a: "Water", choices: ["Land", "Water", "Air"] },
    { q: "Where do worms live?", a: "Land", choices: ["Land", "Water", "Air"] },
    { q: "Where do sharks live?", a: "Water", choices: ["Land", "Water", "Air"] },
    { q: "A parrot flies through the ___.", a: "Air", choices: ["Land", "Water", "Air"] },
    { q: "A frog can live on land and in ___.", a: "Water", choices: ["Air", "Water", "Fire"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildAn3() {
  return shuffle([
    { q: "A cow eats grass. It eats ___.", a: "Plants", choices: ["Plants", "Meat", "Both"] },
    { q: "A lion eats other animals. It eats ___.", a: "Meat", choices: ["Plants", "Meat", "Both"] },
    { q: "A bear eats berries and fish. It eats ___.", a: "Both", choices: ["Plants", "Meat", "Both"] },
    { q: "A rabbit eats carrots and leaves. It eats ___.", a: "Plants", choices: ["Plants", "Meat", "Both"] },
    { q: "A shark eats fish. It eats ___.", a: "Meat", choices: ["Plants", "Meat", "Both"] },
    { q: "An animal that eats only plants eats ___.", a: "Plants", choices: ["Plants", "Meat", "Both"] },
    { q: "An animal that eats only meat eats ___.", a: "Meat", choices: ["Plants", "Meat", "Both"] },
    { q: "An animal that eats plants and meat eats ___.", a: "Both", choices: ["Plants", "Meat", "Both"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildAn4() {
  return shuffle([
    { q: "A baby cat is called a ___.", a: "Kitten", choices: ["Kitten", "Puppy", "Calf"] },
    { q: "A baby dog is called a ___.", a: "Puppy", choices: ["Kitten", "Puppy", "Chick"] },
    { q: "A baby cow is called a ___.", a: "Calf", choices: ["Calf", "Kitten", "Puppy"] },
    { q: "A baby chicken is called a ___.", a: "Chick", choices: ["Chick", "Calf", "Kitten"] },
    { q: "A baby sheep is called a ___.", a: "Lamb", choices: ["Lamb", "Puppy", "Chick"] },
    { q: "A baby duck is called a ___.", a: "Duckling", choices: ["Duckling", "Kitten", "Lamb"] },
    { q: "What is a kitten the baby of?", a: "Cat", choices: ["Dog", "Cat", "Cow"] },
    { q: "What is a puppy the baby of?", a: "Dog", choices: ["Dog", "Cat", "Sheep"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "an-1": buildAn1, "an-2": buildAn2, "an-3": buildAn3, "an-4": buildAn4,
};

export const ANIMALS_QUESTION_COUNTS = {
  "an-1": 10, "an-2": 8, "an-3": 8, "an-4": 8,
};

export function buildAnimalsQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
