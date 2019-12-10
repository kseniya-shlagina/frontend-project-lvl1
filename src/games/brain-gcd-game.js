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

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const leftValue = randomNumber(1, 100);
    const rightValue = randomNumber(1, 100);
    const question = `${leftValue} ${rightValue}`;
    const answer = String(calculateAnswer(leftValue, rightValue));
    questionsAndAnswers.push(question, answer);
  }
  return questionsAndAnswers;
};

export const startGame = () => {
  launchGame(brainGameRule, ...getQuestionsAndAnswers());
};
