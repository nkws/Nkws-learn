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
    { q: "An angle less than 90° is called?", a: "Acute", choices: ["Acute", "Obtuse", "Reflex"], explain: "Angles are named by size against the right angle, 90°. Anything smaller than a right angle is acute — think of a sharp, narrow corner." },
    { q: "An angle greater than 90° but less than 180° is called?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"], explain: "Names sort angles by size: bigger than a right angle (90°) but not yet a straight line (180°) is obtuse — a wide, open corner." },
    { q: "Angles on a straight line add up to?", a: "180°", choices: ["180°", "360°", "90°"], explain: "A straight line is half a full turn, and a full turn is 360°, so the angles sitting along a straight line always total half of that: 180°." },
    { q: "Angles at a point add up to?", a: "360°", choices: ["360°", "180°", "270°"], explain: "Angles meeting at a single point sweep all the way around, which is one complete turn. A full turn is 360°." },
    { q: "Two angles on a straight line are 65° and x°. What is x?", a: "115°", choices: ["115°", "65°", "295°"], explain: "Angles on a straight line sum to 180°, so the unknown is what's left after removing the known one: 180° − 65° = 115°." },
    { q: "A right angle is exactly?", a: "90°", choices: ["90°", "180°", "45°"], explain: "A right angle is a square corner, exactly a quarter of a full 360° turn: 360 ÷ 4 = 90°." },
    { q: "Three angles at a point are 120°, 90° and x°. What is x?", a: "150°", choices: ["150°", "50°", "210°"], explain: "Angles at a point fill a full turn of 360°, so subtract the known angles from 360°: 360 − 120 − 90 = 150°." },
    { q: "An angle of 180° is called a?", a: "Straight angle", choices: ["Straight angle", "Right angle", "Reflex angle"], explain: "An angle of 180° opens out into a perfectly straight line — that's exactly half a full turn — so it's called a straight angle." },
    { q: "Which angle is obtuse: 45°, 92°, or 88°?", a: "92°", choices: ["92°", "45°", "88°"], explain: "Obtuse means bigger than a right angle (90°) but less than 180°. Of these only 92° passes 90°, so it is the obtuse one." },
    { q: "Two angles on a straight line are equal. What is each angle?", a: "90°", choices: ["90°", "180°", "45°"], explain: "Angles on a straight line total 180°. If two equal angles share that, each takes half: 180 ÷ 2 = 90°." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5mTr1() {
  return shuffle([
    { q: "The sum of angles in a triangle is?", a: "180°", choices: ["180°", "360°", "90°"], explain: "The three angles of any triangle always add up to 180° — a key rule that lets you find a missing angle whenever you know the other two." },
    { q: "A triangle with all sides equal is called?", a: "Equilateral", choices: ["Equilateral", "Isosceles", "Scalene"], explain: "Triangles are named by their sides. 'Equi-lateral' means equal-sided, so all three sides (and all three angles) are equal." },
    { q: "A triangle with exactly 2 equal sides is called?", a: "Isosceles", choices: ["Isosceles", "Equilateral", "Scalene"], explain: "Named by sides: an isosceles triangle has 2 equal sides, and the angles opposite those equal sides are equal too." },
    { q: "Two angles of a triangle are 50° and 60°. What is the third?", a: "70°", choices: ["70°", "110°", "50°"], explain: "A triangle's angles sum to 180°, so the third is whatever is left: 180 − 50 − 60 = 70°." },
    { q: "Each angle of an equilateral triangle is?", a: "60°", choices: ["60°", "90°", "45°"], explain: "An equilateral triangle has three equal angles, and they must total 180°, so each one is 180 ÷ 3 = 60°." },
    { q: "A triangle has base 8 cm and height 5 cm. What is its area?", a: "20 cm²", choices: ["20 cm²", "40 cm²", "13 cm²"], explain: "A triangle is half of a rectangle with the same base and height, so area = ½ × base × height: ½ × 8 × 5 = 20 cm²." },
    { q: "A right-angled triangle has the right angle and another angle of 35°. What is the third angle?", a: "55°", choices: ["55°", "145°", "35°"], explain: "The angles total 180°, and the right angle already uses 90°. So the third is 180 − 90 − 35 = 55°." },
    { q: "A triangle has base 12 cm and height 7 cm. What is its area?", a: "42 cm²", choices: ["42 cm²", "84 cm²", "19 cm²"], explain: "A triangle covers half the rectangle around it, so area = ½ × base × height: ½ × 12 × 7 = 42 cm²." },
    { q: "An isosceles triangle has a top angle of 40°. What is each base angle?", a: "70°", choices: ["70°", "40°", "140°"], explain: "In an isosceles triangle the two base angles are equal. They share what's left of 180° after the top angle: (180 − 40) ÷ 2 = 70° each." },
    { q: "Can a triangle have two right angles?", a: "No, because 90° + 90° = 180° already", choices: ["No, because 90° + 90° = 180° already", "Yes, if it is very large", "Yes, if the third angle is 0°"], explain: "All three angles must total exactly 180°. Two right angles already use 90 + 90 = 180°, leaving nothing for the third, so it's impossible." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5m-an1": buildP5mAn1, "p5m-tr1": buildP5mTr1 };
export const P5_MATH_GEOMETRY5_QUESTION_COUNTS = { "p5m-an1": 10, "p5m-tr1": 10 };
export function buildMathGeometry5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
