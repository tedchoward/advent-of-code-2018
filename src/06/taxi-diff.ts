import { Point } from './point';

export const taxiDiff = (p: Point, q: Point) => Math.abs(p.x - q.x) + Math.abs(p.y - q.y);
