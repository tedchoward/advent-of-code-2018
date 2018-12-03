import fs from 'fs';
import Path from 'path';
import { Claim } from './claim';
import { overlapCounter } from './overlap-counter';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();
const claims = inputString.split(/\n/).map(c => new Claim(c));

const { count, claimId } = overlapCounter(claims);

console.log('overlapping count:', count);

console.log('claim with no overlap:', claimId);
