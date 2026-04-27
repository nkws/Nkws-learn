import { shuffle } from "../../utils/helpers";

export const P5_EXPLORE_INTRO = {
  "p5ex-ai1": {
    title: "How AI Really Works",
    pages: [
      { text: "AI does not 'think' like you do. It looks at patterns in HUGE amounts of data and predicts the most likely answer.", emoji: "📊 → 💡" },
      { text: "When you type a question into a chatbot, it predicts the next words — one by one — based on patterns it has seen.", emoji: "💬 ➡️ 💬" },
      { text: "Because it predicts, AI can confidently say things that are WRONG. This is called a HALLUCINATION.", emoji: "🤖 ❌" },
      { text: "Example: an AI might invent a fake book title or a wrong birthday for a famous person and sound very sure about it.", emoji: "📚?" },
      { text: "Rule of thumb: never use AI as your only source for a fact. Cross-check with a textbook, a teacher, or a trusted website.", emoji: "✅ 🔁" },
    ],
  },
  "p5ex-fin1": {
    title: "Saving, Budgeting, and Scams",
    pages: [
      { text: "A BUDGET is a plan for your money. Income comes IN (pocket money, ang baos). Spending goes OUT.", emoji: "💵 ➡️ 📒" },
      { text: "A simple kid budget: save some, spend some, share some. Even 20% saved each week adds up over a year!", emoji: "🪙 + 🪙 + 🪙" },
      { text: "Goals help: 'I want a $40 game in 5 months' → save $8 a month. Now you have a plan, not a wish.", emoji: "🎯" },
      { text: "Watch out for SCAMS: messages that say 'You won a prize! Click here!' or 'Your account is locked, send your password.' Real banks NEVER ask for passwords.", emoji: "⚠️ 🎣" },
      { text: "If something online sounds too good to be true, it usually is. When in doubt, show the message to a parent.", emoji: "🛑" },
    ],
  },
  "p5ex-think1": {
    title: "Spotting Fake News",
    pages: [
      { text: "Fake news is FALSE information made to look real, often to scare or excite you so you share it.", emoji: "📰 ❌" },
      { text: "Clue 1: shocking ALL-CAPS headlines like 'YOU WON'T BELIEVE WHAT HAPPENED!!!' Real news usually sounds calmer.", emoji: "🚨" },
      { text: "Clue 2: no source, or the source is a random website. Real news links to who said what and when.", emoji: "🔗 ❓" },
      { text: "Clue 3: the photo doesn't match the story (try a reverse image search), or the date is very old.", emoji: "📷 🕰️" },
      { text: "Clue 4: only one website is reporting it. Real big news appears in many trusted places at once.", emoji: "🗞️ 🗞️ 🗞️" },
      { text: "Before you share: STOP, check the source, and ask 'who benefits if I believe this?'", emoji: "🛑 🤔" },
    ],
  },
  "p5ex-eco1": {
    title: "Your Carbon Footprint",
    pages: [
      { text: "Almost everything we do uses energy. Energy mostly comes from burning fuel, which puts CO₂ into the air.", emoji: "⚡ → 💨" },
      { text: "Too much CO₂ traps heat — that's how climate change happens. Earth slowly warms up.", emoji: "🌡️ 🌍" },
      { text: "Your CARBON FOOTPRINT is the total CO₂ your daily life adds. Eating, travelling, electricity, things you buy — they all count.", emoji: "👣 💨" },
      { text: "Easy ways to shrink your footprint: walk or cycle short distances, switch off lights you do not use, eat all the food on your plate.", emoji: "🚶 💡 🍽️" },
      { text: "Small actions × millions of people = huge impact. You are not powerless.", emoji: "👥 ✊" },
    ],
  },
  "p5ex-bul1": {
    title: "Cyberbullying and Being an Upstander",
    pages: [
      { text: "Cyberbullying is bullying that happens online — mean comments, posting embarrassing photos, leaving someone out of group chats on purpose.", emoji: "📱 💔" },
      { text: "It feels worse for many kids because: it follows you home, screenshots can spread, and bullies hide behind anonymous accounts.", emoji: "🏠 → 🛏️" },
      { text: "Golden rule: do NOT reply, do NOT delete. Take a screenshot as evidence, then block the account.", emoji: "📸 🚫" },
      { text: "Tell an adult — a parent, teacher, or school counsellor. In Singapore you can also call TOUCHline: 1800-377-2252.", emoji: "📞 🧑‍🏫" },
      { text: "If you SEE a friend being cyberbullied: send them a kind private message ('I saw that, I'm sorry — you don't deserve it'). Bystanders who reach out save the day.", emoji: "💛" },
      { text: "Before YOU post: would you say it to their face? Could it hurt? If unsure, don't post.", emoji: "🤔 → ❌" },
    ],
  },
};

function buildP5ExAi1() {
  return shuffle([
    { q: "What does it mean when an AI 'hallucinates'?", a: "It confidently says something that is wrong", choices: ["It confidently says something that is wrong", "It powers off", "It learns a new language"] },
    { q: "How does a chatbot decide what word to say next?", a: "It predicts the most likely next word based on patterns in its training data", choices: ["It predicts the most likely next word based on patterns in its training data", "It looks the answer up in a fact book", "It calls a real person"] },
    { q: "If AI tells you that a famous person was born on a date you've never heard before, you should:", a: "Cross-check with a trusted source", choices: ["Cross-check with a trusted source", "Trust it because AI is fast", "Repeat it to your friends as fact"] },
    { q: "Which is TRUE about AI today?", a: "It can be wrong even when it sounds confident", choices: ["It can be wrong even when it sounds confident", "It is always right", "It can read minds"] },
    { q: "Which is the BEST use of AI for school work?", a: "As a starting point you check and edit yourself", choices: ["As a starting point you check and edit yourself", "Copy and paste its answer as your final work", "Stop using your own brain"] },
    { q: "Why does AI need lots of data to work well?", a: "It learns patterns by looking at many examples", choices: ["It learns patterns by looking at many examples", "It collects data to sell to companies", "Computers like big files"] },
    { q: "Two AI systems give different answers to the same question. This means:", a: "At least one of them is wrong — check elsewhere", choices: ["At least one of them is wrong — check elsewhere", "AI is broken forever", "Pick whichever you like more"] },
    { q: "A friend turns in an essay written entirely by AI. The biggest risk is:", a: "It may contain made-up facts and your friend will not have learned anything", choices: ["It may contain made-up facts and your friend will not have learned anything", "AI charges money per word", "The teacher will not notice"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5ExFin1() {
  return shuffle([
    { q: "What is a budget?", a: "A plan for how to spend and save your money", choices: ["A plan for how to spend and save your money", "Money you owe to someone", "A type of bank"] },
    { q: "You get $20 a week. You save $5 every week. After 8 weeks, how much have you saved?", a: "$40", choices: ["$40", "$25", "$160"] },
    { q: "You want a $50 toy. You save $10 a month. How long until you have enough?", a: "5 months", choices: ["5 months", "1 month", "10 months"] },
    { q: "Which is a sign of a SCAM message?", a: "It urgently asks for your password or bank details", choices: ["It urgently asks for your password or bank details", "It is from your school's official email", "It says 'no rush, take your time'"] },
    { q: "A real bank will ask you for your password by SMS:", a: "Never", choices: ["Never", "Once a year", "Whenever they want"] },
    { q: "An online ad says 'Click here to win $1000!' You should:", a: "Ignore or delete it — it's likely a scam", choices: ["Ignore or delete it — it's likely a scam", "Click immediately so you don't miss out", "Forward it to all your friends"] },
    { q: "Which habit best builds long-term saving?", a: "Save a small amount EVERY week, even if it's tiny", choices: ["Save a small amount EVERY week, even if it's tiny", "Wait until you have a lot, then save once", "Spend it all and hope for ang baos"] },
    { q: "'Save some, spend some, share some' is a:", a: "Simple budgeting rule", choices: ["Simple budgeting rule", "Old song", "Maths equation"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5ExThink1() {
  return shuffle([
    { q: "Which is a clue that a news headline might be FAKE?", a: "It uses ALL CAPS and shocking words like 'YOU WON'T BELIEVE'", choices: ["It uses ALL CAPS and shocking words like 'YOU WON'T BELIEVE'", "It names the reporter and the date", "It links to other trusted sources"] },
    { q: "If only ONE random website is reporting something huge, you should:", a: "Be suspicious — real big news is on many trusted sources", choices: ["Be suspicious — real big news is on many trusted sources", "Believe it because it's a scoop", "Share it before the news gets old"] },
    { q: "Why might someone create fake news?", a: "To get clicks, money, or to push their agenda", choices: ["To get clicks, money, or to push their agenda", "Because they are bored", "By accident only"] },
    { q: "What is a 'reverse image search' useful for?", a: "Checking if a photo has been used elsewhere or is from a different event", choices: ["Checking if a photo has been used elsewhere or is from a different event", "Making a photo bigger", "Translating a photo"] },
    { q: "Before you SHARE a shocking story, the BEST first step is:", a: "Check if a trusted news source is also reporting it", choices: ["Check if a trusted news source is also reporting it", "Share quickly so you're first", "Add an angry comment"] },
    { q: "A good question to ask about any news article is:", a: "Who benefits if I believe this?", choices: ["Who benefits if I believe this?", "Did I read it on my favourite app?", "Is the headline funny?"] },
    { q: "Which website is MOST likely to be a reliable news source?", a: "A long-established news organisation that names its reporters", choices: ["A long-established news organisation that names its reporters", "An anonymous blog with a flashy name", "A friend's WhatsApp story"] },
    { q: "Real news usually:", a: "States facts calmly and lists its sources", choices: ["States facts calmly and lists its sources", "Tries to make you angry or scared", "Has no date and no author"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5ExEco1() {
  return shuffle([
    { q: "What is a 'carbon footprint'?", a: "The total CO₂ released because of the things you do", choices: ["The total CO₂ released because of the things you do", "A footprint made of charcoal", "How big your shoes are"] },
    { q: "Which gas is mainly responsible for climate change?", a: "Carbon dioxide (CO₂)", choices: ["Carbon dioxide (CO₂)", "Oxygen", "Helium"] },
    { q: "Which action shrinks your carbon footprint the MOST?", a: "Walking or cycling instead of taking a car", choices: ["Walking or cycling instead of taking a car", "Leaving lights on all night", "Eating extra food and throwing some away"] },
    { q: "Why does food waste hurt the environment?", a: "Energy was used to grow, transport and cook food that ends up rotting and releasing more gases", choices: ["Energy was used to grow, transport and cook food that ends up rotting and releasing more gases", "Bins overflow", "It smells bad"] },
    { q: "Climate change is making our planet:", a: "Slowly warmer over time", choices: ["Slowly warmer over time", "Slowly cooler over time", "Stay exactly the same"] },
    { q: "Which is a TRUE statement about small everyday actions?", a: "Small actions × millions of people = big impact", choices: ["Small actions × millions of people = big impact", "Only governments can change anything", "Individual action does nothing"] },
    { q: "Which choice has the BIGGEST effect on your carbon footprint over a year?", a: "How you travel and eat regularly", choices: ["How you travel and eat regularly", "The colour of your school bag", "Whether you sing in the shower"] },
    { q: "Switching off a light when you leave the room:", a: "Saves energy and reduces CO₂", choices: ["Saves energy and reduces CO₂", "Uses more energy", "Has no effect"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5ExBul1() {
  return shuffle([
    { q: "What is cyberbullying?", a: "Bullying that happens through phones, games, or online platforms", choices: ["Bullying that happens through phones, games, or online platforms", "When a phone runs out of battery", "Slow internet"] },
    { q: "If you receive a hurtful online message, the FIRST thing to do is:", a: "Stay calm — don't reply, take a screenshot, and tell an adult", choices: ["Stay calm — don't reply, take a screenshot, and tell an adult", "Reply with something even meaner", "Delete the message and pretend it didn't happen"] },
    { q: "Why is taking a screenshot before blocking helpful?", a: "It keeps evidence to show a parent or teacher", choices: ["It keeps evidence to show a parent or teacher", "It saves phone battery", "It posts the message back online"] },
    { q: "If a classmate is being left out of every group chat on purpose, this is:", a: "A form of cyberbullying", choices: ["A form of cyberbullying", "Just bad luck", "Their own fault"] },
    { q: "Which is the BEST way to support a friend who is being cyberbullied?", a: "Send a kind private message and offer to go with them to tell an adult", choices: ["Send a kind private message and offer to go with them to tell an adult", "Tell them to ignore it forever and stop using phones", "Pile on by adding your own jokes"] },
    { q: "In Singapore, who can you call for help with bullying or distress?", a: "A trusted adult, school counsellor, or TOUCHline (1800-377-2252)", choices: ["A trusted adult, school counsellor, or TOUCHline (1800-377-2252)", "Nobody — handle it yourself", "Only the police, no one else"] },
    { q: "Before posting something about a classmate online, the kindest test is:", a: "Would I say this to their face? Could it hurt?", choices: ["Would I say this to their face? Could it hurt?", "Will this get lots of likes?", "Is it funny to me?"] },
    { q: "Anonymous accounts on the internet:", a: "Sometimes hide bullies, but adults can often still trace them", choices: ["Sometimes hide bullies, but adults can often still trace them", "Are completely untraceable", "Are always safe to trust"] },
    { q: "Which sentence is TRUE?", a: "Cyberbullying is bullying — and it is taken seriously by schools and the law", choices: ["Cyberbullying is bullying — and it is taken seriously by schools and the law", "Cyberbullying is just a joke", "Online comments don't count as real"] },
    { q: "If you make a mean comment in the heat of the moment, the right thing to do is:", a: "Apologise sincerely and delete it", choices: ["Apologise sincerely and delete it", "Wait and hope nobody noticed", "Double down so you don't look weak"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "p5ex-ai1": buildP5ExAi1,
  "p5ex-fin1": buildP5ExFin1,
  "p5ex-think1": buildP5ExThink1,
  "p5ex-eco1": buildP5ExEco1,
  "p5ex-bul1": buildP5ExBul1,
};

export const P5_EXPLORE_QUESTION_COUNTS = {
  "p5ex-ai1": 8,
  "p5ex-fin1": 8,
  "p5ex-think1": 8,
  "p5ex-eco1": 8,
  "p5ex-bul1": 10,
};

export function buildP5ExploreQuestions(moduleId) {
  return (BUILDERS[moduleId] || (() => []))();
}
