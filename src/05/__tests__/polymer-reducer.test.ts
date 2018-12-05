import { polymerReducer, reactionDetector, findSmallestOption } from '../polymer-reducer';

describe('polymerReducer', () => {
  it('removes all adjacent units of the same type but opposite polarity', () => {
    const input = 'dabAcCaCBAcCcaDA';
    const reducedPolymer = polymerReducer(input);
    expect(reducedPolymer).toBe('dabCBAcaDA');
    expect(reducedPolymer.length).toBe(10);
  });
});

describe('reactionDetector', () => {
  it('returns true if the units are the same type and different polarity', () => {
    const input = 'Aa';
    expect(reactionDetector(input)).toBe(true);
  });

  it('returns false if the units are the same type and polarity', () => {
    const input = 'AA';
    expect(reactionDetector(input)).toBe(false);
  });

  it('returns false if the units are different types', () => {
    const input = 'Ad';
    expect(reactionDetector(input)).toBe(false);
  });

  it('returns false if the polymer is smaller than 2 units', () => {
    const input = 'a';
    expect(reactionDetector(input)).toBe(false);
  });
});

describe('findSmallestOption', () => {
  it('returns the smallest reduced polymer', () => {
    const input = 'dabAcCaCBAcCcaDA';
    expect(findSmallestOption(input)).toBe('daDA');
  });
});
