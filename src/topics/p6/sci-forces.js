import { shuffle } from "../../utils/helpers";

export const P6_FORCES_INTRO = {
  "p6s-fc1": {
    title: "Forces",
    pages: [
      { text: "A force is a push or pull that can change the speed, direction, or shape of an object!", emoji: "💪 ➡️ ⚽" },
      { text: "Friction slows things down. Gravity pulls everything toward the Earth. Elastic spring force pulls a stretched object back!", emoji: "🛑 ⬇️ 🔄" },
    ],
  },
};

function buildP6sFc1() {
  return shuffle([
    { q: "Friction is a force that?", a: "Opposes motion and slows things down", choices: ["Opposes motion and slows things down", "Speeds things up", "Only works in water"] },
    { q: "Which surface produces more friction?", a: "A rough surface", choices: ["A rough surface", "A smooth surface", "A wet surface"] },
    { q: "Gravitational force pulls objects?", a: "Toward the centre of the Earth", choices: ["Toward the centre of the Earth", "Away from Earth", "Sideways"] },
    { q: "Weight is?", a: "The pull of gravity on an object", choices: ["The pull of gravity on an object", "The amount of matter in an object", "How big something is"] },
    { q: "Mass and weight are?", a: "Different — mass is the amount of matter, weight is the gravitational pull", choices: ["Different — mass is the amount of matter, weight is the gravitational pull", "The same thing", "Both measured in grams"] },
    { q: "A ball rolling on grass stops because of?", a: "Friction", choices: ["Friction", "Gravity", "Wind"] },
    { q: "When you stretch a rubber band, it pulls back because of?", a: "Elastic spring force", choices: ["Elastic spring force", "Friction", "Magnetic force"] },
    { q: "Friction can be useful for?", a: "Helping us grip and walk without slipping", choices: ["Helping us grip and walk without slipping", "Making cars go faster", "Reducing weight"] },
    { q: "An apple falls from a tree because of?", a: "Gravitational force", choices: ["Gravitational force", "Magnetic force", "Friction"] },
    { q: "Streamlined shapes reduce?", a: "Friction with air or water", choices: ["Friction with air or water", "Weight", "Gravity"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6sFc2() {
  return shuffle([
    { q: "Adding oil to a machine reduces?", a: "Friction between moving parts", choices: ["Friction between moving parts", "The machine's weight", "Gravitational force"] },
    { q: "Shoes with rough soles help us?", a: "Increase friction so we don't slip", choices: ["Increase friction so we don't slip", "Walk faster", "Reduce gravity"] },
    { q: "A parachute slows a person down by?", a: "Increasing air resistance (friction with air)", choices: ["Increasing air resistance (friction with air)", "Reducing gravity", "Increasing weight"] },
    { q: "Which has less friction?", a: "Rolling a ball on a smooth floor", choices: ["Rolling a ball on a smooth floor", "Dragging a box on carpet", "Rubbing sandpaper together"] },
    { q: "Weight is measured in?", a: "Newtons (N)", choices: ["Newtons (N)", "Grams (g)", "Metres (m)"] },
    { q: "Mass is measured in?", a: "Grams or kilograms", choices: ["Grams or kilograms", "Newtons", "Litres"] },
    { q: "On the Moon, your mass would?", a: "Stay the same", choices: ["Stay the same", "Increase", "Decrease to zero"] },
    { q: "On the Moon, your weight would?", a: "Decrease because the Moon has less gravity", choices: ["Decrease because the Moon has less gravity", "Stay the same", "Increase"] },
    { q: "A spring balance measures?", a: "Weight (force of gravity)", choices: ["Weight (force of gravity)", "Mass", "Volume"] },
    { q: "When a car brakes, friction between the tyres and road helps?", a: "Slow the car down", choices: ["Slow the car down", "Speed the car up", "Lift the car"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6s-fc1": buildP6sFc1, "p6s-fc2": buildP6sFc2 };
export const P6_FORCES_QUESTION_COUNTS = { "p6s-fc1": 10, "p6s-fc2": 10 };
export function buildForcesQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
