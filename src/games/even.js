import randomNumber from '../utils';
import launchGame from '../index';

const isEven = (number) => number % 2 === 0;

const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) === true ? 'yes' : 'no';
  return [question, answer];
};

const runGame = () => launchGame(brainEvenRule, getQuestionAndAnswer);

export default runGame;
