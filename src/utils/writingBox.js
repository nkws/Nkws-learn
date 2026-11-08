// Shared box-size helper for the handwriting 田字格 boxes. Kept in its own file
// so components can import it without tripping react-refresh's
// "only export components" rule.
//
// Fewer characters on the page get roomier squares; a whole paragraph gets
// smaller ones so several rows fit on one screen.
export function boxSizeFor(count) {
  if (typeof window === "undefined") return 66;
  const size = count <= 8 ? 66 : count <= 16 ? 58 : count <= 28 ? 50 : 44;
  const maxForWidth = Math.floor((Math.min(window.innerWidth, 480) - 24 - 6 * 3) / 4);
  return Math.max(42, Math.min(size, maxForWidth));
}
