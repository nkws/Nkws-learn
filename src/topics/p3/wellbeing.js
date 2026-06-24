import { shuffle } from "../../utils/helpers";

export const P3_WELLBEING_INTRO = {
  "p3wb-bul1": {
    title: "Bullying, Bystanders, and Upstanders",
    pages: [
      { text: "Bullying = on purpose, repeated, and there's a power imbalance (older, stronger, or more popular targeting someone who can't easily push back).", emoji: "⚖️ ❌" },
      { text: "Forms: physical (hitting), verbal (mean words), social (excluding, spreading rumours), and online (cyberbullying).", emoji: "👊 🗣️ 👥 📱" },
      { text: "If you are bullied: keep evidence (a screenshot, a note of when and where), and tell at least ONE adult — keep telling until someone helps.", emoji: "📝 🧑‍🏫" },
      { text: "A BYSTANDER sees and does nothing. An UPSTANDER does something — even small. A kind word in private. Telling an adult. Sitting next to the person at lunch.", emoji: "🦸" },
      { text: "Why upstanders matter: research shows that ONE supportive friend can completely change how a bullied child copes.", emoji: "💛 1️⃣" },
      { text: "Bullies often have problems too. The goal is not revenge — it is making the bullying STOP and getting help for everyone involved.", emoji: "🛟" },
    ],
  },
  "p3wb-feel1": {
    title: "Mind-Body Connection",
    pages: [
      { text: "Your mind and body talk to each other. Worry can give you a tummy ache. Tiredness can make you grumpy.", emoji: "🧠 ↔️ 💪" },
      { text: "When you feel anxious, your heart races and your breathing speeds up. That's normal — but not comfortable.", emoji: "💓" },
      { text: "Try BOX BREATHING: breathe in for 4 seconds, hold 4, out 4, hold 4. Repeat 4 times. It calms the body.", emoji: "📦 🌬️" },
      { text: "Sleep matters. P3 students need 9–11 hours. Without enough sleep, focus, mood, and learning all suffer.", emoji: "😴" },
      { text: "Movement helps mood. Even 10 minutes of running, dancing, or skipping releases happy chemicals in the brain.", emoji: "🏃‍♂️" },
      { text: "If a worry is too big to handle, it is BRAVE to talk to an adult — not weak.", emoji: "💪" },
    ],
  },
  "p3wb-money1": {
    title: "Smart Saving and Smart Spending",
    pages: [
      { text: "Earning, spending, saving, sharing — these are the four big things people do with money.", emoji: "💵" },
      { text: "Set a SAVINGS GOAL: 'I want to buy a $24 game in 6 weeks'. That means $4 a week. Now you have a plan.", emoji: "🎯" },
      { text: "Watch out for IMPULSE SPENDING — buying something just because it's there. Wait 24 hours. If you still want it, it's a real want.", emoji: "⏳" },
      { text: "Compare prices. The same drink can cost $1 at one shop and $2 at another. Looking around saves money.", emoji: "🔍" },
      { text: "BEWARE of online tricks: free game gems often want your bank info, or push you to spend more later. If it asks for a parent's password, STOP.", emoji: "⚠️" },
      { text: "A small saved amount, kept regularly, beats a big amount you keep spending. Small + steady wins.", emoji: "🐢 🥇" },
    ],
  },
  "p3wb-eco1": {
    title: "Caring for Singapore's Earth",
    pages: [
      { text: "Singapore is small but uses a LOT of resources. Most of our food, water, and energy comes from overseas.", emoji: "🌍 ➡️ 🇸🇬" },
      { text: "Saving water at home matters more here than in many countries — we have very little freshwater of our own.", emoji: "🚰 💧" },
      { text: "Singapore's NEWater system recycles used water into clean water again — a great example of solving a real problem with science.", emoji: "💦 → 💧" },
      { text: "Climate change brings hotter days, heavier rain, and rising seas. As an island, Singapore is paying close attention.", emoji: "🌡️ 🌊" },
      { text: "Personal actions: walk or take the bus, use less aircon, eat less meat, finish your food. Small but real.", emoji: "👣" },
      { text: "Big actions need teamwork: schools, companies, and government working together. Your voice as a future voter matters.", emoji: "🤝" },
    ],
  },
  "p3wb-think1": {
    title: "Thinking Like a Detective",
    pages: [
      { text: "A detective doesn't believe everything. They ask: 'What evidence is there? Could the witness be wrong?'", emoji: "🕵️" },
      { text: "FACT vs OPINION: a fact can be checked. An opinion is what someone thinks. Both are useful — but mixing them up is dangerous.", emoji: "✅ 💭" },
      { text: "When you read or watch something online, ask three questions: WHO made it? WHY did they make it? IS there evidence?", emoji: "❓❓❓" },
      { text: "Adverts often dress opinions as facts. 'BEST drink in Singapore' is opinion. 'Has 30g of sugar' is fact.", emoji: "📢" },
      { text: "Watch for SCAMS. Real banks and schools never ask for passwords by SMS or random links.", emoji: "🎣" },
      { text: "When in doubt, slow down and check with a trusted adult. Smart thinkers ask for help.", emoji: "🧠 🤝" },
    ],
  },
};

function buildP3WbBul1() {
  return shuffle([
    { q: "What three things together make something BULLYING?", a: "On purpose, repeated, and a power imbalance", choices: ["On purpose, repeated, and a power imbalance", "Loud, fast, and on a Tuesday", "Funny, harmless, and quick"], explain: "Bullying is more than being unkind once. It is done on purpose, again and again, by someone with more power. All three together make it bullying." },
    { q: "Which is an example of SOCIAL bullying?", a: "Spreading rumours to make others avoid a classmate", choices: ["Spreading rumours to make others avoid a classmate", "A friendly tease that everyone laughs at, including the target", "Disagreeing in a debate"], explain: "Social bullying hurts someone by turning others against them or leaving them out. Spreading rumours to make people avoid a classmate does exactly that." },
    { q: "Cyberbullying is:", a: "Bullying done through phones, games, or apps", choices: ["Bullying done through phones, games, or apps", "When the wifi is slow", "A type of computer virus"], explain: "Cyberbullying is bullying that happens online, through phones, games or apps. The mean behaviour is the same, just using a screen." },
    { q: "What is the difference between a BYSTANDER and an UPSTANDER?", a: "A bystander does nothing; an upstander does something to help", choices: ["A bystander does nothing; an upstander does something to help", "They are exactly the same", "An upstander joins the bully"], explain: "A bystander sees bullying and stays quiet. An upstander does something kind to help, even a small thing. Choosing to act is the kind, brave choice." },
    { q: "If the first adult you tell does not help, you should:", a: "Tell another trusted adult — keep telling until someone helps", choices: ["Tell another trusted adult — keep telling until someone helps", "Give up and stay quiet", "Take revenge yourself"], explain: "You deserve to be safe, so you never give up after one try. Keep telling trusted adults until someone helps make the bullying stop." },
    { q: "A friend is being bullied online. The KINDEST upstander move is:", a: "Send them a kind private message and tell a trusted adult", choices: ["Send them a kind private message and tell a trusted adult", "Comment publicly to argue with the bully", "Pretend you saw nothing"], explain: "Kind support plus help from an adult is safest. A private message comforts your friend, and telling an adult helps stop the bullying without starting a public fight." },
    { q: "Whose fault is bullying?", a: "The bully's — never the victim's", choices: ["The bully's — never the victim's", "The victim's, for being different", "The teacher's"], explain: "No one ever deserves to be bullied for who they are. The person who chooses to bully is the one responsible, never the person being hurt." },
    { q: "Keeping a screenshot of a hurtful message is useful because:", a: "It is evidence to show an adult", choices: ["It is evidence to show an adult", "It looks pretty in your gallery", "It deletes the original"], explain: "A screenshot saves proof of what happened. Showing it to a trusted adult helps them understand and step in to help you." },
    { q: "Saying 'I'm just joking!' after hurting someone repeatedly is:", a: "Still bullying — the impact matters more than the excuse", choices: ["Still bullying — the impact matters more than the excuse", "Always okay because it's a joke", "Never bullying"], explain: "If words keep hurting someone, calling it a joke does not make it kind. What matters is how the other person feels, so it is still bullying." },
    { q: "Research shows that having ONE supportive friend during bullying:", a: "Can change everything for how a bullied child copes", choices: ["Can change everything for how a bullied child copes", "Makes no difference at all", "Makes things worse"], explain: "Even one kind friend helps a bullied child feel less alone and much stronger. That is why being a good friend matters so much." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP3WbFeel1() {
  return shuffle([
    { q: "What is the MIND-BODY connection?", a: "Mind and body talk to each other — worry can give you a tummy ache", choices: ["Mind and body talk to each other — worry can give you a tummy ache", "Only adults have a mind-body connection", "The mind and body never affect each other"], explain: "Your thoughts and your body are linked. When your mind feels worried, your body can feel it too, like a tummy ache. That is the mind-body connection." },
    { q: "How long should a P3 student usually sleep at night?", a: "9 to 11 hours", choices: ["9 to 11 hours", "4 to 5 hours", "15 hours"], explain: "Children your age need about 9 to 11 hours of sleep so your body and brain can rest and grow. Enough sleep keeps you healthy and ready to learn." },
    { q: "What happens to focus and mood without enough sleep?", a: "Both get worse", choices: ["Both get worse", "Both get better", "Nothing changes"], explain: "Sleep recharges your brain. Without enough, it is harder to pay attention and easier to feel grumpy, so both focus and mood get worse." },
    { q: "BOX BREATHING is:", a: "In for 4, hold 4, out 4, hold 4 — repeat to calm down", choices: ["In for 4, hold 4, out 4, hold 4 — repeat to calm down", "Breathing through a box", "Holding your breath until you faint"], explain: "Slow, steady breathing tells your body it is safe to calm down. Breathe in for 4, hold 4, out 4, hold 4, and repeat to feel calmer." },
    { q: "Movement helps mood because:", a: "It releases happy chemicals in the brain", choices: ["It releases happy chemicals in the brain", "It uses up your battery", "It makes you angrier"], explain: "Moving your body, like running or dancing, makes your brain release happy chemicals. That is why you often feel better after being active." },
    { q: "Talking to an adult about a big worry is:", a: "Brave and smart", choices: ["Brave and smart", "Weak", "Forbidden"], explain: "Sharing a big worry takes courage and helps you get support. Asking a trusted adult for help is a brave and smart thing to do, never weak." },
    { q: "An anxious feeling often shows up as:", a: "Faster heart and faster breathing", choices: ["Faster heart and faster breathing", "Falling asleep instantly", "Nothing physical at all"], explain: "Because mind and body are linked, feeling anxious can make your heart race and your breathing speed up. That is your body reacting to worry." },
    { q: "Naming a feeling ('I feel jealous because...') usually:", a: "Makes the feeling easier to handle", choices: ["Makes the feeling easier to handle", "Makes the feeling stronger forever", "Has zero effect"], explain: "When you put a feeling into words, it becomes less scary and easier to manage. Naming what you feel helps you handle it calmly." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP3WbMoney1() {
  return shuffle([
    { q: "What is a SAVINGS GOAL?", a: "An amount of money you plan to save by a certain date", choices: ["An amount of money you plan to save by a certain date", "A wish without a plan", "A reward for doing chores"], explain: "A savings goal turns a wish into a plan. You decide how much to save and by when, so you know exactly what to put aside each week." },
    { q: "You want a $30 toy in 6 weeks. How much per week should you save?", a: "$5", choices: ["$5", "$30", "$1"], explain: "To reach a goal, share the total across the weeks you have. Split $30 over 6 weeks: 30 divided by 6 is $5 each week." },
    { q: "What is IMPULSE SPENDING?", a: "Buying something on a sudden urge, without thinking", choices: ["Buying something on a sudden urge, without thinking", "Saving for years before buying", "Comparing prices first"], explain: "Impulse spending is grabbing something on a sudden urge before you think. It often means buying things you do not really need or want for long." },
    { q: "A good rule against impulse spending is:", a: "Wait 24 hours — if you still want it, it's a real want", choices: ["Wait 24 hours — if you still want it, it's a real want", "Always buy it within one minute", "Never spend on anything ever"], explain: "Waiting gives the sudden urge time to fade. If you still want it a day later, it is a real want, not just an impulse. Waiting protects your money." },
    { q: "Why is COMPARING PRICES smart?", a: "The same item can cost very different amounts at different shops", choices: ["The same item can cost very different amounts at different shops", "All shops charge the same", "It uses up time you don't have"], explain: "Different shops can charge different prices for the very same thing. Looking around first means you pay less and keep more of your money." },
    { q: "An online game offers 'free gems' but asks for a parent's password. You should:", a: "Stop and tell a parent — that is a scam pattern", choices: ["Stop and tell a parent — that is a scam pattern", "Type in the password yourself", "Ask a friend for their parent's password"], explain: "Something free should never need a password. Asking for one is a trick to take money or information, so the safe move is to stop and tell a parent." },
    { q: "Saving $2 every week for a year gives you:", a: "$104", choices: ["$104", "$24", "$365"], explain: "Small savings add up over time. A year has 52 weeks, so $2 each week is 2 times 52, which equals $104." },
    { q: "Which money habit beats most others over time?", a: "Small amounts saved regularly", choices: ["Small amounts saved regularly", "Big bursts followed by big spending", "Hiding money under the bed and forgetting it"], explain: "Saving a little bit again and again slowly builds up to a lot. Steady, regular saving beats big bursts that you quickly spend away." },
    { q: "If a sale says 'TODAY ONLY!', a smart shopper:", a: "Pauses and asks 'do I really need this, or am I being rushed?'", choices: ["Pauses and asks 'do I really need this, or am I being rushed?'", "Buys it within seconds", "Buys two of them"], explain: "Words like 'today only' are meant to rush you into buying. A smart shopper slows down and asks if they truly need it before spending." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP3WbEco1() {
  return shuffle([
    { q: "Most of Singapore's food and energy comes from:", a: "Overseas", choices: ["Overseas", "Inside Singapore only", "The moon"], explain: "Singapore is small with little land, so most of its food and energy is brought in from other countries overseas. That makes using them wisely important." },
    { q: "What is NEWater?", a: "Used water that is cleaned and recycled into new clean water", choices: ["Used water that is cleaned and recycled into new clean water", "Brand new bottled water", "Water from a different country"], explain: "NEWater is used water that is cleaned very well and recycled into clean water again. It is a smart way to make the most of our limited water." },
    { q: "Why does saving water matter MORE in Singapore than many places?", a: "We have very little freshwater of our own", choices: ["We have very little freshwater of our own", "Water is free here", "We don't actually need water"], explain: "Singapore has very little freshwater of its own, so every drop counts. Saving water at home helps make sure there is enough for everyone." },
    { q: "Climate change in Singapore is bringing:", a: "Hotter days, heavier rain, and rising seas", choices: ["Hotter days, heavier rain, and rising seas", "Snow in December", "Permanently dry weather"], explain: "A warming world makes Singapore's days hotter, its rain heavier, and the sea rise higher. As an island, that is why Singapore watches it closely." },
    { q: "Which personal action lowers a carbon footprint?", a: "Walking or taking public transport instead of a car", choices: ["Walking or taking public transport instead of a car", "Leaving aircon on at 16°C all night", "Throwing away half your meal each day"], explain: "Cars burn fuel that warms the planet. Walking or taking the bus and train instead uses far less, so it lowers your carbon footprint." },
    { q: "Solving climate change needs:", a: "Both personal action AND big team action by schools, companies, and government", choices: ["Both personal action AND big team action by schools, companies, and government", "Only big businesses", "Only individuals on their own"], explain: "Small personal choices help, but big problems also need teamwork. Solving climate change takes both people and big groups like schools and government working together." },
    { q: "Eating LESS meat usually:", a: "Lowers your carbon footprint", choices: ["Lowers your carbon footprint", "Makes the carbon footprint bigger", "Has no effect"], explain: "Producing meat uses a lot of land, water and energy. Eating a bit less meat uses fewer of these, so it lowers your carbon footprint." },
    { q: "Which is a TRUE statement?", a: "Singapore takes climate change seriously and is investing in flood and heat defences", choices: ["Singapore takes climate change seriously and is investing in flood and heat defences", "Climate change is impossible to prepare for", "Singapore has nothing to do with climate change"], explain: "Climate change can be prepared for, and Singapore is doing it by building defences against floods and heat. The other choices are not true." },
    { q: "Why does aircon use a lot of electricity?", a: "It runs powerful motors all the time it is on", choices: ["It runs powerful motors all the time it is on", "It runs on sunlight only", "It saves electricity actually"], explain: "Aircon keeps strong motors running the whole time it is on to cool the air. Those motors use a lot of electricity, so it helps to use aircon less." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP3WbThink1() {
  return shuffle([
    { q: "A FACT is something that:", a: "Can be checked and proven true or false", choices: ["Can be checked and proven true or false", "Someone strongly feels", "Sounds nice"], explain: "A fact is something you can check to see if it is true, like a measurement or a date. Because it can be proven, everyone can agree on it." },
    { q: "An OPINION is:", a: "What someone thinks or believes", choices: ["What someone thinks or believes", "Something you can prove with a measurement", "Always true"], explain: "An opinion is what a person thinks or feels, like a favourite colour. It cannot be proven true or false, so different people can have different ones." },
    { q: "'BEST drink in Singapore!' on a label is mostly:", a: "An opinion designed to sell to you", choices: ["An opinion designed to sell to you", "A scientific fact", "A government rule"], explain: "The word 'best' is just what the seller thinks, not something you can prove. It is an opinion used to make you want to buy the drink." },
    { q: "Which three questions help you check something online?", a: "WHO made it? WHY? Is there evidence?", choices: ["WHO made it? WHY? Is there evidence?", "What colour? How big? How loud?", "Can I screenshot it?"], explain: "Smart thinkers ask who made it, why they made it, and whether there is real evidence. These questions help you spot whether something can be trusted." },
    { q: "A real bank or school will ask for your password by:", a: "Never — they don't ask for passwords by SMS or random link", choices: ["Never — they don't ask for passwords by SMS or random link", "SMS only", "Email three times a day"], explain: "Real banks and schools never ask for your password by text or a strange link. So if a message does, it is a scam, and you should not reply." },
    { q: "If a video says 'doctors hate this one trick!', it is most likely:", a: "An advert dressed up as news", choices: ["An advert dressed up as news", "A real news story", "A school assignment"], explain: "Exciting lines like 'doctors hate this' are made to grab attention and sell something. It is really an advert pretending to be news, not a true story." },
    { q: "If you are not sure something is true, the smart move is:", a: "Slow down and check with a trusted adult", choices: ["Slow down and check with a trusted adult", "Share it with everyone fast", "Just believe it"], explain: "When you are unsure, it is safest to pause instead of believing or sharing right away. Checking with a trusted adult helps you find out the truth." },
    { q: "Detective thinking means:", a: "Asking what the evidence is and whether the source is reliable", choices: ["Asking what the evidence is and whether the source is reliable", "Wearing a hat and a coat", "Believing the first thing you read"], explain: "Like a detective, you look for evidence and ask if the source can be trusted before believing something. That careful checking is detective thinking." },
    { q: "Mixing facts and opinions can be dangerous because:", a: "People may believe an opinion is a proven fact", choices: ["People may believe an opinion is a proven fact", "It uses up too much paper", "It is impossible to do"], explain: "When opinions are dressed up to look like facts, people may believe them without checking. That is why it helps to tell the two apart." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "p3wb-bul1": buildP3WbBul1,
  "p3wb-feel1": buildP3WbFeel1,
  "p3wb-money1": buildP3WbMoney1,
  "p3wb-eco1": buildP3WbEco1,
  "p3wb-think1": buildP3WbThink1,
};

export const P3_WELLBEING_QUESTION_COUNTS = {
  "p3wb-bul1": 10,
  "p3wb-feel1": 8,
  "p3wb-money1": 9,
  "p3wb-eco1": 9,
  "p3wb-think1": 9,
};

export function buildP3WellbeingQuestions(moduleId) {
  return (BUILDERS[moduleId] || (() => []))();
}
