import { parser } from '../parser';
import { sumValues } from '../sum-values';

describe('sumValues', () => {
  it('adds up the values of the nodes', () => {
    const input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2'.split(/\W/).map(s => parseInt(s, 10));
    const tree = parser(input);
    const sum = sumValues(tree);
    expect(sum).toBe(66);
  });
});
