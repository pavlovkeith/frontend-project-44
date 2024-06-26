import randomNumGenerator from '../randomNumGenerator.js';
import startGame from '../index.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = `${num1 + num2}`;
      break;
    case '-':
      answer = `${num1 - num2}`;
      break;
    case '*':
      answer = `${num1 * num2}`;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
  return answer;
};

const startRound = () => {
  const randomNumber1 = randomNumGenerator();
  const randomNumber2 = randomNumGenerator();
  const operator = operators[randomNumGenerator(operators.length - 1)];
  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = calculate(randomNumber1, randomNumber2, operator);
  return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
