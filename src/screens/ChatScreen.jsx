import { useState, useRef, useEffect, useCallback } from "react";
import ChatBubble from "../components/ChatBubble";
import ChoiceButtons from "../components/ChoiceButtons";
import RewardModal from "../components/RewardModal";
import { useTTS } from "../hooks/useSpeech";
import { MODULES, STARS_PER_REWARD } from "../utils/constants";
import { saveProgress } from "../utils/progress";
import {
  getGreeting,
  evaluateAndRespond,
  generateQuestion,
} from "../utils/kokoEngine";

export default function ChatScreen({
  moduleId,
  progress,
  setProgress,
  moduleVideos,
  onBack,
}) {
  const [messages, setMessages] = useState([]);
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showReward, setShowReward] = useState(false);
  const [answering, setAnswering] = useState(false);
  const currentQuestionRef = useRef(null);
  const chatEndRef = useRef(null);
  const { speak } = useTTS();
  const initializedRef = useRef(false);

  const mod = MODULES.find((m) => m.id === moduleId);
  const modStars = progress.moduleStars[moduleId] || 0;
  const videoId = moduleVideos[moduleId] || null;

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

      const result = evaluateAndRespond(choice, currentQ, moduleId);

      const assistantMsg = { role: "assistant", content: result.response };
      setMessages((prev) => [...prev, assistantMsg]);
      speak(result.response);

      currentQuestionRef.current = result.nextQuestion;
      setChoices(result.nextQuestion.choices);
      setCorrectAnswer(result.nextQuestion.answer);
      setAnswering(false);

      if (result.correct) {
        setProgress((prev) => {
          const newModStars = (prev.moduleStars[moduleId] || 0) + 1;
          const newTotalStars = prev.stars + 1;
          const updated = {
            ...prev,
            stars: newTotalStars,
            moduleStars: { ...prev.moduleStars, [moduleId]: newModStars },
          };
          saveProgress(updated);

          if (newModStars % STARS_PER_REWARD === 0 && videoId) {
            setTimeout(() => setShowReward(true), 800);
          }

          return updated;
        });
      }
    },
    [moduleId, videoId, speak, setProgress]
  );

  // Initial greeting + first question
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const firstQ = generateQuestion(moduleId);
    currentQuestionRef.current = firstQ;
    setChoices(firstQ.choices);
    setCorrectAnswer(firstQ.answer);

    const greeting = `${getGreeting(moduleId, mod?.title)} ${firstQ.question}`;
    setMessages([{ role: "assistant", content: greeting }]);
    speak(greeting);
  }, [moduleId, mod?.title, speak]);

  return (
    <div className="screen chat-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <span className="topbar-mascot">🦊 Koko</span>
        <span className="topbar-topic">{mod?.title}</span>
      </div>

      <div className="chat-progress-bar">
        <span className="chat-stars">⭐ {modStars} in this module</span>
        {videoId && (
          <span className="chat-reward-hint">
            {STARS_PER_REWARD - (modStars % STARS_PER_REWARD)} to next 🎬
          </span>
        )}
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}
        <div ref={chatEndRef} />
      </div>

      <ChoiceButtons
        choices={choices}
        correctAnswer={correctAnswer}
        onSelect={handleChoice}
        disabled={answering}
      />

      {showReward && (
        <RewardModal
          videoId={videoId}
          onDismiss={() => setShowReward(false)}
        />
      )}
    </div>
  );
}
