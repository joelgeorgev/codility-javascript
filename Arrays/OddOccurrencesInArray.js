solution = (A) => {
  let solution
  console.log('Input: ', A)
  solution = A.reduce((acc, value) => {
    acc = acc ^ value
    return acc
  }, 0)
  console.log('Solution: ', solution)
}

solution([9, 3, 9, 3, 9, 3, 9])

// 100%