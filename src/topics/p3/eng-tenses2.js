import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP3eTn1() {
  return shuffle([
    { q: "She is __ (run) in the park.", a: "running", choices: ["running", "runned", "runs"], explain: "Present continuous = is/are + verb-ing, for something happening now. With 'is' we add -ing: run doubles its letter to become running." },
    { q: "They are __ (swim) in the pool.", a: "swimming", choices: ["swimming", "swimmed", "swims"], explain: "Present continuous = is/are + verb-ing. Short verbs like swim double the last letter before -ing, giving swimming." },
    { q: "He is __ (eat) his lunch.", a: "eating", choices: ["eating", "eated", "eats"], explain: "Present continuous = is/are + verb-ing, for an action going on now. So 'is' plus eat becomes eating." },
    { q: "I am __ (write) a letter.", a: "writing", choices: ["writing", "writed", "writes"], explain: "Present continuous = am/is/are + verb-ing. Verbs ending in -e drop the e before adding -ing, so write becomes writing." },
    { q: "The baby is __ (cry) loudly.", a: "crying", choices: ["crying", "cryed", "cries"], explain: "Present continuous = is/are + verb-ing for something happening now. We just add -ing to cry to make crying." },
    { q: "We are __ (play) in the garden.", a: "playing", choices: ["playing", "played", "plays"], explain: "Present continuous = is/are + verb-ing. With 'are' we add -ing to the verb, so play becomes playing." },
    { q: "She is __ (sit) on the chair.", a: "sitting", choices: ["sitting", "sitted", "sits"], explain: "Present continuous = is/are + verb-ing. Short verbs like sit double the last letter before -ing, giving sitting." },
    { q: "The dog is __ (dig) a hole.", a: "digging", choices: ["digging", "digged", "digs"], explain: "Present continuous = is/are + verb-ing. Dig doubles its last letter before -ing, so the answer is digging." },
    { q: "He is __ (draw) a picture.", a: "drawing", choices: ["drawing", "drawed", "draws"], explain: "Present continuous = is/are + verb-ing for an action happening now. We add -ing to draw to make drawing." },
    { q: "They are __ (sing) a song.", a: "singing", choices: ["singing", "singed", "sings"], explain: "Present continuous = is/are + verb-ing. With 'are' we add -ing, so sing becomes singing." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3eTn2() {
  return shuffle([
    { q: "He was __ (read) a book.", a: "reading", choices: ["reading", "readed", "reads"], explain: "Past continuous = was/were + verb-ing, for something happening over a time in the past. So 'was' plus read becomes reading." },
    { q: "She was __ (cook) dinner.", a: "cooking", choices: ["cooking", "cooked", "cooks"], explain: "Past continuous = was/were + verb-ing. The word 'was' needs the -ing form, so cook becomes cooking." },
    { q: "They were __ (dance) on stage.", a: "dancing", choices: ["dancing", "danced", "dances"], explain: "Past continuous = was/were + verb-ing. Verbs ending in -e drop the e before -ing, so dance becomes dancing." },
    { q: "I was __ (sleep) when you called.", a: "sleeping", choices: ["sleeping", "sleeped", "sleeps"], explain: "Past continuous = was/were + verb-ing, showing an action in progress when something else happened. So sleep becomes sleeping." },
    { q: "We were __ (walk) to the shop.", a: "walking", choices: ["walking", "walked", "walks"], explain: "Past continuous = was/were + verb-ing. The word 'were' takes the -ing form, so walk becomes walking." },
    { q: "He was __ (paint) the wall.", a: "painting", choices: ["painting", "painted", "paints"], explain: "Past continuous = was/were + verb-ing for an action going on in the past. So 'was' plus paint becomes painting." },
    { q: "She was __ (wash) the dishes.", a: "washing", choices: ["washing", "washed", "washs"], explain: "Past continuous = was/were + verb-ing. After 'was' we add -ing, so wash becomes washing." },
    { q: "The cat was __ (chase) the mouse.", a: "chasing", choices: ["chasing", "chased", "chases"], explain: "Past continuous = was/were + verb-ing. Verbs ending in -e drop the e before -ing, so chase becomes chasing." },
    { q: "They were __ (watch) a movie.", a: "watching", choices: ["watching", "watched", "watchs"], explain: "Past continuous = was/were + verb-ing. The word 'were' needs the -ing form, so watch becomes watching." },
    { q: "I was __ (climb) the tree.", a: "climbing", choices: ["climbing", "climbed", "climbs"], explain: "Past continuous = was/were + verb-ing for an action over a time in the past. So 'was' plus climb becomes climbing." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3eTn3() {
  return shuffle([
    { q: "Which sentence uses the present continuous tense?", a: "She is reading a book.", choices: ["She is reading a book.", "She read a book.", "She reads a book."], explain: "Present continuous = is/are + verb-ing for something happening now. 'She is reading' has is plus -ing, so it is the one." },
    { q: "Which sentence uses the past tense?", a: "He walked to school.", choices: ["He walked to school.", "He is walking to school.", "He walks to school."], explain: "The simple past tense tells about something already finished and often ends in -ed. 'He walked' is finished, so it is past." },
    { q: "Which sentence uses the past continuous tense?", a: "They were playing football.", choices: ["They were playing football.", "They play football.", "They played football."], explain: "Past continuous = was/were + verb-ing, for something going on over a time in the past. 'They were playing' fits that pattern." },
    { q: "She __ (dance) on stage right now.", a: "is dancing", choices: ["is dancing", "danced", "was dancing"], explain: "The words 'right now' mean it is happening now, so use present continuous: is/are + verb-ing, giving is dancing." },
    { q: "Yesterday at 5pm, I __ (do) my homework.", a: "was doing", choices: ["was doing", "am doing", "is doing"], explain: "It was in the past and lasted a while, so use past continuous: was/were + verb-ing. The answer is was doing." },
    { q: "Look! The birds __ (fly) in the sky.", a: "are flying", choices: ["are flying", "flew", "were flying"], explain: "'Look!' means it is happening now, so use present continuous: is/are + verb-ing. With 'birds' we say are flying." },
    { q: "He __ (eat) breakfast when the phone rang.", a: "was eating", choices: ["was eating", "is eating", "eats"], explain: "An action already in progress when another past thing happened uses past continuous: was/were + verb-ing, so was eating." },
    { q: "Which sentence uses the present tense?", a: "I drink milk every day.", choices: ["I drink milk every day.", "I am drinking milk.", "I was drinking milk."], explain: "The simple present tells about things we do regularly, often with 'every day'. 'I drink milk every day' is present tense." },
    { q: "Right now, we __ (learn) about tenses.", a: "are learning", choices: ["are learning", "were learning", "learned"], explain: "'Right now' means it is happening at this moment, so use present continuous: is/are + verb-ing, giving are learning." },
    { q: "Last night, she __ (study) for her test.", a: "was studying", choices: ["was studying", "is studying", "studies"], explain: "'Last night' is in the past and the action lasted a while, so use past continuous: was/were + verb-ing, was studying." },
    { q: "Which sentence uses the past continuous?", a: "We were eating dinner.", choices: ["We were eating dinner.", "We eat dinner.", "We are eating dinner."], explain: "Past continuous = was/were + verb-ing, for an action over a time in the past. 'We were eating' matches that pattern." },
    { q: "The children __ (run) in the field now.", a: "are running", choices: ["are running", "were running", "ran"], explain: "The word 'now' means it is happening at this moment, so use present continuous: is/are + verb-ing, giving are running." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
