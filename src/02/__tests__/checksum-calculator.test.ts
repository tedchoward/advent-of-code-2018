import { findDuplicates, findTriplicates, calculateChecksum } from '../checksum-calculator';

describe('checksumCalculator', () => {
  describe('findDuplicates', () => {
    it('returns 1 if any letter occurs exactly twice', () => {
      expect(findDuplicates('abbcccddeeeef')).toBe(1);
    });

    it('returns 0 if no letters occurs exactly twice', () => {
      expect(findDuplicates('abcccwdeeeef')).toBe(0);
    });
  });

  describe('findTriplicates', () => {
    it('returns 1 if any letter occurs exactly three times', () => {
      expect(findTriplicates('abbcccddeeeefff')).toBe(1);
    });

    it('returns 0 if no letters occurs exactly three times', () => {
      expect(findTriplicates('abbccddeeeef')).toBe(0);
    });
  });

  it('calculates the number of duplicates * the number of triplicates', () => {
    const ids = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];
    expect(calculateChecksum(ids)).toBe(12);
  });
});
