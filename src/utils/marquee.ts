/**
 * Calculates marquee scroll offset based on scrollY, sectionTop, and viewport height.
 * Formula: (scrollY - sectionTop + innerHeight) * 0.3
 */
export function calculateMarqueeOffset(
  scrollY: number,
  sectionTop: number,
  innerHeight: number,
  speedFactor = 0.3
): number {
  return (scrollY - sectionTop + innerHeight) * speedFactor;
}

/**
 * Calculates transform for Row 1 (moves right on scroll): offset - 200
 */
export function calculateRow1Transform(offset: number, baseShift = 200): number {
  return offset - baseShift;
}

/**
 * Calculates transform for Row 2 (moves left on scroll): -(offset - 200)
 */
export function calculateRow2Transform(offset: number, baseShift = 200): number {
  return -(offset - baseShift);
}
