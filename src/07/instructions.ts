import { Rule } from './rule';
import { Step } from './step';

export class Instructions {
  private _steps = new Map<string, Step>();
  private _availableSteps: Step[];

  get availableSteps() {
    return [...this._availableSteps];
  }

  constructor(rules: Rule[], private _duration = 0) {
    for (const rule of rules) {
      this.getStep(rule.dependency).addParent(this.getStep(rule.step));
    }

    this.updateAvailableSteps();
  }

  hasNext() {
    return this._availableSteps.length > 0;
  }

  nextStep() {
    if (this._availableSteps.length === 0) {
      return null;
    }

    const nextStep = this._availableSteps[0];
    this.removeStep(nextStep);
    return nextStep.name;
  }

  private removeStep(step: Step) {
    this._steps.delete(step.name);
    step.releaseChildren();
    this.updateAvailableSteps();
  }

  private updateAvailableSteps() {
    this._availableSteps = Array.from(this._steps.values())
      .filter(s => s.parents.length === 0)
      .sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
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
