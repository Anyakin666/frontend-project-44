#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция проверки на простое число
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  // Проверяем делители до квадратного корня
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
  let correctAnswers = 0;
  
  while (correctAnswers < 3) {
    // Генерируем число от 1 до 100
    const number = Math.floor(Math.random() * 100) + 1;
    
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    
    console.log('Correct!');
    correctAnswers += 1;
  }
  
  console.log(`Congratulations, ${name}!`);
};

playGame();