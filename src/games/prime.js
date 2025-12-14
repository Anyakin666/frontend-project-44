import { getRandomNumber } from '../utils.js'

const isPrime = num => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const limit = Math.floor(Math.sqrt(num))
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = getRandomNumber(2, 100)

  const question = String(number)
  const answer = isPrime(number) ? 'yes' : 'no'

  return { question, answer }
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export { generateRound, description }
