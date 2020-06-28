import randomNumber from '../utils';
import launchGame from '../index';

const brainGameRule = 'What number is missing in the progression?';

const makeProgression = (start, diff, index) => {
  const progressionLength = 10;
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
  const randomIndex = randomNumber(0, 9);
  const progression = makeProgression(start, diff, randomIndex);

  const question = progression.join(' ');
  const answer = String(start + diff * randomIndex);

  questionAndAnswer.push(question, answer);
  return questionAndAnswer;
};

const startGame = () => launchGame(brainGameRule, getQuestionAndAnswer);

export default startGame;
