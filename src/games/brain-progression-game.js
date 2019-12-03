import { randomNumber } from '../utils';
import launchGame from '../index';

export const brainGameRule = 'What number is missing in the progression?';

const makeQuestion = (num) => {
  let number = num;
  let number2 = num;
  let question = '..';
  const step = randomNumber(1, 10);
  const leftSideProgression = randomNumber(1, 10);
  const rightSideProgression = 9 - leftSideProgression;

  for (let i = 0; i < leftSideProgression; i += 1) {
    number -= step;
    question = `${number} ${question}`;
  }
  for (let i = 0; i < rightSideProgression; i += 1) {
    number2 += step;
    question = `${question} ${number2}`;
  }
  return question;
};

export const answer1 = String(randomNumber(1, 100));
export const question1 = makeQuestion(Number(answer1));

export const answer2 = String(randomNumber(1, 100));
export const question2 = makeQuestion(Number(answer2));

export const answer3 = String(randomNumber(1, 100));
export const question3 = makeQuestion(Number(answer3));

export const startGame = () => {
  launchGame(brainGameRule, question1, answer1, question2, answer2, question3, answer3);
};
