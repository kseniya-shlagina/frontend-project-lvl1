import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
// получение имени

export const brainEvenRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const brainEvenGame = (userName) => {
  const randomNumber = () => Math.floor(Math.random() * 99) + 1;

  for (let i = 1; i <= 3; i += 1) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const isEven = number % 2 === 0;
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      const correctAnswer = isEven === true ? 'yes' : 'no';
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
