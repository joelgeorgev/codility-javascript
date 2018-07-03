solution = (A) => {
  const sum = A.reduce((acc, value) => {
    acc = acc + value
    return acc
  }, 0)
  let expectedSum = 0
  for (i = 1; i <= (A.length + 1); i++) {
    expectedSum += i
  }
  console.log('Solution: ', expectedSum - sum)
}

solution([2, 3, 1, 5])

// 100%