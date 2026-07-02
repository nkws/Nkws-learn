import { shuffle } from "../../utils/helpers";

// Nursery English — first words (naming animals/objects) and big vs small,
// picture-first for ages 3-4.

export const N_ENGLISH_INTRO = {
  "ns-eng1": {
    title: "Name It!",
    pages: [
      { text: "Everything has a name. Dog, cat, ball. Let's name them together!", emoji: "🐶 🐱 ⚽" },
      { text: "Listen to Koko and tap the right picture. Well done!", emoji: "🦊 👏" },
    ],
  },
};

const THING_ICONS = {
  Dog: "🐶", Cat: "🐱", Cow: "🐄", Ball: "⚽", Apple: "🍎", Car: "🚗",
  Fish: "🐟", Bird: "🐦", Shoe: "👟", Cup: "🥤", Hat: "🎩", Book: "📖",
};

function buildNsEng1() {
  // Name the animal/object — the picture is shown, tap the word.
  return shuffle([
    { q: "[PIC:🐶] What is this?", a: "Dog", choices: ["Dog", "Cat", "Cow"] },
    { q: "[PIC:🐱] What is this?", a: "Cat", choices: ["Cat", "Dog", "Fish"] },
    { q: "[PIC:⚽] What is this?", a: "Ball", choices: ["Ball", "Apple", "Car"] },
    { q: "[PIC:🍎] What is this?", a: "Apple", choices: ["Apple", "Ball", "Cup"] },
    { q: "[PIC:🚗] What is this?", a: "Car", choices: ["Car", "Shoe", "Book"] },
    { q: "[PIC:🐦] What is this?", a: "Bird", choices: ["Bird", "Fish", "Cat"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: THING_ICONS,
  }));
}

function buildNsEng2() {
  // Big vs small — which one is big / small?
  return shuffle([
    { q: "Which animal is BIG?", a: "Elephant", choices: ["Elephant", "Mouse", "Ant"], icons: { Elephant: "🐘", Mouse: "🐭", Ant: "🐜" } },
    { q: "Which animal is small?", a: "Ant", choices: ["Ant", "Elephant", "Cow"], icons: { Ant: "🐜", Elephant: "🐘", Cow: "🐄" } },
    { q: "Which one is BIG?", a: "Whale", choices: ["Whale", "Fish", "Bee"], icons: { Whale: "🐋", Fish: "🐟", Bee: "🐝" } },
    { q: "Which one is small?", a: "Mouse", choices: ["Mouse", "Horse", "Bear"], icons: { Mouse: "🐭", Horse: "🐴", Bear: "🐻" } },
    { q: "Which is tall?", a: "Giraffe", choices: ["Giraffe", "Duck", "Cat"], icons: { Giraffe: "🦒", Duck: "🦆", Cat: "🐱" } },
    { q: "Which is BIG?", a: "Bus", choices: ["Bus", "Car", "Bike"], icons: { Bus: "🚌", Car: "🚗", Bike: "🚲" } },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: item.icons,
  }));
}

const BUILDERS = { "ns-eng1": buildNsEng1, "ns-eng2": buildNsEng2 };
export const N_ENGLISH_QUESTION_COUNTS = { "ns-eng1": 6, "ns-eng2": 6 };
export function buildNsEnglishQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
