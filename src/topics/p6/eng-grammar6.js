import { shuffle } from "../../utils/helpers";

export const P6_GRAMMAR6_INTRO = {
  "p6e-gr1": {
    title: "Grammar — PSLE Revision",
    pages: [
      { text: "Let's revise all the grammar you need for PSLE — tenses, voices, conditionals, and more!", emoji: "📝 🎯 💪" },
    ],
  },
};

function buildP6eGr1() {
  return shuffle([
    { q: "If I ___ harder, I would have passed.", a: "had studied", choices: ["had studied", "study", "will study"], explain: "This is the third conditional for an unreal past: 'if + past perfect, would have + past participle'. The 'would have passed' half forces 'had studied'." },
    { q: "If it rains, we ___ stay indoors.", a: "will", choices: ["will", "would", "had"], explain: "This is the first conditional for a likely future: 'if + present simple, will + base verb'. 'Rains' is present, so the result clause needs 'will'." },
    { q: "She ___, doesn't she?", a: "sings well", choices: ["sings well", "sing well", "sang well"], explain: "A question tag flips the main clause, so the statement must be present and agree with 'She': 'sings well'. The tag 'doesn't she' is present, ruling out the past 'sang'." },
    { q: "He rarely comes late, ___?", a: "does he", choices: ["does he", "doesn't he", "is he"], explain: "Question tags reverse the polarity. 'Rarely' carries a negative meaning, so the statement is treated as negative and the tag must be positive: 'does he'." },
    { q: "The students ___ the exam when the fire alarm rang.", a: "were taking", choices: ["were taking", "took", "take"], explain: "The past continuous shows an action in progress that a sudden past event interrupts. The alarm rang during the exam, so use 'were taking'." },
    { q: "By the time we arrived, the show ___.", a: "had already started", choices: ["had already started", "already starts", "is starting"], explain: "When one past action happens before another, the earlier one takes the past perfect. The show started before 'we arrived', so 'had already started'." },
    { q: "She asked me where I ___.", a: "lived", choices: ["lived", "live", "will live"], explain: "In reported speech, the tense shifts back one step. The original present 'live' becomes the past 'lived' because the reporting verb 'asked' is in the past." },
    { q: "Neither the teacher nor the students ___ present.", a: "were", choices: ["were", "was", "is"], explain: "With 'neither...nor', the verb agrees with the nearer subject. 'Students' is plural and sits closest, so use 'were'." },
    { q: "Each of the boys ___ given a book.", a: "was", choices: ["was", "were", "are"], explain: "'Each' is always singular, even before a plural like 'of the boys'. The verb agrees with 'each', so use 'was'." },
    { q: "The news ___ shocking.", a: "was", choices: ["was", "were", "are"], explain: "'News' looks plural but is an uncountable, singular noun, so it takes a singular verb. The past form here is 'was'." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6eGr2() {
  return shuffle([
    { q: "Change to passive: 'Someone stole my wallet.'", a: "My wallet was stolen", choices: ["My wallet was stolen", "Someone was stolen my wallet", "My wallet stole someone"] , explain: "In the passive, the object of the active sentence becomes the subject: 'be + past participle'. 'My wallet' moves to the front, giving 'was stolen', and the vague 'someone' can be dropped." },
    { q: "Combine: 'She is smart. She is kind.'", a: "She is not only smart but also kind", choices: ["She is not only smart but also kind", "She is smart so she is kind", "She is smart because she is kind"], explain: "To join two equal qualities, use the correlative pair 'not only...but also'. 'So' and 'because' wrongly suggest cause and effect, which is not the meaning here." },
    { q: "Combine with 'although': 'He was tired. He finished his work.'", a: "Although he was tired, he finished his work", choices: ["Although he was tired, he finished his work", "He was tired although he finished his work", "Although he finished his work, he was tired"], explain: "'Although' introduces the contrasting concession, not the main point. Being tired is the obstacle, so it follows 'although'; finishing the work is the surprising result." },
    { q: "The modal 'should' expresses?", a: "Advice or obligation", choices: ["Advice or obligation", "Ability", "Permission"], explain: "Each modal carries its own meaning. 'Should' recommends the right thing to do, so it shows advice or mild obligation, not ability ('can') or permission ('may')." },
    { q: "The modal 'might' expresses?", a: "Possibility", choices: ["Possibility", "Certainty", "Ability"], explain: "'Might' signals that something is only possible, not sure. It is weaker than 'will' (certainty) and different from 'can' (ability)." },
    { q: "'Must' expresses?", a: "Necessity or strong obligation", choices: ["Necessity or strong obligation", "Possibility", "Permission"], explain: "'Must' is the strongest obligation modal, meaning something is necessary or required. That is stronger than 'should' and unrelated to possibility or permission." },
    { q: "She ___ swim when she was five.", a: "could", choices: ["could", "can", "will"], explain: "'Could' is the past form of 'can' for ability. 'When she was five' is past, so use 'could'; 'can' is present and 'will' is future." },
    { q: "___ I borrow your pen?", a: "May", choices: ["May", "Must", "Should"], explain: "To ask politely for permission, use 'May'. 'Must' expresses obligation and 'should' gives advice, so neither fits a request." },
    { q: "You ___ not park here. It is not allowed.", a: "must", choices: ["must", "may", "should"], explain: "'Must not' expresses a firm prohibition. 'It is not allowed' signals a strict rule, so 'must not' is right; 'may not' or 'should not' would be too weak here." },
    { q: "He ___ come to the party if he finishes his work.", a: "might", choices: ["might", "must", "shall"], explain: "His coming depends on an uncertain condition, so use 'might' to show possibility. 'Must' would force certainty and 'shall' does not fit this meaning." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6eVc1() {
  return shuffle([
    { q: "The word 'apprehensive' means?", a: "Anxious or fearful", choices: ["Anxious or fearful", "Happy", "Bored"], explain: "'Apprehensive' describes worry about something that may go wrong, so it means anxious or fearful. Link it to 'apprehend' — to sense danger ahead." },
    { q: "What is a synonym of 'meticulous'?", a: "Thorough", choices: ["Thorough", "Careless", "Quick"], explain: "A synonym shares a meaning. 'Meticulous' means giving careful attention to detail, so 'thorough' matches; 'careless' is its opposite." },
    { q: "What is an antonym of 'abundant'?", a: "Scarce", choices: ["Scarce", "Plentiful", "Cheap"], explain: "An antonym is an opposite. 'Abundant' means present in large amounts, so its opposite is 'scarce'. 'Plentiful' is a synonym, not an antonym." },
    { q: "'Put off' means?", a: "Postpone", choices: ["Postpone", "Continue", "Celebrate"], explain: "Phrasal verbs carry meanings you cannot guess from the words alone. 'Put off' means to delay or postpone something to a later time." },
    { q: "'Look up to' means?", a: "Admire and respect", choices: ["Admire and respect", "Look for something", "Ignore"], explain: "'Look up to' is figurative, not literal looking. It means to admire and respect someone you regard as a role model." },
    { q: "The word 'persevere' means?", a: "Continue despite difficulty", choices: ["Continue despite difficulty", "Give up easily", "Start something new"], explain: "'Persevere' means to keep going through hardship. The clue is the prefix 'per-' (through), the opposite of giving up." },
    { q: "What is a synonym of 'elated'?", a: "Overjoyed", choices: ["Overjoyed", "Disappointed", "Confused"], explain: "A synonym shares a meaning. 'Elated' means extremely happy, so 'overjoyed' matches; 'disappointed' is the opposite feeling." },
    { q: "What is an antonym of 'deteriorate'?", a: "Improve", choices: ["Improve", "Worsen", "Maintain"], explain: "An antonym is an opposite. 'Deteriorate' means to get worse, so its opposite is 'improve'. 'Worsen' is a synonym, not an antonym." },
    { q: "'Break out' means?", a: "Start suddenly", choices: ["Start suddenly", "End slowly", "Break something"], explain: "'Break out' is a phrasal verb, not literal breaking. It means to begin suddenly, as a fire, war or disease 'breaks out'." },
    { q: "The word 'inevitable' means?", a: "Certain to happen", choices: ["Certain to happen", "Unlikely", "Avoidable"], explain: "'Inevitable' means unable to be avoided, so it is certain to happen. The prefix 'in-' means 'not', the opposite of 'avoidable'." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6e-gr1": buildP6eGr1, "p6e-gr2": buildP6eGr2, "p6e-vc1": buildP6eVc1 };
export const P6_GRAMMAR6_QUESTION_COUNTS = { "p6e-gr1": 10, "p6e-gr2": 10, "p6e-vc1": 10 };
export function buildGrammar6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
