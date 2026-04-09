import { useState, useRef, useEffect, useCallback } from "react";
import ChatBubble from "../components/ChatBubble";
import ProgressBar from "../components/ProgressBar";
import ChoiceButtons from "../components/ChoiceButtons";
import RewardModal from "../components/RewardModal";
import { useTTS } from "../hooks/useSpeech";
import {
  STARS_PER_REWARD,
  LEVEL_NAMES,
} from "../utils/constants";
import { saveProgress } from "../utils/progress";
import {
  getGreeting,
  evaluateAndRespond,
  generateQuestion,
} from "../utils/kokoEngine";

export default function ChatScreen({ progress, setProgress, videos, onBack }) {
  const [messages, setMessages] = useState([]);
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showReward, setShowReward] = useState(false);
  const [answering, setAnswering] = useState(false);
  const currentQuestionRef = useRef(null);
  const chatEndRef = useRef(null);
  const { speak } = useTTS();
  const initializedRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleChoice = useCallback(
    (choice) => {
      setAnswering(true);
      const userMsg = { role: "user", content: choice };
      setMessages((prev) => [...prev, userMsg]);

      const currentQ = currentQuestionRef.current;
      if (!currentQ) return;

      const result = evaluateAndRespond(
        choice,
        currentQ,
        progress.level,
        progress.streak
      );

      const assistantMsg = { role: "assistant", content: result.response };
      setMessages((prev) => [...prev, assistantMsg]);
      speak(result.response);

      // Update choices for next question
      currentQuestionRef.current = result.nextQuestion;
      setChoices(result.nextQuestion.choices);
      setCorrectAnswer(result.nextQuestion.answer);
      setAnswering(false);

      if (result.correct) {
        setProgress((prev) => {
          const newStars = prev.stars + 1;
          const newRewardCount =
            newStars % STARS_PER_REWARD === 0
              ? prev.rewardCount + 1
              : prev.rewardCount;
          const updated = {
            ...prev,
            stars: newStars,
            streak: result.newStreak,
            level: result.newLevel,
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
    },
    [progress.level, progress.streak, speak, setProgress]
  );

  // Initial greeting
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const firstQ = generateQuestion(progress.level);
    currentQuestionRef.current = firstQ;
    setChoices(firstQ.choices);
    setCorrectAnswer(firstQ.answer);

    const greeting = getGreeting(progress.level, progress.stars, firstQ);
    const greetingMsg = { role: "assistant", content: greeting };
    setMessages([greetingMsg]);
    speak(greeting);
  }, [progress.level, progress.stars, speak]);

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
        <div ref={chatEndRef} />
      </div>

      {/* Multiple choice answers */}
      <ChoiceButtons
        choices={choices}
        correctAnswer={correctAnswer}
        onSelect={handleChoice}
        disabled={answering}
      />

      {/* Reward modal */}
      {showReward && (
        <RewardModal
          rewardCount={progress.rewardCount}
          videos={videos}
          onDismiss={() => setShowReward(false)}
        />
      )}
    </div>
  );
}
