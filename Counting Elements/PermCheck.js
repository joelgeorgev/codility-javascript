solution = (A) => {
  console.log('Input: ', A)
  let values = {}, solution
  for (i = 1; i <= A.length; i++) {
    values[i] = { counter: 0 }
  }
  for (i = 0; i < A.length; i++) {
    if (values[A[i]] !== undefined) {
      values[A[i]].counter++
    } else {
      solution = 0
      break
    }
  }
  if (solution === undefined) {
    const filteredArray = A.reduce((acc, value) => {
      if (values[value] && (values[value].counter === 0 || values[value].counter > 1)) {
        acc = acc.concat(values[value])
      }
      return acc
    }, [])
    solution = filteredArray.length ? 0 : 1
  }
  console.log('Solution: ', solution)
}

solution([2, 2, 2])

// 91%, 100%, 83%