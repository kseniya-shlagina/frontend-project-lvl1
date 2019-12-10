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
  return result;
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const question = randomNumber(1, 100);
    const answer = isPrimeNumber(question) === 0 ? 'yes' : 'no';
    questionsAndAnswers.push(question, answer);
  }
  return questionsAndAnswers;
};

export const startGame = () => {
  launchGame(brainGameRule, ...getQuestionsAndAnswers());
};
