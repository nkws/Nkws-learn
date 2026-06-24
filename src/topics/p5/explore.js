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
    { q: "What does it mean when an AI 'hallucinates'?", a: "It confidently says something that is wrong", choices: ["It confidently says something that is wrong", "It powers off", "It learns a new language"], explain: "A hallucination is when AI states false information as if it were true. Because AI predicts likely-sounding words rather than checking facts, it can sound sure and still be wrong." },
    { q: "How does a chatbot decide what word to say next?", a: "It predicts the most likely next word based on patterns in its training data", choices: ["It predicts the most likely next word based on patterns in its training data", "It looks the answer up in a fact book", "It calls a real person"], explain: "A chatbot is a prediction machine. It has learned patterns from huge amounts of text and, word by word, picks the most likely next word — it is not looking facts up in a book." },
    { q: "If AI tells you that a famous person was born on a date you've never heard before, you should:", a: "Cross-check with a trusted source", choices: ["Cross-check with a trusted source", "Trust it because AI is fast", "Repeat it to your friends as fact"], explain: "AI can invent dates and details that sound real. Speed is not the same as accuracy, so verify a fact against a trusted source before believing or repeating it." },
    { q: "Which is TRUE about AI today?", a: "It can be wrong even when it sounds confident", choices: ["It can be wrong even when it sounds confident", "It is always right", "It can read minds"], explain: "Confidence is not proof. Because AI predicts words instead of knowing truth, a smooth, certain-sounding answer can still be mistaken — always keep that in mind." },
    { q: "Which is the BEST use of AI for school work?", a: "As a starting point you check and edit yourself", choices: ["As a starting point you check and edit yourself", "Copy and paste its answer as your final work", "Stop using your own brain"], explain: "AI works best as a helper, not a replacement. Use it to get started, then check and improve the work yourself — that way you catch its mistakes and actually learn." },
    { q: "Why does AI need lots of data to work well?", a: "It learns patterns by looking at many examples", choices: ["It learns patterns by looking at many examples", "It collects data to sell to companies", "Computers like big files"], explain: "AI learns by spotting patterns, and patterns only become clear after seeing many examples. More good examples means better predictions — that is why training data matters." },
    { q: "Two AI systems give different answers to the same question. This means:", a: "At least one of them is wrong — check elsewhere", choices: ["At least one of them is wrong — check elsewhere", "AI is broken forever", "Pick whichever you like more"], explain: "Two different answers cannot both be right, so at least one is mistaken. Disagreement is a signal to verify with a trusted source, not to guess which you prefer." },
    { q: "A friend turns in an essay written entirely by AI. The biggest risk is:", a: "It may contain made-up facts and your friend will not have learned anything", choices: ["It may contain made-up facts and your friend will not have learned anything", "AI charges money per word", "The teacher will not notice"], explain: "AI can include invented facts, and copying its work skips the thinking that builds skill. The real cost is wrong information plus a missed chance to learn." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5ExFin1() {
  return shuffle([
    { q: "What is a budget?", a: "A plan for how to spend and save your money", choices: ["A plan for how to spend and save your money", "Money you owe to someone", "A type of bank"], explain: "A budget is simply a plan for your money: it decides ahead of time how much comes in, how much goes out, and how much to save — so spending is a choice, not an accident." },
    { q: "You get $20 a week. You save $5 every week. After 8 weeks, how much have you saved?", a: "$40", choices: ["$40", "$25", "$160"], explain: "Regular saving adds up by repetition: the same amount each week multiplies. $5 saved × 8 weeks = $40. The $20 you receive is income, not what you save." },
    { q: "You want a $50 toy. You save $10 a month. How long until you have enough?", a: "5 months", choices: ["5 months", "1 month", "10 months"], explain: "A savings goal is total cost divided by what you save each time. $50 ÷ $10 a month = 5 months. Splitting a goal this way turns a wish into a clear plan." },
    { q: "Which is a sign of a SCAM message?", a: "It urgently asks for your password or bank details", choices: ["It urgently asks for your password or bank details", "It is from your school's official email", "It says 'no rush, take your time'"], explain: "Scams use urgency to make you act before you think, and they fish for secrets. A message rushing you for a password or bank details is a classic warning sign." },
    { q: "A real bank will ask you for your password by SMS:", a: "Never", choices: ["Never", "Once a year", "Whenever they want"], explain: "Your password is a secret only you should know, so a real bank never asks for it by SMS, email, or call. Anyone who does is trying to trick you." },
    { q: "An online ad says 'Click here to win $1000!' You should:", a: "Ignore or delete it — it's likely a scam", choices: ["Ignore or delete it — it's likely a scam", "Click immediately so you don't miss out", "Forward it to all your friends"], explain: "If an offer sounds too good to be true, it usually is. Surprise 'prizes' are bait to make you click; the safe move is to ignore or delete, not spread it." },
    { q: "Which habit best builds long-term saving?", a: "Save a small amount EVERY week, even if it's tiny", choices: ["Save a small amount EVERY week, even if it's tiny", "Wait until you have a lot, then save once", "Spend it all and hope for ang baos"], explain: "Saving grows through steady habit, not lucky windfalls. Small amounts saved regularly build up over time and are easier to keep up than one big rare deposit." },
    { q: "'Save some, spend some, share some' is a:", a: "Simple budgeting rule", choices: ["Simple budgeting rule", "Old song", "Maths equation"], explain: "This is an easy budgeting rule: it splits every dollar into three jobs — saving, spending, and sharing — so you always plan your money instead of using it all at once." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5ExThink1() {
  return shuffle([
    { q: "Which is a clue that a news headline might be FAKE?", a: "It uses ALL CAPS and shocking words like 'YOU WON'T BELIEVE'", choices: ["It uses ALL CAPS and shocking words like 'YOU WON'T BELIEVE'", "It names the reporter and the date", "It links to other trusted sources"], explain: "Fake news tries to grab your emotions so you share without thinking. ALL CAPS and shocking words are a red flag; real reporting stays calmer and names its reporter and date." },
    { q: "If only ONE random website is reporting something huge, you should:", a: "Be suspicious — real big news is on many trusted sources", choices: ["Be suspicious — real big news is on many trusted sources", "Believe it because it's a scoop", "Share it before the news gets old"], explain: "Big real events get reported by many trusted outlets at once. If only one unknown site has the story, that lack of confirmation is a reason to doubt it, not to rush and share." },
    { q: "Why might someone create fake news?", a: "To get clicks, money, or to push their agenda", choices: ["To get clicks, money, or to push their agenda", "Because they are bored", "By accident only"], explain: "Fake news usually has a motive. People make it to earn clicks and money or to push an opinion, so asking 'who benefits?' helps you see why a story might be twisted." },
    { q: "What is a 'reverse image search' useful for?", a: "Checking if a photo has been used elsewhere or is from a different event", choices: ["Checking if a photo has been used elsewhere or is from a different event", "Making a photo bigger", "Translating a photo"], explain: "A reverse image search looks up where a photo first appeared. It can reveal that a picture is old or from a different event, exposing a story that reuses images to mislead." },
    { q: "Before you SHARE a shocking story, the BEST first step is:", a: "Check if a trusted news source is also reporting it", choices: ["Check if a trusted news source is also reporting it", "Share quickly so you're first", "Add an angry comment"], explain: "Sharing spreads information fast, so the responsible move is to verify first. Checking whether a trusted source also reports it stops you from passing on something false." },
    { q: "A good question to ask about any news article is:", a: "Who benefits if I believe this?", choices: ["Who benefits if I believe this?", "Did I read it on my favourite app?", "Is the headline funny?"], explain: "Asking who benefits reveals the motive behind a story. If someone gains money, clicks, or power from your belief, that is a reason to read it more carefully and check the facts." },
    { q: "Which website is MOST likely to be a reliable news source?", a: "A long-established news organisation that names its reporters", choices: ["A long-established news organisation that names its reporters", "An anonymous blog with a flashy name", "A friend's WhatsApp story"], explain: "Reliable sources take responsibility for what they publish. A known organisation that names its reporters can be held accountable, unlike an anonymous blog or a forwarded chat message." },
    { q: "Real news usually:", a: "States facts calmly and lists its sources", choices: ["States facts calmly and lists its sources", "Tries to make you angry or scared", "Has no date and no author"], explain: "Trustworthy reporting is calm and shows its evidence — it states facts and names sources you can check. Stories built to make you angry or scared are trying to skip your thinking." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5ExEco1() {
  return shuffle([
    { q: "What is a 'carbon footprint'?", a: "The total CO₂ released because of the things you do", choices: ["The total CO₂ released because of the things you do", "A footprint made of charcoal", "How big your shoes are"], explain: "A carbon footprint measures impact, not a real footprint. It adds up all the CO₂ your daily life causes — from travelling, eating, and the things you buy and use." },
    { q: "Which gas is mainly responsible for climate change?", a: "Carbon dioxide (CO₂)", choices: ["Carbon dioxide (CO₂)", "Oxygen", "Helium"], explain: "Burning fuel releases carbon dioxide, which traps heat in the atmosphere like a blanket. That trapped heat is what slowly warms the planet, so CO₂ is the main cause." },
    { q: "Which action shrinks your carbon footprint the MOST?", a: "Walking or cycling instead of taking a car", choices: ["Walking or cycling instead of taking a car", "Leaving lights on all night", "Eating extra food and throwing some away"], explain: "The biggest savings come from cutting fuel burned. Walking or cycling uses no fuel at all, while a car burns it and adds CO₂ — so swapping the car saves the most." },
    { q: "Why does food waste hurt the environment?", a: "Energy was used to grow, transport and cook food that ends up rotting and releasing more gases", choices: ["Energy was used to grow, transport and cook food that ends up rotting and releasing more gases", "Bins overflow", "It smells bad"], explain: "Wasted food wastes all the energy spent growing, moving, and cooking it, and then rotting food releases more gases. Finishing your plate keeps that whole effort from being thrown away." },
    { q: "Climate change is making our planet:", a: "Slowly warmer over time", choices: ["Slowly warmer over time", "Slowly cooler over time", "Stay exactly the same"], explain: "Extra CO₂ traps more heat than escapes, so the planet's average temperature slowly rises over time. That gradual warming is exactly what 'climate change' describes." },
    { q: "Which is a TRUE statement about small everyday actions?", a: "Small actions × millions of people = big impact", choices: ["Small actions × millions of people = big impact", "Only governments can change anything", "Individual action does nothing"], explain: "A small action looks tiny alone, but multiplied across millions of people it adds up to a huge total. That is why your everyday choices genuinely matter." },
    { q: "Which choice has the BIGGEST effect on your carbon footprint over a year?", a: "How you travel and eat regularly", choices: ["How you travel and eat regularly", "The colour of your school bag", "Whether you sing in the shower"], explain: "What you do every day, repeated over a year, adds up far more than one-off or trivial things. Regular habits like how you travel and eat shape your footprint most." },
    { q: "Switching off a light when you leave the room:", a: "Saves energy and reduces CO₂", choices: ["Saves energy and reduces CO₂", "Uses more energy", "Has no effect"], explain: "Most electricity still comes from burning fuel, so using less of it means less CO₂. Turning off a light you do not need cuts wasted energy and shrinks your footprint." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5ExBul1() {
  return shuffle([
    { q: "What is cyberbullying?", a: "Bullying that happens through phones, games, or online platforms", choices: ["Bullying that happens through phones, games, or online platforms", "When a phone runs out of battery", "Slow internet"], explain: "Cyberbullying is ordinary bullying moved online — hurting someone on purpose through phones, games, or apps. The screen does not make it less real or less harmful." },
    { q: "If you receive a hurtful online message, the FIRST thing to do is:", a: "Stay calm — don't reply, take a screenshot, and tell an adult", choices: ["Stay calm — don't reply, take a screenshot, and tell an adult", "Reply with something even meaner", "Delete the message and pretend it didn't happen"], explain: "Replying often feeds a bully and deleting destroys proof. Staying calm, saving evidence, and telling an adult puts grown-ups on your side and keeps you in control." },
    { q: "Why is taking a screenshot before blocking helpful?", a: "It keeps evidence to show a parent or teacher", choices: ["It keeps evidence to show a parent or teacher", "It saves phone battery", "It posts the message back online"], explain: "Once you block someone you may lose the message, so a screenshot preserves evidence first. Proof helps a parent, teacher, or counsellor understand and act on what happened." },
    { q: "If a classmate is being left out of every group chat on purpose, this is:", a: "A form of cyberbullying", choices: ["A form of cyberbullying", "Just bad luck", "Their own fault"], explain: "Bullying is not only mean words — deliberately excluding someone to hurt them counts too. Leaving a classmate out of every chat on purpose is a form of cyberbullying." },
    { q: "Which is the BEST way to support a friend who is being cyberbullied?", a: "Send a kind private message and offer to go with them to tell an adult", choices: ["Send a kind private message and offer to go with them to tell an adult", "Tell them to ignore it forever and stop using phones", "Pile on by adding your own jokes"], explain: "An upstander helps instead of staying silent. A kind private message shows the person they are not alone, and going with them to an adult gets the problem properly handled." },
    { q: "In Singapore, who can you call for help with bullying or distress?", a: "A trusted adult, school counsellor, or TOUCHline (1800-377-2252)", choices: ["A trusted adult, school counsellor, or TOUCHline (1800-377-2252)", "Nobody — handle it yourself", "Only the police, no one else"], explain: "You never have to face bullying alone. Trusted adults, a school counsellor, or a helpline like TOUCHline (1800-377-2252) exist precisely to listen and help you through it." },
    { q: "Before posting something about a classmate online, the kindest test is:", a: "Would I say this to their face? Could it hurt?", choices: ["Would I say this to their face? Could it hurt?", "Will this get lots of likes?", "Is it funny to me?"], explain: "Empathy is the test that prevents harm. Asking whether you would say it to their face, and whether it could hurt, checks the post from the other person's point of view first." },
    { q: "Anonymous accounts on the internet:", a: "Sometimes hide bullies, but adults can often still trace them", choices: ["Sometimes hide bullies, but adults can often still trace them", "Are completely untraceable", "Are always safe to trust"], explain: "Hiding behind a fake name feels safe to a bully, but online actions leave traces. Schools, platforms, and police can often track anonymous accounts, so they are not truly invisible." },
    { q: "Which sentence is TRUE?", a: "Cyberbullying is bullying — and it is taken seriously by schools and the law", choices: ["Cyberbullying is bullying — and it is taken seriously by schools and the law", "Cyberbullying is just a joke", "Online comments don't count as real"], explain: "Calling cruelty 'just a joke' does not erase the harm. Cyberbullying is real bullying with real effects, and schools and the law treat it seriously." },
    { q: "If you make a mean comment in the heat of the moment, the right thing to do is:", a: "Apologise sincerely and delete it", choices: ["Apologise sincerely and delete it", "Wait and hope nobody noticed", "Double down so you don't look weak"], explain: "Everyone slips sometimes; what matters is repairing it. A sincere apology and deleting the comment takes responsibility and limits the hurt, unlike hiding or making it worse." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
