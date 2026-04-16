import { shuffle } from "../../utils/helpers";

export const P5_MATH_GEOMETRY_INTRO = {
  "p5m-an1": {
    title: "Angles",
    pages: [
      { text: "Angles on a straight line add up to 180°. Angles at a point add up to 360°.", emoji: "— 180° | + 360°" },
      { text: "Use a protractor to measure angles. Acute < 90°, right = 90°, obtuse > 90°.", emoji: "📐" },
    ],
  },
  "p5m-tr1": {
    title: "Triangles",
    pages: [
      { text: "Triangles have 3 sides and 3 angles that add up to 180°.", emoji: "🔺 = 180°" },
      { text: "Equilateral: all sides equal, all 60°. Isosceles: 2 sides equal, 2 angles equal. Scalene: all different.", emoji: "△ △ △" },
      { text: "Area of a triangle = ½ × base × height. The height must be perpendicular to the base!", emoji: "½ × b × h" },
    ],
  },
};

function buildP5mAn1() {
  return shuffle([
    { q: "An angle less than 90° is called?", a: "Acute", choices: ["Acute", "Obtuse", "Reflex"] },
    { q: "An angle greater than 90° but less than 180° is called?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"] },
    { q: "Angles on a straight line add up to?", a: "180°", choices: ["180°", "360°", "90°"] },
    { q: "Angles at a point add up to?", a: "360°", choices: ["360°", "180°", "270°"] },
    { q: "Two angles on a straight line are 65° and x°. What is x?", a: "115°", choices: ["115°", "65°", "295°"] },
    { q: "A right angle is exactly?", a: "90°", choices: ["90°", "180°", "45°"] },
    { q: "Three angles at a point are 120°, 90° and x°. What is x?", a: "150°", choices: ["150°", "50°", "210°"] },
    { q: "An angle of 180° is called a?", a: "Straight angle", choices: ["Straight angle", "Right angle", "Reflex angle"] },
    { q: "Which angle is obtuse: 45°, 92°, or 88°?", a: "92°", choices: ["92°", "45°", "88°"] },
    { q: "Two angles on a straight line are equal. What is each angle?", a: "90°", choices: ["90°", "180°", "45°"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5mTr1() {
  return shuffle([
    { q: "The sum of angles in a triangle is?", a: "180°", choices: ["180°", "360°", "90°"] },
    { q: "A triangle with all sides equal is called?", a: "Equilateral", choices: ["Equilateral", "Isosceles", "Scalene"] },
    { q: "A triangle with exactly 2 equal sides is called?", a: "Isosceles", choices: ["Isosceles", "Equilateral", "Scalene"] },
    { q: "Two angles of a triangle are 50° and 60°. What is the third?", a: "70°", choices: ["70°", "110°", "50°"] },
    { q: "Each angle of an equilateral triangle is?", a: "60°", choices: ["60°", "90°", "45°"] },
    { q: "A triangle has base 8 cm and height 5 cm. What is its area?", a: "20 cm²", choices: ["20 cm²", "40 cm²", "13 cm²"] },
    { q: "A right-angled triangle has the right angle and another angle of 35°. What is the third angle?", a: "55°", choices: ["55°", "145°", "35°"] },
    { q: "A triangle has base 12 cm and height 7 cm. What is its area?", a: "42 cm²", choices: ["42 cm²", "84 cm²", "19 cm²"] },
    { q: "An isosceles triangle has a top angle of 40°. What is each base angle?", a: "70°", choices: ["70°", "40°", "140°"] },
    { q: "Can a triangle have two right angles?", a: "No, because 90° + 90° = 180° already", choices: ["No, because 90° + 90° = 180° already", "Yes, if it is very large", "Yes, if the third angle is 0°"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5m-an1": buildP5mAn1, "p5m-tr1": buildP5mTr1 };
export const P5_MATH_GEOMETRY5_QUESTION_COUNTS = { "p5m-an1": 10, "p5m-tr1": 10 };
export function buildMathGeometry5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
