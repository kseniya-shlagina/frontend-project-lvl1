import readlineSync from 'readline-sync';

// запуск игры
const launchGame = (gameRule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.
      Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
