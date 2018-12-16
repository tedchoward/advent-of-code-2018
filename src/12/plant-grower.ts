import { Rule } from './rule';

function getPatternAtIndex(state: string, index: number) {
  // let leftPad = '';
  // let length = 5;
  // while (index - 2 < 0) {
  //   leftPad += '.';
  //   index += 1;
  //   length -= 1;
  // }

  let pattern = state.substr(index - 2, 5);
  let diff = 5 - pattern.length;
  while (--diff >= 0) {
    pattern += '.';
  }

  return pattern;
}

function leftPad(state: string, offset: number) {
  // let offset = 0;
  while (state.substr(0, 5) !== '.....') {
    state = '.' + state;
    offset -= 1;
  }

  return { state, offset };
}

export class PlantGrower {
  private _rules: Rule[];
  constructor(rules: string[]) {
    this._rules = rules.map(r => new Rule(r));
  }

  growPlants(initialState: string, initialOffset = 0) {
    let newState = '..';

    const { state, offset } = leftPad(initialState, initialOffset);

    for (let i = 2, cnt = state.length; i < cnt; i++) {
      const pattern = getPatternAtIndex(state, i);
      // console.log('pattern', pattern);
      let matchedRule = false;
      for (const rule of this._rules) {
        if (rule.matches(pattern)) {
          // console.log('rule matches', rule);
          newState += rule.value;
          // console.log('newState', newState);
          matchedRule = true;
          break;
        }
      }

      if (!matchedRule) {
        newState += '.';
      }
    }

    let newOffset = offset;
    while (newOffset < 0) {
      if (newState.substr(0, 2) === '.#') {
        // console.log('breaking early', newOffset);
        break;
      }

      newState = newState.replace(/^.(.*)$/, '$1');
      newOffset += 1;
    }

    if (newState.endsWith('#')) {
      newState += '.';
    }

    // console.log(offset, newOffset);

    return { state: newState, offset: newOffset };
  }
}
