import { shuffle } from "../../utils/helpers";

export const P5_MATH_EXTENDED_INTRO = {
  "p5m-de1": {
    title: "Decimals",
    pages: [
      { text: "Decimals let us express parts of a whole using the decimal point: 0.5 = ½, 0.25 = ¼.", emoji: "0.5 = ½" },
      { text: "Add/subtract decimals: line up the decimal points! 3.45 + 1.2 = 3.45 + 1.20 = 4.65.", emoji: "📐 ." },
    ],
  },
  "p5m-av1": {
    title: "Average",
    pages: [
      { text: "Average (mean) = Total ÷ Number of items. If scores are 70, 80, 90, average = 240 ÷ 3 = 80.", emoji: "📊 ÷" },
      { text: "If you know the average and the count, you can find the total: Average × Count = Total.", emoji: "Avg × N = Total" },
    ],
  },
  "p5m-vo1": {
    title: "Volume",
    pages: [
      { text: "Volume = Length × Width × Height. A box 4 cm × 3 cm × 2 cm has 24 cm³ of space.", emoji: "📦 L × W × H" },
      { text: "1 litre = 1000 cm³. A 10 × 10 × 10 cm container holds exactly 1 litre!", emoji: "1 L = 1000 cm³" },
    ],
  },
};

function buildP5mDe1() {
  return shuffle([
    { q: "3.45 + 1.2 = ?", a: "4.65", choices: ["4.65", "4.47", "3.57"] },
    { q: "5.0 − 2.35 = ?", a: "2.65", choices: ["2.65", "2.75", "3.35"] },
    { q: "0.6 × 4 = ?", a: "2.4", choices: ["2.4", "0.24", "24"] },
    { q: "7.2 ÷ 3 = ?", a: "2.4", choices: ["2.4", "4.2", "21.6"] },
    { q: "Which is bigger: 0.45 or 0.5?", a: "0.5", choices: ["0.5", "0.45", "Same"] },
    { q: "Round 3.467 to 2 decimal places.", a: "3.47", choices: ["3.47", "3.46", "3.50"] },
    { q: "Convert 3/8 to a decimal.", a: "0.375", choices: ["0.375", "0.38", "0.83"] },
    { q: "2.5 × 0.4 = ?", a: "1.0", choices: ["1.0", "10.0", "0.1"] },
    { q: "Order from smallest: 0.3, 0.03, 0.33", a: "0.03, 0.3, 0.33", choices: ["0.03, 0.3, 0.33", "0.3, 0.03, 0.33", "0.33, 0.3, 0.03"] },
    { q: "8.1 ÷ 0.3 = ?", a: "27", choices: ["27", "2.7", "270"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5mAv1() {
  return shuffle([
    { q: "The average of 10, 20 and 30 is?", a: "20", choices: ["20", "30", "60"] },
    { q: "Tom scored 70, 80 and 90 on three tests. What is his average?", a: "80", choices: ["80", "90", "70"] },
    { q: "The average of 4 numbers is 15. What is the total?", a: "60", choices: ["60", "15", "19"] },
    { q: "5 students weigh 40, 42, 38, 45 and 35 kg. What is their average?", a: "40 kg", choices: ["40 kg", "42 kg", "38 kg"] },
    { q: "The average of 3 numbers is 12. Two numbers are 10 and 8. What is the third?", a: "18", choices: ["18", "12", "14"] },
    { q: "6 books cost an average of $8 each. What is the total cost?", a: "$48", choices: ["$48", "$8", "$14"] },
    { q: "The average height of 4 children is 130 cm. What is their total height?", a: "520 cm", choices: ["520 cm", "130 cm", "34 cm"] },
    { q: "Average = ?", a: "Total ÷ Number of items", choices: ["Total ÷ Number of items", "Total × Number of items", "Total + Number of items"] },
    { q: "Sam scored 60, 70, 80 and 90. What is his average?", a: "75", choices: ["75", "80", "70"] },
    { q: "The average of 5 numbers is 20. If one number is removed and the average becomes 18, what was the removed number?", a: "28", choices: ["28", "20", "22"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5mVo1() {
  return shuffle([
    { q: "A box is 4 cm long, 3 cm wide and 2 cm high. What is its volume?", a: "24 cm³", choices: ["24 cm³", "9 cm³", "18 cm³"] },
    { q: "Volume of a cuboid = ?", a: "Length × Width × Height", choices: ["Length × Width × Height", "Length + Width + Height", "Length × Width"] },
    { q: "A cube has side 5 cm. What is its volume?", a: "125 cm³", choices: ["125 cm³", "25 cm³", "15 cm³"] },
    { q: "How many cm³ in 1 litre?", a: "1000", choices: ["1000", "100", "10"] },
    { q: "A tank is 30 cm × 20 cm × 10 cm. How many litres does it hold?", a: "6 litres", choices: ["6 litres", "60 litres", "600 litres"] },
    { q: "A cuboid has volume 60 cm³. Its base is 5 cm × 4 cm. What is the height?", a: "3 cm", choices: ["3 cm", "12 cm", "20 cm"] },
    { q: "A cube has volume 64 cm³. What is the length of one side?", a: "4 cm", choices: ["4 cm", "8 cm", "16 cm"] },
    { q: "A container is 25 cm × 20 cm × 16 cm. What is its volume?", a: "8000 cm³", choices: ["8000 cm³", "61 cm³", "800 cm³"] },
    { q: "A fish tank holds 12 litres. How many cm³ is that?", a: "12 000 cm³", choices: ["12 000 cm³", "1200 cm³", "120 cm³"] },
    { q: "A cuboid is 10 cm × 8 cm × 5 cm. It is half full of water. What volume of water?", a: "200 cm³", choices: ["200 cm³", "400 cm³", "100 cm³"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5m-de1": buildP5mDe1, "p5m-av1": buildP5mAv1, "p5m-vo1": buildP5mVo1 };
export const P5_MATH_EXTENDED_QUESTION_COUNTS = { "p5m-de1": 10, "p5m-av1": 10, "p5m-vo1": 10 };
export function buildMathExtended5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
