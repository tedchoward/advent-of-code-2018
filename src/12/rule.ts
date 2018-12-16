function buildExpression(pattern: string) {
  return new RegExp(pattern.replace(/[.]/g, '[.]'));
}

export class Rule {
  private _expression: RegExp;
  readonly value: string;

  constructor(rule: string) {
    const [pattern, nextValue] = rule.split(' => ');
    this._expression = buildExpression(pattern);
    this.value = nextValue;
  }

  matches(pattern: string) {
    return this._expression.test(pattern);
  }
}
