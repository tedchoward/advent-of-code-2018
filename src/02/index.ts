import fs from 'fs';
import Path from 'path';
import { calculateChecksum } from './checksum-calculator';
import { mostSimilarFinder } from './most-similar-finder';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();
const ids = inputString.split(/\n/);

const checksum = calculateChecksum(ids);

console.log('Checksum:', checksum);

const bestMatch = mostSimilarFinder(ids);

console.log('bestMatch:', bestMatch);
