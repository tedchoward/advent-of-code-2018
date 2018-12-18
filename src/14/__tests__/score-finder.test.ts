import { scoreFinder } from '../score-finder';

describe('scoreFinder', () => {
  it('returns 9 for 51589', () => {
    expect(scoreFinder('37', '51589')).toBe(9);
  });

  it('returns 5 for 01245', () => {
    expect(scoreFinder('37', '01245')).toBe(5);
  });

  it('returns 18 for 92510', () => {
    expect(scoreFinder('37', '92510')).toBe(18);
  });

  it('returns 2018 for 59414', () => {
    expect(scoreFinder('37', '59414')).toBe(2018);
  });
});
