import { useState, useRef, useEffect, useCallback } from "react";
import ChatBubble from "../components/ChatBubble";
import ChoiceButtons from "../components/ChoiceButtons";
import RewardModal from "../components/RewardModal";
import { useTTS } from "../hooks/useSpeech";
import { MODULES } from "../utils/constants";
import { saveProgress } from "../utils/progress";
import { buildModuleQuestions, getPraise, getHint } from "../utils/kokoEngine";

export default function ChatScreen({
  moduleId,
  progress,
  setProgress,
  moduleVideos,
  onBack,
}) {
  const [messages, setMessages] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showReward, setShowReward] = useState(false);
  const [moduleComplete, setModuleComplete] = useState(false);
  const [answering, setAnswering] = useState(false);
  const chatEndRef = useRef(null);
  const { speak } = useTTS();

  const mod = MODULES.find((m) => m.id === moduleId);
  const videoId = moduleVideos[moduleId] || null;

  useEffect(() => {
    const qs = buildModuleQuestions(moduleId);
    setQuestions(qs);
    if (qs.length > 0) {
      const greeting = `Let's learn about ${mod?.title}! Here's your first question. ${qs[0].question}`;
      setMessages([{ role: "assistant", content: greeting }]);
    }
  }, [moduleId, mod?.title]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const totalCount = questions.length;

  const handleChoice = useCallback(
    (choice) => {
      const currentQ = questions[questionIndex];
      if (!currentQ || answering) return;
      setAnswering(true);

      const userMsg = { role: "user", content: choice };
      const correct = choice === currentQ.answer;

      let responseText;
      let nextIdx = questionIndex + 1;
      const isLast = nextIdx >= totalCount;

      if (correct) {
        if (isLast) {
          responseText = `${getPraise()} You finished the ${mod?.title} module! Amazing work, Keanu!`;
        } else {
          responseText = `${getPraise()} ${questions[nextIdx].question}`;
        }

        setProgress((prev) => {
          const newModStars = (prev.moduleStars[moduleId] || 0) + 1;
          const updated = {
            ...prev,
            stars: prev.stars + 1,
            moduleStars: { ...prev.moduleStars, [moduleId]: newModStars },
          };
          saveProgress(updated);
          return updated;
        });
      } else {
        if (isLast) {
          responseText = `${getHint(currentQ.answer)} That was the last question! Well done for trying, Keanu!`;
        } else {
          responseText = `${getHint(currentQ.answer)} Let's try the next one! ${questions[nextIdx].question}`;
        }
      }

      if (isLast) {
        setModuleComplete(true);
        if (videoId) {
          setTimeout(() => setShowReward(true), 1000);
        }
      }

      setQuestionIndex(nextIdx);
      setMessages((prev) => [...prev, userMsg, { role: "assistant", content: responseText }]);
      // Read response aloud, then read next question's choices
      const nextChoices = !isLast ? questions[nextIdx]?.choices : null;
      speak(responseText, nextChoices);
      setAnswering(false);
    },
    [questions, questionIndex, totalCount, moduleId, mod?.title, videoId, setProgress, answering]
  );

  const nextQ = questions[questionIndex] || null;

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
        <span className="chat-stars">
          Question {Math.min(questionIndex + 1, totalCount)} of {totalCount}
        </span>
        <span className="chat-reward-hint">
          ⭐ {progress.moduleStars[moduleId] || 0}
        </span>
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <ChatBubble
            key={i}
            message={msg}
            showSpeakBtn={i === 0 && msg.role === "assistant"}
            speakChoices={i === 0 ? questions[0]?.choices : null}
            onSpeak={speak}
          />
        ))}
        <div ref={chatEndRef} />
      </div>

      {moduleComplete ? (
        <div className="module-done-bar">
          <button className="btn-primary" onClick={onBack}>
            Back to Modules
          </button>
        </div>
      ) : nextQ ? (
        <ChoiceButtons
          key={questionIndex}
          choices={nextQ.choices}
          correctAnswer={nextQ.answer}
          onSelect={handleChoice}
          disabled={answering}
        />
      ) : null}

      {showReward && (
        <RewardModal
          videoId={videoId}
          onDismiss={() => setShowReward(false)}
        />
      )}
    </div>
  );
}
