import fs from 'fs';
import Path from 'path';
import { interactiveVisual } from './interactive-visual';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();

interactiveVisual(inputString);
