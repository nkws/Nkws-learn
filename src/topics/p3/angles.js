import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P3_ANGLES_INTRO = {
  "p3m-an1": {
    title: "What is an Angle?",
    pages: [
      { text: "An angle is formed when two lines meet at a point.", emoji: "\u2196\ufe0f \u27a1\ufe0f" },
      { text: "We measure angles in degrees. A full turn is 360 degrees!", emoji: "\ud83d\udd04 = 360\u00b0" },
      { text: "A right angle is exactly 90 degrees. It looks like the corner of a book.", emoji: "\ud83d\udcd6 = 90\u00b0" },
      { text: "A square has 4 right angles \u2014 one in each corner!", emoji: "\u2b1c = 4 right angles" },
      { text: "Let's learn about different types of angles! You can do it!", emoji: "\ud83e\udda5 \ud83d\udcd0 = \ud83d\udcaa" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildAN1() {
  // What is an Angle?
  return shuffle([
    { q: "How many right angles in a square?", a: "4", choices: ["4", "2", "3"], explain: "A right angle is the square corner of a shape. A square has a corner like that at each of its 4 corners, so it has 4 right angles." },
    { q: "How many degrees is a right angle?", a: "90", choices: ["90", "180", "45"], explain: "A right angle is exactly 90 degrees. It is a quarter of a full turn, like the corner of a book or a window." },
    { q: "An angle is formed when two lines...?", a: "Meet at a point", choices: ["Meet at a point", "Are parallel", "Cross twice"], explain: "An angle is the amount of turn between two lines that meet at a point. Without a meeting point, there is no angle to measure." },
    { q: "How many degrees in a full turn?", a: "360", choices: ["360", "180", "90"], explain: "One full turn all the way around is 360 degrees. Spin right round to face the same way again and you have turned 360 degrees." },
    { q: "The corner of a book is what type of angle?", a: "Right angle", choices: ["Right angle", "Acute angle", "Obtuse angle"], explain: "A right angle is exactly 90 degrees, a perfect square corner. A book corner makes that neat L shape, so it is a right angle." },
    { q: "How many right angles in a rectangle?", a: "4", choices: ["4", "2", "6"], explain: "A right angle is a square corner of 90 degrees. A rectangle has a square corner at all 4 corners, so it has 4 right angles." },
    { q: "How many degrees in a half turn?", a: "180", choices: ["180", "90", "360"], explain: "A half turn is half of a full 360 degree turn, so it is 180 degrees. You end up facing the opposite way." },
    { q: "How many right angles does a triangle have at most?", a: "1", choices: ["1", "2", "3"], explain: "A triangle's three angles must add up to 180 degrees. Two right angles would already make 180, leaving nothing for the third, so a triangle can have at most 1 right angle." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildAN2() {
  // Types of Angles
  return shuffle([
    { q: "An angle less than 90 degrees is called?", a: "Acute", choices: ["Acute", "Obtuse", "Right"], explain: "We name angles by their size. An acute angle is smaller than a right angle of 90 degrees, so any angle under 90 is acute." },
    { q: "An angle greater than 90 degrees is called?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"], explain: "We name angles by their size. An obtuse angle is bigger than a right angle but still less than a straight 180, so any angle over 90 is obtuse." },
    { q: "An angle of exactly 90 degrees is called?", a: "Right angle", choices: ["Right angle", "Acute", "Obtuse"], explain: "An angle of exactly 90 degrees is a right angle, the perfect square corner. Smaller is acute, larger is obtuse." },
    { q: "An angle of 180 degrees is called?", a: "Straight angle", choices: ["Straight angle", "Right angle", "Reflex angle"], explain: "180 degrees is a half turn, so the two lines point opposite ways and form a straight line. That is why it is called a straight angle." },
    { q: "Is 45 degrees acute or obtuse?", a: "Acute", choices: ["Acute", "Obtuse", "Right"], explain: "Compare it to a right angle of 90 degrees. Since 45 is less than 90, the angle is acute." },
    { q: "Is 120 degrees acute or obtuse?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"], explain: "Compare it to a right angle of 90 degrees. Since 120 is more than 90 but less than 180, the angle is obtuse." },
    { q: "Is 89 degrees acute or obtuse?", a: "Acute", choices: ["Acute", "Obtuse", "Straight"], explain: "Compare it to a right angle of 90 degrees. 89 is just under 90, so the angle is still acute." },
    { q: "Is 91 degrees acute or obtuse?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"], explain: "Compare it to a right angle of 90 degrees. 91 is just over 90, so the angle is obtuse." },
    { q: "Which is the smallest: acute, right, or obtuse?", a: "Acute", choices: ["Acute", "Right", "Obtuse"], explain: "Angles grow from acute (under 90), to right (exactly 90), to obtuse (over 90). So acute is the smallest of the three." },
    { q: "Which is the biggest: acute, right, or obtuse?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"], explain: "Angles grow from acute (under 90), to right (exactly 90), to obtuse (over 90). So obtuse is the biggest of the three." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildAN3() {
  // Turns and Directions
  return shuffle([
    { q: "A quarter turn is how many degrees?", a: "90", choices: ["90", "180", "45"], explain: "A full turn is 360 degrees. A quarter turn is one of four equal parts, so 360 divided by 4 is 90 degrees." },
    { q: "A half turn is how many degrees?", a: "180", choices: ["180", "90", "360"], explain: "A full turn is 360 degrees. Half of that is 360 divided by 2, which is 180 degrees." },
    { q: "A full turn is how many degrees?", a: "360", choices: ["360", "180", "90"], explain: "Spinning all the way around to face the same direction again is one full turn, and a full turn is always 360 degrees." },
    { q: "A three-quarter turn is how many degrees?", a: "270", choices: ["270", "180", "360"], explain: "One quarter turn is 90 degrees. Three quarter turns is 3 times 90, which makes 270 degrees." },
    { q: "How many quarter turns make a full turn?", a: "4", choices: ["4", "2", "3"], explain: "A quarter means one of four equal parts. Four quarters fit into one whole, so 4 quarter turns make a full turn." },
    { q: "How many half turns make a full turn?", a: "2", choices: ["2", "4", "1"], explain: "A half means one of two equal parts. Two halves make one whole, so 2 half turns make a full turn." },
    { q: "If you face North and turn a quarter turn clockwise, you face?", a: "East", choices: ["East", "West", "South"], explain: "Clockwise goes the way clock hands move: North, then East, then South, then West. One quarter turn from North lands you on East." },
    { q: "If you face East and turn a half turn, you face?", a: "West", choices: ["West", "North", "South"], explain: "A half turn spins you to face the opposite direction. The opposite of East is West." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "p3m-an1": buildAN1, "p3m-an2": buildAN2, "p3m-an3": buildAN3,
};

export const P3_ANGLES_QUESTION_COUNTS = {
  "p3m-an1": 8, "p3m-an2": 10, "p3m-an3": 8,
};

export function buildAnglesQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
