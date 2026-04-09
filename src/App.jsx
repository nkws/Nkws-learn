import { useState, useCallback } from "react";
import HomeScreen from "./screens/HomeScreen";
import TopicListScreen from "./screens/TopicListScreen";
import ModuleListScreen from "./screens/ModuleListScreen";
import ChatScreen from "./screens/ChatScreen";
import {
  loadProgress, saveProgress,
  loadModuleVideos, saveModuleVideos,
  loadTopicVideos, saveTopicVideos,
} from "./utils/progress";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeSubject, setActiveSubject] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [progress, setProgress] = useState(() => loadProgress());
  const [moduleVideos, setModuleVideos] = useState(() => loadModuleVideos());
  const [topicVideos, setTopicVideos] = useState(() => loadTopicVideos());

  const handleModuleVideosChange = useCallback((v) => { setModuleVideos(v); saveModuleVideos(v); }, []);
  const handleTopicVideosChange = useCallback((v) => { setTopicVideos(v); saveTopicVideos(v); }, []);

  const handleSelectSubject = useCallback((subjectId) => {
    setActiveSubject(subjectId);
    setScreen("topics");
  }, []);

  const handleSelectTopic = useCallback((topicId) => {
    setActiveTopic(topicId);
    setScreen("modules");
  }, []);

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

  if (screen === "chat" && activeModule && activeTopic && activeSubject) {
    return (
      <ChatScreen
        subjectId={activeSubject}
        topicId={activeTopic}
        moduleId={activeModule}
        progress={progress}
        setProgress={setProgress}
        moduleVideos={moduleVideos}
        onBack={() => setScreen("modules")}
      />
    );
  }

  if (screen === "modules" && activeTopic && activeSubject) {
    return (
      <ModuleListScreen
        subjectId={activeSubject}
        topicId={activeTopic}
        progress={progress}
        moduleVideos={moduleVideos}
        onModuleVideosChange={handleModuleVideosChange}
        onStartModule={handleStartModule}
        onReattempt={handleReattempt}
        onBack={() => setScreen("topics")}
      />
    );
  }

  if (screen === "topics" && activeSubject) {
    return (
      <TopicListScreen
        subjectId={activeSubject}
        progress={progress}
        topicVideos={topicVideos}
        onTopicVideosChange={handleTopicVideosChange}
        onSelectTopic={handleSelectTopic}
        onBack={() => setScreen("home")}
      />
    );
  }

  return (
    <HomeScreen
      progress={progress}
      onSelectSubject={handleSelectSubject}
    />
  );
}
