import { shuffle } from "../../utils/helpers";

export const P2_MATH_EXTENDED_INTRO = {
  "p2m-as1": {
    title: "Addition & Subtraction to 1000",
    pages: [
      { text: "Now we work with bigger numbers — up to 1000! Use place value: hundreds, tens, ones.", emoji: "📐 HTU" },
      { text: "Example: 345 + 123 = 468. Line up hundreds, tens, ones and add each column!", emoji: "345 + 123 = 468" },
      { text: "For subtraction with regrouping: 402 − 135. Borrow from the hundreds!", emoji: "402 − 135 = 267" },
    ],
  },
  "p2m-tm1": {
    title: "Telling Time",
    pages: [
      { text: "The short hand shows the HOUR. The long hand shows the MINUTES.", emoji: "🕐" },
      { text: "When the long hand is on 6, it is 'half past'. When on 3, it is 'quarter past'. When on 9, it is 'quarter to'.", emoji: "🕧 half past" },
    ],
  },
  "p2m-sh1": {
    title: "Shapes",
    pages: [
      { text: "2D shapes are flat: circle, triangle, square, rectangle, pentagon, hexagon.", emoji: "⬜ 🔺 ⬠" },
      { text: "3D shapes are solid: cube, cuboid, sphere, cylinder, cone, pyramid.", emoji: "🎲 📦 ⚽" },
    ],
  },
};

function buildP2mAs1() {
  return shuffle([
    { q: "345 + 123 = ?", a: "468", choices: ["468", "458", "478"], explain: "Place value lets you add big numbers column by column: ones, tens, hundreds. 5+3=8, 4+2=6, 3+1=4, giving 468." },
    { q: "256 + 144 = ?", a: "400", choices: ["400", "300", "410"], explain: "Add each column and carry when it reaches ten. 6+4=10, so carry 1; the tens and hundreds then build up to 400." },
    { q: "500 − 238 = ?", a: "262", choices: ["262", "272", "362"], explain: "Subtraction takes away column by column, borrowing when the top digit is smaller. 500 − 238 leaves 262." },
    { q: "189 + 211 = ?", a: "400", choices: ["400", "390", "410"], explain: "Add columns and carry across. 9+1=10 carries to the tens, which carry to the hundreds, totalling 400." },
    { q: "703 − 456 = ?", a: "247", choices: ["247", "257", "347"], explain: "Subtract by columns, borrowing from the next place when needed. Taking 456 from 703 leaves 247." },
    { q: "What is 100 more than 645?", a: "745", choices: ["745", "655", "645"], explain: "Place value means 'more by 100' changes only the hundreds digit. 6 hundreds become 7, so 645 becomes 745." },
    { q: "What is 10 less than 300?", a: "290", choices: ["290", "200", "299"], explain: "Place value means '10 less' changes the tens. 300 has 0 tens, so borrow from the hundreds: 300 − 10 = 290." },
    { q: "Ali has 350 stickers. He gets 175 more. How many now?", a: "525", choices: ["525", "515", "535"], explain: "'More' means adding. Line up place values and add: 350 + 175 = 525 stickers." },
    { q: "A school has 480 students. 195 are in the hall. How many are not?", a: "285", choices: ["285", "295", "275"], explain: "Finding 'how many are left' means subtracting. Take the hall group away: 480 − 195 = 285." },
    { q: "Round 467 to the nearest hundred.", a: "500", choices: ["500", "400", "470"], explain: "Rounding finds the nearest 'tidy' number. Look at the tens: 6 is 5 or more, so round 467 up to 500." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP2mTm1() {
  return shuffle([
    { q: "What time does [CLOCK:3:00] show?", a: "3 o'clock", choices: ["3 o'clock", "12:15", "6 o'clock"], explain: "The short hand points to the hour and the long hand to the minutes. Short hand on 3, long hand on 12 means 3 o'clock." },
    { q: "What time does [CLOCK:6:30] show?", a: "Half past 6", choices: ["Half past 6", "6 o'clock", "Half past 12"], explain: "When the long minute hand points to 6, it has gone halfway round, so it is 'half past'. With the hour at 6, that is half past 6." },
    { q: "What time does [CLOCK:9:15] show?", a: "Quarter past 9", choices: ["Quarter past 9", "Quarter to 9", "9 o'clock"], explain: "The long hand on 3 means a quarter of the way round, so 'quarter past'. With the hour at 9, that is quarter past 9." },
    { q: "What time does [CLOCK:4:45] show?", a: "Quarter to 5", choices: ["Quarter to 5", "Quarter past 4", "Half past 4"], explain: "The long hand on 9 is three quarters round, a quarter left until the next hour, so 'quarter to 5'." },
    { q: "30 minutes after 2 o'clock is?", a: "Half past 2", choices: ["Half past 2", "3 o'clock", "2:03"], explain: "60 minutes make an hour, so 30 minutes is half of one. Half an hour after 2 o'clock is half past 2." },
    { q: "1 hour before 10 o'clock is?", a: "9 o'clock", choices: ["9 o'clock", "11 o'clock", "10:01"], explain: "'Before' means going back in time. One hour back from 10 o'clock is 9 o'clock." },
    { q: "How many minutes in 1 hour?", a: "60", choices: ["60", "30", "100"], explain: "Time is grouped in sixties, not tens. One hour is always made of 60 minutes." },
    { q: "How many hours in 1 day?", a: "24", choices: ["24", "12", "60"], explain: "A clock shows 12 hours, but a full day covers both day and night, so 12 + 12 = 24 hours." },
    { q: "If it is 7:30 now, what time will it be in 2 hours?", a: "9:30", choices: ["9:30", "7:32", "10:30"], explain: "Adding hours changes only the hour part, not the minutes. 7:30 plus 2 hours is 9:30." },
    { q: "What time does [CLOCK:12:00] show?", a: "12 o'clock", choices: ["12 o'clock", "6 o'clock", "12:30"], explain: "Both hands point to 12: the short hour hand and the long minute hand together mean exactly 12 o'clock." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP2mSh1() {
  return shuffle([
    { q: "How many sides does a pentagon have?", a: "5", choices: ["5", "4", "6"], explain: "A shape is named by its number of sides. 'Penta' means five, so a pentagon has 5 sides." },
    { q: "How many sides does a hexagon have?", a: "6", choices: ["6", "5", "8"], explain: "Shapes are named by their sides. 'Hexa' means six, so a hexagon has 6 sides." },
    { q: "A 3D shape with 6 square faces is a?", a: "Cube", choices: ["Cube", "Cuboid", "Pyramid"], explain: "3D shapes have flat faces. A cube is special because all 6 of its faces are equal squares, like a dice." },
    { q: "A ball is shaped like a?", a: "Sphere", choices: ["Sphere", "Circle", "Cylinder"], explain: "A sphere is a solid 3D round shape, like a ball. A circle is only the flat 2D outline, not a solid." },
    { q: "Which shape has NO straight edges?", a: "Circle", choices: ["Circle", "Square", "Triangle"], explain: "Edges are the straight sides of a shape. A circle is made of one smooth curve, so it has no straight edges at all." },
    { q: "A can of beans is shaped like a?", a: "Cylinder", choices: ["Cylinder", "Cube", "Cone"], explain: "A cylinder has two round flat ends joined by a curved side, just like a tin can." },
    { q: "How many corners does a rectangle have?", a: "4", choices: ["4", "2", "3"], explain: "A corner is where two sides meet. A rectangle has 4 straight sides, so they meet at 4 corners." },
    { q: "A pyramid has a square base and how many triangular faces?", a: "4", choices: ["4", "3", "5"], explain: "A square base has 4 edges, and one triangle rises from each edge to the point, so there are 4 triangular faces." },
    { q: "Which 3D shape can roll AND slide?", a: "Cylinder", choices: ["Cylinder", "Cube", "Pyramid"], explain: "Round surfaces roll and flat surfaces slide. A cylinder has both: a curved side that rolls and flat ends that slide." },
    { q: "A cuboid has how many faces?", a: "6", choices: ["6", "4", "8"], explain: "A face is a flat side of a 3D shape. A cuboid is box-shaped with a top, bottom, and four sides, making 6 faces." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p2m-as1": buildP2mAs1, "p2m-tm1": buildP2mTm1, "p2m-sh1": buildP2mSh1 };
export const P2_MATH_EXTENDED_QUESTION_COUNTS = { "p2m-as1": 10, "p2m-tm1": 10, "p2m-sh1": 10 };
export function buildMathExtended2Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
