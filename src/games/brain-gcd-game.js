import { randomNumber } from '../utils';

export const brainGameRule = 'Find the greatest common divisor of given numbers.';

const calculateAnswer = (firstNumber, secondNumber) => {
  const startFrom = firstNumber > secondNumber ? secondNumber : firstNumber;
  for (let i = startFrom; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }
  return 1;
};

const leftValue1 = randomNumber(1, 100);
const rightValue1 = randomNumber(1, 100);
export const question1 = `${leftValue1} ${rightValue1}`;
export const answer1 = String(calculateAnswer(leftValue1, rightValue1));

const leftValue2 = randomNumber(1, 100);
const rightValue2 = randomNumber(1, 100);
export const question2 = `${leftValue2} ${rightValue2}`;
export const answer2 = String(calculateAnswer(leftValue2, rightValue2));

const leftValue3 = randomNumber(1, 100);
const rightValue3 = randomNumber(1, 100);
export const question3 = `${leftValue3} ${rightValue3}`;
export const answer3 = String(calculateAnswer(leftValue3, rightValue3));
