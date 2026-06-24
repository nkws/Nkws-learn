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
    { q: "The sum of angles in a triangle is?", a: "180°", choices: ["180°", "360°", "90°"], explain: "The three angles of any triangle always add to 180° — tear off the corners and they line up on a straight line. This rule lets you find a missing angle whenever the other two are known." },
    { q: "The sum of angles in a quadrilateral is?", a: "360°", choices: ["360°", "180°", "270°"], explain: "Any quadrilateral splits into two triangles, and each triangle's angles total 180°, so the four angles together make 2 × 180° = 360°." },
    { q: "Two angles of a triangle are 60° and 80°. What is the third angle?", a: "40°", choices: ["40°", "60°", "20°"], explain: "The angle sum of a triangle is 180°, so the third angle is whatever is left after the other two: 180° − 60° − 80° = 40°." },
    { q: "Three angles of a quadrilateral are 100°, 85° and 95°. What is the fourth angle?", a: "80°", choices: ["80°", "90°", "70°"], explain: "The four angles of a quadrilateral add to 360°, so the missing one is the rest: 360° − 100° − 85° − 95° = 80°." },
    { q: "Each angle of an equilateral triangle is?", a: "60°", choices: ["60°", "90°", "45°"], explain: "An equilateral triangle has three equal angles, and they share the triangle's 180° equally: 180° ÷ 3 = 60° each." },
    { q: "In an isosceles triangle, the two base angles are each 70°. What is the angle at the top?", a: "40°", choices: ["40°", "70°", "110°"], explain: "An isosceles triangle has two equal base angles, and all three angles total 180°. The two base angles use 70° + 70° = 140°, leaving 180° − 140° = 40° at the top." },
    { q: "Angles on a straight line add up to?", a: "180°", choices: ["180°", "360°", "90°"], explain: "A straight line is a half-turn, and a half-turn measures 180°, so angles sitting together on a straight line always add to 180°." },
    { q: "Two angles on a straight line are x° and 130°. What is x?", a: "50°", choices: ["50°", "130°", "230°"], explain: "Angles on a straight line sum to 180°, so x is what remains: 180° − 130° = 50°." },
    { q: "Vertically opposite angles are always?", a: "Equal", choices: ["Equal", "Supplementary", "90°"], explain: "When two straight lines cross, the angles directly across from each other are vertically opposite and always equal — each pair shares the same straight-line partner of 180°." },
    { q: "At a point, three angles are 90°, 120° and 60°. What is the fourth angle?", a: "90°", choices: ["90°", "80°", "110°"], explain: "Angles around a single point make a full turn, which is 360°, so the fourth angle is the leftover: 360° − 90° − 120° − 60° = 90°." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6mAr1() {
  return shuffle([
    { q: "A rectangle is 8 cm long and 5 cm wide. What is its area?", a: "40 cm²", choices: ["40 cm²", "26 cm²", "13 cm²"], explain: "Area is the space inside, found by length × width — it counts the rows and columns of unit squares. So 8 × 5 = 40 cm²." },
    { q: "What is the perimeter of a square with side 6 cm?", a: "24 cm", choices: ["24 cm", "36 cm", "12 cm"], explain: "Perimeter is the distance all the way around. A square has 4 equal sides, so add them up: 4 × 6 = 24 cm." },
    { q: "A triangle has a base of 10 cm and a height of 6 cm. What is its area?", a: "30 cm²", choices: ["30 cm²", "60 cm²", "16 cm²"], explain: "A triangle is exactly half of the rectangle that boxes it in, so its area = ½ × base × height = ½ × 10 × 6 = 30 cm²." },
    { q: "A rectangular garden is 12 m long and 8 m wide. What is its perimeter?", a: "40 m", choices: ["40 m", "96 m", "20 m"], explain: "Perimeter is the total distance around. A rectangle has two lengths and two widths, so it's 2 × (12 + 8) = 40 m." },
    { q: "An L-shaped figure is made of two rectangles: 6 cm × 4 cm and 3 cm × 2 cm. What is the total area?", a: "30 cm²", choices: ["30 cm²", "48 cm²", "15 cm²"], explain: "Break a composite shape into simple rectangles, find each area, then add: (6 × 4) + (3 × 2) = 24 + 6 = 30 cm²." },
    { q: "The area of a rectangle is 48 cm². If the length is 8 cm, what is the width?", a: "6 cm", choices: ["6 cm", "40 cm", "56 cm"], explain: "Since area = length × width, you can reverse it with division: width = area ÷ length = 48 ÷ 8 = 6 cm." },
    { q: "A right triangle has legs of 6 cm and 8 cm. What is its area?", a: "24 cm²", choices: ["24 cm²", "48 cm²", "14 cm²"], explain: "In a right triangle the two legs are perpendicular, so they act as base and height. Area = ½ × base × height = ½ × 6 × 8 = 24 cm²." },
    { q: "A square field has an area of 64 m². What is its perimeter?", a: "32 m", choices: ["32 m", "16 m", "64 m"], explain: "Area of a square = side × side, so the side is the number that squares to 64: 8 m. Then perimeter = 4 × 8 = 32 m." },
    { q: "Half of a rectangle 10 cm by 6 cm is cut diagonally. What is the area of the triangle?", a: "30 cm²", choices: ["30 cm²", "60 cm²", "16 cm²"], explain: "A diagonal cuts a rectangle into two equal triangles, so each is half the rectangle's area: (10 × 6) ÷ 2 = 30 cm²." },
    { q: "A rectangular pool is 25 m by 10 m. What is its area?", a: "250 m²", choices: ["250 m²", "70 m²", "35 m²"], explain: "Area of a rectangle is the surface inside, found by length × width: 25 × 10 = 250 m²." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6mNe1() {
  return shuffle([
    { q: "A cube has how many faces?", a: "6", choices: ["6", "4", "8"], explain: "A cube is box-shaped with a flat face on every side — top, bottom, front, back, left and right — which makes 6 square faces in all." },
    { q: "If you cut along the edges of a cube and unfold it flat, what do you get?", a: "A net — a flat connected arrangement of the 6 square faces", choices: ["A net — a flat connected arrangement of the 6 square faces", "A flat rectangle made of 4 rectangles", "A flat triangle"], explain: "Unfolding a cube lays all its faces flat while keeping them connected. Because a cube has 6 square faces, the net is 6 connected squares — which is why we call it a net." },
    { q: "When a cube net is folded, opposite faces are?", a: "Parallel and never touching", choices: ["Parallel and never touching", "Always next to each other", "The same size only"], explain: "Faces that fold to opposite sides of a cube sit facing each other across the middle, so they stay parallel and never share an edge." },
    { q: "A cuboid has 3 pairs of identical faces. How many different rectangles are in its net?", a: "3 pairs (6 faces)", choices: ["3 pairs (6 faces)", "3 faces total", "6 different shapes"], explain: "A cuboid's opposite faces match, so its 6 faces come as 3 matching pairs — front/back, top/bottom, left/right." },
    { q: "If each face of a cube has area 9 cm², the total surface area is?", a: "54 cm²", choices: ["54 cm²", "36 cm²", "81 cm²"], explain: "Surface area is the total of all the faces. A cube has 6 equal faces, so total = 6 × 9 = 54 cm²." },
    { q: "A cuboid is 5 cm × 3 cm × 2 cm. What is its total surface area?", a: "62 cm²", choices: ["62 cm²", "30 cm²", "31 cm²"], explain: "Surface area adds the 3 pairs of faces. Each pair: 5×3, 5×2 and 3×2 give 15, 10 and 6; double and add: 2 × (15 + 10 + 6) = 62 cm²." },
    { q: "A cube has a total surface area of 96 cm². What is the area of one face?", a: "16 cm²", choices: ["16 cm²", "96 cm²", "48 cm²"], explain: "All 6 faces of a cube are equal, so reverse the total with division: one face = 96 ÷ 6 = 16 cm²." },
    { q: "A cube has a surface area of 150 cm². What is the length of one side?", a: "5 cm", choices: ["5 cm", "25 cm", "15 cm"], explain: "Total surface area is 6 equal faces, so one face = 150 ÷ 6 = 25 cm². The side is the number that squares to 25, which is 5 cm." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6m-ge1": buildP6mGe1, "p6m-ar1": buildP6mAr1, "p6m-ne1": buildP6mNe1 };
export const P6_MATH_GEOMETRY_QUESTION_COUNTS = { "p6m-ge1": 10, "p6m-ar1": 10, "p6m-ne1": 8 };
export function buildMathGeometryQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
