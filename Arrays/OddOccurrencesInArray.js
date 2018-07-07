solution = (A) => {
  let values = {}
  console.log('Input: ', A)
  for (i = 0; i < A.length; i++) {
    if (values[A[i]] === undefined) {
      values[A[i]] = false
    } else if (!values[A[i]]) {
      values[A[i]] = true
    } else {
      values[A[i]] = false
    }
  }
  const solution = Object.keys(values).reduce((acc, value) => {
    if (!values[value]) {
      acc = parseInt(value)
    }
    return acc
  }, 0)
  console.log('Solution: ', solution)

  // Optimum solution
  /* const solution = A.reduce((acc, value) => {
    acc = acc ^ value
    return acc
  }, 0) */
}

solution([9, 3, 9, 3, 9, 3, 9])

// 77%, 100%, 50%