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
    { q: "A dog is what type of animal?", a: "Mammal", choices: ["Mammal", "Bird", "Fish"], explain: "A dog has fur and its babies drink milk from their mother. Animals like that belong to the mammal group." },
    { q: "A robin is what type of animal?", a: "Bird", choices: ["Mammal", "Bird", "Insect"], explain: "A robin has feathers and wings. Feathers are the special clue that an animal belongs to the bird group." },
    { q: "A goldfish is what type of animal?", a: "Fish", choices: ["Fish", "Reptile", "Bird"], explain: "A goldfish lives in water and breathes through gills, with fins to swim. Animals like that belong to the fish group." },
    { q: "An ant is what type of animal?", a: "Insect", choices: ["Mammal", "Fish", "Insect"], explain: "An ant is tiny and has 6 legs. Having 6 legs is the clue that an animal belongs to the insect group." },
    { q: "A lizard is what type of animal?", a: "Reptile", choices: ["Reptile", "Bird", "Mammal"], explain: "A lizard has dry, scaly skin. Animals with scaly skin like snakes and turtles belong to the reptile group." },
    { q: "Which animal group has feathers?", a: "Birds", choices: ["Mammals", "Birds", "Fish"], explain: "Feathers are special and only one group grows them. That is why feathers always mean the animal is a bird." },
    { q: "Which animal group has 6 legs?", a: "Insects", choices: ["Mammals", "Reptiles", "Insects"], explain: "When an animal has exactly 6 legs, it belongs to the insect group, like ants, bees and butterflies." },
    { q: "Which animal group feeds milk to babies?", a: "Mammals", choices: ["Mammals", "Birds", "Fish"], explain: "Only one group feeds milk from the mother to its babies, and that is the mammal group, like dogs and cows." },
    { q: "A turtle is what type of animal?", a: "Reptile", choices: ["Reptile", "Insect", "Bird"], explain: "A turtle has scaly skin and a hard shell. Animals with scaly skin belong to the reptile group." },
    { q: "A butterfly is what type of animal?", a: "Insect", choices: ["Bird", "Insect", "Mammal"], explain: "A butterfly has 6 legs even though it can fly. Having 6 legs is the clue that it belongs to the insect group." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildAn2() {
  return shuffle([
    { q: "Where do fish live?", a: "Water", choices: ["Land", "Water", "Air"], explain: "Fish breathe through gills, so they need to stay in water to live. That is their home." },
    { q: "Where does an eagle live?", a: "Air", choices: ["Land", "Water", "Air"], explain: "An eagle is a bird with big wings that soars high above the ground, so its habitat is the air." },
    { q: "Where do lions live?", a: "Land", choices: ["Land", "Water", "Air"], explain: "A lion has strong legs for running and walking, so its home is on the dry land." },
    { q: "Where do dolphins live?", a: "Water", choices: ["Land", "Water", "Air"], explain: "A dolphin swims with fins and its body is made for swimming, so its home is in the water." },
    { q: "Where do worms live?", a: "Land", choices: ["Land", "Water", "Air"], explain: "A worm wriggles through soil in the ground, so its home is on the land, not the water or sky." },
    { q: "Where do sharks live?", a: "Water", choices: ["Land", "Water", "Air"], explain: "A shark is a fish that swims and breathes underwater, so the sea is its home in the water." },
    { q: "What is a parrot's habitat?", a: "Air", choices: ["Land", "Water", "Air"], explain: "A parrot is a bird with wings for flying, so it belongs to the air group of habitats." },
    { q: "Where does a frog live besides on land?", a: "Water", choices: ["Air", "Water", "Underground"], explain: "A frog has wet skin that must stay moist, and it lays its eggs in ponds, so it also lives in the water." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildAn3() {
  return shuffle([
    { q: "A cow eats grass. It eats ___.", a: "Plants", choices: ["Plants", "Meat", "Both"], explain: "Grass is a plant, and a cow eats only growing things like grass, so a cow is a plant eater." },
    { q: "A lion eats other animals. It eats ___.", a: "Meat", choices: ["Plants", "Meat", "Both"], explain: "When an animal hunts and eats other animals, it is eating meat, so a lion is a meat eater." },
    { q: "A bear eats berries and fish. It eats ___.", a: "Both", choices: ["Plants", "Meat", "Both"], explain: "Berries are plants and fish is meat, so an animal that eats both kinds of food eats both." },
    { q: "A rabbit eats carrots and leaves. It eats ___.", a: "Plants", choices: ["Plants", "Meat", "Both"], explain: "Carrots and leaves are parts of plants, so a rabbit that eats them is a plant eater." },
    { q: "A shark eats fish. It eats ___.", a: "Meat", choices: ["Plants", "Meat", "Both"], explain: "Fish are animals, so eating them means eating meat, which makes a shark a meat eater." },
    { q: "A horse eats only hay and grass. What does a horse eat?", a: "Plants", choices: ["Plants", "Meat", "Both"], explain: "Hay and grass are plants, so an animal that eats only these things eats only plants." },
    { q: "A crocodile hunts and eats only fish and animals. What does a crocodile eat?", a: "Meat", choices: ["Plants", "Meat", "Both"], explain: "Fish and animals are meat, so an animal that hunts and eats only them is a meat eater." },
    { q: "A crow eats seeds and also pecks at worms. What type of eater is a crow?", a: "Both", choices: ["Plants", "Meat", "Both"], explain: "Seeds are plants and worms are animals (meat), so a crow that eats both kinds of food eats both." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildAn4() {
  return shuffle([
    { q: "A baby cat is called a ___.", a: "Kitten", choices: ["Kitten", "Puppy", "Calf"], explain: "Many baby animals have their own special name. The young of a cat is called a kitten." },
    { q: "A baby dog is called a ___.", a: "Puppy", choices: ["Kitten", "Puppy", "Chick"], explain: "Baby animals often have a special name of their own. A young dog is called a puppy." },
    { q: "A baby cow is called a ___.", a: "Calf", choices: ["Calf", "Kitten", "Puppy"], explain: "Each animal has its own baby name. The young of a cow is called a calf." },
    { q: "A baby chicken is called a ___.", a: "Chick", choices: ["Chick", "Calf", "Kitten"], explain: "Baby animals get special names. A young chicken that hatches from an egg is called a chick." },
    { q: "A baby sheep is called a ___.", a: "Lamb", choices: ["Lamb", "Puppy", "Chick"], explain: "Each kind of animal has a baby name of its own. A young sheep is called a lamb." },
    { q: "A baby duck is called a ___.", a: "Duckling", choices: ["Duckling", "Kitten", "Lamb"], explain: "Baby animals have their own names. A young duck that swims after its mother is a duckling." },
    { q: "What is a kitten the baby of?", a: "Cat", choices: ["Dog", "Cat", "Cow"], explain: "A baby grows up to be the same kind of animal as its parent, so a kitten grows into a cat." },
    { q: "What is a puppy the baby of?", a: "Dog", choices: ["Dog", "Cat", "Sheep"], explain: "A baby always grows into the same animal as its mother, so a puppy grows up to be a dog." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
