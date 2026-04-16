// ============ MATH TOPICS ============
const MATH_TOPICS = [
  {
    id: "time", title: "Telling Time", icon: "🕐", description: "Learn to read clocks and calculate time.",
    modules: [
      { id: "time-1", title: "The Clock Face", description: "Learn the numbers, the hour hand, and the minute hand.", hasIntro: true },
      { id: "time-2", title: "O'Clock Times", description: "Read hours like 3 o'clock, 7 o'clock." },
      { id: "time-3", title: "Half Past", description: "Read half hours like half past 4." },
      { id: "time-4", title: "Quarter Past & To", description: "Quarter past 2, quarter to 6." },
      { id: "time-5", title: "Five-Minute Intervals", description: "Read times like 3:10, 7:25, 11:50." },
      { id: "time-6", title: "Time Addition", description: "It's 3 o'clock. In 2 hours it will be...?" },
      { id: "time-7", title: "Time Subtraction", description: "It's 5 o'clock. 1 hour ago it was...?" },
    ],
  },
  {
    id: "addition", title: "Addition within 10", icon: "➕", description: "Learn to add numbers up to 10.",
    modules: [
      { id: "add-1", title: "What is Addition?", description: "Learn what it means to add things together.", hasIntro: true },
      { id: "add-2", title: "Adding 1", description: "1+1, 2+1, 3+1... add one more!" },
      { id: "add-3", title: "Adding 2", description: "1+2, 3+2, 5+2... two more each time!" },
      { id: "add-4", title: "Making 5", description: "Which pairs add up to 5?" },
      { id: "add-5", title: "Making 10", description: "Which pairs add up to 10?" },
      { id: "add-6", title: "Mixed Addition", description: "Add any numbers within 10!" },
    ],
  },
  {
    id: "subtraction", title: "Subtraction within 10", icon: "➖", description: "Learn to take away numbers up to 10.",
    modules: [
      { id: "sub-1", title: "What is Subtraction?", description: "Learn what it means to take away.", hasIntro: true },
      { id: "sub-2", title: "Subtracting 1", description: "5-1, 4-1, 3-1... take away one!" },
      { id: "sub-3", title: "Subtracting 2", description: "6-2, 5-2, 4-2... take away two!" },
      { id: "sub-4", title: "Subtract from 5", description: "5-0, 5-1, 5-2... all the way down!" },
      { id: "sub-5", title: "Subtract from 10", description: "10-0, 10-1... all the way to zero!" },
      { id: "sub-6", title: "Mixed Subtraction", description: "Subtract any numbers within 10!" },
    ],
  },
  {
    id: "numbers20", title: "Numbers to 20", icon: "🔢", description: "Count, compare, and order numbers 11 to 20.",
    modules: [
      { id: "n20-1", title: "Numbers 11 to 20", description: "Learn to count past 10!", hasIntro: true },
      { id: "n20-2", title: "Counting Objects", description: "Count groups of 11 to 20 things." },
      { id: "n20-3", title: "Comparing Numbers", description: "Which number is bigger or smaller?" },
      { id: "n20-4", title: "Ordering Numbers", description: "Put numbers in order, find what's next." },
      { id: "n20-5", title: "Number Bonds", description: "10 + ? = 15. Find the missing number!" },
    ],
  },
  {
    id: "addsub20", title: "Add & Subtract to 20", icon: "🧮", description: "Add and subtract bigger numbers up to 20.",
    modules: [
      { id: "as20-1", title: "Addition to 20", description: "10+5, 12+3, 11+8... bigger additions!" },
      { id: "as20-2", title: "Subtraction to 20", description: "15-5, 18-8, 20-10... bigger subtractions!" },
      { id: "as20-3", title: "Addition Word Problems", description: "You have 8 stickers, get 5 more..." },
      { id: "as20-4", title: "Subtraction Word Problems", description: "15 sweets, eats 5, how many left?" },
      { id: "as20-5", title: "Mixed Problems", description: "Addition and subtraction together!" },
    ],
  },
  {
    id: "numbers100", title: "Numbers to 100", icon: "💯", description: "Tens, ones, and place value up to 100.",
    modules: [
      { id: "n100-1", title: "Tens and Ones", description: "23 = 2 tens and 3 ones.", hasIntro: true },
      { id: "n100-2", title: "Counting by 10s", description: "10, 20, 30, 40... all the way to 100!" },
      { id: "n100-3", title: "Place Value", description: "How many tens? How many ones?" },
      { id: "n100-4", title: "Comparing Numbers", description: "Which is bigger: 45 or 54?" },
      { id: "n100-5", title: "Ordering Numbers", description: "Put numbers in order up to 100." },
    ],
  },
  {
    id: "shapes", title: "Shapes", icon: "🔺", description: "2D and 3D shapes — circles, squares, cubes, and more.",
    modules: [
      { id: "shp-1", title: "2D Shapes", description: "Circles, squares, triangles, rectangles.", hasIntro: true },
      { id: "shp-2", title: "Circles & Squares", description: "Spot circles and squares around you!" },
      { id: "shp-3", title: "Triangles & Rectangles", description: "Spot triangles and rectangles!" },
      { id: "shp-4", title: "3D Shapes", description: "Cubes, spheres, cylinders, cones." },
    ],
  },
  {
    id: "patterns", title: "Patterns", icon: "🔁", description: "Spot and continue repeating patterns.",
    modules: [
      { id: "pat-1", title: "What is a Pattern?", description: "Learn what repeating patterns are!", hasIntro: true },
      { id: "pat-2", title: "Colour Patterns", description: "Red, blue, red, blue... what's next?" },
      { id: "pat-3", title: "Shape Patterns", description: "Circle, square, circle... what's next?" },
      { id: "pat-4", title: "Number Patterns", description: "2, 4, 6, 8... what comes next?" },
    ],
  },
  {
    id: "measurement", title: "Length & Mass", icon: "📏", description: "Compare long and short, heavy and light.",
    modules: [
      { id: "msr-1", title: "Comparing Length", description: "Which is longer? Which is shorter?", hasIntro: true },
      { id: "msr-2", title: "Long and Short", description: "Compare real objects by length." },
      { id: "msr-3", title: "Heavy and Light", description: "Which is heavier? Which is lighter?" },
      { id: "msr-4", title: "Measuring with Units", description: "Measure using paperclips and cubes!" },
    ],
  },
  {
    id: "money", title: "Singapore Money", icon: "🪙", description: "Learn Singapore coins, counting money, and making change.",
    modules: [
      { id: "mon-1", title: "Singapore Coins", description: "5¢, 10¢, 20¢, 50¢, $1 — know your coins!", hasIntro: true },
      { id: "mon-2", title: "Identifying Coins", description: "Which coin is which?" },
      { id: "mon-3", title: "Counting Coins", description: "10¢ + 20¢ = ? Add up coins!" },
      { id: "mon-4", title: "Making Amounts", description: "Make 50¢ — which coins do you need?" },
    ],
  },
];

// ============ ENGLISH TOPICS ============
const ENGLISH_TOPICS = [
  {
    id: "sight-words", title: "Sight Words", icon: "👀", description: "Recognise common words by sight.",
    modules: [
      { id: "sw-1", title: "Words I See", description: "The, is, a, my, I — words you see everywhere!", hasIntro: true },
      { id: "sw-2", title: "Action Words", description: "Run, jump, sit, eat — doing words!" },
      { id: "sw-3", title: "Describing Words", description: "Big, small, happy, sad — words that describe!" },
      { id: "sw-4", title: "More Sight Words", description: "Can, will, this, that — more words to know!" },
    ],
  },
  {
    id: "phonics", title: "Phonics", icon: "🔤", description: "Learn letter sounds and blending.",
    modules: [
      { id: "ph-1", title: "Letter Sounds A-M", description: "What sound does each letter make?", hasIntro: true },
      { id: "ph-2", title: "Letter Sounds N-Z", description: "More letter sounds to learn!" },
      { id: "ph-3", title: "Beginning Sounds", description: "Cat starts with C. Dog starts with D." },
      { id: "ph-4", title: "Ending Sounds", description: "Cat ends with T. Dog ends with G." },
      { id: "ph-5", title: "Rhyming Words", description: "Cat, hat, bat — they all rhyme!" },
    ],
  },
  {
    id: "vocabulary", title: "Vocabulary", icon: "📚", description: "Learn common nouns, verbs, and adjectives.",
    modules: [
      { id: "vc-1", title: "People & Family", description: "Mother, father, brother, sister, teacher." },
      { id: "vc-2", title: "Animals", description: "Dog, cat, fish, bird — animal names!" },
      { id: "vc-3", title: "Food & Drinks", description: "Rice, noodles, water, milk — yummy words!" },
      { id: "vc-4", title: "Places", description: "School, home, park, shop — where do you go?" },
      { id: "vc-5", title: "Body Parts", description: "Head, hand, eye, ear — parts of you!" },
    ],
  },
  {
    id: "grammar", title: "Grammar", icon: "✏️", description: "Singular/plural, is/am/are, a/an.",
    modules: [
      { id: "gr-1", title: "Singular & Plural", description: "One cat, two cats. One box, two boxes.", hasIntro: true },
      { id: "gr-2", title: "A or An", description: "A cat or an apple? Learn the rule!" },
      { id: "gr-3", title: "Is, Am, Are", description: "I am happy. She is tall. They are here." },
      { id: "gr-4", title: "This & That", description: "This is near. That is far." },
    ],
  },
  {
    id: "comprehension", title: "Comprehension", icon: "📖", description: "Read short passages and answer questions.",
    modules: [
      { id: "cp-1", title: "At School", description: "Read about a day at school." },
      { id: "cp-2", title: "At the Park", description: "Read about a trip to the park." },
      { id: "cp-3", title: "My Family", description: "Read about a family." },
      { id: "cp-4", title: "The Pet Shop", description: "Read about animals at the shop." },
    ],
  },
];

// ============ SCIENCE TOPICS ============
const SCIENCE_TOPICS = [
  {
    id: "living", title: "Living & Non-Living", icon: "🌱", description: "What is alive and what is not?",
    modules: [
      { id: "lv-1", title: "What is Living?", description: "Living things grow, eat, and move!", hasIntro: true },
      { id: "lv-2", title: "Living or Not?", description: "Is a rock living? Is a plant?" },
      { id: "lv-3", title: "What Living Things Need", description: "Food, water, air — all living things need these!" },
    ],
  },
  {
    id: "plants", title: "Plants", icon: "🌿", description: "Parts of plants and what they need.",
    modules: [
      { id: "pl-1", title: "Parts of a Plant", description: "Roots, stem, leaves, flower.", hasIntro: true },
      { id: "pl-2", title: "What Plants Need", description: "Sunlight, water, air, soil." },
      { id: "pl-3", title: "How Plants Grow", description: "From seed to plant!" },
    ],
  },
  {
    id: "animals", title: "Animals", icon: "🐾", description: "Types of animals and where they live.",
    modules: [
      { id: "an-1", title: "Types of Animals", description: "Mammals, birds, fish, insects.", hasIntro: true },
      { id: "an-2", title: "Where Animals Live", description: "Land, water, or air?" },
      { id: "an-3", title: "What Animals Eat", description: "Plants, meat, or both?" },
      { id: "an-4", title: "Baby Animals", description: "A baby cat is a kitten!" },
    ],
  },
  {
    id: "body", title: "My Body", icon: "🧒", description: "Body parts and the 5 senses.",
    modules: [
      { id: "bd-1", title: "Body Parts", description: "Head, shoulders, knees and toes!" },
      { id: "bd-2", title: "The 5 Senses", description: "See, hear, smell, taste, touch.", hasIntro: true },
      { id: "bd-3", title: "Taking Care of My Body", description: "Eat well, sleep well, exercise!" },
    ],
  },
  {
    id: "weather", title: "Weather", icon: "🌤️", description: "Types of weather and what we wear.",
    modules: [
      { id: "wt-1", title: "Types of Weather", description: "Sunny, rainy, cloudy, windy.", hasIntro: true },
      { id: "wt-2", title: "What We Wear", description: "Raincoat when it rains! Sunhat when it's sunny!" },
      { id: "wt-3", title: "Day and Night", description: "The sun rises and sets." },
    ],
  },
];

// ============ CHINESE TOPICS ============
const CHINESE_TOPICS = [
  {
    id: "pinyin", title: "汉语拼音", icon: "🗣️", description: "学习中文的发音。",
    modules: [
      { id: "py-1", title: "声母 (b, p, m, f)", description: "学习前面的音！", hasIntro: true },
      { id: "py-2", title: "声母 (d, t, n, l)", description: "更多的声母！" },
      { id: "py-3", title: "声母 (g, k, h)", description: "喉咙发出的音！" },
      { id: "py-4", title: "韵母 (a, o, e, i, u, ü)", description: "元音的发音！" },
      { id: "py-5", title: "四声", description: "一声、二声、三声、四声！" },
    ],
  },
  {
    id: "characters", title: "基本汉字", icon: "字", description: "学习常见的中文字。",
    modules: [
      { id: "ch-1", title: "数字 一 到 十", description: "学习中文数字！", hasIntro: true },
      { id: "ch-2", title: "家人", description: "爸爸、妈妈、哥哥、姐姐……" },
      { id: "ch-3", title: "身体", description: "头、手、眼睛、耳朵……" },
      { id: "ch-4", title: "动物", description: "猫、狗、鱼、鸟……" },
    ],
  },
  {
    id: "cn-vocab", title: "常用词语", icon: "📝", description: "学习日常生活的中文词语。",
    modules: [
      { id: "cnv-1", title: "打招呼", description: "你好、谢谢、再见、对不起。" },
      { id: "cnv-2", title: "食物", description: "饭、面、水、牛奶……" },
      { id: "cnv-3", title: "学校", description: "老师、书、笔、桌子……" },
      { id: "cnv-4", title: "颜色", description: "红、蓝、绿、黄……" },
    ],
  },
  {
    id: "cn-sentences", title: "简单句子", icon: "💬", description: "学习读和理解简单的中文句子。",
    modules: [
      { id: "cns-1", title: "我是……", description: "我是男孩。我是学生。" },
      { id: "cns-2", title: "这是……", description: "这是书。那是笔。" },
      { id: "cns-3", title: "我喜欢……", description: "我喜欢猫。我喜欢吃饭。" },
      { id: "cns-4", title: "问和答", description: "你好吗？这是什么？" },
    ],
  },
];

// ============ P2 TOPICS ============
const P2_MATH_TOPICS = [
  { id: "p2-multiplication", title: "Multiplication", icon: "✖️", description: "Groups, times tables, and multiplying!",
    modules: [
      { id: "p2m-mul1", title: "Multiplication Concept", description: "3 groups of 2 is 6!", hasIntro: true },
      { id: "p2m-mul2", title: "Times Tables 2, 5, 10", description: "2x, 5x, 10x tables." },
      { id: "p2m-mul3", title: "Times Tables 3, 4", description: "3x and 4x tables." },
      { id: "p2m-mul4", title: "Mixed Multiplication", description: "Multiply any numbers!" },
    ] },
  { id: "p2-division", title: "Division", icon: "➗", description: "Sharing equally and dividing!",
    modules: [
      { id: "p2m-div1", title: "What is Division?", description: "Sharing into equal groups.", hasIntro: true },
      { id: "p2m-div2", title: "Dividing by 2", description: "8 ÷ 2 = ?" },
      { id: "p2m-div3", title: "Dividing by 3, 4, 5", description: "More division facts!" },
      { id: "p2m-div4", title: "Mixed Division", description: "Divide any numbers!" },
    ] },
  { id: "p2-fractions", title: "Fractions", icon: "🍕", description: "Halves, quarters, and thirds!",
    modules: [
      { id: "p2m-fr1", title: "What is a Fraction?", description: "Parts of a whole.", hasIntro: true },
      { id: "p2m-fr2", title: "Halves and Quarters", description: "Half of 8 is 4!" },
      { id: "p2m-fr3", title: "Thirds", description: "One third of 9 is 3!" },
    ] },
  { id: "p2-measurement", title: "Measurement", icon: "📐", description: "Centimetres, metres, and kilograms!",
    modules: [
      { id: "p2m-ms1", title: "Centimetres", description: "Measuring small things.", hasIntro: true },
      { id: "p2m-ms2", title: "Metres", description: "Measuring bigger things." },
      { id: "p2m-ms3", title: "Kilograms", description: "Weighing things." },
    ] },
  { id: "p2-money", title: "Money", icon: "💰", description: "Dollars, cents, and making change!",
    modules: [
      { id: "p2m-mn1", title: "Dollars and Cents", description: "$2.50 + $1.20 = ?" },
      { id: "p2m-mn2", title: "Making Change", description: "Pay $5 for a $3.50 item." },
      { id: "p2m-mn3", title: "Money Word Problems", description: "Buying and selling!" },
    ] },
  { id: "p2-graphs", title: "Graphs", icon: "📊", description: "Reading picture and bar graphs!",
    modules: [
      { id: "p2m-gr1", title: "Picture Graphs", description: "How many like apples?", hasIntro: true },
      { id: "p2m-gr2", title: "Bar Graphs", description: "Reading bars and values." },
      { id: "p2m-gr3", title: "Comparing Data", description: "Which is the most popular?" },
    ] },
];

const P2_ENGLISH_TOPICS = [
  { id: "p2-tenses", title: "Past Tense", icon: "⏪", description: "Yesterday I walked, I ate, I ran!",
    modules: [
      { id: "p2e-tn1", title: "Past Tense -ed", description: "Walk → walked.", hasIntro: true },
      { id: "p2e-tn2", title: "Irregular Past Tense", description: "Eat → ate. Run → ran." },
      { id: "p2e-tn3", title: "Present vs Past", description: "Which sentence is past tense?" },
    ] },
  { id: "p2-grammar2", title: "Grammar 2", icon: "✏️", description: "Adjectives, conjunctions, and punctuation!",
    modules: [
      { id: "p2e-gr1", title: "Adjectives", description: "The big cat. The red ball." },
      { id: "p2e-gr2", title: "Conjunctions", description: "And, but, or — joining words!" },
      { id: "p2e-gr3", title: "Punctuation", description: "Full stops, question marks, commas." },
    ] },
  { id: "p2-comprehension", title: "Comprehension", icon: "📖", description: "Read stories and answer questions!",
    modules: [
      { id: "p2e-cp1", title: "The Birthday Party", description: "Read and answer!" },
      { id: "p2e-cp2", title: "A Rainy Day", description: "Read and answer!" },
      { id: "p2e-cp3", title: "The Lost Puppy", description: "Read and answer!" },
    ] },
];

const P2_SCIENCE_TOPICS = [
  { id: "p2-materials", title: "Materials", icon: "🧱", description: "Wood, metal, plastic, glass, fabric!",
    modules: [
      { id: "p2s-mt1", title: "Types of Materials", description: "What is it made of?", hasIntro: true },
      { id: "p2s-mt2", title: "Properties", description: "Hard, soft, transparent, flexible." },
      { id: "p2s-mt3", title: "Uses of Materials", description: "Why rubber for tyres?" },
    ] },
  { id: "p2-lifecycles", title: "Life Cycles", icon: "🦋", description: "How living things grow and change!",
    modules: [
      { id: "p2s-lc1", title: "Plant Life Cycle", description: "Seed → sprout → plant → flower.", hasIntro: true },
      { id: "p2s-lc2", title: "Butterfly Life Cycle", description: "Egg → caterpillar → chrysalis → butterfly." },
      { id: "p2s-lc3", title: "Frog Life Cycle", description: "Egg → tadpole → froglet → frog." },
    ] },
];

const P2_CHINESE_TOPICS = [
  { id: "p2-characters2", title: "更多汉字", icon: "字", description: "日常用品、自然、时间。",
    modules: [
      { id: "p2c-ch1", title: "日常用品", description: "桌子、椅子、电话……" },
      { id: "p2c-ch2", title: "自然", description: "太阳、月亮、星星……" },
      { id: "p2c-ch3", title: "时间", description: "一年有几个月？" },
    ] },
  { id: "p2-reading", title: "阅读理解", icon: "📖", description: "读短文，回答问题。",
    modules: [
      { id: "p2c-rd1", title: "短文一", description: "关于上学的故事。" },
      { id: "p2c-rd2", title: "短文二", description: "关于家庭出游的故事。" },
      { id: "p2c-rd3", title: "短文三", description: "关于宠物的故事。" },
    ] },
];

// ============ P3 TOPICS ============
const P3_MATH_TOPICS = [
  { id: "p3-timestables", title: "Times Tables", icon: "✖️", description: "Master all times tables 2-9!",
    modules: [
      { id: "p3m-tt1", title: "Times Tables 6, 7", description: "6 x 8 = ?" },
      { id: "p3m-tt2", title: "Times Tables 8, 9", description: "9 x 7 = ?" },
      { id: "p3m-tt3", title: "Mixed Times Tables", description: "Random from 2-9!" },
      { id: "p3m-tt4", title: "Division Facts", description: "56 ÷ 7 = ?" },
    ] },
  { id: "p3-fractions", title: "Fractions", icon: "🍕", description: "Equivalent fractions, comparing, and adding!",
    modules: [
      { id: "p3m-fr1", title: "Fractions of a Whole", description: "3/4 of a pizza.", hasIntro: true },
      { id: "p3m-fr2", title: "Equivalent Fractions", description: "1/2 = 2/4." },
      { id: "p3m-fr3", title: "Comparing Fractions", description: "Which is bigger: 1/3 or 1/2?" },
      { id: "p3m-fr4", title: "Adding Fractions", description: "1/4 + 2/4 = ?" },
    ] },
  { id: "p3-measurement", title: "Area & Perimeter", icon: "📐", description: "Calculate area, perimeter, and volume!",
    modules: [
      { id: "p3m-ms1", title: "Area", description: "3 cm × 2 cm = ?" },
      { id: "p3m-ms2", title: "Perimeter", description: "Add up all the sides!" },
      { id: "p3m-ms3", title: "Volume", description: "How many cubes fit?" },
    ] },
  { id: "p3-angles", title: "Angles", icon: "📏", description: "Right angles, acute, obtuse, and turns!",
    modules: [
      { id: "p3m-an1", title: "What is an Angle?", description: "Corners and turns.", hasIntro: true },
      { id: "p3m-an2", title: "Types of Angles", description: "Acute, right, obtuse." },
      { id: "p3m-an3", title: "Turns and Directions", description: "Quarter turn = 90°." },
    ] },
  { id: "p3-money", title: "Money Problems", icon: "💰", description: "Word problems with dollars and cents!",
    modules: [
      { id: "p3m-mn1", title: "Money Word Problems", description: "3 pens at $1.50 each." },
      { id: "p3m-mn2", title: "Making Change", description: "Pay $10, item is $6.80." },
      { id: "p3m-mn3", title: "Comparing Prices", description: "Which is the better deal?" },
    ] },
];

const P3_ENGLISH_TOPICS = [
  { id: "p3-tenses", title: "Continuous Tense", icon: "⏪", description: "She is running. He was reading.",
    modules: [
      { id: "p3e-tn1", title: "Present Continuous", description: "She is running." },
      { id: "p3e-tn2", title: "Past Continuous", description: "He was reading." },
      { id: "p3e-tn3", title: "Mixed Tenses", description: "Present, past, or continuous?" },
    ] },
  { id: "p3-vocabulary", title: "Vocabulary", icon: "📚", description: "Synonyms, antonyms, and prepositions!",
    modules: [
      { id: "p3e-vc1", title: "Synonyms", description: "Happy = glad. Big = large." },
      { id: "p3e-vc2", title: "Antonyms", description: "Hot ↔ cold. Big ↔ small." },
      { id: "p3e-vc3", title: "Prepositions of Time & Phrases", description: "Good at, listen to, on Monday." },
      { id: "p3e-vc4", title: "Prepositions of Place", description: "On, under, in, behind — with pictures!" },
    ] },
  { id: "p3-comprehension", title: "Comprehension", icon: "📖", description: "Longer passages with deeper questions!",
    modules: [
      { id: "p3e-cp1", title: "The Science Fair", description: "Read and answer!" },
      { id: "p3e-cp2", title: "A Visit to the Zoo", description: "Read and answer!" },
      { id: "p3e-cp3", title: "The New Student", description: "Read and answer!" },
      { id: "p3e-cp4", title: "The Missing Lunchbox", description: "Read and answer!" },
    ] },
];

const P3_SCIENCE_TOPICS = [
  { id: "p3-diversity", title: "Diversity", icon: "🌍", description: "Classifying living things and adaptations!",
    modules: [
      { id: "p3s-dv1", title: "Classifying Living Things", description: "Mammals, birds, fungi.", hasIntro: true },
      { id: "p3s-dv2", title: "Fungi & Bacteria", description: "Mushrooms are not plants!" },
      { id: "p3s-dv3", title: "Adaptations", description: "Cactus stores water." },
    ] },
  { id: "p3-systems", title: "Body Systems", icon: "🫀", description: "How plants and bodies work!",
    modules: [
      { id: "p3s-sy1", title: "Plant Systems", description: "Roots, stems, and leaves.", hasIntro: true },
      { id: "p3s-sy2", title: "Human Body Systems", description: "Heart, lungs, stomach." },
      { id: "p3s-sy3", title: "Systems Working Together", description: "Breathing gives us oxygen." },
    ] },
];

const P3_CHINESE_TOPICS = [
  { id: "p3-grammar", title: "语法", icon: "✏️", description: "量词、造句、的地得。",
    modules: [
      { id: "p3c-gr1", title: "量词", description: "一本书、一只猫。" },
      { id: "p3c-gr2", title: "造句", description: "因为……所以……" },
      { id: "p3c-gr3", title: "的地得", description: "高兴地跳起来。" },
    ] },
  { id: "p3-reading", title: "阅读理解", icon: "📖", description: "读短文，回答问题。",
    modules: [
      { id: "p3c-rd1", title: "阅读理解一", description: "关于学校活动的故事。" },
      { id: "p3c-rd2", title: "阅读理解二", description: "关于大自然的故事。" },
      { id: "p3c-rd3", title: "阅读理解三", description: "关于助人的故事。" },
    ] },
];

// ============ LEVELS → SUBJECTS ============
// ============ P4 ============
const P4_SCIENCE_TOPICS = [
  { id: "p4-matter", title: "Matter", icon: "🧊", description: "States of matter, mass, volume, and changes of state!",
    modules: [
      { id: "p4s-mt1", title: "What is Matter?", description: "Solids, liquids, gases — and what is NOT matter.", hasIntro: true },
      { id: "p4s-mt2", title: "Mass and Volume", description: "Measuring mass and volume, water displacement.", hasIntro: true },
      { id: "p4s-mt3", title: "Changes of State", description: "Melting, freezing, boiling, evaporation, condensation." },
    ] },
  { id: "p4-heat", title: "Heat", icon: "🔥", description: "Heat flow, conductors, insulators, expansion and contraction!",
    modules: [
      { id: "p4s-ht1", title: "Heat Energy", description: "Heat flows from hot to cold. Sources of heat.", hasIntro: true },
      { id: "p4s-ht2", title: "Conductors and Insulators", description: "Why pots are metal and handles are wood." },
      { id: "p4s-ht3", title: "Expansion and Contraction", description: "Railway gaps, thermometers, balloons." },
    ] },
  { id: "p4-light", title: "Light", icon: "💡", description: "Light sources, shadows, reflection, and materials!",
    modules: [
      { id: "p4s-lg1", title: "Light Sources and Properties", description: "The Sun is a source, the Moon is not.", hasIntro: true },
      { id: "p4s-lg2", title: "Shadows and Materials", description: "Opaque, translucent, transparent." },
    ] },
  { id: "p4-plants", title: "Plant Systems", icon: "🌱", description: "Roots, stems, leaves, flowers — and photosynthesis!",
    modules: [
      { id: "p4s-pl1", title: "Plant Parts and Functions", description: "Every part has an important job.", hasIntro: true },
    ] },
  { id: "p4-digestion", title: "Digestive System", icon: "🫃", description: "How our body breaks down food!",
    modules: [
      { id: "p4s-dg1", title: "Organs and Their Functions", description: "Mouth to large intestine.", hasIntro: true },
      { id: "p4s-dg2", title: "Digestion Concepts", description: "Where digestion happens and why." },
    ] },
  { id: "p4-magnets", title: "Magnets", icon: "🧲", description: "Magnetic materials, poles, attraction and repulsion!",
    modules: [
      { id: "p4s-mg1", title: "Magnetic Materials", description: "Not all metals are magnetic!", hasIntro: true },
      { id: "p4s-mg2", title: "Poles and Repulsion", description: "Like poles repel, unlike poles attract." },
    ] },
];

// ============ P5 ============
const P5_SCIENCE_TOPICS = [
  { id: "p5-water-cycle", title: "Water Cycle", icon: "🌊", description: "Evaporation, condensation, and precipitation!",
    modules: [
      { id: "p5s-wc1", title: "The Water Cycle", description: "How water moves around Earth.", hasIntro: true },
    ] },
  { id: "p5-reproduction", title: "Reproduction", icon: "🌸", description: "How plants and animals reproduce!",
    modules: [
      { id: "p5s-rp1", title: "Plant Reproduction", description: "Pollination, seed formation, and dispersal.", hasIntro: true },
      { id: "p5s-rp2", title: "Animal Reproduction", description: "Life cycles and metamorphosis.", hasIntro: true },
    ] },
  { id: "p5-body-systems", title: "Body Systems", icon: "🫁", description: "Respiratory and circulatory systems!",
    modules: [
      { id: "p5s-rs1", title: "Respiratory and Circulatory", description: "Breathing, heart, and blood vessels.", hasIntro: true },
      { id: "p5s-rs2", title: "Systems Working Together", description: "Exercise, pulse, and gas exchange." },
    ] },
  { id: "p5-electrical", title: "Electrical Systems", icon: "⚡", description: "Circuits, conductors, and insulators!",
    modules: [
      { id: "p5s-el1", title: "Circuits", description: "Open, closed, series circuits.", hasIntro: true },
      { id: "p5s-el2", title: "Electrical Safety", description: "Conductors, insulators, and safety." },
    ] },
  { id: "p5-energy", title: "Energy", icon: "🔋", description: "Forms of energy and energy conversion!",
    modules: [
      { id: "p5s-en1", title: "Forms and Conversion", description: "Light, heat, sound, kinetic, potential, electrical.", hasIntro: true },
    ] },
];

// ============ P6 ============
const P6_SCIENCE_TOPICS = [
  { id: "p6-photosynthesis", title: "Photosynthesis", icon: "🌿", description: "How plants make food from sunlight!",
    modules: [
      { id: "p6s-ph1", title: "Photosynthesis", description: "Water + CO₂ + sunlight = glucose + oxygen.", hasIntro: true },
    ] },
  { id: "p6-forces", title: "Forces", icon: "💪", description: "Friction, gravity, and elastic spring force!",
    modules: [
      { id: "p6s-fc1", title: "Types of Forces", description: "Friction, gravity, elastic spring force.", hasIntro: true },
      { id: "p6s-fc2", title: "Effects of Forces", description: "Mass vs weight, reducing friction." },
    ] },
  { id: "p6-food-chains", title: "Food Chains", icon: "🔗", description: "Producers, consumers, decomposers, and food webs!",
    modules: [
      { id: "p6s-fd1", title: "Food Chains", description: "How energy flows through living things.", hasIntro: true },
      { id: "p6s-fd2", title: "Food Webs and Populations", description: "Interconnected chains and population changes." },
    ] },
  { id: "p6-environment", title: "Environment", icon: "🌍", description: "Adaptations, conservation, and human impact!",
    modules: [
      { id: "p6s-ev1", title: "Adaptations", description: "Structural and behavioural adaptations.", hasIntro: true },
      { id: "p6s-ev2", title: "Man's Impact", description: "Pollution, deforestation, conservation." },
    ] },
  { id: "p6-revision", title: "PSLE Revision", icon: "📚", description: "Cross-topic revision mixing P3–P6 Science themes.",
    modules: [
      { id: "p6s-re1", title: "PSLE Science Revision", description: "Mixed questions across all themes — perfect for exam prep.", hasIntro: true },
    ] },
];

// P4 English, Math, Chinese
const P4_ENGLISH_TOPICS = [
  { id: "p4-grammar", title: "Grammar", icon: "✏️", description: "Tenses, agreement, prepositions, and conjunctions!",
    modules: [
      { id: "p4e-gr1", title: "Tenses and Agreement", description: "Past, present, future, and subject-verb agreement.", hasIntro: true },
      { id: "p4e-gr2", title: "Prepositions and Conjunctions", description: "Under, on, but, although, so that." },
    ] },
  { id: "p4-vocabulary", title: "Vocabulary", icon: "📚", description: "Synonyms, antonyms, and word meanings!",
    modules: [
      { id: "p4e-vc1", title: "Synonyms and Antonyms", description: "Happy/glad, brave/cowardly." },
    ] },
];
const P4_MATH_TOPICS = [
  { id: "p4-factors", title: "Factors and Multiples", icon: "🔢", description: "Finding factors, multiples, and common factors!",
    modules: [
      { id: "p4m-fm1", title: "Factors and Multiples", description: "What are factors of 12? Common multiples?" },
    ] },
  { id: "p4-decimals", title: "Decimals", icon: "📊", description: "Place value, comparing, and operations with decimals!",
    modules: [
      { id: "p4m-dc1", title: "Decimals", description: "0.5 = 1/2, rounding, adding, multiplying." },
    ] },
];
const P4_CHINESE_TOPICS = [
  { id: "p4-cn-vocab", title: "词语", icon: "📖", description: "词语意思、量词、反义词！",
    modules: [
      { id: "p4c-vc1", title: "词语和量词", description: "勤劳、骄傲、一本书。" },
    ] },
  { id: "p4-cn-grammar", title: "语法", icon: "✏️", description: "关联词：因为所以、虽然但是！",
    modules: [
      { id: "p4c-gr1", title: "关联词和的地得", description: "因为...所以、虽然...但是。" },
    ] },
];

// P5 English, Math, Chinese
const P5_ENGLISH_TOPICS = [
  { id: "p5-grammar", title: "Grammar", icon: "✏️", description: "Active/passive voice, direct/indirect speech!",
    modules: [
      { id: "p5e-gr1", title: "Voice and Speech", description: "Active to passive, direct to indirect.", hasIntro: true },
      { id: "p5e-gr2", title: "Conjunctions and Relative Pronouns", description: "Although, unless, who, which, whose." },
    ] },
  { id: "p5-vocabulary", title: "Vocabulary", icon: "📚", description: "Phrasal verbs, synonyms, and word meanings!",
    modules: [
      { id: "p5e-vc1", title: "Vocabulary and Phrasal Verbs", description: "Reluctant, plummeted, give in, look into." },
    ] },
  { id: "p5-cloze", title: "Cloze Practice", icon: "📖", description: "Fill-in-the-blank in context.",
    modules: [
      { id: "p5e-cl1", title: "Cloze Practice", description: "Tense, prepositions, conjunctions in context.", hasIntro: true },
    ] },
  { id: "p5-comprehension", title: "Comprehension", icon: "📰", description: "Read passages and answer questions.",
    modules: [
      { id: "p5e-cp1", title: "Comprehension MCQ", description: "Two passages with inference and theme questions.", hasIntro: true },
    ] },
  { id: "p5-editing", title: "Editing", icon: "🔍", description: "Spot grammar and spelling errors.",
    modules: [
      { id: "p5e-ed1", title: "Editing", description: "Agreement, tense, double negatives, uncountable nouns.", hasIntro: true },
    ] },
];
const P5_MATH_TOPICS = [
  { id: "p5-percentage", title: "Percentage", icon: "💯", description: "Converting, finding percentage, discounts!",
    modules: [
      { id: "p5m-pc1", title: "Percentage", description: "25% of 80 = 20. Discounts and conversions." },
    ] },
  { id: "p5-rate", title: "Rate", icon: "⏱️", description: "Rate, quantity, and time!",
    modules: [
      { id: "p5m-rt1", title: "Rate", description: "Speed, cost per item, quantity per time." },
    ] },
  { id: "p5-fractions", title: "Fractions", icon: "🍕", description: "Unlike fractions, multiplication, and division!",
    modules: [
      { id: "p5m-fr1", title: "Unlike Fractions (+/−)", description: "1/2 + 1/3. Find common denominators.", hasIntro: true },
      { id: "p5m-fr2", title: "Fractions (×/÷)", description: "2/3 × 4/5. Flip and multiply for division.", hasIntro: true },
    ] },
  { id: "p5-angles", title: "Angles", icon: "📐", description: "Acute, obtuse, right angles and unknown angles.",
    modules: [
      { id: "p5m-an1", title: "Angles", description: "Straight line = 180°. At a point = 360°.", hasIntro: true },
    ] },
  { id: "p5-triangles", title: "Triangles", icon: "🔺", description: "Types, properties, and area of triangles.",
    modules: [
      { id: "p5m-tr1", title: "Triangles", description: "Equilateral, isosceles, scalene. Area = ½ × b × h.", hasIntro: true },
    ] },
  { id: "p5-decimals", title: "Decimals", icon: "🔢", description: "Four operations with decimals.",
    modules: [
      { id: "p5m-de1", title: "Decimals", description: "Add, subtract, multiply and divide decimals.", hasIntro: true },
    ] },
  { id: "p5-average", title: "Average", icon: "📊", description: "Mean, total, and finding missing values.",
    modules: [
      { id: "p5m-av1", title: "Average", description: "Total ÷ Count = Average.", hasIntro: true },
    ] },
  { id: "p5-volume", title: "Volume", icon: "📦", description: "Volume of cubes and cuboids.",
    modules: [
      { id: "p5m-vo1", title: "Volume", description: "L × W × H, litres, missing dimensions.", hasIntro: true },
    ] },
];
const P5_CHINESE_TOPICS = [
  { id: "p5-cn-vocab", title: "词语", icon: "📖", description: "词语意思、近义词、反义词！",
    modules: [
      { id: "p5c-vc1", title: "词语和量词", description: "坚持、感激、一头大象。" },
    ] },
  { id: "p5-cn-grammar", title: "语法", icon: "✏️", description: "把被句、关联词！",
    modules: [
      { id: "p5c-gr1", title: "把被句和关联词", description: "他把书放好了。书被弄坏了。" },
    ] },
  { id: "p5-cn-reading", title: "阅读理解", icon: "📰", description: "短文阅读，回答问题。",
    modules: [
      { id: "p5c-rd1", title: "阅读理解", description: "阅读短文，回答问题。", hasIntro: true },
    ] },
  { id: "p5-cn-idioms", title: "成语", icon: "📖", description: "常用成语的意思。",
    modules: [
      { id: "p5c-id1", title: "成语", description: "一心一意、手忙脚乱、目不转睛。" },
    ] },
  { id: "p5-cn-bingju", title: "病句", icon: "🔧", description: "找出错误，选出正确的句子。",
    modules: [
      { id: "p5c-bj1", title: "病句改正", description: "的地得、量词、关联词搭配。" },
    ] },
];

// P6 English, Math, Chinese
const P6_ENGLISH_TOPICS = [
  { id: "p6-grammar", title: "Grammar", icon: "✏️", description: "PSLE revision — conditionals, question tags, modals!",
    modules: [
      { id: "p6e-gr1", title: "PSLE Grammar Revision", description: "Conditionals, question tags, tenses.", hasIntro: true },
      { id: "p6e-gr2", title: "Modals and Synthesis", description: "Should, might, must. Combining sentences." },
    ] },
  { id: "p6-vocabulary", title: "Vocabulary", icon: "📚", description: "Advanced vocabulary and phrasal verbs!",
    modules: [
      { id: "p6e-vc1", title: "Advanced Vocabulary", description: "Apprehensive, meticulous, persevere." },
    ] },
  { id: "p6-cloze", title: "Cloze Practice", icon: "📖", description: "Fill-in-the-blank in context — a major PSLE component.",
    modules: [
      { id: "p6e-cl1", title: "Cloze Practice", description: "Tense, prepositions, agreement and word choice in context.", hasIntro: true },
    ] },
  { id: "p6-editing", title: "Editing", icon: "🔍", description: "Spot grammar and spelling errors — PSLE Booklet B.",
    modules: [
      { id: "p6e-ed1", title: "Editing", description: "Spot the error: tense, agreement, preposition, spelling.", hasIntro: true },
    ] },
  { id: "p6-comprehension", title: "Comprehension", icon: "📰", description: "Read passages and answer literal + inferential questions.",
    modules: [
      { id: "p6e-cp1", title: "Comprehension MCQ", description: "Two passages with inference, vocabulary-in-context, and theme questions.", hasIntro: true },
    ] },
];
const P6_MATH_TOPICS = [
  { id: "p6-ratio", title: "Ratio", icon: "⚖️", description: "Equivalent ratios, simplifying, and sharing!",
    modules: [
      { id: "p6m-ra1", title: "Ratio", description: "Simplify 12:8. Share $60 in ratio 1:2." },
    ] },
  { id: "p6-algebra", title: "Algebra", icon: "🔤", description: "Expressions, substitution, and solving equations!",
    modules: [
      { id: "p6m-al1", title: "Algebra", description: "Simplify 3x + 2x. Solve x + 5 = 12." },
    ] },
  { id: "p6-speed", title: "Speed, Distance & Time", icon: "🚗", description: "Calculate speed, distance, and time — a key PSLE topic.",
    modules: [
      { id: "p6m-st1", title: "Speed, Distance & Time", description: "D = S × T. Find any of the three when you know the other two.", hasIntro: true },
    ] },
  { id: "p6-fractions", title: "Fraction Word Problems", icon: "🍕", description: "Apply fractions to real-world problems — a PSLE staple.",
    modules: [
      { id: "p6m-fw1", title: "Fraction Word Problems", description: "Fraction of a quantity, remainders, and 'left over' problems.", hasIntro: true },
    ] },
  { id: "p6-percentage", title: "Percentage", icon: "💯", description: "Discount, GST, percentage change — heavily tested at PSLE.",
    modules: [
      { id: "p6m-pe1", title: "Percentage", description: "Find percentage of a number, discount, GST, percentage change.", hasIntro: true },
    ] },
  { id: "p6-volume", title: "Volume", icon: "📦", description: "Volume of cubes, cuboids, and liquid in containers.",
    modules: [
      { id: "p6m-vo1", title: "Volume of Cubes & Cuboids", description: "Calculate volume, find missing dimensions, work with litres.", hasIntro: true },
    ] },
  { id: "p6-geometry", title: "Angles", icon: "📐", description: "Angle properties of triangles, quadrilaterals, and straight lines.",
    modules: [
      { id: "p6m-ge1", title: "Angles", description: "Sum of angles in triangles (180°), quadrilaterals (360°), straight lines.", hasIntro: true },
    ] },
  { id: "p6-area", title: "Area & Perimeter", icon: "📏", description: "Rectangles, triangles, and composite shapes.",
    modules: [
      { id: "p6m-ar1", title: "Area & Perimeter", description: "L × W, ½ × b × h, composite shapes.", hasIntro: true },
    ] },
  { id: "p6-nets", title: "Nets of Solids", icon: "🎲", description: "Cube and cuboid nets, surface area.",
    modules: [
      { id: "p6m-ne1", title: "Nets of Solids", description: "Faces, nets, and surface area of cubes and cuboids." },
    ] },
  { id: "p6-average", title: "Average", icon: "📊", description: "Mean, total, and finding missing values.",
    modules: [
      { id: "p6m-av1", title: "Average", description: "Total ÷ Count = Average. Find missing values.", hasIntro: true },
    ] },
  { id: "p6-piecharts", title: "Pie Charts", icon: "🥧", description: "Reading and interpreting pie charts — angles, fractions, percentages.",
    modules: [
      { id: "p6m-pc1", title: "Pie Charts", description: "Convert between angles, fractions, and percentages.", hasIntro: true },
    ] },
];
const P6_CHINESE_TOPICS = [
  { id: "p6-cn-vocab", title: "成语", icon: "📖", description: "成语意思和用法！",
    modules: [
      { id: "p6c-vc1", title: "成语 (一)", description: "锲而不舍、一举两得、半途而废。" },
      { id: "p6c-vc2", title: "成语 (二)", description: "自相矛盾、画蛇添足、亡羊补牢。" },
    ] },
  { id: "p6-cn-grammar", title: "语法", icon: "✏️", description: "关联词、把被句、的地得！",
    modules: [
      { id: "p6c-gr1", title: "关联词和的地得", description: "既...又、无论...还是。" },
    ] },
  { id: "p6-cn-bingju", title: "病句", icon: "🔧", description: "找出句子中的错误，选出正确的句子。",
    modules: [
      { id: "p6c-bj1", title: "病句改正", description: "的地得、量词、关联词搭配。" },
    ] },
  { id: "p6-cn-reading", title: "阅读理解", icon: "📰", description: "短文阅读，回答问题。",
    modules: [
      { id: "p6c-rd1", title: "阅读理解", description: "阅读短文，回答问题。", hasIntro: true },
    ] },
  { id: "p6-cn-synonyms", title: "近义词和反义词", icon: "🔄", description: "高兴↔快乐，美丽↔丑陋。",
    modules: [
      { id: "p6c-sy1", title: "近义词和反义词", description: "高兴的近义词？勇敢的反义词？" },
    ] },
];

export const LEVELS = {
  p1: [
    { id: "math", title: "Mathematics", icon: "🔢", description: "Numbers, shapes, time, and more!", topics: MATH_TOPICS },
    { id: "english", title: "English", icon: "📖", description: "Words, grammar, reading, and phonics!", topics: ENGLISH_TOPICS },
    { id: "science", title: "Science", icon: "🔬", description: "Living things, plants, animals, and weather!", topics: SCIENCE_TOPICS },
    { id: "chinese", title: "华文", icon: "字", description: "拼音、汉字、词语、句子！", topics: CHINESE_TOPICS },
  ],
  p2: [
    { id: "math", title: "Mathematics", icon: "🔢", description: "Multiplication, division, fractions, and more!", topics: P2_MATH_TOPICS },
    { id: "english", title: "English", icon: "📖", description: "Past tense, adjectives, conjunctions, and comprehension!", topics: P2_ENGLISH_TOPICS },
    { id: "science", title: "Science", icon: "🔬", description: "Materials, magnets, and life cycles!", topics: P2_SCIENCE_TOPICS },
    { id: "chinese", title: "华文", icon: "字", description: "更多汉字、阅读理解！", topics: P2_CHINESE_TOPICS },
  ],
  p3: [
    { id: "math", title: "Mathematics", icon: "🔢", description: "Times tables, fractions, area, perimeter, and angles!", topics: P3_MATH_TOPICS },
    { id: "english", title: "English", icon: "📖", description: "Continuous tense, synonyms, antonyms, and comprehension!", topics: P3_ENGLISH_TOPICS },
    { id: "science", title: "Science", icon: "🔬", description: "Diversity, adaptations, and body systems!", topics: P3_SCIENCE_TOPICS },
    { id: "chinese", title: "华文", icon: "字", description: "量词、造句、阅读理解！", topics: P3_CHINESE_TOPICS },
  ],
  p4: [
    { id: "math", title: "Mathematics", icon: "🔢", description: "Factors, multiples, decimals, and fractions!", topics: P4_MATH_TOPICS },
    { id: "english", title: "English", icon: "📖", description: "Tenses, prepositions, conjunctions, and vocabulary!", topics: P4_ENGLISH_TOPICS },
    { id: "science", title: "Science", icon: "🔬", description: "Matter, heat, light, plants, and digestion!", topics: P4_SCIENCE_TOPICS },
    { id: "chinese", title: "华文", icon: "字", description: "词语、量词、关联词！", topics: P4_CHINESE_TOPICS },
  ],
  p5: [
    { id: "math", title: "Mathematics", icon: "🔢", description: "Percentage, rate, and fractions!", topics: P5_MATH_TOPICS },
    { id: "english", title: "English", icon: "📖", description: "Active/passive voice, speech, conjunctions, and vocabulary!", topics: P5_ENGLISH_TOPICS },
    { id: "science", title: "Science", icon: "🔬", description: "Water cycle, reproduction, body systems, circuits, and energy!", topics: P5_SCIENCE_TOPICS },
    { id: "chinese", title: "华文", icon: "字", description: "词语、把被句、关联词！", topics: P5_CHINESE_TOPICS },
  ],
  p6: [
    { id: "math", title: "Mathematics", icon: "🔢", description: "Ratio, algebra, and percentage!", topics: P6_MATH_TOPICS },
    { id: "english", title: "English", icon: "📖", description: "PSLE grammar revision, modals, and vocabulary!", topics: P6_ENGLISH_TOPICS },
    { id: "science", title: "Science", icon: "🔬", description: "Photosynthesis, forces, food chains, adaptations, and environment!", topics: P6_SCIENCE_TOPICS },
    { id: "chinese", title: "华文", icon: "字", description: "成语、关联词、的地得！", topics: P6_CHINESE_TOPICS },
  ],
};

// Flat list of all subjects across all levels (for star counting)
const ALL_SUBJECTS = [...LEVELS.p1, ...LEVELS.p2, ...LEVELS.p3, ...LEVELS.p4, ...LEVELS.p5, ...LEVELS.p6];

// ============ HELPERS ============
export function getSubjectsForLevel(level) {
  return LEVELS[level] || [];
}

export function getSubject(subjectId, level) {
  const subjects = LEVELS[level] || [];
  return subjects.find((s) => s.id === subjectId);
}

export function getTopic(subjectId, topicId, level) {
  const subject = getSubject(subjectId, level);
  return subject?.topics.find((t) => t.id === topicId);
}

export function getModule(subjectId, topicId, moduleId, level) {
  const topic = getTopic(subjectId, topicId, level);
  return topic?.modules.find((m) => m.id === moduleId);
}

export function getTopicStars(topicId, moduleStars) {
  for (const subject of ALL_SUBJECTS) {
    const topic = subject.topics.find((t) => t.id === topicId);
    if (topic) {
      return topic.modules.reduce((sum, mod) => sum + (moduleStars[mod.id] || 0), 0);
    }
  }
  return 0;
}

export function getTotalStars(moduleStars) {
  let total = 0;
  for (const subject of ALL_SUBJECTS) {
    for (const topic of subject.topics) {
      for (const mod of topic.modules) {
        total += moduleStars[mod.id] || 0;
      }
    }
  }
  return total;
}
