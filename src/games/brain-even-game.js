import randomNumber from '../utils';
import launchGame from '../index';

const isEven = (number) => number % 2 === 0;

export const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const question = randomNumber(1, 100);
    const answer = isEven(question) === true ? 'yes' : 'no';
    questionsAndAnswers.push(question, answer);
  }
  return questionsAndAnswers;
};

export const startGame = () => {
  launchGame(brainEvenRule, ...getQuestionsAndAnswers());
};
