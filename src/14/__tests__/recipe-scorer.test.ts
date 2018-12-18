import { recipeScorer } from '../recipe-scorer';

describe('recipeScorer', () => {
  it('returns 5158916779 for starting value 37 after 9 recipes', () => {
    expect(recipeScorer('37', 9)).toBe('5158916779');
  });

  it('returns 0124515891 for starting value 37 after 5 recipes', () => {
    expect(recipeScorer('37', 5)).toBe('0124515891');
  });

  it('returns 9251071085 for starting value 37 after 18 recipes', () => {
    expect(recipeScorer('37', 18)).toBe('9251071085');
  });

  it('returns 5941429882 for starting value 37 after 2018 recipes', () => {
    expect(recipeScorer('37', 2018)).toBe('5941429882');
  });
});
