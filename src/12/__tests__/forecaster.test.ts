import { forecaster } from '../forecaster';

describe('forecaster', () => {
  it('goes 20 generations in the future and adds up the plants', () => {
    const rules = `...## => #
..#.. => #
.#... => #
.#.#. => #
.#.## => #
.##.. => #
.#### => #
#.#.# => #
#.### => #
##.#. => #
##.## => #
###.. => #
###.# => #
####. => #`.split(/\n/);

    expect(forecaster(rules, '#..#.#..##......###...###')).toBe(325);
  });
});
