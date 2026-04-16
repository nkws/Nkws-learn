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
    { q: "The average of 5, 10, and 15 is?", a: "10", choices: ["10", "15", "30"] },
    { q: "Tom's test scores are 80, 90, 70 and 60. What is his average?", a: "75", choices: ["75", "80", "70"] },
    { q: "The average of 4 numbers is 20. What is the total?", a: "80", choices: ["80", "20", "5"] },
    { q: "3 children weigh 30 kg, 35 kg and 40 kg. What is their average weight?", a: "35 kg", choices: ["35 kg", "30 kg", "40 kg"] },
    { q: "The average height of 5 students is 140 cm. What is their total height?", a: "700 cm", choices: ["700 cm", "28 cm", "140 cm"] },
    { q: "Ali scored 85 on 3 tests and 70 on 1 test. What is his average?", a: "81.25", choices: ["81.25", "77.5", "85"] },
    { q: "The average of 6, 8, 10 and x is 9. What is x?", a: "12", choices: ["12", "9", "6"] },
    { q: "5 books cost an average of $12 each. What is the total cost?", a: "$60", choices: ["$60", "$12", "$17"] },
    { q: "The average temperature over 7 days was 30°C. If 6 days averaged 29°C, what was the 7th day?", a: "36°C", choices: ["36°C", "31°C", "30°C"] },
    { q: "Which gives a higher average: 70, 80, 90 or 60, 80, 100?", a: "Same — both 80", choices: ["Same — both 80", "First set", "Second set"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6mPc1() {
  return shuffle([
    { q: "In a pie chart, all sections add up to?", a: "360°", choices: ["360°", "180°", "100°"] },
    { q: "A pie chart shows 25% for Math. What angle represents Math?", a: "90°", choices: ["90°", "25°", "75°"] },
    { q: "A section of a pie chart has an angle of 180°. What fraction of the total is this?", a: "1/2", choices: ["1/2", "1/4", "1/3"] },
    { q: "60 out of 120 students chose English. What is the angle for English in a pie chart?", a: "180°", choices: ["180°", "60°", "120°"] },
    { q: "A pie chart section is 72°. What percentage is this?", a: "20%", choices: ["20%", "72%", "36%"] },
    { q: "Swimming 40%, Football 35%, Tennis 25%. If there are 200 students, how many chose Tennis?", a: "50", choices: ["50", "25", "75"] },
    { q: "In a pie chart, Math is 90° and English is 120°. Which subject is more popular?", a: "English", choices: ["English", "Math", "Same"] },
    { q: "A survey of 360 students is shown in a pie chart. The Science section is 60°. How many students chose Science?", a: "60", choices: ["60", "6", "600"] },
    { q: "If 3/4 of a pie chart is shaded, what angle is shaded?", a: "270°", choices: ["270°", "75°", "300°"] },
    { q: "A pie chart has 4 equal sections. Each section represents?", a: "25%", choices: ["25%", "90%", "4%"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6m-av1": buildP6mAv1, "p6m-pc1": buildP6mPc1 };
export const P6_MATH_DATA_QUESTION_COUNTS = { "p6m-av1": 10, "p6m-pc1": 10 };
export function buildMathDataQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
