import { Point } from './point';
import { taxiDiff } from './taxi-diff';
import { Grid } from './grid';

export function findLargestArea(points: Point[]) {
  const grid = new Grid(points);
  const numRows = grid.numRows;
  const numCols = grid.numCols;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid.pointExists(row, col)) {
        continue;
      }

      const currentPoint = { x: col, y: row };
      const sortedPoints = points
        .map(p => ({ point: p, distance: taxiDiff(p, currentPoint) }))
        .sort((a, b) => a.distance - b.distance);

      if (sortedPoints[0].distance === sortedPoints[1].distance) {
        continue;
      }

      const closestPoint = sortedPoints[0];

      if (row === 0 || row === numRows - 1 || col === 0 || col === numCols - 1) {
        closestPoint.point.infinite = true;
      }

      closestPoint.point.area += 1;
    }
  }

  const largestPoint = points.filter(p => !p.infinite).sort((a, b) => b.area - a.area)[0];
  return largestPoint.area;
}
