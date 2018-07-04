solution = (A, K) => {
  console.log('Input: ', A)
  const positions = A.map((value, iter, array) => {
    return (iter + K) % array.length
  })
  const solution = positions.map((value, iter, array) => {
    return A[array.indexOf(iter)]
  })
  console.log('Solution: ', solution)
}

solution([3, 8, 9, 7, 6], 3)

// 100%