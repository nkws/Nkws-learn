import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP3eCp1() {
  const passage = "It was Science Fair day at Greenfield School. Emma made a volcano with baking soda and vinegar. When she poured the vinegar in, the volcano erupted with fizzy foam! The judges gave Emma first prize. She was so proud that she showed her ribbon to everyone.";
  return shuffle([
    { q: `${passage}\n\nWhat event was happening at Greenfield School?`, a: "Science Fair", choices: ["Science Fair", "Sports Day", "Art Show"], explain: "Look for the answer in the passage. The first line says it was Science Fair day at the school, so that is the event." },
    { q: `${passage}\n\nWhat did Emma make for the Science Fair?`, a: "A volcano", choices: ["A volcano", "A robot", "A poster"], explain: "Find the detail in the text. It tells us Emma made a volcano with baking soda and vinegar, so that is what she made." },
    { q: `${passage}\n\nWhat did Emma pour into the volcano?`, a: "Vinegar", choices: ["Vinegar", "Water", "Juice"], explain: "The passage says she poured the vinegar in. Always pick the answer the text actually states, not one you guess." },
    { q: `${passage}\n\nWhat happened when the vinegar was poured in?`, a: "Fizzy foam erupted", choices: ["Fizzy foam erupted", "Nothing happened", "It exploded loudly"], explain: "The text says the volcano erupted with fizzy foam. Match your answer to the words in the passage." },
    { q: `${passage}\n\nWhat prize did Emma get?`, a: "First prize", choices: ["First prize", "Second prize", "Third prize"], explain: "The passage says the judges gave Emma first prize, so that is the one to choose." },
    { q: `${passage}\n\nHow did Emma feel about winning?`, a: "Proud", choices: ["Proud", "Sad", "Scared"], explain: "Feelings questions need a clue from the text. It says she was so proud she showed her ribbon to everyone." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3eCp2() {
  const passage = "Last Saturday, Aiden and his family visited the zoo. They saw lions, elephants and penguins. Aiden liked the penguins best because they waddled in a funny way. His sister Maya preferred the elephants because they were so big. After lunch, they watched a seal show.";
  return shuffle([
    { q: `${passage}\n\nWhen did Aiden visit the zoo?`, a: "Last Saturday", choices: ["Last Saturday", "Last Sunday", "Yesterday"], explain: "Find the time word in the text. The passage opens with 'Last Saturday', so that tells you when they went." },
    { q: `${passage}\n\nWhich animal did Aiden like best?`, a: "Penguins", choices: ["Penguins", "Lions", "Elephants"], explain: "The passage says Aiden liked the penguins best. Pick the animal the text names, not just any animal mentioned." },
    { q: `${passage}\n\nWhy did Aiden like the penguins?`, a: "They waddled in a funny way", choices: ["They waddled in a funny way", "They were very big", "They could fly"], explain: "A 'why' question needs the reason from the text. It says he liked them because they waddled in a funny way." },
    { q: `${passage}\n\nWhich animal did Maya prefer?`, a: "Elephants", choices: ["Elephants", "Penguins", "Lions"], explain: "Read carefully who likes what. The text says his sister Maya preferred the elephants because they were so big." },
    { q: `${passage}\n\nWhat did they watch after lunch?`, a: "A seal show", choices: ["A seal show", "A bird show", "A lion show"], explain: "Look for the word 'after lunch' in the text. It says they watched a seal show, so that is the answer." },
    { q: `${passage}\n\nWho went to the zoo with Aiden?`, a: "His family", choices: ["His family", "His friends", "His teacher"], explain: "The first line says Aiden and his family visited the zoo, so he went with his family." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3eCp3() {
  const passage = "A new student named Ravi joined Class 3B on Monday. He was quiet and sat alone at lunch. Mei noticed and invited him to sit with her group. They talked about their favourite games and found out they both loved playing chess. By Friday, Ravi and Mei were good friends.";
  return shuffle([
    { q: `${passage}\n\nWhen did Ravi join the class?`, a: "Monday", choices: ["Monday", "Tuesday", "Friday"], explain: "Find the day named in the text. It says Ravi joined Class 3B on Monday, so Monday is when he started." },
    { q: `${passage}\n\nWhat class did Ravi join?`, a: "Class 3B", choices: ["Class 3B", "Class 3A", "Class 2B"], explain: "The passage tells you the exact class. It says he joined Class 3B, so copy that detail from the text." },
    { q: `${passage}\n\nWhat did Ravi do at lunch at first?`, a: "Sat alone", choices: ["Sat alone", "Played outside", "Read a book"], explain: "The word 'at first' means the start. The text says he was quiet and sat alone at lunch." },
    { q: `${passage}\n\nWho invited Ravi to sit with her group?`, a: "Mei", choices: ["Mei", "Tom", "Emma"], explain: "Look for who did the inviting. The text says Mei noticed and invited him to sit with her group." },
    { q: `${passage}\n\nWhat game did both Ravi and Mei enjoy?`, a: "Chess", choices: ["Chess", "Football", "Basketball"], explain: "The text says they both loved playing chess, so chess is the game they shared." },
    { q: `${passage}\n\nBy Friday, what had happened between Ravi and Mei?`, a: "They were good friends", choices: ["They were good friends", "They stopped talking", "They moved classes"], explain: "The last line says by Friday they were good friends, so that is what happened by then." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3eCp4() {
  const passage = "On Wednesday, Zara could not find her lunchbox. She looked in her bag and under her desk, but it was not there. Her friend Jake helped her search the classroom. They finally found it on the shelf near the door. Zara was relieved and thanked Jake for his help.";
  return shuffle([
    { q: `${passage}\n\nWhat day did Zara lose her lunchbox?`, a: "Wednesday", choices: ["Wednesday", "Thursday", "Monday"], explain: "Find the day in the text. It begins 'On Wednesday', so that is the day she could not find her lunchbox." },
    { q: `${passage}\n\nWhere did Zara first look for her lunchbox?`, a: "In her bag and under her desk", choices: ["In her bag and under her desk", "On the shelf", "In the canteen"], explain: "The word 'first' means where she looked at the start. The text says she looked in her bag and under her desk." },
    { q: `${passage}\n\nWho helped Zara search?`, a: "Jake", choices: ["Jake", "Mei", "Ravi"], explain: "Look for who helped. The passage says her friend Jake helped her search the classroom." },
    { q: `${passage}\n\nWhere was the lunchbox found?`, a: "On the shelf near the door", choices: ["On the shelf near the door", "Under the desk", "In her bag"], explain: "The text says they finally found it on the shelf near the door, so that is where it was." },
    { q: `${passage}\n\nHow did Zara feel when she found her lunchbox?`, a: "Relieved", choices: ["Relieved", "Angry", "Sad"], explain: "Feeling questions need a clue from the text. It says Zara was relieved when the lunchbox was found." },
    { q: `${passage}\n\nWhat did Zara do after finding her lunchbox?`, a: "Thanked Jake", choices: ["Thanked Jake", "Went home", "Cried"], explain: "Look for what happened after. The last line says she thanked Jake for his help." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
