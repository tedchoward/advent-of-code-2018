export class Step {
  private _parents: Step[] = [];
  private _children: Step[] = [];

  get parents() {
    return [...this._parents];
  }

  constructor(readonly name: string, public duration: number) {}

  addParent(step: Step) {
    this._parents.push(step);
    step._children.push(this);
  }

  releaseChildren() {
    for (const child of this._children) {
      const index = child._parents.indexOf(this);
      child._parents.splice(index, 1);
    }

    this._children = [];
  }
}
