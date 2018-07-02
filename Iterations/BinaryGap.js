solution = (n) => {
  let solution
  console.log('Input: ', n)
  const binary = n.toString(2)
  console.log('Binary Representation: ', binary)
  const numbers = binary.split('')
  if (!numbers.filter(number => number === '0').length || !numbers.filter(number => number === '1').length) {
    solution = 0
  }
  else {
    const positions = numbers
      .map((value, iter) => {
        if (value === '1') {
          return iter
        }
      })
      .filter(value => value !== undefined)
    if (positions.length === 1) {
      solution = 0
    } else {
      solution = positions.reduce((acc, value, iter, array) => {
        if (iter && value - array[iter - 1] > acc) {
          acc = value - array[iter - 1]
        }
        return acc
      }, 0) - 1
    }
  }
  console.log('Solution: ', solution)
}

solution(1162)

// 100%