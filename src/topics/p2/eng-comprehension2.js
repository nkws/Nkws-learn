function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildP2eCp1() {
  const passage = "It was Mei's birthday. She had a party at home. Her friends came and they played games. Mum made a big chocolate cake.";
  return shuffle([
    { q: `${passage}\n\nWhose birthday was it?`, a: "Mei", choices: ["Mei", "Mum", "Her friend"] },
    { q: `${passage}\n\nWhere was the party?`, a: "At home", choices: ["At home", "At school", "At the park"] },
    { q: `${passage}\n\nWhat did the friends do at the party?`, a: "Played games", choices: ["Played games", "Watched TV", "Read books"] },
    { q: `${passage}\n\nWho made the cake?`, a: "Mum", choices: ["Mum", "Mei", "Her friend"] },
    { q: `${passage}\n\nWhat kind of cake was it?`, a: "Chocolate cake", choices: ["Chocolate cake", "Vanilla cake", "Strawberry cake"] },
    { q: `${passage}\n\nHow big was the cake?`, a: "Big", choices: ["Big", "Small", "Tiny"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2eCp2() {
  const passage = "It was raining outside. Ali could not go to the park. He stayed at home and drew pictures. His sister read a book beside him.";
  return shuffle([
    { q: `${passage}\n\nWhat was the weather like?`, a: "It was raining", choices: ["It was raining", "It was sunny", "It was windy"] },
    { q: `${passage}\n\nWhy could Ali not go to the park?`, a: "It was raining", choices: ["It was raining", "He was sick", "The park was closed"] },
    { q: `${passage}\n\nWhat did Ali do at home?`, a: "Drew pictures", choices: ["Drew pictures", "Watched TV", "Played games"] },
    { q: `${passage}\n\nWho read a book?`, a: "His sister", choices: ["His sister", "Ali", "His mum"] },
    { q: `${passage}\n\nWhere did Ali stay?`, a: "At home", choices: ["At home", "At school", "At the shop"] },
    { q: `${passage}\n\nWhere was his sister?`, a: "Beside him", choices: ["Beside him", "In her room", "At school"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2eCp3() {
  const passage = "Sam found a small puppy in the garden. It was brown and white. He gave it some water and food. Dad helped him put up signs around the neighbourhood.";
  return shuffle([
    { q: `${passage}\n\nWhere did Sam find the puppy?`, a: "In the garden", choices: ["In the garden", "At the park", "On the road"] },
    { q: `${passage}\n\nWhat colour was the puppy?`, a: "Brown and white", choices: ["Brown and white", "Black and white", "All brown"] },
    { q: `${passage}\n\nWhat did Sam give the puppy?`, a: "Water and food", choices: ["Water and food", "A toy", "A blanket"] },
    { q: `${passage}\n\nWho helped Sam?`, a: "Dad", choices: ["Dad", "Mum", "His friend"] },
    { q: `${passage}\n\nWhat did they put up?`, a: "Signs", choices: ["Signs", "Posters", "Balloons"] },
    { q: `${passage}\n\nWhat size was the puppy?`, a: "Small", choices: ["Small", "Big", "Medium"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
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
