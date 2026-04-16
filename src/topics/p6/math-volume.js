import { shuffle } from "../../utils/helpers";

export const P6_MATH_VOLUME_INTRO = {
  "p6m-vo1": {
    title: "Volume of Cubes & Cuboids",
    pages: [
      { text: "Volume tells us how much space a 3D shape takes up. We measure it in cubic units (cm³, m³).", emoji: "📦" },
      { text: "Volume of a cuboid = Length × Width × Height. So a 5 × 3 × 2 cm box has 30 cm³ of space.", emoji: "L × W × H" },
      { text: "A cube has all sides equal. Volume of a cube = Side × Side × Side. A cube with side 4 cm has 64 cm³.", emoji: "S × S × S" },
      { text: "1 litre of liquid fills a 10 cm × 10 cm × 10 cm container. So 1 litre = 1000 cm³.", emoji: "1 L = 1000 cm³" },
      { text: "If you know the volume and TWO dimensions, divide to find the missing one. Volume ÷ (L × W) = H.", emoji: "V ÷ LW = H" },
    ],
  },
};

function buildP6mVo1() {
  return shuffle([
    { q: "A cuboid is 5 cm long, 4 cm wide and 3 cm high. What is its volume?", a: "60 cm³", choices: ["60 cm³", "12 cm³", "47 cm³"] },
    { q: "A cube has a side length of 6 cm. What is its volume?", a: "216 cm³", choices: ["216 cm³", "36 cm³", "18 cm³"] },
    { q: "Volume of a cuboid = ?", a: "Length × Width × Height", choices: ["Length × Width × Height", "Length + Width + Height", "Length × Width"] },
    { q: "How many cubic centimetres are in 1 litre?", a: "1000 cm³", choices: ["1000 cm³", "100 cm³", "10 cm³"] },
    { q: "A box has a volume of 120 cm³. If its base is 5 cm × 4 cm, what is its height?", a: "6 cm", choices: ["6 cm", "20 cm", "24 cm"] },
    { q: "A cube has a volume of 125 cm³. What is the length of one side?", a: "5 cm", choices: ["5 cm", "25 cm", "15 cm"] },
    { q: "A water tank is 50 cm long, 30 cm wide and 20 cm high. How many litres can it hold when full?", a: "30 litres", choices: ["30 litres", "300 litres", "3 litres"] },
    { q: "What is the volume of a cube with side 10 cm?", a: "1000 cm³", choices: ["1000 cm³", "100 cm³", "300 cm³"] },
    { q: "A cuboid has dimensions 8 cm × 5 cm × 4 cm. Its volume is?", a: "160 cm³", choices: ["160 cm³", "17 cm³", "200 cm³"] },
    { q: "A rectangular tank holds 24 litres of water. If it is 40 cm long and 30 cm wide, what is the water depth?", a: "20 cm", choices: ["20 cm", "2 cm", "200 cm"] },
    { q: "If a cube's side is doubled, its volume becomes ___ times bigger.", a: "8", choices: ["8", "2", "4"] },
    { q: "A cuboid container is 20 cm × 10 cm × 15 cm. It is half full of water. How much water is in it?", a: "1500 cm³", choices: ["1500 cm³", "3000 cm³", "750 cm³"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6m-vo1": buildP6mVo1 };
export const P6_MATH_VOLUME_QUESTION_COUNTS = { "p6m-vo1": 12 };
export function buildMathVolumeQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
