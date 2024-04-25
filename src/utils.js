import readlineSync from 'readline-sync';

const gameBegin = () => {
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const generateRandomInt = (min = 0, max = 10) => {
  const randomIntNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomIntNumber);
};

export {
  gameBegin,
  generateRandomInt,
};
