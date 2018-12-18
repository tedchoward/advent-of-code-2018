import { LinkedList } from './list';
import { separateDigits } from './utils';

export function recipeScorer(initialValue: string, numIterations: number) {
  const list = new LinkedList<number>();
  initialValue
    .split('')
    .map(n => parseInt(n, 10))
    .forEach(n => list.append(n));

  let elf1 = list.head;
  let elf2 = list.head.next;

  let iterations = numIterations + 10;
  while (--iterations >= 0) {
    const newScores = separateDigits(elf1.value + elf2.value);
    while (newScores.length > 0) {
      list.append(newScores.shift());
    }

    let cnt = elf1.value + 1;
    while (--cnt >= 0) {
      elf1 = elf1.next;
    }

    cnt = elf2.value + 1;
    while (--cnt >= 0) {
      elf2 = elf2.next;
    }
  }

  return list.array(numIterations + 1, 10).join('');
}
