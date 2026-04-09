function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildMS1() {
  // Area
  return shuffle([
    { q: "A rectangle is 3 cm long and 2 cm wide. What is its area?", a: "6 square cm", choices: ["6 square cm", "5 square cm", "10 square cm"] },
    { q: "A rectangle is 4 cm long and 3 cm wide. What is its area?", a: "12 square cm", choices: ["12 square cm", "14 square cm", "7 square cm"] },
    { q: "A square has sides of 5 cm. What is its area?", a: "25 square cm", choices: ["25 square cm", "20 square cm", "10 square cm"] },
    { q: "A rectangle is 6 cm long and 2 cm wide. What is its area?", a: "12 square cm", choices: ["12 square cm", "8 square cm", "16 square cm"] },
    { q: "A square has sides of 3 cm. What is its area?", a: "9 square cm", choices: ["9 square cm", "6 square cm", "12 square cm"] },
    { q: "A rectangle is 5 cm long and 4 cm wide. What is its area?", a: "20 square cm", choices: ["20 square cm", "18 square cm", "9 square cm"] },
    { q: "To find the area of a rectangle, we multiply...?", a: "Length x Width", choices: ["Length x Width", "Length + Width", "Length - Width"] },
    { q: "A rectangle is 7 cm long and 3 cm wide. What is its area?", a: "21 square cm", choices: ["21 square cm", "10 square cm", "24 square cm"] },
    { q: "A square has sides of 4 cm. What is its area?", a: "16 square cm", choices: ["16 square cm", "8 square cm", "12 square cm"] },
    { q: "A rectangle is 8 cm long and 2 cm wide. What is its area?", a: "16 square cm", choices: ["16 square cm", "10 square cm", "18 square cm"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMS2() {
  // Perimeter
  return shuffle([
    { q: "A square has sides of 4 cm. What is its perimeter?", a: "16 cm", choices: ["16 cm", "12 cm", "8 cm"] },
    { q: "A rectangle is 5 cm long and 3 cm wide. What is its perimeter?", a: "16 cm", choices: ["16 cm", "15 cm", "8 cm"] },
    { q: "A square has sides of 6 cm. What is its perimeter?", a: "24 cm", choices: ["24 cm", "12 cm", "36 cm"] },
    { q: "A rectangle is 7 cm long and 2 cm wide. What is its perimeter?", a: "18 cm", choices: ["18 cm", "14 cm", "9 cm"] },
    { q: "A square has sides of 3 cm. What is its perimeter?", a: "12 cm", choices: ["12 cm", "9 cm", "6 cm"] },
    { q: "A rectangle is 4 cm long and 4 cm wide. What is its perimeter?", a: "16 cm", choices: ["16 cm", "8 cm", "12 cm"] },
    { q: "To find the perimeter, we...?", a: "Add all sides", choices: ["Add all sides", "Multiply sides", "Subtract sides"] },
    { q: "A rectangle is 10 cm long and 5 cm wide. What is its perimeter?", a: "30 cm", choices: ["30 cm", "50 cm", "15 cm"] },
    { q: "A square has sides of 8 cm. What is its perimeter?", a: "32 cm", choices: ["32 cm", "64 cm", "16 cm"] },
    { q: "A rectangle is 6 cm long and 3 cm wide. What is its perimeter?", a: "18 cm", choices: ["18 cm", "9 cm", "24 cm"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMS3() {
  // Volume
  return shuffle([
    { q: "A box holds 2 rows of 3 cubes, 2 layers high. How many cubes?", a: "12", choices: ["12", "6", "10"] },
    { q: "A box holds 3 rows of 3 cubes, 1 layer high. How many cubes?", a: "9", choices: ["9", "6", "12"] },
    { q: "A box holds 2 rows of 4 cubes, 2 layers high. How many cubes?", a: "16", choices: ["16", "8", "12"] },
    { q: "A box holds 3 rows of 2 cubes, 3 layers high. How many cubes?", a: "18", choices: ["18", "12", "15"] },
    { q: "A box holds 4 rows of 2 cubes, 1 layer high. How many cubes?", a: "8", choices: ["8", "6", "10"] },
    { q: "A box holds 2 rows of 2 cubes, 2 layers high. How many cubes?", a: "8", choices: ["8", "4", "6"] },
    { q: "A box holds 5 rows of 2 cubes, 1 layer high. How many cubes?", a: "10", choices: ["10", "7", "12"] },
    { q: "A box holds 3 rows of 4 cubes, 2 layers high. How many cubes?", a: "24", choices: ["24", "12", "18"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
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
