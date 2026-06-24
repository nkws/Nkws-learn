import { shuffle } from "../../utils/helpers";

export const P6_EXPLORE_INTRO = {
  "p6ex-ai1": {
    title: "Deepfakes, Bias, and Safe AI Use",
    pages: [
      { text: "AI is now powerful enough to make fake videos that show real people saying things they never said. These are called DEEPFAKES.", emoji: "🎥 ❌" },
      { text: "Clues a video might be fake: weird blinking, mouth doesn't quite match the words, lighting on the face is off, voice sounds slightly robotic.", emoji: "👀" },
      { text: "AI also has BIAS. If it was trained mostly on data from one group of people, it can give worse answers about other groups. Bias is a real problem, not a glitch.", emoji: "⚖️" },
      { text: "Privacy: anything you type into a free AI may be used to train future versions. Don't paste passwords, your home address, or your friends' personal info.", emoji: "🔒" },
      { text: "Use AI as a thinking partner, not a thinking replacement. The skills you build by struggling through hard problems are real. Skipping them shortchanges YOUR brain.", emoji: "🧠 💪" },
      { text: "Singapore has a Personal Data Protection Act and the Cyber Security Agency. There are real rules for how AI and data should be used.", emoji: "🇸🇬 🛡️" },
    ],
  },
  "p6ex-fin1": {
    title: "Simple Interest, GST, and Value-for-Money",
    pages: [
      { text: "When money is in a savings account, the bank pays you a little extra called INTEREST. The longer it stays, the more you earn.", emoji: "💰 ➕" },
      { text: "Simple interest formula: Interest = Principal × Rate × Time. $100 at 2% for 3 years = $100 × 0.02 × 3 = $6.", emoji: "🧮" },
      { text: "GST in Singapore is currently 9%. A $100 item costs $109 at the till. Always check whether the price tag includes GST.", emoji: "🧾" },
      { text: "VALUE-FOR-MONEY isn't just about the cheapest. A $20 bag that breaks in a month is worse than a $30 bag that lasts 3 years.", emoji: "📐" },
      { text: "Compare cost per use, not just sticker price. Cost per use = total cost ÷ how many times you'll use it.", emoji: "÷" },
      { text: "BNPL ('Buy Now Pay Later') is still spending money you don't have yet. Free is rarely free.", emoji: "⚠️" },
    ],
  },
  "p6ex-think1": {
    title: "Logical Fallacies and Cognitive Bias",
    pages: [
      { text: "A LOGICAL FALLACY is a mistake in reasoning that LOOKS convincing but doesn't actually prove anything.", emoji: "🚫 🧠" },
      { text: "STRAW MAN: pretending the other person said something silly so it's easy to attack. ('You think we should ban cars?' — when they only said reduce traffic).", emoji: "🌾" },
      { text: "AD HOMINEM: attacking the person instead of their argument. ('You're just a kid, you don't know anything').", emoji: "👤 ❌" },
      { text: "BANDWAGON: 'everyone is doing it, so it must be right'. Lots of people can be wrong together.", emoji: "🚌" },
      { text: "CONFIRMATION BIAS: only paying attention to information that agrees with what you already believe. Try to look for the OPPOSITE view too.", emoji: "🔍" },
      { text: "Spotting these doesn't make you 'win arguments' — it makes you a clearer thinker, even when arguing with yourself.", emoji: "💭" },
    ],
  },
  "p6ex-eco1": {
    title: "Biodiversity and Climate Action",
    pages: [
      { text: "BIODIVERSITY = the variety of living things in an area. Healthy ecosystems need many different species working together.", emoji: "🐢 🌳 🐝" },
      { text: "When one species disappears, others can collapse too. Bees pollinate plants → fewer bees means fewer fruits and vegetables.", emoji: "🐝 → 🍎" },
      { text: "Singapore has lost most of its original rainforest, but conservation areas like Bukit Timah and Sungei Buloh protect remaining biodiversity.", emoji: "🌳 🇸🇬" },
      { text: "Climate change adds stress: hotter, more extreme weather, rising sea levels. Singapore is investing heavily in climate adaptation.", emoji: "🌡️ 🌊" },
      { text: "Individual actions matter, but BIG impact comes from collective and policy action: voting, supporting NGOs, choosing companies that act responsibly.", emoji: "🤝" },
      { text: "Hope is not naive. Ozone-layer recovery, falling solar costs, returning species — humans CAN fix things when we choose to.", emoji: "☀️ 💚" },
    ],
  },
  "p6ex-bul1": {
    title: "Friendships, Peer Pressure, and Knowing When to Get Help",
    pages: [
      { text: "Healthy friendships make you feel SAFE, RESPECTED, and FREE TO BE YOURSELF. Unhealthy ones leave you feeling small or anxious most of the time.", emoji: "💛 vs 💔" },
      { text: "PEER PRESSURE is when friends push you to do things you don't want to do — skip homework, ditch class, share something nasty about a classmate.", emoji: "👥 ➡️ ❓" },
      { text: "A trick that works: 'Nah, my parents would kill me' — even if it isn't strictly true, it lets you say no without losing face.", emoji: "🛡️" },
      { text: "Real friends respect a 'no'. If saying no costs you a friend, that friend was costing you something bigger.", emoji: "✋" },
      { text: "Watch for warning signs in YOURSELF: avoiding school, can't sleep, feeling worthless, hopeless thoughts. These are signals to GET HELP, not weaknesses.", emoji: "🚩" },
      { text: "Help in Singapore: school counsellor, parent, trusted teacher, TOUCHline (1800-377-2252), Samaritans of Singapore (1-767), Tinkle Friend (1800-274-4788, for kids 7-12).", emoji: "📞" },
      { text: "Standing up for someone being bullied — even with a small kind action — can change their week. Small acts of courage add up to a culture.", emoji: "🦸 ✨" },
    ],
  },
};

function buildP6ExAi1() {
  return shuffle([
    { q: "What is a 'deepfake'?", a: "A fake video or audio of a real person made by AI", choices: ["A fake video or audio of a real person made by AI", "A very deep swimming pool", "A type of computer virus"], explain: "A deepfake uses AI to stitch a real person's face or voice onto things they never did or said. The danger is that it looks genuine, so it can spread lies that seem trustworthy." },
    { q: "Which is a clue that a video might be a deepfake?", a: "Strange blinking or mouth movements that don't match the words", choices: ["Strange blinking or mouth movements that don't match the words", "The video is in colour", "It has subtitles"], explain: "AI still struggles to fake tiny natural details. Mismatched lips, odd blinking, or strange lighting are seams in the fake. Colour and subtitles are normal in any video, so they prove nothing." },
    { q: "What does 'AI bias' mean?", a: "An AI gives unfair or worse answers for some groups because of skewed training data", choices: ["An AI gives unfair or worse answers for some groups because of skewed training data", "AI prefers one programming language", "AI runs slower in the morning"], explain: "AI learns patterns from its training data. If that data over-represents one group, the AI works better for them and worse for others. Bias comes from the data, not a random glitch." },
    { q: "You should NEVER paste which of these into a free AI chatbot?", a: "Your password or home address", choices: ["Your password or home address", "A maths question from a textbook", "A sample paragraph for editing"], explain: "Anything you type may be stored or used to train the model, so treat it as not private. Passwords and addresses can be used to harm you; a textbook question reveals nothing personal." },
    { q: "Which is the BEST way to use AI for learning?", a: "As a thinking partner — try the problem yourself first, then check with AI", choices: ["As a thinking partner — try the problem yourself first, then check with AI", "Skip the thinking and copy the answer", "Avoid AI entirely forever"], explain: "Your brain grows by struggling with a problem first. Used as a partner, AI checks and stretches that thinking; used as a shortcut, it skips the very effort that builds the skill." },
    { q: "If your AI essay sounds confident but cites a book that doesn't exist, that is a:", a: "Hallucination", choices: ["Hallucination", "Feature", "Bug-free response"], explain: "A hallucination is when AI invents something false but states it confidently. The model predicts likely-sounding text, not verified truth, so it can fabricate sources. Always check facts yourself." },
    { q: "Why does cross-checking AI answers matter MORE for high-stakes topics like medicine or law?", a: "An AI mistake there can cause real harm to people", choices: ["An AI mistake there can cause real harm to people", "AI charges more for medical questions", "Doctors are not allowed to use AI"], explain: "The cost of a wrong answer is what makes the difference. A mistake about a game wastes a minute; a mistake about medicine or law can hurt someone, so the checking has to be stricter." },
    { q: "Singapore's PDPA (Personal Data Protection Act) means:", a: "Companies have rules about how they collect and use your personal data", choices: ["Companies have rules about how they collect and use your personal data", "AI is banned in Singapore", "Everything online is private by default"], explain: "The PDPA is a law that holds organisations responsible for handling your data fairly and with consent. It sets rules on companies; it does not ban AI or make everything automatically private." },
    { q: "An AI image generator was trained mostly on photos of one type of food. It will probably:", a: "Be worse at drawing other types of food", choices: ["Be worse at drawing other types of food", "Improve at drawing every type of food", "Refuse to draw food"], explain: "An AI can only get good at what it has seen a lot of. Lopsided training data means strong results for the common case and weak results for the rare ones — the same idea as AI bias." },
    { q: "Using AI to write a school essay you submit as your own work is mainly a problem because:", a: "You don't learn the skill, and you may submit hallucinated facts as truth", choices: ["You don't learn the skill, and you may submit hallucinated facts as truth", "AI takes too long", "Your teacher cannot read AI text"], explain: "Two harms stack up: you skip the practice that makes you a better writer, and AI may slip in invented facts you then pass off as true. The point of the essay is your own learning." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6ExFin1() {
  return shuffle([
    { q: "You put $200 in a savings account at 3% simple interest per year. After 2 years, how much interest have you earned?", a: "$12", choices: ["$12", "$6", "$60"], explain: "Simple interest = Principal × Rate × Time. Each year earns 3% of $200 = $6, and time is what multiplies it: $200 × 0.03 × 2 = $12. The $6 trap forgets to count both years." },
    { q: "Singapore's GST is 9%. A meal costs $50 before GST. The total bill is:", a: "$54.50", choices: ["$54.50", "$59", "$50.90"], explain: "GST is a tax added on top of the price. Find 9% of $50 = $4.50, then add it back: $50 + $4.50 = $54.50. Watch the decimal — 9% of $50 is $4.50, not $9 or 90 cents." },
    { q: "A $30 water bottle that lasts 3 years vs a $5 water bottle that lasts 1 month — which has the LOWER cost per month?", a: "The $30 bottle ($30 ÷ 36 months ≈ $0.83/month vs $5/month)", choices: ["The $30 bottle ($30 ÷ 36 months ≈ $0.83/month vs $5/month)", "The $5 bottle, because it's cheaper", "They cost the same"], explain: "Cost per use = total cost ÷ how long it lasts. $30 over 36 months is about $0.83 a month, far less than $5 a month. The cheaper sticker price can be the dearer choice over time." },
    { q: "What does 'value for money' really mean?", a: "Getting the most usefulness per dollar spent", choices: ["Getting the most usefulness per dollar spent", "Buying the cheapest option", "Buying the most expensive option"], explain: "Value for money weighs what you get against what you pay, not the price alone. The cheapest can be poor value if it breaks fast; the dearest isn't automatically best either." },
    { q: "BNPL ('Buy Now Pay Later') is risky mainly because:", a: "It encourages spending money you don't yet have, and missed payments add fees", choices: ["It encourages spending money you don't yet have, and missed payments add fees", "It's illegal in Singapore", "Stores never accept it"], explain: "BNPL splits a payment into later instalments, so it feels free now — but it is still money you haven't earned yet, and missing a payment adds fees. Delaying a cost doesn't remove it." },
    { q: "If you save $50 every month for 12 months, you'll have:", a: "$600", choices: ["$600", "$60", "$500"], explain: "Regular saving adds up by repetition: $50 × 12 months = $600. Putting aside a fixed amount each month is how small sums grow into a big one." },
    { q: "Simple interest formula is:", a: "Interest = Principal × Rate × Time", choices: ["Interest = Principal × Rate × Time", "Interest = Principal + Rate", "Interest = Principal ÷ Time"], explain: "Interest grows with all three: how much you save (principal), the rate, and how long it stays. They multiply, so leaving money in longer earns more — that's why it's Principal × Rate × Time." },
    { q: "Why do banks pay interest on savings accounts?", a: "They use your money to lend to others; in return, they share a small profit with you", choices: ["They use your money to lend to others; in return, they share a small profit with you", "It is the law to give money away", "Out of kindness only"], explain: "Interest is a reward, not a gift. The bank lends your deposit out and earns more than it pays you, so handing back a small share is good business — not law or kindness." },
    { q: "A 'limited time offer — only 5 minutes left!' is a tactic to make you:", a: "Feel rushed and not think carefully about value", choices: ["Feel rushed and not think carefully about value", "Save more time", "Earn loyalty points"], explain: "Artificial urgency presses you to buy before you can judge whether it's worth it. Spotting the pressure is the cue to slow down and ask if you actually need the item." },
    { q: "Which is BEST for a long-term goal like saving for a $1000 laptop in 2 years?", a: "Set a monthly savings amount and put it aside automatically", choices: ["Set a monthly savings amount and put it aside automatically", "Wait until you happen to have $1000 spare", "Borrow $1000 from a friend"], explain: "Break a big goal into steady steps: $1000 over 24 months is about $42 a month set aside automatically. A plan beats waiting for spare cash and avoids the debt of borrowing." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6ExThink1() {
  return shuffle([
    { q: "Which is a STRAW MAN argument?", a: "Pretending someone said something extreme they didn't actually say, then attacking that", choices: ["Pretending someone said something extreme they didn't actually say, then attacking that", "Asking for evidence", "Listing both sides of the argument"], explain: "A straw man swaps the real point for a weaker, exaggerated version that's easy to knock down. It feels like winning but never answers what was actually said." },
    { q: "An AD HOMINEM attack targets:", a: "The person instead of their argument", choices: ["The person instead of their argument", "The argument's logic only", "The historical evidence"], explain: "Ad hominem is Latin for 'to the person'. Insulting who is speaking dodges whether their point is true. A claim stands or falls on its evidence, not on who made it." },
    { q: "'A million people can't be wrong' is an example of which fallacy?", a: "Bandwagon (appeal to popularity)", choices: ["Bandwagon (appeal to popularity)", "Straw man", "Cherry-picking"], explain: "The bandwagon fallacy treats popularity as proof. But truth isn't a vote — large crowds have been wrong before, so how many believe something says nothing about whether it's correct." },
    { q: "What is 'confirmation bias'?", a: "Only noticing information that agrees with what you already believe", choices: ["Only noticing information that agrees with what you already believe", "Confirming you sent an email", "Doubling-checking your maths"], explain: "Confirmation bias is a mental filter that lets in agreeing facts and screens out the rest. It quietly makes you feel right, so the fix is to go looking for the opposite view." },
    { q: "A friend says 'you're 12, you can't possibly understand politics.' This is mainly a(n):", a: "Ad hominem — it dismisses the person, not their argument", choices: ["Ad hominem — it dismisses the person, not their argument", "Straw man", "Reasonable point"], explain: "Judging the point by the speaker's age attacks the person, not the reasoning — that's ad hominem. A 12-year-old's argument should be checked on its own merits." },
    { q: "Which question helps fight confirmation bias the most?", a: "What's the BEST argument against my view?", choices: ["What's the BEST argument against my view?", "Who agrees with me?", "What's the easiest evidence to find?"], explain: "Confirmation bias feeds on agreement, so the cure is to actively seek the strongest opposing case. Asking who agrees only deepens the bias." },
    { q: "Two facts can be true at once. 'Singapore is hot AND occasionally rainy' is an example of:", a: "Holding nuance — most real situations are not either/or", choices: ["Holding nuance — most real situations are not either/or", "A logical fallacy", "A contradiction"], explain: "Nuance means accepting that two things can both be true. Hot and rainy don't cancel each other out, so it's no contradiction — real situations are rarely a simple either/or." },
    { q: "An ad says 'Studies show our drink makes you smarter!' What's missing?", a: "Which study, who funded it, and how big the effect actually was", choices: ["Which study, who funded it, and how big the effect actually was", "Bigger fonts", "More celebrities"], explain: "'Studies show' means nothing without the details. Ask which study, who paid for it, and how large the effect was — a seller-funded study with a tiny effect proves little." },
    { q: "Which is BEST evidence for a claim?", a: "Multiple independent, well-designed studies pointing the same way", choices: ["Multiple independent, well-designed studies pointing the same way", "One viral TikTok", "What your group chat says"], explain: "Strong evidence is when separate, careful studies agree — independence makes a fluke unlikely. A single viral clip or a chat opinion is just one untested source." },
    { q: "Spotting fallacies is most useful when:", a: "Reviewing your own thinking, not just attacking others'", choices: ["Reviewing your own thinking, not just attacking others'", "Winning every argument", "Showing off vocabulary"], explain: "The real value of these tools is catching the weak spots in your own reasoning. Used only to score points, they become just another way to argue badly." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6ExEco1() {
  return shuffle([
    { q: "What does BIODIVERSITY mean?", a: "The variety of living things in an area", choices: ["The variety of living things in an area", "How big the trees are", "The number of plants in a garden"], explain: "Biodiversity means the range of different living things — many species, not just a high count of one. Variety is what lets an ecosystem stay balanced and bounce back from shocks." },
    { q: "Why does losing one species (like bees) matter?", a: "Other species depend on them, so the ecosystem can collapse", choices: ["Other species depend on them, so the ecosystem can collapse", "Nature replaces them instantly", "It only matters for that species"], explain: "Species are linked in a web: bees pollinate plants that feed other animals. Pull one thread and the rest can unravel, so a single loss ripples far beyond that species." },
    { q: "Which Singapore site protects original rainforest biodiversity?", a: "Bukit Timah Nature Reserve", choices: ["Bukit Timah Nature Reserve", "Orchard Road", "Marina Bay Sands"], explain: "Nature reserves like Bukit Timah set aside land so original rainforest and its species can survive. Orchard Road and Marina Bay Sands are built-up areas, not protected habitats." },
    { q: "Climate change is making sea levels:", a: "Rise — a real concern for low-lying Singapore", choices: ["Rise — a real concern for low-lying Singapore", "Fall slowly", "Stay exactly the same"], explain: "Warming melts ice and expands seawater, so sea levels rise. For a low-lying island like Singapore that means a real flood risk, which is why coastal defences are being built." },
    { q: "Which has the BIGGEST climate impact?", a: "Collective and policy action across millions of people", choices: ["Collective and policy action across millions of people", "One person turning off one light", "Wishing very hard"], explain: "Scale is what counts. One person's effort is tiny, but the same choice multiplied across millions, plus government policy, shifts whole systems — that's where the big impact comes from." },
    { q: "A historical example of humans fixing an environmental problem is:", a: "The recovery of the ozone layer after banning CFCs", choices: ["The recovery of the ozone layer after banning CFCs", "There are no examples — nothing has worked", "Inventing single-use plastic"], explain: "When countries banned CFC chemicals, the ozone layer began healing. It shows coordinated action can reverse damage — proof that hope is realistic, not naive." },
    { q: "ECOSYSTEM means:", a: "A community of living things and their environment, all connected", choices: ["A community of living things and their environment, all connected", "A type of bank account", "The latest phone software"], explain: "An ecosystem is living things plus their surroundings — soil, water, air — all interacting. The key idea is connection: change one part and the others feel it too." },
    { q: "Why does eating less meat reduce a person's carbon footprint?", a: "Producing meat (especially beef) releases more greenhouse gases than most plant foods", choices: ["Producing meat (especially beef) releases more greenhouse gases than most plant foods", "Plants are larger than animals", "Cows breathe out oxygen"], explain: "Raising animals, especially cattle, uses lots of land and releases methane, a strong greenhouse gas. Plant foods generally emit far less, so eating less meat cuts emissions." },
    { q: "Singapore's strategy for climate change includes:", a: "Building higher coastal defences and planting more trees", choices: ["Building higher coastal defences and planting more trees", "Ignoring it and hoping for the best", "Banning rain"], explain: "Adapting means preparing for impacts you can't fully stop — raising sea defences against rising water and planting trees to cool the city and absorb carbon." },
    { q: "Which statement is MOST true?", a: "Hope and action together work — climate problems can be reduced when humans act collectively", choices: ["Hope and action together work — climate problems can be reduced when humans act collectively", "It's already too late, give up", "Nothing humans do has any effect"], explain: "Past wins like ozone recovery and cheaper solar show effort pays off. Giving up guarantees failure; hope paired with action is what actually reduces the problem." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6ExBul1() {
  return shuffle([
    { q: "Which describes a HEALTHY friendship?", a: "You feel safe, respected, and free to be yourself most of the time", choices: ["You feel safe, respected, and free to be yourself most of the time", "You feel anxious before seeing them", "You change yourself to fit in"], explain: "The test of a friendship is how it usually leaves you feeling. Safe, respected and free to be yourself is healthy; constant anxiety or having to mask who you are is a warning sign." },
    { q: "What is 'peer pressure'?", a: "When friends push you to do things you don't really want to do", choices: ["When friends push you to do things you don't really want to do", "When you press a friend's hand", "The pressure of school exams"], explain: "Peer pressure is the pull to go along with the group against your own judgement. Naming it helps, because once you see the push you can choose instead of just following." },
    { q: "A useful technique to refuse peer pressure WITHOUT losing face is:", a: "Blame a parent rule: 'Nah, my parents would kill me.'", choices: ["Blame a parent rule: 'Nah, my parents would kill me.'", "Accuse the friend loudly", "Always say yes to keep the friend"], explain: "Giving an outside reason lets you say no without it becoming a personal fight. It keeps the friendship intact while still protecting your choice — far better than caving in." },
    { q: "If your friend group ridicules someone in private chats and you stay silent, you are:", a: "A bystander — silence often signals approval", choices: ["A bystander — silence often signals approval", "Doing the right thing automatically", "Not involved at all"], explain: "Doing nothing isn't neutral — to the group, silence reads as agreement and lets the cruelty continue. A bystander who stays quiet is part of how bullying keeps going." },
    { q: "Which is a warning sign that YOU might need to talk to a trusted adult?", a: "Avoiding school, can't sleep, feeling worthless or hopeless for weeks", choices: ["Avoiding school, can't sleep, feeling worthless or hopeless for weeks", "Having one bad day", "Doing badly on a single test"], explain: "It's the pattern over weeks that matters, not one rough day. Lasting changes in sleep, mood, or wanting to avoid life are signals to reach out — a sign to get help, not a weakness." },
    { q: "TOUCHline (1800-377-2252) and Tinkle Friend (1800-274-4788) in Singapore are:", a: "Free helplines for young people who need to talk", choices: ["Free helplines for young people who need to talk", "Lottery numbers", "Ringtone services"], explain: "These are real, free, confidential helplines staffed to support young people. Knowing a number exists before you need it makes it far easier to reach out in a hard moment." },
    { q: "If saying 'no' to peer pressure costs you a friendship, the truth is usually:", a: "That person was costing you something more than the friendship was worth", choices: ["That person was costing you something more than the friendship was worth", "You should change yourself to keep them", "Real friends always like everything you do"], explain: "A friend who only stays if you betray your own limits is charging too high a price. Real friends respect a no, so losing one over it usually means you lost a cost, not a friend." },
    { q: "The kindest thing to do when you see a classmate being bullied online is:", a: "Send them a kind private message, don't pile on, and tell a trusted adult", choices: ["Send them a kind private message, don't pile on, and tell a trusted adult", "Comment 'lol' to fit in", "Forward the screenshot to others"], explain: "Help has two parts: support the person quietly and report it to an adult who can act. Piling on or forwarding the screenshot spreads the harm and makes you part of it." },
    { q: "Which is TRUE about asking for help?", a: "Asking for help is a sign of strength, not weakness", choices: ["Asking for help is a sign of strength, not weakness", "Only weak people ask for help", "Adults can't help with these problems"], explain: "Reaching out takes courage and good judgement — you're solving a problem, not failing. Everyone needs help sometimes, so asking is a strength, not something to be ashamed of." },
    { q: "A friend tells you they have hopeless thoughts about themselves. The right response is:", a: "Take it seriously, listen, and tell a trusted adult — even if your friend asks you not to", choices: ["Take it seriously, listen, and tell a trusted adult — even if your friend asks you not to", "Promise to keep it secret no matter what", "Tell them to cheer up and move on"], explain: "Safety comes before a secret. When someone is in danger, the caring thing is to listen and bring in an adult who can help — a promise to stay silent could leave them without support." },
    { q: "Standing up for someone — even with a small kind act — is called being:", a: "An upstander", choices: ["An upstander", "A snitch", "A show-off"], explain: "An upstander is the opposite of a silent bystander — someone who acts, even in a small way, to support a person being hurt. Telling an adult to protect someone is help, not snitching." },
    { q: "Which sentence is TRUE?", a: "How you treat people online is part of who you are — not separate from real life", choices: ["How you treat people online is part of who you are — not separate from real life", "Online behaviour doesn't count", "Anonymous accounts make rules disappear"], explain: "A screen doesn't create a second, rule-free you. The same kindness and responsibility apply online, and being anonymous changes how it feels, not whether it's right." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "p6ex-ai1": buildP6ExAi1,
  "p6ex-fin1": buildP6ExFin1,
  "p6ex-think1": buildP6ExThink1,
  "p6ex-eco1": buildP6ExEco1,
  "p6ex-bul1": buildP6ExBul1,
};

export const P6_EXPLORE_QUESTION_COUNTS = {
  "p6ex-ai1": 10,
  "p6ex-fin1": 10,
  "p6ex-think1": 10,
  "p6ex-eco1": 10,
  "p6ex-bul1": 12,
};

export function buildP6ExploreQuestions(moduleId) {
  return (BUILDERS[moduleId] || (() => []))();
}
