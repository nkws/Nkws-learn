import { shuffle } from "../../utils/helpers";

export const P6_COMPREHENSION_INTRO = {
  "p6e-cp1": {
    title: "Comprehension",
    pages: [
      { text: "Read the passage FIRST, then answer questions. Many answers are hidden in the text!", emoji: "📖 → ❓" },
      { text: "For inference questions, look for clues — the answer won't be stated directly, but you can work it out from the context.", emoji: "🔍 🧠" },
      { text: "For vocabulary-in-context, choose the meaning that fits THIS passage — not just any meaning of the word.", emoji: "📝 🎯" },
    ],
  },
};

function buildP6eCp1() {
  const passage1 = "Passage: Lina had always been afraid of the dark. One night, during a power outage, she heard a soft meowing from the garden. Despite her fear, she grabbed a torch and went outside. She found a tiny kitten shivering under a bush. From that night on, Lina was no longer afraid of the dark — she had a reason to be brave.";
  const passage2 = "Passage: Mr Tan's bakery had been in the neighbourhood for thirty years. When a large supermarket opened nearby, many customers stopped coming. Rather than give up, Mr Tan started baking special orders — birthday cakes and festival treats. Soon, people came from all over the island for his creations. The bakery survived because Mr Tan adapted.";
  const p1Qs = shuffle([
    { q: "Why did Lina go outside despite her fear?", p: passage1, a: "She heard a kitten meowing", choices: ["She heard a kitten meowing", "She wanted fresh air", "Her mother told her to"], explain: "Find the stated reason in the text. The passage says she 'heard a soft meowing from the garden' and then went outside, so the meowing is what drew her out." },
    { q: "What does the word 'shivering' suggest about the kitten?", p: passage1, a: "It was cold and scared", choices: ["It was cold and scared", "It was happy", "It was sleeping"], explain: "Vocabulary in context: read the clues around the word. The kitten is 'tiny' and hiding 'under a bush', so 'shivering' shows it was cold and frightened, not happy." },
    { q: "What can you infer about Lina at the end of the story?", p: passage1, a: "She became braver because she had something to care for", choices: ["She became braver because she had something to care for", "She was still afraid but hid it", "The power came back on"], explain: "Inference joins clues the text does not state outright. The line 'she had a reason to be brave' links her new courage to caring for the kitten." },
    { q: "What is the main message of this passage?", p: passage1, a: "Caring for others can help us overcome our fears", choices: ["Caring for others can help us overcome our fears", "Cats are good pets", "Power outages are dangerous"], explain: "The main message is the lesson the whole story builds towards. Lina's fear fades only once she has the kitten to protect, so caring for others helps us conquer fear." },
    { q: "'She grabbed a torch' — what does 'grabbed' tell us about how Lina acted?", p: passage1, a: "She acted quickly and decisively", choices: ["She acted quickly and decisively", "She was very careful", "She was relaxed"], explain: "A writer's word choice carries meaning. 'Grabbed' suggests a fast, sudden movement, telling us Lina acted quickly and decisively rather than slowly." },
  ]);
  const p2Qs = shuffle([
    { q: "Why did customers stop coming to Mr Tan's bakery?", p: passage2, a: "A large supermarket opened nearby", choices: ["A large supermarket opened nearby", "His bread quality dropped", "He raised his prices"], explain: "Look for the stated cause. The text says that 'When a large supermarket opened nearby, many customers stopped coming', so the supermarket is the reason." },
    { q: "What does 'adapted' mean in this passage?", p: passage2, a: "Changed his approach to suit the new situation", choices: ["Changed his approach to suit the new situation", "Gave up and closed the shop", "Moved to a new location"], explain: "Work out word meaning from the actions described. Mr Tan started baking special orders instead of giving up, so here 'adapted' means he changed his approach to suit the new situation." },
    { q: "How did Mr Tan save his bakery?", p: passage2, a: "He started making special orders like birthday cakes", choices: ["He started making special orders like birthday cakes", "He lowered all his prices", "He advertised on television"], explain: "The answer is stated directly. The passage says he 'started baking special orders — birthday cakes and festival treats', which is how the bakery survived." },
    { q: "What can you infer about Mr Tan's character?", p: passage2, a: "He is resourceful and does not give up easily", choices: ["He is resourceful and does not give up easily", "He is lucky and things work out for him", "He does not care about his customers"], explain: "Inference reads character from actions. 'Rather than give up' he found a clever new plan, showing he is resourceful and determined, not merely lucky." },
    { q: "'People came from all over the island' suggests that Mr Tan's bakery became?", p: passage2, a: "Famous beyond the neighbourhood", choices: ["Famous beyond the neighbourhood", "The only bakery on the island", "A supermarket competitor"], explain: "Infer from the clue. If customers travelled 'from all over the island', word of his bakery had spread far, so it became famous well beyond its own neighbourhood." },
  ]);
  const groups = Math.random() < 0.5 ? [p1Qs, p2Qs] : [p2Qs, p1Qs];
  return [...groups[0], ...groups[1]].map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), passage: item.p, explain: item.explain }));
}

const BUILDERS = { "p6e-cp1": buildP6eCp1 };
export const P6_COMPREHENSION_QUESTION_COUNTS = { "p6e-cp1": 10 };
export function buildComprehension6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
