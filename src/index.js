import readlineSync from 'readline-sync';

// приветствие
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

// получение имени пользователя
export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// правила игры
export const brainRules = (rule) => {
  console.log(rule);
};

// функция спрашивающая один вопрос
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
export const launchGame = (
  gameRules,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
) => {
  greeting();
  const userName = getName();
  brainRules(gameRules);
  const firstQuestionResult = askOneQuestion(userName, question1, answer1);
  if (firstQuestionResult === false) return false;

  const secondQuestionResult = askOneQuestion(userName, question2, answer2);
  if (secondQuestionResult === false) return false;

  const thirdQuestionResult = askOneQuestion(userName, question3, answer3);
  if (thirdQuestionResult === false) return false;

  console.log(`Congratulations, ${userName}!`);
  return true;
};
