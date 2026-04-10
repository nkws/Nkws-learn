import { shuffle } from "../utils/helpers";
export const MONEY_INTRO = {
  "mon-1": {
    title: "Singapore Coins",
    pages: [
      { text: "We use money to buy things! In Singapore, we have coins and notes.", emoji: "🪙💵" },
      { text: "The coins are: 5 cents, 10 cents, 20 cents, 50 cents, and 1 dollar.", emoji: "5¢  10¢  20¢  50¢  $1" },
      { text: "100 cents = 1 dollar. So two 50-cent coins make $1!", emoji: "50¢ + 50¢ = $1" },
      { text: "A 10-cent coin is small and silver. A 50-cent coin is big and silver.", emoji: "🪙 small → 🪙 big" },
      { text: "Let's learn about Singapore money!", emoji: "🦊 🪙 💪" },
    ],
  },
};

function buildMon1() {
  return shuffle([
    { q: "Which is worth more: 10¢ or 50¢?", a: "50¢", choices: ["10¢", "50¢", "Same"] },
    { q: "How many cents in $1?", a: "100", choices: ["10", "50", "100"] },
    { q: "Which Singapore coin is worth the least?", a: "5¢", choices: ["5¢", "10¢", "20¢"] },
    { q: "Two 50¢ coins make...?", a: "$1", choices: ["50¢", "$1", "$2"] },
    { q: "Which is worth more: 20¢ or 5¢?", a: "20¢", choices: ["5¢", "20¢", "Same"] },
    { q: "Five 20¢ coins make...?", a: "$1", choices: ["60¢", "$1", "$2"] },
    { q: "Ten 10¢ coins make...?", a: "$1", choices: ["50¢", "$1", "$10"] },
    { q: "Is $1 worth more than 50¢?", a: "Yes", choices: ["Yes", "No", "Same"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMon2() {
  return shuffle([
    { q: "Which coin is 5 cents?", a: "The smallest silver coin", choices: ["The smallest silver coin", "The biggest coin", "The gold coin"] },
    { q: "The $1 coin is what colour?", a: "Gold", choices: ["Silver", "Gold", "Bronze"] },
    { q: "Which is the biggest Singapore coin?", a: "50¢", choices: ["10¢", "20¢", "50¢"] },
    { q: "A 10-cent coin is worth __ 5-cent coins.", a: "2", choices: ["1", "2", "5"] },
    { q: "A 20-cent coin is worth __ 10-cent coins.", a: "2", choices: ["1", "2", "4"] },
    { q: "A 50-cent coin is worth __ 10-cent coins.", a: "5", choices: ["2", "5", "10"] },
    { q: "Which coin is needed to make 50¢ with the fewest coins?", a: "One 50¢ coin", choices: ["Five 10¢ coins", "One 50¢ coin", "Ten 5¢ coins"] },
    { q: "How many 20¢ coins make 40¢?", a: "2", choices: ["1", "2", "4"] },
    { q: "A $1 coin is worth __ 10-cent coins.", a: "10", choices: ["5", "10", "20"] },
    { q: "Which is worth less: 20¢ or 10¢?", a: "10¢", choices: ["10¢", "20¢", "Same"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMon3() {
  return shuffle([
    { q: "10¢ + 10¢ = ?", a: "20¢", choices: ["15¢", "20¢", "30¢"] },
    { q: "20¢ + 20¢ = ?", a: "40¢", choices: ["30¢", "40¢", "50¢"] },
    { q: "50¢ + 10¢ = ?", a: "60¢", choices: ["55¢", "60¢", "70¢"] },
    { q: "20¢ + 10¢ + 5¢ = ?", a: "35¢", choices: ["30¢", "35¢", "40¢"] },
    { q: "50¢ + 50¢ = ?", a: "$1", choices: ["75¢", "$1", "$1.50"] },
    { q: "20¢ + 20¢ + 10¢ = ?", a: "50¢", choices: ["40¢", "50¢", "60¢"] },
    { q: "10¢ + 10¢ + 10¢ = ?", a: "30¢", choices: ["20¢", "30¢", "40¢"] },
    { q: "50¢ + 20¢ = ?", a: "70¢", choices: ["60¢", "70¢", "80¢"] },
    { q: "5¢ + 5¢ + 5¢ + 5¢ = ?", a: "20¢", choices: ["15¢", "20¢", "25¢"] },
    { q: "50¢ + 20¢ + 10¢ = ?", a: "80¢", choices: ["70¢", "80¢", "90¢"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildMon4() {
  return shuffle([
    { q: "How do you make 30¢ using 10¢ coins?", a: "Three 10¢ coins", choices: ["Two 10¢ coins", "Three 10¢ coins", "Four 10¢ coins"] },
    { q: "How do you make 50¢ with the fewest coins?", a: "One 50¢ coin", choices: ["Five 10¢ coins", "One 50¢ coin", "Two 20¢ + one 10¢"] },
    { q: "How do you make $1 using 50¢ coins?", a: "Two 50¢ coins", choices: ["One 50¢ coin", "Two 50¢ coins", "Five 50¢ coins"] },
    { q: "Make 25¢: which coins?", a: "20¢ + 5¢", choices: ["10¢ + 10¢", "20¢ + 5¢", "20¢ + 10¢"] },
    { q: "Make 70¢: which coins?", a: "50¢ + 20¢", choices: ["50¢ + 10¢", "50¢ + 20¢", "20¢ + 20¢ + 20¢"] },
    { q: "Make 15¢: which coins?", a: "10¢ + 5¢", choices: ["5¢ + 5¢", "10¢ + 5¢", "20¢"] },
    { q: "A sweet costs 30¢. You have 50¢. How much change?", a: "20¢", choices: ["10¢", "20¢", "30¢"] },
    { q: "A drink costs 80¢. You pay $1. How much change?", a: "20¢", choices: ["10¢", "20¢", "30¢"] },
    { q: "An eraser costs 40¢. You have 50¢. How much change?", a: "10¢", choices: ["5¢", "10¢", "15¢"] },
    { q: "A sticker costs 60¢. You pay $1. How much change?", a: "40¢", choices: ["30¢", "40¢", "50¢"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "mon-1": buildMon1, "mon-2": buildMon2, "mon-3": buildMon3, "mon-4": buildMon4,
};

export const MONEY_QUESTION_COUNTS = {
  "mon-1": 8, "mon-2": 10, "mon-3": 10, "mon-4": 10,
};

export function buildMoneyQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
