import { plantCounter } from '../plant-counter';

describe('plantCounter', () => {
  it('returns the sum of the indexes of the "#" characters in the string', () => {
    const state = '.#....##....#####...#######....#.#..##.';
    expect(plantCounter(state, -3)).toBe(325);
  });
});
