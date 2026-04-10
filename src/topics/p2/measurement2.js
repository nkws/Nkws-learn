import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P2_MEASUREMENT2_INTRO = {
  "p2m-ms1": {
    title: "Centimetres",
    pages: [
      { text: "We measure short things in centimetres (cm). A centimetre is about the width of your little finger!", emoji: "📏 cm" },
      { text: "A pencil is about 15 cm long. An eraser is about 5 cm long.", emoji: "✏️ 15 cm" },
      { text: "We use a ruler to measure centimetres.", emoji: "📐" },
      { text: "We also use metres (m) for longer things. 100 cm = 1 m!", emoji: "100 cm = 1 m" },
      { text: "Let's learn about measuring! You can do it!", emoji: "🦊 📏 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildMs1() {
  return shuffle([
    { q: "A pencil is about __ cm long?", a: "15", choices: ["5", "15", "50"] },
    { q: "An eraser is about __ cm long?", a: "5", choices: ["2", "5", "15"] },
    { q: "A ruler is usually __ cm long?", a: "30", choices: ["10", "30", "100"] },
    { q: "Your hand span is about __ cm?", a: "15", choices: ["5", "15", "30"] },
    { q: "A crayon is about __ cm long?", a: "8", choices: ["3", "8", "20"] },
    { q: "What tool do we use to measure centimetres?", a: "Ruler", choices: ["Ruler", "Scale", "Clock"] },
    { q: "How many centimetres in 1 metre?", a: "100", choices: ["10", "100", "1000"] },
    { q: "A paper clip is about __ cm long?", a: "3", choices: ["1", "3", "10"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMs2() {
  // Metres
  return shuffle([
    { q: "A classroom door is about __ m tall?", a: "2", choices: ["1", "2", "5"] },
    { q: "A swimming pool is about __ m long?", a: "50", choices: ["10", "50", "100"] },
    { q: "A car is about __ m long?", a: "4", choices: ["2", "4", "10"] },
    { q: "A classroom is about __ m wide?", a: "8", choices: ["3", "8", "20"] },
    { q: "A tall tree is about __ m tall?", a: "10", choices: ["3", "10", "50"] },
    { q: "A bus is about __ m long?", a: "12", choices: ["5", "12", "30"] },
    { q: "Your height is about __ m?", a: "1", choices: ["1", "3", "5"] },
    { q: "Which is longer: 1 m or 50 cm?", a: "1 m", choices: ["1 m", "50 cm", "Same"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMs3() {
  // Kilograms
  return shuffle([
    { q: "A bag of rice weighs about __ kg?", a: "5", choices: ["1", "5", "20"] },
    { q: "A watermelon weighs about __ kg?", a: "3", choices: ["1", "3", "10"] },
    { q: "A newborn baby weighs about __ kg?", a: "3", choices: ["1", "3", "10"] },
    { q: "A bag of sugar weighs about __ kg?", a: "1", choices: ["1", "5", "10"] },
    { q: "What do we use to measure weight?", a: "A scale", choices: ["A ruler", "A scale", "A clock"] },
    { q: "Which is heavier: 2 kg or 5 kg?", a: "5 kg", choices: ["2 kg", "5 kg", "Same"] },
    { q: "A chicken egg weighs about __ g? (hint: less than 1 kg)", a: "60", choices: ["10", "60", "200"] },
    { q: "1 kg equals __ g?", a: "1000", choices: ["100", "500", "1000"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "p2m-ms1": buildMs1, "p2m-ms2": buildMs2, "p2m-ms3": buildMs3,
};

export const P2_MEASUREMENT2_QUESTION_COUNTS = {
  "p2m-ms1": 8, "p2m-ms2": 8, "p2m-ms3": 8,
};

export function buildMeasurement2Questions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
