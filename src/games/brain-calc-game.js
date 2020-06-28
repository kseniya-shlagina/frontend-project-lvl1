import randomNumber from '../utils';
import launchGame from '../index';

const brainCalcRule = 'What is the result of the expression?';

const operations = '+-*';

const getRandomOperation = (str) => {
  const i = randomNumber(0, operations.length);
  return str[i];
};

const calculateAnswer = (leftValue, rightValue, currentOperand) => {
  if (currentOperand === '+') {
    return leftValue + rightValue;
  }
  if (currentOperand === '-') {
    return leftValue - rightValue;
  }
  if (currentOperand === '*') {
    return leftValue * rightValue;
  }

  throw new Error('Unknown operation');
};

const getQuestionAndAnswer = () => {
  const questionAndAnswer = [];

  const operation = getRandomOperation(operations);
  const leftValue = randomNumber(1, 100);
  const rightValue = randomNumber(1, 100);
  const question = `${leftValue} ${operation} ${rightValue}`;
  const answer = String(calculateAnswer(leftValue, rightValue, operation));
  questionAndAnswer.push(question, answer);

  return questionAndAnswer;
};

const startGame = () => launchGame(brainCalcRule, getQuestionAndAnswer);

export default startGame;
