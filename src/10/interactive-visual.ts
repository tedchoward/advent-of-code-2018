import readline from 'readline';
import { parseInput } from './parse-input';
import { Grid } from './grid';

function question(rl: readline.Interface, prompt: string): Promise<string> {
  return new Promise((res, rej) => {
    try {
      rl.question(prompt, answer => {
        res(answer);
      });
    } catch (err) {
      rej(err);
    }
  });
}

export async function interactiveVisual(input: string) {
  const points = parseInput(input);
  const numPoints = points.length;
  const grid = new Grid(points);

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  let char = '';
  let count = 0;

  while (char !== 'q') {
    const touchingCount = grid.countTouching();
    if (touchingCount >= numPoints / 2) {
      grid.print();
      console.log();
      char = await question(rl, `Second: ${count}, Enter 'q' to quit: `);
    } else {
      if (count % 1000 === 0) {
        console.log(count, touchingCount);
      }
    }

    count += 1;
    grid.move();
  }

  rl.close();
}
