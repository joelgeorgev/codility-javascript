solution = (A) => {
  let values = {}, solution = 1
  console.log('Input: ', A)
  for (i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      values[A[i]] = true
    }
  }
  const sortedArray = Object.keys(values)
  for (i = 0; i < sortedArray.length; i++) {
    const value = parseInt(sortedArray[i])
    if (value === solution) {
      solution++
      continue
    }
    if (value === solution + 1) {
      break
    }
  }
  console.log('Solution: ', solution)
}

solution([-1, 1, 2, 3, -1, 1, 2, 3, -1, 1, 2, 3])

// 100%