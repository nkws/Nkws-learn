import { useState, useRef, useEffect, useCallback } from "react";
import ChatBubble from "../components/ChatBubble";
import ProgressBar from "../components/ProgressBar";
import QuickAnswers from "../components/QuickAnswers";
import RewardModal from "../components/RewardModal";
import { useTTS, useVoiceInput } from "../hooks/useSpeech";
import { sendToGemini } from "../utils/gemini";
import {
  SYSTEM_PROMPT,
  CORRECT_KEYWORDS,
  STARS_PER_REWARD,
  LEVEL_NAMES,
} from "../utils/constants";
import { saveProgress } from "../utils/progress";

export default function ChatScreen({ progress, setProgress, onBack }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const chatEndRef = useRef(null);
  const conversationRef = useRef([]);
  const { speak } = useTTS();
  const { listening, startListening, stopListening } = useVoiceInput();
  const initializedRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const buildSystemPrompt = useCallback(() => {
    return `${SYSTEM_PROMPT}\n\nCurrent state: Level ${progress.level} (${LEVEL_NAMES[progress.level] || ""}), Stars: ${progress.stars}, Streak: ${progress.streak} correct in a row.`;
  }, [progress.level, progress.stars, progress.streak]);

  const sendMessage = useCallback(
    async (userText) => {
      const userMsg = { role: "user", content: userText };
      conversationRef.current = [...conversationRef.current, userMsg];
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const reply = await sendToGemini(
          conversationRef.current,
          buildSystemPrompt()
        );
        const assistantMsg = { role: "assistant", content: reply };
        conversationRef.current = [...conversationRef.current, assistantMsg];
        setMessages((prev) => [...prev, assistantMsg]);
        speak(reply);

        // Check for correct answer
        const lowerReply = reply.toLowerCase();
        const isCorrect = CORRECT_KEYWORDS.some((kw) =>
          lowerReply.includes(kw)
        );
        const isLevelUp = lowerReply.includes("level up");

        if (isCorrect) {
          setProgress((prev) => {
            const newStreak = prev.streak + 1;
            const newLevel = isLevelUp
              ? Math.min(prev.level + 1, 6)
              : prev.level;
            const newStars = prev.stars + 1;
            const newRewardCount =
              newStars % STARS_PER_REWARD === 0
                ? prev.rewardCount + 1
                : prev.rewardCount;
            const updated = {
              ...prev,
              stars: newStars,
              streak: isLevelUp ? 0 : newStreak,
              level: newLevel,
              rewardCount: newRewardCount,
            };
            saveProgress(updated);

            if (newStars % STARS_PER_REWARD === 0) {
              setTimeout(() => setShowReward(true), 800);
            }

            return updated;
          });
        } else {
          setProgress((prev) => {
            const updated = { ...prev, streak: 0 };
            saveProgress(updated);
            return updated;
          });
        }
      } catch {
        const errorMsg = {
          role: "assistant",
          content:
            "Oops! Koko's brain got a little fuzzy 🦊💫 Let me try again in a moment! Can you ask me again?",
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setLoading(false);
      }
    },
    [buildSystemPrompt, speak, setProgress]
  );

  // Initial greeting
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const greet = async () => {
      setLoading(true);
      try {
        const openingMsg =
          progress.level > 1
            ? `Keanu is back! He's on Level ${progress.level} with ${progress.stars} stars. Welcome him back and ask a question at his level.`
            : "Keanu just started! Welcome him warmly and ask his first Level 1 question (o'clock times).";

        conversationRef.current = [{ role: "user", content: openingMsg }];
        const reply = await sendToGemini(
          conversationRef.current,
          buildSystemPrompt()
        );
        const assistantMsg = { role: "assistant", content: reply };
        // Reset conversation to just the assistant greeting (hide the system kickoff)
        conversationRef.current = [assistantMsg];
        setMessages([assistantMsg]);
        speak(reply);
      } catch {
        setMessages([
          {
            role: "assistant",
            content:
              "Hey Keanu! 🦊 Koko here! Let's learn about time! [CLOCK:03:00] What time does this clock show? 🕐",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    greet();
  }, [buildSystemPrompt, speak, progress.level, progress.stars]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    sendMessage(text);
  };

  const handleQuickAnswer = (option) => {
    if (loading) return;
    sendMessage(option);
  };

  const handleVoice = () => {
    if (listening) {
      stopListening();
    } else {
      startListening((transcript) => {
        sendMessage(transcript);
      });
    }
  };

  return (
    <div className="screen chat-screen">
      {/* Top bar */}
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <span className="topbar-mascot">🦊 Koko</span>
        <span className="topbar-topic">
          {LEVEL_NAMES[progress.level] || `Level ${progress.level}`}
        </span>
      </div>

      {/* Progress */}
      <ProgressBar stars={progress.stars} level={progress.level} />

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}
        {loading && (
          <div className="chat-bubble-row koko">
            <span className="avatar">🦊</span>
            <div className="chat-bubble bubble-koko typing">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Quick answers */}
      <QuickAnswers onSelect={handleQuickAnswer} disabled={loading} />

      {/* Input area */}
      <div className="chat-input-area">
        <button
          className={`voice-btn ${listening ? "voice-active" : ""}`}
          onClick={handleVoice}
          aria-label="Voice input"
        >
          🎤
        </button>
        <input
          className="chat-input"
          type="text"
          placeholder="Type your answer..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
        />
        <button
          className="send-btn"
          onClick={handleSend}
          disabled={loading || !input.trim()}
        >
          ➤
        </button>
      </div>

      {/* Reward modal */}
      {showReward && (
        <RewardModal
          rewardCount={progress.rewardCount}
          onDismiss={() => setShowReward(false)}
        />
      )}
    </div>
  );
}
