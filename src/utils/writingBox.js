// Shared box-size helper for the handwriting 田字格 boxes. Kept in its own file
// so components can import it without tripping react-refresh's
// "only export components" rule.
//
// Fewer characters on the page get roomier squares; a whole paragraph gets
// smaller ones so several rows fit on one screen.
// Sizes are ~50% larger than the base, for a lower-primary child's hand. The
// width cap allows ~3 boxes per row on a phone (fewer, bigger boxes) so the
// larger size actually shows rather than being clamped down.
export function boxSizeFor(count) {
  if (typeof window === "undefined") return 99;
  const size = count <= 8 ? 99 : count <= 16 ? 87 : count <= 28 ? 75 : 66;
  const maxForWidth = Math.floor((Math.min(window.innerWidth, 480) - 24 - 8 * 2) / 3);
  return Math.max(60, Math.min(size, maxForWidth));
}
