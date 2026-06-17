import { shuffle } from "../utils/helpers";
export const SHAPES_INTRO = {
  "shp-1": {
    title: "2D Shapes",
    pages: [
      { text: "Shapes are everywhere! Let's learn the flat shapes called 2D shapes.", emoji: "⬜ 🔺 ⭕" },
      { text: "A CIRCLE is round with no corners. Like a coin or a wheel!", emoji: "⭕" },
      { text: "A SQUARE has 4 equal sides and 4 corners. Like a window!", emoji: "⬜" },
      { text: "A TRIANGLE has 3 sides and 3 corners. Like a slice of pizza!", emoji: "🔺" },
      { text: "A RECTANGLE has 4 sides — 2 long and 2 short. Like a door!", emoji: "▬" },
      { text: "Let's see if you can name the shapes!", emoji: "🦊 + 📐 = 💪" },
    ],
  },
};

function buildShp1() {
  return shuffle([
    { q: "Which shape is round with no corners?", a: "Circle", choices: ["Circle", "Square", "Triangle"], explain: "A circle is the round shape with no straight sides and no corners, like a wheel. So the round shape with no corners is a circle." },
    { q: "Which shape has 3 sides?", a: "Triangle", choices: ["Circle", "Square", "Triangle"], explain: "A triangle is the shape with 3 straight sides and 3 corners. So the shape with 3 sides is a triangle." },
    { q: "Which shape has 4 equal sides?", a: "Square", choices: ["Rectangle", "Square", "Triangle"], explain: "A square has 4 sides that are all the same length. So the shape with 4 equal sides is a square." },
    { q: "A coin is shaped like a...?", a: "Circle", choices: ["Circle", "Square", "Rectangle"], explain: "A circle is round all the way around with no corners. A coin is round like that, so it is shaped like a circle." },
    { q: "How many corners does a triangle have?", a: "3", choices: ["2", "3", "4"], explain: "A corner is where two sides meet. A triangle has 3 sides, and they meet at 3 corners." },
    { q: "How many corners does a square have?", a: "4", choices: ["3", "4", "5"], explain: "A corner is where two sides meet. A square has 4 sides, and they meet at 4 corners." },
    { q: "How many sides does a rectangle have?", a: "4", choices: ["3", "4", "5"], explain: "A side is one straight edge of a shape. A rectangle is like a long box with 4 straight edges, so it has 4 sides." },
    { q: "Which shape has 2 long sides and 2 short sides?", a: "Rectangle", choices: ["Square", "Triangle", "Rectangle"], explain: "A rectangle has 2 long sides and 2 short sides, like a door. So the shape with long and short sides is a rectangle." },
    { q: "A pizza slice is shaped like a...?", a: "Triangle", choices: ["Circle", "Triangle", "Rectangle"], explain: "A triangle has 3 straight sides that meet in a point. A pizza slice has a pointy tip like that, so it is shaped like a triangle." },
    { q: "How many corners does a circle have?", a: "0", choices: ["0", "1", "4"], explain: "A corner is where two straight sides meet. A circle is round with no straight sides at all, so it has 0 corners." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildShp2() {
  return shuffle([
    { q: "⭕ What shape is this?", a: "Circle", choices: ["Circle", "Square", "Oval"], explain: "A circle is round all the way around with no corners. This shape is perfectly round, so it is a circle." },
    { q: "⬜ What shape is this?", a: "Square", choices: ["Rectangle", "Square", "Diamond"], explain: "A square has 4 straight sides that are all the same length and 4 corners. This shape looks like that, so it is a square." },
    { q: "A clock face is what shape?", a: "Circle", choices: ["Circle", "Square", "Triangle"], explain: "A circle is round with no corners. A clock face is round like that, so a clock face is a circle." },
    { q: "A window pane is usually what shape?", a: "Square", choices: ["Circle", "Square", "Triangle"], explain: "A square has 4 equal straight sides and 4 corners. A window pane has straight equal sides like that, so it is usually a square." },
    { q: "Which shape has 4 sides that are all the same length?", a: "Square", choices: ["Square", "Rectangle", "Triangle"], explain: "When all 4 sides of a shape are the same length, it is a square. A rectangle has long and short sides, so the answer is square." },
    { q: "A circle has how many sides?", a: "0", choices: ["0", "1", "2"], explain: "A side is a straight edge. A circle is round and curved all the way with no straight edges, so it has 0 sides." },
    { q: "A dice face is what shape?", a: "Square", choices: ["Circle", "Square", "Triangle"], explain: "A square has 4 equal straight sides and 4 corners. One face of a dice is flat with equal sides like that, so it is a square." },
    { q: "A plate is what shape?", a: "Circle", choices: ["Circle", "Square", "Rectangle"], explain: "A circle is round all the way around with no corners. A plate is round like that, so a plate is a circle." },
    { q: "A book cover is what shape?", a: "Rectangle", choices: ["Circle", "Square", "Rectangle"], explain: "A rectangle has 2 long sides and 2 short sides. A book cover is longer than it is wide like that, so it is a rectangle." },
    { q: "A slice of watermelon is what shape?", a: "Triangle", choices: ["Circle", "Square", "Triangle"], explain: "A triangle has 3 sides and a pointy tip. A watermelon slice is wide at one end and pointy at the other, so it is a triangle." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildShp3() {
  return shuffle([
    { q: "🔺 What shape is this?", a: "Triangle", choices: ["Triangle", "Square", "Circle"], explain: "A triangle is the shape with 3 straight sides and 3 corners. This shape has 3 sides, so it is a triangle." },
    { q: "▬ What shape is this?", a: "Rectangle", choices: ["Square", "Rectangle", "Triangle"], explain: "A rectangle has 2 long sides and 2 short sides. This shape is long and flat like that, so it is a rectangle." },
    { q: "A door is what shape?", a: "Rectangle", choices: ["Square", "Circle", "Rectangle"], explain: "A rectangle has 2 long sides and 2 short sides. A door is tall and straight like that, so a door is a rectangle." },
    { q: "A sandwich cut in half diagonally is what shape?", a: "Triangle", choices: ["Rectangle", "Triangle", "Circle"], explain: "A triangle has 3 sides and a pointy corner. Cutting a square sandwich corner to corner makes that pointy 3-sided shape, a triangle." },
    { q: "How many sides does a triangle have?", a: "3", choices: ["2", "3", "4"], explain: "A side is one straight edge of a shape. A triangle is named for its sides, and it has 3 of them." },
    { q: "A rectangle has __ corners.", a: "4", choices: ["3", "4", "5"], explain: "A corner is where two sides meet. A rectangle has 4 straight sides, and they meet at 4 corners." },
    { q: "Which has more sides: triangle or rectangle?", a: "Rectangle", choices: ["Triangle", "Rectangle", "Same"], explain: "We compare by counting sides. A triangle has 3 sides but a rectangle has 4, and 4 is more, so the rectangle has more sides." },
    { q: "A phone screen is what shape?", a: "Rectangle", choices: ["Square", "Circle", "Rectangle"], explain: "A rectangle has 2 long sides and 2 short sides. A phone screen is longer than it is wide like that, so it is a rectangle." },
    { q: "A tent opening looks like a...?", a: "Triangle", choices: ["Triangle", "Circle", "Square"], explain: "A triangle has 3 sides and a point at the top. A tent opening is wide at the bottom and pointy on top like that, so it is a triangle." },
    { q: "An envelope is what shape?", a: "Rectangle", choices: ["Triangle", "Circle", "Rectangle"], explain: "A rectangle has 2 long sides and 2 short sides. An envelope is flat with long and short sides like that, so it is a rectangle." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildShp4() {
  return shuffle([
    { q: "A ball is what 3D shape?", a: "Sphere", choices: ["Cube", "Sphere", "Cylinder"], explain: "A sphere is perfectly round all over, like a ball. So a ball is a sphere." },
    { q: "A dice is what 3D shape?", a: "Cube", choices: ["Cube", "Sphere", "Cone"], explain: "A cube has 6 flat square faces and looks like a box that is the same on every side. A dice looks like that, so it is a cube." },
    { q: "A can of drink is what 3D shape?", a: "Cylinder", choices: ["Cube", "Sphere", "Cylinder"], explain: "A cylinder has a round flat top and bottom with a tube shape in between. A drink can looks like that, so it is a cylinder." },
    { q: "An ice cream cone is what 3D shape?", a: "Cone", choices: ["Cylinder", "Sphere", "Cone"], explain: "A cone has a round bottom that comes up to a point. An ice cream cone looks like that, so it is a cone." },
    { q: "A box is what 3D shape?", a: "Cube", choices: ["Cube", "Cone", "Cylinder"], explain: "A cube has 6 flat faces and looks the same like a box on every side. A box looks like that, so it is a cube." },
    { q: "A globe is what 3D shape?", a: "Sphere", choices: ["Sphere", "Cube", "Cylinder"], explain: "A sphere is perfectly round all over, like a ball. A globe is round like that, so it is a sphere." },
    { q: "A party hat is what 3D shape?", a: "Cone", choices: ["Cone", "Cube", "Sphere"], explain: "A cone has a round bottom that comes up to a point on top. A party hat is pointy like that, so it is a cone." },
    { q: "A tin of beans is what 3D shape?", a: "Cylinder", choices: ["Cone", "Cylinder", "Cube"], explain: "A cylinder has a round top and bottom with a tube shape in between. A tin of beans looks like that, so it is a cylinder." },
    { q: "Which 3D shape can roll?", a: "Sphere", choices: ["Cube", "Sphere", "Cone"], explain: "A shape rolls when it is round with no flat sides to stop it. A sphere is round all over, so a sphere can roll." },
    { q: "Which 3D shape has 6 flat faces?", a: "Cube", choices: ["Cube", "Sphere", "Cylinder"], explain: "A face is a flat side of a 3D shape. A cube is like a box with a flat side on top, bottom, and all around, which makes 6 faces." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "shp-1": buildShp1, "shp-2": buildShp2, "shp-3": buildShp3, "shp-4": buildShp4,
};

export const SHAPES_QUESTION_COUNTS = {
  "shp-1": 10, "shp-2": 10, "shp-3": 10, "shp-4": 10,
};

export function buildShapesQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
