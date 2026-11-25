import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateMagnetOffset } from './magnet';
import {
  calculateCardScale,
  calculateCardTopOffset,
  calculateStickyTop,
  calculateStackZIndex,
} from './stack';
import { calculateMarqueeOffset, calculateRow1Transform, calculateRow2Transform } from './marquee';

test('calculateMagnetOffset returns 0 when pointer outside bounds + padding', () => {
  const bounds = { left: 100, top: 100, width: 200, height: 200 };
  const res = calculateMagnetOffset(500, 500, bounds, 150, 3);
  assert.equal(res.isWithin, false);
  assert.equal(res.x, 0);
  assert.equal(res.y, 0);
});

test('calculateMagnetOffset computes correct offset when pointer is inside', () => {
  const bounds = { left: 100, top: 100, width: 200, height: 200 };
  // Center is at (200, 200)
  // Pointer at (230, 260) -> dx = 30, dy = 60
  // With strength 3 -> x = 10, y = 20
  const res = calculateMagnetOffset(230, 260, bounds, 150, 3);
  assert.equal(res.isWithin, true);
  assert.equal(res.x, 10);
  assert.equal(res.y, 20);
});

test('calculateCardScale calculates progressive scaling for 3 cards', () => {
  assert.equal(Math.round(calculateCardScale(0, 3, 0.03) * 100) / 100, 0.94);
  assert.equal(Math.round(calculateCardScale(1, 3, 0.03) * 100) / 100, 0.97);
  assert.equal(Math.round(calculateCardScale(2, 3, 0.03) * 100) / 100, 1.0);
});

test('calculateCardTopOffset gives 28px step per index', () => {
  assert.equal(calculateCardTopOffset(0), 0);
  assert.equal(calculateCardTopOffset(1), 28);
  assert.equal(calculateCardTopOffset(2), 56);
});

test('calculateStickyTop and calculateStackZIndex return ordered layering values', () => {
  assert.equal(calculateStackZIndex(0), 10);
  assert.equal(calculateStackZIndex(1), 20);
  assert.equal(calculateStackZIndex(2), 30);

  assert.equal(calculateStickyTop(0, 80, 28), 80);
  assert.equal(calculateStickyTop(1, 80, 28), 108);
  assert.equal(calculateStickyTop(2, 80, 28), 136);
});

test('calculateMarqueeOffset computes correctly and row directions differ', () => {
  const offset = calculateMarqueeOffset(400, 200, 800, 0.3);
  // (400 - 200 + 800) * 0.3 = 1000 * 0.3 = 300
  assert.equal(offset, 300);

  const row1 = calculateRow1Transform(offset, 200);
  const row2 = calculateRow2Transform(offset, 200);
  assert.equal(row1, 100);
  assert.equal(row2, -100);
});
