import { Circle } from './circle';

export function gameSolver(numPlayers: number, lastMarble: number) {
  const circle = new Circle();
  const scores = Array(numPlayers).fill(0);

  for (let i = 0, currentPlayer = 0, cnt = lastMarble + 1; i < cnt; i++, currentPlayer = i % numPlayers) {
    scores[currentPlayer] += circle.addMarble();
  }

  return Math.max(...scores);
}
