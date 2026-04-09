export const STARS_PER_REWARD = 5;

export const TOPICS = [
  {
    id: "time",
    title: "Telling Time",
    icon: "🕐",
    description: "Learn to read clocks and calculate time.",
    modules: [
      { id: "time-1", title: "The Clock Face", description: "Learn the numbers, the hour hand, and the minute hand.", starsToUnlock: 0, hasIntro: true },
      { id: "time-2", title: "O'Clock Times", description: "Read hours like 3 o'clock, 7 o'clock.", starsToUnlock: 0 },
      { id: "time-3", title: "Half Past", description: "Read half hours like half past 4.", starsToUnlock: 5 },
      { id: "time-4", title: "Quarter Past & To", description: "Quarter past 2, quarter to 6.", starsToUnlock: 10 },
      { id: "time-5", title: "Five-Minute Intervals", description: "Read times like 3:10, 7:25, 11:50.", starsToUnlock: 18 },
      { id: "time-6", title: "Time Addition", description: "It's 3 o'clock. In 2 hours it will be...?", starsToUnlock: 28 },
      { id: "time-7", title: "Time Subtraction", description: "It's 5 o'clock. 1 hour ago it was...?", starsToUnlock: 40 },
    ],
  },
  {
    id: "addition",
    title: "Addition within 10",
    icon: "➕",
    description: "Learn to add numbers up to 10.",
    modules: [
      { id: "add-1", title: "What is Addition?", description: "Learn what it means to add things together.", starsToUnlock: 0, hasIntro: true },
      { id: "add-2", title: "Adding 1", description: "1+1, 2+1, 3+1... add one more!", starsToUnlock: 0 },
      { id: "add-3", title: "Adding 2", description: "1+2, 3+2, 5+2... two more each time!", starsToUnlock: 5 },
      { id: "add-4", title: "Making 5", description: "Which pairs add up to 5?", starsToUnlock: 10 },
      { id: "add-5", title: "Making 10", description: "Which pairs add up to 10?", starsToUnlock: 16 },
      { id: "add-6", title: "Mixed Addition", description: "Add any numbers within 10!", starsToUnlock: 24 },
    ],
  },
  {
    id: "subtraction",
    title: "Subtraction within 10",
    icon: "➖",
    description: "Learn to take away numbers up to 10.",
    modules: [
      { id: "sub-1", title: "What is Subtraction?", description: "Learn what it means to take away.", starsToUnlock: 0, hasIntro: true },
      { id: "sub-2", title: "Subtracting 1", description: "5-1, 4-1, 3-1... take away one!", starsToUnlock: 0 },
      { id: "sub-3", title: "Subtracting 2", description: "6-2, 5-2, 4-2... take away two!", starsToUnlock: 5 },
      { id: "sub-4", title: "Subtract from 5", description: "5-0, 5-1, 5-2... all the way down!", starsToUnlock: 10 },
      { id: "sub-5", title: "Subtract from 10", description: "10-0, 10-1... all the way to zero!", starsToUnlock: 16 },
      { id: "sub-6", title: "Mixed Subtraction", description: "Subtract any numbers within 10!", starsToUnlock: 24 },
    ],
  },
  {
    id: "numbers20",
    title: "Numbers to 20",
    icon: "🔢",
    description: "Count, compare, and order numbers 11 to 20.",
    modules: [
      { id: "n20-1", title: "Numbers 11 to 20", description: "Learn to count past 10!", starsToUnlock: 0, hasIntro: true },
      { id: "n20-2", title: "Counting Objects", description: "Count groups of 11 to 20 things.", starsToUnlock: 0 },
      { id: "n20-3", title: "Comparing Numbers", description: "Which number is bigger or smaller?", starsToUnlock: 8 },
      { id: "n20-4", title: "Ordering Numbers", description: "Put numbers in order, find what's next.", starsToUnlock: 16 },
      { id: "n20-5", title: "Number Bonds", description: "10 + ? = 15. Find the missing number!", starsToUnlock: 24 },
    ],
  },
  {
    id: "addsub20",
    title: "Add & Subtract to 20",
    icon: "🧮",
    description: "Add and subtract bigger numbers up to 20.",
    modules: [
      { id: "as20-1", title: "Addition to 20", description: "10+5, 12+3, 11+8... bigger additions!", starsToUnlock: 0 },
      { id: "as20-2", title: "Subtraction to 20", description: "15-5, 18-8, 20-10... bigger subtractions!", starsToUnlock: 0 },
      { id: "as20-3", title: "Addition Word Problems", description: "Keanu has 8 stickers, gets 5 more...", starsToUnlock: 10 },
      { id: "as20-4", title: "Subtraction Word Problems", description: "15 sweets, eats 5, how many left?", starsToUnlock: 18 },
      { id: "as20-5", title: "Mixed Problems", description: "Addition and subtraction together!", starsToUnlock: 26 },
    ],
  },
  {
    id: "numbers100",
    title: "Numbers to 100",
    icon: "💯",
    description: "Tens, ones, and place value up to 100.",
    modules: [
      { id: "n100-1", title: "Tens and Ones", description: "23 = 2 tens and 3 ones.", starsToUnlock: 0, hasIntro: true },
      { id: "n100-2", title: "Counting by 10s", description: "10, 20, 30, 40... all the way to 100!", starsToUnlock: 0 },
      { id: "n100-3", title: "Place Value", description: "How many tens? How many ones?", starsToUnlock: 8 },
      { id: "n100-4", title: "Comparing Numbers", description: "Which is bigger: 45 or 54?", starsToUnlock: 16 },
      { id: "n100-5", title: "Ordering Numbers", description: "Put numbers in order up to 100.", starsToUnlock: 24 },
    ],
  },
  {
    id: "shapes",
    title: "Shapes",
    icon: "🔺",
    description: "2D and 3D shapes — circles, squares, cubes, and more.",
    modules: [
      { id: "shp-1", title: "2D Shapes", description: "Circles, squares, triangles, rectangles.", starsToUnlock: 0, hasIntro: true },
      { id: "shp-2", title: "Circles & Squares", description: "Spot circles and squares around you!", starsToUnlock: 0 },
      { id: "shp-3", title: "Triangles & Rectangles", description: "Spot triangles and rectangles!", starsToUnlock: 8 },
      { id: "shp-4", title: "3D Shapes", description: "Cubes, spheres, cylinders, cones.", starsToUnlock: 16 },
    ],
  },
  {
    id: "patterns",
    title: "Patterns",
    icon: "🔁",
    description: "Spot and continue repeating patterns.",
    modules: [
      { id: "pat-1", title: "What is a Pattern?", description: "Learn what repeating patterns are!", starsToUnlock: 0, hasIntro: true },
      { id: "pat-2", title: "Colour Patterns", description: "Red, blue, red, blue... what's next?", starsToUnlock: 0 },
      { id: "pat-3", title: "Shape Patterns", description: "Circle, square, circle... what's next?", starsToUnlock: 8 },
      { id: "pat-4", title: "Number Patterns", description: "2, 4, 6, 8... what comes next?", starsToUnlock: 16 },
    ],
  },
  {
    id: "measurement",
    title: "Length & Mass",
    icon: "📏",
    description: "Compare long and short, heavy and light.",
    modules: [
      { id: "msr-1", title: "Comparing Length", description: "Which is longer? Which is shorter?", starsToUnlock: 0, hasIntro: true },
      { id: "msr-2", title: "Long and Short", description: "Compare real objects by length.", starsToUnlock: 0 },
      { id: "msr-3", title: "Heavy and Light", description: "Which is heavier? Which is lighter?", starsToUnlock: 8 },
      { id: "msr-4", title: "Measuring with Units", description: "Measure using paperclips and cubes!", starsToUnlock: 16 },
    ],
  },
  {
    id: "money",
    title: "Singapore Money",
    icon: "🪙",
    description: "Learn Singapore coins, counting money, and making change.",
    modules: [
      { id: "mon-1", title: "Singapore Coins", description: "5¢, 10¢, 20¢, 50¢, $1 — know your coins!", starsToUnlock: 0, hasIntro: true },
      { id: "mon-2", title: "Identifying Coins", description: "Which coin is which?", starsToUnlock: 0 },
      { id: "mon-3", title: "Counting Coins", description: "10¢ + 20¢ = ? Add up coins!", starsToUnlock: 8 },
      { id: "mon-4", title: "Making Amounts", description: "Make 50¢ — which coins do you need?", starsToUnlock: 16 },
    ],
  },
];

export function getTopic(topicId) {
  return TOPICS.find((t) => t.id === topicId);
}

export function getModule(topicId, moduleId) {
  const topic = getTopic(topicId);
  return topic?.modules.find((m) => m.id === moduleId);
}

export function getTopicStars(topicId, moduleStars) {
  const topic = getTopic(topicId);
  if (!topic) return 0;
  return topic.modules.reduce((sum, mod) => sum + (moduleStars[mod.id] || 0), 0);
}

export function getTotalStars(moduleStars) {
  return TOPICS.reduce((sum, topic) => sum + getTopicStars(topic.id, moduleStars), 0);
}
