solution = (A) => {
  console.log('Input: ', A)
  let sum = 0
  const sumArray = A.map(value => {
    sum += value
    return sum
  })
  const solution = A.reduce((acc, value, iter) => {
    if (!value) {
      acc = acc + (sum - sumArray[iter])
    }
    return acc
  }, 0)
  console.log('Solution: ', solution > 1000000000 ? -1 : solution)
}

solution([0, 1, 0, 1, 1])

// 100%