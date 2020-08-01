import randomNumber from '../utils';
import launchGame from '../index';

const brainGameRule = 'What number is missing in the progression?';

const getProgressionQuestion = (start, diff, index, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === index) {
      progression.push('..');
    } else {
      progression.push(start + diff * i);
    }
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const questionAndAnswer = [];

  const start = randomNumber(1, 100);
  const diff = randomNumber(1, 10);
  const progressionLength = 10;
  const randomIndex = randomNumber(0, progressionLength - 1);
  const progression = getProgressionQuestion(start, diff, randomIndex, progressionLength);

  const question = progression.join(' ');
  const answer = String(start + diff * randomIndex);

  questionAndAnswer.push(question, answer);
  return questionAndAnswer;
};

const runGame = () => launchGame(brainGameRule, getQuestionAndAnswer);

export default runGame;
