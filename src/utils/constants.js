export const STARS_PER_REWARD = 5;

export const TOPICS = [
  {
    id: "time",
    title: "Telling Time",
    icon: "🕐",
    description: "Learn to read clocks and calculate time.",
    modules: [
      { id: "time-1", title: "The Clock Face", description: "Learn the numbers, the hour hand, and the minute hand.", starsToUnlock: 0, hasIntro: true },
      { id: "time-2", title: "O'Clock Times", description: "Read hours like 3 o'clock, 7 o'clock.", starsToUnlock: 0 },
      { id: "time-3", title: "Half Past", description: "Read half hours like half past 4.", starsToUnlock: 5 },
      { id: "time-4", title: "Quarter Past & To", description: "Quarter past 2, quarter to 6.", starsToUnlock: 10 },
      { id: "time-5", title: "Five-Minute Intervals", description: "Read times like 3:10, 7:25, 11:50.", starsToUnlock: 18 },
      { id: "time-6", title: "Time Addition", description: "It's 3 o'clock. In 2 hours it will be...?", starsToUnlock: 28 },
      { id: "time-7", title: "Time Subtraction", description: "It's 5 o'clock. 1 hour ago it was...?", starsToUnlock: 40 },
    ],
  },
  {
    id: "addition",
    title: "Addition within 10",
    icon: "➕",
    description: "Learn to add numbers up to 10.",
    modules: [
      { id: "add-1", title: "What is Addition?", description: "Learn what it means to add things together.", starsToUnlock: 0, hasIntro: true },
      { id: "add-2", title: "Adding 1", description: "1+1, 2+1, 3+1... add one more!", starsToUnlock: 0 },
      { id: "add-3", title: "Adding 2", description: "1+2, 3+2, 5+2... two more each time!", starsToUnlock: 5 },
      { id: "add-4", title: "Making 5", description: "Which pairs add up to 5?", starsToUnlock: 10 },
      { id: "add-5", title: "Making 10", description: "Which pairs add up to 10?", starsToUnlock: 16 },
      { id: "add-6", title: "Mixed Addition", description: "Add any numbers within 10!", starsToUnlock: 24 },
    ],
  },
];

// Helper to find a topic by ID
export function getTopic(topicId) {
  return TOPICS.find((t) => t.id === topicId);
}

// Helper to find a module by ID within a topic
export function getModule(topicId, moduleId) {
  const topic = getTopic(topicId);
  return topic?.modules.find((m) => m.id === moduleId);
}

// Get total stars for a topic from progress
export function getTopicStars(topicId, moduleStars) {
  const topic = getTopic(topicId);
  if (!topic) return 0;
  return topic.modules.reduce((sum, mod) => sum + (moduleStars[mod.id] || 0), 0);
}
