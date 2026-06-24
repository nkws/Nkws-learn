import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P2_GRAPHS_INTRO = {
  "p2m-gr1": {
    title: "Reading Picture Graphs",
    pages: [
      { text: "A picture graph uses pictures to show data! Each picture stands for one thing.", emoji: "🍎🍎🍎 🍊🍊" },
      { text: "If we see 5 apple pictures, it means 5 children like apples!", emoji: "🍎🍎🍎🍎🍎 = 5" },
      { text: "We can compare: more apples means more children like apples.", emoji: "🍎🍎🍎 > 🍊🍊" },
      { text: "Bar graphs use bars instead of pictures. Taller bars mean more!", emoji: "📊" },
      { text: "Let's learn to read graphs! You can do it!", emoji: "🦊 📊 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildGr1() {
  // Reading Picture Graphs
  return shuffle([
    { q: "A picture graph shows: Apples 🍎🍎🍎🍎🍎, Oranges 🍊🍊🍊. How many children like apples?", a: "5", choices: ["3", "5", "8"], explain: "A picture graph shows how many by how many pictures there are. Count the apples: 5 pictures means 5 children." },
    { q: "A picture graph shows: Cats 🐱🐱🐱🐱, Dogs 🐶🐶🐶🐶🐶🐶. How many chose dogs?", a: "6", choices: ["4", "6", "10"], explain: "In a picture graph each picture stands for one. Count the dog pictures: there are 6, so 6 children chose dogs." },
    { q: "Picture graph: Red ●●●, Blue ●●●●●, Green ●●. How many chose blue?", a: "5", choices: ["3", "5", "2"], explain: "A picture graph shows how many by counting pictures. Count the blue dots: 5 of them, so 5 chose blue." },
    { q: "Picture graph: Apples 🍎🍎🍎🍎🍎, Oranges 🍊🍊🍊. How many more chose apples?", a: "2", choices: ["1", "2", "3"], explain: "To find 'how many more', count each row then take away the smaller. Apples 5, oranges 3, and 5 − 3 = 2 more." },
    { q: "Picture graph: Football ⚽⚽⚽⚽, Swimming 🏊🏊, Tennis 🎾🎾🎾. How many chose football?", a: "4", choices: ["2", "3", "4"], explain: "A picture graph shows how many — more pictures means more children. Count the football pictures: 4." },
    { q: "Picture graph: Vanilla 🍦🍦🍦, Chocolate 🍫🍫🍫🍫🍫. Total children?", a: "8", choices: ["5", "8", "10"], explain: "For a total, count every picture in the graph and add. Vanilla 3 and chocolate 5, so 3 + 5 = 8 children." },
    { q: "Picture graph: Cars 🚗🚗🚗, Buses 🚌🚌🚌🚌. How many fewer chose cars?", a: "1", choices: ["1", "2", "3"], explain: "To find 'how many fewer', count both rows and subtract. Cars 3, buses 4, and 4 − 3 = 1 fewer car." },
    { q: "Each picture = 1 child. If there are 7 pictures in a row, how many children?", a: "7", choices: ["5", "7", "10"], explain: "In a picture graph each picture stands for one child, so 7 pictures simply means 7 children." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildGr2() {
  // Reading Bar Graphs
  return shuffle([
    { q: "A bar graph shows: Apples bar reaches 5, Oranges bar reaches 3. How many chose apples?", a: "5", choices: ["3", "5", "8"], explain: "A bar graph shows how many by how tall each bar is. The apples bar reaches 5, so 5 children chose apples." },
    { q: "Bar graph: Maths bar = 8, Science bar = 6, English bar = 4. Most popular subject?", a: "Maths", choices: ["Maths", "Science", "English"], explain: "In a bar graph the tallest bar means the most. Maths reaches 8, taller than the rest, so it is most popular." },
    { q: "Bar graph: Monday = 3, Tuesday = 5, Wednesday = 2. Which day had the most?", a: "Tuesday", choices: ["Monday", "Tuesday", "Wednesday"], explain: "The tallest bar shows the most. Tuesday reaches 5, higher than Monday and Wednesday, so Tuesday had the most." },
    { q: "Bar graph: Cats = 7, Dogs = 7, Fish = 3. How many chose cats or dogs?", a: "14", choices: ["7", "14", "17"], explain: "To combine two bars, read each height and add. Cats 7 and dogs 7, so 7 + 7 = 14 chose cats or dogs." },
    { q: "Bar graph: Red = 4, Blue = 6. How many more chose blue than red?", a: "2", choices: ["1", "2", "4"], explain: "For 'how many more', read both bar heights and subtract. Blue 6 minus red 4 gives 6 − 4 = 2 more." },
    { q: "Bar graph: Soccer = 10, Tennis = 5. How many children in total?", a: "15", choices: ["10", "15", "20"], explain: "For a total, read each bar height and add them. Soccer 10 and tennis 5, so 10 + 5 = 15 children." },
    { q: "Bar graph: Chicken = 8, Fish = 5, Beef = 3. Least popular?", a: "Beef", choices: ["Chicken", "Fish", "Beef"], explain: "In a bar graph the shortest bar means the fewest. Beef reaches only 3, the lowest, so it is least popular." },
    { q: "Bar graph: Jan = 2, Feb = 4, Mar = 6. Which month had fewest rainy days?", a: "Jan", choices: ["Jan", "Feb", "Mar"], explain: "The shortest bar shows the fewest. Jan reaches only 2, lower than Feb and Mar, so Jan had the fewest." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildGr3() {
  // Comparing Data
  return shuffle([
    { q: "Fruit survey: Apple 8, Banana 5, Orange 3. Which fruit is most popular?", a: "Apple", choices: ["Apple", "Banana", "Orange"], explain: "A graph shows how many — the biggest number means the most. Apple has 8, the highest, so apple is most popular." },
    { q: "Pet survey: Cat 6, Dog 9, Fish 2. Which pet is least popular?", a: "Fish", choices: ["Cat", "Dog", "Fish"], explain: "The smallest number on a graph means the fewest chose it. Fish has only 2, the lowest, so fish is least popular." },
    { q: "Colour survey: Red 4, Blue 7, Green 4. Which colour is most popular?", a: "Blue", choices: ["Red", "Blue", "Green"], explain: "Most popular means the biggest count on the graph. Blue has 7, more than red or green, so blue is most popular." },
    { q: "Sport survey: Football 10, Swimming 6, Running 4. How many more chose football than running?", a: "6", choices: ["4", "6", "10"], explain: "For 'how many more', take the two counts and subtract the smaller. Football 10 minus running 4 gives 10 − 4 = 6." },
    { q: "Food survey: Pizza 8, Pasta 5, Salad 2. Total children surveyed?", a: "15", choices: ["13", "15", "17"], explain: "For a total, add every count in the graph together. Pizza 8, pasta 5, salad 2, so 8 + 5 + 2 = 15." },
    { q: "Book survey: Comics 3, Stories 7, Science 5. Which had fewest votes?", a: "Comics", choices: ["Comics", "Stories", "Science"], explain: "Fewest means the smallest count on the graph. Comics has only 3, lower than stories or science, so comics had fewest." },
    { q: "Drink survey: Water 9, Juice 6, Milk 6. Which drink had the most votes?", a: "Water", choices: ["Water", "Juice", "Milk"], explain: "Most votes means the biggest count. Water has 9, more than juice or milk, so water had the most votes." },
    { q: "Animal survey: Rabbit 5, Hamster 5, Bird 3. How many children chose rabbit or hamster?", a: "10", choices: ["5", "10", "13"], explain: "To combine two groups, read each count and add. Rabbit 5 and hamster 5, so 5 + 5 = 10 children." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "p2m-gr1": buildGr1, "p2m-gr2": buildGr2, "p2m-gr3": buildGr3,
};

export const P2_GRAPHS_QUESTION_COUNTS = {
  "p2m-gr1": 8, "p2m-gr2": 8, "p2m-gr3": 8,
};

export function buildGraphsQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
