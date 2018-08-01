solution = (A, B) => {
  console.log('Sizes: ', A)
  console.log('Directions: ', B)
  let fishStack = []
  fishStack.push(0)
  for (i = 1; i < B.length; i++) {
    const topFish = fishStack.pop()
    if (B[topFish] === 1 && B[i] === 0) {
      if (A[topFish] < A[i]) {
        fishStack.push(i)
        while (fishStack.length >= 2) {
          const top = fishStack.pop()
          const top2 = fishStack.pop()
          if (B[top2] === 1) {
            if (A[top] > A[top2]) {
              fishStack.push(top)
            } else {
              fishStack.push(top2)
            }
          } else {
            fishStack.push(top2)
            fishStack.push(top)
            break
          }
        }
      } else if (A[topFish] > A[i]) {
        fishStack.push(topFish)
      }
    } else {
      fishStack.push(topFish)
      fishStack.push(i)
    }
  }
  console.log('Solution', fishStack.length)
}

solution([4, 3, 2, 1, 5], [1, 1, 0, 0, 0])

// 50%, 50%, 50%