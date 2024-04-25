import readlineSync from 'readline-sync';
import { gameBegin, generateRandomInt } from './utils.js';

const questionCount = 3;
const generateNumMin = 0;
const generateNumMax = 100;

export default () => {
  const name = gameBegin();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let currentAttempt = 0; currentAttempt < questionCount; currentAttempt += 1) {
    const num = generateRandomInt(generateNumMin, generateNumMax);
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
