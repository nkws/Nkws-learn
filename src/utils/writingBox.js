// Shared box-size helper for the handwriting 田字格 boxes. Kept in its own file
// so components can import it without tripping react-refresh's
// "only export components" rule.
//
// Fewer characters on the page get roomier squares; a whole paragraph gets
// smaller ones so several rows fit on one screen.
// Sizes are ~20% larger than the base, chosen for a lower-primary child's hand.
export function boxSizeFor(count) {
  if (typeof window === "undefined") return 79;
  const size = count <= 8 ? 79 : count <= 16 ? 70 : count <= 28 ? 60 : 53;
  const maxForWidth = Math.floor((Math.min(window.innerWidth, 480) - 24 - 6 * 3) / 4);
  return Math.max(50, Math.min(size, maxForWidth));
}
