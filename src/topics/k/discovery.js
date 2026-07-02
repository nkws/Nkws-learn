import { shuffle } from "../../utils/helpers";

// Kindergarten Discovery of the World — animals and weather, picture-first.
// Light general knowledge a 5-6 year old can answer by listening + tapping.

export const K_DISCOVERY_INTRO = {
  "kg-dw1": {
    title: "Animals Around Us",
    pages: [
      { text: "Animals make different sounds. A cow says moo. A duck says quack!", emoji: "🐄 🦆" },
      { text: "Listen to Koko and tap the right animal. Let's explore!", emoji: "🦊 🐾" },
    ],
  },
};

const ANIMAL_ICONS = { Cow: "🐄", Cat: "🐱", Duck: "🦆", Dog: "🐶", Sheep: "🐑", Frog: "🐸", Bee: "🐝", Lion: "🦁" };
const WEATHER_ICONS = { Sunny: "☀️", Rainy: "🌧️", Windy: "🌬️", Snowy: "❄️", Cloudy: "☁️" };

function buildKgDw1() {
  // Animal sounds — the picture is NOT shown, so the child must know the animal.
  return shuffle([
    { q: "Which animal says 'moo'?", a: "Cow", choices: ["Cow", "Cat", "Duck"], icons: ANIMAL_ICONS },
    { q: "Which animal says 'quack'?", a: "Duck", choices: ["Duck", "Dog", "Sheep"], icons: ANIMAL_ICONS },
    { q: "Which animal says 'woof'?", a: "Dog", choices: ["Dog", "Cow", "Frog"], icons: ANIMAL_ICONS },
    { q: "Which animal says 'baa'?", a: "Sheep", choices: ["Sheep", "Cat", "Bee"], icons: ANIMAL_ICONS },
    { q: "Which animal says 'ribbit'?", a: "Frog", choices: ["Frog", "Duck", "Lion"], icons: ANIMAL_ICONS },
    { q: "Which animal says 'roar'?", a: "Lion", choices: ["Lion", "Sheep", "Bee"], icons: ANIMAL_ICONS },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: item.icons,
  }));
}

function buildKgDw2() {
  // Weather — the picture shows the sky; tap the matching word.
  return shuffle([
    { q: "[PIC:☀️] What is the weather?", a: "Sunny", choices: ["Sunny", "Rainy", "Snowy"] },
    { q: "[PIC:🌧️] What is the weather?", a: "Rainy", choices: ["Rainy", "Sunny", "Windy"] },
    { q: "[PIC:❄️] What is the weather?", a: "Snowy", choices: ["Snowy", "Cloudy", "Sunny"] },
    { q: "[PIC:☁️] What is the weather?", a: "Cloudy", choices: ["Cloudy", "Rainy", "Sunny"] },
    { q: "[PIC:🌬️] What is the weather?", a: "Windy", choices: ["Windy", "Snowy", "Rainy"] },
    { q: "[PIC:☀️] What do we wear when it is sunny?", a: "Hat", choices: ["Hat", "Boots", "Scarf"], icons: { Hat: "🧢", Boots: "🥾", Scarf: "🧣" } },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: item.icons || WEATHER_ICONS,
  }));
}

const BUILDERS = { "kg-dw1": buildKgDw1, "kg-dw2": buildKgDw2 };
export const K_DISCOVERY_QUESTION_COUNTS = { "kg-dw1": 6, "kg-dw2": 6 };
export function buildKgDiscoveryQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
