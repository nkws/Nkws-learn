// ============ MATH TOPICS ============
const MATH_TOPICS = [
  {
    id: "time", title: "Telling Time", icon: "🕐", description: "Learn to read clocks and calculate time.",
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
    id: "addition", title: "Addition within 10", icon: "➕", description: "Learn to add numbers up to 10.",
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
    id: "subtraction", title: "Subtraction within 10", icon: "➖", description: "Learn to take away numbers up to 10.",
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
    id: "numbers20", title: "Numbers to 20", icon: "🔢", description: "Count, compare, and order numbers 11 to 20.",
    modules: [
      { id: "n20-1", title: "Numbers 11 to 20", description: "Learn to count past 10!", starsToUnlock: 0, hasIntro: true },
      { id: "n20-2", title: "Counting Objects", description: "Count groups of 11 to 20 things.", starsToUnlock: 0 },
      { id: "n20-3", title: "Comparing Numbers", description: "Which number is bigger or smaller?", starsToUnlock: 8 },
      { id: "n20-4", title: "Ordering Numbers", description: "Put numbers in order, find what's next.", starsToUnlock: 16 },
      { id: "n20-5", title: "Number Bonds", description: "10 + ? = 15. Find the missing number!", starsToUnlock: 24 },
    ],
  },
  {
    id: "addsub20", title: "Add & Subtract to 20", icon: "🧮", description: "Add and subtract bigger numbers up to 20.",
    modules: [
      { id: "as20-1", title: "Addition to 20", description: "10+5, 12+3, 11+8... bigger additions!", starsToUnlock: 0 },
      { id: "as20-2", title: "Subtraction to 20", description: "15-5, 18-8, 20-10... bigger subtractions!", starsToUnlock: 0 },
      { id: "as20-3", title: "Addition Word Problems", description: "Keanu has 8 stickers, gets 5 more...", starsToUnlock: 10 },
      { id: "as20-4", title: "Subtraction Word Problems", description: "15 sweets, eats 5, how many left?", starsToUnlock: 18 },
      { id: "as20-5", title: "Mixed Problems", description: "Addition and subtraction together!", starsToUnlock: 26 },
    ],
  },
  {
    id: "numbers100", title: "Numbers to 100", icon: "💯", description: "Tens, ones, and place value up to 100.",
    modules: [
      { id: "n100-1", title: "Tens and Ones", description: "23 = 2 tens and 3 ones.", starsToUnlock: 0, hasIntro: true },
      { id: "n100-2", title: "Counting by 10s", description: "10, 20, 30, 40... all the way to 100!", starsToUnlock: 0 },
      { id: "n100-3", title: "Place Value", description: "How many tens? How many ones?", starsToUnlock: 8 },
      { id: "n100-4", title: "Comparing Numbers", description: "Which is bigger: 45 or 54?", starsToUnlock: 16 },
      { id: "n100-5", title: "Ordering Numbers", description: "Put numbers in order up to 100.", starsToUnlock: 24 },
    ],
  },
  {
    id: "shapes", title: "Shapes", icon: "🔺", description: "2D and 3D shapes — circles, squares, cubes, and more.",
    modules: [
      { id: "shp-1", title: "2D Shapes", description: "Circles, squares, triangles, rectangles.", starsToUnlock: 0, hasIntro: true },
      { id: "shp-2", title: "Circles & Squares", description: "Spot circles and squares around you!", starsToUnlock: 0 },
      { id: "shp-3", title: "Triangles & Rectangles", description: "Spot triangles and rectangles!", starsToUnlock: 8 },
      { id: "shp-4", title: "3D Shapes", description: "Cubes, spheres, cylinders, cones.", starsToUnlock: 16 },
    ],
  },
  {
    id: "patterns", title: "Patterns", icon: "🔁", description: "Spot and continue repeating patterns.",
    modules: [
      { id: "pat-1", title: "What is a Pattern?", description: "Learn what repeating patterns are!", starsToUnlock: 0, hasIntro: true },
      { id: "pat-2", title: "Colour Patterns", description: "Red, blue, red, blue... what's next?", starsToUnlock: 0 },
      { id: "pat-3", title: "Shape Patterns", description: "Circle, square, circle... what's next?", starsToUnlock: 8 },
      { id: "pat-4", title: "Number Patterns", description: "2, 4, 6, 8... what comes next?", starsToUnlock: 16 },
    ],
  },
  {
    id: "measurement", title: "Length & Mass", icon: "📏", description: "Compare long and short, heavy and light.",
    modules: [
      { id: "msr-1", title: "Comparing Length", description: "Which is longer? Which is shorter?", starsToUnlock: 0, hasIntro: true },
      { id: "msr-2", title: "Long and Short", description: "Compare real objects by length.", starsToUnlock: 0 },
      { id: "msr-3", title: "Heavy and Light", description: "Which is heavier? Which is lighter?", starsToUnlock: 8 },
      { id: "msr-4", title: "Measuring with Units", description: "Measure using paperclips and cubes!", starsToUnlock: 16 },
    ],
  },
  {
    id: "money", title: "Singapore Money", icon: "🪙", description: "Learn Singapore coins, counting money, and making change.",
    modules: [
      { id: "mon-1", title: "Singapore Coins", description: "5¢, 10¢, 20¢, 50¢, $1 — know your coins!", starsToUnlock: 0, hasIntro: true },
      { id: "mon-2", title: "Identifying Coins", description: "Which coin is which?", starsToUnlock: 0 },
      { id: "mon-3", title: "Counting Coins", description: "10¢ + 20¢ = ? Add up coins!", starsToUnlock: 8 },
      { id: "mon-4", title: "Making Amounts", description: "Make 50¢ — which coins do you need?", starsToUnlock: 16 },
    ],
  },
];

// ============ ENGLISH TOPICS ============
const ENGLISH_TOPICS = [
  {
    id: "sight-words", title: "Sight Words", icon: "👀", description: "Recognise common words by sight.",
    modules: [
      { id: "sw-1", title: "Words I See", description: "The, is, a, my, I — words you see everywhere!", starsToUnlock: 0, hasIntro: true },
      { id: "sw-2", title: "Action Words", description: "Run, jump, sit, eat — doing words!", starsToUnlock: 0 },
      { id: "sw-3", title: "Describing Words", description: "Big, small, happy, sad — words that describe!", starsToUnlock: 6 },
      { id: "sw-4", title: "More Sight Words", description: "Can, will, this, that — more words to know!", starsToUnlock: 12 },
    ],
  },
  {
    id: "phonics", title: "Phonics", icon: "🔤", description: "Learn letter sounds and blending.",
    modules: [
      { id: "ph-1", title: "Letter Sounds A-M", description: "What sound does each letter make?", starsToUnlock: 0, hasIntro: true },
      { id: "ph-2", title: "Letter Sounds N-Z", description: "More letter sounds to learn!", starsToUnlock: 0 },
      { id: "ph-3", title: "Beginning Sounds", description: "Cat starts with C. Dog starts with D.", starsToUnlock: 8 },
      { id: "ph-4", title: "Ending Sounds", description: "Cat ends with T. Dog ends with G.", starsToUnlock: 16 },
      { id: "ph-5", title: "Rhyming Words", description: "Cat, hat, bat — they all rhyme!", starsToUnlock: 24 },
    ],
  },
  {
    id: "vocabulary", title: "Vocabulary", icon: "📚", description: "Learn common nouns, verbs, and adjectives.",
    modules: [
      { id: "vc-1", title: "People & Family", description: "Mother, father, brother, sister, teacher.", starsToUnlock: 0 },
      { id: "vc-2", title: "Animals", description: "Dog, cat, fish, bird — animal names!", starsToUnlock: 0 },
      { id: "vc-3", title: "Food & Drinks", description: "Rice, noodles, water, milk — yummy words!", starsToUnlock: 6 },
      { id: "vc-4", title: "Places", description: "School, home, park, shop — where do you go?", starsToUnlock: 12 },
      { id: "vc-5", title: "Body Parts", description: "Head, hand, eye, ear — parts of you!", starsToUnlock: 18 },
    ],
  },
  {
    id: "grammar", title: "Grammar", icon: "✏️", description: "Singular/plural, is/am/are, a/an.",
    modules: [
      { id: "gr-1", title: "Singular & Plural", description: "One cat, two cats. One box, two boxes.", starsToUnlock: 0, hasIntro: true },
      { id: "gr-2", title: "A or An", description: "A cat or an apple? Learn the rule!", starsToUnlock: 0 },
      { id: "gr-3", title: "Is, Am, Are", description: "I am happy. She is tall. They are here.", starsToUnlock: 8 },
      { id: "gr-4", title: "This & That", description: "This is near. That is far.", starsToUnlock: 16 },
    ],
  },
  {
    id: "comprehension", title: "Comprehension", icon: "📖", description: "Read short passages and answer questions.",
    modules: [
      { id: "cp-1", title: "At School", description: "Read about a day at school.", starsToUnlock: 0 },
      { id: "cp-2", title: "At the Park", description: "Read about a trip to the park.", starsToUnlock: 0 },
      { id: "cp-3", title: "My Family", description: "Read about a family.", starsToUnlock: 6 },
      { id: "cp-4", title: "The Pet Shop", description: "Read about animals at the shop.", starsToUnlock: 12 },
    ],
  },
];

// ============ SCIENCE TOPICS ============
const SCIENCE_TOPICS = [
  {
    id: "living", title: "Living & Non-Living", icon: "🌱", description: "What is alive and what is not?",
    modules: [
      { id: "lv-1", title: "What is Living?", description: "Living things grow, eat, and move!", starsToUnlock: 0, hasIntro: true },
      { id: "lv-2", title: "Living or Not?", description: "Is a rock living? Is a plant?", starsToUnlock: 0 },
      { id: "lv-3", title: "What Living Things Need", description: "Food, water, air — all living things need these!", starsToUnlock: 8 },
    ],
  },
  {
    id: "plants", title: "Plants", icon: "🌿", description: "Parts of plants and what they need.",
    modules: [
      { id: "pl-1", title: "Parts of a Plant", description: "Roots, stem, leaves, flower.", starsToUnlock: 0, hasIntro: true },
      { id: "pl-2", title: "What Plants Need", description: "Sunlight, water, air, soil.", starsToUnlock: 0 },
      { id: "pl-3", title: "How Plants Grow", description: "From seed to plant!", starsToUnlock: 8 },
    ],
  },
  {
    id: "animals", title: "Animals", icon: "🐾", description: "Types of animals and where they live.",
    modules: [
      { id: "an-1", title: "Types of Animals", description: "Mammals, birds, fish, insects.", starsToUnlock: 0, hasIntro: true },
      { id: "an-2", title: "Where Animals Live", description: "Land, water, or air?", starsToUnlock: 0 },
      { id: "an-3", title: "What Animals Eat", description: "Plants, meat, or both?", starsToUnlock: 8 },
      { id: "an-4", title: "Baby Animals", description: "A baby cat is a kitten!", starsToUnlock: 14 },
    ],
  },
  {
    id: "body", title: "My Body", icon: "🧒", description: "Body parts and the 5 senses.",
    modules: [
      { id: "bd-1", title: "Body Parts", description: "Head, shoulders, knees and toes!", starsToUnlock: 0 },
      { id: "bd-2", title: "The 5 Senses", description: "See, hear, smell, taste, touch.", starsToUnlock: 0, hasIntro: true },
      { id: "bd-3", title: "Taking Care of My Body", description: "Eat well, sleep well, exercise!", starsToUnlock: 8 },
    ],
  },
  {
    id: "weather", title: "Weather", icon: "🌤️", description: "Types of weather and what we wear.",
    modules: [
      { id: "wt-1", title: "Types of Weather", description: "Sunny, rainy, cloudy, windy.", starsToUnlock: 0, hasIntro: true },
      { id: "wt-2", title: "What We Wear", description: "Raincoat when it rains! Sunhat when it's sunny!", starsToUnlock: 0 },
      { id: "wt-3", title: "Day and Night", description: "The sun rises and sets.", starsToUnlock: 6 },
    ],
  },
];

// ============ CHINESE TOPICS ============
const CHINESE_TOPICS = [
  {
    id: "pinyin", title: "Hanyu Pinyin", icon: "🗣️", description: "Learn the sounds of Chinese.",
    modules: [
      { id: "py-1", title: "Initials (b, p, m, f)", description: "The beginning sounds!", starsToUnlock: 0, hasIntro: true },
      { id: "py-2", title: "Initials (d, t, n, l)", description: "More beginning sounds!", starsToUnlock: 0 },
      { id: "py-3", title: "Initials (g, k, h)", description: "Back-of-throat sounds!", starsToUnlock: 6 },
      { id: "py-4", title: "Finals (a, o, e, i, u, ü)", description: "The vowel sounds!", starsToUnlock: 12 },
      { id: "py-5", title: "The 4 Tones", description: "High, rising, dipping, falling!", starsToUnlock: 18 },
    ],
  },
  {
    id: "characters", title: "Basic Characters", icon: "字", description: "Learn common Chinese characters.",
    modules: [
      { id: "ch-1", title: "Numbers 一 to 十", description: "Learn to read 1-10 in Chinese!", starsToUnlock: 0, hasIntro: true },
      { id: "ch-2", title: "Family (家人)", description: "爸爸, 妈妈, 哥哥, 姐姐...", starsToUnlock: 0 },
      { id: "ch-3", title: "Body (身体)", description: "头, 手, 眼睛, 耳朵...", starsToUnlock: 8 },
      { id: "ch-4", title: "Animals (动物)", description: "猫, 狗, 鱼, 鸟...", starsToUnlock: 14 },
    ],
  },
  {
    id: "cn-vocab", title: "Common Words", icon: "📝", description: "Everyday Chinese words.",
    modules: [
      { id: "cnv-1", title: "Greetings", description: "你好, 谢谢, 再见, 对不起.", starsToUnlock: 0 },
      { id: "cnv-2", title: "Food (食物)", description: "饭, 面, 水, 牛奶...", starsToUnlock: 0 },
      { id: "cnv-3", title: "School (学校)", description: "老师, 书, 笔, 桌子...", starsToUnlock: 6 },
      { id: "cnv-4", title: "Colours (颜色)", description: "红, 蓝, 绿, 黄...", starsToUnlock: 12 },
    ],
  },
  {
    id: "cn-sentences", title: "Simple Sentences", icon: "💬", description: "Read and understand simple Chinese sentences.",
    modules: [
      { id: "cns-1", title: "I am... (我是...)", description: "我是男孩。我是学生。", starsToUnlock: 0 },
      { id: "cns-2", title: "This is... (这是...)", description: "这是书。那是笔。", starsToUnlock: 0 },
      { id: "cns-3", title: "I like... (我喜欢...)", description: "我喜欢猫。我喜欢吃饭。", starsToUnlock: 6 },
      { id: "cns-4", title: "Questions (问题)", description: "你好吗？这是什么？", starsToUnlock: 12 },
    ],
  },
];

// ============ SUBJECTS ============
export const SUBJECTS = [
  { id: "math", title: "Mathematics", icon: "🔢", description: "Numbers, shapes, time, and more!", topics: MATH_TOPICS },
  { id: "english", title: "English", icon: "📖", description: "Words, grammar, reading, and phonics!", topics: ENGLISH_TOPICS },
  { id: "science", title: "Science", icon: "🔬", description: "Living things, plants, animals, and weather!", topics: SCIENCE_TOPICS },
  { id: "chinese", title: "Chinese 华文", icon: "字", description: "Pinyin, characters, words, and sentences!", topics: CHINESE_TOPICS },
];

// ============ HELPERS ============
export function getSubject(subjectId) {
  return SUBJECTS.find((s) => s.id === subjectId);
}

export function getTopic(subjectId, topicId) {
  const subject = getSubject(subjectId);
  return subject?.topics.find((t) => t.id === topicId);
}

export function getModule(subjectId, topicId, moduleId) {
  const topic = getTopic(subjectId, topicId);
  return topic?.modules.find((m) => m.id === moduleId);
}

export function getTopicStars(topicId, moduleStars) {
  for (const subject of SUBJECTS) {
    const topic = subject.topics.find((t) => t.id === topicId);
    if (topic) {
      return topic.modules.reduce((sum, mod) => sum + (moduleStars[mod.id] || 0), 0);
    }
  }
  return 0;
}

export function getTotalStars(moduleStars) {
  let total = 0;
  for (const subject of SUBJECTS) {
    for (const topic of subject.topics) {
      for (const mod of topic.modules) {
        total += moduleStars[mod.id] || 0;
      }
    }
  }
  return total;
}
