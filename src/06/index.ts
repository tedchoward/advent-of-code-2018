import fs from 'fs';
import Path from 'path';
import { parsePoint } from './point';
import { findLargestArea } from './find-largest-area';
import { findContainedRegion } from './find-contained-region';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();

const points = inputString.split(/\n/).map(parsePoint);

const largestArea = findLargestArea(points);

console.log('largest area:', largestArea);

const containedRegionSize = findContainedRegion(points);

console.log('contained area:', containedRegionSize);
