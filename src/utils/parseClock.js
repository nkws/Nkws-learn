const CLOCK_REGEX = /\[CLOCK:(\d{1,2}):(\d{2})\]/g;

export function parseClockTags(text) {
  const parts = [];
  let lastIndex = 0;
  let match;

  CLOCK_REGEX.lastIndex = 0;
  while ((match = CLOCK_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }
    parts.push({
      type: "clock",
      hours: parseInt(match[1], 10),
      minutes: parseInt(match[2], 10),
    });
    lastIndex = CLOCK_REGEX.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.slice(lastIndex) });
  }

  return parts;
}

// Remove emoji characters and clock tags for clean TTS
const EMOJI_REGEX = /[\p{Emoji_Presentation}\p{Extended_Pictographic}\u200d\uFE0F]/gu;

export function cleanForSpeech(text) {
  return text
    .replace(CLOCK_REGEX, "look at the clock")
    .replace(EMOJI_REGEX, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
