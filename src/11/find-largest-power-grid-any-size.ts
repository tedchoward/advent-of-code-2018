import { calculatePowerLevel } from './calculate-power-level';

const NUM_COLS = 300;
const NUM_ROWS = 300;
const SIZE = NUM_COLS * NUM_ROWS;

export function findLargestPowerGridAnySize(gridSerial: number) {
  const items: number[] = Array(SIZE);

  for (let i = SIZE; --i >= 0; ) {
    const x = (i % NUM_COLS) + 1;
    const y = Math.floor(i / NUM_COLS) + 1;
    items[i] = calculatePowerLevel(x, y, gridSerial);
  }

  // the first candidate is inset 2 spaces from the bottom, right
  let idx = SIZE;
  let x = -1;
  let y = -1;
  let maxPower = Number.MIN_SAFE_INTEGER;
  let size = -1;
  while (--idx >= 0) {
    const currentX = (idx % NUM_COLS) + 1;
    const currentY = Math.floor(idx / NUM_COLS) + 1;

    const maxGridSize = Math.min(NUM_COLS - currentX, NUM_ROWS - currentY);

    for (let gridSize = 1; gridSize <= maxGridSize; gridSize++) {
      let power = 0;
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          power += items[idx + row * NUM_COLS + col];
        }
      }

      if (power > maxPower) {
        maxPower = power;
        size = gridSize;
        x = currentX;
        y = currentY;
        // console.log('x', x, 'y', y, 'size', size, 'maxPower', maxPower);
      }
    }
  }

  return { x, y, size };
}
