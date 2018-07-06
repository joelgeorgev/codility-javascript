solution = (X, A) => {
  console.log('Input: ', X, A)
  let positionTracker = {}, solution
  for (i = 0, order = 0; i < A.length; i++) {
    if (A[i] <= X) {
      if (positionTracker[A[i]] === undefined) {
        order++
        positionTracker[A[i]] = { time: i, order: order }
      }
    }
  }
  if (Object.keys(positionTracker).length !== X) {
    solution = -1
  } else {
    const targetPosition = Object.keys(positionTracker).reduce((acc, value, iter) => {
      if (!iter) {
        acc = positionTracker[value]
      } else if (positionTracker[value].order > acc.order) {
        acc = positionTracker[value]
      }
      return acc
    }, {})
    solution = targetPosition.time
  }
  console.log('Solution: ', solution)
}

solution(5, [1, 3, 1, 4, 2, 3, 5, 4])
solution(3, [1, 3, 1, 3, 2, 1, 3])

// 100%