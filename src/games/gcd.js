import { getRandomNumber } from '../utils.js'

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const a = getRandomNumber(1, 100)
  const b = getRandomNumber(1, 100)

  const question = `${a} ${b}`
  const answer = String(gcd(a, b))

  return { question, answer }
}

const description = 'Find the greatest common divisor of given numbers.'

export { generateRound, description }
