import { taxiDiff } from '../taxi-diff';

describe('taxiDiff', () => {
  it('calculates the "Manhatten distance" between two points', () => {
    expect(taxiDiff({ x: 0, y: 6 }, { x: 6, y: 0 })).toBe(12);
  });
});
