import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildMN1() {
  // Money Word Problems
  return shuffle([
    { q: "Ali buys 3 pens at $1.50 each. How much?", a: "$4.50", choices: ["$4.50", "$3.50", "$5.00"] },
    { q: "Sara buys 2 books at $3.00 each. How much?", a: "$6.00", choices: ["$6.00", "$5.00", "$7.00"] },
    { q: "Tom buys 4 erasers at $0.50 each. How much?", a: "$2.00", choices: ["$2.00", "$1.50", "$2.50"] },
    { q: "Mei buys 5 stickers at $0.20 each. How much?", a: "$1.00", choices: ["$1.00", "$0.80", "$1.20"] },
    { q: "A toy costs $4.50 and a ball costs $2.30. Total?", a: "$6.80", choices: ["$6.80", "$7.20", "$6.20"] },
    { q: "Ben buys 2 drinks at $1.20 each. How much?", a: "$2.40", choices: ["$2.40", "$2.20", "$3.00"] },
    { q: "A sandwich costs $3.50 and a juice costs $1.50. Total?", a: "$5.00", choices: ["$5.00", "$4.50", "$5.50"] },
    { q: "Lily buys 3 cupcakes at $2.00 each. How much?", a: "$6.00", choices: ["$6.00", "$5.00", "$7.00"] },
    { q: "A pencil costs $0.80 and a ruler costs $1.20. Total?", a: "$2.00", choices: ["$2.00", "$1.60", "$2.40"] },
    { q: "Dad buys 2 pizzas at $8.50 each. How much?", a: "$17.00", choices: ["$17.00", "$16.00", "$18.00"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMN2() {
  // Making Change
  return shuffle([
    { q: "You pay $10 for a $6.80 item. Change?", a: "$3.20", choices: ["$3.20", "$4.20", "$2.80"] },
    { q: "You pay $5 for a $3.50 item. Change?", a: "$1.50", choices: ["$1.50", "$2.50", "$1.00"] },
    { q: "You pay $10 for a $7.25 item. Change?", a: "$2.75", choices: ["$2.75", "$3.25", "$2.25"] },
    { q: "You pay $5 for a $2.60 item. Change?", a: "$2.40", choices: ["$2.40", "$3.40", "$2.00"] },
    { q: "You pay $10 for a $4.90 item. Change?", a: "$5.10", choices: ["$5.10", "$4.90", "$5.90"] },
    { q: "You pay $20 for a $13.50 item. Change?", a: "$6.50", choices: ["$6.50", "$7.50", "$5.50"] },
    { q: "You pay $5 for a $1.75 item. Change?", a: "$3.25", choices: ["$3.25", "$3.75", "$2.75"] },
    { q: "You pay $10 for a $8.40 item. Change?", a: "$1.60", choices: ["$1.60", "$2.60", "$1.40"] },
    { q: "You pay $2 for a $0.80 item. Change?", a: "$1.20", choices: ["$1.20", "$1.80", "$0.80"] },
    { q: "You pay $10 for a $5.55 item. Change?", a: "$4.45", choices: ["$4.45", "$5.45", "$4.55"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMN3() {
  // Comparing Prices
  return shuffle([
    { q: "Which is cheaper: 3 for $6 or 2 for $5?", a: "3 for $6", choices: ["3 for $6", "2 for $5", "Same price"] },
    { q: "Which is cheaper: 4 for $8 or 3 for $9?", a: "4 for $8", choices: ["4 for $8", "3 for $9", "Same price"] },
    { q: "Which is cheaper: 2 for $6 or 3 for $6?", a: "3 for $6", choices: ["3 for $6", "2 for $6", "Same price"] },
    { q: "Which is cheaper per item: 5 for $10 or 2 for $6?", a: "5 for $10", choices: ["5 for $10", "2 for $6", "Same price"] },
    { q: "Which is cheaper: 4 for $4 or 2 for $3?", a: "4 for $4", choices: ["4 for $4", "2 for $3", "Same price"] },
    { q: "Shop A sells 3 apples for $3. Shop B sells 2 apples for $2. Which is cheaper per apple?", a: "Same price", choices: ["Same price", "Shop A", "Shop B"] },
    { q: "Which costs less: 6 for $12 or 4 for $12?", a: "6 for $12", choices: ["6 for $12", "4 for $12", "Same price"] },
    { q: "Which is cheaper: 5 for $5 or 3 for $6?", a: "5 for $5", choices: ["5 for $5", "3 for $6", "Same price"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "p3m-mn1": buildMN1, "p3m-mn2": buildMN2, "p3m-mn3": buildMN3,
};

export const P3_MONEY3_QUESTION_COUNTS = {
  "p3m-mn1": 10, "p3m-mn2": 10, "p3m-mn3": 8,
};

export function buildMoney3Questions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
