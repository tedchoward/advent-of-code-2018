import { frequencyCalibrator, duplicateDetector } from '../frequency-calibrator';

describe('frequencyCalibrator', () => {
  it('starts at 0', () => {
    const { adjustedFrequency } = frequencyCalibrator();
    expect(adjustedFrequency).toBe(0);
  });

  it("adds all '+' values to the returned frequency", () => {
    const { adjustedFrequency } = frequencyCalibrator('+1\n+2\n+3');
    expect(adjustedFrequency).toBe(6);
  });

  it("subtracts all '-' values from the returned frequency", () => {
    const { adjustedFrequency } = frequencyCalibrator('-1\n-2\n-3');
    expect(adjustedFrequency).toBe(-6);
  });

  it("works with a combiation of '+' and '-'", () => {
    const { adjustedFrequency } = frequencyCalibrator('+3\n-2\n-3\n+10');
    expect(adjustedFrequency).toBe(8);
  });

  it('returns 0 as firstDuplicate for +1-1', () => {
    const firstDuplicate = duplicateDetector('+1\n-1');
    expect(firstDuplicate).toBe(0);
  });

  it('returns 10 as firstDuplicate for +3, +3, +4, -2, -4', () => {
    const firstDuplicate = duplicateDetector('+3\n+3\n+4\n-2\n-4');
    expect(firstDuplicate).toBe(10);
  });

  it('returns 5 as firstDuplicate for -6, +3, +8, +5, -6', () => {
    const firstDuplicate = duplicateDetector('-6\n+3\n+8\n+5\n-6');
    expect(firstDuplicate).toBe(5);
  });
});
