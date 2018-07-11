solution = (A) => {
  console.log('Input: ', A)
  let sum = 0, solution = undefined
  const sumArray = A.map(value => {
    sum += value
    return sum
  })
  for (i = 0; i < A.length; i++) {
    for (j = i + 1; j < A.length; j++) {
      const sliceValue = (!i ? sumArray[j] : sumArray[j] - sumArray[i - 1]) / (j - i + 1)
      solution = !solution || sliceValue < solution.sliceValue ? { sliceValue, iter: i } : solution
    }
  }
  console.log('Solution: ', solution.iter)
}

solution([4, 2, 2, 5, 1, 5, 8])

// 50%, 100%, 0%