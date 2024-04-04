import readlineSync from 'readline-sync';

function generateExpression() {
  const operators = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let expression = `${num1} ${operator} ${num2}`;
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
  }

  return { expression, result };
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer == correctAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return false;
  }
}

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

let correctAnswers = 0;
let incorrectAnswers = 0;

while (correctAnswers < 3 && incorrectAnswers < 3) {
  const { expression, result } = generateExpression();
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (checkAnswer(userAnswer, result)) {
    correctAnswers += 1;
  } else {
    incorrectAnswers += 1;
  }
}

if (correctAnswers >= 3) {
  console.log(`Congratulations, ${userName}! You've won!`);
} else {
  console.log(`Sorry, ${userName}, you've lost. Better luck next time!`);
}
