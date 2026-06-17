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
    { q: "[CUBOID:cuboid-5-4-3] A cuboid is 5 cm long, 4 cm wide and 3 cm high. What is its volume?", a: "60 cm³", choices: ["60 cm³", "12 cm³", "47 cm³"], explain: "Volume is the space inside, found by multiplying all three dimensions — not adding them: length × breadth × height = 5 × 4 × 3 = 60 cm³." },
    { q: "[CUBOID:cube-side-6] A cube has a side length of 6 cm. What is its volume?", a: "216 cm³", choices: ["216 cm³", "36 cm³", "18 cm³"], explain: "A cube has all sides equal, so volume = side × side × side. Multiply the side three times: 6 × 6 × 6 = 216 cm³ (not 6 × 3)." },
    { q: "Volume of a cuboid = ?", a: "Length × Width × Height", choices: ["Length × Width × Height", "Length + Width + Height", "Length × Width"], explain: "Volume measures the space a box fills in three directions, so you multiply all three: Length × Width × Height. Adding them would only count edges, not space." },
    { q: "How many cubic centimetres are in 1 litre?", a: "1000 cm³", choices: ["1000 cm³", "100 cm³", "10 cm³"], explain: "1 litre fills a 10 cm × 10 cm × 10 cm cube, and 10 × 10 × 10 = 1000, so 1 litre = 1000 cm³. This link lets you switch between volume and capacity." },
    { q: "[CUBOID:cuboid-find-height] A box has a volume of 120 cm³. If its base is 5 cm × 4 cm, what is its height?", a: "6 cm", choices: ["6 cm", "20 cm", "24 cm"], explain: "Volume = base area × height, so to find a missing dimension you divide. Base = 5 × 4 = 20 cm², then height = 120 ÷ 20 = 6 cm." },
    { q: "A cube has a volume of 125 cm³. What is the length of one side?", a: "5 cm", choices: ["5 cm", "25 cm", "15 cm"], explain: "Since a cube's volume is side × side × side, working backwards means finding the number that cubes to 125. 5 × 5 × 5 = 125, so the side is 5 cm." },
    { q: "A water tank is 50 cm long, 30 cm wide and 20 cm high. How many litres can it hold when full?", a: "30 litres", choices: ["30 litres", "300 litres", "3 litres"], explain: "First find the volume in cm³: 50 × 30 × 20 = 30000 cm³. Then use 1 litre = 1000 cm³ to convert: 30000 ÷ 1000 = 30 litres." },
    { q: "What is the volume of a cube with side 10 cm?", a: "1000 cm³", choices: ["1000 cm³", "100 cm³", "300 cm³"], explain: "Volume of a cube = side × side × side, so multiply 10 three times: 10 × 10 × 10 = 1000 cm³ (10 × 10 alone gives only the area of one face)." },
    { q: "A cuboid has dimensions 8 cm × 5 cm × 4 cm. Its volume is?", a: "160 cm³", choices: ["160 cm³", "17 cm³", "200 cm³"], explain: "Volume of a cuboid = length × breadth × height, so multiply all three: 8 × 5 × 4 = 160 cm³. Adding them (17) measures edges, not space." },
    { q: "A rectangular tank holds 24 litres of water. If it is 40 cm long and 30 cm wide, what is the water depth?", a: "20 cm", choices: ["20 cm", "2 cm", "200 cm"], explain: "Convert capacity to volume first: 24 litres = 24 × 1000 = 24000 cm³. Depth = volume ÷ base area = 24000 ÷ (40 × 30) = 24000 ÷ 1200 = 20 cm." },
    { q: "[CUBOID:cube-doubled] If a cube's side is doubled, its volume becomes ___ times bigger.", a: "8", choices: ["8", "2", "4"], explain: "Volume depends on the side three times (side × side × side), so doubling the side multiplies the volume by 2 × 2 × 2 = 8 — not just 2." },
    { q: "A cuboid container is 20 cm × 10 cm × 15 cm. It is half full of water. How much water is in it?", a: "1500 cm³", choices: ["1500 cm³", "3000 cm³", "750 cm³"], explain: "Find the full volume first, then take the fraction filled. Full = 20 × 10 × 15 = 3000 cm³, and half of that is 3000 ÷ 2 = 1500 cm³." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6m-vo1": buildP6mVo1 };
export const P6_MATH_VOLUME_QUESTION_COUNTS = { "p6m-vo1": 12 };
export function buildMathVolumeQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
