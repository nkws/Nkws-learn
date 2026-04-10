import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP3eTn1() {
  return shuffle([
    { q: "She is __ (run) in the park.", a: "running", choices: ["running", "runned", "runs"] },
    { q: "They are __ (swim) in the pool.", a: "swimming", choices: ["swimming", "swimmed", "swims"] },
    { q: "He is __ (eat) his lunch.", a: "eating", choices: ["eating", "eated", "eats"] },
    { q: "I am __ (write) a letter.", a: "writing", choices: ["writing", "writed", "writes"] },
    { q: "The baby is __ (cry) loudly.", a: "crying", choices: ["crying", "cryed", "cries"] },
    { q: "We are __ (play) in the garden.", a: "playing", choices: ["playing", "played", "plays"] },
    { q: "She is __ (sit) on the chair.", a: "sitting", choices: ["sitting", "sitted", "sits"] },
    { q: "The dog is __ (dig) a hole.", a: "digging", choices: ["digging", "digged", "digs"] },
    { q: "He is __ (draw) a picture.", a: "drawing", choices: ["drawing", "drawed", "draws"] },
    { q: "They are __ (sing) a song.", a: "singing", choices: ["singing", "singed", "sings"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3eTn2() {
  return shuffle([
    { q: "He was __ (read) a book.", a: "reading", choices: ["reading", "readed", "reads"] },
    { q: "She was __ (cook) dinner.", a: "cooking", choices: ["cooking", "cooked", "cooks"] },
    { q: "They were __ (dance) on stage.", a: "dancing", choices: ["dancing", "danced", "dances"] },
    { q: "I was __ (sleep) when you called.", a: "sleeping", choices: ["sleeping", "sleeped", "sleeps"] },
    { q: "We were __ (walk) to the shop.", a: "walking", choices: ["walking", "walked", "walks"] },
    { q: "He was __ (paint) the wall.", a: "painting", choices: ["painting", "painted", "paints"] },
    { q: "She was __ (wash) the dishes.", a: "washing", choices: ["washing", "washed", "washs"] },
    { q: "The cat was __ (chase) the mouse.", a: "chasing", choices: ["chasing", "chased", "chases"] },
    { q: "They were __ (watch) a movie.", a: "watching", choices: ["watching", "watched", "watchs"] },
    { q: "I was __ (climb) the tree.", a: "climbing", choices: ["climbing", "climbed", "climbs"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3eTn3() {
  return shuffle([
    { q: "Which sentence uses the present continuous tense?", a: "She is reading a book.", choices: ["She is reading a book.", "She read a book.", "She reads a book."] },
    { q: "Which sentence uses the past tense?", a: "He walked to school.", choices: ["He walked to school.", "He is walking to school.", "He walks to school."] },
    { q: "Which sentence uses the past continuous tense?", a: "They were playing football.", choices: ["They were playing football.", "They play football.", "They played football."] },
    { q: "She __ (dance) on stage right now.", a: "is dancing", choices: ["is dancing", "danced", "was dancing"] },
    { q: "Yesterday at 5pm, I __ (do) my homework.", a: "was doing", choices: ["was doing", "am doing", "did"] },
    { q: "Look! The birds __ (fly) in the sky.", a: "are flying", choices: ["are flying", "flew", "were flying"] },
    { q: "He __ (eat) breakfast when the phone rang.", a: "was eating", choices: ["was eating", "is eating", "eats"] },
    { q: "Which sentence uses the present tense?", a: "I drink milk every day.", choices: ["I drink milk every day.", "I am drinking milk.", "I was drinking milk."] },
    { q: "Right now, we __ (learn) about tenses.", a: "are learning", choices: ["are learning", "were learning", "learned"] },
    { q: "Last night, she __ (study) for her test.", a: "was studying", choices: ["was studying", "is studying", "studies"] },
    { q: "Which sentence uses the past continuous?", a: "We were eating dinner.", choices: ["We were eating dinner.", "We eat dinner.", "We are eating dinner."] },
    { q: "The children __ (run) in the field now.", a: "are running", choices: ["are running", "were running", "ran"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const TENSES2_BUILDERS = {
  "p3e-tn1": buildP3eTn1,
  "p3e-tn2": buildP3eTn2,
  "p3e-tn3": buildP3eTn3,
};

export const P3_TENSES2_QUESTION_COUNTS = {
  "p3e-tn1": 10, "p3e-tn2": 10, "p3e-tn3": 12,
};

export function buildTenses2Questions(moduleId) {
  const builder = TENSES2_BUILDERS[moduleId];
  return builder ? builder() : [];
}
