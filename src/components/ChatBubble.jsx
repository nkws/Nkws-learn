import Clock from "./Clock";
import { parseClockTags } from "../utils/parseClock";

export default function ChatBubble({ message, speakChoices, onSpeak }) {
  const isKoko = message.role === "assistant";
  const parts = parseClockTags(message.content);

  return (
    <div className={`chat-bubble-row ${isKoko ? "koko" : "student"}`}>
      {isKoko && <span className="avatar">🦊</span>}
      <div className={`chat-bubble ${isKoko ? "bubble-koko" : "bubble-student"}`}>
        {parts.map((part, i) =>
          part.type === "clock" ? (
            <div key={i} className="bubble-clock">
              <Clock hours={part.hours} minutes={part.minutes} size={150} />
            </div>
          ) : (
            <span key={i}>{part.content}</span>
          )
        )}
        {isKoko && onSpeak && (
          <button
            className="speak-btn"
            onClick={() => onSpeak(message.content, speakChoices)}
            aria-label="Read aloud"
          >
            🔊
          </button>
        )}
      </div>
    </div>
  );
}
