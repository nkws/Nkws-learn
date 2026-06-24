import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildMS1() {
  // Area
  return shuffle([
    { q: "A rectangle is 3 cm long and 2 cm wide. What is its area?", a: "6 square cm", choices: ["6 square cm", "5 square cm", "10 square cm"], explain: "Area is the space inside a shape, found by multiplying length by width. 3 times 2 is 6 square cm." },
    { q: "A rectangle is 4 cm long and 3 cm wide. What is its area?", a: "12 square cm", choices: ["12 square cm", "14 square cm", "7 square cm"], explain: "Area counts the squares that cover the inside, which is length times width. 4 times 3 is 12 square cm." },
    { q: "A square has sides of 5 cm. What is its area?", a: "25 square cm", choices: ["25 square cm", "20 square cm", "10 square cm"], explain: "A square's sides are all equal, so area is one side times itself. 5 times 5 is 25 square cm." },
    { q: "A rectangle is 6 cm long and 2 cm wide. What is its area?", a: "12 square cm", choices: ["12 square cm", "8 square cm", "16 square cm"], explain: "Area is length times width, the squares that fill the shape. 6 times 2 is 12 square cm." },
    { q: "A square has sides of 3 cm. What is its area?", a: "9 square cm", choices: ["9 square cm", "6 square cm", "12 square cm"], explain: "A square has equal sides, so area is side times side. 3 times 3 is 9 square cm." },
    { q: "A rectangle is 5 cm long and 4 cm wide. What is its area?", a: "20 square cm", choices: ["20 square cm", "18 square cm", "9 square cm"], explain: "Area measures the space inside, found by length times width. 5 times 4 is 20 square cm." },
    { q: "To find the area of a rectangle, we multiply...?", a: "Length x Width", choices: ["Length x Width", "Length + Width", "Length - Width"], explain: "Area is the squares that cover the inside of a shape. For a rectangle you multiply length by width to count them all." },
    { q: "A rectangle is 7 cm long and 3 cm wide. What is its area?", a: "21 square cm", choices: ["21 square cm", "10 square cm", "24 square cm"], explain: "Area is length times width, the space inside the rectangle. 7 times 3 is 21 square cm." },
    { q: "A square has sides of 4 cm. What is its area?", a: "16 square cm", choices: ["16 square cm", "8 square cm", "12 square cm"], explain: "A square's sides are all the same, so area is one side times itself. 4 times 4 is 16 square cm." },
    { q: "A rectangle is 8 cm long and 2 cm wide. What is its area?", a: "16 square cm", choices: ["16 square cm", "10 square cm", "18 square cm"], explain: "Area is length times width, the squares filling the shape. 8 times 2 is 16 square cm." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMS2() {
  // Perimeter
  return shuffle([
    { q: "A square has sides of 4 cm. What is its perimeter?", a: "16 cm", choices: ["16 cm", "12 cm", "8 cm"], explain: "Perimeter is the distance all the way around the edge. A square has 4 equal sides, so 4 times 4 is 16 cm." },
    { q: "A rectangle is 5 cm long and 3 cm wide. What is its perimeter?", a: "16 cm", choices: ["16 cm", "15 cm", "8 cm"], explain: "Perimeter is the total of all four sides. A rectangle has two lengths and two widths: 5 + 3 + 5 + 3 is 16 cm." },
    { q: "A square has sides of 6 cm. What is its perimeter?", a: "24 cm", choices: ["24 cm", "12 cm", "36 cm"], explain: "Perimeter is the distance round the edge. A square's 4 sides are equal, so 4 times 6 is 24 cm." },
    { q: "A rectangle is 7 cm long and 2 cm wide. What is its perimeter?", a: "18 cm", choices: ["18 cm", "14 cm", "9 cm"], explain: "Add up all four sides going round. Two lengths and two widths: 7 + 2 + 7 + 2 is 18 cm." },
    { q: "A square has sides of 3 cm. What is its perimeter?", a: "12 cm", choices: ["12 cm", "9 cm", "6 cm"], explain: "Perimeter is the way round the edge. A square has 4 equal sides, so 4 times 3 is 12 cm." },
    { q: "A rectangle is 4 cm long and 4 cm wide. What is its perimeter?", a: "16 cm", choices: ["16 cm", "8 cm", "12 cm"], explain: "Perimeter adds all four sides. With sides 4, 4, 4 and 4, the total round the edge is 16 cm." },
    { q: "To find the perimeter, we...?", a: "Add all sides", choices: ["Add all sides", "Multiply sides", "Subtract sides"], explain: "Perimeter is the distance all the way around the outside of a shape, so you add up the lengths of every side." },
    { q: "A rectangle is 10 cm long and 5 cm wide. What is its perimeter?", a: "30 cm", choices: ["30 cm", "50 cm", "15 cm"], explain: "Add the four sides round the edge. Two lengths and two widths: 10 + 5 + 10 + 5 is 30 cm." },
    { q: "A square has sides of 8 cm. What is its perimeter?", a: "32 cm", choices: ["32 cm", "64 cm", "16 cm"], explain: "Perimeter is the distance round the edge. A square has 4 equal sides, so 4 times 8 is 32 cm." },
    { q: "A rectangle is 6 cm long and 3 cm wide. What is its perimeter?", a: "18 cm", choices: ["18 cm", "9 cm", "24 cm"], explain: "Add up all four sides going round. Two lengths and two widths: 6 + 3 + 6 + 3 is 18 cm." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMS3() {
  // Volume
  return shuffle([
    { q: "A box holds 2 rows of 3 cubes, 2 layers high. How many cubes?", a: "12", choices: ["12", "6", "10"], explain: "Volume counts all the cubes that fill the box. Find one layer first: 2 rows of 3 is 6 cubes, then 2 layers makes 6 times 2, which is 12." },
    { q: "A box holds 3 rows of 3 cubes, 1 layer high. How many cubes?", a: "9", choices: ["9", "6", "12"], explain: "Volume is the number of cubes inside. One layer is 3 rows of 3, which is 9 cubes, and there is only 1 layer, so 9." },
    { q: "A box holds 2 rows of 4 cubes, 2 layers high. How many cubes?", a: "16", choices: ["16", "8", "12"], explain: "Count one layer, then the layers. 2 rows of 4 is 8 cubes per layer, and 2 layers makes 8 times 2, which is 16." },
    { q: "A box holds 3 rows of 2 cubes, 3 layers high. How many cubes?", a: "18", choices: ["18", "12", "15"], explain: "Find one layer first: 3 rows of 2 is 6 cubes. Then stack 3 layers: 6 times 3 is 18 cubes." },
    { q: "A box holds 4 rows of 2 cubes, 1 layer high. How many cubes?", a: "8", choices: ["8", "6", "10"], explain: "Volume is all the cubes inside. One layer is 4 rows of 2, which is 8 cubes, and there is just 1 layer, so 8." },
    { q: "A box holds 2 rows of 2 cubes, 2 layers high. How many cubes?", a: "8", choices: ["8", "4", "6"], explain: "Count one layer, then the layers. 2 rows of 2 is 4 cubes per layer, and 2 layers makes 4 times 2, which is 8." },
    { q: "A box holds 5 rows of 2 cubes, 1 layer high. How many cubes?", a: "10", choices: ["10", "7", "12"], explain: "Volume counts the cubes inside. One layer is 5 rows of 2, which is 10 cubes, and there is only 1 layer, so 10." },
    { q: "A box holds 3 rows of 4 cubes, 2 layers high. How many cubes?", a: "24", choices: ["24", "12", "18"], explain: "Work out one layer first: 3 rows of 4 is 12 cubes. Then 2 layers makes 12 times 2, which is 24." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "p3m-ms1": buildMS1, "p3m-ms2": buildMS2, "p3m-ms3": buildMS3,
};

export const P3_MEASUREMENT3_QUESTION_COUNTS = {
  "p3m-ms1": 10, "p3m-ms2": 10, "p3m-ms3": 8,
};

export function buildMeasurement3Questions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
