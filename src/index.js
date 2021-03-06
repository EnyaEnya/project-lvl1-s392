import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const greeting = (conditionOfGame) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${conditionOfGame}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const numOfAttempts = 3;

export default (conditionOfGame, generateGameParams) => {
  const userName = greeting(conditionOfGame);
  for (let i = 0; i < numOfAttempts; i += 1) {
    const params = generateGameParams();
    const correctAnswer = cdr(params);
    const answer = readlineSync.question(`Question: ${car(params)}\nYour answer: `);
    const success = answer === correctAnswer;
    if (success) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
