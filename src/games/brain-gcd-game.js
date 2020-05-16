import randomNumber from '../utils';
import launchGame from '../index';

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

const getQuestionAndAnswer = () => {
  const questionAndAnswer = [];

  const leftValue = randomNumber(1, 100);
  const rightValue = randomNumber(1, 100);
  const question = `${leftValue} ${rightValue}`;
  const answer = String(calculateAnswer(leftValue, rightValue));
  questionAndAnswer.push(question, answer);

  return questionAndAnswer;
};

export const startGame = () => {
  launchGame(brainGameRule, getQuestionAndAnswer);
};
