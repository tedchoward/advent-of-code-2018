import fs from 'fs';
import Path from 'path';
import { frequencyCalibrator, duplicateDetector } from './frequency-calibrator';

const inputData = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();

console.log('first run:', frequencyCalibrator(inputData));

console.log('duplicate run:', duplicateDetector(inputData));
