import { shuffle } from "../../utils/helpers";

// Nursery Discovery of the World — everyday things and the sky, picture-first
// for ages 3-4.

export const N_DISCOVERY_INTRO = {
  "ns-dw1": {
    title: "My World",
    pages: [
      { text: "Some things we can eat, like an apple. Some we cannot, like a shoe!", emoji: "🍎 👟" },
      { text: "Listen to Koko and tap the right picture. Let's find out!", emoji: "🦊 🌍" },
    ],
  },
};

function buildNsDw1() {
  // Everyday sorting — can we eat it?
  return shuffle([
    { q: "Which one can you eat?", a: "Apple", choices: ["Apple", "Ball", "Shoe"], icons: { Apple: "🍎", Ball: "⚽", Shoe: "👟" } },
    { q: "Which one can you eat?", a: "Banana", choices: ["Banana", "Car", "Book"], icons: { Banana: "🍌", Car: "🚗", Book: "📖" } },
    { q: "Which one can you drink?", a: "Milk", choices: ["Milk", "Hat", "Ball"], icons: { Milk: "🥛", Hat: "🎩", Ball: "⚽" } },
    { q: "Which one do you wear?", a: "Shoe", choices: ["Shoe", "Apple", "Cup"], icons: { Shoe: "👟", Apple: "🍎", Cup: "🥤" } },
    { q: "Which one do you read?", a: "Book", choices: ["Book", "Fish", "Car"], icons: { Book: "📖", Fish: "🐟", Car: "🚗" } },
    { q: "Which one can you play with?", a: "Ball", choices: ["Ball", "Milk", "Shoe"], icons: { Ball: "⚽", Milk: "🥛", Shoe: "👟" } },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: item.icons,
  }));
}

function buildNsDw2() {
  // Day and night sky.
  return shuffle([
    { q: "What do we see in the day sky?", a: "Sun", choices: ["Sun", "Moon", "Star"], icons: { Sun: "☀️", Moon: "🌙", Star: "⭐" } },
    { q: "What do we see at night?", a: "Moon", choices: ["Moon", "Sun", "Rainbow"], icons: { Moon: "🌙", Sun: "☀️", Rainbow: "🌈" } },
    { q: "What comes after rain?", a: "Rainbow", choices: ["Rainbow", "Moon", "Snow"], icons: { Rainbow: "🌈", Moon: "🌙", Snow: "❄️" } },
    { q: "[PIC:🌧️] What falls from rain clouds?", a: "Rain", choices: ["Rain", "Sun", "Star"], icons: { Rain: "💧", Sun: "☀️", Star: "⭐" } },
    { q: "Which is hot?", a: "Sun", choices: ["Sun", "Snow", "Moon"], icons: { Sun: "☀️", Snow: "❄️", Moon: "🌙" } },
    { q: "Which is cold?", a: "Snow", choices: ["Snow", "Sun", "Fire"], icons: { Snow: "❄️", Sun: "☀️", Fire: "🔥" } },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: item.icons,
  }));
}

const BUILDERS = { "ns-dw1": buildNsDw1, "ns-dw2": buildNsDw2 };
export const N_DISCOVERY_QUESTION_COUNTS = { "ns-dw1": 6, "ns-dw2": 6 };
export function buildNsDiscoveryQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
