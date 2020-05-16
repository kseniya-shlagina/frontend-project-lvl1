import readlineSync from 'readline-sync';

// функция, спрашивающая один вопрос
const askOneQuestion = (userName, question, answer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.
    Let's try again, ${userName}!`);
    return false;
  }
  return true;
};

// запуск игры
const launchGame = (gameRules, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const result = askOneQuestion(userName, questionAndAnswer[0], questionAndAnswer[1]);
    if (!result) return false;
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default launchGame;
