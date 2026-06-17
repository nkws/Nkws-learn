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
    { q: "Which word means 'not short'?", a: "Long", choices: ["Long", "Heavy", "Light"], explain: "Long and short are opposite words for length. The opposite of short is long, so 'not short' means long." },
    { q: "Which word means 'not long'?", a: "Short", choices: ["Tall", "Short", "Heavy"], explain: "Long and short are opposite words for length. The opposite of long is short, so 'not long' means short." },
    { q: "Which word means 'not light'?", a: "Heavy", choices: ["Long", "Short", "Heavy"], explain: "Light and heavy are opposite words for weight. The opposite of light is heavy, so 'not light' means heavy." },
    { q: "We measure how long something is. This is called...?", a: "Length", choices: ["Weight", "Length", "Height"], explain: "How long something is from end to end is called its length. So measuring how long something is means measuring its length." },
    { q: "We measure how heavy something is. This is called...?", a: "Weight", choices: ["Weight", "Length", "Size"], explain: "How heavy something is, is called its weight. So measuring how heavy something is means measuring its weight." },
    { q: "A pencil is __ than a ruler.", a: "Shorter", choices: ["Shorter", "Longer", "Heavier"], explain: "We compare length by which one is longer. A ruler is longer than a pencil, so the pencil is the shorter one." },
    { q: "An elephant is __ than a cat.", a: "Heavier", choices: ["Lighter", "Shorter", "Heavier"], explain: "Heavier means it weighs more. A big elephant weighs much more than a small cat, so the elephant is heavier." },
    { q: "A feather is __ than a book.", a: "Lighter", choices: ["Heavier", "Lighter", "Longer"], explain: "Lighter means it weighs less. A tiny feather weighs much less than a book, so the feather is lighter." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMsr2() {
  return shuffle([
    { q: "Which is longer: a bus or a bicycle?", a: "Bus", choices: ["Bus", "Bicycle", "Same"], explain: "Longer means it measures more from end to end. A bus is much bigger than a bicycle, so the bus is longer." },
    { q: "Which is shorter: a pencil or a paperclip?", a: "Paperclip", choices: ["Pencil", "Paperclip", "Same"], explain: "Shorter means it measures less from end to end. A tiny paperclip is smaller than a pencil, so the paperclip is shorter." },
    { q: "Which is taller: a tree or a flower?", a: "Tree", choices: ["Tree", "Flower", "Same"], explain: "Taller means it goes up higher. A tree grows much higher than a little flower, so the tree is taller." },
    { q: "Which is longer: a worm or a snake?", a: "Snake", choices: ["Worm", "Snake", "Same"], explain: "Longer means it measures more from end to end. A snake stretches much further than a little worm, so the snake is longer." },
    { q: "Which is shorter: your finger or your arm?", a: "Finger", choices: ["Finger", "Arm", "Same"], explain: "Shorter means it measures less from end to end. Your finger is just a small part of your arm, so the finger is shorter." },
    { q: "Which is taller: a giraffe or a dog?", a: "Giraffe", choices: ["Dog", "Giraffe", "Same"], explain: "Taller means it goes up higher. A giraffe has a very long neck and stands high, so the giraffe is taller than a dog." },
    { q: "Which is longer: a ruler or a train?", a: "Train", choices: ["Ruler", "Train", "Same"], explain: "Longer means it measures more from end to end. A train has many carriages and is very long, so the train is longer than a ruler." },
    { q: "Which is shorter: a shoe or a bed?", a: "Shoe", choices: ["Shoe", "Bed", "Same"], explain: "Shorter means it measures less from end to end. A shoe is small but a bed is long enough to lie on, so the shoe is shorter." },
    { q: "Which is taller: a house or a table?", a: "House", choices: ["Table", "House", "Same"], explain: "Taller means it goes up higher. A house is tall enough to live in, much higher than a table, so the house is taller." },
    { q: "Which is longer: a bridge or a car?", a: "Bridge", choices: ["Car", "Bridge", "Same"], explain: "Longer means it measures more from end to end. A bridge stretches a long way across, much more than a car, so the bridge is longer." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMsr3() {
  return shuffle([
    { q: "Which is heavier: a watermelon or a grape?", a: "Watermelon", choices: ["Grape", "Watermelon", "Same"], explain: "Heavier means it weighs more. A big watermelon weighs much more than one tiny grape, so the watermelon is heavier." },
    { q: "Which is lighter: a feather or a stone?", a: "Feather", choices: ["Feather", "Stone", "Same"], explain: "Lighter means it weighs less. A feather floats and weighs almost nothing, much less than a stone, so the feather is lighter." },
    { q: "Which is heavier: a car or a bicycle?", a: "Car", choices: ["Bicycle", "Car", "Same"], explain: "Heavier means it weighs more. A car is big and made of lots of metal, much more than a bicycle, so the car is heavier." },
    { q: "Which is lighter: a book or a desk?", a: "Book", choices: ["Book", "Desk", "Same"], explain: "Lighter means it weighs less. You can lift a book easily but a desk is hard to lift, so the book is lighter." },
    { q: "Which is heavier: a bowling ball or a tennis ball?", a: "Bowling ball", choices: ["Tennis ball", "Bowling ball", "Same"], explain: "Heavier means it weighs more. A bowling ball is solid and hard to lift, while a tennis ball is light, so the bowling ball is heavier." },
    { q: "Which is lighter: a pencil or a chair?", a: "Pencil", choices: ["Pencil", "Chair", "Same"], explain: "Lighter means it weighs less. A pencil is small and easy to hold, much less than a chair, so the pencil is lighter." },
    { q: "Which is heavier: an elephant or a mouse?", a: "Elephant", choices: ["Mouse", "Elephant", "Same"], explain: "Heavier means it weighs more. A huge elephant weighs far more than a tiny mouse, so the elephant is heavier." },
    { q: "Which is lighter: a balloon or a brick?", a: "Balloon", choices: ["Balloon", "Brick", "Same"], explain: "Lighter means it weighs less. A balloon is full of air and floats, much less than a heavy brick, so the balloon is lighter." },
    { q: "Which is heavier: a bag of rice or an egg?", a: "Bag of rice", choices: ["Egg", "Bag of rice", "Same"], explain: "Heavier means it weighs more. A whole bag of rice weighs much more than one little egg, so the bag of rice is heavier." },
    { q: "Which is lighter: a coin or a laptop?", a: "Coin", choices: ["Coin", "Laptop", "Same"], explain: "Lighter means it weighs less. A small coin weighs much less than a laptop, so the coin is lighter." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMsr4() {
  return shuffle([
    { q: "About how many paperclips long is a pencil?", a: "7", choices: ["3", "7", "20"], explain: "We can measure length by laying small things end to end. A pencil is about as long as 7 paperclips in a row." },
    { q: "About how many hand spans wide is a desk?", a: "5", choices: ["2", "5", "10"], explain: "We can measure width using our hand again and again. A desk is about 5 hand spans wide." },
    { q: "If a book is 3 paperclips long and a ruler is 6, which is longer?", a: "Ruler", choices: ["Book", "Ruler", "Same"], explain: "When we use the same units, more units means longer. The ruler is 6 paperclips and the book is only 3, so the ruler is longer." },
    { q: "If a pencil is 5 cubes long and a crayon is 3 cubes, which is shorter?", a: "Crayon", choices: ["Pencil", "Crayon", "Same"], explain: "When we use the same units, fewer units means shorter. The crayon is 3 cubes and the pencil is 5, so the crayon is shorter." },
    { q: "If a table is 8 hand spans and a chair is 4 hand spans, which is taller?", a: "Table", choices: ["Table", "Chair", "Same"], explain: "When we use the same units, more units means taller. The table is 8 hand spans and the chair is 4, so the table is taller." },
    { q: "Can we measure length with paperclips?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "Yes! We can measure with any small thing if we use the same one each time. Lining up paperclips end to end shows how long something is." },
    { q: "Can we compare weight by holding things in our hands?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "Yes! Our hands can feel which side pulls down more. The one that feels harder to hold up is the heavier one." },
    { q: "If an apple weighs 3 cubes and a pear weighs 5 cubes, which is heavier?", a: "Pear", choices: ["Apple", "Pear", "Same"], explain: "When we use the same units, more units means heavier. The pear is 5 cubes and the apple is 3, so the pear is heavier." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
