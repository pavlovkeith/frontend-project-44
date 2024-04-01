import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
};

export default greetUser;
