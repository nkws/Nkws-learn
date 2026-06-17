import { shuffle } from "../../utils/helpers";

export const P6_MATH_DATA_INTRO = {
  "p6m-av1": {
    title: "Average",
    pages: [
      { text: "Average (mean) = Total ÷ Number of items. If 3 test scores are 80, 70, 90, the average is (80+70+90) ÷ 3 = 80.", emoji: "📊 ÷" },
      { text: "If you know the average and the count, you can find the total: Average × Count = Total.", emoji: "Avg × N = Total" },
      { text: "To find a missing value: work out the total from the average, then subtract the known values.", emoji: "🔍" },
    ],
  },
  "p6m-pc1": {
    title: "Pie Charts",
    pages: [
      { text: "A pie chart is a circle divided into sections. The whole circle = 360° or 100%.", emoji: "🥧 = 360°" },
      { text: "To find the angle: (value ÷ total) × 360°. So 25% = (25/100) × 360° = 90°.", emoji: "% → °" },
      { text: "To find the value from an angle: (angle ÷ 360°) × total. So 90° out of 360 students = 90 students.", emoji: "° → value" },
    ],
  },
};

function buildP6mAv1() {
  return shuffle([
    { q: "The average of 5, 10, and 15 is?", a: "10", choices: ["10", "15", "30"], explain: "The average shares the total out evenly among the items: add them, then divide by how many. (5 + 10 + 15) ÷ 3 = 30 ÷ 3 = 10." },
    { q: "Tom's test scores are 80, 90, 70 and 60. What is his average?", a: "75", choices: ["75", "80", "70"], explain: "The average is the level each score would be if they were all made equal, so pool them then split: 80 + 90 + 70 + 60 = 300, shared over 4 tests = 75." },
    { q: "The average of 4 numbers is 20. What is the total?", a: "80", choices: ["80", "20", "5"], explain: "Since average = total ÷ count, the total = average × count. So 20 × 4 = 80." },
    { q: "3 children weigh 30 kg, 35 kg and 40 kg. What is their average weight?", a: "35 kg", choices: ["35 kg", "30 kg", "40 kg"], explain: "The average evens out the weights: add them and divide by how many. (30 + 35 + 40) ÷ 3 = 105 ÷ 3 = 35 kg." },
    { q: "The average height of 5 students is 140 cm. What is their total height?", a: "700 cm", choices: ["700 cm", "28 cm", "140 cm"], explain: "Total = average × count, because the average is the total shared evenly. So 140 × 5 = 700 cm." },
    { q: "Ali scored 85 on 3 tests and 65 on 1 test. What is his average?", a: "80", choices: ["80", "75", "85"], explain: "Average needs the true total over all items. Three 85s plus one 65: (85 × 3) + 65 = 320, then ÷ 4 tests = 80." },
    { q: "The average of 6, 8, 10 and x is 9. What is x?", a: "12", choices: ["12", "9", "6"], explain: "Average × count gives the total the numbers must reach: 9 × 4 = 36. Subtract the known ones: 36 − 6 − 8 − 10 = 12." },
    { q: "5 books cost an average of $12 each. What is the total cost?", a: "$60", choices: ["$60", "$12", "$17"], explain: "The average cost spread over all books gives the total when multiplied back: total = average × count = 12 × 5 = $60." },
    { q: "The average temperature over 7 days was 30°C. If 6 days averaged 29°C, what was the 7th day?", a: "36°C", choices: ["36°C", "31°C", "30°C"], explain: "Turn each average into a total: all 7 days = 30 × 7 = 210, the first 6 days = 29 × 6 = 174. The 7th day is the difference: 210 − 174 = 36°C." },
    { q: "Which gives a higher average: 70, 80, 90 or 60, 80, 100?", a: "Same — both 80", choices: ["Same — both 80", "First set", "Second set"], explain: "The average depends on the total, not how spread out the numbers are. Both sets total 240 over 3 values, so both average 240 ÷ 3 = 80." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6mPc1() {
  return shuffle([
    { q: "In a pie chart, all sections add up to?", a: "360°", choices: ["360°", "180°", "100°"], explain: "A pie chart is a full circle, and a full turn is 360°, so every slice together fills the whole 360°." },
    { q: "A pie chart shows 25% for Math. What angle represents Math?", a: "90°", choices: ["90°", "25°", "75°"], explain: "The same fraction of the whole pie is the same fraction of 360°. 25% is a quarter, and a quarter of 360° = 90°." },
    { q: "A section of a pie chart has an angle of 180°. What fraction of the total is this?", a: "1/2", choices: ["1/2", "1/4", "1/3"], explain: "The whole pie is 360°, so a slice's fraction is its angle out of 360°: 180/360 simplifies to 1/2." },
    { q: "60 out of 120 students chose English. What is the angle for English in a pie chart?", a: "180°", choices: ["180°", "60°", "120°"], explain: "A slice takes the same fraction of 360° as its share of the total. 60 out of 120 is 1/2, so 1/2 × 360° = 180°." },
    { q: "A pie chart section is 72°. What percentage is this?", a: "20%", choices: ["20%", "72%", "36%"], explain: "The whole circle is 360° = 100%, so a slice's percentage is its angle out of 360: (72 ÷ 360) × 100% = 20%." },
    { q: "Swimming 40%, Football 35%, Tennis 25%. If there are 200 students, how many chose Tennis?", a: "50", choices: ["50", "25", "75"], explain: "A percentage of the whole is that same fraction of the total count. Tennis is 25% of 200 students = 0.25 × 200 = 50." },
    { q: "In a pie chart, Math is 90° and English is 120°. Which subject is more popular?", a: "English", choices: ["English", "Math", "Same"], explain: "A bigger slice means a bigger share of the whole pie. English's 120° is larger than Math's 90°, so English is more popular." },
    { q: "A survey of 360 students is shown in a pie chart. The Science section is 60°. How many students chose Science?", a: "60", choices: ["60", "6", "600"], explain: "A slice's share of 360° is its share of the total. Here the total happens to be 360 students, so 60° out of 360° = 60 students." },
    { q: "If 3/4 of a pie chart is shaded, what angle is shaded?", a: "270°", choices: ["270°", "75°", "300°"], explain: "A fraction of the whole pie is the same fraction of 360°. So 3/4 shaded = 3/4 × 360° = 270°." },
    { q: "A pie chart has 4 equal sections. Each section represents?", a: "25%", choices: ["25%", "90%", "4%"], explain: "The whole pie is 100%, shared equally among the sections. Four equal slices means each is 100% ÷ 4 = 25%." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6m-av1": buildP6mAv1, "p6m-pc1": buildP6mPc1 };
export const P6_MATH_DATA_QUESTION_COUNTS = { "p6m-av1": 10, "p6m-pc1": 10 };
export function buildMathDataQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
