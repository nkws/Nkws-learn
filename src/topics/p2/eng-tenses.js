import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P2_TENSES_INTRO = {
  "p2e-tn1": {
    title: "Past Tense -ed",
    pages: [
      {
        text: "When something already happened, we use the past tense!",
        emoji: "⏰ ➡️ 📖",
      },
      {
        text: "For many verbs, we add -ed to show it already happened. Walk becomes walked!",
        emoji: "walk ➡️ walked",
      },
      {
        text: "I play every day. Yesterday I played. See the -ed?",
        emoji: "play ➡️ played",
      },
      {
        text: "Some verbs just add -d. Like becomes liked!",
        emoji: "like ➡️ liked",
      },
      {
        text: "Let's practise using past tense with -ed!",
        emoji: "🦊 📝 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildP2eTn1() {
  return shuffle([
    { q: "Yesterday I __ (walk) to school.", a: "walked", choices: ["walked", "walking", "walks"] },
    { q: "She __ (play) in the park yesterday.", a: "played", choices: ["played", "playing", "plays"] },
    { q: "We __ (clean) the house last week.", a: "cleaned", choices: ["cleaned", "cleaning", "cleans"] },
    { q: "He __ (jump) over the puddle.", a: "jumped", choices: ["jumped", "jumping", "jumps"] },
    { q: "They __ (talk) to the teacher yesterday.", a: "talked", choices: ["talked", "talking", "talks"] },
    { q: "I __ (help) my mum last night.", a: "helped", choices: ["helped", "helping", "helps"] },
    { q: "The dog __ (bark) at the cat.", a: "barked", choices: ["barked", "barking", "barks"] },
    { q: "She __ (wash) her hands before dinner.", a: "washed", choices: ["washed", "washing", "washs"] },
    { q: "We __ (paint) a picture yesterday.", a: "painted", choices: ["painted", "painting", "paints"] },
    { q: "He __ (kick) the ball very hard.", a: "kicked", choices: ["kicked", "kicking", "kicks"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2eTn2() {
  return shuffle([
    { q: "Yesterday I __ (eat) rice.", a: "ate", choices: ["ate", "eated", "eating"] },
    { q: "She __ (go) to the shop yesterday.", a: "went", choices: ["went", "goed", "going"] },
    { q: "He __ (run) very fast in the race.", a: "ran", choices: ["ran", "runned", "running"] },
    { q: "I __ (see) a rainbow this morning.", a: "saw", choices: ["saw", "seed", "seeing"] },
    { q: "They __ (come) to my house yesterday.", a: "came", choices: ["came", "comed", "coming"] },
    { q: "She __ (make) a cake last Sunday.", a: "made", choices: ["made", "maked", "making"] },
    { q: "He __ (take) the bus to school.", a: "took", choices: ["took", "taked", "taking"] },
    { q: "I __ (write) a letter to Grandma.", a: "wrote", choices: ["wrote", "writed", "writing"] },
    { q: "We __ (have) a test yesterday.", a: "had", choices: ["had", "haved", "having"] },
    { q: "She __ (give) me a present.", a: "gave", choices: ["gave", "gived", "giving"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2eTn3() {
  return shuffle([
    { q: "Which sentence is past tense?", a: "He ran to school.", choices: ["He ran to school.", "He runs to school.", "He is running to school."] },
    { q: "Which sentence is past tense?", a: "She ate her lunch.", choices: ["She ate her lunch.", "She eats her lunch.", "She is eating her lunch."] },
    { q: "Which sentence is present tense?", a: "I walk to school.", choices: ["I walk to school.", "I walked to school.", "I was walking to school."] },
    { q: "Which sentence is past tense?", a: "They played outside.", choices: ["They played outside.", "They play outside.", "They are playing outside."] },
    { q: "Which sentence is present tense?", a: "She reads every day.", choices: ["She reads every day.", "She read yesterday.", "She was reading."] },
    { q: "Which sentence is past tense?", a: "We went to the zoo.", choices: ["We went to the zoo.", "We go to the zoo.", "We are going to the zoo."] },
    { q: "Which sentence is present tense?", a: "He likes ice cream.", choices: ["He likes ice cream.", "He liked ice cream.", "He was liking ice cream."] },
    { q: "Which sentence is past tense?", a: "I wrote a story.", choices: ["I wrote a story.", "I write a story.", "I am writing a story."] },
    { q: "Which sentence is present tense?", a: "The bird sings.", choices: ["The bird sings.", "The bird sang.", "The bird was singing."] },
    { q: "Which sentence is past tense?", a: "She made a card.", choices: ["She made a card.", "She makes a card.", "She is making a card."] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const TENSES_BUILDERS = {
  "p2e-tn1": buildP2eTn1,
  "p2e-tn2": buildP2eTn2,
  "p2e-tn3": buildP2eTn3,
};

export const P2_TENSES_QUESTION_COUNTS = {
  "p2e-tn1": 10, "p2e-tn2": 10, "p2e-tn3": 10,
};

export function buildTensesQuestions(moduleId) {
  const builder = TENSES_BUILDERS[moduleId];
  return builder ? builder() : [];
}
