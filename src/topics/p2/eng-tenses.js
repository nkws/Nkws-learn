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
    { q: "Yesterday I __ (walk) to school.", a: "walked", choices: ["walked", "walking", "walks"], explain: "Past tense tells what already happened. The word 'yesterday' shows it is over, so add -ed: 'walk' becomes 'walked'." },
    { q: "She __ (play) in the park yesterday.", a: "played", choices: ["played", "playing", "plays"], explain: "When something already happened, we add -ed to the verb. 'Yesterday' tells us it is past, so 'play' becomes 'played'." },
    { q: "We __ (clean) the house last week.", a: "cleaned", choices: ["cleaned", "cleaning", "cleans"], explain: "'Last week' means it already happened, so we use past tense. Add -ed: 'clean' becomes 'cleaned'." },
    { q: "He __ (jump) over the puddle.", a: "jumped", choices: ["jumped", "jumping", "jumps"], explain: "To show an action is finished, add -ed to make the past tense. So 'jump' becomes 'jumped'." },
    { q: "They __ (talk) to the teacher yesterday.", a: "talked", choices: ["talked", "talking", "talks"], explain: "Past tense tells what already happened. 'Yesterday' shows it is over, so 'talk' becomes 'talked' by adding -ed." },
    { q: "I __ (help) my mum last night.", a: "helped", choices: ["helped", "helping", "helps"], explain: "'Last night' is past, so we use past tense. Many verbs add -ed, so 'help' becomes 'helped'." },
    { q: "The dog __ (bark) at the cat.", a: "barked", choices: ["barked", "barking", "barks"], explain: "Past tense shows the action is over. Add -ed to the verb, so 'bark' becomes 'barked'." },
    { q: "She __ (wash) her hands before dinner.", a: "washed", choices: ["washed", "washing", "washs"], explain: "To make the past tense, add -ed: 'wash' becomes 'washed'. We never write 'washs'." },
    { q: "We __ (paint) a picture yesterday.", a: "painted", choices: ["painted", "painting", "paints"], explain: "'Yesterday' tells us it already happened, so use past tense. Add -ed and 'paint' becomes 'painted'." },
    { q: "He __ (kick) the ball very hard.", a: "kicked", choices: ["kicked", "kicking", "kicks"], explain: "Past tense tells what already happened. Many verbs add -ed, so 'kick' becomes 'kicked'." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2eTn2() {
  return shuffle([
    { q: "Yesterday I __ (eat) rice.", a: "ate", choices: ["ate", "eated", "eating"], explain: "Some verbs do not add -ed. They change completely: 'eat' becomes 'ate'. We never say 'eated'." },
    { q: "She __ (go) to the shop yesterday.", a: "went", choices: ["went", "goed", "going"], explain: "Some verbs change completely in the past. 'Go' becomes 'went', not 'goed'." },
    { q: "He __ (run) very fast in the race.", a: "ran", choices: ["ran", "runned", "running"], explain: "Not all verbs add -ed. This one changes its spelling: 'run' becomes 'ran'." },
    { q: "I __ (see) a rainbow this morning.", a: "saw", choices: ["saw", "seed", "seeing"], explain: "Some verbs are irregular and change completely in the past. 'See' becomes 'saw', not 'seed'." },
    { q: "They __ (come) to my house yesterday.", a: "came", choices: ["came", "comed", "coming"], explain: "This is an irregular verb, so it does not add -ed. 'Come' becomes 'came'." },
    { q: "She __ (make) a cake last Sunday.", a: "made", choices: ["made", "maked", "making"], explain: "Some past tense verbs change their spelling instead of adding -ed. 'Make' becomes 'made'." },
    { q: "He __ (take) the bus to school.", a: "took", choices: ["took", "taked", "taking"], explain: "'Take' is irregular, so it does not add -ed. In the past it becomes 'took'." },
    { q: "I __ (write) a letter to Grandma.", a: "wrote", choices: ["wrote", "writed", "writing"], explain: "Irregular verbs change completely in the past. 'Write' becomes 'wrote', not 'writed'." },
    { q: "We __ (have) a test yesterday.", a: "had", choices: ["had", "haved", "having"], explain: "Some verbs change spelling in the past instead of adding -ed. 'Have' becomes 'had'." },
    { q: "She __ (give) me a present.", a: "gave", choices: ["gave", "gived", "giving"], explain: "'Give' is irregular, so it does not add -ed. In the past it becomes 'gave'." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2eTn3() {
  return shuffle([
    { q: "Which sentence is past tense?", a: "He ran to school.", choices: ["He ran to school.", "He runs to school.", "He is running to school."], explain: "Past tense tells what already happened. 'Ran' is the past of 'run', so 'He ran to school.' is past tense." },
    { q: "Which sentence is past tense?", a: "She ate her lunch.", choices: ["She ate her lunch.", "She eats her lunch.", "She is eating her lunch."], explain: "A past tense sentence shows the action is finished. 'Ate' is the past of 'eat', so this one is past tense." },
    { q: "Which sentence is present tense?", a: "I walk to school.", choices: ["I walk to school.", "I walked to school.", "I was walking to school."], explain: "Present tense tells what happens now. 'Walk' has no -ed and no 'was', so 'I walk to school.' is present tense." },
    { q: "Which sentence is past tense?", a: "They played outside.", choices: ["They played outside.", "They play outside.", "They are playing outside."], explain: "Past tense shows the action is over. 'Played' has the -ed ending, so this sentence is past tense." },
    { q: "Which sentence is present tense?", a: "She reads every day.", choices: ["She reads every day.", "She read yesterday.", "She was reading."], explain: "Present tense tells what happens now or every day. 'Reads every day' is happening now, so it is present tense." },
    { q: "Which sentence is past tense?", a: "We went to the zoo.", choices: ["We went to the zoo.", "We go to the zoo.", "We are going to the zoo."], explain: "'Went' is the past of 'go', and it shows the action is finished, so 'We went to the zoo.' is past tense." },
    { q: "Which sentence is present tense?", a: "He likes ice cream.", choices: ["He likes ice cream.", "He liked ice cream.", "He was liking ice cream."], explain: "Present tense tells what is true now. 'Likes' has no -ed, so 'He likes ice cream.' is present tense." },
    { q: "Which sentence is past tense?", a: "I wrote a story.", choices: ["I wrote a story.", "I write a story.", "I am writing a story."], explain: "'Wrote' is the past of 'write', and it shows the action is done, so this sentence is past tense." },
    { q: "Which sentence is present tense?", a: "The bird sings.", choices: ["The bird sings.", "The bird sang.", "The bird was singing."], explain: "Present tense tells what happens now. 'Sings' is happening now, while 'sang' is past, so 'The bird sings.' is present." },
    { q: "Which sentence is past tense?", a: "She made a card.", choices: ["She made a card.", "She makes a card.", "She is making a card."], explain: "'Made' is the past of 'make', and it shows the action is finished, so 'She made a card.' is past tense." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
