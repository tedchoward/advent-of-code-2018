import { LinkedList } from './linked-list';

export class Circle {
  private _nextMarble = 0;
  // private _marbles: number[] = [0];
  // private _currentIndex = 0;
  private _marbles = new LinkedList<number>();

  constructor() {
    this._marbles.insert(0);
  }

  addMarble() {
    const nextMarble = ++this._nextMarble;
    if (nextMarble % 23 === 0) {
      this._marbles.seekBackward(7);
      // for (let i = 7; --i >= 0; ) {
      //   this.moveCounterClockwise();
      // }

      const removed = this._marbles.removeCurrent();
      // const removed = this._marbles.splice(this._currentIndex, 1)[0];
      return nextMarble + removed;
    } else {
      // this.moveClockwise();
      this._marbles.seekForward();
      this._marbles.insert(nextMarble);
      // this._marbles.splice(++this._currentIndex, 0, nextMarble);
      return 0;
    }
  }

  // moveClockwise() {
  //   this._currentIndex += 1;
  //   const length = this._marbles.length;
  //   if (this._currentIndex === length) {
  //     this._currentIndex = 0;
  //   }
  // }

  // moveCounterClockwise() {
  //   this._currentIndex -= 1;
  //   if (this._currentIndex === -1) {
  //     this._currentIndex = this._marbles.length - 1;
  //   }
  // }
}
