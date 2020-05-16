import randomNumber from '../utils';
import launchGame from '../index';

const isEven = (number) => number % 2 === 0;

export const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const questionAndAnswer = [];

  const question = randomNumber(1, 100);
  const answer = isEven(question) === true ? 'yes' : 'no';
  questionAndAnswer.push(question, answer);

  return questionAndAnswer;
};

export const startGame = () => {
  launchGame(brainEvenRule, getQuestionAndAnswer);
};
