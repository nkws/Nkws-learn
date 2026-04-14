import { useState, useCallback, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import SubjectScreen from "./screens/SubjectScreen";
import TopicListScreen from "./screens/TopicListScreen";
import ModuleListScreen from "./screens/ModuleListScreen";
import ChatScreen from "./screens/ChatScreen";
import AboutScreen from "./screens/AboutScreen";
import HowToScreen from "./screens/HowToScreen";
import LoginScreen from "./screens/LoginScreen";
import ChildPickerScreen from "./screens/ChildPickerScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { useAuth } from "./contexts/AuthContext";
import { getSubjectsForLevel, getTotalStars } from "./utils/constants";
import {
  loadProgress, saveProgress,
  loadModuleVideos, saveModuleVideos,
  loadTopicVideos, saveTopicVideos,
  loadNavState, saveNavState,
} from "./utils/progress";
import {
  fetchChildren, createChild, updateChild, deleteChild,
  fetchProgress, saveCloudProgress,
  cloudProgressToLocal, cloudToNavState, cloudToModuleVideos, cloudToTopicVideos,
} from "./utils/cloudSync";

export default function App() {
  const { user, loading, signOut, isConfigured } = useAuth();

  // Auth & child state
  const [skippedLogin, setSkippedLogin] = useState(false);
  const [children, setChildren] = useState([]);
  const [activeChild, setActiveChild] = useState(null);
  const [childrenLoaded, setChildrenLoaded] = useState(false);

  // Nav state — restored from localStorage or cloud
  const [nav] = useState(() => {
    const saved = loadNavState();
    if (saved && saved.screen === "chat") return { ...saved, screen: "modules" };
    return saved;
  });
  const [screen, setScreen] = useState(nav?.screen || "home");
  const [activeLevel, setActiveLevel] = useState(nav?.level || null);
  const [activeSubject, setActiveSubject] = useState(nav?.subject || null);
  const [activeTopic, setActiveTopic] = useState(nav?.topic || null);
  const [activeModule, setActiveModule] = useState(null);
  const [progress, setProgress] = useState(() => loadProgress());
  const [moduleVideos, setModuleVideos] = useState(() => loadModuleVideos());
  const [topicVideos, setTopicVideos] = useState(() => loadTopicVideos());

  // Save navigation state on every screen change
  useEffect(() => {
    saveNavState({ screen, level: activeLevel, subject: activeSubject, topic: activeTopic });
  }, [screen, activeLevel, activeSubject, activeTopic]);

  // Load children when user logs in; reset on user change via cleanup
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    fetchChildren(user.id).then((kids) => {
      if (!cancelled) {
        setChildren(kids);
        setChildrenLoaded(true);
      }
    });
    return () => { cancelled = true; setChildrenLoaded(false); };
  }, [user]);

  // Cloud sync: save progress when it changes (if child selected)
  const syncToCloud = useCallback((prog, modVids, topVids) => {
    if (!activeChild) return;
    saveCloudProgress(activeChild.id, {
      stars: prog.stars,
      moduleStars: prog.moduleStars,
      completedModules: prog.completedModules,
      navState: { screen, level: activeLevel, subject: activeSubject, topic: activeTopic },
      moduleVideos: modVids,
      topicVideos: topVids,
    });
  }, [activeChild, screen, activeLevel, activeSubject, activeTopic]);

  // When a child is selected, load their cloud progress
  const handleSelectChild = useCallback(async (child) => {
    setActiveChild(child);
    const cloudData = await fetchProgress(child.id);
    if (cloudData) {
      const localProg = cloudProgressToLocal(cloudData);
      const navState = cloudToNavState(cloudData);
      const modVids = cloudToModuleVideos(cloudData);
      const topVids = cloudToTopicVideos(cloudData);
      if (localProg) {
        setProgress(localProg);
        saveProgress(localProg);
      }
      if (navState) {
        setScreen(navState.screen === "chat" ? "modules" : (navState.screen || "home"));
        setActiveLevel(navState.level || null);
        setActiveSubject(navState.subject || null);
        setActiveTopic(navState.topic || null);
      } else {
        setScreen("home");
        setActiveLevel(null);
        setActiveSubject(null);
        setActiveTopic(null);
      }
      if (modVids) { setModuleVideos(modVids); saveModuleVideos(modVids); }
      if (topVids) { setTopicVideos(topVids); saveTopicVideos(topVids); }
    } else {
      // No cloud data — start fresh
      const fresh = { stars: 0, moduleStars: {}, completedModules: [], completedTopics: [], lastSession: null };
      setProgress(fresh);
      saveProgress(fresh);
      setScreen("home");
      setActiveLevel(null);
      setActiveSubject(null);
      setActiveTopic(null);
    }
  }, []);

  const handleAddChild = useCallback(async (name, avatar) => {
    if (!user) return;
    const child = await createChild(user.id, name, avatar);
    if (child) setChildren((prev) => [...prev, child]);
  }, [user]);

  const handleEditChild = useCallback(async (childId, updates) => {
    const updated = await updateChild(childId, updates);
    if (updated) {
      setChildren((prev) => prev.map((c) => c.id === childId ? updated : c));
      if (activeChild?.id === childId) setActiveChild(updated);
    }
  }, [activeChild]);

  const handleDeleteChild = useCallback(async (childId) => {
    const ok = await deleteChild(childId);
    if (ok) {
      setChildren((prev) => prev.filter((c) => c.id !== childId));
      if (activeChild?.id === childId) setActiveChild(null);
    }
  }, [activeChild]);

  const handleSignOut = useCallback(async () => {
    await signOut();
    setActiveChild(null);
    setChildren([]);
    setChildrenLoaded(false);
    setSkippedLogin(false);
    setScreen("home");
    setActiveLevel(null);
    setActiveSubject(null);
    setActiveTopic(null);
  }, [signOut]);

  const handleModuleVideosChange = useCallback((v) => {
    setModuleVideos(v);
    saveModuleVideos(v);
    syncToCloud(progress, v, topicVideos);
  }, [progress, topicVideos, syncToCloud]);

  const handleTopicVideosChange = useCallback((v) => {
    setTopicVideos(v);
    saveTopicVideos(v);
    syncToCloud(progress, moduleVideos, v);
  }, [progress, moduleVideos, syncToCloud]);

  const handleSetProgress = useCallback((updater) => {
    setProgress((prev) => {
      const updated = typeof updater === "function" ? updater(prev) : updater;
      saveProgress(updated);
      syncToCloud(updated, moduleVideos, topicVideos);
      return updated;
    });
  }, [moduleVideos, topicVideos, syncToCloud]);

  const handleStartModule = useCallback((moduleId) => {
    setActiveModule(moduleId);
    setScreen("chat");
  }, []);

  const handleReattempt = useCallback((moduleId) => {
    handleSetProgress((prev) => {
      const updated = {
        ...prev,
        completedModules: (prev.completedModules || []).filter((id) => id !== moduleId),
      };
      return updated;
    });
    setActiveModule(moduleId);
    setScreen("chat");
  }, [handleSetProgress]);

  const handleResetTopic = useCallback((topicId) => {
    handleSetProgress((prev) => {
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
      return {
        ...prev,
        moduleStars: newModuleStars,
        completedModules: newCompleted,
        stars: getTotalStars(newModuleStars),
      };
    });
  }, [activeLevel, handleSetProgress]);

  // Show loading spinner while auth initialises
  if (loading) {
    return (
      <div className="screen home-screen" style={{ justifyContent: "center" }}>
        <span className="hero-mascot">🦊</span>
        <p>Loading...</p>
      </div>
    );
  }

  // Auth gate: show login if Supabase is configured and user not logged in
  if (isConfigured && !user && !skippedLogin) {
    return <LoginScreen onSkip={() => setSkippedLogin(true)} />;
  }

  // Child picker: show if logged in but no child selected
  if (isConfigured && user && !activeChild) {
    if (!childrenLoaded) {
      return (
        <div className="screen home-screen" style={{ justifyContent: "center" }}>
          <span className="hero-mascot">🦊</span>
          <p>Loading profiles...</p>
        </div>
      );
    }
    return (
      <ChildPickerScreen
        children={children}
        onSelectChild={handleSelectChild}
        onAddChild={handleAddChild}
        onEditChild={handleEditChild}
        onDeleteChild={handleDeleteChild}
        onSignOut={handleSignOut}
      />
    );
  }

  if (screen === "dashboard" && activeChild) {
    return (
      <DashboardScreen
        child={activeChild}
        progress={progress}
        onBack={() => setScreen("home")}
      />
    );
  }

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
        setProgress={handleSetProgress}
        moduleVideos={moduleVideos}
        activeChild={activeChild}
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
        onSelectSubject={(subjectId) => { setActiveSubject(subjectId); setScreen("topics"); }}
        onBack={() => setScreen("home")}
      />
    );
  }

  return (
    <HomeScreen
      progress={progress}
      activeChild={activeChild}
      user={user}
      onSelectLevel={(level) => { setActiveLevel(level); setScreen("subjects"); }}
      onDashboard={() => setScreen("dashboard")}
      onSwitchChild={() => setActiveChild(null)}
      onSignOut={handleSignOut}
      onHowTo={() => setScreen("howto")}
      onAbout={() => setScreen("about")}
    />
  );
}
