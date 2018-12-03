import { Claim } from '../claim';
import { overlapCounter } from '../overlap-counter';

describe('overlapCounter', () => {
  it('returns the number of cells that overlap', () => {
    const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'].map(c => new Claim(c));
    const { count } = overlapCounter(input);
    expect(count).toBe(4);
  });

  it('returns the id of the claim that has no overlaps', () => {
    const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'].map(c => new Claim(c));
    const { claimId } = overlapCounter(input);
    expect(claimId).toBe('3');
  });
});
