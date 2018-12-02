import { mostSimilarFinder } from '../most-similar-finder';

describe('mostSimilarFinder', () => {
  it('returns the characters in common of the two most similar ids', () => {
    const input = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
    expect(mostSimilarFinder(input)).toBe('fgij');
  });
});
