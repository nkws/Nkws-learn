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
  skipIntros,
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

  // If no intro or skip intros enabled, start quiz immediately
  useEffect(() => {
    if (!intro || skipIntros) {
      startQuiz();
    }
  }, [intro, skipIntros, startQuiz]);

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

      let newCorrectCount = correctCount;
      let replyText;
      let questionText = null;
      let nextChoices = null;

      if (correct) {
        if (!isRetryRound) {
          newCorrectCount = correctCount + 1;
          setCorrectCount(newCorrectCount);
        }
        replyText = getPraise(ttsLang);
        if (!isLast) {
          questionText = questions[nextIdx].question;
          nextChoices = questions[nextIdx].choices;
        }
      } else {
        wrongThisRoundRef.current.push(currentQ);
        replyText = getHint(currentQ.answer, ttsLang);
        if (!isLast) {
          questionText = questions[nextIdx].question;
          nextChoices = questions[nextIdx].choices;
        }
      }

      if (isLast) {
        const wrongs = wrongThisRoundRef.current;

        if (wrongs.length === 0) {
          const isPerfect = newCorrectCount === totalQ;
          const isZh = ttsLang === "zh";
          const completeText = isPerfect
            ? isZh
              ? `满分！每一道题都答对了！太厉害了！ ⭐ ${newCorrectCount} / ${totalQ} 星！`
              : `PERFECT SCORE! You got every question right first time! Amazing work! ⭐ ${newCorrectCount} out of ${totalQ} stars!`
            : isZh
              ? `你完成了 ${mod?.title}！ ⭐ ${newCorrectCount} / ${totalQ} 星！`
              : `You finished the ${mod?.title} module! ⭐ ${newCorrectCount} out of ${totalQ} stars!`;
          let videoPrompt = "";
          if (isPerfect && videoId) {
            videoPrompt = "";
          } else if (!isPerfect && videoId) {
            videoPrompt = isZh ? " 全部答对就能看视频奖励哦！" : " Get a perfect score to unlock the video reward!";
          } else if (!videoId && !localStorage.getItem("koko-video-completion-tip")) {
            videoPrompt = isZh
              ? " 家长可以在模块列表中添加视频奖励哦！"
              : " Parents: you can add a YouTube video reward from the module list!";
            localStorage.setItem("koko-video-completion-tip", "1");
          }
          setMessages((prev) => [
            ...prev, userMsg,
            { role: "assistant", content: replyText },
            { role: "assistant", content: completeText + videoPrompt },
          ]);
          speak(replyText);
          setTimeout(() => speak(completeText + videoPrompt), 2000);
          setModuleComplete(true);
          saveModuleScore(newCorrectCount);
          if (isPerfect && videoId) {
            setTimeout(() => setShowReward(true), 3000);
          }
        } else {
          const retryIntro = ttsLang === "zh"
            ? `我们来复习答错的题目吧！还有 ${wrongs.length} 道题要再试一次。`
            : `Let's go over the ones you missed! You have ${wrongs.length} question${wrongs.length > 1 ? "s" : ""} to try again.`;
          setMessages((prev) => [
            ...prev, userMsg,
            { role: "assistant", content: replyText },
            { role: "assistant", content: `${retryIntro} ${wrongs[0].question}` },
          ]);
          speak(replyText);
          setTimeout(() => speak(`${retryIntro} ${wrongs[0].question}`, wrongs[0].choices), 2000);
          setQuestions([...wrongs]);
          setQuestionIndex(0);
          setIsRetryRound(true);
          wrongThisRoundRef.current = [];
        }

        setAnswering(false);
        return;
      }

      // Normal flow: separate reply bubble and question bubble
      setQuestionIndex(nextIdx);
      setMessages((prev) => [
        ...prev, userMsg,
        { role: "assistant", content: replyText },
        { role: "assistant", content: questionText },
      ]);
      speak(replyText);
      setTimeout(() => speak(questionText, nextChoices), 2000);
      setAnswering(false);
    },
    [questions, questionIndex, correctCount, totalQ, moduleId, mod?.title, videoId, speak, saveModuleScore, answering]
  );

  const currentQ = questions[questionIndex] || null;

  // Show intro if module has one and we haven't started yet
  if (showIntro && intro && !skipIntros) {
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
