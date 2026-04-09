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
  const [wrongQueue, setWrongQueue] = useState([]);
  const [inRetryRound, setInRetryRound] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [moduleComplete, setModuleComplete] = useState(false);
  const [answering, setAnswering] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const totalQuestionsRef = useRef(0);
  const chatEndRef = useRef(null);
  const { speak } = useTTS();

  const mod = MODULES.find((m) => m.id === moduleId);
  const videoId = moduleVideos[moduleId] || null;

  useEffect(() => {
    const qs = buildModuleQuestions(moduleId);
    setQuestions(qs);
    totalQuestionsRef.current = qs.length;
    if (qs.length > 0) {
      const greeting = `Let's learn about ${mod?.title}! Here's your first question. ${qs[0].question}`;
      setMessages([{ role: "assistant", content: greeting }]);
    }
  }, [moduleId, mod?.title]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const currentList = inRetryRound ? wrongQueue : questions;
  const currentQ = currentList[questionIndex] || null;
  const totalInRound = currentList.length;

  const handleChoice = useCallback(
    (choice) => {
      if (!currentQ || answering) return;
      setAnswering(true);

      const userMsg = { role: "user", content: choice };
      const correct = choice === currentQ.answer;
      const nextIdx = questionIndex + 1;
      const isLastInRound = nextIdx >= totalInRound;

      let responseText;
      let nextChoices = null;

      if (correct) {
        setCorrectCount((c) => c + 1);

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

        if (isLastInRound) {
          // Check if there are wrong answers to retry
          // (from this round — we collect them via the wrongCollector below)
          responseText = `${getPraise()}`;
          // We'll handle end-of-round logic after updating wrongQueue
        } else {
          responseText = `${getPraise()} ${currentList[nextIdx].question}`;
          nextChoices = currentList[nextIdx].choices;
        }
      } else {
        // Add to retry queue
        setWrongQueue((prev) => [...prev, currentQ]);

        if (isLastInRound) {
          responseText = `${getHint(currentQ.answer)}`;
        } else {
          responseText = `${getHint(currentQ.answer)} Let's try the next one! ${currentList[nextIdx].question}`;
          nextChoices = currentList[nextIdx].choices;
        }
      }

      // Handle end of round
      if (isLastInRound) {
        // We need to check wrongQueue AFTER this update settles.
        // Use a callback pattern via setTimeout to let state update.
        setQuestionIndex(0);

        // Collect this round's wrongs (including possibly this question)
        const thisWrong = !correct ? [currentQ] : [];

        setWrongQueue((prev) => {
          const allWrongs = [...prev, ...thisWrong];
          // Remove duplicates that might have snuck in
          const unique = allWrongs.filter(
            (q, i, arr) => arr.findIndex((x) => x.question === q.question) === i
          );

          if (unique.length === 0) {
            // All correct! Module complete!
            const completeMsg = `${responseText} You got every question right! Amazing work, Keanu! You finished the ${mod?.title} module!`;
            setMessages((prev2) => [...prev2, userMsg, { role: "assistant", content: completeMsg }]);
            speak(completeMsg);
            setModuleComplete(true);
            // Mark module as completed in progress
            setProgress((prev2) => {
              const completed = prev2.completedModules || [];
              if (!completed.includes(moduleId)) {
                const updated = { ...prev2, completedModules: [...completed, moduleId] };
                saveProgress(updated);
                return updated;
              }
              return prev2;
            });
            if (videoId) {
              setTimeout(() => setShowReward(true), 1000);
            }
          } else {
            // Start retry round
            const retryMsg = `${responseText} Let's go over the ones you missed! You have ${unique.length} question${unique.length > 1 ? "s" : ""} to try again. ${unique[0].question}`;
            setMessages((prev2) => [...prev2, userMsg, { role: "assistant", content: retryMsg }]);
            speak(retryMsg, unique[0].choices);
            setInRetryRound(true);
            setQuestionIndex(0);
          }

          // Reset wrongQueue for next retry round
          return [];
        });

        setAnswering(false);
        return;
      }

      setQuestionIndex(nextIdx);
      setMessages((prev) => [...prev, userMsg, { role: "assistant", content: responseText }]);
      speak(responseText, nextChoices);
      setAnswering(false);
    },
    [currentQ, questionIndex, totalInRound, currentList, moduleId, mod?.title, videoId, speak, setProgress, answering, inRetryRound]
  );

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
          {inRetryRound
            ? `Retry: ${Math.min(questionIndex + 1, totalInRound)} of ${totalInRound}`
            : `Question ${Math.min(questionIndex + 1, totalInRound)} of ${totalInRound}`}
        </span>
        <span className="chat-reward-hint">
          ⭐ {correctCount} / {totalQuestionsRef.current}
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
      ) : currentQ && !moduleComplete ? (
        <ChoiceButtons
          key={`${inRetryRound ? "r" : "q"}-${questionIndex}`}
          choices={currentQ.choices}
          correctAnswer={currentQ.answer}
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
