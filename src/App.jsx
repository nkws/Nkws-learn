import { useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import ChatScreen from "./screens/ChatScreen";
import { loadProgress } from "./utils/progress";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [progress, setProgress] = useState(() => loadProgress());

  if (screen === "chat") {
    return (
      <ChatScreen
        progress={progress}
        setProgress={setProgress}
        onBack={() => setScreen("welcome")}
      />
    );
  }

  return (
    <WelcomeScreen
      progress={progress}
      onStart={() => setScreen("chat")}
    />
  );
}
