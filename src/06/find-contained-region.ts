import { Point } from './point';
import { taxiDiff } from './taxi-diff';
import { Grid } from './grid';

export function findContainedRegion(points: Point[], minimumDistance = 10000) {
  const grid = new Grid(points);
  const { numRows, numCols } = grid;
  let containedRegionSize = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const distance = points.map(p => taxiDiff({ x: col, y: row }, p)).reduce((sum, cur) => sum + cur);
      if (distance < minimumDistance) {
        containedRegionSize += 1;
      }
    }
  }

  return containedRegionSize;
}
