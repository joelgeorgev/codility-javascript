solution = (N, A) => {
  let resetValue = 0, maxValue = 0

  const increase = (x, array) => {
    let newValue
    if (array[x - 1] < resetValue) {
      newValue = resetValue + 1
    } else {
      newValue = array[x - 1] + 1
    }
    if (newValue > maxValue) {
      maxValue = newValue
    }
    array[x - 1] = newValue
  }

  const maxCounter = () => {
    resetValue = maxValue
  }

  let counterArray = []
  for (i = 0; i < N; i++) {
    counterArray[i] = 0
  }

  for (i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      increase(A[i], counterArray)
    } else if (A[i] === N + 1) {
      maxCounter(counterArray)
    }
  }

  for (i = 0; i < counterArray.length; i++) {
    if (counterArray[i] < resetValue) {
      counterArray[i] = counterArray[i] + (resetValue - counterArray[i])
    } else if (!counterArray[i]) {
      counterArray[i] = resetValue
    }
  }

  console.log('Solution: ', counterArray)
}

solution(5, [3, 4, 4, 6, 1, 4, 4])

// 100%