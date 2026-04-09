import { useState, useRef, useEffect, useCallback } from "react";
import ChatBubble from "../components/ChatBubble";
import ChoiceButtons from "../components/ChoiceButtons";
import RewardModal from "../components/RewardModal";
import { useTTS } from "../hooks/useSpeech";
import { getModule, getTotalStars } from "../utils/constants";
import { saveProgress } from "../utils/progress";
import { buildModuleQuestions, getPraise, getHint, getIntro } from "../utils/kokoEngine";
import IntroScreen from "./IntroScreen";

export default function ChatScreen({
  subjectId,
  topicId,
  moduleId,
  level,
  progress,
  setProgress,
  moduleVideos,
  onBack,
}) {
  const [showIntro, setShowIntro] = useState(true);
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
  const ttsLang = subjectId === "chinese" ? "zh" : "en";
  const { speak } = useTTS(ttsLang);

  const mod = getModule(subjectId, topicId, moduleId, level);
  const videoId = moduleVideos[moduleId] || null;
  const intro = getIntro(moduleId);
  const totalQ = totalQuestionsRef.current;

  const startQuiz = useCallback(() => {
    const qs = buildModuleQuestions(moduleId);
    setQuestions(qs);
    totalQuestionsRef.current = qs.length;
    wrongThisRoundRef.current = [];
    if (qs.length > 0) {
      const isZh = subjectId === "chinese";
      const greeting = isZh
        ? `这是你的第一道题。${qs[0].question}`
        : `Here's your first question. ${qs[0].question}`;
      setMessages([{ role: "assistant", content: greeting }]);
    }
    setShowIntro(false);
  }, [moduleId]);

  // If no intro, start quiz immediately
  useEffect(() => {
    if (!intro) {
      startQuiz();
    }
  }, [intro, startQuiz]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Save final score — replaces previous module stars, recalculates total
  const saveModuleScore = useCallback(
    (finalCorrect) => {
      setProgress((prev) => {
        const newModuleStars = { ...prev.moduleStars, [moduleId]: finalCorrect };
        const completed = prev.completedModules || [];
        const updated = {
          ...prev,
          stars: getTotalStars(newModuleStars),
          moduleStars: newModuleStars,
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
        // Only count stars on first pass, not retries
        if (!isRetryRound) {
          newCorrectCount = correctCount + 1;
          setCorrectCount(newCorrectCount);
        }

        if (!isLast) {
          responseText = `${getPraise(ttsLang)} ${questions[nextIdx].question}`;
          nextChoices = questions[nextIdx].choices;
        } else {
          responseText = getPraise(ttsLang);
        }
      } else {
        wrongThisRoundRef.current.push(currentQ);

        if (!isLast) {
          const nextPrompt = ttsLang === "zh" ? "我们来试下一题！" : "Let's try the next one!";
          responseText = `${getHint(currentQ.answer, ttsLang)} ${nextPrompt} ${questions[nextIdx].question}`;
          nextChoices = questions[nextIdx].choices;
        } else {
          responseText = getHint(currentQ.answer, ttsLang);
        }
      }

      if (isLast) {
        const wrongs = wrongThisRoundRef.current;

        if (wrongs.length === 0) {
          // All correct — module complete! Save score once.
          const isPerfect = newCorrectCount === totalQ;
          const isZhLang = ttsLang === "zh";
          const perfectMsg = isPerfect
            ? isZhLang
              ? `${responseText} 满分！每一道题都答对了！太厉害了！⭐ ${newCorrectCount} / ${totalQ} 星！`
              : `${responseText} PERFECT SCORE! You got every single question right first time! Amazing work, Keanu! ⭐ ${newCorrectCount} out of ${totalQ} stars!`
            : isZhLang
              ? `${responseText} 你完成了 ${mod?.title}！⭐ ${newCorrectCount} / ${totalQ} 星！`
              : `${responseText} You finished the ${mod?.title} module! ⭐ ${newCorrectCount} out of ${totalQ} stars!`;
          const videoPrompt = isPerfect && videoId
            ? ""
            : !isPerfect && videoId
              ? isZhLang ? " 全部答对就能看视频奖励哦！" : " Get a perfect score to unlock the video reward!"
              : "";
          const completeMsg = perfectMsg + videoPrompt;
          setMessages((prev) => [...prev, userMsg, { role: "assistant", content: completeMsg }]);
          speak(completeMsg);
          setModuleComplete(true);
          saveModuleScore(newCorrectCount);
          // Only show video on perfect score
          if (isPerfect && videoId) {
            setTimeout(() => setShowReward(true), 1000);
          }
        } else {
          const retryIntro = ttsLang === "zh"
            ? `我们来复习答错的题目吧！还有 ${wrongs.length} 道题要再试一次。`
            : `Let's go over the ones you missed! You have ${wrongs.length} question${wrongs.length > 1 ? "s" : ""} to try again.`;
          const retryMsg = `${responseText} ${retryIntro} ${wrongs[0].question}`;
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

  // Show intro if module has one and we haven't started yet
  if (showIntro && intro) {
    return <IntroScreen intro={intro} lang={ttsLang} onFinish={startQuiz} />;
  }

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
