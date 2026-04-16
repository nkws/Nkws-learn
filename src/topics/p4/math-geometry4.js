import { shuffle } from "../../utils/helpers";

export const P4_MATH_GEOMETRY4_INTRO = {
  "p4m-ge1": {
    title: "Angles & Symmetry",
    pages: [
      { text: "Angles measure how much a turn is. We use degrees (°). A right angle = 90°.", emoji: "📐 90°" },
      { text: "Acute angle: < 90°. Obtuse angle: > 90° but < 180°. Straight angle = 180°.", emoji: "< 90° | > 90°" },
      { text: "A line of symmetry divides a shape into two matching halves.", emoji: "🦋 ←|→" },
    ],
  },
  "p4m-ar1": {
    title: "Area & Perimeter",
    pages: [
      { text: "Perimeter = total distance around a shape. For a rectangle: 2 × (length + width).", emoji: "↔ ↕ = perimeter" },
      { text: "Area = space inside a shape. For a rectangle: length × width. Measured in cm² or m².", emoji: "L × W = area" },
    ],
  },
};

function buildP4mGe1() {
  return shuffle([
    { q: "A right angle is?", a: "90°", choices: ["90°", "180°", "45°"] },
    { q: "An angle of 60° is called?", a: "Acute", choices: ["Acute", "Obtuse", "Right"] },
    { q: "An angle of 120° is called?", a: "Obtuse", choices: ["Obtuse", "Acute", "Reflex"] },
    { q: "A straight angle is?", a: "180°", choices: ["180°", "90°", "360°"] },
    { q: "How many right angles does a square have?", a: "4", choices: ["4", "2", "1"] },
    { q: "How many lines of symmetry does a square have?", a: "4", choices: ["4", "2", "1"] },
    { q: "How many lines of symmetry does a circle have?", a: "Infinite (unlimited)", choices: ["Infinite (unlimited)", "4", "1"] },
    { q: "How many lines of symmetry does the letter A have?", a: "1", choices: ["1", "2", "0"] },
    { q: "A rectangle has how many lines of symmetry?", a: "2", choices: ["2", "4", "1"] },
    { q: "Which shape has NO lines of symmetry?", a: "Scalene triangle", choices: ["Scalene triangle", "Square", "Circle"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4mAr1() {
  return shuffle([
    { q: "A rectangle is 6 cm long and 4 cm wide. What is its perimeter?", a: "20 cm", choices: ["20 cm", "24 cm", "10 cm"] },
    { q: "A rectangle is 6 cm long and 4 cm wide. What is its area?", a: "24 cm²", choices: ["24 cm²", "20 cm²", "10 cm²"] },
    { q: "A square has side 5 cm. What is its perimeter?", a: "20 cm", choices: ["20 cm", "25 cm", "10 cm"] },
    { q: "A square has side 5 cm. What is its area?", a: "25 cm²", choices: ["25 cm²", "20 cm²", "10 cm²"] },
    { q: "A garden is 10 m by 8 m. How much fencing is needed?", a: "36 m", choices: ["36 m", "80 m", "18 m"] },
    { q: "A room is 5 m by 4 m. What is its floor area?", a: "20 m²", choices: ["20 m²", "18 m²", "9 m²"] },
    { q: "Perimeter of a rectangle = ?", a: "2 × (length + width)", choices: ["2 × (length + width)", "length × width", "length + width"] },
    { q: "A rectangle has area 30 cm² and length 6 cm. What is its width?", a: "5 cm", choices: ["5 cm", "24 cm", "36 cm"] },
    { q: "A square has perimeter 32 cm. What is the length of one side?", a: "8 cm", choices: ["8 cm", "16 cm", "32 cm"] },
    { q: "An L-shape is made of two rectangles: 4×3 and 2×3. What is the total area?", a: "18 cm²", choices: ["18 cm²", "12 cm²", "24 cm²"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4mTg1() {
  return shuffle([
    { q: "In a table, what do the rows and columns show?", a: "Categories and values", choices: ["Categories and values", "Only numbers", "Only words"] },
    { q: "A bar graph shows: Math 20, English 15, Science 25. Which subject has the most students?", a: "Science", choices: ["Science", "Math", "English"] },
    { q: "In the same graph, how many more chose Science than English?", a: "10", choices: ["10", "5", "25"] },
    { q: "A line graph shows temperature rising from 25°C to 32°C. What is the increase?", a: "7°C", choices: ["7°C", "57°C", "32°C"] },
    { q: "In a bar graph, taller bars mean?", a: "Higher values", choices: ["Higher values", "Lower values", "Same values"] },
    { q: "A table shows: Mon 5, Tue 8, Wed 3, Thu 10, Fri 4. Total for the week?", a: "30", choices: ["30", "26", "35"] },
    { q: "In the same table, which day had the most?", a: "Thursday", choices: ["Thursday", "Tuesday", "Monday"] },
    { q: "A line graph slopes upward. This means the value is?", a: "Increasing", choices: ["Increasing", "Decreasing", "Staying the same"] },
    { q: "A bar graph shows 40 students chose swimming and 25 chose running. How many more chose swimming?", a: "15", choices: ["15", "65", "10"] },
    { q: "A table shows 3 classes with 38, 42, and 40 students. What is the total?", a: "120", choices: ["120", "110", "130"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4m-ge1": buildP4mGe1, "p4m-ar1": buildP4mAr1, "p4m-tg1": buildP4mTg1 };
export const P4_MATH_GEOMETRY4_QUESTION_COUNTS = { "p4m-ge1": 10, "p4m-ar1": 10, "p4m-tg1": 10 };
export function buildMathGeometry4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
