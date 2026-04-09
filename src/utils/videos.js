export function extractVideoId(input) {
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  try {
    const url = new URL(trimmed);
    if (url.searchParams.has("v")) return url.searchParams.get("v");
    if (url.hostname === "youtu.be") return url.pathname.slice(1).split("/")[0];
    const embedMatch = url.pathname.match(/\/embed\/([\w-]+)/);
    if (embedMatch) return embedMatch[1];
    const shortsMatch = url.pathname.match(/\/shorts\/([\w-]+)/);
    if (shortsMatch) return shortsMatch[1];
  } catch {
    // not a URL
  }
  return null;
}
