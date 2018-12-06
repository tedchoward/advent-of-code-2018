const POINT_PATTERN = /^(\d+)\W*(\d+)$/;

export interface Point {
  x: number;
  y: number;
  area?: number;
  infinite?: boolean;
}

export function parsePoint(pointStr: string) {
  const [match, x, y] = POINT_PATTERN.exec(pointStr);

  return { x: parseInt(x, 10), y: parseInt(y, 10), area: 1 };
}
