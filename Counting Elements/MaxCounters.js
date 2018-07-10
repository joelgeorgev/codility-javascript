solution = (N, A) => {
  let maxValue = 0

  const increase = (x, array) => {
    return array.map((value, iter) => {
      const newValue = iter === x - 1 ? value + 1 : value
      if (newValue > maxValue) {
        maxValue = newValue
      }
      return newValue
    })
  }

  const maxCounter = (array) => {
    return array.map(value => {
      return maxValue
    })
  }

  let counterArray = []
  for (i = 0; i < N; i++) {
    counterArray[i] = 0
  }

  for (i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      counterArray = increase(A[i], counterArray)
    } else if (A[i] === N + 1) {
      counterArray = maxCounter(counterArray)
    }
  }

  console.log('Solution: ', counterArray)
}

solution(5, [3, 4, 4, 6, 1, 4, 4])

// 66%, 100%, 40%