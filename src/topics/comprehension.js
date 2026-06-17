import { shuffle } from "../utils/helpers";
// ============ QUESTION BANKS ============

function buildCp1() {
  const passage = "Tom goes to school every day. He likes to read books. His best friend is Sam.";
  return shuffle([
    { q: `${passage}\n\nWho goes to school every day?`, a: "Tom", choices: ["Tom", "Sam", "Mum"], explain: "Look back at the first line. It says 'Tom goes to school every day', so the person who goes is named right there." },
    { q: `${passage}\n\nWhat does Tom like to do?`, a: "Read books", choices: ["Read books", "Play football", "Draw pictures"], explain: "Find the line that says what Tom likes. The story tells us 'He likes to read books', so that is what he likes to do." },
    { q: `${passage}\n\nWho is Tom's best friend?`, a: "Sam", choices: ["Sam", "Tom", "Dad"], explain: "Look at the last line. It says 'His best friend is Sam', so the story tells us the friend's name." },
    { q: `${passage}\n\nWhere does Tom go every day?`, a: "School", choices: ["School", "Park", "Shop"], explain: "The first line says 'Tom goes to school every day'. The word 'school' tells us the place he goes." },
    { q: `${passage}\n\nHow often does Tom go to school?`, a: "Every day", choices: ["Every day", "Sometimes", "Never"], explain: "Look for the words about time. The story says he goes 'every day', so that tells us how often." },
    { q: `${passage}\n\nWhat does Tom like to read?`, a: "Books", choices: ["Books", "Letters", "Comics"], explain: "The story says 'He likes to read books'. The word 'books' tells us exactly what he reads." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildCp2() {
  const passage = "Lily went to the park with her mum. She played on the swings. Then she ate an ice cream.";
  return shuffle([
    { q: `${passage}\n\nWho went to the park?`, a: "Lily", choices: ["Lily", "Tom", "Sam"], explain: "Look at the first line. It says 'Lily went to the park', so the story tells us who went." },
    { q: `${passage}\n\nWho did Lily go with?`, a: "Her mum", choices: ["Her mum", "Her dad", "Her friend"], explain: "The first line says she went 'with her mum', so the story tells us who went along with her." },
    { q: `${passage}\n\nWhat did Lily play on?`, a: "The swings", choices: ["The swings", "The slide", "The sand"], explain: "Find the line about playing. The story says 'She played on the swings', so that is what she played on." },
    { q: `${passage}\n\nWhat did Lily eat?`, a: "Ice cream", choices: ["Ice cream", "Cake", "Bread"], explain: "The last line says 'she ate an ice cream', so the story tells us what she ate." },
    { q: `${passage}\n\nWhere did Lily go?`, a: "The park", choices: ["The park", "The school", "The shop"], explain: "The first line says she 'went to the park'. The word 'park' tells us the place she went." },
    { q: `${passage}\n\nWhat did Lily do after playing on the swings?`, a: "Ate ice cream", choices: ["Ate ice cream", "Went home", "Played again"], explain: "The word 'then' shows what came next. After the swings the story says 'she ate an ice cream'." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildCp3() {
  const passage = "Ben has a big family. He has one sister and two brothers. They all love to play together.";
  return shuffle([
    { q: `${passage}\n\nHow many sisters does Ben have?`, a: "One", choices: ["One", "Two", "Three"], explain: "Look at the second line. It says Ben has 'one sister', so the story tells us the number." },
    { q: `${passage}\n\nHow many brothers does Ben have?`, a: "Two", choices: ["Two", "One", "Three"], explain: "Look at the second line. It says Ben has 'two brothers', so the story tells us the number." },
    { q: `${passage}\n\nWhat kind of family does Ben have?`, a: "A big family", choices: ["A big family", "A small family", "A sad family"], explain: "The first line says 'Ben has a big family', so the story uses the word 'big' to describe it." },
    { q: `${passage}\n\nWhat do they all love to do?`, a: "Play together", choices: ["Play together", "Read books", "Watch TV"], explain: "Look at the last line. It says 'They all love to play together', so that is what they love to do." },
    { q: `${passage}\n\nWho has a big family?`, a: "Ben", choices: ["Ben", "Sam", "Lily"], explain: "The first line names the person: 'Ben has a big family', so the story tells us who." },
    { q: `${passage}\n\nHow many children are in Ben's family including Ben?`, a: "Four", choices: ["Four", "Three", "Two"], explain: "Count from the story: one sister and two brothers make three, plus Ben himself makes four children in all." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildCp4() {
  const passage = "Amy went to the pet shop. She saw birds, fish and rabbits. She chose a small white rabbit.";
  return shuffle([
    { q: `${passage}\n\nWhere did Amy go?`, a: "The pet shop", choices: ["The pet shop", "The park", "The school"], explain: "Look at the first line. It says 'Amy went to the pet shop', so the story tells us the place." },
    { q: `${passage}\n\nWhat animals did Amy see?`, a: "Birds, fish and rabbits", choices: ["Birds, fish and rabbits", "Dogs and cats", "Horses and cows"], explain: "The second line lists them: 'She saw birds, fish and rabbits', so those are the animals she saw." },
    { q: `${passage}\n\nWhat did Amy choose?`, a: "A rabbit", choices: ["A rabbit", "A bird", "A fish"], explain: "The last line says 'She chose a small white rabbit', so the story tells us she picked the rabbit." },
    { q: `${passage}\n\nWhat colour was the rabbit?`, a: "White", choices: ["White", "Brown", "Black"], explain: "The last line describes it as 'a small white rabbit', so the colour word in the story is white." },
    { q: `${passage}\n\nWhat size was the rabbit?`, a: "Small", choices: ["Small", "Big", "Medium"], explain: "The last line calls it 'a small white rabbit', so the size word in the story is small." },
    { q: `${passage}\n\nWho went to the pet shop?`, a: "Amy", choices: ["Amy", "Ben", "Tom"], explain: "The first line names the person: 'Amy went to the pet shop', so the story tells us who went." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
