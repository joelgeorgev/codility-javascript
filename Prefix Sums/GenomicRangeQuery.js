solution = (S, P, Q) => {
  const impactArray = [], solution = []
  for (i = 0; i < S.length; i++) {
    const letter = S.charAt(i)
    switch (letter) {
      case 'A':
        impactArray[i] = 1
        break
      case 'C':
        impactArray[i] = 2
        break
      case 'G':
        impactArray[i] = 3
        break
      case 'T':
        impactArray[i] = 4
        break
    }
  }
  let sumOf1 = 0, sumOf2 = 0, sumOf3 = 0, sumOf4 = 0
  let occurencesOf1 = [], occurencesOf2 = [], occurencesOf3 = [], occurencesOf4 = []
  for (i = 0; i < impactArray.length; i++) {
    const value = impactArray[i]
    if (value === 1) {
      sumOf1++
    } else if (value === 2) {
      sumOf2++
    } else if (value === 3) {
      sumOf3++
    } else {
      sumOf4++
    }
    occurencesOf1.push(sumOf1)
    occurencesOf2.push(sumOf2)
    occurencesOf3.push(sumOf3)
    occurencesOf4.push(sumOf4)
  }
  for (i = 0; i < P.length; i++) {
    const start = P[i]
    const end = Q[i]
    let a, c, g, t
    if (!end && !start || (!start && end === 1)) {
      a = occurencesOf1[end]
      c = occurencesOf2[end]
      g = occurencesOf3[end]
      t = occurencesOf4[end]
    } else if (!start) {
      a = occurencesOf1[end] - occurencesOf1[start]
      c = occurencesOf2[end] - occurencesOf2[start]
      g = occurencesOf3[end] - occurencesOf3[start]
      t = occurencesOf4[end] - occurencesOf4[start]
    } else {
      a = occurencesOf1[end] - occurencesOf1[start - 1]
      c = occurencesOf2[end] - occurencesOf2[start - 1]
      g = occurencesOf3[end] - occurencesOf3[start - 1]
      t = occurencesOf4[end] - occurencesOf4[start - 1]
    }
    if (a > 0) {
      solution[i] = 1
    } else if (c > 0) {
      solution[i] = 2
    } else if (g > 0) {
      solution[i] = 3
    } else {
      solution[i] = 4
    }
  }
  console.log('Solution: ', solution)
}

solution('CAGCCTA', [2, 5, 0], [4, 5, 6])
// solution('A', [0], [0])
// solution('AC', [0, 0, 1], [0, 1, 1])

// 100%