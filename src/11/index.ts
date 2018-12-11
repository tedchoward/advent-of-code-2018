import { findLargestPowerGrid } from './find-largest-power-grid';
import { findLargestPowerGridAnySize } from './find-largest-power-grid-any-size';

const input = 8561;

const point = findLargestPowerGrid(input);
console.log(`coordinate: ${point.x},${point.y}`);

const pointAndSize = findLargestPowerGridAnySize(input);
console.log(`coordinate: ${pointAndSize.x},${pointAndSize.y}, size:${pointAndSize.size}`);
