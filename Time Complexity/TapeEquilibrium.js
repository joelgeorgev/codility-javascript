solution = (A) => {
  console.log('Input: ', A)
  let sum = 0
  const sumArray = A.map(value => {
    sum += value
    return sum
  })
  const solution = sumArray.reduce((acc, value, iter, array) => {
    if (iter !== array.length - 1) {
      const result = Math.abs(value - (sum - value))
      if (!iter || result < acc) {
        acc = result
      }
    }
    return acc
  }, 0)
  console.log('Solution: ', solution)
}

solution([-10, -5, -3, -4, -5])

// 100%