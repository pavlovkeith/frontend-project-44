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
  if (userAnswer === correctAnswer) {
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

let userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

let correctAnswers = 0; // Изменено с score на correctAnswers для отслеживания правильных ответов

while (correctAnswers < 3) {
  // Цикл продолжается до тех пор, пока не будет достигнуто 3 правильных ответов
  const { expression, result } = generateExpression();
  console.log(`Question: ${expression}`);
  let userAnswer = readlineSync.question('Your answer: ');

  if (checkAnswer(userAnswer, result)) {
    correctAnswers++; // Увеличиваем счетчик правильных ответов
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

console.log(`Congratulations, ${userName}!`);
