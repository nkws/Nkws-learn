import { useState, useCallback } from "react";
import HomeScreen from "./screens/HomeScreen";
import SubjectScreen from "./screens/SubjectScreen";
import TopicListScreen from "./screens/TopicListScreen";
import ModuleListScreen from "./screens/ModuleListScreen";
import ChatScreen from "./screens/ChatScreen";
import AboutScreen from "./screens/AboutScreen";
import HowToScreen from "./screens/HowToScreen";
import { getSubjectsForLevel, getTotalStars } from "./utils/constants";
import {
  loadProgress, saveProgress,
  loadModuleVideos, saveModuleVideos,
  loadTopicVideos, saveTopicVideos,
} from "./utils/progress";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeLevel, setActiveLevel] = useState(null);
  const [activeSubject, setActiveSubject] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [progress, setProgress] = useState(() => loadProgress());
  const [moduleVideos, setModuleVideos] = useState(() => loadModuleVideos());
  const [topicVideos, setTopicVideos] = useState(() => loadTopicVideos());

  const handleModuleVideosChange = useCallback((v) => { setModuleVideos(v); saveModuleVideos(v); }, []);
  const handleTopicVideosChange = useCallback((v) => { setTopicVideos(v); saveTopicVideos(v); }, []);

  const handleStartModule = useCallback((moduleId) => {
    setActiveModule(moduleId);
    setScreen("chat");
  }, []);

  const handleReattempt = useCallback((moduleId) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        completedModules: (prev.completedModules || []).filter((id) => id !== moduleId),
      };
      saveProgress(updated);
      return updated;
    });
    setActiveModule(moduleId);
    setScreen("chat");
  }, []);

  const handleResetTopic = useCallback((topicId) => {
    setProgress((prev) => {
      // Find all module IDs for this topic in the active level
      const subjects = getSubjectsForLevel(activeLevel) || [];
      const allModuleIds = [];
      for (const subject of subjects) {
        const topic = subject.topics.find((t) => t.id === topicId);
        if (topic) {
          topic.modules.forEach((m) => allModuleIds.push(m.id));
        }
      }
      const newModuleStars = { ...prev.moduleStars };
      const newCompleted = [...(prev.completedModules || [])];
      for (const id of allModuleIds) {
        delete newModuleStars[id];
        const idx = newCompleted.indexOf(id);
        if (idx !== -1) newCompleted.splice(idx, 1);
      }
      const updated = {
        ...prev,
        moduleStars: newModuleStars,
        completedModules: newCompleted,
        stars: getTotalStars(newModuleStars),
      };
      saveProgress(updated);
      return updated;
    });
  }, [activeLevel]);

  if (screen === "howto") {
    return <HowToScreen onBack={() => setScreen("home")} />;
  }

  if (screen === "about") {
    return <AboutScreen onBack={() => setScreen("home")} />;
  }

  if (screen === "chat" && activeModule && activeTopic && activeSubject && activeLevel) {
    return (
      <ChatScreen
        subjectId={activeSubject}
        topicId={activeTopic}
        moduleId={activeModule}
        level={activeLevel}
        progress={progress}
        setProgress={setProgress}
        moduleVideos={moduleVideos}
        onBack={() => setScreen("modules")}
      />
    );
  }

  if (screen === "modules" && activeTopic && activeSubject && activeLevel) {
    return (
      <ModuleListScreen
        subjectId={activeSubject}
        topicId={activeTopic}
        level={activeLevel}
        progress={progress}
        moduleVideos={moduleVideos}
        onModuleVideosChange={handleModuleVideosChange}
        onStartModule={handleStartModule}
        onReattempt={handleReattempt}
        onResetTopic={handleResetTopic}
        onBack={() => setScreen("topics")}
      />
    );
  }

  if (screen === "topics" && activeSubject && activeLevel) {
    return (
      <TopicListScreen
        subjectId={activeSubject}
        level={activeLevel}
        progress={progress}
        topicVideos={topicVideos}
        onTopicVideosChange={handleTopicVideosChange}
        onSelectTopic={(topicId) => { setActiveTopic(topicId); setScreen("modules"); }}
        onBack={() => setScreen("subjects")}
      />
    );
  }

  if (screen === "subjects" && activeLevel) {
    return (
      <SubjectScreen
        level={activeLevel}
        progress={progress}
        onSelectSubject={(subjectId) => { setActiveSubject(subjectId); setScreen("topics"); }}
        onBack={() => setScreen("home")}
      />
    );
  }

  return (
    <HomeScreen
      progress={progress}
      onSelectLevel={(level) => { setActiveLevel(level); setScreen("subjects"); }}
      onHowTo={() => setScreen("howto")}
      onAbout={() => setScreen("about")}
    />
  );
}
