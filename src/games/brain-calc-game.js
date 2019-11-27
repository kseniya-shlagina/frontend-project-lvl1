import { randomNumber } from '../utils';

export const brainCalcRule = 'What is the result of the expression?';

const operand = '+-*';

const getRandomOperand = (str) => {
  const i = randomNumber(0, 2);
  return str[i];
};

const calculateAnswer = (leftValue, rightValue, currentOperand) => {
  if (currentOperand === '+') {
    return leftValue + rightValue;
  }
  if (currentOperand === '-') {
    return leftValue - rightValue;
  }
  return leftValue * rightValue;
};

const operand1 = getRandomOperand(operand);
const leftValue1 = randomNumber(1, 100);
const rightValue1 = randomNumber(1, 100);
export const question1 = `${leftValue1} ${operand1} ${rightValue1}`;
export const answer1 = String(calculateAnswer(leftValue1, rightValue1, operand1));

const operand2 = getRandomOperand(operand);
const leftValue2 = randomNumber(1, 100);
const rightValue2 = randomNumber(1, 100);
export const question2 = `${leftValue2} ${operand2} ${rightValue2}`;
export const answer2 = String(calculateAnswer(leftValue2, rightValue2, operand2));

const operand3 = getRandomOperand(operand);
const leftValue3 = randomNumber(1, 100);
const rightValue3 = randomNumber(1, 100);
export const question3 = `${leftValue3} ${operand3} ${rightValue3}`;
export const answer3 = String(calculateAnswer(leftValue3, rightValue3, operand3));
