import randomNumber from '../utils';
import launchGame from '../index';

const brainGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const questionAndAnswer = [];

  const question = randomNumber(1, 100);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  questionAndAnswer.push(question, answer);

  return questionAndAnswer;
};

const runGame = () => launchGame(brainGameRule, getQuestionAndAnswer);

export default runGame;
