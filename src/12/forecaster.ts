import { PlantGrower } from './plant-grower';
import { plantCounter } from './plant-counter';

function countPlants(state: string) {
  return state.replace(/[.]/g, '').split('').length;
}

export function forecaster(rules: string[], initialState: string, iterations = 20) {
  const plantGrower = new PlantGrower(rules);
  let state = initialState;
  let offset = 0;
  let cnt = iterations;
  let sum = 0;
  let numMatches = 0;
  let numPlants = countPlants(initialState);
  while (--cnt >= 0) {
    console.log(state, offset);
    const result = plantGrower.growPlants(state, offset);
    state = result.state;
    offset = result.offset;
    // if (cnt % 1000 === 0) {
    //   console.log(cnt);
    // }

    const newPlantCount = countPlants(state);
    if (newPlantCount === numPlants) {
      numMatches++;
      if (numMatches === 3) {
        console.log('generation', iterations - cnt);
        console.log('firstPlant', state.indexOf('#'));
        console.log('numPlants', newPlantCount);
        return state
          .split('')
          .map((c, i) => (c === '#' ? i : null))
          .filter(i => i != null)
          .map(i => i + cnt + offset)
          .reduce((a, b) => a + b, 0);
        // return plantCounter(state, offset);
      }
    } else {
      numMatches = 0;
    }

    numPlants = newPlantCount;

    sum = plantCounter(state, offset);
  }

  console.log(state, offset);
  return sum;
}
