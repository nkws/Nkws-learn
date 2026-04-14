import { shuffle } from "../../utils/helpers";

export const P4_DIGESTION_INTRO = {
  "p4s-dg1": {
    title: "The Digestive System",
    pages: [
      {
        text: "The digestive system breaks down the food we eat into tiny pieces so our body can use them for energy and growth!",
        emoji: "🍎 ➡️ 💪",
      },
      {
        text: "Food travels through: Mouth, Oesophagus (gullet), Stomach, Small Intestine, then Large Intestine.",
        emoji: "👄 ➡️ 🫃 ➡️ 🔄",
      },
      {
        text: "Digestion happens in the mouth, stomach, and small intestine. No digestion happens in the oesophagus or large intestine!",
        emoji: "✅ 👄 ✅ 🫃 ❌ 🔽",
      },
    ],
  },
};

// Module 1: Organs and Their Functions
function buildP4sDg1() {
  return shuffle([
    { q: "What is the correct order of organs in the digestive system?", a: "Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine", choices: ["Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine", "Mouth → Stomach → Oesophagus → Large Intestine → Small Intestine", "Stomach → Mouth → Small Intestine → Oesophagus → Large Intestine"] },
    { q: "What happens in the mouth?", a: "Teeth break food into smaller pieces and saliva begins digestion", choices: ["Teeth break food into smaller pieces and saliva begins digestion", "Food is absorbed into the blood", "Water is removed from food"] },
    { q: "What is the function of the oesophagus?", a: "Pushes food from the mouth to the stomach", choices: ["Pushes food from the mouth to the stomach", "Digests food with acid", "Absorbs nutrients"] },
    { q: "Does digestion happen in the oesophagus?", a: "No", choices: ["No", "Yes", "Only for liquids"] },
    { q: "The stomach produces digestive juices and?", a: "Churns food into smaller pieces", choices: ["Churns food into smaller pieces", "Absorbs all nutrients", "Stores food permanently"] },
    { q: "Why does the stomach have a mucus lining?", a: "To protect it from stomach acid", choices: ["To protect it from stomach acid", "To make food taste better", "To absorb water"] },
    { q: "Where is most digestion completed and nutrients absorbed?", a: "Small intestine", choices: ["Small intestine", "Large intestine", "Stomach"] },
    { q: "What is the main function of the large intestine?", a: "Absorb water from undigested food", choices: ["Absorb water from undigested food", "Digest proteins", "Break down food with acid"] },
    { q: "Does digestion happen in the large intestine?", a: "No", choices: ["No", "Yes", "Only for fats"] },
    { q: "Why are teeth important for digestion?", a: "They break food into smaller pieces for digestive juices to act on", choices: ["They break food into smaller pieces for digestive juices to act on", "They add vitamins to food", "They kill bacteria"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

// Module 2: Digestion Concepts
function buildP4sDg2() {
  return shuffle([
    { q: "Saliva in the mouth contains?", a: "Digestive juices that begin breaking down food", choices: ["Digestive juices that begin breaking down food", "Stomach acid", "Blood cells"] },
    { q: "Stomach acid helps to?", a: "Break down food and kill germs", choices: ["Break down food and kill germs", "Cool down food", "Add flavour to food"] },
    { q: "The small intestine has folds and finger-like structures to?", a: "Increase the surface area for absorbing nutrients", choices: ["Increase the surface area for absorbing nutrients", "Slow down food movement", "Store food longer"] },
    { q: "After the large intestine absorbs water, the remaining waste is?", a: "Expelled from the body", choices: ["Expelled from the body", "Sent back to the stomach", "Turned into energy"] },
    { q: "In which THREE organs does digestion occur?", a: "Mouth, Stomach, Small Intestine", choices: ["Mouth, Stomach, Small Intestine", "Oesophagus, Stomach, Large Intestine", "Mouth, Oesophagus, Stomach"] },
    { q: "Food moves through the oesophagus by?", a: "Muscular contractions pushing it along", choices: ["Muscular contractions pushing it along", "Gravity only", "The person drinking water"] },
    { q: "Nutrients absorbed in the small intestine are carried to the body by?", a: "Blood", choices: ["Blood", "Air", "Saliva"] },
    { q: "Why do we need to chew food well?", a: "Smaller pieces are easier for digestive juices to break down", choices: ["Smaller pieces are easier for digestive juices to break down", "It makes food taste better", "It removes germs"] },
    { q: "Which organ absorbs NUTRIENTS from digested food?", a: "Small intestine", choices: ["Small intestine", "Large intestine", "Oesophagus"] },
    { q: "Which organ absorbs WATER from undigested food?", a: "Large intestine", choices: ["Large intestine", "Small intestine", "Stomach"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const DIGESTION_BUILDERS = {
  "p4s-dg1": buildP4sDg1,
  "p4s-dg2": buildP4sDg2,
};

export const P4_DIGESTION_QUESTION_COUNTS = {
  "p4s-dg1": 10, "p4s-dg2": 10,
};

export function buildDigestionQuestions(moduleId) {
  const builder = DIGESTION_BUILDERS[moduleId];
  return builder ? builder() : [];
}
