import { shuffle } from "../../utils/helpers";

export const P5_COMPREHENSION_INTRO = {
  "p5e-cp1": {
    title: "Comprehension",
    pages: [
      { text: "Read the passage first, then answer the questions. Look for clues in the text!", emoji: "📖 → ❓" },
      { text: "Some questions ask what is STATED. Others ask you to INFER — read between the lines.", emoji: "🔍 🧠" },
    ],
  },
};

function buildP5eCp1() {
  const passage1 = "Passage: Every Saturday, Ravi and his father would visit the neighbourhood park. While his father jogged, Ravi would sit under the old rain tree and read. One Saturday, he noticed an injured bird near the bench. He carefully wrapped it in his jacket and brought it home. Over the next few weeks, Ravi nursed the bird back to health. When it was strong enough, he released it at the park. The bird circled once above him before flying away.";
  const passage2 = "Passage: Mrs Lee had been teaching at Greenfield Primary School for twenty years. She was known for her patience and her love of Science. When the school decided to start a garden, Mrs Lee volunteered to lead the project. She taught her students how to plant vegetables, water them, and keep a garden journal. By the end of the term, the garden was full of tomatoes, kangkong, and chilli. The students were proud of what they had grown.";
  const p1Qs = shuffle([
    { q: "What did Ravi usually do at the park?", p: passage1, a: "Read under the rain tree", choices: ["Read under the rain tree", "Jog with his father", "Play football"] },
    { q: "How did Ravi help the bird?", p: passage1, a: "He wrapped it in his jacket and nursed it at home", choices: ["He wrapped it in his jacket and nursed it at home", "He left it at the park", "He called the vet"] },
    { q: "What can you infer about Ravi's character?", p: passage1, a: "He is kind and responsible", choices: ["He is kind and responsible", "He is careless", "He dislikes animals"] },
    { q: "Why did the bird circle above Ravi before flying away?", p: passage1, a: "It was a way of saying goodbye or thank you", choices: ["It was a way of saying goodbye or thank you", "It was lost", "It wanted more food"] },
    { q: "The word 'nursed' in the passage means?", p: passage1, a: "Took care of", choices: ["Took care of", "Fed medicine to", "Watched over from far"] },
  ]);
  const p2Qs = shuffle([
    { q: "How long had Mrs Lee been teaching?", p: passage2, a: "Twenty years", choices: ["Twenty years", "Ten years", "Thirty years"] },
    { q: "What subject did Mrs Lee love?", p: passage2, a: "Science", choices: ["Science", "English", "Mathematics"] },
    { q: "What did Mrs Lee teach her students to keep?", p: passage2, a: "A garden journal", choices: ["A garden journal", "A diary", "A pet"] },
    { q: "What vegetables grew in the garden?", p: passage2, a: "Tomatoes, kangkong, and chilli", choices: ["Tomatoes, kangkong, and chilli", "Carrots, beans, and corn", "Lettuce and cucumber"] },
    { q: "What is the main message of this passage?", p: passage2, a: "Hands-on learning helps students feel proud and engaged", choices: ["Hands-on learning helps students feel proud and engaged", "Science is the most important subject", "Gardening is easy"] },
  ]);
  const groups = Math.random() < 0.5 ? [p1Qs, p2Qs] : [p2Qs, p1Qs];
  return [...groups[0], ...groups[1]].map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), passage: item.p }));
}

const BUILDERS = { "p5e-cp1": buildP5eCp1 };
export const P5_COMPREHENSION5_QUESTION_COUNTS = { "p5e-cp1": 10 };
export function buildComprehension5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
