const CLOCK_REGEX = /\[CLOCK:(\d{1,2}):(\d{2})\]/g;
const SCENE_REGEX = /\[SCENE:([a-z0-9-]+)\]/g;
const JOURNEY_REGEX = /\[JOURNEY:([a-z0-9-]+)\]/g;
const TAG_REGEX = /\[(CLOCK:\d{1,2}:\d{2}|SCENE:[a-z0-9-]+|JOURNEY:[a-z0-9-]+)\]/g;

export function parseClockTags(text) {
  const parts = [];
  let lastIndex = 0;
  let match;

  TAG_REGEX.lastIndex = 0;
  while ((match = TAG_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }
    const token = match[1];
    if (token.startsWith("CLOCK:")) {
      const [, h, m] = token.split(":");
      parts.push({ type: "clock", hours: parseInt(h, 10), minutes: parseInt(m, 10) });
    } else if (token.startsWith("SCENE:")) {
      parts.push({ type: "scene", scene: token.slice(6) });
    } else if (token.startsWith("JOURNEY:")) {
      parts.push({ type: "journey", scene: token.slice(8) });
    }
    lastIndex = TAG_REGEX.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.slice(lastIndex) });
  }

  return parts;
}

// Remove emoji characters and all tags for clean TTS
const EMOJI_REGEX = /\p{Emoji_Presentation}|\p{Extended_Pictographic}|\u200d|\uFE0F/gu;

export function cleanForSpeech(text) {
  return text
    .replace(CLOCK_REGEX, "")
    .replace(SCENE_REGEX, "")
    .replace(JOURNEY_REGEX, "")
    .replace(EMOJI_REGEX, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
