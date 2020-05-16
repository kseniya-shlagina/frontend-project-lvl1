import randomNumber from '../utils';
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

const getQuestionAndAnswer = () => {
  const questionAndAnswer = [];

  const answer = String(randomNumber(1, 100));
  const question = makeQuestion(Number(answer));
  questionAndAnswer.push(question, answer);

  return questionAndAnswer;
};

export const startGame = () => {
  launchGame(brainGameRule, getQuestionAndAnswer);
};
