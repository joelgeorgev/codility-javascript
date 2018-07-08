solution = (A, B, K) => {
  let counter = 0
  for (i = A; i <= B; i++) {
    if (i % K === 0) {
      counter++
    }
  }
  console.log('Solution: ', counter)
}

solution(6, 11, 2)

// 50%, 100%, 0%