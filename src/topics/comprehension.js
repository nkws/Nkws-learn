function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildCp1() {
  const passage = "Tom goes to school every day. He likes to read books. His best friend is Sam.";
  return shuffle([
    { q: `${passage}\n\nWho goes to school every day?`, a: "Tom", choices: ["Tom", "Sam", "Mum"] },
    { q: `${passage}\n\nWhat does Tom like to do?`, a: "Read books", choices: ["Read books", "Play football", "Draw pictures"] },
    { q: `${passage}\n\nWho is Tom's best friend?`, a: "Sam", choices: ["Sam", "Tom", "Dad"] },
    { q: `${passage}\n\nWhere does Tom go every day?`, a: "School", choices: ["School", "Park", "Shop"] },
    { q: `${passage}\n\nHow often does Tom go to school?`, a: "Every day", choices: ["Every day", "Sometimes", "Never"] },
    { q: `${passage}\n\nWhat does Tom like to read?`, a: "Books", choices: ["Books", "Letters", "Comics"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCp2() {
  const passage = "Lily went to the park with her mum. She played on the swings. Then she ate an ice cream.";
  return shuffle([
    { q: `${passage}\n\nWho went to the park?`, a: "Lily", choices: ["Lily", "Tom", "Sam"] },
    { q: `${passage}\n\nWho did Lily go with?`, a: "Her mum", choices: ["Her mum", "Her dad", "Her friend"] },
    { q: `${passage}\n\nWhat did Lily play on?`, a: "The swings", choices: ["The swings", "The slide", "The sand"] },
    { q: `${passage}\n\nWhat did Lily eat?`, a: "Ice cream", choices: ["Ice cream", "Cake", "Bread"] },
    { q: `${passage}\n\nWhere did Lily go?`, a: "The park", choices: ["The park", "The school", "The shop"] },
    { q: `${passage}\n\nWhat did Lily do after playing on the swings?`, a: "Ate ice cream", choices: ["Ate ice cream", "Went home", "Played again"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCp3() {
  const passage = "Ben has a big family. He has one sister and two brothers. They all love to play together.";
  return shuffle([
    { q: `${passage}\n\nHow many sisters does Ben have?`, a: "One", choices: ["One", "Two", "Three"] },
    { q: `${passage}\n\nHow many brothers does Ben have?`, a: "Two", choices: ["Two", "One", "Three"] },
    { q: `${passage}\n\nWhat kind of family does Ben have?`, a: "A big family", choices: ["A big family", "A small family", "A sad family"] },
    { q: `${passage}\n\nWhat do they all love to do?`, a: "Play together", choices: ["Play together", "Read books", "Watch TV"] },
    { q: `${passage}\n\nWho has a big family?`, a: "Ben", choices: ["Ben", "Sam", "Lily"] },
    { q: `${passage}\n\nHow many children are in Ben's family including Ben?`, a: "Four", choices: ["Four", "Three", "Two"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCp4() {
  const passage = "Amy went to the pet shop. She saw birds, fish and rabbits. She chose a small white rabbit.";
  return shuffle([
    { q: `${passage}\n\nWhere did Amy go?`, a: "The pet shop", choices: ["The pet shop", "The park", "The school"] },
    { q: `${passage}\n\nWhat animals did Amy see?`, a: "Birds, fish and rabbits", choices: ["Birds, fish and rabbits", "Dogs and cats", "Horses and cows"] },
    { q: `${passage}\n\nWhat did Amy choose?`, a: "A rabbit", choices: ["A rabbit", "A bird", "A fish"] },
    { q: `${passage}\n\nWhat colour was the rabbit?`, a: "White", choices: ["White", "Brown", "Black"] },
    { q: `${passage}\n\nWhat size was the rabbit?`, a: "Small", choices: ["Small", "Big", "Medium"] },
    { q: `${passage}\n\nWho went to the pet shop?`, a: "Amy", choices: ["Amy", "Ben", "Tom"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const COMPREHENSION_BUILDERS = {
  "cp-1": buildCp1,
  "cp-2": buildCp2,
  "cp-3": buildCp3,
  "cp-4": buildCp4,
};

export const COMPREHENSION_QUESTION_COUNTS = {
  "cp-1": 6, "cp-2": 6, "cp-3": 6, "cp-4": 6,
};

export function buildComprehensionQuestions(moduleId) {
  const builder = COMPREHENSION_BUILDERS[moduleId];
  return builder ? builder() : [];
}
