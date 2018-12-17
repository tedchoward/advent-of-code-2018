import fs from 'fs';
import Path from 'path';
import { detectCollisions } from './collision-detector';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();

const lastCart = detectCollisions(inputString);
console.log(`last cart at ${lastCart.col},${lastCart.row}`);
