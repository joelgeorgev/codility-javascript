solution = (A) => {
  console.log('Input: ', A)
  const sortedArray = A.slice().sort((a, b) => a - b)
  const length = sortedArray.length
  let solution
  if (sortedArray[0] >= 0 || (sortedArray[0] < 0 && sortedArray[length - 1] <= 0)) {
    solution = sortedArray[length - 1] * sortedArray[length - 2] * sortedArray[length - 3]
  } else {
    solution = sortedArray.reduce((acc, value, iter, array) => {
      let product
      if (value < 0 && iter + 1 < length && array[iter + 1] < 0) {
        product = value * array[iter + 1] * array[length - 1]
      } else {
        product = array[length - 1] * array[length - 2] * array[length - 3]
      }
      acc = product > acc ? product : acc
      return acc
    }, 0)
  }
  console.log('Solution: ', solution)
}

solution([-3, 1, 2, -2, 5, 6])
solution([5, -5, -5, 4])
solution([-10, -2, -4])

// 100%