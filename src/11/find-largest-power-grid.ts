import { calculatePowerLevel } from './calculate-power-level';

const SIZE = 300 * 300;
const NUM_COLS = 300;

export function findLargestPowerGrid(gridSerial: number) {
  const items: number[] = Array(SIZE);

  for (let i = SIZE; --i >= 0; ) {
    const x = (i % NUM_COLS) + 1;
    const y = Math.floor(i / NUM_COLS) + 1;
    items[i] = calculatePowerLevel(x, y, gridSerial);
  }

  // the first candidate is inset 2 spaces from the bottom, right
  let idx = SIZE - 1 - 2 * NUM_COLS - 2;
  let x = -1;
  let y = -1;
  let maxPower = Number.MIN_SAFE_INTEGER;
  while (idx >= 0) {
    const powerLevel =
      items[idx] +
      items[idx + 1] +
      items[idx + 2] +
      items[idx + NUM_COLS] +
      items[idx + NUM_COLS + 1] +
      items[idx + NUM_COLS + 2] +
      items[idx + NUM_COLS * 2] +
      items[idx + NUM_COLS * 2 + 1] +
      items[idx + NUM_COLS * 2 + 2];

    if (!isNaN(powerLevel) && powerLevel > maxPower) {
      maxPower = powerLevel;
      x = (idx % NUM_COLS) + 1;
      y = Math.floor(idx / NUM_COLS) + 1;
      // console.log('x', x, 'y', y, 'maxPower', maxPower);
    }

    idx -= 1;
    // if the index needs to be at least 2 spaces from the right
    const offsetValue = (idx % NUM_COLS) - (NUM_COLS - 3);
    if (offsetValue > 0) {
      idx -= offsetValue;
    }
  }

  return { x, y };
}
