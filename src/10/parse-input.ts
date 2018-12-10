import { Point } from './point';

const PATTERN = /^position=<\s*(-?\d+),\s+(-?\d+)>\s+velocity=<\s*(-?\d+),\s+(-?\d+)>$/;

export function parseInput(input: string) {
  return input
    .split(/\n/)
    .map(s => PATTERN.exec(s))
    .map(
      ([match, x, y, dx, dy]: RegExpExecArray) =>
        new Point(parseInt(x, 10), parseInt(y, 10), parseInt(dx, 10), parseInt(dy, 10))
    );
}
