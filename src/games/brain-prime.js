#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const playPrimeGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let score = 0;
  const maxAttempts = 3;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const number = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
    console.log(
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    );
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
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

playPrimeGame();
