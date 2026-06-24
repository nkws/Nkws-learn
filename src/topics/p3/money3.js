import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildMN1() {
  // Money Word Problems
  return shuffle([
    { q: "Ali buys 3 pens at $1.50 each. How much?", a: "$4.50", choices: ["$4.50", "$3.50", "$5.00"], explain: "Buying several of the same item means equal groups, so multiply the price by how many. 3 times $1.50 is $4.50." },
    { q: "Sara buys 2 books at $3.00 each. How much?", a: "$6.00", choices: ["$6.00", "$5.00", "$7.00"], explain: "Equal prices added up is the same as multiplying. 2 books at $3.00 is 2 times $3.00, which is $6.00." },
    { q: "Tom buys 4 erasers at $0.50 each. How much?", a: "$2.00", choices: ["$2.00", "$1.50", "$2.50"], explain: "Multiply the price by the number of items. 4 times $0.50 is $2.00, since two 50-cent coins make a dollar." },
    { q: "Mei buys 5 stickers at $0.20 each. How much?", a: "$1.00", choices: ["$1.00", "$0.80", "$1.20"], explain: "Same price each time means multiply. 5 times $0.20 is $1.00, because five 20-cent pieces make a dollar." },
    { q: "A toy costs $4.50 and a ball costs $2.30. Total?", a: "$6.80", choices: ["$6.80", "$7.20", "$6.20"], explain: "Total means add the prices together. Line up the dollars and cents: $4.50 + $2.30 is $6.80." },
    { q: "Ben buys 2 drinks at $1.20 each. How much?", a: "$2.40", choices: ["$2.40", "$2.20", "$3.00"], explain: "Two of the same price means multiply. 2 times $1.20 is $2.40." },
    { q: "A sandwich costs $3.50 and a juice costs $1.50. Total?", a: "$5.00", choices: ["$5.00", "$4.50", "$5.50"], explain: "Total means add the two prices. $3.50 + $1.50 is $5.00, since the 50 cents pair up to a dollar." },
    { q: "Lily buys 3 cupcakes at $2.00 each. How much?", a: "$6.00", choices: ["$6.00", "$5.00", "$7.00"], explain: "Equal groups of price, so multiply. 3 times $2.00 is $6.00." },
    { q: "A pencil costs $0.80 and a ruler costs $1.20. Total?", a: "$2.00", choices: ["$2.00", "$1.60", "$2.40"], explain: "Total means add the prices. $0.80 + $1.20 is $2.00, because the 80 and 20 cents make a whole dollar." },
    { q: "Dad buys 2 pizzas at $8.50 each. How much?", a: "$17.00", choices: ["$17.00", "$16.00", "$18.00"], explain: "Two at the same price means multiply. 2 times $8.50 is $17.00." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMN2() {
  // Making Change
  return shuffle([
    { q: "You pay $10 for a $6.80 item. Change?", a: "$3.20", choices: ["$3.20", "$4.20", "$2.80"], explain: "Change is the money you paid minus the price. Take the cost from what you gave: $10 minus $6.80 leaves $3.20." },
    { q: "You pay $5 for a $3.50 item. Change?", a: "$1.50", choices: ["$1.50", "$2.50", "$1.00"], explain: "Change is what you handed over minus the price. $5 minus $3.50 leaves $1.50." },
    { q: "You pay $10 for a $7.25 item. Change?", a: "$2.75", choices: ["$2.75", "$3.25", "$2.25"], explain: "Subtract the cost from the money you gave to find the change. $10 minus $7.25 leaves $2.75." },
    { q: "You pay $5 for a $2.60 item. Change?", a: "$2.40", choices: ["$2.40", "$3.40", "$2.00"], explain: "Change means money paid take away the price. $5 minus $2.60 leaves $2.40." },
    { q: "You pay $10 for a $4.90 item. Change?", a: "$5.10", choices: ["$5.10", "$4.90", "$5.90"], explain: "Find change by taking the price from what you paid. $10 minus $4.90 leaves $5.10." },
    { q: "You pay $20 for a $13.50 item. Change?", a: "$6.50", choices: ["$6.50", "$7.50", "$5.50"], explain: "Change is the money you gave minus the cost. $20 minus $13.50 leaves $6.50." },
    { q: "You pay $5 for a $1.75 item. Change?", a: "$3.25", choices: ["$3.25", "$3.75", "$2.75"], explain: "Subtract the price from the cash you handed over. $5 minus $1.75 leaves $3.25." },
    { q: "You pay $10 for a $8.40 item. Change?", a: "$1.60", choices: ["$1.60", "$2.60", "$1.40"], explain: "Change is money paid take away the price. $10 minus $8.40 leaves $1.60." },
    { q: "You pay $2 for a $0.80 item. Change?", a: "$1.20", choices: ["$1.20", "$1.80", "$0.80"], explain: "Take the cost away from what you gave to get the change. $2 minus $0.80 leaves $1.20." },
    { q: "You pay $10 for a $5.55 item. Change?", a: "$4.45", choices: ["$4.45", "$5.45", "$4.55"], explain: "Change is the money you paid minus the price. $10 minus $5.55 leaves $4.45." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMN3() {
  // Comparing Prices
  return shuffle([
    { q: "Which is cheaper: 3 for $6 or 2 for $5?", a: "3 for $6", choices: ["3 for $6", "2 for $5", "Same price"], explain: "To compare deals fairly, find the price of one item by dividing. 3 for $6 is $2 each, 2 for $5 is $2.50 each, so 3 for $6 is cheaper." },
    { q: "Which is cheaper: 4 for $8 or 3 for $9?", a: "4 for $8", choices: ["4 for $8", "3 for $9", "Same price"], explain: "Work out the cost of one by dividing. 4 for $8 is $2 each, 3 for $9 is $3 each, so 4 for $8 is the cheaper deal." },
    { q: "Which is cheaper: 2 for $6 or 3 for $6?", a: "3 for $6", choices: ["3 for $6", "2 for $6", "Same price"], explain: "Same total $6, but more items shares it further. 3 for $6 is $2 each while 2 for $6 is $3 each, so 3 for $6 is cheaper." },
    { q: "Which is cheaper per item: 5 for $10 or 2 for $6?", a: "5 for $10", choices: ["5 for $10", "2 for $6", "Same price"], explain: "Divide to find the price of one. 5 for $10 is $2 each, 2 for $6 is $3 each, so 5 for $10 is cheaper per item." },
    { q: "Which is cheaper: 4 for $4 or 2 for $3?", a: "4 for $4", choices: ["4 for $4", "2 for $3", "Same price"], explain: "Find the cost of one by dividing. 4 for $4 is $1 each, 2 for $3 is $1.50 each, so 4 for $4 is cheaper." },
    { q: "Shop A sells 3 apples for $3. Shop B sells 2 apples for $2. Which is cheaper per apple?", a: "Same price", choices: ["Same price", "Shop A", "Shop B"], explain: "Compare the price of one apple. Shop A is $3 divided by 3 = $1 each, Shop B is $2 divided by 2 = $1 each, so they cost the same." },
    { q: "Which costs less per item: 6 for $12 or 4 for $12?", a: "6 for $12", choices: ["6 for $12", "4 for $12", "Same price"], explain: "Same total $12, but more items shares it thinner. 6 for $12 is $2 each, 4 for $12 is $3 each, so 6 for $12 costs less per item." },
    { q: "Which is cheaper: 5 for $5 or 3 for $6?", a: "5 for $5", choices: ["5 for $5", "3 for $6", "Same price"], explain: "Divide to get the price of one. 5 for $5 is $1 each, 3 for $6 is $2 each, so 5 for $5 is the cheaper deal." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
