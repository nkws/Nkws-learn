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
    { q: "Which shape is round with no corners?", a: "Circle", choices: ["Circle", "Square", "Triangle"] },
    { q: "Which shape has 3 sides?", a: "Triangle", choices: ["Circle", "Square", "Triangle"] },
    { q: "Which shape has 4 equal sides?", a: "Square", choices: ["Rectangle", "Square", "Triangle"] },
    { q: "A coin is shaped like a...?", a: "Circle", choices: ["Circle", "Square", "Rectangle"] },
    { q: "How many corners does a triangle have?", a: "3", choices: ["2", "3", "4"] },
    { q: "How many corners does a square have?", a: "4", choices: ["3", "4", "5"] },
    { q: "How many sides does a rectangle have?", a: "4", choices: ["3", "4", "5"] },
    { q: "Which shape has 2 long sides and 2 short sides?", a: "Rectangle", choices: ["Square", "Triangle", "Rectangle"] },
    { q: "A pizza slice is shaped like a...?", a: "Triangle", choices: ["Circle", "Triangle", "Rectangle"] },
    { q: "How many corners does a circle have?", a: "0", choices: ["0", "1", "4"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildShp2() {
  return shuffle([
    { q: "⭕ What shape is this?", a: "Circle", choices: ["Circle", "Square", "Oval"] },
    { q: "⬜ What shape is this?", a: "Square", choices: ["Rectangle", "Square", "Diamond"] },
    { q: "A clock face is what shape?", a: "Circle", choices: ["Circle", "Square", "Triangle"] },
    { q: "A window pane is usually what shape?", a: "Square", choices: ["Circle", "Square", "Triangle"] },
    { q: "Which shape has 4 sides that are all the same length?", a: "Square", choices: ["Square", "Rectangle", "Triangle"] },
    { q: "A circle has how many sides?", a: "0", choices: ["0", "1", "2"] },
    { q: "A dice face is what shape?", a: "Square", choices: ["Circle", "Square", "Triangle"] },
    { q: "A plate is what shape?", a: "Circle", choices: ["Circle", "Square", "Rectangle"] },
    { q: "A book cover is what shape?", a: "Rectangle", choices: ["Circle", "Square", "Rectangle"] },
    { q: "A yield sign is what shape?", a: "Triangle", choices: ["Circle", "Square", "Triangle"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildShp3() {
  return shuffle([
    { q: "🔺 What shape is this?", a: "Triangle", choices: ["Triangle", "Square", "Circle"] },
    { q: "▬ What shape is this?", a: "Rectangle", choices: ["Square", "Rectangle", "Triangle"] },
    { q: "A door is what shape?", a: "Rectangle", choices: ["Square", "Circle", "Rectangle"] },
    { q: "A sandwich cut in half diagonally is what shape?", a: "Triangle", choices: ["Rectangle", "Triangle", "Circle"] },
    { q: "How many sides does a triangle have?", a: "3", choices: ["2", "3", "4"] },
    { q: "A rectangle has __ corners.", a: "4", choices: ["3", "4", "5"] },
    { q: "Which has more sides: triangle or rectangle?", a: "Rectangle", choices: ["Triangle", "Rectangle", "Same"] },
    { q: "A phone screen is what shape?", a: "Rectangle", choices: ["Square", "Circle", "Rectangle"] },
    { q: "A tent opening looks like a...?", a: "Triangle", choices: ["Triangle", "Circle", "Square"] },
    { q: "An envelope is what shape?", a: "Rectangle", choices: ["Triangle", "Circle", "Rectangle"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildShp4() {
  return shuffle([
    { q: "A ball is what 3D shape?", a: "Sphere", choices: ["Cube", "Sphere", "Cylinder"] },
    { q: "A dice is what 3D shape?", a: "Cube", choices: ["Cube", "Sphere", "Cone"] },
    { q: "A can of drink is what 3D shape?", a: "Cylinder", choices: ["Cube", "Sphere", "Cylinder"] },
    { q: "An ice cream cone is what 3D shape?", a: "Cone", choices: ["Cylinder", "Sphere", "Cone"] },
    { q: "A box is what 3D shape?", a: "Cube", choices: ["Cube", "Cone", "Cylinder"] },
    { q: "A globe is what 3D shape?", a: "Sphere", choices: ["Sphere", "Cube", "Cylinder"] },
    { q: "A party hat is what 3D shape?", a: "Cone", choices: ["Cone", "Cube", "Sphere"] },
    { q: "A tin of beans is what 3D shape?", a: "Cylinder", choices: ["Cone", "Cylinder", "Cube"] },
    { q: "Which 3D shape can roll?", a: "Sphere", choices: ["Cube", "Sphere", "Cone"] },
    { q: "Which 3D shape has 6 flat faces?", a: "Cube", choices: ["Cube", "Sphere", "Cylinder"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
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
