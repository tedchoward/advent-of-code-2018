import fs from 'fs';
import Path from 'path';
import { findSleepiestGuard, findSleepiestMinute } from './find-sleepiest';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();
const log = inputString.split(/\n/);

const { guard, minute } = findSleepiestGuard(log);

console.log('guard', guard, 'minute', minute, 'solution:', guard * minute);

const consistentGuard = findSleepiestMinute(log);

console.log(
  'guard',
  consistentGuard.guard,
  'minute',
  consistentGuard.minute,
  'solution:',
  consistentGuard.guard * consistentGuard.minute
);
