solution = (A) => {
  let solution
  console.log('Input: ', A)
  solution = A.reduce((acc, value) => {
    const index = acc.indexOf(value)
    index === -1 ? acc.push(value) : acc.splice(index, 1)
    return acc
  }, [])
  console.log('Solution: ', solution[0])
}

solution([9, 3, 9, 3, 9, 3, 9])

// 66%, 100%, 25%