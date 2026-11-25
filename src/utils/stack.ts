/**
 * Calculates sticky card scale: targetScale = 1 - (totalCards - 1 - index) * 0.03
 */
export function calculateCardScale(index: number, totalCards: number, scaleFactor = 0.04): number {
  if (totalCards <= 0) return 1;
  return 1 - (totalCards - 1 - index) * scaleFactor;
}

/**
 * Calculates top offset for stacking cards: index * 28 px
 */
export function calculateCardTopOffset(index: number, step = 28): number {
  return Math.max(0, index * step);
}

/**
 * Calculates card depth z-index so higher index cards naturally stack above lower cards
 */
export function calculateStackZIndex(index: number): number {
  return 10 + index * 10;
}

/**
 * Calculates sticky top position in pixels given a base offset and step
 */
export function calculateStickyTop(index: number, baseOffset = 80, step = 28): number {
  return baseOffset + index * step;
}
