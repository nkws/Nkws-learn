import { shuffle } from "../../utils/helpers";

function buildP5mPc1() {
  return shuffle([
    { q: "What is 25% of 80?", a: "20", choices: ["20", "25", "40"], explain: "Percent means 'out of 100', so 25% is the fraction 25/100 = 1/4. Finding a percent 'of' a number means multiply: 1/4 × 80 = 20." },
    { q: "Convert 3/5 to a percentage.", a: "60%", choices: ["60%", "35%", "53%"], explain: "A percentage is just a fraction with 100 as the denominator. Scale 3/5 up to hundredths: multiply top and bottom by 20 to get 60/100 = 60%." },
    { q: "What is 10% of 250?", a: "25", choices: ["25", "10", "50"], explain: "10% means 10 out of every 100, which is one tenth. Finding a tenth of a number means dividing by 10: 250 ÷ 10 = 25." },
    { q: "Convert 0.4 to a percentage.", a: "40%", choices: ["40%", "4%", "0.4%"], explain: "A percentage counts hundredths, so move the decimal two places (multiply by 100): 0.4 × 100 = 40%." },
    { q: "A shirt costs $50. It is 20% off. What is the discount?", a: "$10", choices: ["$10", "$20", "$40"], explain: "The discount is a percentage 'of' the price, and 'of' means multiply. 20% is 1/5, so 1/5 × $50 = $10 comes off." },
    { q: "What is 50% as a fraction?", a: "1/2", choices: ["1/2", "1/5", "1/50"], explain: "Percent means 'out of 100', so 50% is 50/100. Simplify by dividing top and bottom by their highest common factor, 50: 1/2." },
    { q: "75% is the same as?", a: "3/4", choices: ["3/4", "7/5", "3/5"], explain: "Percent means 'out of 100', so 75% = 75/100. Simplify by dividing top and bottom by 25 to get 3/4." },
    { q: "If 30% of students are boys and there are 40 students, how many are boys?", a: "12", choices: ["12", "30", "10"], explain: "'Of' means multiply, and 30% = 30/100. So the boys are 30/100 × 40 = 12." },
    { q: "Convert 1/4 to a percentage.", a: "25%", choices: ["25%", "14%", "50%"], explain: "A percentage is a fraction out of 100, so rewrite 1/4 with denominator 100: multiply top and bottom by 25 to get 25/100 = 25%." },
    { q: "What is 100% of any number?", a: "The number itself", choices: ["The number itself", "Zero", "Double the number"], explain: "100% means 100 out of 100 — the whole thing, every part. So 100% of a number is simply the number itself." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5mRt1() {
  return shuffle([
    { q: "A car travels 60 km in 1 hour. What is its speed?", a: "60 km/h", choices: ["60 km/h", "30 km/h", "120 km/h"], explain: "Speed is a rate — how much distance per unit of time. Divide distance by time: 60 km ÷ 1 h = 60 km/h." },
    { q: "If 3 apples cost $6, what is the cost of 1 apple?", a: "$2", choices: ["$2", "$3", "$6"], explain: "Finding the value of one unit is the key move in rate problems. Share the cost equally across the apples: $6 ÷ 3 = $2 each." },
    { q: "A tap fills 5 litres in 1 minute. How many litres in 4 minutes?", a: "20 litres", choices: ["20 litres", "5 litres", "9 litres"], explain: "A rate stays steady, so total = rate × time. At 5 litres each minute for 4 minutes: 5 × 4 = 20 litres." },
    { q: "If the rate is 12 pages per hour, how many pages in 3 hours?", a: "36 pages", choices: ["36 pages", "12 pages", "15 pages"], explain: "Total = rate × time, because the same amount happens each hour. 12 pages × 3 hours = 36 pages." },
    { q: "A machine makes 100 items in 5 hours. What is the rate?", a: "20 items per hour", choices: ["20 items per hour", "100 items per hour", "5 items per hour"], explain: "A rate is an amount per one unit of time, so divide the total by the time: 100 ÷ 5 = 20 items per hour." },
    { q: "If 8 pencils cost $4, what is the cost per pencil?", a: "$0.50", choices: ["$0.50", "$0.80", "$4.00"], explain: "'Per pencil' means the cost of one, so divide the total by how many: $4 ÷ 8 = $0.50 each." },
    { q: "A runner covers 400 m in 2 minutes. What is the rate?", a: "200 m per minute", choices: ["200 m per minute", "400 m per minute", "800 m per minute"], explain: "A rate is distance per one minute, so divide distance by time: 400 m ÷ 2 min = 200 m per minute." },
    { q: "Rate = ?", a: "Quantity ÷ Time", choices: ["Quantity ÷ Time", "Quantity × Time", "Time ÷ Quantity"], explain: "A rate tells you how much happens in one unit of time, so you share the quantity over the time: Rate = Quantity ÷ Time." },
    { q: "If the rate is $5 per hour, how much for 6 hours?", a: "$30", choices: ["$30", "$5", "$11"], explain: "Total = rate × time, since the same amount is earned each hour. $5 × 6 hours = $30." },
    { q: "Total = Rate × ?", a: "Time", choices: ["Time", "Speed", "Distance only"], explain: "A rate is an amount for each unit of time, so to get the total you multiply it by how many time units pass: Total = Rate × Time." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5m-pc1": buildP5mPc1, "p5m-rt1": buildP5mRt1 };
export const P5_MATH5_QUESTION_COUNTS = { "p5m-pc1": 10, "p5m-rt1": 10 };
export function buildMath5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
