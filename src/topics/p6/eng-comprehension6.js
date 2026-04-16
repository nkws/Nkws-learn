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
  return shuffle([
    { q: `${passage1} Why did Lina go outside despite her fear?`, a: "She heard a kitten meowing", choices: ["She heard a kitten meowing", "She wanted fresh air", "Her mother told her to"] },
    { q: `${passage1} What does the word 'shivering' suggest about the kitten?`, a: "It was cold and scared", choices: ["It was cold and scared", "It was happy", "It was sleeping"] },
    { q: `${passage1} What can you infer about Lina at the end of the story?`, a: "She became braver because she had something to care for", choices: ["She became braver because she had something to care for", "She was still afraid but hid it", "The power came back on"] },
    { q: `${passage1} What is the main message of this passage?`, a: "Caring for others can help us overcome our fears", choices: ["Caring for others can help us overcome our fears", "Cats are good pets", "Power outages are dangerous"] },
    { q: `${passage1} 'She grabbed a torch' — what does 'grabbed' tell us about how Lina acted?`, a: "She acted quickly and decisively", choices: ["She acted quickly and decisively", "She was very careful", "She was relaxed"] },
    { q: `${passage2} Why did customers stop coming to Mr Tan's bakery?`, a: "A large supermarket opened nearby", choices: ["A large supermarket opened nearby", "His bread quality dropped", "He raised his prices"] },
    { q: `${passage2} What does 'adapted' mean in this passage?`, a: "Changed his approach to suit the new situation", choices: ["Changed his approach to suit the new situation", "Gave up and closed the shop", "Moved to a new location"] },
    { q: `${passage2} How did Mr Tan save his bakery?`, a: "He started making special orders like birthday cakes", choices: ["He started making special orders like birthday cakes", "He lowered all his prices", "He advertised on television"] },
    { q: `${passage2} What can you infer about Mr Tan's character?`, a: "He is resourceful and does not give up easily", choices: ["He is resourceful and does not give up easily", "He is lucky and things work out for him", "He does not care about his customers"] },
    { q: `${passage2} 'People came from all over the island' suggests that Mr Tan's bakery became?`, a: "Famous beyond the neighbourhood", choices: ["Famous beyond the neighbourhood", "The only bakery on the island", "A supermarket competitor"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6e-cp1": buildP6eCp1 };
export const P6_COMPREHENSION_QUESTION_COUNTS = { "p6e-cp1": 10 };
export function buildComprehension6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
