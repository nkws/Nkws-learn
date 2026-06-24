import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP2eCp1() {
  const passage = "It was Mei's birthday. She had a party at home. Her friends came and they played games. Mum made a big chocolate cake.";
  return shuffle([
    { q: `${passage}\n\nWhose birthday was it?`, a: "Mei", choices: ["Mei", "Mum", "Her friend"], explain: "Look for the answer in the story. It says 'It was Mei's birthday', so the answer is Mei." },
    { q: `${passage}\n\nWhere was the party?`, a: "At home", choices: ["At home", "At school", "At the park"], explain: "The story says 'She had a party at home', so the answer is at home." },
    { q: `${passage}\n\nWhat did the friends do at the party?`, a: "Played games", choices: ["Played games", "Watched TV", "Read books"], explain: "The story tells us 'they played games', so that is what the friends did." },
    { q: `${passage}\n\nWho made the cake?`, a: "Mum", choices: ["Mum", "Mei", "Her friend"], explain: "We find the answer in the words 'Mum made a big chocolate cake', so the answer is Mum." },
    { q: `${passage}\n\nWhat kind of cake was it?`, a: "Chocolate cake", choices: ["Chocolate cake", "Vanilla cake", "Strawberry cake"], explain: "The story says it was a 'big chocolate cake', so the cake was chocolate." },
    { q: `${passage}\n\nWhat food did Mum prepare for the party?`, a: "A big chocolate cake", choices: ["A big chocolate cake", "Pizza and sandwiches", "Cupcakes and juice"], explain: "The story says 'Mum made a big chocolate cake', so the food she prepared was a big chocolate cake." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2eCp2() {
  const passage = "It was raining outside. Ali could not go to the park. He stayed at home and drew pictures. His sister read a book beside him.";
  return shuffle([
    { q: `${passage}\n\nWhat was the weather like?`, a: "It was raining", choices: ["It was raining", "It was sunny", "It was windy"], explain: "The story begins 'It was raining outside', so that tells us the weather." },
    { q: `${passage}\n\nWhy could Ali not go to the park?`, a: "It was raining", choices: ["It was raining", "He was sick", "The park was closed"], explain: "The story says it was raining, and that is why Ali could not go to the park." },
    { q: `${passage}\n\nWhat did Ali do at home?`, a: "Drew pictures", choices: ["Drew pictures", "Watched TV", "Played games"], explain: "The story says Ali 'drew pictures', so that is what he did at home." },
    { q: `${passage}\n\nWho read a book?`, a: "His sister", choices: ["His sister", "Ali", "His mum"], explain: "The story says 'His sister read a book', so the answer is his sister." },
    { q: `${passage}\n\nWhere did Ali stay?`, a: "At home", choices: ["At home", "At school", "At the shop"], explain: "The story says Ali 'stayed at home', so the answer is at home." },
    { q: `${passage}\n\nWhere was his sister?`, a: "Beside him", choices: ["Beside him", "In her room", "At school"], explain: "The story says his sister read a book 'beside him', so that is where she was." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2eCp3() {
  const passage = "Sam found a small puppy in the garden. It was brown and white. He gave it some water and food. Dad helped him put up signs around the neighbourhood.";
  return shuffle([
    { q: `${passage}\n\nWhere did Sam find the puppy?`, a: "In the garden", choices: ["In the garden", "At the park", "On the road"], explain: "The story says Sam found the puppy 'in the garden', so that is where he found it." },
    { q: `${passage}\n\nWhat colour was the puppy?`, a: "Brown and white", choices: ["Brown and white", "Black and white", "All brown"], explain: "The story says 'It was brown and white', so those are the puppy's colours." },
    { q: `${passage}\n\nWhat did Sam give the puppy?`, a: "Water and food", choices: ["Water and food", "A toy", "A blanket"], explain: "The story says he 'gave it some water and food', so that is what Sam gave the puppy." },
    { q: `${passage}\n\nWho helped Sam?`, a: "Dad", choices: ["Dad", "Mum", "His friend"], explain: "The story says 'Dad helped him', so the answer is Dad." },
    { q: `${passage}\n\nWhat did they put up?`, a: "Signs", choices: ["Signs", "Posters", "Balloons"], explain: "The story says they 'put up signs', so the answer is signs." },
    { q: `${passage}\n\nWhy did Sam and Dad put up signs?`, a: "To find the puppy's owner", choices: ["To find the puppy's owner", "To show it was their puppy", "To warn people about the dog"], explain: "Sam found a puppy and wanted to help it. Putting up signs around the neighbourhood is a way to find the owner so the puppy can go home." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

const COMPREHENSION2_BUILDERS = {
  "p2e-cp1": buildP2eCp1,
  "p2e-cp2": buildP2eCp2,
  "p2e-cp3": buildP2eCp3,
};

export const P2_COMPREHENSION2_QUESTION_COUNTS = {
  "p2e-cp1": 6, "p2e-cp2": 6, "p2e-cp3": 6,
};

export function buildComprehension2Questions(moduleId) {
  const builder = COMPREHENSION2_BUILDERS[moduleId];
  return builder ? builder() : [];
}
