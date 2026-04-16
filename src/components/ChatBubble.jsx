import Clock from "./Clock";
import PrepositionScene from "./PrepositionScene";
import JourneyScene from "./JourneyScene";
import { parseClockTags } from "../utils/parseClock";

export default function ChatBubble({ message, speakChoices, onSpeak }) {
  const isKoko = message.role === "assistant";
  const parts = parseClockTags(message.content);

  return (
    <div className={`chat-bubble-row ${isKoko ? "koko" : "student"}`}>
      {isKoko && <span className="avatar">🦊</span>}
      <div className={`chat-bubble ${isKoko ? "bubble-koko" : "bubble-student"}`}>
        {parts.map((part, i) => {
          if (part.type === "clock") {
            return (
              <div key={i} className="bubble-clock">
                <Clock hours={part.hours} minutes={part.minutes} size={150} />
              </div>
            );
          }
          if (part.type === "scene") {
            return (
              <div key={i} className="bubble-scene">
                <PrepositionScene type={part.scene} />
              </div>
            );
          }
          if (part.type === "journey") {
            return (
              <div key={i} className="bubble-journey">
                <JourneyScene type={part.scene} />
              </div>
            );
          }
          return <span key={i}>{part.content}</span>;
        })}
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
