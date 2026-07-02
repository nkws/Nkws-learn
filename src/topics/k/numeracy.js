import { shuffle } from "../../utils/helpers";

// Kindergarten Numeracy — counting to 10 and 2D shapes. Picture-first: the
// prompt carries a [PIC:…] emoji and answers use large picture choices, so a
// pre-reader can play by listening + tapping.

export const K_NUMERACY_INTRO = {
  "kg-num1": {
    title: "Let's Count!",
    pages: [
      { text: "Counting tells us how many. Point to each one and say a number: one, two, three!", emoji: "🍎🍎🍎" },
      { text: "Listen to Koko, count the pictures, then tap the number. You can do it!", emoji: "🦊 🔢" },
    ],
  },
};

const SHAPE_ICONS = { Circle: "🔵", Triangle: "🔺", Square: "🟦", Star: "⭐", Heart: "❤️", Rectangle: "▬" };

function buildKgNum1() {
  return shuffle([
    { q: "[PIC:🍎🍎] How many do you see?", a: "2", choices: ["1", "2", "3"] },
    { q: "[PIC:⭐⭐⭐] How many do you see?", a: "3", choices: ["2", "3", "4"] },
    { q: "[PIC:🐟🐟🐟🐟] How many do you see?", a: "4", choices: ["3", "4", "5"] },
    { q: "[PIC:🍌🍌🍌🍌🍌] How many do you see?", a: "5", choices: ["4", "5", "6"] },
    { q: "[PIC:🌸🌸🌸🌸🌸🌸] How many do you see?", a: "6", choices: ["5", "6", "7"] },
    { q: "[PIC:🚗🚗🚗🚗🚗🚗🚗] How many do you see?", a: "7", choices: ["6", "7", "8"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildKgNum2() {
  return shuffle([
    { q: "[PIC:🔺] Which shape is this?", a: "Triangle", choices: ["Triangle", "Circle", "Square"] },
    { q: "[PIC:🔵] Which shape is this?", a: "Circle", choices: ["Circle", "Square", "Triangle"] },
    { q: "[PIC:🟦] Which shape is this?", a: "Square", choices: ["Square", "Circle", "Star"] },
    { q: "[PIC:⭐] Which shape is this?", a: "Star", choices: ["Star", "Heart", "Circle"] },
    { q: "[PIC:❤️] Which shape is this?", a: "Heart", choices: ["Heart", "Star", "Square"] },
    { q: "[PIC:▬] Which shape is this?", a: "Rectangle", choices: ["Rectangle", "Circle", "Triangle"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: SHAPE_ICONS,
  }));
}

const BUILDERS = { "kg-num1": buildKgNum1, "kg-num2": buildKgNum2 };
export const K_NUMERACY_QUESTION_COUNTS = { "kg-num1": 6, "kg-num2": 6 };
export function buildKgNumeracyQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
