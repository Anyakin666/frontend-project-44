import { getRandomNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';

  return { question, answer };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export { generateRound, description };
