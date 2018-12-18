import { Node, List } from './list';

export class StringNode implements Node<string> {
  get value() {
    return this._string[this._index];
  }

  get next() {
    let nextIdx = this._index + 1;
    if (nextIdx >= this._string.length) {
      nextIdx = 0;
    }

    return new StringNode(this._string, nextIdx);
  }

  constructor(private _string: string, private _index: number) {}
}

export class StringList implements List<string> {
  private _string: string;

  get length() {
    return this._string.length;
  }

  get head() {
    return new StringNode(this._string, 0);
  }

  append(item: string): void {
    this._string += item;
  }

  array(start: number, length: number): string[] {
    return this._string.substr(start, length).split('');
  }

  string(start = 0, length = this._string.length) {
    if (start === 0 && length === this._string.length) {
      return this._string;
    }

    return this._string.substr(start, length);
  }
}
