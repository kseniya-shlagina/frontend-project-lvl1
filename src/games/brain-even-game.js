import { randomNumber } from '../utils';

export const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const question1 = randomNumber(1, 100);
export const answer1 = question1 % 2 === 0 ? 'yes' : 'no';

export const question2 = randomNumber(1, 100);
export const answer2 = question2 % 2 === 0 ? 'yes' : 'no';

export const question3 = randomNumber(1, 100);
export const answer3 = question3 % 2 === 0 ? 'yes' : 'no';
