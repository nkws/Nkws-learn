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
    { q: "What is the correct order of organs in the digestive system?", a: "Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine", choices: ["Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine", "Mouth → Stomach → Oesophagus → Large Intestine → Small Intestine", "Stomach → Mouth → Small Intestine → Oesophagus → Large Intestine"], explain: "Food travels one way through a tube: the mouth chews, the oesophagus pushes it down, the stomach churns it, the small intestine absorbs nutrients, and the large intestine takes back water last." },
    { q: "What happens in the mouth?", a: "Teeth break food into smaller pieces and saliva begins digestion", choices: ["Teeth break food into smaller pieces and saliva begins digestion", "Food is absorbed into the blood", "Water is removed from food"], explain: "The mouth is where digestion starts: teeth grind food into small bits and saliva begins breaking it down, so the rest of the gut has an easier job." },
    { q: "What is the function of the oesophagus?", a: "Pushes food from the mouth to the stomach", choices: ["Pushes food from the mouth to the stomach", "Digests food with acid", "Absorbs nutrients"], explain: "The oesophagus is just a connecting tube. Its muscles squeeze to push food down to the stomach, but no digesting or absorbing happens there." },
    { q: "Does digestion happen in the oesophagus?", a: "No", choices: ["No", "Yes", "Only for liquids"], explain: "Digestion only happens in the mouth, stomach, and small intestine. The oesophagus simply transports food, so no breaking-down occurs there." },
    { q: "The stomach produces digestive juices and?", a: "Churns food into smaller pieces", choices: ["Churns food into smaller pieces", "Absorbs all nutrients", "Stores food permanently"], explain: "The stomach is a muscular bag. It mixes food with digestive juices and churns it into a mushy paste, but nutrients are absorbed later in the small intestine." },
    { q: "Why does the stomach have a mucus lining?", a: "To protect it from stomach acid", choices: ["To protect it from stomach acid", "To make food taste better", "To absorb water"], explain: "The stomach makes strong acid to break down food and kill germs. The mucus lining acts like a shield so the acid does not damage the stomach itself." },
    { q: "Where is most digestion completed and nutrients absorbed?", a: "Small intestine", choices: ["Small intestine", "Large intestine", "Stomach"], explain: "The small intestine is where digestion finishes and the useful nutrients pass into the blood. Its long folded lining gives lots of surface to absorb them." },
    { q: "What is the main function of the large intestine?", a: "Absorb water from undigested food", choices: ["Absorb water from undigested food", "Digest proteins", "Break down food with acid"], explain: "By the large intestine the nutrients are already absorbed. Its job is to soak up water from the leftover waste, leaving solid waste to be removed." },
    { q: "Does digestion happen in the large intestine?", a: "No", choices: ["No", "Yes", "Only for fats"], explain: "Digestion is finished by the time food reaches the large intestine. It only absorbs water from the waste, so no further breaking-down of food happens there." },
    { q: "Why are teeth important for digestion?", a: "They break food into smaller pieces for digestive juices to act on", choices: ["They break food into smaller pieces for digestive juices to act on", "They add vitamins to food", "They kill bacteria"], explain: "Small pieces have more surface for digestive juices to work on, so chewing well with your teeth makes the rest of digestion faster and easier." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

// Module 2: Digestion Concepts
function buildP4sDg2() {
  return shuffle([
    { q: "Saliva in the mouth contains?", a: "Digestive juices that begin breaking down food", choices: ["Digestive juices that begin breaking down food", "Stomach acid", "Blood cells"], explain: "Digestion starts in the mouth. Saliva is a digestive juice that begins breaking food down even before you swallow, while teeth chew it smaller." },
    { q: "Stomach acid helps to?", a: "Break down food and kill germs", choices: ["Break down food and kill germs", "Cool down food", "Add flavour to food"], explain: "The stomach makes strong acid for two jobs: it helps break food down further, and it kills many germs swallowed with the food." },
    { q: "The small intestine has folds and finger-like structures to?", a: "Increase the surface area for absorbing nutrients", choices: ["Increase the surface area for absorbing nutrients", "Slow down food movement", "Store food longer"], explain: "More surface means more room to absorb. The folds and finger-like bumps greatly increase the surface area so nutrients pass quickly into the blood." },
    { q: "After the large intestine absorbs water, the remaining waste is?", a: "Expelled from the body", choices: ["Expelled from the body", "Sent back to the stomach", "Turned into energy"], explain: "The large intestine soaks up water from the leftovers, leaving solid waste. The body cannot use this waste, so it is passed out at the end." },
    { q: "In which THREE organs does digestion occur?", a: "Mouth, Stomach, Small Intestine", choices: ["Mouth, Stomach, Small Intestine", "Oesophagus, Stomach, Large Intestine", "Mouth, Oesophagus, Stomach"], explain: "Digestion needs juices or churning, which only the mouth, stomach, and small intestine provide. The oesophagus just transports and the large intestine only absorbs water." },
    { q: "Food moves through the oesophagus by?", a: "Muscular contractions pushing it along", choices: ["Muscular contractions pushing it along", "Gravity only", "The person drinking water"], explain: "The oesophagus has muscles in its walls that squeeze in waves to push food down, so swallowing works even when you are lying down, not just by gravity." },
    { q: "Nutrients absorbed in the small intestine are carried to the body by?", a: "Blood", choices: ["Blood", "Air", "Saliva"], explain: "Once nutrients pass through the small intestine wall, the blood carries them around the body to every part that needs energy and materials to grow." },
    { q: "Why do we need to chew food well?", a: "Smaller pieces are easier for digestive juices to break down", choices: ["Smaller pieces are easier for digestive juices to break down", "It makes food taste better", "It removes germs"], explain: "Smaller pieces have more surface for digestive juices to act on, so chewing well helps the stomach and small intestine break food down faster." },
    { q: "Which organ absorbs NUTRIENTS from digested food?", a: "Small intestine", choices: ["Small intestine", "Large intestine", "Oesophagus"], explain: "Nutrients are the useful parts of food. They are absorbed in the small intestine, whose long folded lining is built to pass them into the blood." },
    { q: "Which organ absorbs WATER from undigested food?", a: "Large intestine", choices: ["Large intestine", "Small intestine", "Stomach"], explain: "After nutrients are absorbed earlier, the large intestine takes back the water from the leftover waste so the body does not lose too much fluid." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
