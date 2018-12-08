import { Rule } from './rule';
import { Instructions } from './instructions';

export function orderSteps(rules: Rule[]) {
  // const instructions = new Instructions(rules);
  // let nextStep = '';
  let steps = '';

  for (const instructions = new Instructions(rules); instructions.hasNext(); ) {
    steps += instructions.nextStep();
  }

  // while ((nextStep = instructions.nextStep()) != null) {
  //   console.log('nextStep', nextStep);
  //   steps += nextStep;
  // }

  return steps;
}
