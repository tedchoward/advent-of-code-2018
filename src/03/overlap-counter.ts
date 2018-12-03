import { Claim } from './claim';

const OVERLAP_CLAIM = { hasOverlap: false } as Claim;

export function overlapCounter(claims: Claim[]) {
  const rows: Claim[][] = [];
  for (const claim of claims) {
    const { id, left, top, width, height } = claim;

    for (let i = top, cnt = top + height; i < cnt; i++) {
      let row = rows[i];
      if (row == null) {
        rows[i] = row = [];
      }

      for (let j = left, cnt2 = j + width; j < cnt2; j++) {
        if (row[j] == null) {
          row[j] = claim;
        } else {
          claim.overlap(row[j]);
          row[j] = OVERLAP_CLAIM;
        }
      }
    }
  }

  const count = rows
    .map(row => row.reduce((count, cell) => (cell === OVERLAP_CLAIM ? count + 1 : count), 0))
    .reduce((count, rowCount) => count + rowCount, 0);

  const { id: claimId } = claims.find(c => !c.hasOverlap);

  return { count, claimId };
}
