solution = (S) => {
  console.log('Input: ', S)
  let counter = 0
  for (i = 0; i < S.length; i++) {
    if (!counter && S.charAt(i) === ')') {
      counter = 1
      break
    }
    S.charAt(i) === '(' ? counter++ : counter--
  }
  const solution = !counter ? 1 : 0
  console.log('Solution: ', solution)
}

solution('(()(())())')

// 87%, 100%, 75%