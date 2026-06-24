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
    { q: "What does 'AI' stand for?", a: "Artificial Intelligence", choices: ["Artificial Intelligence", "Automatic Internet", "Active Imagination"], explain: "AI means Artificial Intelligence: 'artificial' because people built it, 'intelligence' because it does jobs that usually need human thinking, like spotting a cat in a photo." },
    { q: "How does an AI learn to recognise cats?", a: "By being shown many photos of cats", choices: ["By being shown many photos of cats", "By being born with the knowledge", "By guessing randomly"], explain: "AI learns from examples, not from being born clever. Show it millions of cat photos and it slowly finds the pattern of what a cat looks like, the same way you learn by seeing many examples." },
    { q: "Which of these is NOT an example of AI?", a: "A traditional pencil sharpener", choices: ["A traditional pencil sharpener", "A voice helper like Siri", "Photo filters that change your face"], explain: "AI does jobs that need pattern-learning. A pencil sharpener is a plain machine that only spins a blade, with no learning. Siri and face filters learn from data, so they are AI." },
    { q: "If an AI gives you an answer for a school project, what should you do?", a: "Check it against a trusted source", choices: ["Check it against a trusted source", "Trust it without checking", "Hide that you used AI and never look again"], explain: "AI can be wrong because it guesses patterns, not certain truth. So treat its answer like a hint and check it against a trusted source such as a book or teacher before you rely on it." },
    { q: "Can AI feel happy or sad like a person?", a: "No — AI is a tool and does not have feelings", choices: ["No — AI is a tool and does not have feelings", "Yes, exactly like people", "Only when it is plugged in"], explain: "AI is a tool, like a calculator. It can copy friendly words, but it does not actually feel, care, or have a heart the way a person does." },
    { q: "Which sentence is TRUE about AI?", a: "AI can make mistakes", choices: ["AI can make mistakes", "AI is always correct", "AI knows everything in the world"], explain: "Because AI learns from examples and predicts patterns, it can get things wrong, especially on new or tricky questions. That is why we always double-check important answers." },
    { q: "Which is the BEST description of AI?", a: "Computer programs that learn patterns from data", choices: ["Computer programs that learn patterns from data", "Robots that look like people", "A type of magic"], explain: "AI is software that finds patterns in lots of data. It does not need to be a human-shaped robot, and it is not magic; it is maths and code learning from examples." },
    { q: "Why does AI need lots of examples to learn?", a: "It looks for patterns across many examples", choices: ["It looks for patterns across many examples", "Computers get bored with one example", "It is the law"], explain: "A pattern only shows up when you compare many cases. One cat photo cannot teach 'what cats look like', but millions reveal the shared features, so AI needs lots of examples." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4ExFin1() {
  return shuffle([
    { q: "Which of these is a NEED?", a: "Drinking water", choices: ["Drinking water", "A new video game", "A second pair of party shoes"], explain: "A need is something you must have to live healthily. You cannot stay alive and well without water, so it is a need. A game or extra party shoes are nice but you can live without them." },
    { q: "Which of these is a WANT?", a: "The newest mobile phone model", choices: ["The newest mobile phone model", "School uniform", "Healthy food"], explain: "A want is nice to have but not necessary. The newest phone is a want, while a uniform and healthy food are things you actually need for school and health." },
    { q: "If you only have $10 and you need a school book ($8) and want a snack ($5), what should you buy first?", a: "The school book", choices: ["The school book", "The snack", "Both, even if money runs out"], explain: "When money is limited, needs come before wants. The book is a need for school, so buy it first; spending on the snack first could leave you short for the thing you really need." },
    { q: "What does it mean to 'budget' your pocket money?", a: "Plan how you will spend and save it", choices: ["Plan how you will spend and save it", "Spend it all on day one", "Hide it from your parents"], explain: "A budget is a plan for your money: deciding ahead how much to spend and how much to save. Planning first means your money covers your needs instead of vanishing by accident." },
    { q: "Why is it smart to save some pocket money?", a: "So you have money for bigger needs or wants later", choices: ["So you have money for bigger needs or wants later", "So your parents stop giving it to you", "Because saving is boring"], explain: "Saving stores money for the future. Some needs or wants cost more than one week's pocket money, so putting a little aside each time lets you afford bigger things later." },
    { q: "A friend says 'you NEED these new sneakers, your old ones are out of style.' Is this a need or a want?", a: "A want — your old ones still work", choices: ["A want — your old ones still work", "A need — style is important", "A need — old shoes are unsafe"], explain: "A need is about staying healthy and safe, not about fashion. If your old shoes still fit and work, new ones for style are a want, even when a friend calls them a need." },
    { q: "Which is the BEST order to use your money?", a: "Needs, then save, then wants", choices: ["Needs, then save, then wants", "Wants, then needs, then save", "Save everything and never spend"], explain: "Cover needs first so you are safe, then save some for later, and enjoy wants with what is left. Putting wants first risks running out before your needs are paid for." },
    { q: "Your school bag is broken and the strap is unsafe. Replacing it is a:", a: "Need", choices: ["Need", "Want", "Luxury"], explain: "A need keeps you safe and able to do daily life. A broken, unsafe bag stops you carrying your books properly, so replacing it is a need, not just a nice extra." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4ExThink1() {
  return shuffle([
    { q: "Which of these is a FACT?", a: "Singapore has four official languages", choices: ["Singapore has four official languages", "Singapore food is the best in the world", "Mondays are awful"], explain: "A fact can be checked and proven true. You can look up that Singapore has four official languages. 'Best food' and 'awful Mondays' are feelings, so they are opinions." },
    { q: "Which of these is an OPINION?", a: "Chicken rice tastes better than laksa", choices: ["Chicken rice tastes better than laksa", "Water boils at 100°C at sea level", "There are 7 days in a week"], explain: "An opinion is what someone thinks or prefers, and others may disagree. Which dish 'tastes better' is a personal view. Boiling point and days in a week can be checked, so they are facts." },
    { q: "Which word is a clue that a sentence is an opinion?", a: "best", choices: ["best", "is", "Singapore"], explain: "Judging words like 'best', 'worst' or 'beautiful' show someone's feeling, which is a clue that you are reading an opinion. 'Is' and 'Singapore' are neutral and give no such hint." },
    { q: "If a friend says 'all dogs are scary', this is:", a: "An opinion", choices: ["An opinion", "A fact", "A measurement"], explain: "Whether dogs are 'scary' is how that person feels, and many people would disagree, so it is an opinion. A fact would be something checkable that everyone can confirm." },
    { q: "What is a good question to ask when someone tells you a fact?", a: "How do you know?", choices: ["How do you know?", "Do you like ice cream?", "What time is it?"], explain: "Good thinkers check facts instead of just believing them. Asking 'How do you know?' makes the person show their evidence, so you can decide if the fact is really true." },
    { q: "Which of these CAN you check to prove it true or false?", a: "The Earth has one moon", choices: ["The Earth has one moon", "Math is fun", "Yellow is the prettiest colour"], explain: "A fact is checkable. You can count and confirm the Earth has one moon. Whether maths is fun or yellow is prettiest depends on each person's feelings, so those are opinions." },
    { q: "An advert says: 'Our drink is the most delicious in Singapore!' This is mostly:", a: "An opinion to make you buy it", choices: ["An opinion to make you buy it", "A scientific fact", "A weather report"], explain: "'Most delicious' is a taste judgement, not something you can prove, and adverts use such opinions to persuade you to buy. Spotting this helps you not be fooled by selling words." },
    { q: "Why is it useful to know fact from opinion?", a: "So you can decide what to believe and what to question", choices: ["So you can decide what to believe and what to question", "So you can argue more with friends", "So you never need to read again"], explain: "Telling facts from opinions lets you trust checkable information and think twice about personal views, which helps you make smart choices, especially online where both are mixed together." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4ExEco1() {
  return shuffle([
    { q: "What do the 3 Rs stand for?", a: "Reduce, Reuse, Recycle", choices: ["Reduce, Reuse, Recycle", "Read, Run, Rest", "Right, Repeat, Renew"], explain: "The 3 Rs are Reduce, Reuse, Recycle. They are three ways to use less and waste less so the Earth's limited resources last longer." },
    { q: "Which of the 3 Rs is the BEST for the environment?", a: "Reduce", choices: ["Reduce", "Reuse", "Recycle"], explain: "Reduce comes first because the best rubbish is the rubbish you never make. If you do not use something, there is nothing to clean up, reuse, or recycle later." },
    { q: "Bringing your own water bottle to school instead of buying a plastic one is an example of:", a: "Reduce", choices: ["Reduce", "Recycle", "Throwing away"], explain: "Reduce means using less in the first place. Your own bottle means you never buy the plastic ones, so the waste is never created, which is reducing." },
    { q: "Using an old jam jar to hold pencils is an example of:", a: "Reuse", choices: ["Reuse", "Recycle", "Reduce"], explain: "Reuse means using something again for a new job instead of throwing it out. The jar is not melted down or remade; it simply gets a second life holding pencils." },
    { q: "Putting old paper into a blue bin so it can become a new notebook is:", a: "Recycle", choices: ["Recycle", "Reduce", "Reuse"], explain: "Recycle means waste is broken down and made into something new. The old paper is processed at a plant and turned into a fresh notebook, so it is recycling." },
    { q: "Why should we care about reducing waste?", a: "Earth has limited resources and waste pollutes the environment", choices: ["Earth has limited resources and waste pollutes the environment", "Bins are expensive", "Adults say so"], explain: "The Earth only has so much water, wood, and metal, and rubbish can pollute land, air and sea. Wasting less protects those resources and keeps the environment clean." },
    { q: "Which of these is NOT a way to reduce waste?", a: "Buying more new things you do not need", choices: ["Buying more new things you do not need", "Repairing a broken zip", "Sharing books with classmates"], explain: "Reducing waste means making less rubbish. Buying things you do not need creates more waste, while repairing and sharing keep items in use, so those two do help." },
    { q: "A school bag handed down from an older sibling is an example of:", a: "Reuse", choices: ["Reuse", "Recycle", "Reduce"], explain: "Reuse means using an item again as it is. The same bag is used by another child instead of being thrown away or remade, so passing it down is reusing." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4ExBul1() {
  return shuffle([
    { q: "Which of these BEST describes bullying?", a: "Hurting someone on purpose, again and again", choices: ["Hurting someone on purpose, again and again", "A one-off accident", "A small disagreement"], explain: "Bullying has two key parts: it is done on purpose and it happens again and again. An accident is not meant to hurt, and a single disagreement is not repeated, so neither counts." },
    { q: "A classmate trips and you laugh by accident, then say sorry. Is that bullying?", a: "No — it was not on purpose and you apologised", choices: ["No — it was not on purpose and you apologised", "Yes, all laughing is bullying", "Only if a teacher saw it"], explain: "Bullying means hurting on purpose and repeatedly. Laughing by accident once and saying sorry is not deliberate or repeated, so it is a mistake, not bullying." },
    { q: "Someone in your class has been called names every day for two weeks. This is:", a: "Bullying", choices: ["Bullying", "Just teasing", "A normal friendship"], explain: "Name-calling every day for two weeks is hurtful and keeps happening on purpose, which fits bullying. Repeated, intended harm is what separates bullying from a one-off joke." },
    { q: "If you are being bullied, what is the FIRST thing you should try?", a: "Stay calm, walk away if safe, and tell a trusted adult", choices: ["Stay calm, walk away if safe, and tell a trusted adult", "Bully them back even harder", "Hide and hope it stops on its own"], explain: "Staying calm and telling a trusted adult gets you safe help, and it is never your fault. Hitting back can make things worse, and hiding rarely makes bullying stop on its own." },
    { q: "If you SEE bullying happening, the kindest thing to do is:", a: "Help if it is safe, or tell an adult", choices: ["Help if it is safe, or tell an adult", "Laugh along so the bully does not turn on you", "Pretend you saw nothing"], explain: "A bystander who acts can stop bullying. Helping when safe or telling an adult protects the victim, while laughing along or ignoring it lets the bullying carry on." },
    { q: "What is an 'upstander'?", a: "A bystander who chooses to help", choices: ["A bystander who chooses to help", "A bully's friend", "Someone who stands very tall"], explain: "An upstander is a bystander who chooses to do something good, like helping the victim or telling an adult, instead of just watching. The 'up' means standing up for someone." },
    { q: "Telling a teacher about bullying is:", a: "Trying to keep someone safe", choices: ["Trying to keep someone safe", "Tattling", "Showing off"], explain: "Telling and tattling are different. Tattling tries to get someone into trouble, but reporting bullying tries to keep a person safe, which is the right and caring thing to do." },
    { q: "Whose fault is it when someone is bullied?", a: "The bully's — never the victim's", choices: ["The bully's — never the victim's", "The victim's, for being different", "Nobody's"], explain: "The person who chooses to hurt others is responsible for it. Being different is never a reason to be bullied, so the fault is always the bully's, not the victim's." },
    { q: "Which is a kind action you can do today?", a: "Sit with a classmate who eats alone", choices: ["Sit with a classmate who eats alone", "Ignore everyone you do not know", "Only be friends with the popular group"], explain: "Kindness on purpose helps stop people feeling left out. Sitting with a classmate who eats alone includes them, while ignoring others or only joining one group leaves people out." },
    { q: "Bullies often act tough because:", a: "They are sometimes hurting inside themselves", choices: ["They are sometimes hurting inside themselves", "They are very happy", "It is a school rule"], explain: "Acting tough is often a cover. Some bullies are upset or hurting inside and take it out on others. Understanding this does not excuse it, but it explains the behaviour." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
