type Counts = { [char: string]: number };

export function calculateChecksum(ids: string[]) {
  const duplicates = ids.map(findDuplicates).reduce((sum, num) => sum + num, 0);
  const triplicates = ids.map(findTriplicates).reduce((sum, num) => sum + num, 0);
  return duplicates * triplicates;
}

export function findDuplicates(id: string) {
  return countRepeaters(id, 2);
}

export function findTriplicates(id: string) {
  return countRepeaters(id, 3);
}

function countRepeaters(id: string, match: number) {
  const counts: Counts = [].reduce.call(
    id,
    (counts: Counts, char: string) => {
      if (counts[char] == null) {
        counts[char] = 0;
      }

      counts[char] += 1;
      return counts;
    },
    {} as Counts
  );

  return Object.values(counts).filter(count => count === match).length > 0 ? 1 : 0;
}
