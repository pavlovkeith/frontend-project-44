#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  let tempA = a;
  let tempB = b;

  while (tempB !== 0) {
    const temp = tempA;
    tempA = tempB;
    tempB = temp % tempB;
  }

  return tempA;
};

const playGcdGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let score = 0;
  const maxAttempts = 3;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(num1, num2);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log("Let's try again, Sam!");
      attempts += 1;
    }

    if (score === maxAttempts) {
      console.log(`Congratulations, ${name}!`);
      break;
    } else if (attempts === maxAttempts) {
      console.log("Sorry, you've failed.");
      break;
    }
  }
};

playGcdGame();
