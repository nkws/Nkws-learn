function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
    { q: "How many right angles in a square?", a: "4", choices: ["4", "2", "3"] },
    { q: "How many degrees is a right angle?", a: "90", choices: ["90", "180", "45"] },
    { q: "An angle is formed when two lines...?", a: "Meet at a point", choices: ["Meet at a point", "Are parallel", "Cross twice"] },
    { q: "How many degrees in a full turn?", a: "360", choices: ["360", "180", "90"] },
    { q: "The corner of a book is what type of angle?", a: "Right angle", choices: ["Right angle", "Acute angle", "Obtuse angle"] },
    { q: "How many right angles in a rectangle?", a: "4", choices: ["4", "2", "6"] },
    { q: "How many degrees in a half turn?", a: "180", choices: ["180", "90", "360"] },
    { q: "How many right angles does a triangle have at most?", a: "1", choices: ["1", "2", "3"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildAN2() {
  // Types of Angles
  return shuffle([
    { q: "An angle less than 90 degrees is called?", a: "Acute", choices: ["Acute", "Obtuse", "Right"] },
    { q: "An angle greater than 90 degrees is called?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"] },
    { q: "An angle of exactly 90 degrees is called?", a: "Right angle", choices: ["Right angle", "Acute", "Obtuse"] },
    { q: "An angle of 180 degrees is called?", a: "Straight angle", choices: ["Straight angle", "Right angle", "Reflex angle"] },
    { q: "Is 45 degrees acute or obtuse?", a: "Acute", choices: ["Acute", "Obtuse", "Right"] },
    { q: "Is 120 degrees acute or obtuse?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"] },
    { q: "Is 89 degrees acute or obtuse?", a: "Acute", choices: ["Acute", "Obtuse", "Straight"] },
    { q: "Is 91 degrees acute or obtuse?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"] },
    { q: "Which is the smallest: acute, right, or obtuse?", a: "Acute", choices: ["Acute", "Right", "Obtuse"] },
    { q: "Which is the biggest: acute, right, or obtuse?", a: "Obtuse", choices: ["Obtuse", "Acute", "Right"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildAN3() {
  // Turns and Directions
  return shuffle([
    { q: "A quarter turn is how many degrees?", a: "90", choices: ["90", "180", "45"] },
    { q: "A half turn is how many degrees?", a: "180", choices: ["180", "90", "360"] },
    { q: "A full turn is how many degrees?", a: "360", choices: ["360", "180", "90"] },
    { q: "A three-quarter turn is how many degrees?", a: "270", choices: ["270", "180", "360"] },
    { q: "How many quarter turns make a full turn?", a: "4", choices: ["4", "2", "3"] },
    { q: "How many half turns make a full turn?", a: "2", choices: ["2", "4", "1"] },
    { q: "If you face North and turn a quarter turn clockwise, you face?", a: "East", choices: ["East", "West", "South"] },
    { q: "If you face East and turn a half turn, you face?", a: "West", choices: ["West", "North", "South"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
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
