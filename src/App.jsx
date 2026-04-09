import { useState, useCallback } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import ChatScreen from "./screens/ChatScreen";
import { loadProgress } from "./utils/progress";
import { loadVideos, saveVideos } from "./utils/videos";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [progress, setProgress] = useState(() => loadProgress());
  const [videos, setVideos] = useState(() => loadVideos());

  const handleVideosChange = useCallback((newVideos) => {
    setVideos(newVideos);
    saveVideos(newVideos);
  }, []);

  if (screen === "chat") {
    return (
      <ChatScreen
        progress={progress}
        setProgress={setProgress}
        videos={videos}
        onBack={() => setScreen("welcome")}
      />
    );
  }

  return (
    <WelcomeScreen
      progress={progress}
      videos={videos}
      onVideosChange={handleVideosChange}
      onStart={() => setScreen("chat")}
    />
  );
}
