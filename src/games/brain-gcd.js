import randomNumGenerator from '../randomNumGenerator.js';
import startGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a.toString();
};

const startRound = () => {
  const maxNum = 100;
  const minNum = 1;
  const randomNumber1 = randomNumGenerator(maxNum, minNum);
  const randomNumber2 = randomNumGenerator(maxNum, minNum);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
