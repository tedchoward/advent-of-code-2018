import { detectCollisions } from '../collision-detector';

describe('collisionDetector', () => {
  it('returns the last cart on the map', () => {
    const input = `/>-<\\
|   |
| /<+-\\
| | | v
\\>+</ |
  |   ^
  \\<->/`;

    const { col: x, row: y } = detectCollisions(input);

    expect(`${x},${y}`).toBe('6,4');
  });
});
