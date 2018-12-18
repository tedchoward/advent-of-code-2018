export interface Node<T> {
  next: Node<T>;
  value: T;
}

class LinkedNode<T> implements Node<T> {
  next: Node<T>;

  constructor(public value: T) {}
}

export interface List<T> {
  length: number;
  head: Node<T>;
  append(item: T): void;
  array(start: number, length: number): T[];
  string(start: number, length: number): string;
}

export class LinkedList<T> implements List<T> {
  private _head: Node<T>;
  private _tail: Node<T>;
  private _length: number;

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  private _setHead(item: T) {
    this._head = new LinkedNode(item);
    this._head.next = this._head;
    this._tail = this._head;
    this._length = 1;
  }

  append(item: T) {
    if (this._head == null) {
      this._setHead(item);
      return;
    }

    const node = new LinkedNode(item);
    node.next = this._head;
    this._tail.next = node;
    this._tail = node;
    this._length += 1;
  }

  array(start: number, length: number) {
    let node = this._head;
    while (--start > 0) {
      node = node.next;
    }

    const ary = [];
    while (--length >= 0) {
      ary.push(node.value);
      node = node.next;
    }

    return ary;
  }

  string(start = 0, length = this._length) {
    return this.array(start, length).join('');
  }
}
