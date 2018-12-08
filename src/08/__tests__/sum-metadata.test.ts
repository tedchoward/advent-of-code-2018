import { parser } from '../parser';
import { sumMetadata } from '../sum-metadata';

describe('sumMetadata', () => {
  it('returns the sum of the metadata', () => {
    const input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2'.split(/\W/).map(s => parseInt(s, 10));
    const tree = parser(input);
    const sum = sumMetadata(tree);
    expect(sum).toBe(138);
  });
});
