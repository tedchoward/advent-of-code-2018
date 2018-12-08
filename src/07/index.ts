import fs from 'fs';
import Path from 'path';
import { Rule } from './rule';
import { orderSteps } from './order-steps';
import { timeTrial } from './time-trial';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();

const rules = inputString.split(/\n/).map(r => new Rule(r));

const orderedSteps = orderSteps(rules);

console.log('orderedSteps', orderedSteps);

const duration = timeTrial(rules, 60, 5);

console.log('duration', duration);
