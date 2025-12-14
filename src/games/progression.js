import { getRandomNumber } from '../utils.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(2, 10)
  const length = getRandomNumber(5, 10)

  const progression = generateProgression(start, step, length)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progressionWithHidden = progression
    .map((num, idx) => (idx === hiddenIndex ? '..' : String(num)))
    .join(' ')

  const question = progressionWithHidden
  const answer = String(progression[hiddenIndex])

  return { question, answer }
}

const description = 'What number is missing in the progression?'

export { generateRound, description }
