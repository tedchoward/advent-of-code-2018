import { Rule } from './rule';
import { TimedInstructions } from './timed-instructions';

export function timeTrial(rules: Rule[], durationOverhead = 0, workers = 2) {
  let timeElapsed = 0;

  for (
    const instructions = new TimedInstructions(rules, durationOverhead, workers);
    instructions.nextStep();
    timeElapsed += 1
  ) {}

  return timeElapsed;
}
