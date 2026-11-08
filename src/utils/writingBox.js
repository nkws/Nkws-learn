// Shared box-size helper for the handwriting 田字格 boxes. Kept in its own file
// so components can import it without tripping react-refresh's
// "only export components" rule.
//
// Fewer characters on the page get roomier squares; a whole paragraph gets
// smaller ones so several rows fit on one screen.
// Boxes must stay large enough for a child to write a character with a FINGER,
// even when a paragraph is long or the phone is narrow — so the taper for
// longer paragraphs is gentle and the floor is kept finger-writable (~78px).
// The width cap allows ~3 bigger boxes per row on a phone; a wider screen
// (e.g. landscape) simply fits more of them per row rather than shrinking them.
export function boxSizeFor(count) {
  if (typeof window === "undefined") return 99;
  const size = count <= 8 ? 99 : count <= 16 ? 92 : count <= 28 ? 84 : 80;
  const maxForWidth = Math.floor((Math.min(window.innerWidth, 480) - 24 - 8 * 2) / 3);
  return Math.max(78, Math.min(size, maxForWidth));
}
