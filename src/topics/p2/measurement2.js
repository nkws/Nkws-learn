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
    { q: "A pencil is about __ cm long?", a: "15", choices: ["5", "15", "50"], explain: "Centimetres measure short things, about a finger-width each. A new pencil is about 15 cm; 50 cm would be longer than your arm." },
    { q: "An eraser is about __ cm long?", a: "5", choices: ["2", "5", "15"], explain: "A centimetre is about a finger-width. A small eraser is around 5 cm; 15 cm would be as long as a whole pencil." },
    { q: "A ruler is usually __ cm long?", a: "30", choices: ["10", "30", "100"], explain: "Centimetres measure short lengths. A school ruler is 30 cm long; 100 cm would be a whole metre, far too long." },
    { q: "Your hand span is about __ cm?", a: "15", choices: ["5", "15", "30"], explain: "Estimate length by picturing the object. A spread hand is about 15 cm wide; 5 cm is just a couple of fingers." },
    { q: "A crayon is about __ cm long?", a: "8", choices: ["3", "8", "20"], explain: "Centimetres measure small lengths. A crayon is about 8 cm; 20 cm would be longer than your hand." },
    { q: "What tool do we use to measure centimetres?", a: "Ruler", choices: ["Ruler", "Scale", "Clock"], explain: "Each tool measures one thing. A ruler measures length in centimetres; a scale measures weight and a clock measures time." },
    { q: "How many centimetres in 1 metre?", a: "100", choices: ["10", "100", "1000"], explain: "A metre is the bigger length unit, made of 100 equal centimetres. So 1 m = 100 cm, used for longer things." },
    { q: "A paper clip is about __ cm long?", a: "3", choices: ["1", "3", "10"], explain: "Centimetres measure small things. A paper clip is about 3 cm; 10 cm would be the length of your whole hand." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMs2() {
  // Metres
  return shuffle([
    { q: "A classroom door is about __ m tall?", a: "2", choices: ["1", "2", "5"], explain: "Metres measure longer things, each about a big step. A door is a bit taller than an adult, about 2 m; 5 m would be a two-storey wall." },
    { q: "A swimming pool is about __ m long?", a: "50", choices: ["10", "50", "100"], explain: "Metres measure big lengths. A long swimming pool is about 50 m; 100 m would be the length of a running track." },
    { q: "A car is about __ m long?", a: "4", choices: ["2", "4", "10"], explain: "Picture the object to estimate. A car is about 4 m long; 10 m would be longer than a small bus." },
    { q: "A classroom is about __ m wide?", a: "8", choices: ["3", "8", "20"], explain: "Metres measure room-sized lengths. A classroom is about 8 m wide; 20 m would be wider than a swimming pool." },
    { q: "A tall tree is about __ m tall?", a: "10", choices: ["3", "10", "50"], explain: "Metres measure tall things. A big tree is about 10 m; 50 m would be as tall as a skyscraper." },
    { q: "A bus is about __ m long?", a: "12", choices: ["5", "12", "30"], explain: "Estimate by picturing the bus. A long bus is about 12 m; 30 m would be longer than three buses." },
    { q: "Your height is about __ m?", a: "1", choices: ["1", "3", "5"], explain: "A metre is about a big step. A young child stands around 1 m tall; 3 m would be taller than a doorway." },
    { q: "Which is longer: 1 m or 50 cm?", a: "1 m", choices: ["1 m", "50 cm", "Same"], explain: "Compare using the same unit: 1 m is 100 cm. Since 100 cm is more than 50 cm, 1 m is longer." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMs3() {
  // Kilograms
  return shuffle([
    { q: "A bag of rice weighs about __ kg?", a: "5", choices: ["1", "5", "20"], explain: "Kilograms measure how heavy things are. A bag of rice is about 5 kg; 20 kg would be too heavy for a child to lift." },
    { q: "A watermelon weighs about __ kg?", a: "3", choices: ["1", "3", "10"], explain: "Estimate weight by imagining holding it. A watermelon is about 3 kg; 10 kg would be as heavy as a big bag of rice." },
    { q: "A newborn baby weighs about __ kg?", a: "3", choices: ["1", "3", "10"], explain: "Kilograms measure weight. A newborn baby is about 3 kg; 10 kg would be the weight of a toddler." },
    { q: "A bag of sugar weighs about __ kg?", a: "1", choices: ["1", "5", "10"], explain: "Kilograms measure weight. A small bag of sugar is about 1 kg; 10 kg would be a very big sack." },
    { q: "What do we use to measure weight?", a: "A scale", choices: ["A ruler", "A scale", "A clock"], explain: "Each tool measures one thing. A scale measures weight; a ruler measures length and a clock measures time." },
    { q: "Which is heavier: 2 kg or 5 kg?", a: "5 kg", choices: ["2 kg", "5 kg", "Same"], explain: "More kilograms means heavier. Since 5 is more than 2, 5 kg is the heavier weight." },
    { q: "A chicken egg weighs about __ g? (hint: less than 1 kg)", a: "60", choices: ["10", "60", "200"], explain: "Grams measure light things, and 1000 g make 1 kg. An egg is light, about 60 g; 200 g would be much heavier." },
    { q: "1 kg equals __ g?", a: "1000", choices: ["100", "500", "1000"], explain: "A kilogram is the bigger weight unit, made of 1000 equal grams. So 1 kg = 1000 g, used for heavier things." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
