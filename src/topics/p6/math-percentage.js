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
    { q: "What is 25% of 80?", a: "20", choices: ["20", "25", "32"], explain: "Percent means 'out of 100', so X% of a number is (X ÷ 100) × number. 25% is a quarter, so 25% of 80 = (25 ÷ 100) × 80 = 20." },
    { q: "Express 3/5 as a percentage.", a: "60%", choices: ["60%", "35%", "53%"], explain: "A percentage is just a fraction out of 100, so rewrite 3/5 with 100 on the bottom: multiply top and bottom by 20 to get 60/100 = 60%." },
    { q: "A shirt costs $80. After a 25% discount, what is the new price?", a: "$60", choices: ["$60", "$55", "$20"], explain: "A discount is a part of the original price you don't pay. Find 25% of $80 = $20, then take it off: $80 − $20 = $60. (Or pay the 75% you keep: 0.75 × 80 = $60.)" },
    { q: "A meal costs $50 before GST. With 9% GST, what is the total price?", a: "$54.50", choices: ["$54.50", "$50.09", "$59"], explain: "GST is a tax added on top, so the total is the price plus that percentage of it. 9% of $50 = $4.50, so you pay $50 + $4.50 = $54.50." },
    { q: "If 30% of students are boys and there are 40 students, how many are boys?", a: "12", choices: ["12", "30", "10"], explain: "A percentage is a fraction of the whole group. The whole here is 40 students, so 30% of 40 = (30 ÷ 100) × 40 = 12 boys." },
    { q: "A book's price increased from $20 to $25. What is the percentage increase?", a: "25%", choices: ["25%", "5%", "20%"], explain: "Percentage change always compares the change to the ORIGINAL amount: (difference ÷ original) × 100%. The rise is $5 on $20, so (5 ÷ 20) × 100% = 25%." },
    { q: "A jacket originally cost $120. It is now $90. What is the percentage discount?", a: "25%", choices: ["25%", "30%", "33%"], explain: "Discount percentage measures the drop against the original price. The saving is $120 − $90 = $30, so (30 ÷ 120) × 100% = 25%." },
    { q: "Convert 0.04 to a percentage.", a: "4%", choices: ["4%", "40%", "0.4%"], explain: "Percent means 'per hundred', so a decimal becomes a percentage when you multiply by 100 (move the point two places): 0.04 × 100 = 4%." },
    { q: "Sam scored 18 out of 25 in a test. What is his score as a percentage?", a: "72%", choices: ["72%", "18%", "82%"], explain: "A score 'as a percentage' is the fraction of the total scaled to 100. 18 out of 25 is 18/25; (18 ÷ 25) × 100% = 72%." },
    { q: "A laptop's price drops from $1200 to $900. What is the percentage decrease?", a: "25%", choices: ["25%", "30%", "33%"], explain: "Percentage decrease compares the fall to the starting price: (difference ÷ original) × 100%. The drop is $300 on $1200, so (300 ÷ 1200) × 100% = 25%." },
    { q: "If 60% of a class of 30 students passed, how many failed?", a: "12", choices: ["12", "18", "20"], explain: "The whole class is 100%, so the rest who failed are 100% − 60% = 40%. 40% of 30 = (40 ÷ 100) × 30 = 12 students." },
    { q: "A toy is sold at $36 after a 10% discount. What was the original price?", a: "$40", choices: ["$40", "$39.60", "$46"], explain: "After a 10% discount you pay 90% of the original, so $36 stands for 90%. Find 100% by working back: $36 ÷ 0.9 = $40." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6mPe2() {
  return shuffle([
    { q: "After a 20% discount, a bag costs $48. What was the original price?", a: "$60", choices: ["$60", "$57.60", "$240"] , explain: "The price you pay is the original minus the discount, so $48 is 100% − 20% = 80% of the original. Work back to 100%: $48 ÷ 0.8 = $60." },
    { q: "A laptop is $1500. With 9% GST, the customer pays?", a: "$1635", choices: ["$1635", "$1509", "$1365"], explain: "GST adds a percentage on top, so the total is 100% + 9% = 109% of the price. Pay 1.09 × $1500 = $1635 (that's $1500 + $135 tax)." },
    { q: "A class of 40 has 60% boys. After 4 girls join, what percentage of the class are now boys?", a: "About 54.5%", choices: ["About 54.5%", "60%", "50%"], explain: "A percentage depends on the whole, and here the whole changes. Boys stay 60% of 40 = 24, but the class grows to 44, so boys are now 24/44 × 100% ≈ 54.5%." },
    { q: "Mei sold a phone for $480 and made a 20% profit. What was the cost price?", a: "$400", choices: ["$400", "$384", "$576"], explain: "Profit is a percentage of the COST price, so the $480 selling price is 100% + 20% = 120% of cost. Work back: $480 ÷ 1.2 = $400." },
    { q: "A shop offers '15% off, then a further 10% off the discounted price'. The original price is $200. What is the final price?", a: "$153", choices: ["$153", "$150", "$170"], explain: "Successive discounts apply to whatever's left, not the original, so you can't just add 15% + 10%. First 15% off: $200 × 0.85 = $170; then 10% off that: $170 × 0.9 = $153." },
    { q: "Ali got 45 out of 60 in a test. What is his score as a percentage?", a: "75%", choices: ["75%", "60%", "45%"], explain: "A score as a percentage is the fraction of the total rescaled to 100. 45 out of 60 is 45/60; (45 ÷ 60) × 100% = 75%." },
    { q: "A salary of $3000 increases by 8%. What is the new salary?", a: "$3240", choices: ["$3240", "$3008", "$3080"], explain: "An increase adds a percentage of the original on top, so the new amount is 100% + 8% = 108% of $3000: 1.08 × $3000 = $3240." },
    { q: "A water tank is 60% full. After 12 litres are added, it is 80% full. What is the tank's capacity?", a: "60 L", choices: ["60 L", "20 L", "100 L"], explain: "The same 12 litres caused the rise, so match it to the percentage gained: 80% − 60% = 20% of the tank = 12 L. Then 100% = 12 ÷ 0.2 = 60 L." },
    { q: "A book is sold for $32 at a 20% loss. What was the cost price?", a: "$40", choices: ["$40", "$25.60", "$38.40"], explain: "A loss is a percentage of the COST price, so $32 is 100% − 20% = 80% of cost. Work back to the full cost: $32 ÷ 0.8 = $40." },
    { q: "After a 5% pay rise, Lin earns $2310 a month. What did she earn before?", a: "$2200", choices: ["$2200", "$2305", "$2425"], explain: "A 5% rise makes the new pay 100% + 5% = 105% of the old. Since $2310 is the 105%, divide to undo it: $2310 ÷ 1.05 = $2200." },
    { q: "A class scored an average of 70% in a test. After bonus marks raise every score by 5 marks (out of 100), the new average is?", a: "75%", choices: ["75%", "70%", "73.5%"], explain: "Adding the SAME amount to every score shifts the average by exactly that amount. Out of 100, +5 marks is +5%, so the average goes from 70% to 75%." },
    { q: "A jacket marked $200 has a 30% discount. With 9% GST charged on the discounted price, what is the final amount paid?", a: "$152.60", choices: ["$152.60", "$140", "$162"], explain: "Handle the two changes in order, each on the running total. Discount first: $200 × 0.70 = $140; then GST on that: $140 × 1.09 = $152.60." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6m-pe1": buildP6mPe1, "p6m-pe2": buildP6mPe2 };
export const P6_MATH_PERCENTAGE_QUESTION_COUNTS = { "p6m-pe1": 12, "p6m-pe2": 12 };
export function buildMathPercentageQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
