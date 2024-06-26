#!/usr/bin/env node
import randomNumGenerator from '../randomNumGenerator.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = randomNumGenerator();
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
