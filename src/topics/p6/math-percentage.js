import { shuffle } from "../../utils/helpers";

export const P6_MATH_PERCENTAGE_INTRO = {
  "p6m-pe1": {
    title: "Percentage",
    pages: [
      { text: "Percentage means 'out of 100'. 25% means 25 out of 100, or 25/100, or 0.25.", emoji: "% = /100" },
      { text: "To find X% of a number: (X ÷ 100) × number. So 20% of 50 = (20 ÷ 100) × 50 = 10.", emoji: "20% of 50 = 10" },
      { text: "Discount: a $80 shirt with 25% discount means you save $80 × 25% = $20. New price = $80 − $20 = $60.", emoji: "💰 ↓" },
      { text: "GST: a $100 item with 9% GST means you pay $100 + $9 = $109.", emoji: "🇸🇬 +GST" },
      { text: "Percentage change = (Difference ÷ Original) × 100%. Going from 50 to 60 is (10 ÷ 50) × 100% = 20% increase.", emoji: "📈 %" },
    ],
  },
};

function buildP6mPe1() {
  return shuffle([
    { q: "What is 25% of 80?", a: "20", choices: ["20", "25", "32"] },
    { q: "Express 3/5 as a percentage.", a: "60%", choices: ["60%", "35%", "53%"] },
    { q: "A shirt costs $80. After a 25% discount, what is the new price?", a: "$60", choices: ["$60", "$55", "$20"] },
    { q: "A meal costs $50 before GST. With 9% GST, what is the total price?", a: "$54.50", choices: ["$54.50", "$50.09", "$59"] },
    { q: "If 30% of students are boys and there are 40 students, how many are boys?", a: "12", choices: ["12", "30", "10"] },
    { q: "A book's price increased from $20 to $25. What is the percentage increase?", a: "25%", choices: ["25%", "5%", "20%"] },
    { q: "A jacket originally cost $120. It is now $90. What is the percentage discount?", a: "25%", choices: ["25%", "30%", "33%"] },
    { q: "Convert 0.04 to a percentage.", a: "4%", choices: ["4%", "40%", "0.4%"] },
    { q: "Sam scored 18 out of 25 in a test. What is his score as a percentage?", a: "72%", choices: ["72%", "18%", "82%"] },
    { q: "A laptop's price drops from $1200 to $900. What is the percentage decrease?", a: "25%", choices: ["25%", "30%", "33%"] },
    { q: "If 60% of a class of 30 students passed, how many failed?", a: "12", choices: ["12", "18", "20"] },
    { q: "A toy is sold at $36 after a 10% discount. What was the original price?", a: "$40", choices: ["$40", "$39.60", "$46"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6m-pe1": buildP6mPe1 };
export const P6_MATH_PERCENTAGE_QUESTION_COUNTS = { "p6m-pe1": 12 };
export function buildMathPercentageQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
