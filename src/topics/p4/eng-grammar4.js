import { shuffle } from "../../utils/helpers";

export const P4_GRAMMAR4_INTRO = {
  "p4e-gr1": {
    title: "Grammar — Tenses and Agreement",
    pages: [
      { text: "Using the correct tense tells us WHEN something happens — past, present, or future!", emoji: "⏮️ ⏺️ ⏭️" },
      { text: "Subject-verb agreement means the verb must match the subject. 'She runs' not 'She run'!", emoji: "✅ 🏃‍♀️" },
    ],
  },
};

function buildP4eGr1() {
  return shuffle([
    { q: "She ___ to school every day.", a: "walks", choices: ["walks", "walk", "walked"], explain: "Subject-verb agreement: a singular subject like 'she' takes a verb with -s in the present simple. 'Every day' shows a habit, so 'walks' fits, not the past 'walked'." },
    { q: "They ___ playing in the park yesterday.", a: "were", choices: ["were", "was", "are"], explain: "Past continuous uses 'was' or 'were' plus -ing. The plural subject 'they' takes 'were', and 'yesterday' tells us it happened in the past." },
    { q: "He ___ already finished his homework.", a: "has", choices: ["has", "have", "had"], explain: "Present perfect uses 'has' or 'have' plus a past participle. The singular 'he' takes 'has', giving 'has finished' for an action just completed." },
    { q: "The children ___ singing right now.", a: "are", choices: ["are", "is", "was"], explain: "Present continuous uses 'is' or 'are' plus -ing for actions happening now. 'Children' is plural, so it takes 'are', shown by 'right now'." },
    { q: "I ___ go to the library tomorrow.", a: "will", choices: ["will", "was", "am"], explain: "The future tense uses 'will' before the base verb. The word 'tomorrow' signals the future, so 'will go' is correct." },
    { q: "She ___ her lunch before the bell rang.", a: "had eaten", choices: ["had eaten", "has eaten", "eats"], explain: "Past perfect ('had' plus past participle) shows the earlier of two past actions. Eating happened before the bell rang, so 'had eaten' is right." },
    { q: "The dog ___ loudly every night.", a: "barks", choices: ["barks", "bark", "barking"], explain: "Subject-verb agreement: the singular 'dog' takes a present-simple verb with -s. 'Every night' shows a habit, so 'barks' is correct." },
    { q: "We ___ to the zoo last Sunday.", a: "went", choices: ["went", "go", "goes"], explain: "'Last Sunday' shows a finished past action, so we use the past simple. 'Go' is the irregular verb whose past form is 'went'." },
    { q: "My mother ___ cooking dinner now.", a: "is", choices: ["is", "are", "were"], explain: "Present continuous uses 'is' or 'are' plus -ing for actions happening now. The singular 'mother' takes 'is', signalled by the word 'now'." },
    { q: "The boys ___ playing football since morning.", a: "have been", choices: ["have been", "has been", "was"], explain: "Present perfect continuous uses 'have/has been' plus -ing for actions still going on. The plural 'boys' takes 'have been', and 'since' marks an ongoing period." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4eGr2() {
  return shuffle([
    { q: "Choose the correct preposition: The cat is ___ the table.", a: "under", choices: ["under", "since", "during"], explain: "A preposition of place shows position. 'Under' tells us where the cat is; 'since' and 'during' are time words and cannot describe a position." },
    { q: "Choose the correct conjunction: I wanted to play, ___ it was raining.", a: "but", choices: ["but", "so", "because"], explain: "A conjunction joins two ideas. 'But' shows contrast — wanting to play against the rain stopping it; 'so' or 'because' would change the meaning." },
    { q: "She is taller ___ her brother.", a: "than", choices: ["than", "then", "that"], explain: "Comparatives use 'than' to compare two people. 'Taller than' compares her with her brother; 'then' means next in time, not a comparison." },
    { q: "I will wait ___ you finish.", a: "until", choices: ["until", "during", "since"], explain: "'Until' marks the point in time when waiting stops. 'During' needs an event noun and 'since' looks back to a start, so neither fits here." },
    { q: "He ran fast ___ he could catch the bus.", a: "so that", choices: ["so that", "because", "although"], explain: "We need a word showing purpose — the reason he ran. 'So that' introduces a purpose, while 'because' gives a cause and 'although' shows contrast." },
    { q: "Choose the correct article: I saw ___ owl in the tree.", a: "an", choices: ["an", "a", "the"], explain: "Use 'an' before a vowel sound. 'Owl' begins with the vowel sound /au/, so 'an owl' sounds right, whereas 'a owl' is awkward to say." },
    { q: "___ it was late, she continued studying.", a: "Although", choices: ["Although", "Because", "So"], explain: "'Although' shows contrast — being late did not stop her studying. 'Because' would give a cause and 'so' a result, which do not match the surprise here." },
    { q: "The book is ___ the shelf.", a: "on", choices: ["on", "at", "in"], explain: "Prepositions of place follow patterns. 'On' is used for a surface like a shelf; 'in' suits enclosed spaces and 'at' marks a point, so 'on the shelf' is right." },
    { q: "We play outside ___ it is sunny.", a: "when", choices: ["when", "until", "before"], explain: "We need a time word linking the playing to the weather. 'When' shows it happens at that time; 'until' or 'before' would change the meaning." },
    { q: "He is good ___ mathematics.", a: "at", choices: ["at", "in", "on"], explain: "Prepositions follow fixed collocations. The phrase 'good at' always pairs with a skill or subject, so 'good at mathematics' is correct." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP4eVc1() {
  return shuffle([
    { q: "What is a synonym of 'happy'?", a: "Glad", choices: ["Glad", "Sad", "Angry"], explain: "A synonym is a word with a similar meaning. 'Glad' means pleased, just like 'happy'; 'sad' and 'angry' are opposite feelings." },
    { q: "What is an antonym of 'brave'?", a: "Cowardly", choices: ["Cowardly", "Bold", "Strong"], explain: "An antonym means the opposite. 'Cowardly' is the opposite of 'brave'; 'bold' is actually a synonym, so it is a tempting trap." },
    { q: "The word 'enormous' means?", a: "Very large", choices: ["Very large", "Very small", "Very fast"], explain: "Knowing key vocabulary lets you pick the right meaning. 'Enormous' describes size and means very large, not small or fast." },
    { q: "What is a synonym of 'begin'?", a: "Start", choices: ["Start", "End", "Stop"], explain: "A synonym has a similar meaning. 'Start' means the same as 'begin'; 'end' and 'stop' mean the opposite, to finish." },
    { q: "What is an antonym of 'ancient'?", a: "Modern", choices: ["Modern", "Old", "Broken"], explain: "An antonym is an opposite. 'Modern' means new or recent, the opposite of 'ancient'; 'old' is a synonym, so watch out for that trap." },
    { q: "The word 'famished' means?", a: "Very hungry", choices: ["Very hungry", "Very tired", "Very happy"], explain: "Building vocabulary helps you read better. 'Famished' is a strong word for very hungry, not tired or happy." },
    { q: "What is a synonym of 'furious'?", a: "Angry", choices: ["Angry", "Happy", "Calm"], explain: "A synonym has a similar meaning. 'Furious' means very angry, so 'angry' matches; 'calm' and 'happy' are opposite feelings." },
    { q: "What is an antonym of 'generous'?", a: "Selfish", choices: ["Selfish", "Kind", "Wealthy"], explain: "An antonym is an opposite. 'Selfish' means unwilling to share, the opposite of 'generous'; 'kind' is closer to a synonym." },
    { q: "The word 'cautious' means?", a: "Careful", choices: ["Careful", "Careless", "Quick"], explain: "Vocabulary clues come from word meaning. 'Cautious' means taking care to avoid danger, so 'careful' fits; 'careless' is its opposite." },
    { q: "What is a synonym of 'assist'?", a: "Help", choices: ["Help", "Hinder", "Ignore"], explain: "A synonym has a similar meaning. 'Assist' means to help; 'hinder' means to get in the way, which is the opposite." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p4e-gr1": buildP4eGr1, "p4e-gr2": buildP4eGr2, "p4e-vc1": buildP4eVc1 };
export const P4_GRAMMAR4_QUESTION_COUNTS = { "p4e-gr1": 10, "p4e-gr2": 10, "p4e-vc1": 10 };
export function buildGrammar4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
