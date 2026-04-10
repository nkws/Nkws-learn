import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP3eCp1() {
  const passage = "It was Science Fair day at Greenfield School. Emma made a volcano with baking soda and vinegar. When she poured the vinegar in, the volcano erupted with fizzy foam! The judges gave Emma first prize. She was so proud that she showed her ribbon to everyone.";
  return shuffle([
    { q: `${passage}\n\nWhat event was happening at Greenfield School?`, a: "Science Fair", choices: ["Science Fair", "Sports Day", "Art Show"] },
    { q: `${passage}\n\nWhat did Emma make for the Science Fair?`, a: "A volcano", choices: ["A volcano", "A robot", "A poster"] },
    { q: `${passage}\n\nWhat did Emma pour into the volcano?`, a: "Vinegar", choices: ["Vinegar", "Water", "Juice"] },
    { q: `${passage}\n\nWhat happened when the vinegar was poured in?`, a: "Fizzy foam erupted", choices: ["Fizzy foam erupted", "Nothing happened", "It exploded loudly"] },
    { q: `${passage}\n\nWhat prize did Emma get?`, a: "First prize", choices: ["First prize", "Second prize", "Third prize"] },
    { q: `${passage}\n\nHow did Emma feel about winning?`, a: "Proud", choices: ["Proud", "Sad", "Scared"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3eCp2() {
  const passage = "Last Saturday, Aiden and his family visited the zoo. They saw lions, elephants and penguins. Aiden liked the penguins best because they waddled in a funny way. His sister Maya preferred the elephants because they were so big. After lunch, they watched a seal show.";
  return shuffle([
    { q: `${passage}\n\nWhen did Aiden visit the zoo?`, a: "Last Saturday", choices: ["Last Saturday", "Last Sunday", "Yesterday"] },
    { q: `${passage}\n\nWhich animal did Aiden like best?`, a: "Penguins", choices: ["Penguins", "Lions", "Elephants"] },
    { q: `${passage}\n\nWhy did Aiden like the penguins?`, a: "They waddled in a funny way", choices: ["They waddled in a funny way", "They were very big", "They could fly"] },
    { q: `${passage}\n\nWhich animal did Maya prefer?`, a: "Elephants", choices: ["Elephants", "Penguins", "Lions"] },
    { q: `${passage}\n\nWhat did they watch after lunch?`, a: "A seal show", choices: ["A seal show", "A bird show", "A lion show"] },
    { q: `${passage}\n\nWho went to the zoo with Aiden?`, a: "His family", choices: ["His family", "His friends", "His teacher"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3eCp3() {
  const passage = "A new student named Ravi joined Class 3B on Monday. He was quiet and sat alone at lunch. Mei noticed and invited him to sit with her group. They talked about their favourite games and found out they both loved playing chess. By Friday, Ravi and Mei were good friends.";
  return shuffle([
    { q: `${passage}\n\nWhen did Ravi join the class?`, a: "Monday", choices: ["Monday", "Tuesday", "Friday"] },
    { q: `${passage}\n\nWhat class did Ravi join?`, a: "Class 3B", choices: ["Class 3B", "Class 3A", "Class 2B"] },
    { q: `${passage}\n\nWhat did Ravi do at lunch at first?`, a: "Sat alone", choices: ["Sat alone", "Played outside", "Read a book"] },
    { q: `${passage}\n\nWho invited Ravi to sit with her group?`, a: "Mei", choices: ["Mei", "Tom", "Emma"] },
    { q: `${passage}\n\nWhat game did both Ravi and Mei enjoy?`, a: "Chess", choices: ["Chess", "Football", "Basketball"] },
    { q: `${passage}\n\nBy Friday, what had happened between Ravi and Mei?`, a: "They were good friends", choices: ["They were good friends", "They stopped talking", "They moved classes"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3eCp4() {
  const passage = "On Wednesday, Zara could not find her lunchbox. She looked in her bag and under her desk, but it was not there. Her friend Jake helped her search the classroom. They finally found it on the shelf near the door. Zara was relieved and thanked Jake for his help.";
  return shuffle([
    { q: `${passage}\n\nWhat day did Zara lose her lunchbox?`, a: "Wednesday", choices: ["Wednesday", "Thursday", "Monday"] },
    { q: `${passage}\n\nWhere did Zara first look for her lunchbox?`, a: "In her bag and under her desk", choices: ["In her bag and under her desk", "On the shelf", "In the canteen"] },
    { q: `${passage}\n\nWho helped Zara search?`, a: "Jake", choices: ["Jake", "Mei", "Ravi"] },
    { q: `${passage}\n\nWhere was the lunchbox found?`, a: "On the shelf near the door", choices: ["On the shelf near the door", "Under the desk", "In her bag"] },
    { q: `${passage}\n\nHow did Zara feel when she found her lunchbox?`, a: "Relieved", choices: ["Relieved", "Angry", "Sad"] },
    { q: `${passage}\n\nWhat did Zara do after finding her lunchbox?`, a: "Thanked Jake", choices: ["Thanked Jake", "Went home", "Cried"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const COMPREHENSION3_BUILDERS = {
  "p3e-cp1": buildP3eCp1,
  "p3e-cp2": buildP3eCp2,
  "p3e-cp3": buildP3eCp3,
  "p3e-cp4": buildP3eCp4,
};

export const P3_COMPREHENSION3_QUESTION_COUNTS = {
  "p3e-cp1": 6, "p3e-cp2": 6, "p3e-cp3": 6, "p3e-cp4": 6,
};

export function buildComprehension3Questions(moduleId) {
  const builder = COMPREHENSION3_BUILDERS[moduleId];
  return builder ? builder() : [];
}
