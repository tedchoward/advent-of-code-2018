import { findLargestPowerGridAnySize } from '../find-largest-power-grid-any-size';

describe('findLargestPowerGridAnySize', () => {
  it('is 33,45 for grid 18', () => {
    expect(findLargestPowerGridAnySize(18)).toMatchObject({ x: 90, y: 269, size: 16 });
  });

  it('is 21,61 for grid 42', () => {
    expect(findLargestPowerGridAnySize(42)).toMatchObject({ x: 232, y: 251, size: 12 });
  });
});
