import { shuffle } from "../utils/helpers";
export const MEASUREMENT_INTRO = {
  "msr-1": {
    title: "Comparing Length",
    pages: [
      { text: "Things have different lengths! Some are long, some are short.", emoji: "📏" },
      { text: "A ruler is longer than a pencil. A bus is longer than a car!", emoji: "🚌 > 🚗" },
      { text: "We can compare: which is LONGER? Which is SHORTER?", emoji: "📐 ↔️" },
      { text: "We can also compare weight: which is HEAVIER? Which is LIGHTER?", emoji: "⚖️" },
      { text: "Let's practise comparing things!", emoji: "🦊 📏 💪" },
    ],
  },
};

function buildMsr1() {
  return shuffle([
    { q: "Which word means 'not short'?", a: "Long", choices: ["Long", "Heavy", "Light"] },
    { q: "Which word means 'not long'?", a: "Short", choices: ["Tall", "Short", "Heavy"] },
    { q: "Which word means 'not light'?", a: "Heavy", choices: ["Long", "Short", "Heavy"] },
    { q: "We measure how long something is. This is called...?", a: "Length", choices: ["Weight", "Length", "Height"] },
    { q: "We measure how heavy something is. This is called...?", a: "Weight", choices: ["Weight", "Length", "Size"] },
    { q: "A pencil is __ than a ruler.", a: "Shorter", choices: ["Shorter", "Longer", "Heavier"] },
    { q: "An elephant is __ than a cat.", a: "Heavier", choices: ["Lighter", "Shorter", "Heavier"] },
    { q: "A feather is __ than a book.", a: "Lighter", choices: ["Heavier", "Lighter", "Longer"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMsr2() {
  return shuffle([
    { q: "Which is longer: a bus or a bicycle?", a: "Bus", choices: ["Bus", "Bicycle", "Same"] },
    { q: "Which is shorter: a pencil or a paperclip?", a: "Paperclip", choices: ["Pencil", "Paperclip", "Same"] },
    { q: "Which is taller: a tree or a flower?", a: "Tree", choices: ["Tree", "Flower", "Same"] },
    { q: "Which is longer: a worm or a snake?", a: "Snake", choices: ["Worm", "Snake", "Same"] },
    { q: "Which is shorter: your finger or your arm?", a: "Finger", choices: ["Finger", "Arm", "Same"] },
    { q: "Which is taller: a giraffe or a dog?", a: "Giraffe", choices: ["Dog", "Giraffe", "Same"] },
    { q: "Which is longer: a ruler or a train?", a: "Train", choices: ["Ruler", "Train", "Same"] },
    { q: "Which is shorter: a shoe or a bed?", a: "Shoe", choices: ["Shoe", "Bed", "Same"] },
    { q: "Which is taller: a house or a table?", a: "House", choices: ["Table", "House", "Same"] },
    { q: "Which is longer: a bridge or a car?", a: "Bridge", choices: ["Car", "Bridge", "Same"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMsr3() {
  return shuffle([
    { q: "Which is heavier: a watermelon or a grape?", a: "Watermelon", choices: ["Grape", "Watermelon", "Same"] },
    { q: "Which is lighter: a feather or a stone?", a: "Feather", choices: ["Feather", "Stone", "Same"] },
    { q: "Which is heavier: a car or a bicycle?", a: "Car", choices: ["Bicycle", "Car", "Same"] },
    { q: "Which is lighter: a book or a desk?", a: "Book", choices: ["Book", "Desk", "Same"] },
    { q: "Which is heavier: a bowling ball or a tennis ball?", a: "Bowling ball", choices: ["Tennis ball", "Bowling ball", "Same"] },
    { q: "Which is lighter: a pencil or a chair?", a: "Pencil", choices: ["Pencil", "Chair", "Same"] },
    { q: "Which is heavier: an elephant or a mouse?", a: "Elephant", choices: ["Mouse", "Elephant", "Same"] },
    { q: "Which is lighter: a balloon or a brick?", a: "Balloon", choices: ["Balloon", "Brick", "Same"] },
    { q: "Which is heavier: a bag of rice or an egg?", a: "Bag of rice", choices: ["Egg", "Bag of rice", "Same"] },
    { q: "Which is lighter: a coin or a laptop?", a: "Coin", choices: ["Coin", "Laptop", "Same"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMsr4() {
  return shuffle([
    { q: "About how many paperclips long is a pencil?", a: "7", choices: ["3", "7", "20"] },
    { q: "About how many hand spans wide is a desk?", a: "5", choices: ["2", "5", "10"] },
    { q: "If a book is 3 paperclips long and a ruler is 6, which is longer?", a: "Ruler", choices: ["Book", "Ruler", "Same"] },
    { q: "If a pencil is 5 cubes long and a crayon is 3 cubes, which is shorter?", a: "Crayon", choices: ["Pencil", "Crayon", "Same"] },
    { q: "If a table is 8 hand spans and a chair is 4 hand spans, which is taller?", a: "Table", choices: ["Table", "Chair", "Same"] },
    { q: "Can we measure length with paperclips?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "Can we compare weight by holding things in our hands?", a: "Yes", choices: ["Yes", "No", "Maybe"] },
    { q: "If an apple weighs 3 cubes and a pear weighs 5 cubes, which is heavier?", a: "Pear", choices: ["Apple", "Pear", "Same"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "msr-1": buildMsr1, "msr-2": buildMsr2, "msr-3": buildMsr3, "msr-4": buildMsr4,
};

export const MEASUREMENT_QUESTION_COUNTS = {
  "msr-1": 8, "msr-2": 10, "msr-3": 10, "msr-4": 8,
};

export function buildMeasurementQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
