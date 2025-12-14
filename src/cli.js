import readlineSync from 'readline-sync';

const greetUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name; // ← важно вернуть имя
};

export default greetUser;
