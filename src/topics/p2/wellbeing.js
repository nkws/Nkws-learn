import { shuffle } from "../../utils/helpers";

export const P2_WELLBEING_INTRO = {
  "p2wb-bul1": {
    title: "Stop, Walk, Talk",
    pages: [
      { text: "Bullying is when someone hurts another person ON PURPOSE, AGAIN AND AGAIN. It can be hitting, name-calling, or leaving someone out.", emoji: "🚫" },
      { text: "If you are bullied, the rule is STOP — WALK — TALK. Say 'stop', walk away calmly, then talk to a trusted adult.", emoji: "✋ 🚶 🗣️" },
      { text: "It is NEVER your fault if you are bullied. The bully made the bad choice.", emoji: "💛" },
      { text: "If you SEE bullying, do not laugh or join in. Tell a teacher. Be a kind helper.", emoji: "🦸" },
      { text: "Sometimes people are unkind because they feel bad inside. That doesn't make it okay — but a teacher can help BOTH sides.", emoji: "🧑‍🏫" },
    ],
  },
  "p2wb-feel1": {
    title: "Naming My Feelings",
    pages: [
      { text: "Feelings are signals from inside us. They tell us what we need.", emoji: "💛" },
      { text: "When I feel ANGRY, my body might feel hot. My fists might tighten. That is a signal to slow down.", emoji: "😠" },
      { text: "When I feel SAD, my chest might feel heavy. I might want to be alone. That signal says: I need comfort.", emoji: "😢" },
      { text: "Naming the feeling makes it smaller. 'I'm angry because I lost the game.' Now you can do something about it.", emoji: "🏷️" },
      { text: "Calm-down tools: take 5 slow breaths, drink water, draw, or talk to someone you trust.", emoji: "🌬️ 🥤 🎨" },
    ],
  },
  "p2wb-money1": {
    title: "Spend, Save, Share",
    pages: [
      { text: "When you get pocket money or an ang bao, you have a choice. You can SPEND, SAVE, or SHARE.", emoji: "🪙 ➡️" },
      { text: "SPEND: use it now for something you need or want.", emoji: "🛒" },
      { text: "SAVE: keep it for later when you might need or want something bigger.", emoji: "🐷" },
      { text: "SHARE: give some to help others — to family, charity, or a friend in need.", emoji: "🤝" },
      { text: "A simple plan: spend a little, save a little, share a little. That way every dollar does work for you AND for others.", emoji: "1️⃣ 2️⃣ 3️⃣" },
    ],
  },
  "p2wb-eco1": {
    title: "Where Does Rubbish Go?",
    pages: [
      { text: "When you throw something away, where does it really go? Most rubbish in Singapore is BURNED in special factories.", emoji: "🔥" },
      { text: "The ash and any rubbish that cannot burn goes to PULAU SEMAKAU — Singapore's offshore rubbish island.", emoji: "🏝️" },
      { text: "Pulau Semakau is filling up. The less rubbish we make, the longer it lasts.", emoji: "⏳" },
      { text: "Three easy actions: REDUCE (use less), REUSE (use again), RECYCLE (sort into the right bin).", emoji: "♻️" },
      { text: "Food waste matters too — finishing the food on your plate means less rubbish AND respect for the people who grew and cooked it.", emoji: "🍽️" },
    ],
  },
  "p2wb-think1": {
    title: "Believing What You See",
    pages: [
      { text: "Not everything on a screen is REAL. Some videos are stories. Some pictures are drawn or edited.", emoji: "📺 🎨" },
      { text: "Adverts try to make you WANT something. They use bright colours, fun music, and happy actors. That is their JOB — to sell things.", emoji: "📢" },
      { text: "Before you believe a wow-story online, ask: 'Who told me this? Could it be a joke or pretend?'", emoji: "🤔" },
      { text: "If something seems too crazy to be true, it usually is. Show it to a grown-up.", emoji: "🛑" },
      { text: "Asking questions doesn't mean you are dumb. It means you are SMART.", emoji: "🧠" },
    ],
  },
};

function buildP2WbBul1() {
  return shuffle([
    { q: "Bullying happens when someone hurts another person:", a: "On purpose, again and again", choices: ["On purpose, again and again", "Once, by accident", "Only by hitting"], explain: "Bullying means hurting someone on purpose, again and again. One accident is not bullying, and it can be more than hitting, like name-calling." },
    { q: "What are the three steps to handle bullying?", a: "Stop, Walk, Talk", choices: ["Stop, Walk, Talk", "Hide, Run, Cry", "Yell, Hit, Kick"], explain: "The safe rule is Stop, Walk, Talk: say stop, walk away calmly, then tell a trusted adult. Yelling or hitting back is not safe." },
    { q: "If you are bullied, whose fault is it?", a: "The bully's, never yours", choices: ["The bully's, never yours", "Yours for being different", "Nobody's"], explain: "It is never your fault if you are bullied. The bully chose to be unkind, and being different is okay." },
    { q: "If you see bullying, the BEST thing to do is:", a: "Tell a trusted adult and not join in", choices: ["Tell a trusted adult and not join in", "Laugh so the bully likes you", "Walk away and forget it"], explain: "The kind, safe choice is to tell a trusted adult and never join in. Laughing helps the bully and hurts the person more." },
    { q: "Saying mean things behind a classmate's back, every day, is:", a: "A type of bullying", choices: ["A type of bullying", "Just a joke", "Normal friendship"], explain: "Saying mean things again and again hurts on purpose, so it is bullying, not a joke. Real friends do not do this." },
    { q: "Telling a teacher to keep someone safe is called:", a: "Telling, not tattling", choices: ["Telling, not tattling", "Being mean", "Showing off"], explain: "Asking an adult to keep someone safe is telling, and it is a kind, brave thing to do, not being mean." },
    { q: "A kind sentence to say to someone who looks lonely:", a: "Want to play with us?", choices: ["Want to play with us?", "Go away.", "Why are you so weird?"], explain: "Inviting someone to play is kind and helps them feel they belong. The other choices would hurt their feelings." },
    { q: "Being a HELPER when you see bullying means:", a: "Stepping in if it's safe, or telling an adult", choices: ["Stepping in if it's safe, or telling an adult", "Pretending you didn't see", "Filming it for fun"], explain: "A helper does the kind, safe thing: stand up if it is safe, or fetch an adult. Ignoring it or filming it only makes things worse." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP2WbFeel1() {
  return shuffle([
    { q: "Feelings are:", a: "Signals from inside that tell us what we need", choices: ["Signals from inside that tell us what we need", "Things only adults have", "Always bad"], explain: "Feelings are signals from inside that tell us what we need. Everyone has them, and they are not bad, they just give us a message." },
    { q: "When you are angry, a calm thing to do is:", a: "Take 5 slow breaths", choices: ["Take 5 slow breaths", "Hit something", "Yell at a friend"], explain: "Slow breaths help your body calm down, so anger does not lead to hurting. Hitting or yelling would hurt someone instead." },
    { q: "Saying 'I feel sad because I lost my toy' is called:", a: "Naming your feeling", choices: ["Naming your feeling", "Hiding your feeling", "Yelling"], explain: "Putting your feeling into words is called naming it. Saying how you feel and why is the opposite of hiding it." },
    { q: "Why does naming a feeling help?", a: "It makes the feeling easier to manage", choices: ["It makes the feeling easier to manage", "It makes you angrier", "It does not help at all"], explain: "When you name a feeling, it feels smaller and easier to handle, so you can pick a calm thing to do next." },
    { q: "Which is a CALM-DOWN tool?", a: "Drawing or drinking water", choices: ["Drawing or drinking water", "Hitting the wall", "Yelling at someone"], explain: "Calm-down tools are gentle and safe, like drawing or drinking water. Hitting or yelling are not calm and can hurt." },
    { q: "It is okay to feel:", a: "All feelings — what matters is what you do", choices: ["All feelings — what matters is what you do", "Only happy", "Only calm"], explain: "Every feeling is okay to have, even sad or angry ones. What matters is choosing a kind, safe thing to do about it." },
    { q: "If you feel sad for many days, you should:", a: "Tell a parent or teacher", choices: ["Tell a parent or teacher", "Hide it forever", "Pretend nothing is wrong"], explain: "Big feelings that last a long time are easier with help, so tell a trusted adult. Hiding it keeps you feeling alone." },
    { q: "Which sentence shows EMPATHY for a friend?", a: "Are you okay? You look upset.", choices: ["Are you okay? You look upset.", "Stop crying, it's not a big deal.", "Why are you sad? It's silly."], explain: "Empathy means caring about how someone else feels. Asking 'Are you okay?' is kind, while the other replies make a friend feel worse." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP2WbMoney1() {
  return shuffle([
    { q: "What are the three smart things you can do with money?", a: "Spend, Save, Share", choices: ["Spend, Save, Share", "Hide, Lose, Forget", "Shout, Steal, Run"], explain: "Smart money has three choices: Spend a little, Save a little, and Share a little, so your money helps you and others." },
    { q: "What does SAVING mean?", a: "Keeping money for later", choices: ["Keeping money for later", "Spending it all today", "Throwing it away"], explain: "Saving means keeping money for later, so you can buy something bigger or be ready when you really need it." },
    { q: "Which is a NEED?", a: "School books", choices: ["School books", "A new toy car", "A bag of sweets"], explain: "A need is something you must have, like school books for learning. Toys and sweets are wants, which are nice but not must-haves." },
    { q: "If you want a $20 gift in 10 weeks, how much should you save each week?", a: "$2", choices: ["$2", "$10", "$20"], explain: "Share the total over the weeks: $20 split into 10 equal weeks is $20 ÷ 10 = $2 saved each week." },
    { q: "Why is it good to share some of your money?", a: "It helps others and feels good", choices: ["It helps others and feels good", "It makes you poor", "It is the law"], explain: "Sharing some money helps people who need it and feels good inside. You can be kind and still keep enough for yourself." },
    { q: "After we spend money, it is:", a: "Gone — we cannot use it again", choices: ["Gone — we cannot use it again", "Still in our pocket", "Doubled"], explain: "Once you spend money it is gone, so it is wise to think before buying and to save some for later." },
    { q: "A piggy bank is for:", a: "Saving money", choices: ["Saving money", "Spending money now", "Sharing with a friend"], explain: "A piggy bank keeps your money safe so you can save it for later. Spending and sharing are good money habits too, but a piggy bank is specifically for saving." },
    { q: "Which is the BEST money habit?", a: "Save a little every time you get money", choices: ["Save a little every time you get money", "Spend everything at once", "Lose track of your money"], explain: "Saving a little each time you get money builds up over time, which is wiser than spending it all at once." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP2WbEco1() {
  return shuffle([
    { q: "Where does most of Singapore's rubbish go?", a: "It is burned in factories, then ash goes to Pulau Semakau", choices: ["It is burned in factories, then ash goes to Pulau Semakau", "It is buried underground in Singapore", "It is sent to other countries"], explain: "Most rubbish here is burned in special factories, and the leftover ash is taken to Pulau Semakau. Singapore is too small to bury it all underground, and sending it overseas is very costly." },
    { q: "What is Pulau Semakau?", a: "Singapore's offshore landfill island", choices: ["Singapore's offshore landfill island", "A theme park", "A school"], explain: "Pulau Semakau is Singapore's landfill island out at sea, where leftover ash and rubbish are kept. It is slowly filling up." },
    { q: "Which action makes the LEAST rubbish?", a: "Reduce — use less in the first place", choices: ["Reduce — use less in the first place", "Recycle", "Reuse"], explain: "Reduce comes first because using less means there is less rubbish to start with. Reusing and recycling help too, but reduce makes the least." },
    { q: "If you finish all the food on your plate, you:", a: "Reduce food waste", choices: ["Reduce food waste", "Make more rubbish", "Use more electricity"], explain: "Eating all your food means none is thrown away, so you reduce food waste and respect the people who grew and cooked it." },
    { q: "Which is a way to REUSE?", a: "Use an old jam jar to hold pencils", choices: ["Use an old jam jar to hold pencils", "Throw it in the bin", "Burn it"], explain: "Reuse means using something again for a new job, like turning an old jar into a pencil holder instead of binning it." },
    { q: "Why does it matter that Pulau Semakau fills up?", a: "Singapore is small — once it's full, we have a big problem", choices: ["Singapore is small — once it's full, we have a big problem", "It does not matter", "Rubbish makes islands grow"], explain: "Singapore is small with little space for rubbish, so once Semakau is full it is a real problem. Making less rubbish helps it last." },
    { q: "Recycling old paper means it can become:", a: "New paper or boxes", choices: ["New paper or boxes", "Glass", "Food"], explain: "Recycling turns old things into new ones of the same kind, so old paper can be made into fresh new paper or cardboard boxes." },
    { q: "Which is the BEST choice to take to school?", a: "A reusable water bottle", choices: ["A reusable water bottle", "A new disposable bottle every day", "No water at all"], explain: "A reusable bottle is used again and again, so it makes far less rubbish than buying a new throwaway bottle each day." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP2WbThink1() {
  return shuffle([
    { q: "Are all videos on screens REAL?", a: "No — some are stories or made-up", choices: ["No — some are stories or made-up", "Yes, every single one", "Only the cartoons are made-up"], explain: "Not everything on a screen is real. Many videos are stories, drawn, or edited, so it is smart to wonder what is true." },
    { q: "What is the JOB of an advert?", a: "To make you want something so you buy it", choices: ["To make you want something so you buy it", "To teach you maths", "To tell only the truth"], explain: "An advert's job is to make you want to buy something, so it only shows the good parts. Knowing this helps you think before wanting it." },
    { q: "If a story online sounds CRAZY-true, you should:", a: "Show it to a trusted grown-up", choices: ["Show it to a trusted grown-up", "Believe every word", "Forward it to all your friends"], explain: "If something sounds too wild to be true, it often is. The safe thing is to show a trusted grown-up before believing or sharing it." },
    { q: "Asking 'is this true?' is:", a: "Smart — it shows good thinking", choices: ["Smart — it shows good thinking", "Rude", "A waste of time"], explain: "Asking if something is true is smart, not rude. Good thinkers check facts instead of believing everything straight away." },
    { q: "Which question helps you check if something is true?", a: "Who told me this, and how do they know?", choices: ["Who told me this, and how do they know?", "Is the picture pretty?", "Is it on my favourite app?"], explain: "Asking who said it and how they know helps you find the truth. A pretty picture or favourite app does not make something real." },
    { q: "A photo on the internet:", a: "Can be edited or from a different event", choices: ["Can be edited or from a different event", "Always shows what really happened", "Cannot lie"], explain: "Photos can be edited or taken from another time and place, so a picture does not always show what really happened." },
    { q: "Which is the SAFEST place to ask if something is true?", a: "A trusted adult", choices: ["A trusted adult", "A stranger online", "Nobody — guess yourself"], explain: "The safest helper is a trusted adult you know. Strangers online may not tell the truth, and guessing alone can leave you fooled." },
    { q: "If a friend says 'I saw a real dragon!', a smart reply is:", a: "How did you see it? Where?", choices: ["How did you see it? Where?", "Cool, I believe you.", "I saw two!"], explain: "A smart reply asks gentle questions like how and where, so you can check the story instead of just believing it." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "p2wb-bul1": buildP2WbBul1,
  "p2wb-feel1": buildP2WbFeel1,
  "p2wb-money1": buildP2WbMoney1,
  "p2wb-eco1": buildP2WbEco1,
  "p2wb-think1": buildP2WbThink1,
};

export const P2_WELLBEING_QUESTION_COUNTS = {
  "p2wb-bul1": 8,
  "p2wb-feel1": 8,
  "p2wb-money1": 8,
  "p2wb-eco1": 8,
  "p2wb-think1": 8,
};

export function buildP2WellbeingQuestions(moduleId) {
  return (BUILDERS[moduleId] || (() => []))();
}
