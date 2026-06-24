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
    { q: "Heat always flows from?", a: "A hotter object to a cooler object", choices: ["A hotter object to a cooler object", "A cooler object to a hotter object", "Any direction"], explain: "Heat is energy that always moves from hotter to colder, never the other way. It keeps flowing until both objects reach the same temperature." },
    { q: "What do we use to measure temperature?", a: "A thermometer", choices: ["A thermometer", "A balance", "A measuring cylinder"], explain: "Temperature tells how hot or cold something is, and a thermometer is the tool made to measure it. A balance measures mass and a cylinder measures volume." },
    { q: "Temperature is measured in?", a: "Degrees Celsius (°C)", choices: ["Degrees Celsius (°C)", "Grams (g)", "Millilitres (mL)"], explain: "Temperature is measured in degrees Celsius. Grams measure mass and millilitres measure volume, so they answer a different kind of question." },
    { q: "Which of these is a source of heat?", a: "The Sun", choices: ["The Sun", "The Moon", "A mirror"], explain: "A heat source makes its own heat. The Sun does, but the Moon and a mirror only reflect, so they give out no heat of their own." },
    { q: "When you hold a cup of hot water, heat flows from?", a: "The cup to your hand", choices: ["The cup to your hand", "Your hand to the cup", "Both directions equally"], explain: "Heat flows from hotter to colder. The hot cup is warmer than your hand, so heat moves into your hand, which is why it feels warm." },
    { q: "A metal spoon in hot soup feels hot because?", a: "Heat flows from the soup through the spoon", choices: ["Heat flows from the soup through the spoon", "The spoon makes its own heat", "Cold flows out of the spoon"], explain: "Metal is a good conductor, so heat from the hot soup flows along the spoon to your hand. The spoon does not make its own heat." },
    { q: "Heat and temperature are?", a: "Different — heat is energy, temperature is a measurement", choices: ["Different — heat is energy, temperature is a measurement", "The same thing", "Both measured in grams"], explain: "Heat is a form of energy that flows between objects, while temperature is the measurement of how hot or cold something is. They are linked but not the same." },
    { q: "Can cold flow from one object to another?", a: "No, only heat flows", choices: ["No, only heat flows", "Yes, cold flows from cold to hot", "Yes, in winter"], explain: "Cold is not a thing that flows; it is just less heat. Only heat moves, going from the hotter object to the colder one." },
    { q: "Rubbing your hands together produces heat through?", a: "Friction", choices: ["Friction", "Electricity", "Sunlight"], explain: "When surfaces rub against each other, the friction turns movement energy into heat. That is why rubbing your hands quickly makes them warm." },
    { q: "Which produces heat?", a: "A burning candle", choices: ["A burning candle", "A mirror", "A shadow"], explain: "A heat source makes its own heat, like a burning candle. A mirror only reflects and a shadow is just a dark area, so neither produces heat." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

// Module 2: Conductors and Insulators
function buildP4sHt2() {
  return shuffle([
    { q: "A good conductor of heat is?", a: "Metal", choices: ["Metal", "Wood", "Plastic"], explain: "A conductor lets heat pass through it easily. Metals do this well, which is why metal feels cold quickly and carries heat fast, unlike wood or plastic." },
    { q: "A good insulator of heat is?", a: "Wood", choices: ["Wood", "Iron", "Copper"], explain: "An insulator blocks heat from passing through. Wood is an insulator, while iron and copper are metals that conduct heat easily." },
    { q: "Why are cooking pots made of metal?", a: "Metal conducts heat well to cook the food", choices: ["Metal conducts heat well to cook the food", "Metal is an insulator", "Metal is lighter"], explain: "Cooking needs heat to pass quickly from the stove to the food. Metal is a good conductor, so it carries that heat through to cook the food." },
    { q: "Why are pot handles often made of plastic or wood?", a: "They are insulators that prevent heat from burning your hand", choices: ["They are insulators that prevent heat from burning your hand", "They conduct heat better", "They are cheaper"], explain: "Plastic and wood are insulators, so heat does not pass through them easily. The handle stays cool enough to hold without burning your hand." },
    { q: "Which of these is a conductor of heat?", a: "Aluminium", choices: ["Aluminium", "Rubber", "Cloth"], explain: "Conductors let heat through easily, and metals like aluminium do this well. Rubber and cloth are insulators that block heat." },
    { q: "Which of these is an insulator of heat?", a: "Air", choices: ["Air", "Steel", "Copper"], explain: "Insulators block heat from passing through. Still air is a good insulator, while metals like steel and copper are conductors." },
    { q: "A woollen sweater keeps you warm because?", a: "Wool traps air, which is a good insulator", choices: ["Wool traps air, which is a good insulator", "Wool produces heat", "Wool is a conductor of heat"], explain: "Wool does not make heat; it traps a layer of air. Trapped air is a good insulator, so it slows your body heat from escaping and keeps you warm." },
    { q: "Is all metal a good conductor of heat?", a: "Yes, all metals conduct heat well", choices: ["Yes, all metals conduct heat well", "No, only iron", "No, only copper"], explain: "Metals as a group conduct heat well, which is why we treat all metals as good conductors and choose them whenever heat needs to pass through quickly." },
    { q: "A thermos flask keeps drinks hot by?", a: "Reducing heat loss using insulating materials", choices: ["Reducing heat loss using insulating materials", "Adding more heat", "Using metal walls only"], explain: "A thermos cannot make heat. It uses insulating materials to slow heat from escaping, so a hot drink stays hot for much longer." },
    { q: "Ice cream melts faster in a metal bowl than a plastic bowl because?", a: "Metal conducts heat from the surroundings to the ice cream faster", choices: ["Metal conducts heat from the surroundings to the ice cream faster", "Plastic makes ice cream colder", "Metal is heavier"], explain: "Heat flows from the warmer surroundings to the cold ice cream. Metal conducts that heat in quickly, so the ice cream melts faster than in plastic." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

// Module 3: Expansion and Contraction
function buildP4sHt3() {
  return shuffle([
    { q: "When matter is heated, it?", a: "Expands", choices: ["Expands", "Contracts", "Stays the same"], explain: "Heating makes the tiny particles move more and spread apart, so the material takes up more space. We call this expansion." },
    { q: "When matter is cooled, it?", a: "Contracts", choices: ["Contracts", "Expands", "Disappears"], explain: "Cooling makes the tiny particles move less and move closer together, so the material takes up less space. We call this contraction." },
    { q: "Why are gaps left between railway tracks?", a: "To allow space for expansion when heated", choices: ["To allow space for expansion when heated", "To save metal", "To let rain through"], explain: "Metal expands when heated by the Sun. The gaps give the rails room to grow longer, so they do not push together and bend out of shape." },
    { q: "A thermometer works because the liquid inside?", a: "Expands when heated and contracts when cooled", choices: ["Expands when heated and contracts when cooled", "Changes colour", "Becomes a gas"], explain: "The liquid expands and rises when warmed and contracts and falls when cooled. The level it reaches on the scale tells us the temperature." },
    { q: "A tight metal lid on a glass jar can be loosened by?", a: "Running hot water over the lid to make it expand", choices: ["Running hot water over the lid to make it expand", "Putting it in the freezer", "Hitting it hard"], explain: "Heat makes metal expand. Hot water warms the metal lid so it grows a little bigger and loosens its grip on the jar, making it easier to twist off." },
    { q: "Telephone wires sag more in hot weather because?", a: "The wires expand and become longer", choices: ["The wires expand and become longer", "The poles shrink", "The wind pushes them down"], explain: "In hot weather the metal wires are heated and expand, becoming longer. The extra length has nowhere to go, so the wires droop and sag more." },
    { q: "Which state of matter expands the most when heated?", a: "Gas", choices: ["Gas", "Solid", "Liquid"], explain: "All states expand when heated, but a gas expands the most because its particles are loose and free to spread far apart." },
    { q: "A balloon left in the sun gets bigger because?", a: "The air inside expands when heated", choices: ["The air inside expands when heated", "More air enters the balloon", "The rubber grows"], explain: "No new air enters a tied balloon. The Sun heats the trapped air, which expands and pushes outwards, so the balloon swells bigger." },
    { q: "Bridges have expansion joints to?", a: "Allow the bridge to expand and contract safely", choices: ["Allow the bridge to expand and contract safely", "Let cars drive faster", "Save building materials"], explain: "Bridges expand in heat and contract in cold. Expansion joints leave room for this change so the bridge does not crack or buckle." },
    { q: "When a metal ball is heated, it?", a: "Gets slightly bigger", choices: ["Gets slightly bigger", "Gets smaller", "Changes shape completely"], explain: "Heating makes the metal's particles spread apart, so the ball expands a little in every direction and gets slightly bigger without changing shape." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
