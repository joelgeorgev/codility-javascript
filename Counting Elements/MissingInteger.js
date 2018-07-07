solution = (A) => {
  let valueTracker = {}
  console.log('Input: ', A)
  for (i = 0; i < A.length; i++) {
    valueTracker[A[i]] = true
  }
  const sortedArray = Object.keys(valueTracker)
  for (i = 0, solution = 1; i < sortedArray.length; i++) {
    const value = parseInt(sortedArray[i])
    if (value <= 0) {
      solution = 1
      continue
    }
    if (value === solution) {
      solution++
      continue
    }
    if (value === solution + 1) {
      break
    }
  }
  if (solution === parseInt(sortedArray[sortedArray.length - 1])) {
    solution++
  }
  console.log('Solution: ', solution)
}

solution([-1, -3])

// 66%, 80%, 50%