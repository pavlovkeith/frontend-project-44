#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const playGame = () => {
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  while (correctAnswers < 3 && incorrectAnswers < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync
      .question(
        'Answer "yes" if the number is even, otherwise answer "no".\nYour answer: ',
      )
      .toLowerCase();

    if (userAnswer === 'yes' && isEven(number)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else if (userAnswer === 'no' && !isEven(number)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${
          isEven(number) ? 'yes' : 'no'
        }'.\nLet's try again, ${name}!`,
      );
      incorrectAnswers += 1;
    }
  }

  if (correctAnswers >= 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Sorry, ${name}, you didn't make it this time.`);
  }
};

playGame();
