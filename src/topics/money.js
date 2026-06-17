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
    { q: "Which is worth more: 10¢ or 50¢?", a: "50¢", choices: ["10¢", "50¢", "Same"], explain: "A bigger number of cents is worth more money. 50 cents is more than 10 cents, so 50¢ is worth more." },
    { q: "How many cents in $1?", a: "100", choices: ["10", "50", "100"], explain: "One dollar is made of lots of cents. It takes 100 cents to make 1 dollar." },
    { q: "Which Singapore coin is worth the least?", a: "5¢", choices: ["5¢", "10¢", "20¢"], explain: "The coin with the smallest number of cents is worth the least. The 5-cent coin is the smallest amount of all the coins." },
    { q: "Two 50¢ coins make...?", a: "$1", choices: ["50¢", "$1", "$2"], explain: "100 cents make 1 dollar. Two 50-cent coins are 50 + 50 = 100 cents, which is $1." },
    { q: "Which is worth more: 20¢ or 5¢?", a: "20¢", choices: ["5¢", "20¢", "Same"], explain: "A bigger number of cents is worth more money. 20 cents is more than 5 cents, so 20¢ is worth more." },
    { q: "Five 20¢ coins make...?", a: "$1", choices: ["60¢", "$1", "$2"], explain: "100 cents make 1 dollar. Five 20-cent coins are 20 + 20 + 20 + 20 + 20 = 100 cents, which is $1." },
    { q: "Ten 10¢ coins make...?", a: "$1", choices: ["50¢", "$1", "$10"], explain: "100 cents make 1 dollar. Ten 10-cent coins are ten lots of 10, which is 100 cents, and that is $1." },
    { q: "Is $1 worth more than 50¢?", a: "Yes", choices: ["Yes", "No", "Same"], explain: "One dollar is 100 cents, and 50 cents is only half of that. Since 100 is more than 50, yes, $1 is worth more." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMon2() {
  return shuffle([
    { q: "Which coin is 5 cents?", a: "The smallest silver coin", choices: ["The smallest silver coin", "The biggest coin", "The gold coin"], explain: "Coins come in different sizes and colours. The 5-cent coin is the tiniest silver one, so it is the smallest silver coin." },
    { q: "The $1 coin is what colour?", a: "Gold", choices: ["Silver", "Gold", "Bronze"], explain: "The other coins are silver, but the most valuable one stands out. The $1 coin is gold in colour." },
    { q: "Which is the biggest Singapore coin?", a: "50¢", choices: ["10¢", "20¢", "50¢"], explain: "Among the silver coins, the 50-cent coin is the largest one. So the biggest Singapore coin is the 50¢." },
    { q: "A 10-cent coin is worth __ 5-cent coins.", a: "2", choices: ["1", "2", "5"], explain: "We can swap coins for the same amount of money. Two 5-cent coins are 5 + 5 = 10 cents, the same as one 10-cent coin, so the answer is 2." },
    { q: "A 20-cent coin is worth __ 10-cent coins.", a: "2", choices: ["1", "2", "4"], explain: "We can swap coins for the same amount of money. Two 10-cent coins are 10 + 10 = 20 cents, the same as one 20-cent coin, so the answer is 2." },
    { q: "A 50-cent coin is worth __ 10-cent coins.", a: "5", choices: ["2", "5", "10"], explain: "We can swap coins for the same amount of money. Five 10-cent coins make 10 + 10 + 10 + 10 + 10 = 50 cents, the same as one 50¢, so the answer is 5." },
    { q: "Which coin is needed to make 50¢ with the fewest coins?", a: "One 50¢ coin", choices: ["Five 10¢ coins", "One 50¢ coin", "Ten 5¢ coins"], explain: "To use the fewest coins, pick the one coin that is already the right amount. A single 50-cent coin makes 50¢ all by itself." },
    { q: "How many 20¢ coins make 40¢?", a: "2", choices: ["1", "2", "4"], explain: "We add coins of the same kind until we reach the amount. 20 + 20 = 40 cents, so it takes 2 twenty-cent coins." },
    { q: "A $1 coin is worth __ 10-cent coins.", a: "10", choices: ["5", "10", "20"], explain: "One dollar is 100 cents, and each 10-cent coin is 10 cents. Counting 10s up to 100 takes 10 coins, so the answer is 10." },
    { q: "Which is worth less: 20¢ or 10¢?", a: "10¢", choices: ["10¢", "20¢", "Same"], explain: "A smaller number of cents is worth less money. 10 cents is less than 20 cents, so 10¢ is worth less." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMon3() {
  return shuffle([
    { q: "10¢ + 10¢ = ?", a: "20¢", choices: ["15¢", "20¢", "30¢"], explain: "To find how much money in all, we add the cents together. 10 + 10 = 20, so it is 20¢." },
    { q: "20¢ + 20¢ = ?", a: "40¢", choices: ["30¢", "40¢", "50¢"], explain: "To find how much money in all, we add the cents together. 20 + 20 = 40, so it is 40¢." },
    { q: "50¢ + 10¢ = ?", a: "60¢", choices: ["55¢", "60¢", "70¢"], explain: "To find how much money in all, we add the cents together. 50 + 10 = 60, so it is 60¢." },
    { q: "20¢ + 10¢ + 5¢ = ?", a: "35¢", choices: ["30¢", "35¢", "40¢"], explain: "To find how much money in all, we add the cents together. 20 + 10 = 30, then 30 + 5 = 35, so it is 35¢." },
    { q: "50¢ + 50¢ = ?", a: "$1", choices: ["75¢", "$1", "$1.50"], explain: "We add the cents together: 50 + 50 = 100. And 100 cents make 1 dollar, so the answer is $1." },
    { q: "20¢ + 20¢ + 10¢ = ?", a: "50¢", choices: ["40¢", "50¢", "60¢"], explain: "To find how much money in all, we add the cents together. 20 + 20 = 40, then 40 + 10 = 50, so it is 50¢." },
    { q: "10¢ + 10¢ + 10¢ = ?", a: "30¢", choices: ["20¢", "30¢", "40¢"], explain: "To find how much money in all, we add the cents together. Three lots of 10 are 10 + 10 + 10 = 30, so it is 30¢." },
    { q: "50¢ + 20¢ = ?", a: "70¢", choices: ["60¢", "70¢", "80¢"], explain: "To find how much money in all, we add the cents together. 50 + 20 = 70, so it is 70¢." },
    { q: "5¢ + 5¢ + 5¢ + 5¢ = ?", a: "20¢", choices: ["15¢", "20¢", "25¢"], explain: "To find how much money in all, we add the cents together. Four lots of 5 are 5 + 5 + 5 + 5 = 20, so it is 20¢." },
    { q: "50¢ + 20¢ + 10¢ = ?", a: "80¢", choices: ["70¢", "80¢", "90¢"], explain: "To find how much money in all, we add the cents together. 50 + 20 = 70, then 70 + 10 = 80, so it is 80¢." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildMon4() {
  return shuffle([
    { q: "How do you make 30¢ using 10¢ coins?", a: "Three 10¢ coins", choices: ["Two 10¢ coins", "Three 10¢ coins", "Four 10¢ coins"], explain: "We add 10-cent coins until we reach the amount. 10 + 10 + 10 = 30, so three 10¢ coins make 30¢." },
    { q: "How do you make 50¢ with the fewest coins?", a: "One 50¢ coin", choices: ["Five 10¢ coins", "One 50¢ coin", "Two 20¢ + one 10¢"], explain: "To use the fewest coins, pick the one coin that already equals the amount. A single 50-cent coin makes 50¢ on its own." },
    { q: "How do you make $1 using 50¢ coins?", a: "Two 50¢ coins", choices: ["One 50¢ coin", "Two 50¢ coins", "Five 50¢ coins"], explain: "100 cents make 1 dollar. 50 + 50 = 100, so two 50-cent coins make $1." },
    { q: "Make 25¢: which coins?", a: "20¢ + 5¢", choices: ["10¢ + 10¢", "20¢ + 5¢", "20¢ + 10¢"], explain: "We pick coins that add up to the amount. 20 + 5 = 25, so a 20¢ coin and a 5¢ coin make 25¢." },
    { q: "Make 70¢: which coins?", a: "50¢ + 20¢", choices: ["50¢ + 10¢", "50¢ + 20¢", "20¢ + 20¢ + 20¢"], explain: "We pick coins that add up to the amount. 50 + 20 = 70, so a 50¢ coin and a 20¢ coin make 70¢." },
    { q: "Make 15¢: which coins?", a: "10¢ + 5¢", choices: ["5¢ + 5¢", "10¢ + 5¢", "20¢"], explain: "We pick coins that add up to the amount. 10 + 5 = 15, so a 10¢ coin and a 5¢ coin make 15¢." },
    { q: "A sweet costs 30¢. You have 50¢. How much change?", a: "20¢", choices: ["10¢", "20¢", "30¢"], explain: "Change is the money left after you pay, so we subtract the cost. 50 − 30 = 20, so you get 20¢ change." },
    { q: "A drink costs 80¢. You pay $1. How much change?", a: "20¢", choices: ["10¢", "20¢", "30¢"], explain: "Change is the money left after you pay. $1 is 100 cents, and 100 − 80 = 20, so you get 20¢ change." },
    { q: "An eraser costs 40¢. You have 50¢. How much change?", a: "10¢", choices: ["5¢", "10¢", "15¢"], explain: "Change is the money left after you pay, so we subtract the cost. 50 − 40 = 10, so you get 10¢ change." },
    { q: "A sticker costs 60¢. You pay $1. How much change?", a: "40¢", choices: ["30¢", "40¢", "50¢"], explain: "Change is the money left after you pay. $1 is 100 cents, and 100 − 60 = 40, so you get 40¢ change." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
