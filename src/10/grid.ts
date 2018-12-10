import { Point } from './point';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

function getOffset(values: number[]) {
  const min = Math.min(...values);
  if (min < 0) {
    return Math.abs(min);
  }

  return 0;
}

type CoordHash = { [coord: string]: boolean };

export class Grid {
  constructor(private _points: Point[]) {}

  countTouching() {
    // const start = Date.now();
    let touchingCount = 0;
    const hash: CoordHash = this._points
      .map(p => `${p.x},${p.y}`)
      .reduce((hash, coord) => ({ ...hash, [coord]: true }), {});

    for (const coord of Object.keys(hash)) {
      const parts = coord.split(',');
      const x = parseInt(parts[0], 10);
      const y = parseInt(parts[1], 10);

      if (
        hash[`${x - 1},${y}`] === true ||
        hash[`${x + 1},${y}`] === true ||
        hash[`${x},${y - 1}`] === true ||
        hash[`${x},${y + 1}`] === true
      ) {
        touchingCount += 1;
      }
    }

    // console.log(`countTouching took ${Date.now() - start} ms`);
    return touchingCount;
  }

  print() {
    let touchingCount = 0;
    const offsetY = getOffset(this._points.map(p => p.y));
    const offsetX = getOffset(this._points.map(p => p.x));
    const translate = ({ x, y }: { x: number; y: number }) => ({ x: x + offsetX, y: y + offsetY });
    const points = this._points.map(translate).sort((a, b) => a.y - b.y);
    const maxX = Math.max(...points.map(p => p.x));

    const newRow = () => Array(maxX + 1).fill(' ');

    const snapshot: string[][] = [];

    // let numRows = Math.max(...points.map(p => p.y)) + 1;
    // while (--numRows > 0) {
    //   snapshot.push(newRow());
    // }
    // console.log('Hi!');

    for (const { x, y } of points) {
      if (snapshot[y] == null) {
        snapshot[y] = newRow();
      }

      snapshot[y][x] = 'X';
      if (snapshot[y][x - 1] === 'X' || (y > 0 && snapshot[y - 1] != null && snapshot[y - 1][x] === 'X')) {
        touchingCount += 1;
      }
      // if (snapshot[y][x - 1] === 'X' || (y > 0 && snapshot[y - 1][x] === 'X')) {
      //   touchingCount += 1;
      // }
    }

    if (touchingCount >= points.length / 2) {
      for (const row of snapshot) {
        console.log((row || newRow()).reduce((str, col) => `${str}${col == '' ? ' ' : col}`, ' '));
      }
    }

    // console.log(points);
    // console.log('touching:', touchingCount, 'total:', points.length);
    return touchingCount;
  }

  move() {
    for (const point of this._points) {
      point.move();
    }
  }
}
