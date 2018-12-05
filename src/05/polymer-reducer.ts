export function polymerReducer(polymer: string) {
  for (let i = 0, cnt = polymer.length; i < cnt; i++) {
    if (reactionDetector(polymer.substr(i))) {
      polymer = polymer.substr(0, i) + polymer.substr(i + 2);
      cnt = polymer.length;
      i -= 2; // back up two spaces to see if a new reaction was created
    }
  }
  return polymer;
}

export function reactionDetector(diad: string) {
  if (diad.length < 2) {
    return false;
  }

  return Math.abs(diad.charCodeAt(0) - diad.charCodeAt(1)) === 32;
}

export function findSmallestOption(polymer: string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map(c => new RegExp(c, 'ig'))
    .map(re => polymer.replace(re, ''))
    .map(polymerReducer)
    .sort((a, b) => a.length - b.length)[0];
}
