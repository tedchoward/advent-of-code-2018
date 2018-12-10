export class Point {
  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  constructor(private _x: number, private _y: number, private _dX: number, private _dY: number) {}

  move() {
    this._x += this._dX;
    this._y += this._dY;
  }
}
