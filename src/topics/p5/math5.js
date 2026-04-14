import { shuffle } from "../../utils/helpers";

function buildP5mPc1() {
  return shuffle([
    { q: "What is 25% of 80?", a: "20", choices: ["20", "25", "40"] },
    { q: "Convert 3/5 to a percentage.", a: "60%", choices: ["60%", "35%", "53%"] },
    { q: "What is 10% of 250?", a: "25", choices: ["25", "10", "50"] },
    { q: "Convert 0.4 to a percentage.", a: "40%", choices: ["40%", "4%", "0.4%"] },
    { q: "A shirt costs $50. It is 20% off. What is the discount?", a: "$10", choices: ["$10", "$20", "$40"] },
    { q: "What is 50% as a fraction?", a: "1/2", choices: ["1/2", "1/5", "5/10"] },
    { q: "75% is the same as?", a: "3/4", choices: ["3/4", "7/5", "3/5"] },
    { q: "If 30% of students are boys and there are 40 students, how many are boys?", a: "12", choices: ["12", "30", "10"] },
    { q: "Convert 1/4 to a percentage.", a: "25%", choices: ["25%", "14%", "50%"] },
    { q: "What is 100% of any number?", a: "The number itself", choices: ["The number itself", "Zero", "Double the number"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5mRt1() {
  return shuffle([
    { q: "A car travels 60 km in 1 hour. What is its speed?", a: "60 km/h", choices: ["60 km/h", "30 km/h", "120 km/h"] },
    { q: "If 3 apples cost $6, what is the cost of 1 apple?", a: "$2", choices: ["$2", "$3", "$6"] },
    { q: "A tap fills 5 litres in 1 minute. How many litres in 4 minutes?", a: "20 litres", choices: ["20 litres", "5 litres", "9 litres"] },
    { q: "If the rate is 12 pages per hour, how many pages in 3 hours?", a: "36 pages", choices: ["36 pages", "12 pages", "15 pages"] },
    { q: "A machine makes 100 items in 5 hours. What is the rate?", a: "20 items per hour", choices: ["20 items per hour", "100 items per hour", "5 items per hour"] },
    { q: "If 8 pencils cost $4, what is the cost per pencil?", a: "$0.50", choices: ["$0.50", "$0.80", "$4.00"] },
    { q: "A runner covers 400 m in 2 minutes. What is the rate?", a: "200 m per minute", choices: ["200 m per minute", "400 m per minute", "800 m per minute"] },
    { q: "Rate = ?", a: "Quantity ÷ Time", choices: ["Quantity ÷ Time", "Quantity × Time", "Time ÷ Quantity"] },
    { q: "If the rate is $5 per hour, how much for 6 hours?", a: "$30", choices: ["$30", "$5", "$11"] },
    { q: "Total = Rate × ?", a: "Time", choices: ["Time", "Speed", "Distance only"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5m-pc1": buildP5mPc1, "p5m-rt1": buildP5mRt1 };
export const P5_MATH5_QUESTION_COUNTS = { "p5m-pc1": 10, "p5m-rt1": 10 };
export function buildMath5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
