import { shuffle } from "../../utils/helpers";

export const P2_MATH_EXTENDED_INTRO = {
  "p2m-as1": {
    title: "Addition & Subtraction to 1000",
    pages: [
      { text: "Now we work with bigger numbers — up to 1000! Use place value: hundreds, tens, ones.", emoji: "📐 HTU" },
      { text: "Example: 345 + 123 = 468. Line up hundreds, tens, ones and add each column!", emoji: "345 + 123 = 468" },
      { text: "For subtraction with regrouping: 402 − 135. Borrow from the hundreds!", emoji: "402 − 135 = 267" },
    ],
  },
  "p2m-tm1": {
    title: "Telling Time",
    pages: [
      { text: "The short hand shows the HOUR. The long hand shows the MINUTES.", emoji: "🕐" },
      { text: "When the long hand is on 6, it is 'half past'. When on 3, it is 'quarter past'. When on 9, it is 'quarter to'.", emoji: "🕧 half past" },
    ],
  },
  "p2m-sh1": {
    title: "Shapes",
    pages: [
      { text: "2D shapes are flat: circle, triangle, square, rectangle, pentagon, hexagon.", emoji: "⬜ 🔺 ⬠" },
      { text: "3D shapes are solid: cube, cuboid, sphere, cylinder, cone, pyramid.", emoji: "🎲 📦 ⚽" },
    ],
  },
};

function buildP2mAs1() {
  return shuffle([
    { q: "345 + 123 = ?", a: "468", choices: ["468", "458", "478"] },
    { q: "256 + 144 = ?", a: "400", choices: ["400", "300", "410"] },
    { q: "500 − 238 = ?", a: "262", choices: ["262", "272", "362"] },
    { q: "189 + 211 = ?", a: "400", choices: ["400", "390", "410"] },
    { q: "703 − 456 = ?", a: "247", choices: ["247", "257", "347"] },
    { q: "What is 100 more than 645?", a: "745", choices: ["745", "655", "645"] },
    { q: "What is 10 less than 300?", a: "290", choices: ["290", "200", "299"] },
    { q: "Ali has 350 stickers. He gets 175 more. How many now?", a: "525", choices: ["525", "515", "535"] },
    { q: "A school has 480 students. 195 are in the hall. How many are not?", a: "285", choices: ["285", "295", "275"] },
    { q: "Round 467 to the nearest hundred.", a: "500", choices: ["500", "400", "470"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP2mTm1() {
  return shuffle([
    { q: "What time does [CLOCK:3:00] show?", a: "3 o'clock", choices: ["3 o'clock", "12:15", "6 o'clock"] },
    { q: "What time does [CLOCK:6:30] show?", a: "Half past 6", choices: ["Half past 6", "6 o'clock", "Half past 12"] },
    { q: "What time does [CLOCK:9:15] show?", a: "Quarter past 9", choices: ["Quarter past 9", "Quarter to 9", "9 o'clock"] },
    { q: "What time does [CLOCK:4:45] show?", a: "Quarter to 5", choices: ["Quarter to 5", "Quarter past 4", "Half past 4"] },
    { q: "30 minutes after 2 o'clock is?", a: "Half past 2", choices: ["Half past 2", "3 o'clock", "2:03"] },
    { q: "1 hour before 10 o'clock is?", a: "9 o'clock", choices: ["9 o'clock", "11 o'clock", "10:01"] },
    { q: "How many minutes in 1 hour?", a: "60", choices: ["60", "30", "100"] },
    { q: "How many hours in 1 day?", a: "24", choices: ["24", "12", "60"] },
    { q: "If it is 7:30 now, what time will it be in 2 hours?", a: "9:30", choices: ["9:30", "7:32", "10:30"] },
    { q: "What time does [CLOCK:12:00] show?", a: "12 o'clock", choices: ["12 o'clock", "6 o'clock", "12:30"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP2mSh1() {
  return shuffle([
    { q: "How many sides does a pentagon have?", a: "5", choices: ["5", "4", "6"] },
    { q: "How many sides does a hexagon have?", a: "6", choices: ["6", "5", "8"] },
    { q: "A 3D shape with 6 square faces is a?", a: "Cube", choices: ["Cube", "Cuboid", "Pyramid"] },
    { q: "A ball is shaped like a?", a: "Sphere", choices: ["Sphere", "Circle", "Cylinder"] },
    { q: "Which shape has NO straight edges?", a: "Circle", choices: ["Circle", "Square", "Triangle"] },
    { q: "A can of beans is shaped like a?", a: "Cylinder", choices: ["Cylinder", "Cube", "Cone"] },
    { q: "How many corners does a rectangle have?", a: "4", choices: ["4", "2", "3"] },
    { q: "A pyramid has a square base and how many triangular faces?", a: "4", choices: ["4", "3", "5"] },
    { q: "Which 3D shape can roll AND slide?", a: "Cylinder", choices: ["Cylinder", "Cube", "Pyramid"] },
    { q: "A cuboid has how many faces?", a: "6", choices: ["6", "4", "8"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p2m-as1": buildP2mAs1, "p2m-tm1": buildP2mTm1, "p2m-sh1": buildP2mSh1 };
export const P2_MATH_EXTENDED_QUESTION_COUNTS = { "p2m-as1": 10, "p2m-tm1": 10, "p2m-sh1": 10 };
export function buildMathExtended2Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
