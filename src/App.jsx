import { useState, useCallback } from "react";
import HomeScreen from "./screens/HomeScreen";
import ModuleListScreen from "./screens/ModuleListScreen";
import ChatScreen from "./screens/ChatScreen";
import { loadProgress, saveProgress, loadModuleVideos, saveModuleVideos } from "./utils/progress";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [progress, setProgress] = useState(() => loadProgress());
  const [moduleVideos, setModuleVideos] = useState(() => loadModuleVideos());

  const handleModuleVideosChange = useCallback((newVideos) => {
    setModuleVideos(newVideos);
    saveModuleVideos(newVideos);
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

  if (screen === "chat" && activeModule && activeTopic) {
    return (
      <ChatScreen
        topicId={activeTopic}
        moduleId={activeModule}
        progress={progress}
        setProgress={setProgress}
        moduleVideos={moduleVideos}
        onBack={() => setScreen("modules")}
      />
    );
  }

  if (screen === "modules" && activeTopic) {
    return (
      <ModuleListScreen
        topicId={activeTopic}
        progress={progress}
        moduleVideos={moduleVideos}
        onModuleVideosChange={handleModuleVideosChange}
        onStartModule={handleStartModule}
        onReattempt={handleReattempt}
        onBack={() => setScreen("home")}
      />
    );
  }

  return (
    <HomeScreen
      progress={progress}
      onSelectTopic={handleSelectTopic}
    />
  );
}
