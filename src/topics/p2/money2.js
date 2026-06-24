import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildMn1() {
  // Dollars and Cents
  return shuffle([
    { q: "$2.50 + $1.20 = ?", a: "$3.70", choices: ["$3.50", "$3.70", "$3.80"], explain: "Money adds like numbers when you line up dollars with dollars and cents with cents. $2.50 + $1.20 gives $3.70." },
    { q: "$1.00 + $0.50 = ?", a: "$1.50", choices: ["$1.30", "$1.50", "$1.60"], explain: "Add dollars to dollars and cents to cents. $1.00 plus 50 cents is one dollar and fifty cents, so $1.50." },
    { q: "$3.25 + $1.50 = ?", a: "$4.75", choices: ["$4.50", "$4.75", "$5.00"], explain: "Keep dollars under dollars and cents under cents, then add each part. $3.25 + $1.50 makes $4.75." },
    { q: "$5.00 + $2.30 = ?", a: "$7.30", choices: ["$7.00", "$7.30", "$7.50"], explain: "Add the dollar parts and the cent parts separately. $5 and $2 make $7, plus 30 cents, so $7.30." },
    { q: "$1.80 + $1.20 = ?", a: "$3.00", choices: ["$2.80", "$3.00", "$3.20"], explain: "Remember 100 cents make $1. Here 80 + 20 cents is 100 cents = $1, plus $1 + $1, so the total is $3.00." },
    { q: "$4.50 + $0.50 = ?", a: "$5.00", choices: ["$4.80", "$5.00", "$5.50"], explain: "100 cents make $1, so 50 + 50 cents is a whole dollar. That extra dollar on top of $4 makes $5.00." },
    { q: "$2.00 + $3.75 = ?", a: "$5.75", choices: ["$5.50", "$5.75", "$6.00"], explain: "Add dollars to dollars and cents to cents. $2 and $3 make $5, plus 75 cents, so $5.75." },
    { q: "$0.60 + $0.40 = ?", a: "$1.00", choices: ["$0.90", "$1.00", "$1.10"], explain: "100 cents make $1. Here 60 + 40 cents is exactly 100 cents, which is one whole dollar, so $1.00." },
    { q: "$6.10 + $1.80 = ?", a: "$7.90", choices: ["$7.80", "$7.90", "$8.10"], explain: "Add the dollar parts then the cent parts. $6 and $1 make $7, and 10 + 80 cents is 90 cents, so $7.90." },
    { q: "$3.45 + $2.55 = ?", a: "$6.00", choices: ["$5.90", "$6.00", "$6.10"], explain: "100 cents make $1, so 45 + 55 cents is 100 cents = $1. Add that to $3 + $2 and you get $6.00." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMn2() {
  // Making Change
  return shuffle([
    { q: "You pay $5 for a $3.50 item. Change?", a: "$1.50", choices: ["$1.00", "$1.50", "$2.00"], explain: "Change is what is left when you take the price from the money you gave. $5.00 − $3.50 = $1.50." },
    { q: "You pay $10 for a $7.00 item. Change?", a: "$3.00", choices: ["$2.00", "$3.00", "$4.00"], explain: "Change means subtracting the cost from what you paid. $10.00 − $7.00 = $3.00." },
    { q: "You pay $5 for a $2.80 item. Change?", a: "$2.20", choices: ["$2.00", "$2.20", "$2.50"], explain: "Find change by taking the price away from the cash you gave. $5.00 − $2.80 = $2.20." },
    { q: "You pay $2 for a $1.30 item. Change?", a: "$0.70", choices: ["$0.50", "$0.70", "$0.80"], explain: "Change is the leftover money: subtract the cost from what you paid. $2.00 − $1.30 = $0.70." },
    { q: "You pay $10 for a $4.50 item. Change?", a: "$5.50", choices: ["$5.00", "$5.50", "$6.00"], explain: "Change means what is left after paying. Take the price from your cash: $10.00 − $4.50 = $5.50." },
    { q: "You pay $5 for a $4.25 item. Change?", a: "$0.75", choices: ["$0.50", "$0.75", "$1.00"], explain: "Change is the money returned to you: subtract the price from what you gave. $5.00 − $4.25 = $0.75." },
    { q: "You pay $10 for a $8.90 item. Change?", a: "$1.10", choices: ["$1.00", "$1.10", "$1.20"], explain: "Find change by taking the cost from the cash paid. $10.00 − $8.90 = $1.10." },
    { q: "You pay $2 for a $0.80 item. Change?", a: "$1.20", choices: ["$1.00", "$1.20", "$1.50"], explain: "Change is your leftover money after paying. Subtract the price: $2.00 − $0.80 = $1.20." },
    { q: "You pay $5 for a $1.75 item. Change?", a: "$3.25", choices: ["$3.00", "$3.25", "$3.50"], explain: "Change means subtracting the cost from what you handed over. $5.00 − $1.75 = $3.25." },
    { q: "You pay $10 for a $6.60 item. Change?", a: "$3.40", choices: ["$3.20", "$3.40", "$3.60"], explain: "Change is the money you get back: take the price from your cash. $10.00 − $6.60 = $3.40." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMn3() {
  // Money Word Problems
  return shuffle([
    { q: "Ali buys a pen for $1.50 and a book for $3.00. How much in total?", a: "$4.50", choices: ["$4.00", "$4.50", "$5.00"], explain: "Total means putting amounts together, so add the prices. $1.50 + $3.00 = $4.50." },
    { q: "Mei has $10. She buys a toy for $6.50. How much left?", a: "$3.50", choices: ["$3.00", "$3.50", "$4.00"], explain: "'How much left' means take the spending away from what you had. $10.00 − $6.50 = $3.50." },
    { q: "A sandwich costs $2.80. A drink costs $1.20. Total?", a: "$4.00", choices: ["$3.80", "$4.00", "$4.20"], explain: "Total means adding the costs. Note 80 + 20 cents makes a whole dollar, so $2.80 + $1.20 = $4.00." },
    { q: "Raj has $5. He buys 2 erasers at $0.50 each. How much left?", a: "$4.00", choices: ["$3.50", "$4.00", "$4.50"], explain: "First find the spending: 2 erasers at $0.50 each is $1.00. Then take it away: $5.00 − $1.00 = $4.00." },
    { q: "Siti saves $2 each week. After 3 weeks she has?", a: "$6.00", choices: ["$5.00", "$6.00", "$8.00"], explain: "Saving the same each week is repeated adding, like multiplying. 3 weeks of $2 is $2 + $2 + $2 = $6.00." },
    { q: "A ruler costs $1.20 and a pencil costs $0.80. Total?", a: "$2.00", choices: ["$1.80", "$2.00", "$2.20"], explain: "Total means add the prices. Here 20 + 80 cents makes a whole dollar, so $1.20 + $0.80 = $2.00." },
    { q: "Tom has $8. He buys a book for $5.50. How much change?", a: "$2.50", choices: ["$2.00", "$2.50", "$3.00"], explain: "Change is what is left after paying, so subtract the price. $8.00 − $5.50 = $2.50." },
    { q: "3 apples cost $0.60 each. Total cost?", a: "$1.80", choices: ["$1.60", "$1.80", "$2.00"], explain: "Same price each is repeated adding, like multiplying. 3 apples at $0.60 is $0.60 + $0.60 + $0.60 = $1.80." },
    { q: "Lily has $4.50. Her mum gives her $2.50. Total now?", a: "$7.00", choices: ["$6.50", "$7.00", "$7.50"], explain: "Getting more money means adding. Here 50 + 50 cents makes a dollar, so $4.50 + $2.50 = $7.00." },
    { q: "A cake costs $3.90. You pay $5. Change?", a: "$1.10", choices: ["$1.00", "$1.10", "$1.20"], explain: "Change is the money returned: take the price from what you paid. $5.00 − $3.90 = $1.10." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "p2m-mn1": buildMn1, "p2m-mn2": buildMn2, "p2m-mn3": buildMn3,
};

export const P2_MONEY2_QUESTION_COUNTS = {
  "p2m-mn1": 10, "p2m-mn2": 10, "p2m-mn3": 10,
};

export function buildMoney2Questions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
