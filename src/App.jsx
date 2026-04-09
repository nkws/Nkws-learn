import { useState, useCallback } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import ChatScreen from "./screens/ChatScreen";
import { loadProgress, saveProgress, loadModuleVideos, saveModuleVideos } from "./utils/progress";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [activeModule, setActiveModule] = useState(null);
  const [progress, setProgress] = useState(() => loadProgress());
  const [moduleVideos, setModuleVideos] = useState(() => loadModuleVideos());

  const handleModuleVideosChange = useCallback((newVideos) => {
    setModuleVideos(newVideos);
    saveModuleVideos(newVideos);
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

  if (screen === "chat" && activeModule) {
    return (
      <ChatScreen
        moduleId={activeModule}
        progress={progress}
        setProgress={setProgress}
        moduleVideos={moduleVideos}
        onBack={() => setScreen("welcome")}
      />
    );
  }

  return (
    <WelcomeScreen
      progress={progress}
      moduleVideos={moduleVideos}
      onModuleVideosChange={handleModuleVideosChange}
      onStartModule={handleStartModule}
      onReattempt={handleReattempt}
    />
  );
}
