import { shuffle } from "../../utils/helpers";

export const P5_GRAMMAR5_INTRO = {
  "p5e-gr1": {
    title: "Grammar — Active, Passive, and Speech",
    pages: [
      { text: "Active voice: The dog bit the man. Passive voice: The man was bitten by the dog. Same event, different focus!", emoji: "🐕 ➡️ 👨 vs 👨 ⬅️ 🐕" },
      { text: "Direct speech uses the exact words: She said, 'I am tired.' Indirect speech reports the meaning: She said that she was tired.", emoji: "💬 ➡️ 📝" },
    ],
  },
};

function buildP5eGr1() {
  return shuffle([
    { q: "Change to passive: 'The boy kicked the ball.'", a: "The ball was kicked by the boy", choices: ["The ball was kicked by the boy", "The boy was kicked by the ball", "The ball kicked the boy"], explain: "To make a sentence passive, the object becomes the new subject. The ball was kicked, so it moves to the front: 'The ball was kicked by the boy.'" },
    { q: "Change to passive: 'The chef cooked the meal.'", a: "The meal was cooked by the chef", choices: ["The meal was cooked by the chef", "The chef was cooked by the meal", "The meal cooked the chef"], explain: "In the passive, the thing that receives the action comes first. The meal was cooked, so: 'The meal was cooked by the chef' — keep the doer after 'by'." },
    { q: "Which sentence is in passive voice?", a: "The window was broken by the boy", choices: ["The window was broken by the boy", "The boy broke the window", "The boy is breaking the window"], explain: "Passive voice puts the receiver of the action first and uses 'was/were' plus a past participle. 'The window was broken by the boy' fits this pattern." },
    { q: "Which sentence is in active voice?", a: "The cat chased the mouse", choices: ["The cat chased the mouse", "The mouse was chased by the cat", "The mouse had been chased"], explain: "In active voice the subject does the action. The cat is doing the chasing, so 'The cat chased the mouse' is active; the others use 'was/had been' and are passive." },
    { q: "Change to indirect speech: He said, 'I am happy.'", a: "He said that he was happy", choices: ["He said that he was happy", "He said that I am happy", "He says that he is happy"], explain: "Reported speech shifts the tense back one step and changes the pronoun. Present 'am' becomes past 'was' and 'I' becomes 'he': 'He said that he was happy.'" },
    { q: "Change to indirect speech: She said, 'I will come.'", a: "She said that she would come", choices: ["She said that she would come", "She said that I will come", "She says she will come"], explain: "When we report speech, 'will' shifts back to 'would' and 'I' becomes 'she': 'She said that she would come.'" },
    { q: "'Must' changes to ___ in indirect speech.", a: "Had to", choices: ["Had to", "Must", "Will"], explain: "Reported speech moves a present obligation into the past. 'Must' has no past form of its own, so it becomes 'had to': She said she had to leave." },
    { q: "'Can' changes to ___ in indirect speech.", a: "Could", choices: ["Could", "Can", "Will"], explain: "Modal verbs shift back in tense when speech is reported. The present 'can' becomes its past form 'could': He said he could swim." },
    { q: "In passive voice, the ___ receives the action.", a: "Subject", choices: ["Subject", "Object", "Verb"], explain: "Passive voice swaps the roles: the subject no longer does the action but receives it. In 'The window was broken', the subject 'window' has the action done to it." },
    { q: "Which word signals passive voice?", a: "By", choices: ["By", "To", "For"], explain: "In a passive sentence, the doer of the action is introduced by the word 'by' — as in 'painted by the artist'. Spotting 'by' often signals the passive voice." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5eGr2() {
  return shuffle([
    { q: "___ she was tired, she continued working.", a: "Although", choices: ["Although", "Because", "So"], explain: "When two ideas contrast or surprise us, we join them with 'although'. Being tired would normally stop work, so 'although' signals she carried on despite it." },
    { q: "He will not pass ___ he studies harder.", a: "unless", choices: ["unless", "because", "although"], explain: "'Unless' means 'if not'. It introduces the only condition that prevents a bad result: he will fail if he does not study harder." },
    { q: "She is ___ smart ___ hardworking.", a: "not only ... but also", choices: ["not only ... but also", "either ... or", "neither ... nor"], explain: "Paired connectors must match the meaning. 'Not only ... but also' adds two positive qualities together: she has both, smart and hardworking." },
    { q: "You can have ___ tea ___ coffee.", a: "either ... or", choices: ["either ... or", "neither ... nor", "not only ... but also"], explain: "'Either ... or' offers a choice between two options. You pick one drink, so 'either tea or coffee' fits the meaning." },
    { q: "He is ___ rich ___ famous.", a: "neither ... nor", choices: ["neither ... nor", "either ... or", "both ... and"], explain: "'Neither ... nor' joins two negatives: it means not the first and not the second. So he is neither rich nor famous." },
    { q: "___ the rain, we went for a walk.", a: "Despite", choices: ["Despite", "Because of", "Due to"], explain: "'Despite' shows contrast and is followed by a noun. The rain would normally stop a walk, so 'despite the rain' shows they went anyway." },
    { q: "The girl ___ won the prize is my sister.", a: "who", choices: ["who", "which", "where"], explain: "Relative pronouns must match what they describe. 'Who' refers to people, so it is the right link for 'the girl'." },
    { q: "The book ___ is on the table is mine.", a: "which", choices: ["which", "who", "where"], explain: "Use 'which' for things and animals, not people. A book is a thing, so 'which' is the correct relative pronoun." },
    { q: "This is the place ___ we first met.", a: "where", choices: ["where", "which", "who"], explain: "'Where' is the relative word used for places. Since 'the place' is a location, 'where we first met' links the two ideas." },
    { q: "The man ___ car was stolen called the police.", a: "whose", choices: ["whose", "who", "which"], explain: "'Whose' shows possession — it tells us something belongs to someone. The car belongs to the man, so 'whose car' is correct." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5eVc1() {
  return shuffle([
    { q: "The word 'reluctant' means?", a: "Unwilling", choices: ["Unwilling", "Eager", "Happy"], explain: "A synonym is a word with the same meaning. 'Reluctant' describes someone who does not want to do something, so it means unwilling — the opposite of eager." },
    { q: "What is a synonym of 'conceal'?", a: "Hide", choices: ["Hide", "Show", "Find"], explain: "Synonyms share a meaning. 'Conceal' means to keep something out of sight, which matches 'hide'; 'show' is its opposite." },
    { q: "What is an antonym of 'expand'?", a: "Shrink", choices: ["Shrink", "Grow", "Stretch"], explain: "An antonym means the opposite. 'Expand' means to get bigger, so its antonym is 'shrink', to get smaller. 'Grow' and 'stretch' mean much the same as expand." },
    { q: "The word 'plummeted' means?", a: "Fell rapidly", choices: ["Fell rapidly", "Rose slowly", "Stayed the same"], explain: "Strong verbs carry vivid meaning. 'Plummeted' describes dropping suddenly and fast, so it means fell rapidly — the opposite of rising." },
    { q: "'She gave in to his request' means she?", a: "Agreed", choices: ["Agreed", "Refused", "Ignored"], explain: "A phrasal verb's meaning is more than its separate words. 'Give in' means to stop resisting and accept, so she agreed." },
    { q: "'Look into' means?", a: "Investigate", choices: ["Investigate", "Ignore", "Admire"], explain: "Phrasal verbs often have meanings you cannot guess word by word. 'Look into' means to examine or investigate something carefully, not literally to look inside it." },
    { q: "The word 'reluctantly' is used as?", a: "An adverb", choices: ["An adverb", "A noun", "An adjective"], explain: "Words ending in '-ly' that describe how an action is done are adverbs. 'Reluctantly' tells us the manner of doing something, so it is an adverb." },
    { q: "What is a synonym of 'astonished'?", a: "Amazed", choices: ["Amazed", "Bored", "Angry"], explain: "Synonyms share meaning. 'Astonished' describes great surprise, which matches 'amazed'; 'bored' and 'angry' are different feelings." },
    { q: "What is an antonym of 'timid'?", a: "Bold", choices: ["Bold", "Shy", "Quiet"], explain: "An antonym is the opposite. 'Timid' means shy and fearful, so its opposite is 'bold', meaning brave and confident." },
    { q: "The word 'diligent' means?", a: "Hardworking", choices: ["Hardworking", "Lazy", "Slow"], explain: "'Diligent' describes someone who works hard and carefully, so it means hardworking — the very opposite of lazy." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5e-gr1": buildP5eGr1, "p5e-gr2": buildP5eGr2, "p5e-vc1": buildP5eVc1 };
export const P5_GRAMMAR5_QUESTION_COUNTS = { "p5e-gr1": 10, "p5e-gr2": 10, "p5e-vc1": 10 };
export function buildGrammar5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
