import { shuffle } from "../../utils/helpers";

export const P6_MATH6_INTRO = {
  "p6m-ra1": {
    title: "Ratio",
    pages: [
      { text: "A ratio compares two amounts. Boys to girls of 3:5 means for every 3 boys there are 5 girls — same idea as a fraction.", emoji: "👦👦👦 : 👧👧👧👧👧" },
      { text: "Simplify like fractions: divide both sides by the same number. 12:8 ÷ 4 → 3:2. Always simplify your final answer.", emoji: "12:8 → 3:2" },
      { text: "Equivalent ratios: multiply both sides by the same number. 2:3 = 4:6 = 6:9 = 20:30.", emoji: "2:3 = 4:6 = 6:9" },
      { text: "Sharing in a ratio: add the parts to find the total parts. Share $60 in 1:2 → 3 parts → 1 part = $20 → shares are $20 and $40.", emoji: "1+2 = 3 parts" },
      { text: "Ratio to fraction: in 3:5, the first amount is 3/8 of the total (3 out of 3+5=8 parts). Useful for word problems.", emoji: "3:5 → 3/8 of total" },
    ],
  },
  "p6m-al1": {
    title: "Algebra",
    pages: [
      { text: "Algebra uses letters for unknown numbers. '2n' means 2 times n. 'n + 5' means 5 more than n. Letters work just like numbers.", emoji: "n = ?" },
      { text: "Like terms: 3x and 5x both have x — combine them. 3x + 5x = 8x. But 3x + 5y stays as 3x + 5y (different letters, can't combine).", emoji: "3x + 5x = 8x" },
      { text: "Substitution: replace the letter with a number. If x = 4, then 2x + 3 = 2(4) + 3 = 8 + 3 = 11.", emoji: "x = 4 → 2x+3 = 11" },
      { text: "Solving x + 5 = 12: do the same thing to both sides. Take 5 from both → x = 12 − 5 = 7. Always keep the equation balanced.", emoji: "⚖️" },
      { text: "Solving 3x = 15: divide both sides by 3 → x = 5. Always check by substituting back: 3 × 5 = 15. ✓", emoji: "✓ check" },
    ],
  },
  "p6m-st1": {
    title: "Speed, Distance & Time",
    pages: [
      { text: "Speed, Distance and Time are connected! Knowing any two lets you find the third.", emoji: "🚗 ⏱️ 📏" },
      { text: "Distance = Speed × Time. A car at 60 km/h for 2 hours travels 60 × 2 = 120 km!", emoji: "60 × 2 = 120 km" },
      { text: "Speed = Distance ÷ Time. Cover 240 km in 3 hours? Speed = 240 ÷ 3 = 80 km/h.", emoji: "240 ÷ 3 = 80" },
      { text: "Time = Distance ÷ Speed. To cover 45 km at 15 km/h, you need 45 ÷ 15 = 3 hours.", emoji: "45 ÷ 15 = 3" },
      { text: "Watch out! Always match your units (km↔km/h, m↔m/s). And 'average speed' = total distance ÷ total time, NOT the average of two speeds!", emoji: "⚠️ 📐" },
    ],
  },
};

function buildP6mRa1() {
  return shuffle([
    { q: "Simplify the ratio 12:8.", a: "3:2", choices: ["3:2", "6:4", "4:3"] },
    { q: "If the ratio of boys to girls is 3:5, and there are 15 boys, how many girls?", a: "25", choices: ["25", "15", "20"] },
    { q: "The ratio 2:3 is equivalent to?", a: "4:6", choices: ["4:6", "3:2", "6:3"] },
    { q: "If A:B = 1:4, what fraction of the total is A?", a: "1/5", choices: ["1/5", "1/4", "4/5"] },
    { q: "Simplify 20:30.", a: "2:3", choices: ["2:3", "4:6", "3:2"] },
    { q: "Tom and Jerry share $60 in the ratio 1:2. How much does Jerry get?", a: "$40", choices: ["$40", "$20", "$30"] },
    { q: "If 3 parts = 12, what is 1 part?", a: "4", choices: ["4", "3", "12"] },
    { q: "The ratio of red to blue marbles is 5:3. If there are 40 marbles total, how many are red?", a: "25", choices: ["25", "15", "20"] },
    { q: "If A:B = 2:3, and B = 18, what is A?", a: "12", choices: ["12", "27", "9"] },
    { q: "Equivalent ratios are like equivalent?", a: "Fractions", choices: ["Fractions", "Decimals only", "Percentages only"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6mAl1() {
  return shuffle([
    { q: "Simplify: 3x + 2x", a: "5x", choices: ["5x", "6x", "32x"] },
    { q: "If x = 4, what is 2x + 3?", a: "11", choices: ["11", "9", "24"] },
    { q: "Solve: x + 5 = 12", a: "x = 7", choices: ["x = 7", "x = 17", "x = 5"] },
    { q: "Solve: 3x = 15", a: "x = 5", choices: ["x = 5", "x = 45", "x = 3"] },
    { q: "Simplify: 7y - 3y + 2", a: "4y + 2", choices: ["4y + 2", "10y + 2", "4y - 2"] },
    { q: "If y = 3, what is 5y - 2?", a: "13", choices: ["13", "53", "17"] },
    { q: "Solve: 2x + 4 = 10", a: "x = 3", choices: ["x = 3", "x = 7", "x = 5"] },
    { q: "What does '2n' mean?", a: "2 multiplied by n", choices: ["2 multiplied by n", "2 added to n", "n divided by 2"] },
    { q: "Solve: x/3 = 4", a: "x = 12", choices: ["x = 12", "x = 7", "x = 1"] },
    { q: "Simplify: 4a + 3b - 2a + b", a: "2a + 4b", choices: ["2a + 4b", "6a + 4b", "2a + 2b"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6mRa2() {
  return shuffle([
    { q: "The ratio of cats to dogs at a shelter is 3:5. There are 40 animals altogether. How many cats are there?", a: "15", choices: ["15", "25", "8"] },
    { q: "Two numbers are in the ratio 4:7. Their difference is 21. What is the smaller number?", a: "28", choices: ["28", "12", "49"] },
    { q: "Sara and Lin share $84 in the ratio 2:5. How much does Lin get?", a: "$60", choices: ["$60", "$24", "$42"] },
    { q: "The ratio of Ali's height to Ben's is 5:6. If Ben is 174 cm, how tall is Ali?", a: "145 cm", choices: ["145 cm", "150 cm", "180 cm"] },
    { q: "A drink is mixed with syrup and water in the ratio 1:4. To make 750 ml of drink, how much syrup is needed?", a: "150 ml", choices: ["150 ml", "187.5 ml", "600 ml"] },
    { q: "There are red, blue and green balls in the ratio 2:3:5. There are 60 balls in total. How many are blue?", a: "18", choices: ["18", "12", "30"] },
    { q: "The ratio of Sam's to Tom's stamps is 3:4. After Sam buys 12 more, the ratio becomes 3:2. How many stamps did Tom have?", a: "8", choices: ["8", "12", "16"] },
    { q: "A recipe uses flour and sugar in the ratio 5:2. Mary uses 350 g of flour. How much sugar does she need?", a: "140 g", choices: ["140 g", "70 g", "175 g"] },
    { q: "The ratio of boys to girls in a club is 7:9. There are 18 more girls than boys. How many children are in the club?", a: "144", choices: ["144", "126", "72"] },
    { q: "Money is shared between A, B and C in the ratio 1:2:3. C gets $60 more than A. What is the total amount shared?", a: "$180", choices: ["$180", "$120", "$90"] },
    { q: "The ratio of John's to Peter's savings was 4:3. After each saved another $50, the ratio became 5:4. How much did John have at first?", a: "$200", choices: ["$200", "$150", "$250"] },
    { q: "The ratio of apples to oranges in a basket is 5:3. There are 16 more apples than oranges. How many fruits are there in total?", a: "64", choices: ["64", "40", "24"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6mAl2() {
  return shuffle([
    { q: "Mary is x years old. Her mother is 25 years older. What is the mother's age in terms of x?", a: "x + 25", choices: ["x + 25", "25x", "x − 25"] },
    { q: "A pen costs $y. How much do 4 pens cost?", a: "4y", choices: ["4y", "y + 4", "y − 4"] },
    { q: "Tom is n years old. In 5 years, he will be twice his current sister's age. If his sister is now 6, write the equation.", a: "n + 5 = 12", choices: ["n + 5 = 12", "n + 5 = 6", "2n = 6"] },
    { q: "The perimeter of a square is 4x cm. If x = 7, what is the perimeter?", a: "28 cm", choices: ["28 cm", "11 cm", "47 cm"] },
    { q: "3 children share $(2y + 6) equally. How much does each child get?", a: "$(2y + 6) ÷ 3", choices: ["$(2y + 6) ÷ 3", "$2y + 2", "$6y + 18"] },
    { q: "Solve: 5x − 3 = 17", a: "x = 4", choices: ["x = 4", "x = 14/5", "x = 20/5"] },
    { q: "A taxi charges $3 plus $2 per km. Write an expression for the cost of a journey of d km.", a: "3 + 2d", choices: ["3 + 2d", "5d", "3d + 2"] },
    { q: "The cost of x books at $5 each and y pens at $2 each. Write the total cost.", a: "5x + 2y", choices: ["5x + 2y", "7xy", "5x − 2y"] },
    { q: "A rectangle has length (3x + 1) cm and width 4 cm. What is its area in cm²?", a: "12x + 4", choices: ["12x + 4", "3x + 5", "7x + 1"] },
    { q: "If 4n + 7 = 31, what is n?", a: "6", choices: ["6", "9", "24"] },
    { q: "Ali had x marbles. He gave away 8 and bought 12 more. He now has 24. How many did he start with?", a: "20", choices: ["20", "28", "16"] },
    { q: "The sum of three consecutive whole numbers is (3n + 3). If n = 7, what is the sum?", a: "24", choices: ["24", "21", "27"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6mSt1() {
  return shuffle([
    { q: "Speed × Time = ?", a: "Distance", choices: ["Distance", "Time", "Speed"] },
    { q: "Distance ÷ Time = ?", a: "Speed", choices: ["Speed", "Distance", "Time"] },
    { q: "A car travels at 60 km/h for 2 hours. How far does it travel?", a: "120 km", choices: ["120 km", "30 km", "62 km"] },
    { q: "A train travels 240 km in 3 hours. What is its average speed?", a: "80 km/h", choices: ["80 km/h", "720 km/h", "243 km/h"] },
    { q: "A cyclist rides at 15 km/h. How long to cover 45 km?", a: "3 hours", choices: ["3 hours", "9 hours", "30 hours"] },
    { q: "A bus travels 60 km in 1 h 30 min. What is its average speed?", a: "40 km/h", choices: ["40 km/h", "46 km/h", "30 km/h"] },
    { q: "A car travels at 80 km/h. How far does it travel in 45 minutes?", a: "60 km", choices: ["60 km", "3600 km", "35 km"] },
    { q: "Convert 72 km/h to m/s.", a: "20 m/s", choices: ["20 m/s", "72 m/s", "200 m/s"] },
    { q: "[JOURNEY:journey-two-segments] Mary drives 3 hours at 60 km/h, then 2 hours at 80 km/h. What is her average speed for the whole journey?", a: "68 km/h", choices: ["68 km/h", "70 km/h", "140 km/h"] },
    { q: "[JOURNEY:cars-opposite-directions] Two cars leave the same point in opposite directions. Car A travels at 70 km/h and Car B at 50 km/h. How far apart are they after 3 hours?", a: "360 km", choices: ["360 km", "60 km", "210 km"] },
    { q: "A car leaves home at [CLOCK:9:30] and arrives at [CLOCK:12:00]. The distance is 200 km. What is the average speed?", a: "80 km/h", choices: ["80 km/h", "100 km/h", "67 km/h"] },
    { q: "[JOURNEY:cyclists-same-direction] Ali and Ben start cycling from the same place in the same direction. Ali cycles at 12 km/h and Ben at 8 km/h. After 2 hours, how far apart are they?", a: "8 km", choices: ["8 km", "40 km", "24 km"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "p6m-ra1": buildP6mRa1, "p6m-ra2": buildP6mRa2,
  "p6m-al1": buildP6mAl1, "p6m-al2": buildP6mAl2,
  "p6m-st1": buildP6mSt1,
};
export const P6_MATH6_QUESTION_COUNTS = {
  "p6m-ra1": 10, "p6m-ra2": 12,
  "p6m-al1": 10, "p6m-al2": 12,
  "p6m-st1": 12,
};
export function buildMath6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
