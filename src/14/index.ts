import { recipeScorer } from './recipe-scorer';
import { scoreFinder } from './score-finder';

const input = 939601;
// const length = input.length;

const score = recipeScorer('37', input);

console.log('scores of next 10:', score);

const numRecipes = scoreFinder('37', `${input}`);

console.log('input sequence found after:', numRecipes, 'recipes');
