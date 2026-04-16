import { useState, useRef, useEffect, useCallback } from "react";
import ChatBubble from "../components/ChatBubble";
import ChoiceButtons from "../components/ChoiceButtons";
import RewardModal from "../components/RewardModal";
import { useTTS } from "../hooks/useSpeech";
import { getModule, getTotalStars } from "../utils/constants";
import { saveProgress, updateStreak } from "../utils/progress";
import { buildModuleQuestions, getPraise, getHint, getIntro } from "../utils/kokoEngine";
import { recordQuizAttempt } from "../utils/cloudSync";
import IntroScreen from "./IntroScreen";


export default function ChatScreen({
  subjectId,
  topicId,
  moduleId,
  level,
  setProgress,
  moduleVideos,
  activeChild,
  onBack,
}) {
  const mod = getModule(subjectId, topicId, moduleId, level);
  const videoId = moduleVideos[moduleId] || null;
  const intro = getIntro(moduleId);
  const ttsLang = subjectId === "chinese" ? "zh" : "en";
  const { speak } = useTTS(ttsLang);

  // If no intro, initialise quiz state eagerly to avoid an effect
  const initialQuiz = !intro ? buildModuleQuestions(moduleId) : null;
  const [showIntro, setShowIntro] = useState(!!intro);
  const [messages, setMessages] = useState(() => {
    if (!initialQuiz || initialQuiz.length === 0) return [];
    const isZh = subjectId === "chinese";
    const greeting = isZh
      ? `这是你的第一道题。${initialQuiz[0].question}`
      : `Here's your first question. ${initialQuiz[0].question}`;
    return [{ role: "assistant", content: greeting }];
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(initialQuiz || []);
  const [showReward, setShowReward] = useState(false);
  const [moduleComplete, setModuleComplete] = useState(false);
  const [answering, setAnswering] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isRetryRound, setIsRetryRound] = useState(false);
  const [totalQ, setTotalQ] = useState(initialQuiz ? initialQuiz.length : 0);
  const wrongThisRoundRef = useRef([]);
  const allWrongRef = useRef([]);
  const chatEndRef = useRef(null);
  const lastPassageRef = useRef(null);

  const startQuiz = useCallback(() => {
    const qs = buildModuleQuestions(moduleId);
    setQuestions(qs);
    setTotalQ(qs.length);
    wrongThisRoundRef.current = [];
    allWrongRef.current = [];
    if (qs.length > 0) {
      const isZh = subjectId === "chinese";
      const greeting = isZh
        ? `这是你的第一道题。${qs[0].question}`
        : `Here's your first question. ${qs[0].question}`;
      if (qs[0].passage) {
        lastPassageRef.current = qs[0].passage;
        setMessages([
          { role: "assistant", content: qs[0].passage },
          { role: "assistant", content: greeting },
        ]);
      } else {
        setMessages([{ role: "assistant", content: greeting }]);
      }
    }
    setShowIntro(false);
  }, [moduleId, subjectId]);

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
        allWrongRef.current.push({ question: currentQ.question, userAnswer: choice, correctAnswer: currentQ.answer });
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
          speak(completeText + videoPrompt, null, { cancel: false });
          setModuleComplete(true);
          saveModuleScore(newCorrectCount);
          updateStreak();
          if (activeChild) {
            recordQuizAttempt(activeChild.id, moduleId, newCorrectCount, totalQ, allWrongRef.current);
          }
          if (isPerfect && videoId) {
            setTimeout(() => setShowReward(true), 3000);
          }
        } else {
          const retryIntro = ttsLang === "zh"
            ? `我们来复习答错的题目吧！还有 ${wrongs.length} 道题要再试一次。`
            : `Let's go over the ones you missed! You have ${wrongs.length} question${wrongs.length > 1 ? "s" : ""} to try again.`;
          const retryPassageMsgs = [];
          if (wrongs[0].passage && wrongs[0].passage !== lastPassageRef.current) {
            retryPassageMsgs.push({ role: "assistant", content: wrongs[0].passage });
            lastPassageRef.current = wrongs[0].passage;
          }
          setMessages((prev) => [
            ...prev, userMsg,
            { role: "assistant", content: replyText },
            ...retryPassageMsgs,
            { role: "assistant", content: `${retryIntro} ${wrongs[0].question}` },
          ]);
          speak(replyText);
          speak(`${retryIntro} ${wrongs[0].question}`, wrongs[0].choices, { cancel: false });
          setQuestions([...wrongs]);
          setQuestionIndex(0);
          setIsRetryRound(true);
          wrongThisRoundRef.current = [];
        }

        setAnswering(false);
        return;
      }

      // Normal flow: separate reply bubble and question bubble
      const nextQ = questions[nextIdx];
      const passageMsgs = [];
      if (nextQ.passage && nextQ.passage !== lastPassageRef.current) {
        passageMsgs.push({ role: "assistant", content: nextQ.passage });
        lastPassageRef.current = nextQ.passage;
      }
      setQuestionIndex(nextIdx);
      setMessages((prev) => [
        ...prev, userMsg,
        { role: "assistant", content: replyText },
        ...passageMsgs,
        { role: "assistant", content: questionText },
      ]);
      speak(replyText);
      speak(questionText, nextChoices, { cancel: false });
      setAnswering(false);
    },
    [questions, questionIndex, correctCount, totalQ, moduleId, mod?.title, videoId, speak, saveModuleScore, answering, activeChild, isRetryRound, ttsLang]
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
