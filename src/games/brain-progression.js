#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let score = 0;
  const maxAttempts = 3;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const commonDifference = Math.floor(Math.random() * 10) + 1;
    const missingIndex = Math.floor(Math.random() * progressionLength);

    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      if (i === missingIndex) {
        progression.push('..');
      } else {
        progression.push(i * commonDifference + 1); // Генерация чисел прогрессии
      }
    }

    console.log('What number is missing in the progression?');
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = missingIndex * commonDifference + 1;

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

playProgressionGame();
