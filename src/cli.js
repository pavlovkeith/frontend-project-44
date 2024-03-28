import readlineSync from 'readline-sync';

export function greetUser() {
    console.log('brain-games');
    console.log('Welcome to the Brain Games!');
    console.log('May I have your name?');
    const name = readlineSync.question();
    console.log(`Hello, ${name}!`);
}
