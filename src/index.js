import readlineSync from 'readline-sync';

const roundsCount = 3;
// Функция startGame будет запускать игру, используя переданные правила и функцию для начала раунда
// в играх
const startGame = (rules, startRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules); // Выводит правила игры, которые были переданы в функцию startGame
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = startRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
