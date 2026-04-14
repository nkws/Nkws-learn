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
      { id: "p3e-vc3", title: "Prepositions", description: "Under, on, in, behind." },
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
    { id: "science", title: "Science", icon: "🔬", description: "Matter, heat, light, plants, and digestion!", topics: P4_SCIENCE_TOPICS },
  ],
};

// Flat list of all subjects across all levels (for star counting)
const ALL_SUBJECTS = [...LEVELS.p1, ...LEVELS.p2, ...LEVELS.p3, ...LEVELS.p4];

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
