import { shuffle } from "../../utils/helpers";

export const P4_COMPREHENSION_INTRO = {
  "p4e-cp1": {
    title: "Comprehension",
    pages: [
      { text: "Read the passage carefully, then answer questions about what you read.", emoji: "📖 → ❓" },
      { text: "Look for clues in the text. Some answers are stated directly, some need you to think!", emoji: "🔍 🧠" },
    ],
  },
};

function buildP4eCp1() {
  const passage1 = "Passage: Mei Ling loved visiting her grandmother every weekend. Grandmother's house was in a quiet kampong near the sea. Mei Ling would help her grandmother water the plants in the morning. In the afternoon, they would sit on the veranda and Grandmother would tell stories about the old days in Singapore. Mei Ling's favourite story was about the bumboats on the Singapore River.";
  const passage2 = "Passage: Class 4B was excited about their upcoming Science project. Their teacher, Mr Kumar, asked each group to build a model of the water cycle. Ahmad's group used a plastic box, cling wrap, ice and warm water. When they shone a lamp on the warm water, tiny droplets formed on the cling wrap — just like clouds! Mr Kumar praised them for their creativity.";
  const p1Qs = shuffle([
    { q: "How often did Mei Ling visit her grandmother?", p: passage1, a: "Every weekend", choices: ["Every weekend", "Every day", "Once a month"], explain: "Find the detail stated directly in the text. The passage says Mei Ling 'loved visiting her grandmother every weekend', so the answer is every weekend." },
    { q: "Where was Grandmother's house?", p: passage1, a: "In a quiet kampong near the sea", choices: ["In a quiet kampong near the sea", "In the city centre", "Near a school"], explain: "Scan for the place named in the passage. It states Grandmother's house 'was in a quiet kampong near the sea', which matches the answer word for word." },
    { q: "What did Mei Ling help with in the morning?", p: passage1, a: "Watering the plants", choices: ["Watering the plants", "Cooking breakfast", "Cleaning the house"], explain: "Look for the action tied to 'in the morning'. The text says she 'would help her grandmother water the plants in the morning', so watering the plants is correct." },
    { q: "What was Mei Ling's favourite story about?", p: passage1, a: "Bumboats on the Singapore River", choices: ["Bumboats on the Singapore River", "Fishing in the sea", "Animals in the kampong"], explain: "Match the detail in the text. It states her 'favourite story was about the bumboats on the Singapore River', naming the answer directly." },
    { q: "What can you tell about the relationship between Mei Ling and her grandmother?", p: passage1, a: "They are close and enjoy spending time together", choices: ["They are close and enjoy spending time together", "They rarely see each other", "Mei Ling is bored at Grandmother's house"], explain: "This needs inference from clues. She visits every weekend, helps with plants and listens to stories — all signs they are close and enjoy their time together." },
  ]);
  const p2Qs = shuffle([
    { q: "What project did Mr Kumar assign?", p: passage2, a: "Build a model of the water cycle", choices: ["Build a model of the water cycle", "Write a Science essay", "Draw a poster about rain"], explain: "Find the task stated in the text. It says Mr Kumar 'asked each group to build a model of the water cycle', which is the answer exactly." },
    { q: "What materials did Ahmad's group use?", p: passage2, a: "Plastic box, cling wrap, ice and warm water", choices: ["Plastic box, cling wrap, ice and warm water", "Cardboard and paint", "A fish tank and rocks"], explain: "List the items named in the passage. It says the group 'used a plastic box, cling wrap, ice and warm water', so that exact list is correct." },
    { q: "What happened when they shone a lamp on the warm water?", p: passage2, a: "Tiny droplets formed on the cling wrap", choices: ["Tiny droplets formed on the cling wrap", "The water froze", "The plastic box melted"], explain: "Look for the result described in the text. It says when they shone a lamp, 'tiny droplets formed on the cling wrap', which is the stated outcome." },
    { q: "The droplets were like?", p: passage2, a: "Clouds", choices: ["Clouds", "Rain", "Snow"], explain: "The passage compares the droplets directly. It says they formed 'just like clouds', so the text tells us the answer is clouds." },
    { q: "Why did Mr Kumar praise Ahmad's group?", p: passage2, a: "For their creativity", choices: ["For their creativity", "For being the fastest", "For writing the best report"], explain: "Find the reason given in the text. It says 'Mr Kumar praised them for their creativity', stating the reason directly." },
  ]);
  const groups = Math.random() < 0.5 ? [p1Qs, p2Qs] : [p2Qs, p1Qs];
  return [...groups[0], ...groups[1]].map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), passage: item.p, explain: item.explain }));
}

const BUILDERS = { "p4e-cp1": buildP4eCp1 };
export const P4_COMPREHENSION4_QUESTION_COUNTS = { "p4e-cp1": 10 };
export function buildComprehension4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
