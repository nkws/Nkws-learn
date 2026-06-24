import { shuffle } from "../../utils/helpers";

export const P5_MATH_EXTENDED_INTRO = {
  "p5m-de1": {
    title: "Decimals",
    pages: [
      { text: "Decimals let us express parts of a whole using the decimal point: 0.5 = ½, 0.25 = ¼.", emoji: "0.5 = ½" },
      { text: "Add/subtract decimals: line up the decimal points! 3.45 + 1.2 = 3.45 + 1.20 = 4.65.", emoji: "📐 ." },
    ],
  },
  "p5m-av1": {
    title: "Average",
    pages: [
      { text: "Average (mean) = Total ÷ Number of items. If scores are 70, 80, 90, average = 240 ÷ 3 = 80.", emoji: "📊 ÷" },
      { text: "If you know the average and the count, you can find the total: Average × Count = Total.", emoji: "Avg × N = Total" },
    ],
  },
  "p5m-vo1": {
    title: "Volume",
    pages: [
      { text: "Volume = Length × Width × Height. A box 4 cm × 3 cm × 2 cm has 24 cm³ of space.", emoji: "📦 L × W × H" },
      { text: "1 litre = 1000 cm³. A 10 × 10 × 10 cm container holds exactly 1 litre!", emoji: "1 L = 1000 cm³" },
    ],
  },
};

function buildP5mDe1() {
  return shuffle([
    { q: "3.45 + 1.2 = ?", a: "4.65", choices: ["4.65", "4.47", "3.57"], explain: "Add decimals by lining up the decimal points so each digit meets its matching place value. Write 1.2 as 1.20, then add columns: 3.45 + 1.20 = 4.65." },
    { q: "5.0 − 2.35 = ?", a: "2.65", choices: ["2.65", "2.75", "3.35"], explain: "Keep place values aligned by writing the same number of decimals: 5.00 − 2.35. Subtract column by column, borrowing as needed, to get 2.65." },
    { q: "0.6 × 4 = ?", a: "2.4", choices: ["2.4", "0.24", "24"], explain: "Multiplying by a whole number repeats the value: 0.6 four times. Six tenths × 4 = twenty-four tenths = 2.4 — one decimal place in, one decimal place out." },
    { q: "7.2 ÷ 3 = ?", a: "2.4", choices: ["2.4", "4.2", "21.6"], explain: "Dividing shares the value into equal groups, and the decimal point in the answer sits above the one in 7.2. 7.2 ÷ 3 = 2.4." },
    { q: "Which is bigger: 0.45 or 0.5?", a: "0.5", choices: ["0.5", "0.45", "Same"], explain: "Compare decimals by place value, not by length. Write 0.5 as 0.50; comparing tenths first, 5 tenths beats 4 tenths, so 0.5 is bigger." },
    { q: "Round 3.467 to 2 decimal places.", a: "3.47", choices: ["3.47", "3.46", "3.50"], explain: "Rounding keeps the nearest value at the chosen place. Look at the next digit after 2 places: it's 7, which is 5 or more, so round the hundredths up: 3.47." },
    { q: "Convert 3/8 to a decimal.", a: "0.375", choices: ["0.375", "0.38", "0.83"], explain: "A fraction is a division: 3/8 means 3 ÷ 8. Dividing gives 0.375 exactly." },
    { q: "2.5 × 0.4 = ?", a: "1.0", choices: ["1.0", "10.0", "0.1"], explain: "Multiply as whole numbers (25 × 4 = 100), then count decimal places in the question: one in 2.5 plus one in 0.4 = two places, so 100 becomes 1.00 = 1.0." },
    { q: "Order from smallest: 0.3, 0.03, 0.33", a: "0.03, 0.3, 0.33", choices: ["0.03, 0.3, 0.33", "0.3, 0.03, 0.33", "0.33, 0.3, 0.03"], explain: "Compare place value from the left. 0.03 has 0 tenths so it's smallest; 0.3 and 0.33 both have 3 tenths, so the hundredths decide: 0.03, 0.3, 0.33." },
    { q: "8.1 ÷ 0.3 = ?", a: "27", choices: ["27", "2.7", "270"], explain: "Dividing by a decimal is easier if you scale both numbers up so the divisor is whole. Multiply each by 10: 81 ÷ 3 = 27, and the value of the answer is unchanged." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5mAv1() {
  return shuffle([
    { q: "The average of 10, 20 and 30 is?", a: "20", choices: ["20", "30", "60"], explain: "The average is the total shared equally: total ÷ how many. Add them, 10 + 20 + 30 = 60, then divide by 3 numbers: 60 ÷ 3 = 20." },
    { q: "Tom scored 70, 80 and 90 on three tests. What is his average?", a: "80", choices: ["80", "90", "70"], explain: "Average means levelling the scores out: total ÷ how many. Total is 70 + 80 + 90 = 240, over 3 tests: 240 ÷ 3 = 80." },
    { q: "The average of 4 numbers is 15. What is the total?", a: "60", choices: ["60", "15", "19"], explain: "Average × how many = the total, because the average is the total spread evenly. So 15 × 4 = 60." },
    { q: "5 students weigh 40, 42, 38, 45 and 35 kg. What is their average?", a: "40 kg", choices: ["40 kg", "42 kg", "38 kg"], explain: "Average = total ÷ how many. The five weights total 200 kg, shared over 5 students: 200 ÷ 5 = 40 kg." },
    { q: "The average of 3 numbers is 12. Two numbers are 10 and 8. What is the third?", a: "18", choices: ["18", "12", "14"], explain: "Average × how many gives the total: 12 × 3 = 36. The known two make 10 + 8 = 18, so the third is the rest: 36 − 18 = 18." },
    { q: "6 books cost an average of $8 each. What is the total cost?", a: "$48", choices: ["$48", "$8", "$14"], explain: "The average is the total split evenly, so total = average × how many: $8 × 6 = $48." },
    { q: "The average height of 4 children is 130 cm. What is their total height?", a: "520 cm", choices: ["520 cm", "130 cm", "34 cm"], explain: "To recover a total from an average, multiply by how many there are: 130 × 4 = 520 cm." },
    { q: "Five test marks are 65, 75, 80, 70, and 60. Which calculation correctly finds the average mark?", a: "(65 + 75 + 80 + 70 + 60) ÷ 5", choices: ["(65 + 75 + 80 + 70 + 60) ÷ 5", "(65 + 75 + 80 + 70 + 60) × 5", "65 + 75 + 80 + 70 + 60 only"], explain: "An average shares the total equally: add all five marks to get 350, then divide by 5 items to get 70. Multiplying instead of dividing gives a wrong, enormous answer." },
    { q: "Sam scored 60, 70, 80 and 90. What is his average?", a: "75", choices: ["75", "80", "70"], explain: "Average = total ÷ how many. The four scores total 300, over 4 tests: 300 ÷ 4 = 75." },
    { q: "The average of 5 numbers is 20. If one number is removed and the average becomes 18, what was the removed number?", a: "28", choices: ["28", "20", "22"], explain: "Average × how many = the total. Five numbers averaging 20 total 5 × 20 = 100; after removing one, four numbers averaging 18 total 72. The removed number is the difference: 100 − 72 = 28." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5mVo1() {
  return shuffle([
    { q: "A box is 4 cm long, 3 cm wide and 2 cm high. What is its volume?", a: "24 cm³", choices: ["24 cm³", "9 cm³", "18 cm³"], explain: "Volume is how many unit cubes fit inside, which is length × width × height. So 4 × 3 × 2 = 24 cm³." },
    { q: "A gift box is 6 cm long, 4 cm wide, and 5 cm high. How do you calculate its volume?", a: "6 × 4 × 5 = 120 cm³", choices: ["6 × 4 × 5 = 120 cm³", "6 + 4 + 5 = 15 cm", "2 × (6 + 4 + 5) = 30 cm"], explain: "Volume is the space inside a 3-D shape, found by multiplying all three dimensions: length × width × height = 6 × 4 × 5 = 120 cm³." },
    { q: "A cube has side 5 cm. What is its volume?", a: "125 cm³", choices: ["125 cm³", "25 cm³", "15 cm³"], explain: "A cube has equal length, width and height, so volume = side × side × side. Here 5 × 5 × 5 = 125 cm³." },
    { q: "How many cm³ in 1 litre?", a: "1000", choices: ["1000", "100", "10"], explain: "Litres and cm³ both measure volume, linked by a fixed rule: a 10 × 10 × 10 cm cube holds exactly 1 litre, and 10 × 10 × 10 = 1000 cm³." },
    { q: "A tank is 30 cm × 20 cm × 10 cm. How many litres does it hold?", a: "6 litres", choices: ["6 litres", "60 litres", "600 litres"], explain: "Find the volume first: 30 × 20 × 10 = 6000 cm³. Then convert using 1000 cm³ = 1 litre: 6000 ÷ 1000 = 6 litres." },
    { q: "A cuboid has volume 60 cm³. Its base is 5 cm × 4 cm. What is the height?", a: "3 cm", choices: ["3 cm", "12 cm", "20 cm"], explain: "Since volume = base area × height, you reverse it by dividing. Base area is 5 × 4 = 20 cm², so height = 60 ÷ 20 = 3 cm." },
    { q: "A cube has volume 64 cm³. What is the length of one side?", a: "4 cm", choices: ["4 cm", "8 cm", "16 cm"], explain: "A cube's volume is side × side × side, so finding the side means asking which number cubed gives 64. Since 4 × 4 × 4 = 64, the side is 4 cm." },
    { q: "A container is 25 cm × 20 cm × 16 cm. What is its volume?", a: "8000 cm³", choices: ["8000 cm³", "61 cm³", "800 cm³"], explain: "Volume is the space inside, found by multiplying all three dimensions: 25 × 20 × 16 = 8000 cm³." },
    { q: "A fish tank holds 12 litres. How many cm³ is that?", a: "12 000 cm³", choices: ["12 000 cm³", "1200 cm³", "120 cm³"], explain: "Each litre is 1000 cm³, so converting from litres to cm³ means multiplying by 1000: 12 × 1000 = 12 000 cm³." },
    { q: "A cuboid is 10 cm × 8 cm × 5 cm. It is half full of water. What volume of water?", a: "200 cm³", choices: ["200 cm³", "400 cm³", "100 cm³"], explain: "Find the full volume, then take the fraction asked for. Full = 10 × 8 × 5 = 400 cm³; half full means 400 ÷ 2 = 200 cm³." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5m-de1": buildP5mDe1, "p5m-av1": buildP5mAv1, "p5m-vo1": buildP5mVo1 };
export const P5_MATH_EXTENDED_QUESTION_COUNTS = { "p5m-de1": 10, "p5m-av1": 10, "p5m-vo1": 10 };
export function buildMathExtended5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
