import { gameSolver } from '../game-solver';

describe('gameSolver', () => {
  test('given 9 players, ending on 25, the high score is 32', () => {
    expect(gameSolver(9, 25)).toBe(32);
  });

  test('given 9 players, ending on 25, the high score is 32', () => {
    expect(gameSolver(9, 47)).toBe(63);
  });

  test('given 10 players, ending on 1618, the high score is 8317', () => {
    expect(gameSolver(10, 1618)).toBe(8317);
  });

  test('given 13 players, ending on 7999, the high score is 146373', () => {
    expect(gameSolver(13, 7999)).toBe(146373);
  });

  test('given 17 players, ending on 1104, the high score is 2764', () => {
    expect(gameSolver(17, 1104)).toBe(2764);
  });

  test('given 21 players, ending on 6111, the high score is 54718', () => {
    expect(gameSolver(21, 6111)).toBe(54718);
  });

  test('given 30 players, ending on 5807, the high score is 37305', () => {
    expect(gameSolver(30, 5807)).toBe(37305);
  });
});
