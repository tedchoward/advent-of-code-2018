import { calculatePowerLevel } from '../calculate-power-level';

describe('calculatePowerLevel', () => {
  it('has power level 4 on grid 8, position 3,5', () => {
    expect(calculatePowerLevel(3, 5, 8)).toBe(4);
  });

  it('has power level -5 on grid 57, position 122,79', () => {
    expect(calculatePowerLevel(122, 79, 57)).toBe(-5);
  });

  it('has power level 0 on grid 39, position 217,196', () => {
    expect(calculatePowerLevel(217, 196, 39)).toBe(0);
  });

  it('has power level 4 on grid 71, position 101,153', () => {
    expect(calculatePowerLevel(101, 153, 71)).toBe(4);
  });
});
