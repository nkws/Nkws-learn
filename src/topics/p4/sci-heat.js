import { shuffle } from "../../utils/helpers";

export const P4_HEAT_INTRO = {
  "p4s-ht1": {
    title: "Heat Energy",
    pages: [
      {
        text: "Heat is a form of energy. It always flows from a hotter object to a cooler object — never the other way around!",
        emoji: "🔥 ➡️ 🧊",
      },
      {
        text: "Temperature tells us how hot or cold something is. We measure it in degrees Celsius (°C) using a thermometer.",
        emoji: "🌡️ 📏",
      },
      {
        text: "Some materials let heat pass through easily — these are conductors, like metals. Others block heat — these are insulators, like wood and plastic.",
        emoji: "🥄 ✅ 🪵 ❌",
      },
    ],
  },
};

// Module 1: Heat and Temperature
function buildP4sHt1() {
  return shuffle([
    { q: "Heat always flows from?", a: "A hotter object to a cooler object", choices: ["A hotter object to a cooler object", "A cooler object to a hotter object", "Any direction"] },
    { q: "What do we use to measure temperature?", a: "A thermometer", choices: ["A thermometer", "A balance", "A measuring cylinder"] },
    { q: "Temperature is measured in?", a: "Degrees Celsius (°C)", choices: ["Degrees Celsius (°C)", "Grams (g)", "Millilitres (mL)"] },
    { q: "Which of these is a source of heat?", a: "The Sun", choices: ["The Sun", "The Moon", "A mirror"] },
    { q: "When you hold a cup of hot water, heat flows from?", a: "The cup to your hand", choices: ["The cup to your hand", "Your hand to the cup", "Both directions equally"] },
    { q: "A metal spoon in hot soup feels hot because?", a: "Heat flows from the soup through the spoon", choices: ["Heat flows from the soup through the spoon", "The spoon makes its own heat", "Cold flows out of the spoon"] },
    { q: "Heat and temperature are?", a: "Different — heat is energy, temperature is a measurement", choices: ["Different — heat is energy, temperature is a measurement", "The same thing", "Both measured in grams"] },
    { q: "Can cold flow from one object to another?", a: "No, only heat flows", choices: ["No, only heat flows", "Yes, cold flows from cold to hot", "Yes, in winter"] },
    { q: "Rubbing your hands together produces heat through?", a: "Friction", choices: ["Friction", "Electricity", "Sunlight"] },
    { q: "Which produces heat?", a: "A burning candle", choices: ["A burning candle", "A mirror", "A shadow"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

// Module 2: Conductors and Insulators
function buildP4sHt2() {
  return shuffle([
    { q: "A good conductor of heat is?", a: "Metal", choices: ["Metal", "Wood", "Plastic"] },
    { q: "A good insulator of heat is?", a: "Wood", choices: ["Wood", "Iron", "Copper"] },
    { q: "Why are cooking pots made of metal?", a: "Metal conducts heat well to cook the food", choices: ["Metal conducts heat well to cook the food", "Metal is an insulator", "Metal is lighter"] },
    { q: "Why are pot handles often made of plastic or wood?", a: "They are insulators that prevent heat from burning your hand", choices: ["They are insulators that prevent heat from burning your hand", "They conduct heat better", "They are cheaper"] },
    { q: "Which of these is a conductor of heat?", a: "Aluminium", choices: ["Aluminium", "Rubber", "Cloth"] },
    { q: "Which of these is an insulator of heat?", a: "Air", choices: ["Air", "Steel", "Copper"] },
    { q: "A woollen sweater keeps you warm because?", a: "Wool traps air, which is a good insulator", choices: ["Wool traps air, which is a good insulator", "Wool produces heat", "Wool is a conductor of heat"] },
    { q: "Is all metal a good conductor of heat?", a: "Yes, all metals conduct heat well", choices: ["Yes, all metals conduct heat well", "No, only iron", "No, only copper"] },
    { q: "A thermos flask keeps drinks hot by?", a: "Reducing heat loss using insulating materials", choices: ["Reducing heat loss using insulating materials", "Adding more heat", "Using metal walls only"] },
    { q: "Ice cream melts faster in a metal bowl than a plastic bowl because?", a: "Metal conducts heat from the surroundings to the ice cream faster", choices: ["Metal conducts heat from the surroundings to the ice cream faster", "Plastic makes ice cream colder", "Metal is heavier"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

// Module 3: Expansion and Contraction
function buildP4sHt3() {
  return shuffle([
    { q: "When matter is heated, it?", a: "Expands", choices: ["Expands", "Contracts", "Stays the same"] },
    { q: "When matter is cooled, it?", a: "Contracts", choices: ["Contracts", "Expands", "Disappears"] },
    { q: "Why are gaps left between railway tracks?", a: "To allow space for expansion when heated", choices: ["To allow space for expansion when heated", "To save metal", "To let rain through"] },
    { q: "A thermometer works because the liquid inside?", a: "Expands when heated and contracts when cooled", choices: ["Expands when heated and contracts when cooled", "Changes colour", "Becomes a gas"] },
    { q: "A tight metal lid on a glass jar can be loosened by?", a: "Running hot water over the lid to make it expand", choices: ["Running hot water over the lid to make it expand", "Putting it in the freezer", "Hitting it hard"] },
    { q: "Telephone wires sag more in hot weather because?", a: "The wires expand and become longer", choices: ["The wires expand and become longer", "The poles shrink", "The wind pushes them down"] },
    { q: "Which state of matter expands the most when heated?", a: "Gas", choices: ["Gas", "Solid", "Liquid"] },
    { q: "A balloon left in the sun gets bigger because?", a: "The air inside expands when heated", choices: ["The air inside expands when heated", "More air enters the balloon", "The rubber grows"] },
    { q: "Bridges have expansion joints to?", a: "Allow the bridge to expand and contract safely", choices: ["Allow the bridge to expand and contract safely", "Let cars drive faster", "Save building materials"] },
    { q: "When a metal ball is heated, it?", a: "Gets slightly bigger", choices: ["Gets slightly bigger", "Gets smaller", "Changes shape completely"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const HEAT_BUILDERS = {
  "p4s-ht1": buildP4sHt1,
  "p4s-ht2": buildP4sHt2,
  "p4s-ht3": buildP4sHt3,
};

export const P4_HEAT_QUESTION_COUNTS = {
  "p4s-ht1": 10, "p4s-ht2": 10, "p4s-ht3": 10,
};

export function buildHeatQuestions(moduleId) {
  const builder = HEAT_BUILDERS[moduleId];
  return builder ? builder() : [];
}
