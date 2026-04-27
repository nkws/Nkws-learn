import { shuffle } from "../../utils/helpers";

export const P4_EXPLORE_INTRO = {
  "p4ex-ai1": {
    title: "What is AI?",
    pages: [
      { text: "AI stands for Artificial Intelligence. It means computer programs that can do things that usually need a thinking human — like recognising a cat in a photo or finishing your sentence.", emoji: "🤖 🧠" },
      { text: "AI learns from LOTS of examples. To learn what a cat looks like, an AI is shown millions of cat photos until it spots the pattern.", emoji: "🐱 🐱 🐱 → 💡" },
      { text: "AI is just a tool, like a calculator. It is good at some jobs, but it does not feel, think, or care like a person does.", emoji: "🛠️ ≠ ❤️" },
      { text: "Examples you may have seen: photo filters, voice helpers like Siri, video suggestions on YouTube — those are all AI.", emoji: "📱 🎬" },
      { text: "Important: AI can make mistakes! Always check important answers with a real person or trusted source.", emoji: "✅ 👀" },
    ],
  },
  "p4ex-fin1": {
    title: "Needs vs Wants",
    pages: [
      { text: "A NEED is something you must have to live healthily — food, water, a safe home, clothes for the weather.", emoji: "🍎 🏠 👕" },
      { text: "A WANT is something nice to have but you can live without — sweets, the newest game, a fancy bag.", emoji: "🍬 🎮 👜" },
      { text: "Money is limited. If you spend it all on wants, you may not have enough for needs.", emoji: "💰 ⚠️" },
      { text: "A simple rule: pay for needs FIRST, then save some, then enjoy wants with what is left.", emoji: "1️⃣ 2️⃣ 3️⃣" },
      { text: "Sometimes a want today becomes more important later — for example, a new pair of school shoes when yours fit fine. Think before you spend!", emoji: "🤔" },
    ],
  },
  "p4ex-think1": {
    title: "Fact vs Opinion",
    pages: [
      { text: "A FACT is something that is true and can be checked. 'Singapore is in Southeast Asia' is a fact — you can look it up.", emoji: "📍 ✅" },
      { text: "An OPINION is what someone thinks or feels. 'Chicken rice is the best food' is an opinion — others may disagree.", emoji: "💭" },
      { text: "Words like 'best', 'worst', 'beautiful', 'should' are clues that you are reading an opinion.", emoji: "🚩" },
      { text: "Both facts and opinions are useful — but you should know which one you are reading, especially online.", emoji: "📰 🧠" },
      { text: "If someone tells you a fact, ask: 'how do you know?' Good thinkers always check.", emoji: "🔎" },
    ],
  },
  "p4ex-eco1": {
    title: "Reduce, Reuse, Recycle",
    pages: [
      { text: "Earth has limited resources. The 3 Rs help us use less and waste less: REDUCE, REUSE, RECYCLE.", emoji: "🌍 ♻️" },
      { text: "REDUCE means use less. Bring your own water bottle instead of buying a new plastic one each time.", emoji: "🚰" },
      { text: "REUSE means use again. An old jam jar can hold pencils. A school bag passed to a younger sibling is a reuse.", emoji: "🫙 → ✏️" },
      { text: "RECYCLE means turn waste into something new. Old paper, plastic, and metal can be made into new items at recycling plants.", emoji: "📰 → 📦" },
      { text: "REDUCE is the best of the three — the rubbish you do not make does not need to be cleaned up.", emoji: "1️⃣ 🥇" },
    ],
  },
  "p4ex-bul1": {
    title: "Spotting and Stopping Bullying",
    pages: [
      { text: "Bullying is when someone hurts another person ON PURPOSE and AGAIN AND AGAIN — with words, hands, or by leaving them out.", emoji: "🚫 😢" },
      { text: "A one-off rude comment is mean — but bullying happens REPEATEDLY and the bully knows it hurts.", emoji: "🔁 ⚠️" },
      { text: "If you are bullied: stay calm, walk away if you can, and tell a trusted adult. It is NEVER your fault.", emoji: "🚶 → 🧑‍🏫" },
      { text: "If you SEE bullying: do not laugh or join in. Help the person if it is safe, or tell an adult. A bystander who helps is called an UPSTANDER.", emoji: "🦸" },
      { text: "Telling a teacher is NOT 'tattling'. Tattling tries to get someone in trouble. Telling tries to keep someone SAFE.", emoji: "🛡️" },
      { text: "Be kind on purpose. One kind sentence to a classmate can change their whole day.", emoji: "💛" },
    ],
  },
};

function buildP4ExAi1() {
  return shuffle([
    { q: "What does 'AI' stand for?", a: "Artificial Intelligence", choices: ["Artificial Intelligence", "Automatic Internet", "Active Imagination"] },
    { q: "How does an AI learn to recognise cats?", a: "By being shown many photos of cats", choices: ["By being shown many photos of cats", "By being born with the knowledge", "By guessing randomly"] },
    { q: "Which of these is NOT an example of AI?", a: "A traditional pencil sharpener", choices: ["A traditional pencil sharpener", "A voice helper like Siri", "Photo filters that change your face"] },
    { q: "If an AI gives you an answer for a school project, what should you do?", a: "Check it against a trusted source", choices: ["Check it against a trusted source", "Trust it without checking", "Hide that you used AI and never look again"] },
    { q: "Can AI feel happy or sad like a person?", a: "No — AI is a tool and does not have feelings", choices: ["No — AI is a tool and does not have feelings", "Yes, exactly like people", "Only when it is plugged in"] },
    { q: "Which sentence is TRUE about AI?", a: "AI can make mistakes", choices: ["AI can make mistakes", "AI is always correct", "AI knows everything in the world"] },
    { q: "Which is the BEST description of AI?", a: "Computer programs that learn patterns from data", choices: ["Computer programs that learn patterns from data", "Robots that look like people", "A type of magic"] },
    { q: "Why does AI need lots of examples to learn?", a: "It looks for patterns across many examples", choices: ["It looks for patterns across many examples", "Computers get bored with one example", "It is the law"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4ExFin1() {
  return shuffle([
    { q: "Which of these is a NEED?", a: "Drinking water", choices: ["Drinking water", "A new video game", "A second pair of party shoes"] },
    { q: "Which of these is a WANT?", a: "The newest mobile phone model", choices: ["The newest mobile phone model", "School uniform", "Healthy food"] },
    { q: "If you only have $10 and you need a school book ($8) and want a snack ($5), what should you buy first?", a: "The school book", choices: ["The school book", "The snack", "Both, even if money runs out"] },
    { q: "What does it mean to 'budget' your pocket money?", a: "Plan how you will spend and save it", choices: ["Plan how you will spend and save it", "Spend it all on day one", "Hide it from your parents"] },
    { q: "Why is it smart to save some pocket money?", a: "So you have money for bigger needs or wants later", choices: ["So you have money for bigger needs or wants later", "So your parents stop giving it to you", "Because saving is boring"] },
    { q: "A friend says 'you NEED these new sneakers, your old ones are out of style.' Is this a need or a want?", a: "A want — your old ones still work", choices: ["A want — your old ones still work", "A need — style is important", "A need — old shoes are unsafe"] },
    { q: "Which is the BEST order to use your money?", a: "Needs, then save, then wants", choices: ["Needs, then save, then wants", "Wants, then needs, then save", "Save everything and never spend"] },
    { q: "Your school bag is broken and the strap is unsafe. Replacing it is a:", a: "Need", choices: ["Need", "Want", "Luxury"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4ExThink1() {
  return shuffle([
    { q: "Which of these is a FACT?", a: "Singapore has four official languages", choices: ["Singapore has four official languages", "Singapore food is the best in the world", "Mondays are awful"] },
    { q: "Which of these is an OPINION?", a: "Chicken rice tastes better than laksa", choices: ["Chicken rice tastes better than laksa", "Water boils at 100°C at sea level", "There are 7 days in a week"] },
    { q: "Which word is a clue that a sentence is an opinion?", a: "best", choices: ["best", "is", "Singapore"] },
    { q: "If a friend says 'all dogs are scary', this is:", a: "An opinion", choices: ["An opinion", "A fact", "A measurement"] },
    { q: "What is a good question to ask when someone tells you a fact?", a: "How do you know?", choices: ["How do you know?", "Do you like ice cream?", "What time is it?"] },
    { q: "Which of these CAN you check to prove it true or false?", a: "The Earth has one moon", choices: ["The Earth has one moon", "Math is fun", "Yellow is the prettiest colour"] },
    { q: "An advert says: 'Our drink is the most delicious in Singapore!' This is mostly:", a: "An opinion to make you buy it", choices: ["An opinion to make you buy it", "A scientific fact", "A weather report"] },
    { q: "Why is it useful to know fact from opinion?", a: "So you can decide what to believe and what to question", choices: ["So you can decide what to believe and what to question", "So you can argue more with friends", "So you never need to read again"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4ExEco1() {
  return shuffle([
    { q: "What do the 3 Rs stand for?", a: "Reduce, Reuse, Recycle", choices: ["Reduce, Reuse, Recycle", "Read, Run, Rest", "Right, Repeat, Renew"] },
    { q: "Which of the 3 Rs is the BEST for the environment?", a: "Reduce", choices: ["Reduce", "Reuse", "Recycle"] },
    { q: "Bringing your own water bottle to school instead of buying a plastic one is an example of:", a: "Reduce", choices: ["Reduce", "Recycle", "Throwing away"] },
    { q: "Using an old jam jar to hold pencils is an example of:", a: "Reuse", choices: ["Reuse", "Recycle", "Reduce"] },
    { q: "Putting old paper into a blue bin so it can become a new notebook is:", a: "Recycle", choices: ["Recycle", "Reduce", "Reuse"] },
    { q: "Why should we care about reducing waste?", a: "Earth has limited resources and waste pollutes the environment", choices: ["Earth has limited resources and waste pollutes the environment", "Bins are expensive", "Adults say so"] },
    { q: "Which of these is NOT a way to reduce waste?", a: "Buying more new things you do not need", choices: ["Buying more new things you do not need", "Repairing a broken zip", "Sharing books with classmates"] },
    { q: "A school bag handed down from an older sibling is an example of:", a: "Reuse", choices: ["Reuse", "Recycle", "Reduce"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4ExBul1() {
  return shuffle([
    { q: "Which of these BEST describes bullying?", a: "Hurting someone on purpose, again and again", choices: ["Hurting someone on purpose, again and again", "A one-off accident", "A small disagreement"] },
    { q: "A classmate trips and you laugh by accident, then say sorry. Is that bullying?", a: "No — it was not on purpose and you apologised", choices: ["No — it was not on purpose and you apologised", "Yes, all laughing is bullying", "Only if a teacher saw it"] },
    { q: "Someone in your class has been called names every day for two weeks. This is:", a: "Bullying", choices: ["Bullying", "Just teasing", "A normal friendship"] },
    { q: "If you are being bullied, what is the FIRST thing you should try?", a: "Stay calm, walk away if safe, and tell a trusted adult", choices: ["Stay calm, walk away if safe, and tell a trusted adult", "Bully them back even harder", "Hide and hope it stops on its own"] },
    { q: "If you SEE bullying happening, the kindest thing to do is:", a: "Help if it is safe, or tell an adult", choices: ["Help if it is safe, or tell an adult", "Laugh along so the bully does not turn on you", "Pretend you saw nothing"] },
    { q: "What is an 'upstander'?", a: "A bystander who chooses to help", choices: ["A bystander who chooses to help", "A bully's friend", "Someone who stands very tall"] },
    { q: "Telling a teacher about bullying is:", a: "Trying to keep someone safe", choices: ["Trying to keep someone safe", "Tattling", "Showing off"] },
    { q: "Whose fault is it when someone is bullied?", a: "The bully's — never the victim's", choices: ["The bully's — never the victim's", "The victim's, for being different", "Nobody's"] },
    { q: "Which is a kind action you can do today?", a: "Sit with a classmate who eats alone", choices: ["Sit with a classmate who eats alone", "Ignore everyone you do not know", "Only be friends with the popular group"] },
    { q: "Bullies often act tough because:", a: "They are sometimes hurting inside themselves", choices: ["They are sometimes hurting inside themselves", "They are very happy", "It is a school rule"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "p4ex-ai1": buildP4ExAi1,
  "p4ex-fin1": buildP4ExFin1,
  "p4ex-think1": buildP4ExThink1,
  "p4ex-eco1": buildP4ExEco1,
  "p4ex-bul1": buildP4ExBul1,
};

export const P4_EXPLORE_QUESTION_COUNTS = {
  "p4ex-ai1": 8,
  "p4ex-fin1": 8,
  "p4ex-think1": 8,
  "p4ex-eco1": 8,
  "p4ex-bul1": 10,
};

export function buildP4ExploreQuestions(moduleId) {
  return (BUILDERS[moduleId] || (() => []))();
}
