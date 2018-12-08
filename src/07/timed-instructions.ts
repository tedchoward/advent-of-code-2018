import { Rule } from './rule';
import { Step } from './step';

export class TimedInstructions {
  private _steps = new Map<string, Step>();
  private _availableSteps: Step[] = [];

  constructor(rules: Rule[], private _duration = 0, private _workers = 2) {
    for (const rule of rules) {
      this.getStep(rule.dependency).addParent(this.getStep(rule.step));
    }

    this.updateAvailableSteps();
  }

  nextStep() {
    const availableSteps = [...this._availableSteps];
    if (availableSteps.length === 0) {
      return false;
    }

    for (let i = 0, cnt = Math.min(this._workers, availableSteps.length); i < cnt; i++) {
      const nextStep = availableSteps[i];
      nextStep.duration -= 1;

      if (nextStep.duration === 0) {
        this.removeStep(nextStep);
      }
    }

    return true;
  }

  private removeStep(step: Step) {
    this._steps.delete(step.name);
    this._availableSteps.splice(this._availableSteps.indexOf(step), 1);
    step.releaseChildren();
    this.updateAvailableSteps();
  }

  private updateAvailableSteps() {
    this._availableSteps = [
      ...this._availableSteps,
      ...Array.from(this._steps.values())
        .filter(s => s.parents.length === 0)
        .filter(s => this._availableSteps.indexOf(s) < 0)
        .sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
    ];
  }

  private getStep(name: string) {
    if (!this._steps.has(name)) {
      this._steps.set(name, new Step(name, calculateDuration(name, this._duration)));
    }

    return this._steps.get(name);
  }
}

const CHAR_CODE_OFFSET = 'A'.charCodeAt(0) - 1;
function calculateDuration(step: string, overhead: number) {
  return step.charCodeAt(0) - CHAR_CODE_OFFSET + overhead;
}
