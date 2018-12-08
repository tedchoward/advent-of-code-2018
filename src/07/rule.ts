const PATTERN = /^Step ([A-Z]) must be finished before step ([A-Z]) can begin[.]$/;

export class Rule {
  readonly step: string;
  readonly dependency: string;

  constructor(rule: string) {
    const [match, step, dependency] = PATTERN.exec(rule);
    this.step = step;
    this.dependency = dependency;
  }
}
