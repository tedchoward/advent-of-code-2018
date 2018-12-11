import { findLargestPowerGrid } from '../find-largest-power-grid';

describe('findLargestPowerGrid', () => {
  it('is 33,45 for grid 18', () => {
    expect(findLargestPowerGrid(18)).toMatchObject({ x: 33, y: 45 });
  });

  it('is 21,61 for grid 42', () => {
    expect(findLargestPowerGrid(42)).toMatchObject({ x: 21, y: 61 });
  });
});
