import fs from 'fs';
import Path from 'path';
import { gameSolver } from './game-solver';

const inputString = fs.readFileSync(Path.resolve(__dirname, 'input.txt')).toString();

const inputPattern = /^(\d+) players; last marble is worth (\d+) points$/;
const [match, numPlayersStr, lastMarbleStr] = inputPattern.exec(inputString);
const numPlayers = parseInt(numPlayersStr, 10);
const lastMarble = parseInt(lastMarbleStr, 10);

const highScore = gameSolver(numPlayers, lastMarble);

console.log('high score:', highScore);

const newLastMarble = lastMarble * 100;

const newHighScore = gameSolver(numPlayers, newLastMarble);

console.log('new high score:', newHighScore);
