import { shuffle } from "../../utils/helpers";

export const P3_SCI_EXTENDED_INTRO = {
  "p3s-mg1": {
    title: "Magnets",
    pages: [
      { text: "Magnets attract some metals — iron, steel, nickel, cobalt. Not all metals are magnetic!", emoji: "🧲" },
      { text: "Every magnet has 2 poles: North (N) and South (S). Like poles repel, unlike poles attract.", emoji: "N ↔ S attract | N ↔ N repel" },
    ],
  },
  "p3s-lg1": {
    title: "Light",
    pages: [
      { text: "Light comes from luminous sources like the sun, fire, and light bulbs. The moon reflects light — it is not a source!", emoji: "☀️ 💡 🔥" },
      { text: "Shadows form when light is blocked by an opaque object. Transparent objects let light through!", emoji: "🌑 shadow" },
    ],
  },
};

function buildP3sMg1() {
  return shuffle([
    { q: "Which material is attracted by a magnet?", a: "Iron", choices: ["Iron", "Wood", "Plastic"], explain: "Magnets only pull on certain metals like iron, steel, nickel and cobalt. Iron is one of them, but wood and plastic are not magnetic." },
    { q: "Every magnet has how many poles?", a: "2 (North and South)", choices: ["2 (North and South)", "1", "4"], explain: "Every magnet always has two poles, a North and a South. The pulling and pushing is strongest at these two ends." },
    { q: "What happens when two North poles are brought together?", a: "They repel (push away)", choices: ["They repel (push away)", "They attract", "Nothing happens"], explain: "The rule is: like poles repel. Two North poles are the same kind, so they push each other away." },
    { q: "What happens when a North pole meets a South pole?", a: "They attract (pull together)", choices: ["They attract (pull together)", "They repel", "Nothing happens"], explain: "The rule is: unlike poles attract. A North and a South are different, so they pull toward each other." },
    { q: "Which of these is NOT magnetic?", a: "Aluminium", choices: ["Aluminium", "Iron", "Steel"], explain: "Not every metal is magnetic. Iron and steel are pulled by magnets, but aluminium is a metal that is not, so a magnet ignores it." },
    { q: "A magnet can pick up?", a: "Steel paperclips", choices: ["Steel paperclips", "Wooden blocks", "Rubber bands"], explain: "A magnet only picks up magnetic metals. Steel paperclips contain iron, so they stick, while wood and rubber do not." },
    { q: "The strongest part of a magnet is at the?", a: "Poles", choices: ["Poles", "Middle", "All parts are equal"], explain: "A magnet's pull is strongest at its two poles, the ends. The middle is the weakest part, which is why magnets grab best at the tips." },
    { q: "If a bar magnet is cut in half, each piece?", a: "Becomes a complete magnet with 2 poles", choices: ["Becomes a complete magnet with 2 poles", "Loses its magnetism", "Has only 1 pole"], explain: "You can never have a magnet with just one pole. Cut a magnet and each new piece grows its own North and South, making a whole magnet." },
    { q: "A compass needle points North because?", a: "It is a magnet attracted to Earth's magnetic North", choices: ["It is a magnet attracted to Earth's magnetic North", "The wind pushes it", "It is lighter on one side"], explain: "A compass needle is a tiny magnet. The Earth acts like a giant magnet too, so the needle lines up and points to the North." },
    { q: "Which test proves an object is a MAGNET (not just magnetic)?", a: "It repels another known magnet", choices: ["It repels another known magnet", "It attracts iron", "It sticks to the fridge"], explain: "Only a magnet can push another magnet away. Magnetic metals can be pulled but never repel, so repelling proves the object is a magnet." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP3sLg1() {
  return shuffle([
    { q: "Which is a source of light?", a: "The sun", choices: ["The sun", "The moon", "A mirror"], explain: "A light source makes its own light. The sun does, so it is a source. The moon and a mirror only bounce light back, so they are not." },
    { q: "The moon shines because it?", a: "Reflects light from the sun", choices: ["Reflects light from the sun", "Makes its own light", "Is very hot"], explain: "The moon makes no light of its own. It looks bright because sunlight hits it and bounces, or reflects, off it to us." },
    { q: "Shadows form when light is blocked by?", a: "An opaque object", choices: ["An opaque object", "A transparent object", "Air"], explain: "A shadow forms when something blocks light from passing. An opaque object stops light completely, leaving a dark shadow behind it." },
    { q: "Which material is transparent?", a: "Clear glass", choices: ["Clear glass", "Cardboard", "Aluminium foil"], explain: "Transparent means light passes straight through so you can see clearly. Light goes through clear glass, but cardboard and foil block it." },
    { q: "Which material is opaque?", a: "A wooden door", choices: ["A wooden door", "Clear water", "Clear glass"], explain: "Opaque means no light passes through at all. A wooden door blocks light, while clear water and glass let light through." },
    { q: "Light travels in?", a: "Straight lines", choices: ["Straight lines", "Curved lines", "Zigzag lines"], explain: "Light always travels in straight lines. That is why blocking it makes a sharp shadow shaped like the object." },
    { q: "A shadow is largest when the object is?", a: "Close to the light source", choices: ["Close to the light source", "Far from the light source", "Size doesn't change"], explain: "The closer an object is to the light, the more light it blocks, so its shadow grows bigger. Moving it away makes the shadow smaller." },
    { q: "Which is a man-made source of light?", a: "A light bulb", choices: ["A light bulb", "The sun", "A star"], explain: "A man-made source is one people built. A light bulb is made by people, while the sun and stars are natural light sources." },
    { q: "Frosted glass is?", a: "Translucent — some light passes through", choices: ["Translucent — some light passes through", "Transparent", "Opaque"], explain: "Translucent means only some light gets through, so you cannot see clearly. Frosted glass lets light in but blurs what is behind it." },
    { q: "We can see objects because?", a: "Light bounces off them into our eyes", choices: ["Light bounces off them into our eyes", "Our eyes shoot out light rays", "Objects glow in the dark"], explain: "We see things when light bounces off them and travels into our eyes. That is why we cannot see in a totally dark room." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p3s-mg1": buildP3sMg1, "p3s-lg1": buildP3sLg1 };
export const P3_SCI_EXTENDED_QUESTION_COUNTS = { "p3s-mg1": 10, "p3s-lg1": 10 };
export function buildSciExtended3Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
