function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
    { q: "A picture graph shows: Apples 🍎🍎🍎🍎🍎, Oranges 🍊🍊🍊. How many children like apples?", a: "5", choices: ["3", "5", "8"] },
    { q: "A picture graph shows: Cats 🐱🐱🐱🐱, Dogs 🐶🐶🐶🐶🐶🐶. How many chose dogs?", a: "6", choices: ["4", "6", "10"] },
    { q: "Picture graph: Red ●●●, Blue ●●●●●, Green ●●. How many chose blue?", a: "5", choices: ["3", "5", "2"] },
    { q: "Picture graph: Apples 🍎🍎🍎🍎🍎, Oranges 🍊🍊🍊. How many more chose apples?", a: "2", choices: ["1", "2", "3"] },
    { q: "Picture graph: Football ⚽⚽⚽⚽, Swimming 🏊🏊, Tennis 🎾🎾🎾. How many chose football?", a: "4", choices: ["2", "3", "4"] },
    { q: "Picture graph: Vanilla 🍦🍦🍦, Chocolate 🍫🍫🍫🍫🍫. Total children?", a: "8", choices: ["5", "8", "10"] },
    { q: "Picture graph: Cars 🚗🚗🚗, Buses 🚌🚌🚌🚌. How many fewer chose cars?", a: "1", choices: ["1", "2", "3"] },
    { q: "Each picture = 1 child. If there are 7 pictures in a row, how many children?", a: "7", choices: ["5", "7", "10"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildGr2() {
  // Reading Bar Graphs
  return shuffle([
    { q: "A bar graph shows: Apples bar reaches 5, Oranges bar reaches 3. How many chose apples?", a: "5", choices: ["3", "5", "8"] },
    { q: "Bar graph: Maths bar = 8, Science bar = 6, English bar = 4. Most popular subject?", a: "Maths", choices: ["Maths", "Science", "English"] },
    { q: "Bar graph: Monday = 3, Tuesday = 5, Wednesday = 2. Which day had the most?", a: "Tuesday", choices: ["Monday", "Tuesday", "Wednesday"] },
    { q: "Bar graph: Cats = 7, Dogs = 7, Fish = 3. How many chose cats or dogs?", a: "14", choices: ["7", "14", "17"] },
    { q: "Bar graph: Red = 4, Blue = 6. How many more chose blue than red?", a: "2", choices: ["1", "2", "4"] },
    { q: "Bar graph: Soccer = 10, Tennis = 5. How many children in total?", a: "15", choices: ["10", "15", "20"] },
    { q: "Bar graph: Chicken = 8, Fish = 5, Beef = 3. Least popular?", a: "Beef", choices: ["Chicken", "Fish", "Beef"] },
    { q: "Bar graph: Jan = 2, Feb = 4, Mar = 6. Which month had fewest rainy days?", a: "Jan", choices: ["Jan", "Feb", "Mar"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildGr3() {
  // Comparing Data
  return shuffle([
    { q: "Fruit survey: Apple 8, Banana 5, Orange 3. Which fruit is most popular?", a: "Apple", choices: ["Apple", "Banana", "Orange"] },
    { q: "Pet survey: Cat 6, Dog 9, Fish 2. Which pet is least popular?", a: "Fish", choices: ["Cat", "Dog", "Fish"] },
    { q: "Colour survey: Red 4, Blue 7, Green 4. Which colour is most popular?", a: "Blue", choices: ["Red", "Blue", "Green"] },
    { q: "Sport survey: Football 10, Swimming 6, Running 4. How many more chose football than running?", a: "6", choices: ["4", "6", "10"] },
    { q: "Food survey: Pizza 8, Pasta 5, Salad 2. Total children surveyed?", a: "15", choices: ["13", "15", "17"] },
    { q: "Book survey: Comics 3, Stories 7, Science 5. Which had fewest votes?", a: "Comics", choices: ["Comics", "Stories", "Science"] },
    { q: "Drink survey: Water 9, Juice 6, Milk 6. Which drink had the most votes?", a: "Water", choices: ["Water", "Juice", "Milk"] },
    { q: "Animal survey: Rabbit 5, Hamster 5, Bird 3. How many children chose rabbit or hamster?", a: "10", choices: ["5", "10", "13"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
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
