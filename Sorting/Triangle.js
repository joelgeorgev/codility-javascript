solution = (A) => {
  console.log('Input: ', A)
  const sortedArray = A.slice().sort((a, b) => a - b)
  const length = sortedArray.length
  let solution = 0
  for (i = 0; i < length; i++) {
    if (i + 2 < length) {
      if (sortedArray[i] + sortedArray[i + 1] > sortedArray[i + 2]) {
        solution = 1
        break
      }
    }
  }
  console.log('Solution: ', solution)
}

solution([10, 2, 5, 1, 8, 20])
// solution([10, 50, 2, 1])

// 100%