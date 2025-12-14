#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция создания арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log('What number is missing in the progression?');
  
  let correctAnswers = 0;
  
  while (correctAnswers < 3) {
    // Генерируем параметры прогрессии
    const start = Math.floor(Math.random() * 50) + 1;
    const step = Math.floor(Math.random() * 10) + 1; // шаг от 1 до 10
    const length = Math.floor(Math.random() * 6) + 5; // длина от 5 до 10
    
    const progression = generateProgression(start, step, length);
    
    // Выбираем случайную позицию для пропуска
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    
    // Создаем строку с пропущенным элементом
    const progressionWithHidden = progression.map((num, index) => {
      return index === hiddenIndex ? '..' : String(num);
    }).join(' ');
    
    console.log(`Question: ${progressionWithHidden}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer !== String(correctAnswer)) {
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