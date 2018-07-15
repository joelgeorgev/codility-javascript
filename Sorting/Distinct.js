solution = (A) => {
  console.log('Input: ', A)
  const sortedArray = A.slice().sort()
  const solution = sortedArray.reduce((acc, value, iter) => {
    if (!iter || acc[acc.length - 1] !== value) {
      acc.push(value)
    }
    return acc
  }, [])
  console.log('Solution: ', solution.length)
}

solution([2, 1, 1, 2, 3, 1])

// 100%