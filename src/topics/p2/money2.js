function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildMn1() {
  // Dollars and Cents
  return shuffle([
    { q: "$2.50 + $1.20 = ?", a: "$3.70", choices: ["$3.50", "$3.70", "$3.80"] },
    { q: "$1.00 + $0.50 = ?", a: "$1.50", choices: ["$1.30", "$1.50", "$1.60"] },
    { q: "$3.25 + $1.50 = ?", a: "$4.75", choices: ["$4.50", "$4.75", "$5.00"] },
    { q: "$5.00 + $2.30 = ?", a: "$7.30", choices: ["$7.00", "$7.30", "$7.50"] },
    { q: "$1.80 + $1.20 = ?", a: "$3.00", choices: ["$2.80", "$3.00", "$3.20"] },
    { q: "$4.50 + $0.50 = ?", a: "$5.00", choices: ["$4.80", "$5.00", "$5.50"] },
    { q: "$2.00 + $3.75 = ?", a: "$5.75", choices: ["$5.50", "$5.75", "$6.00"] },
    { q: "$0.60 + $0.40 = ?", a: "$1.00", choices: ["$0.90", "$1.00", "$1.10"] },
    { q: "$6.10 + $1.80 = ?", a: "$7.90", choices: ["$7.80", "$7.90", "$8.10"] },
    { q: "$3.45 + $2.55 = ?", a: "$6.00", choices: ["$5.90", "$6.00", "$6.10"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMn2() {
  // Making Change
  return shuffle([
    { q: "You pay $5 for a $3.50 item. Change?", a: "$1.50", choices: ["$1.00", "$1.50", "$2.00"] },
    { q: "You pay $10 for a $7.00 item. Change?", a: "$3.00", choices: ["$2.00", "$3.00", "$4.00"] },
    { q: "You pay $5 for a $2.80 item. Change?", a: "$2.20", choices: ["$2.00", "$2.20", "$2.50"] },
    { q: "You pay $2 for a $1.30 item. Change?", a: "$0.70", choices: ["$0.50", "$0.70", "$0.80"] },
    { q: "You pay $10 for a $4.50 item. Change?", a: "$5.50", choices: ["$5.00", "$5.50", "$6.00"] },
    { q: "You pay $5 for a $4.25 item. Change?", a: "$0.75", choices: ["$0.50", "$0.75", "$1.00"] },
    { q: "You pay $10 for a $8.90 item. Change?", a: "$1.10", choices: ["$1.00", "$1.10", "$1.20"] },
    { q: "You pay $2 for a $0.80 item. Change?", a: "$1.20", choices: ["$1.00", "$1.20", "$1.50"] },
    { q: "You pay $5 for a $1.75 item. Change?", a: "$3.25", choices: ["$3.00", "$3.25", "$3.50"] },
    { q: "You pay $10 for a $6.60 item. Change?", a: "$3.40", choices: ["$3.20", "$3.40", "$3.60"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMn3() {
  // Money Word Problems
  return shuffle([
    { q: "Ali buys a pen for $1.50 and a book for $3.00. How much in total?", a: "$4.50", choices: ["$4.00", "$4.50", "$5.00"] },
    { q: "Mei has $10. She buys a toy for $6.50. How much left?", a: "$3.50", choices: ["$3.00", "$3.50", "$4.00"] },
    { q: "A sandwich costs $2.80. A drink costs $1.20. Total?", a: "$4.00", choices: ["$3.80", "$4.00", "$4.20"] },
    { q: "Raj has $5. He buys 2 erasers at $0.50 each. How much left?", a: "$4.00", choices: ["$3.50", "$4.00", "$4.50"] },
    { q: "Siti saves $2 each week. After 3 weeks she has?", a: "$6.00", choices: ["$5.00", "$6.00", "$8.00"] },
    { q: "A ruler costs $1.20 and a pencil costs $0.80. Total?", a: "$2.00", choices: ["$1.80", "$2.00", "$2.20"] },
    { q: "Tom has $8. He buys a book for $5.50. How much change?", a: "$2.50", choices: ["$2.00", "$2.50", "$3.00"] },
    { q: "3 apples cost $0.60 each. Total cost?", a: "$1.80", choices: ["$1.60", "$1.80", "$2.00"] },
    { q: "Lily has $4.50. Her mum gives her $2.50. Total now?", a: "$7.00", choices: ["$6.50", "$7.00", "$7.50"] },
    { q: "A cake costs $3.90. You pay $5. Change?", a: "$1.10", choices: ["$1.00", "$1.10", "$1.20"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
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
