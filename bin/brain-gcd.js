#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для нахождения НОД (алгоритм Евклида)
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// Или рекурсивная версия:
// const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log('Find the greatest common divisor of given numbers.');
  
  let correctAnswers = 0;
  
  while (correctAnswers < 3) {
    // Генерируем два случайных числа (от 1 до 100)
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    const correctAnswer = String(gcd(num1, num2));
    
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