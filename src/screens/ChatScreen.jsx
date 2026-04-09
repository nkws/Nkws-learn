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
  const [correctCount, setCorrectCount] = useState(0);
  const [isRetryRound, setIsRetryRound] = useState(false);
  const wrongThisRoundRef = useRef([]);
  const totalQuestionsRef = useRef(0);
  const chatEndRef = useRef(null);
  const { speak } = useTTS();

  const mod = MODULES.find((m) => m.id === moduleId);
  const videoId = moduleVideos[moduleId] || null;
  const totalQ = totalQuestionsRef.current;

  useEffect(() => {
    const qs = buildModuleQuestions(moduleId);
    setQuestions(qs);
    totalQuestionsRef.current = qs.length;
    wrongThisRoundRef.current = [];
    if (qs.length > 0) {
      const greeting = `Let's learn about ${mod?.title}! Here's your first question. ${qs[0].question}`;
      setMessages([{ role: "assistant", content: greeting }]);
    }
  }, [moduleId, mod?.title]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Save final score — replaces previous module stars, recalculates total
  const saveModuleScore = useCallback(
    (finalCorrect) => {
      setProgress((prev) => {
        const oldModStars = prev.moduleStars[moduleId] || 0;
        const newTotal = prev.stars - oldModStars + finalCorrect;
        const completed = prev.completedModules || [];
        const updated = {
          ...prev,
          stars: newTotal,
          moduleStars: { ...prev.moduleStars, [moduleId]: finalCorrect },
          completedModules: completed.includes(moduleId)
            ? completed
            : [...completed, moduleId],
        };
        saveProgress(updated);
        return updated;
      });
    },
    [moduleId, setProgress]
  );

  const handleChoice = useCallback(
    (choice) => {
      const currentQ = questions[questionIndex];
      if (!currentQ || answering) return;
      setAnswering(true);

      const userMsg = { role: "user", content: choice };
      const correct = choice === currentQ.answer;
      const nextIdx = questionIndex + 1;
      const isLast = nextIdx >= questions.length;

      let responseText;
      let nextChoices = null;
      let newCorrectCount = correctCount;

      if (correct) {
        newCorrectCount = correctCount + 1;
        setCorrectCount(newCorrectCount);

        if (!isLast) {
          responseText = `${getPraise()} ${questions[nextIdx].question}`;
          nextChoices = questions[nextIdx].choices;
        } else {
          responseText = getPraise();
        }
      } else {
        wrongThisRoundRef.current.push(currentQ);

        if (!isLast) {
          responseText = `${getHint(currentQ.answer)} Let's try the next one! ${questions[nextIdx].question}`;
          nextChoices = questions[nextIdx].choices;
        } else {
          responseText = getHint(currentQ.answer);
        }
      }

      if (isLast) {
        const wrongs = wrongThisRoundRef.current;

        if (wrongs.length === 0) {
          // All correct — module complete! Save score once.
          const completeMsg = `${responseText} You got every question right! Amazing work, Keanu! You finished the ${mod?.title} module! ⭐ ${newCorrectCount} out of ${totalQ} stars!`;
          setMessages((prev) => [...prev, userMsg, { role: "assistant", content: completeMsg }]);
          speak(completeMsg);
          setModuleComplete(true);
          saveModuleScore(newCorrectCount);
          if (videoId) {
            setTimeout(() => setShowReward(true), 1000);
          }
        } else {
          const retryMsg = `${responseText} Let's go over the ones you missed! You have ${wrongs.length} question${wrongs.length > 1 ? "s" : ""} to try again. ${wrongs[0].question}`;
          setMessages((prev) => [...prev, userMsg, { role: "assistant", content: retryMsg }]);
          speak(retryMsg, wrongs[0].choices);
          setQuestions([...wrongs]);
          setQuestionIndex(0);
          setIsRetryRound(true);
          wrongThisRoundRef.current = [];
        }

        setAnswering(false);
        return;
      }

      setQuestionIndex(nextIdx);
      setMessages((prev) => [...prev, userMsg, { role: "assistant", content: responseText }]);
      speak(responseText, nextChoices);
      setAnswering(false);
    },
    [questions, questionIndex, correctCount, totalQ, moduleId, mod?.title, videoId, speak, saveModuleScore, answering]
  );

  const currentQ = questions[questionIndex] || null;

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
          {isRetryRound
            ? `Retry: ${Math.min(questionIndex + 1, questions.length)} of ${questions.length}`
            : `Question ${Math.min(questionIndex + 1, questions.length)} of ${questions.length}`}
        </span>
        <span className="chat-reward-hint">
          ⭐ {correctCount} / {totalQ}
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
      ) : currentQ ? (
        <ChoiceButtons
          key={`${isRetryRound ? "r" : "q"}-${questionIndex}`}
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
