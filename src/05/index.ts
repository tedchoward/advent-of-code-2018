import fs from 'fs';
import Path from 'path';
import { polymerReducer, findSmallestOption } from './polymer-reducer';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();

const polymer = polymerReducer(inputString);

console.log('Reduced Polymer length:', polymer.length);

const smallestPolymer = findSmallestOption(inputString);

console.log('Smallest reduced polymer length:', smallestPolymer.length);
