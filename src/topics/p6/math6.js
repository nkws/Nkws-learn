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

// Each question carries an optional `explain` — shown after a wrong answer.
// The style is concept-first: name the idea that makes the method work, then
// apply it. That teaches understanding, not just the steps — the skill PSLE
// structured questions reward. withFields shuffles and maps to the engine's
// shape while carrying `explain` through.
function withFields(arr) {
  return shuffle(arr).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP6mRa1() {
  return withFields([
    { q: "Simplify the ratio 12:8.", a: "3:2", choices: ["3:2", "6:4", "4:3"], explain: "A ratio compares two amounts, not their actual size, so 12:8 and 3:2 describe the same relationship scaled down. Simplify it like a fraction — divide both sides by their highest common factor, 4: 3:2." },
    { q: "If the ratio of boys to girls is 3:5, and there are 15 boys, how many girls?", a: "25", choices: ["25", "15", "20"], explain: "A ratio stays the same when both sides scale together. Boys went 3 → 15, that's × 5, so the girls scale the same way: 5 × 5 = 25." },
    { q: "The ratio 2:3 is equivalent to?", a: "4:6", choices: ["4:6", "3:2", "6:3"], explain: "Equivalent ratios keep the same comparison — multiply both sides by the same number. 2:3 doubled is 4:6." },
    { q: "If A:B = 1:4, what fraction of the total is A?", a: "1/5", choices: ["1/5", "1/4", "4/5"], explain: "A ratio splits the whole into equal parts: 1 + 4 = 5 parts altogether. A is 1 of those 5, so A is 1/5 of the total." },
    { q: "Simplify 20:30.", a: "2:3", choices: ["2:3", "4:6", "3:2"], explain: "Reduce a ratio the way you reduce a fraction: divide both sides by their highest common factor, 10, giving 2:3." },
    { q: "Tom and Jerry share $60 in the ratio 1:2. How much does Jerry get?", a: "$40", choices: ["$40", "$20", "$30"], explain: "Picture the money in equal units: 1 + 2 = 3 units. Find one unit first — $60 ÷ 3 = $20 — then Jerry's 2 units = $40. Finding 'one unit' is the key move in every sharing problem." },
    { q: "If 3 parts = 12, what is 1 part?", a: "4", choices: ["4", "3", "12"], explain: "If 3 equal parts make 12, then one part is that total shared into 3: 12 ÷ 3 = 4. This 'value of one part' unlocks ratio questions." },
    { q: "The ratio of red to blue marbles is 5:3. If there are 40 marbles total, how many are red?", a: "25", choices: ["25", "15", "20"], explain: "Total units = 5 + 3 = 8, so one unit = 40 ÷ 8 = 5. Red is 5 units = 5 × 5 = 25." },
    { q: "If A:B = 2:3, and B = 18, what is A?", a: "12", choices: ["12", "27", "9"], explain: "B is 3 units worth 18, so one unit = 18 ÷ 3 = 6. A is 2 units = 2 × 6 = 12." },
    { q: "Equivalent ratios are like equivalent?", a: "Fractions", choices: ["Fractions", "Decimals only", "Percentages only"], explain: "A ratio behaves just like a fraction: multiply or divide both sides by the same number and the comparison stays equal." },
  ]);
}

function buildP6mAl1() {
  return withFields([
    { q: "Simplify: 3x + 2x", a: "5x", choices: ["5x", "6x", "32x"], explain: "x stands for an unknown number; 3 of them plus 2 more of them makes 5 of them, so 3x + 2x = 5x. You can only add terms with the same letter." },
    { q: "If x = 4, what is 2x + 3?", a: "11", choices: ["11", "9", "24"], explain: "Substituting means swapping the letter for its value. 2x means 2 × 4 = 8, then + 3 = 11." },
    { q: "Solve: x + 5 = 12", a: "x = 7", choices: ["x = 7", "x = 17", "x = 5"], explain: "An equation is a balance — both sides are equal. To get x by itself, undo the + 5 with its opposite (− 5) on BOTH sides: x = 12 − 5 = 7." },
    { q: "Solve: 3x = 15", a: "x = 5", choices: ["x = 5", "x = 45", "x = 3"], explain: "3x means 3 × x. Undo a multiply with its opposite — divide — on both sides: x = 15 ÷ 3 = 5." },
    { q: "Simplify: 7y - 3y + 2", a: "4y + 2", choices: ["4y + 2", "10y + 2", "4y - 2"], explain: "Only like terms combine: 7y − 3y = 4y. The + 2 has no y, so it can't join them and stays as it is: 4y + 2." },
    { q: "If y = 3, what is 5y - 2?", a: "13", choices: ["13", "53", "17"], explain: "Swap y for 3: 5y means 5 × 3 = 15, then − 2 = 13." },
    { q: "Solve: 2x + 4 = 10", a: "x = 3", choices: ["x = 3", "x = 7", "x = 5"], explain: "Undo the operations in reverse order to isolate x: first take 4 from both sides (2x = 6), then divide both by 2 (x = 3)." },
    { q: "What does '2n' mean?", a: "2 multiplied by n", choices: ["2 multiplied by n", "2 added to n", "n divided by 2"], explain: "In algebra, a number written next to a letter means multiply, so 2n = 2 × n." },
    { q: "Solve: x/3 = 4", a: "x = 12", choices: ["x = 12", "x = 7", "x = 1"], explain: "x/3 means x divided by 3. Undo the divide with its opposite — multiply — on both sides: x = 4 × 3 = 12." },
    { q: "Simplify: 4a + 3b - 2a + b", a: "2a + 4b", choices: ["2a + 4b", "6a + 4b", "2a + 2b"], explain: "Collect each letter on its own: the a terms give 4a − 2a = 2a, the b terms give 3b + b = 4b. Different letters can't merge, so 2a + 4b." },
  ]);
}

function buildP6mRa2() {
  return withFields([
    { q: "The ratio of cats to dogs at a shelter is 3:5. There are 40 animals altogether. How many cats are there?", a: "15", choices: ["15", "25", "8"], explain: "Split the total into equal units: 3 + 5 = 8 units, so one unit = 40 ÷ 8 = 5. Cats are 3 units = 15." },
    { q: "Two numbers are in the ratio 4:7. Their difference is 21. What is the smaller number?", a: "28", choices: ["28", "12", "49"], explain: "The gap between them is 7 − 4 = 3 units, and that gap equals 21, so one unit = 7. The smaller number is 4 units = 28." },
    { q: "Sara and Lin share $84 in the ratio 2:5. How much does Lin get?", a: "$60", choices: ["$60", "$24", "$42"], explain: "Share into 2 + 5 = 7 equal units; one unit = $84 ÷ 7 = $12. Lin gets 5 units = $60." },
    { q: "The ratio of Ali's height to Ben's is 5:6. If Ben is 174 cm, how tall is Ali?", a: "145 cm", choices: ["145 cm", "150 cm", "180 cm"], explain: "Ben is 6 units = 174 cm, so one unit = 174 ÷ 6 = 29 cm. Ali is 5 units = 5 × 29 = 145 cm." },
    { q: "A drink is mixed with syrup and water in the ratio 1:4. To make 750 ml of drink, how much syrup is needed?", a: "150 ml", choices: ["150 ml", "187.5 ml", "600 ml"], explain: "The whole drink is 1 + 4 = 5 units; one unit = 750 ÷ 5 = 150 ml. Syrup is 1 unit = 150 ml." },
    { q: "There are red, blue and green balls in the ratio 2:3:5. There are 60 balls in total. How many are blue?", a: "18", choices: ["18", "12", "30"], explain: "Total units = 2 + 3 + 5 = 10, so one unit = 60 ÷ 10 = 6. Blue is 3 units = 18." },
    { q: "The ratio of Sam's to Tom's stamps is 3:4. After Sam buys 12 more, the ratio becomes 3:2. How many stamps did Tom have?", a: "16", choices: ["8", "12", "16"], explain: "Only Sam changes — Tom's stamps stay fixed, so anchor on Tom. Work back from the new 3:2: if Tom = 16 then Sam = 24; before buying 12 he had 24 − 12 = 12, and 12:16 = 3:4, which matches the start. ✓" },
    { q: "A recipe uses flour and sugar in the ratio 5:2. Mary uses 350 g of flour. How much sugar does she need?", a: "140 g", choices: ["140 g", "70 g", "175 g"], explain: "Flour is 5 units = 350 g, so one unit = 70 g. Sugar is 2 units = 2 × 70 = 140 g." },
    { q: "The ratio of boys to girls in a club is 7:9. There are 18 more girls than boys. How many children are in the club?", a: "144", choices: ["144", "126", "72"], explain: "The extra girls are the gap: 9 − 7 = 2 units = 18, so one unit = 9. The total is all 7 + 9 = 16 units = 16 × 9 = 144." },
    { q: "Money is shared between A, B and C in the ratio 1:2:3. C gets $60 more than A. What is the total amount shared?", a: "$180", choices: ["$180", "$120", "$90"], explain: "C − A is the gap: 3 − 1 = 2 units = $60, so one unit = $30. The total is 1 + 2 + 3 = 6 units = $180." },
    { q: "The ratio of John's to Peter's savings was 4:3. After each saved another $50, the ratio became 5:4. How much did John have at first?", a: "$200", choices: ["$200", "$150", "$250"], explain: "Adding the same $50 to each side shifts the ratio, so write it with a unit u: (4u + 50):(3u + 50) = 5:4. Cross-multiply: 4(4u + 50) = 5(3u + 50) → 16u + 200 = 15u + 250 → u = 50. John started with 4 units = $200." },
    { q: "The ratio of apples to oranges in a basket is 5:3. There are 16 more apples than oranges. How many fruits are there in total?", a: "64", choices: ["64", "40", "24"], explain: "The 16 extra apples are the gap: 5 − 3 = 2 units = 16, so one unit = 8. Total = 5 + 3 = 8 units = 64." },
  ]);
}

function buildP6mAl2() {
  return withFields([
    { q: "Mary is x years old. Her mother is 25 years older. What is the mother's age in terms of x?", a: "x + 25", choices: ["x + 25", "25x", "x − 25"], explain: "'Older' means add, and Mary's age is unknown so we keep it as x. Mother's age = x + 25." },
    { q: "A pen costs $y. How much do 4 pens cost?", a: "4y", choices: ["4y", "y + 4", "y − 4"], explain: "Four pens at $y each is the same price added four times — that's a multiply: 4 × y = 4y." },
    { q: "Tom is n years old. In 5 years, he will be twice his current sister's age. If his sister is now 6, write the equation.", a: "n + 5 = 12", choices: ["n + 5 = 12", "n + 5 = 6", "2n = 6"], explain: "In 5 years Tom's age is n + 5. 'Twice the sister's age now' is 2 × 6 = 12. The two are equal, so n + 5 = 12." },
    { q: "The perimeter of a square is 4x cm. If x = 7, what is the perimeter?", a: "28 cm", choices: ["28 cm", "11 cm", "47 cm"], explain: "A square has 4 equal sides, which is why the perimeter is 4x. Substitute x = 7: 4 × 7 = 28 cm." },
    { q: "3 children share $(2y + 6) equally. How much does each child get?", a: "$(2y + 6) ÷ 3", choices: ["$(2y + 6) ÷ 3", "$2y + 2", "$6y + 18"], explain: "Sharing equally means divide the whole amount by the number of children: (2y + 6) ÷ 3." },
    { q: "Solve: 5x − 3 = 17", a: "x = 4", choices: ["x = 4", "x = 14/5", "x = 20/5"], explain: "Isolate x by undoing operations in reverse: add 3 to both sides (5x = 20), then divide both by 5 (x = 4)." },
    { q: "A taxi charges $3 plus $2 per km. Write an expression for the cost of a journey of d km.", a: "3 + 2d", choices: ["3 + 2d", "5d", "3d + 2"], explain: "There's a fixed part and a changing part: a flat $3, plus $2 for each of d km (that's 2d). Total cost = 3 + 2d." },
    { q: "The cost of x books at $5 each and y pens at $2 each. Write the total cost.", a: "5x + 2y", choices: ["5x + 2y", "7xy", "5x − 2y"], explain: "Cost of each item is price × quantity: books are 5x, pens are 2y. Add them for the total: 5x + 2y." },
    { q: "A rectangle has length (3x + 1) cm and width 4 cm. What is its area in cm²?", a: "12x + 4", choices: ["12x + 4", "3x + 5", "7x + 1"], explain: "Area = length × width, so multiply 4 into every term in the bracket: 4 × (3x + 1) = 12x + 4." },
    { q: "If 4n + 7 = 31, what is n?", a: "6", choices: ["6", "9", "24"], explain: "Undo operations in reverse to free n: subtract 7 (4n = 24), then divide by 4 (n = 6)." },
    { q: "Ali had x marbles. He gave away 8 and bought 12 more. He now has 24. How many did he start with?", a: "20", choices: ["20", "28", "16"], explain: "Turn the story into an equation: x − 8 + 12 = 24. That tidies to x + 4 = 24, so x = 20." },
    { q: "The sum of three consecutive whole numbers is (3n + 3). If n = 7, what is the sum?", a: "24", choices: ["24", "21", "27"], explain: "Substitute n = 7 into the given expression: 3 × 7 + 3 = 21 + 3 = 24." },
  ]);
}

function buildP6mSt1() {
  return withFields([
    { q: "Speed × Time = ?", a: "Distance", choices: ["Distance", "Time", "Speed"], explain: "Speed is the distance covered each unit of time, so multiplying it by the time gives the total distance: D = S × T." },
    { q: "Distance ÷ Time = ?", a: "Speed", choices: ["Speed", "Distance", "Time"], explain: "Speed measures how much distance is covered per unit of time, so you divide distance by time: S = D ÷ T." },
    { q: "A car travels at 60 km/h for 2 hours. How far does it travel?", a: "120 km", choices: ["120 km", "30 km", "62 km"], explain: "Distance = Speed × Time. Covering 60 km every hour for 2 hours gives 60 × 2 = 120 km." },
    { q: "A train travels 240 km in 3 hours. What is its average speed?", a: "80 km/h", choices: ["80 km/h", "720 km/h", "243 km/h"], explain: "Speed = Distance ÷ Time. Spread 240 km evenly over 3 hours: 240 ÷ 3 = 80 km/h." },
    { q: "A cyclist rides at 15 km/h. How long to cover 45 km?", a: "3 hours", choices: ["3 hours", "9 hours", "30 hours"], explain: "Time = Distance ÷ Speed. At 15 km each hour, covering 45 km takes 45 ÷ 15 = 3 hours." },
    { q: "A bus travels 60 km in 1 h 30 min. What is its average speed?", a: "40 km/h", choices: ["40 km/h", "46 km/h", "30 km/h"], explain: "Units must match before dividing, so write the time in hours: 1 h 30 min = 1.5 h. Then Speed = 60 ÷ 1.5 = 40 km/h." },
    { q: "A car travels at 80 km/h. How far does it travel in 45 minutes?", a: "60 km", choices: ["60 km", "3600 km", "35 km"], explain: "The speed is per hour, so convert the time to hours: 45 min = 0.75 h. Distance = 80 × 0.75 = 60 km." },
    { q: "Convert 72 km/h to m/s.", a: "20 m/s", choices: ["20 m/s", "72 m/s", "200 m/s"], explain: "1 km/h = 1000 m ÷ 3600 s, so to go from km/h to m/s you divide by 3.6: 72 ÷ 3.6 = 20 m/s." },
    { q: "[JOURNEY:journey-two-segments] Mary drives 3 hours at 60 km/h, then 2 hours at 80 km/h. What is her average speed for the whole journey?", a: "68 km/h", choices: ["68 km/h", "70 km/h", "140 km/h"], explain: "Average speed is the single steady speed that would cover the whole trip in the same time — NOT the average of the two speeds. Use totals: (180 + 160) km ÷ (3 + 2) h = 340 ÷ 5 = 68 km/h. It lands below 70 because she spends more time at the slower speed." },
    { q: "[JOURNEY:cars-opposite-directions] Two cars leave the same point in opposite directions. Car A travels at 70 km/h and Car B at 50 km/h. How far apart are they after 3 hours?", a: "360 km", choices: ["360 km", "60 km", "210 km"], explain: "Moving in opposite directions, the gap between them grows at the SUM of their speeds: 70 + 50 = 120 km/h. After 3 h: 120 × 3 = 360 km." },
    { q: "A car leaves home at [CLOCK:9:30] and arrives at [CLOCK:12:00]. The distance is 200 km. What is the average speed?", a: "80 km/h", choices: ["80 km/h", "100 km/h", "67 km/h"], explain: "Find the time taken first: 9:30 to 12:00 is 2.5 hours. Then Speed = Distance ÷ Time = 200 ÷ 2.5 = 80 km/h." },
    { q: "[JOURNEY:cyclists-same-direction] Ali and Ben start cycling from the same place in the same direction. Ali cycles at 12 km/h and Ben at 8 km/h. After 2 hours, how far apart are they?", a: "8 km", choices: ["8 km", "40 km", "24 km"], explain: "Going the same way, the gap grows at the DIFFERENCE of their speeds: 12 − 8 = 4 km/h. After 2 h: 4 × 2 = 8 km." },
  ]);
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
