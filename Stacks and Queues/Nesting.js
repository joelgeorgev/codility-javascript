solution = (S) => {
  console.log('Input: ', S)
  let counter = 0
  const letters = S.split('')
  for (i = 0; i < letters.length; i++) {
    if (!counter && letters[i] === ')') {
      counter = 1
      break
    }
    letters[i] === '(' ? counter++ : counter--
  }
  const solution = counter !== 0 ? 0 : 1
  console.log('Solution: ', solution)
}

solution('(()(())())')

// 87%, 100%, 75%