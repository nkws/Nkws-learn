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

function buildP6mPe2() {
  return shuffle([
    { q: "After a 20% discount, a bag costs $48. What was the original price?", a: "$60", choices: ["$60", "$57.60", "$240"] },
    { q: "A laptop is $1500. With 9% GST, the customer pays?", a: "$1635", choices: ["$1635", "$1509", "$1365"] },
    { q: "A class of 40 has 60% boys. After 4 girls join, what percentage of the class are now boys?", a: "About 54.5%", choices: ["About 54.5%", "60%", "50%"] },
    { q: "Mei sold a phone for $480 and made a 20% profit. What was the cost price?", a: "$400", choices: ["$400", "$384", "$576"] },
    { q: "A shop offers '15% off, then a further 10% off the discounted price'. The original price is $200. What is the final price?", a: "$153", choices: ["$153", "$150", "$170"] },
    { q: "Ali got 45 out of 60 in a test. What is his score as a percentage?", a: "75%", choices: ["75%", "60%", "45%"] },
    { q: "A salary of $3000 increases by 8%. What is the new salary?", a: "$3240", choices: ["$3240", "$3008", "$3080"] },
    { q: "A water tank is 60% full. After 12 litres are added, it is 80% full. What is the tank's capacity?", a: "60 L", choices: ["60 L", "20 L", "100 L"] },
    { q: "A book is sold for $32 at a 20% loss. What was the cost price?", a: "$40", choices: ["$40", "$25.60", "$38.40"] },
    { q: "After a 5% pay rise, Lin earns $2310 a month. What did she earn before?", a: "$2200", choices: ["$2200", "$2305", "$2425"] },
    { q: "A class scored an average of 70% in a test. After bonus marks raise every score by 5 marks (out of 100), the new average is?", a: "75%", choices: ["75%", "70%", "73.5%"] },
    { q: "A jacket marked $200 has a 30% discount. With 9% GST charged on the discounted price, what is the final amount paid?", a: "$152.60", choices: ["$152.60", "$140", "$162"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6m-pe1": buildP6mPe1, "p6m-pe2": buildP6mPe2 };
export const P6_MATH_PERCENTAGE_QUESTION_COUNTS = { "p6m-pe1": 12, "p6m-pe2": 12 };
export function buildMathPercentageQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
