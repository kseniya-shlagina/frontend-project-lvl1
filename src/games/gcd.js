import randomNumber from '../utils';
import launchGame from '../index';

const brainGameRule = 'Find the greatest common divisor of given numbers.';

const getGcdOfTwoNumbers = (firstNumber, secondNumber) => {
  const startFrom = firstNumber > secondNumber ? secondNumber : firstNumber;
  for (let i = startFrom; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }
  return 1;
};

const getQuestionAndAnswer = () => {
  const leftValue = randomNumber(1, 100);
  const rightValue = randomNumber(1, 100);
  const question = `${leftValue} ${rightValue}`;
  const answer = String(getGcdOfTwoNumbers(leftValue, rightValue));

  return [question, answer];
};

const runGame = () => launchGame(brainGameRule, getQuestionAndAnswer);

export default runGame;
