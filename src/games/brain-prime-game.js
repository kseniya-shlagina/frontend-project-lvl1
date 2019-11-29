import { randomNumber } from '../utils';

export const brainGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let result = 0;
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      result += 1;
    }
  }
  return result;
};

export const question1 = randomNumber(1, 100);
export const answer1 = isPrimeNumber(question1) === 0 ? 'yes' : 'no';

export const question2 = randomNumber(1, 100);
export const answer2 = isPrimeNumber(question2) === 0 ? 'yes' : 'no';

export const question3 = randomNumber(1, 100);
export const answer3 = isPrimeNumber(question3) === 0 ? 'yes' : 'no';
