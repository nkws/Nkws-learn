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
    { q: "Friction is a force that?", a: "Opposes motion and slows things down", choices: ["Opposes motion and slows things down", "Speeds things up", "Only works in water"], explain: "Friction acts between two surfaces that rub together, always pushing against the direction of movement. Because it opposes motion, it slows a moving object down." },
    { q: "Which surface produces more friction?", a: "A rough surface", choices: ["A rough surface", "A smooth surface", "A wet surface"], explain: "The bumpier two surfaces are, the more they catch on each other as they rub. So a rough surface produces more friction than a smooth one, gripping harder against motion." },
    { q: "Gravitational force pulls objects?", a: "Toward the centre of the Earth", choices: ["Toward the centre of the Earth", "Away from Earth", "Sideways"], explain: "Gravity is the pull the Earth has on every object, always acting downward toward the Earth's centre. That is why things fall down and not sideways or up." },
    { q: "Weight is?", a: "The pull of gravity on an object", choices: ["The pull of gravity on an object", "The amount of matter in an object", "How big something is"], explain: "Weight is a force: it is how strongly gravity pulls on an object, measured in newtons. It is not the amount of stuff in the object, which is mass." },
    { q: "Mass and weight are?", a: "Different — mass is the amount of matter, weight is the gravitational pull", choices: ["Different — mass is the amount of matter, weight is the gravitational pull", "The same thing", "Both measured in grams"], explain: "Mass is the amount of matter in an object and never changes. Weight is the gravitational pull on that mass, so weight changes where gravity is weaker, like the Moon." },
    { q: "A ball rolling on grass stops because of?", a: "Friction", choices: ["Friction", "Gravity", "Wind"], explain: "As the ball rolls, it rubs against the grass. This friction acts against the motion and gradually takes away the ball's speed until it stops." },
    { q: "When you stretch a rubber band, it pulls back because of?", a: "Elastic spring force", choices: ["Elastic spring force", "Friction", "Magnetic force"], explain: "Stretchy materials store energy when pulled and try to return to their original shape. This elastic spring force pulls the rubber band back when you let go." },
    { q: "Friction can be useful for?", a: "Helping us grip and walk without slipping", choices: ["Helping us grip and walk without slipping", "Making cars go faster", "Reducing weight"], explain: "Friction is not always bad. Because it resists sliding, the grip between our feet and the ground stops us slipping, letting us walk, run and hold things." },
    { q: "An apple falls from a tree because of?", a: "Gravitational force", choices: ["Gravitational force", "Magnetic force", "Friction"], explain: "Once nothing holds it up, the only force pulling the apple is the Earth's gravity, acting downward. That gravitational pull makes it fall to the ground." },
    { q: "Streamlined shapes reduce?", a: "Friction with air or water", choices: ["Friction with air or water", "Weight", "Gravity"], explain: "A smooth, pointed shape lets air or water slide past easily instead of dragging against it. This cuts the friction with air or water, helping the object move faster." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6sFc2() {
  return shuffle([
    { q: "Adding oil to a machine reduces?", a: "Friction between moving parts", choices: ["Friction between moving parts", "The machine's weight", "Gravitational force"], explain: "Oil makes surfaces slippery so they slide past each other more easily. This reduces the friction between moving parts, so the machine wears out less and moves smoothly." },
    { q: "Shoes with rough soles help us?", a: "Increase friction so we don't slip", choices: ["Increase friction so we don't slip", "Walk faster", "Reduce gravity"], explain: "Rough soles grip the ground better because bumpy surfaces create more friction. This extra grip stops our feet sliding, so we don't slip when we walk." },
    { q: "A parachute slows a person down by?", a: "Increasing air resistance (friction with air)", choices: ["Increasing air resistance (friction with air)", "Reducing gravity", "Increasing weight"], explain: "A parachute opens into a large surface that pushes against a lot of air. This air resistance is friction with air, acting upward against the fall to slow the person down." },
    { q: "Which has less friction?", a: "Rolling a ball on a smooth floor", choices: ["Rolling a ball on a smooth floor", "Dragging a box on carpet", "Rubbing sandpaper together"], explain: "Friction is smaller when surfaces are smooth and when something rolls rather than drags. A ball rolling on a smooth floor meets far less friction than dragging or rubbing rough surfaces." },
    { q: "Weight is measured in?", a: "Newtons (N)", choices: ["Newtons (N)", "Grams (g)", "Metres (m)"], explain: "Weight is a force, the pull of gravity, and all forces are measured in newtons. So we record weight in newtons, while the amount of matter, mass, uses grams." },
    { q: "Mass is measured in?", a: "Grams or kilograms", choices: ["Grams or kilograms", "Newtons", "Litres"], explain: "Mass is the amount of matter in an object, measured in grams or kilograms. Newtons measure force such as weight, so they are used for weight, not mass." },
    { q: "On the Moon, your mass would?", a: "Stay the same", choices: ["Stay the same", "Increase", "Decrease to zero"], explain: "Mass is the amount of matter in you, and moving to the Moon does not add or remove any matter. So your mass stays exactly the same wherever you go." },
    { q: "On the Moon, your weight would?", a: "Decrease because the Moon has less gravity", choices: ["Decrease because the Moon has less gravity", "Stay the same", "Increase"], explain: "Weight depends on how strong gravity is. The Moon's gravity is weaker than Earth's, so it pulls on you less, making your weight smaller even though your mass is unchanged." },
    { q: "A spring balance measures?", a: "Weight (force of gravity)", choices: ["Weight (force of gravity)", "Mass", "Volume"], explain: "A spring balance works by how much an object pulls the spring down, which is the force of gravity on it. So it measures weight, a force, rather than mass." },
    { q: "When a car brakes, friction between the tyres and road helps?", a: "Slow the car down", choices: ["Slow the car down", "Speed the car up", "Lift the car"], explain: "Braking presses the tyres harder against the road, raising the friction. Because friction opposes motion, this gripping force slows the car down and helps it stop." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6s-fc1": buildP6sFc1, "p6s-fc2": buildP6sFc2 };
export const P6_FORCES_QUESTION_COUNTS = { "p6s-fc1": 10, "p6s-fc2": 10 };
export function buildForcesQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
