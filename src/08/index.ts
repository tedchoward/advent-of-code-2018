import fs from 'fs';
import Path from 'path';
import { parser } from './parser';
import { sumMetadata } from './sum-metadata';
import { sumValues } from './sum-values';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();
const input = inputString.split(/\W/).map(s => parseInt(s, 10));

const tree = parser(input);

const sum = sumMetadata(tree);

console.log('metadata sum:', sum);

const value = sumValues(tree);

console.log('root value:', value);
