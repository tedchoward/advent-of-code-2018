export function mostSimilarFinder(ids: string[]) {
  let bestMatch = '';
  for (let i = 0, cnt = ids.length; i < cnt; i++) {
    for (let j = i + 1; j < cnt; j++) {
      const matches = getMatchingCharacters(ids[i], ids[j]);
      if (matches.length > bestMatch.length) {
        bestMatch = matches;
      }
    }
  }

  return bestMatch;
}

function getMatchingCharacters(left: string, right: string) {
  if (left === right) {
    return left;
  }

  let matches = '';

  for (let i = 0, cnt = left.length; i < cnt; i++) {
    if (left[i] === right[i]) {
      matches += left[i];
    }
  }

  return matches;
}
