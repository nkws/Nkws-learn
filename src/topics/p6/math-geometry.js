import { shuffle } from "../../utils/helpers";

export const P6_MATH_GEOMETRY_INTRO = {
  "p6m-ge1": {
    title: "Angles",
    pages: [
      { text: "Angles in a triangle always add up to 180°. Angles in a quadrilateral always add up to 360°.", emoji: "🔺 180° | ⬜ 360°" },
      { text: "Angles on a straight line add up to 180°. Angles at a point add up to 360°.", emoji: "— 180° | + 360°" },
      { text: "Vertically opposite angles are equal. When two lines cross, the angles across from each other match!", emoji: "✕ =" },
      { text: "An equilateral triangle has all angles 60°. An isosceles triangle has two equal angles.", emoji: "🔺 60° 60° 60°" },
    ],
  },
  "p6m-ar1": {
    title: "Area & Perimeter",
    pages: [
      { text: "Area of a rectangle = Length × Width. Perimeter = 2 × (Length + Width).", emoji: "L × W" },
      { text: "Area of a triangle = ½ × base × height. The height must be perpendicular to the base!", emoji: "½ × b × h" },
      { text: "For composite shapes, split them into rectangles and triangles, find each area, then add.", emoji: "📐 + 📐" },
    ],
  },
};

function buildP6mGe1() {
  return shuffle([
    { q: "The sum of angles in a triangle is?", a: "180°", choices: ["180°", "360°", "90°"] },
    { q: "The sum of angles in a quadrilateral is?", a: "360°", choices: ["360°", "180°", "270°"] },
    { q: "Two angles of a triangle are 60° and 80°. What is the third angle?", a: "40°", choices: ["40°", "60°", "20°"] },
    { q: "Three angles of a quadrilateral are 100°, 85° and 95°. What is the fourth angle?", a: "80°", choices: ["80°", "90°", "70°"] },
    { q: "Each angle of an equilateral triangle is?", a: "60°", choices: ["60°", "90°", "45°"] },
    { q: "In an isosceles triangle, the two base angles are each 70°. What is the angle at the top?", a: "40°", choices: ["40°", "70°", "110°"] },
    { q: "Angles on a straight line add up to?", a: "180°", choices: ["180°", "360°", "90°"] },
    { q: "Two angles on a straight line are x° and 130°. What is x?", a: "50°", choices: ["50°", "130°", "230°"] },
    { q: "Vertically opposite angles are always?", a: "Equal", choices: ["Equal", "Supplementary", "90°"] },
    { q: "At a point, three angles are 90°, 120° and 60°. What is the fourth angle?", a: "90°", choices: ["90°", "80°", "110°"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6mAr1() {
  return shuffle([
    { q: "A rectangle is 8 cm long and 5 cm wide. What is its area?", a: "40 cm²", choices: ["40 cm²", "26 cm²", "13 cm²"] },
    { q: "What is the perimeter of a square with side 6 cm?", a: "24 cm", choices: ["24 cm", "36 cm", "12 cm"] },
    { q: "A triangle has a base of 10 cm and a height of 6 cm. What is its area?", a: "30 cm²", choices: ["30 cm²", "60 cm²", "16 cm²"] },
    { q: "A rectangular garden is 12 m long and 8 m wide. What is its perimeter?", a: "40 m", choices: ["40 m", "96 m", "20 m"] },
    { q: "An L-shaped figure is made of two rectangles: 6 cm × 4 cm and 3 cm × 2 cm. What is the total area?", a: "30 cm²", choices: ["30 cm²", "48 cm²", "15 cm²"] },
    { q: "The area of a rectangle is 48 cm². If the length is 8 cm, what is the width?", a: "6 cm", choices: ["6 cm", "40 cm", "56 cm"] },
    { q: "A right triangle has legs of 6 cm and 8 cm. What is its area?", a: "24 cm²", choices: ["24 cm²", "48 cm²", "14 cm²"] },
    { q: "A square field has an area of 64 m². What is its perimeter?", a: "32 m", choices: ["32 m", "16 m", "64 m"] },
    { q: "Half of a rectangle 10 cm by 6 cm is cut diagonally. What is the area of the triangle?", a: "30 cm²", choices: ["30 cm²", "60 cm²", "16 cm²"] },
    { q: "A rectangular pool is 25 m by 10 m. What is its area?", a: "250 m²", choices: ["250 m²", "70 m²", "35 m²"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6mNe1() {
  return shuffle([
    { q: "A cube has how many faces?", a: "6", choices: ["6", "4", "8"] },
    { q: "A cube net is made up of how many squares?", a: "6", choices: ["6", "4", "8"] },
    { q: "When a cube net is folded, opposite faces are?", a: "Parallel and never touching", choices: ["Parallel and never touching", "Always next to each other", "The same size only"] },
    { q: "A cuboid has 3 pairs of identical faces. How many different rectangles are in its net?", a: "3 pairs (6 faces)", choices: ["3 pairs (6 faces)", "3 faces total", "6 different shapes"] },
    { q: "If each face of a cube has area 9 cm², the total surface area is?", a: "54 cm²", choices: ["54 cm²", "36 cm²", "81 cm²"] },
    { q: "A cuboid is 5 cm × 3 cm × 2 cm. What is its total surface area?", a: "62 cm²", choices: ["62 cm²", "30 cm²", "31 cm²"] },
    { q: "A cube has a total surface area of 96 cm². What is the area of one face?", a: "16 cm²", choices: ["16 cm²", "96 cm²", "48 cm²"] },
    { q: "A cube has a surface area of 150 cm². What is the length of one side?", a: "5 cm", choices: ["5 cm", "25 cm", "15 cm"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6m-ge1": buildP6mGe1, "p6m-ar1": buildP6mAr1, "p6m-ne1": buildP6mNe1 };
export const P6_MATH_GEOMETRY_QUESTION_COUNTS = { "p6m-ge1": 10, "p6m-ar1": 10, "p6m-ne1": 8 };
export function buildMathGeometryQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
