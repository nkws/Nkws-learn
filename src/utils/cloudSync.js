import { supabase, isSupabaseConfigured } from "./supabase";

// ============ CHILDREN ============

export async function fetchChildren(userId) {
  if (!isSupabaseConfigured()) return [];
  const { data, error } = await supabase
    .from("children")
    .select("*")
    .eq("user_id", userId)
    .order("created_at");
  if (error) { console.error("fetchChildren:", error); return []; }
  return data;
}

export async function createChild(userId, name, avatar = "🦊") {
  if (!isSupabaseConfigured()) return null;
  const { data, error } = await supabase
    .from("children")
    .insert({ user_id: userId, name, avatar })
    .select()
    .single();
  if (error) { console.error("createChild:", error); return null; }
  // Create empty progress row
  await supabase.from("child_progress").insert({ child_id: data.id });
  return data;
}

export async function updateChild(childId, updates) {
  if (!isSupabaseConfigured()) return null;
  const { data, error } = await supabase
    .from("children")
    .update(updates)
    .eq("id", childId)
    .select()
    .single();
  if (error) { console.error("updateChild:", error); return null; }
  return data;
}

export async function deleteChild(childId) {
  if (!isSupabaseConfigured()) return false;
  const { error } = await supabase
    .from("children")
    .delete()
    .eq("id", childId);
  if (error) { console.error("deleteChild:", error); return false; }
  return true;
}

// ============ PROGRESS ============

export async function fetchProgress(childId) {
  if (!isSupabaseConfigured()) return null;
  const { data, error } = await supabase
    .from("child_progress")
    .select("*")
    .eq("child_id", childId)
    .single();
  if (error) { console.error("fetchProgress:", error); return null; }
  return data;
}

export async function saveCloudProgress(childId, progress) {
  if (!isSupabaseConfigured()) return;
  const { error } = await supabase
    .from("child_progress")
    .update({
      stars: progress.stars || 0,
      module_stars: progress.moduleStars || {},
      completed_modules: progress.completedModules || [],
      nav_state: progress.navState || null,
      module_videos: progress.moduleVideos || {},
      topic_videos: progress.topicVideos || {},
      updated_at: new Date().toISOString(),
    })
    .eq("child_id", childId);
  if (error) console.error("saveCloudProgress:", error);
}

export function cloudProgressToLocal(cloud) {
  if (!cloud) return null;
  return {
    stars: cloud.stars || 0,
    moduleStars: cloud.module_stars || {},
    completedModules: cloud.completed_modules || [],
    completedTopics: [],
    lastSession: cloud.updated_at ? Date.parse(cloud.updated_at) : null,
  };
}

export function cloudToNavState(cloud) {
  return cloud?.nav_state || null;
}

export function cloudToModuleVideos(cloud) {
  return cloud?.module_videos || {};
}

export function cloudToTopicVideos(cloud) {
  return cloud?.topic_videos || {};
}

// ============ QUIZ ATTEMPTS ============

export async function recordQuizAttempt(childId, moduleId, score, total, wrongAnswers) {
  if (!isSupabaseConfigured()) return;
  const { error } = await supabase
    .from("quiz_attempts")
    .insert({
      child_id: childId,
      module_id: moduleId,
      score,
      total,
      wrong_answers: wrongAnswers,
    });
  if (error) console.error("recordQuizAttempt:", error);
}

export async function fetchRecentAttempts(childId, limit = 20) {
  if (!isSupabaseConfigured()) return [];
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*")
    .eq("child_id", childId)
    .order("completed_at", { ascending: false })
    .limit(limit);
  if (error) { console.error("fetchRecentAttempts:", error); return []; }
  return data;
}

export async function fetchAttemptsByModule(childId, moduleId) {
  if (!isSupabaseConfigured()) return [];
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*")
    .eq("child_id", childId)
    .eq("module_id", moduleId)
    .order("completed_at", { ascending: false });
  if (error) { console.error("fetchAttemptsByModule:", error); return []; }
  return data;
}

export async function fetchWeeklyStats(childId, weeks = 4) {
  if (!isSupabaseConfigured()) return [];
  const since = new Date();
  since.setDate(since.getDate() - weeks * 7);
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("score, total, completed_at, module_id")
    .eq("child_id", childId)
    .gte("completed_at", since.toISOString())
    .order("completed_at");
  if (error) { console.error("fetchWeeklyStats:", error); return []; }
  return data;
}

// ============ SUBSCRIPTIONS ============

export async function fetchSubscriptionStatus(userId) {
  if (!isSupabaseConfigured()) return null;
  const { data, error } = await supabase
    .from("user_subscriptions")
    .select("status")
    .eq("user_id", userId)
    .single();
  if (error) return null;
  return data?.status || null;
}

export async function createCheckoutSession(userId, email) {
  const res = await fetch("/api/create-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, email }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.url;
}
