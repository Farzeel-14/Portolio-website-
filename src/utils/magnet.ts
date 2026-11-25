export interface RectBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface MagnetOffsetResult {
  isWithin: boolean;
  x: number;
  y: number;
}

/**
 * Calculates mouse offset relative to center divided by strength factor
 * if cursor is within padding distance of element bounds.
 */
export function calculateMagnetOffset(
  mouseX: number,
  mouseY: number,
  bounds: RectBounds,
  padding = 150,
  strength = 3
): MagnetOffsetResult {
  const minX = bounds.left - padding;
  const maxX = bounds.left + bounds.width + padding;
  const minY = bounds.top - padding;
  const maxY = bounds.top + bounds.height + padding;

  const isWithin =
    mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY;

  if (!isWithin) {
    return { isWithin: false, x: 0, y: 0 };
  }

  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;

  const diffX = mouseX - centerX;
  const diffY = mouseY - centerY;

  const effectiveStrength = strength <= 0 ? 1 : strength;

  return {
    isWithin: true,
    x: diffX / effectiveStrength,
    y: diffY / effectiveStrength,
  };
}
