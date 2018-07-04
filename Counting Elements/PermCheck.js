solution = (A) => {
  const sortedArray = A.slice().sort()
  const filteredArray = sortedArray.reduce((acc, value, iter) => {
    if (value === iter + 1) {
      acc = acc.concat(value)
    }
    return acc
  }, [])
  const solution = filteredArray.length !== A.length ? 0 : 1
  console.log('Solution: ', solution)
}

solution([2, 2, 2])

// 75%, 83%, 66%