import { Rule } from '../rule';
import { timeTrial } from '../time-trial';

describe('timeTrial', () => {
  it('calculates how long completing the steps will take', () => {
    const input = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`
      .split(/\n/)
      .map(r => new Rule(r));

    expect(timeTrial(input)).toBe(15);
  });

  it.only('calculates how long completing the steps will take', () => {
    const input = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`
      .split(/\n/)
      .map(r => new Rule(r));

    expect(timeTrial(input, 0, 3)).toBe(14);
  });
});
