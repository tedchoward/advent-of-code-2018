import { parsePoint } from '../point';
import { findLargestArea } from '../find-largest-area';

describe('findLargestArea', () => {
  it('returns the size of the largest area', () => {
    const input = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`
      .split(/\n/)
      .map(parsePoint);

    expect(findLargestArea(input)).toBe(17);
  });
});
