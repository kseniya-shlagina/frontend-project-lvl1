import { randomNumber, isEven } from '../utils';
import launchGame from '../index';

export const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const question1 = randomNumber(1, 100);
export const answer1 = isEven(question1) === true ? 'yes' : 'no';

export const question2 = randomNumber(1, 100);
export const answer2 = isEven(question2) === true ? 'yes' : 'no';

export const question3 = randomNumber(1, 100);
export const answer3 = isEven(question3) === true ? 'yes' : 'no';

export const startGame = () => {
  launchGame(brainEvenRule, question1, answer1, question2, answer2, question3, answer3);
};
