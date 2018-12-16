import { PlantGrower } from '../plant-grower';

describe('PlantGrower', () => {
  it('grows the plants according to the rules provided', () => {
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

    const plantGrower = new PlantGrower(rules);

    expect(plantGrower.growPlants('#..#.#..##......###...###').state).toBe('.#...#....#.....#..#..#..#.');
  });

  it('tracks the offset provided', () => {
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

    const plantGrower = new PlantGrower(rules);
    const { state, offset } = plantGrower.growPlants('.#...#....#.....#..#..#..#.', -1);

    expect(state).toBe('.##..##...##....#..#..#..##.');
    expect(offset).toBe(-1);
  });
});
