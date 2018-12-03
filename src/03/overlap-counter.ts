import { Claim } from './claim';

export function overlapCounter(claims: Claim[]) {
  const rows: string[][] = [];
  for (const claim of claims) {
    const { id, left, top, width, height } = claim;

    for (let i = top, cnt = top + height; i < cnt; i++) {
      let row = rows[i];
      if (row == null) {
        rows[i] = row = [];
      }

      for (let j = left, cnt2 = j + width; j < cnt2; j++) {
        if (row[j] == null) {
          row[j] = id;
        } else {
          row[j] = 'X';
        }
      }
    }
  }

  return rows
    .map(row => row.reduce((count, cell) => (cell === 'X' ? count + 1 : count), 0))
    .reduce((count, rowCount) => count + rowCount, 0);
}
