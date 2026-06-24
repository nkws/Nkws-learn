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
    { q: "A right angle is?", a: "90°", choices: ["90°", "180°", "45°"], explain: "An angle measures a turn in degrees. A right angle is a square corner — exactly a quarter turn — which is 90°." },
    { q: "An angle of 60° is called?", a: "Acute", choices: ["Acute", "Obtuse", "Right"], explain: "Angles are named by size against the right angle. Acute means sharp and small — less than 90°. 60° is below 90°, so it's acute." },
    { q: "An angle of 120° is called?", a: "Obtuse", choices: ["Obtuse", "Acute", "Reflex"], explain: "An obtuse angle is wider than a right angle but not a straight line — between 90° and 180°. 120° sits in that range, so it's obtuse." },
    { q: "A straight angle is?", a: "180°", choices: ["180°", "90°", "360°"], explain: "A straight angle is half a full turn — a flat line. A full turn is 360°, so half of it is 180°." },
    { q: "How many right angles does a square have?", a: "4", choices: ["4", "2", "1"], explain: "A square has four corners, and every corner of a square is a square (right) angle of 90°, so it has 4 right angles." },
    { q: "How many lines of symmetry does a square have?", a: "4", choices: ["4", "2", "1"], explain: "A line of symmetry folds a shape into two matching halves. A square folds evenly across both middles and both diagonals, giving 4 lines." },
    { q: "How many lines of symmetry does a circle have?", a: "Infinite (unlimited)", choices: ["Infinite (unlimited)", "4", "1"], explain: "A line of symmetry splits a shape into matching halves. Any line through a circle's centre does this, and there are unlimited such lines." },
    { q: "How many lines of symmetry does the letter A have?", a: "1", choices: ["1", "2", "0"], explain: "Symmetry means one half mirrors the other. The letter A matches only when folded down the middle vertically, so it has just 1 line of symmetry." },
    { q: "A rectangle has how many lines of symmetry?", a: "2", choices: ["2", "4", "1"], explain: "A line of symmetry gives two matching halves. A (non-square) rectangle folds neatly across its two middles but NOT its diagonals, so it has 2 lines." },
    { q: "Which shape has NO lines of symmetry?", a: "Scalene triangle", choices: ["Scalene triangle", "Square", "Circle"], explain: "Symmetry needs matching halves, which requires equal sides. A scalene triangle has all three sides different, so no fold matches — it has 0 lines." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4mAr1() {
  return shuffle([
    { q: "A rectangle is 6 cm long and 4 cm wide. What is its perimeter?", a: "20 cm", choices: ["20 cm", "24 cm", "10 cm"], explain: "Perimeter is the distance all the way around. A rectangle has two lengths and two widths: 2 × (6 + 4) = 2 × 10 = 20 cm." },
    { q: "A rectangle is 6 cm long and 4 cm wide. What is its area?", a: "24 cm²", choices: ["24 cm²", "20 cm²", "10 cm²"], explain: "Area is the space inside, found by Area = length × width. Here 6 × 4 = 24 cm². Area uses square units (cm²) because it covers a surface." },
    { q: "A square has side 5 cm. What is its perimeter?", a: "20 cm", choices: ["20 cm", "25 cm", "10 cm"], explain: "Perimeter is the distance around. A square has 4 equal sides, so add them all: 4 × 5 = 20 cm." },
    { q: "A square has side 5 cm. What is its area?", a: "25 cm²", choices: ["25 cm²", "20 cm²", "10 cm²"], explain: "Area = length × width, and a square's sides are equal, so it's side × side: 5 × 5 = 25 cm²." },
    { q: "A garden is 10 m by 8 m. How much fencing is needed?", a: "36 m", choices: ["36 m", "80 m", "18 m"], explain: "Fencing goes around the edge, so this is perimeter, not area: 2 × (10 + 8) = 2 × 18 = 36 m." },
    { q: "A room is 5 m by 4 m. What is its floor area?", a: "20 m²", choices: ["20 m²", "18 m²", "9 m²"], explain: "Floor space is area: Area = length × width = 5 × 4 = 20 m². Square metres because it measures a covered surface." },
    { q: "Perimeter of a rectangle = ?", a: "2 × (length + width)", choices: ["2 × (length + width)", "length × width", "length + width"], explain: "Perimeter is the total distance around. A rectangle has two lengths and two widths, so it's 2 × (length + width). Multiplying length × width gives area instead." },
    { q: "A rectangle has area 30 cm² and length 6 cm. What is its width?", a: "5 cm", choices: ["5 cm", "24 cm", "36 cm"], explain: "Since Area = length × width, work backwards by dividing: width = area ÷ length = 30 ÷ 6 = 5 cm." },
    { q: "A square has perimeter 32 cm. What is the length of one side?", a: "8 cm", choices: ["8 cm", "16 cm", "32 cm"], explain: "A square's perimeter is 4 equal sides added, so work backwards: divide the perimeter by 4. 32 ÷ 4 = 8 cm." },
    { q: "An L-shape is made of two rectangles: 4×3 and 2×3. What is the total area?", a: "18 cm²", choices: ["18 cm²", "12 cm²", "24 cm²"], explain: "Split a tricky shape into rectangles, find each area, then add. 4×3 = 12 and 2×3 = 6, so 12 + 6 = 18 cm²." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4mTg1() {
  return shuffle([
    { q: "In a table, what do the rows and columns show?", a: "Categories and values", choices: ["Categories and values", "Only numbers", "Only words"], explain: "A table organises data so it's easy to read: it pairs each category (what is being counted) with its value (how many), arranged in rows and columns." },
    { q: "A bar graph shows: Math 20, English 15, Science 25. Which subject has the most students?", a: "Science", choices: ["Science", "Math", "English"], explain: "In a bar graph, height shows quantity — the tallest bar is the largest amount. 25 is the biggest of 20, 15 and 25, so Science has the most." },
    { q: "In the same graph, how many more chose Science than English?", a: "10", choices: ["10", "5", "25"], explain: "'How many more' means find the difference by subtracting: Science 25 − English 15 = 10." },
    { q: "A line graph shows temperature rising from 25°C to 32°C. What is the increase?", a: "7°C", choices: ["7°C", "57°C", "32°C"], explain: "An increase is the change in value, found by subtracting the start from the end: 32 − 25 = 7°C. Don't add them together." },
    { q: "In a bar graph, taller bars mean?", a: "Higher values", choices: ["Higher values", "Lower values", "Same values"], explain: "A bar graph shows amount by height, so the taller a bar is, the larger the value it stands for." },
    { q: "A table shows: Mon 5, Tue 8, Wed 3, Thu 10, Fri 4. Total for the week?", a: "30", choices: ["30", "26", "35"], explain: "A total means add every value together: 5 + 8 + 3 + 10 + 4 = 30 for the whole week." },
    { q: "In the same table, which day had the most?", a: "Thursday", choices: ["Thursday", "Tuesday", "Monday"], explain: "'The most' is the largest value in the data. Comparing 5, 8, 3, 10 and 4, the biggest is 10, which is Thursday." },
    { q: "A line graph slopes upward. This means the value is?", a: "Increasing", choices: ["Increasing", "Decreasing", "Staying the same"], explain: "A line graph shows change over time. A line going up from left to right means the value is getting bigger, so it is increasing." },
    { q: "A bar graph shows 40 students chose swimming and 25 chose running. How many more chose swimming?", a: "15", choices: ["15", "65", "10"], explain: "'How many more' is a difference, so subtract: 40 − 25 = 15. Adding them would give the total, not the gap." },
    { q: "A table shows 3 classes with 38, 42, and 40 students. What is the total?", a: "120", choices: ["120", "110", "130"], explain: "A total is the sum of all the values: add the three classes, 38 + 42 + 40 = 120 students." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p4m-ge1": buildP4mGe1, "p4m-ar1": buildP4mAr1, "p4m-tg1": buildP4mTg1 };
export const P4_MATH_GEOMETRY4_QUESTION_COUNTS = { "p4m-ge1": 10, "p4m-ar1": 10, "p4m-tg1": 10 };
export function buildMathGeometry4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
