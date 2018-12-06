import { findContainedRegion } from '../find-contained-region';
import { parsePoint } from '../point';

describe('findContainedRegion', () => {
  it('returns the size of the region closest to all points', () => {
    const input = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`
      .split(/\n/)
      .map(parsePoint);

    expect(findContainedRegion(input, 32)).toBe(16);
  });
});
