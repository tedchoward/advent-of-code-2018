import { Point } from './point';

export class Grid {
  private _points: { [name: string]: Point } = {};
  readonly numRows: number;
  readonly numCols: number;

  constructor(points: Point[]) {
    let maxX = 0;
    let maxY = 0;

    for (const point of points) {
      const { x, y } = point;

      if (x > maxX) {
        maxX = x;
      }

      if (point.y > maxY) {
        maxY = y;
      }

      this._points[`${y},${x}`] = point;
    }

    this.numRows = maxY + 1;
    this.numCols = maxX + 1;
  }

  pointExists(row: number, column: number) {
    return this._points.hasOwnProperty(`${row},${column}`);
  }

  findPoint(row: number, column: number) {
    return this._points[`${row},${column}`];
  }
}
