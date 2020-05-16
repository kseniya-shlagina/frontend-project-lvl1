import randomNumber from '../utils';
import launchGame from '../index';

export const brainCalcRule = 'What is the result of the expression?';

const operands = '+-*';

const getRandomOperand = (str) => {
  const i = randomNumber(0, operands.length);
  return str[i];
};

const calculateAnswer = (leftValue, rightValue, currentOperand = '*') => {
  switch (currentOperand) {
    case '+':
      return leftValue + rightValue;
    case '-':
      return leftValue - rightValue;
    default:
      return leftValue * rightValue;
  }
};

const getQuestionAndAnswer = () => {
  const questionAndAnswer = [];

  const operand = getRandomOperand(operands);
  const leftValue = randomNumber(1, 100);
  const rightValue = randomNumber(1, 100);
  const question = `${leftValue} ${operand} ${rightValue}`;
  const answer = String(calculateAnswer(leftValue, rightValue, operand));
  questionAndAnswer.push(question, answer);

  return questionAndAnswer;
};

export const startGame = () => {
  launchGame(brainCalcRule, getQuestionAndAnswer);
};
