class Node<T> {
  prev: Node<T>;
  next: Node<T>;

  constructor(readonly value: T) {}
}

export class LinkedList<T> {
  private _head: Node<T>;
  private _current: Node<T>;
  private _length = 0;

  insert(item: T) {
    if (this._head == null) {
      this._head = new Node(item);
      this._head.prev = this._head.next = this._head;
      this._current = this._head;
    } else {
      const inserted = new Node(item);
      const left = this._current;
      const right = this._current.next;

      left.next = inserted;
      inserted.prev = left;

      inserted.next = right;
      right.prev = inserted;

      this._current = inserted;
    }

    this._length += 1;
  }

  getCurrent() {
    return this._current.value;
  }

  removeCurrent() {
    const removed = this._current;
    const left = removed.prev;
    const right = removed.next;

    left.next = right;
    right.prev = left;

    this._length -= 1;

    this._current = right;

    return removed.value;
  }

  seekForward(items = 1) {
    while (--items >= 0) {
      this._current = this._current.next;
    }
  }

  seekBackward(items = 1) {
    while (--items >= 0) {
      this._current = this._current.prev;
    }
  }

  toString() {
    const sb = [];
    let count = this._length;
    let current = this._head;
    while (--count >= 0) {
      if (current === this._current) {
        sb.push(`(${current.value})`);
      } else {
        sb.push(current.value);
      }
      current = current.next;
    }

    return sb.join(', ');
  }
}
