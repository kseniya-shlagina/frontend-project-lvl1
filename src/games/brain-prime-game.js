import randomNumber from '../utils';
import launchGame from '../index';

export const brainGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let result = 0;
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      result += 1;
    }
  }
  return result === 0;
};

const getQuestionAndAnswer = () => {
  const questionAndAnswer = [];

  const question = randomNumber(1, 100);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  questionAndAnswer.push(question, answer);

  return questionAndAnswer;
};

export const startGame = () => {
  launchGame(brainGameRule, getQuestionAndAnswer);
};
