solution = (S) => {
  console.log('Input: ', S)
  let counter1 = 0, counter2 = 0, counter3 = 0, flag = false
  for (i = 0; i < S.length; i++) {
    switch (S.charAt(i)) {
      case '(':
        counter1++
        break
      case ')':
        if ((i && S.charAt(i - 1) == '[' || S.charAt(i - 1) == '{') || !counter1) {
          flag = true
          break
        }
        counter1--
        break
      case '[':
        counter2++
        break
      case ']':
        if ((i && S.charAt(i - 1) == '(' || S.charAt(i - 1) == '{') || !counter2) {
          flag = true
          break
        }
        counter2--
        break
      case '{':
        counter3++
        break
      case '}':
        if ((i && S.charAt(i - 1) == '(' || S.charAt(i - 1) == '[') || !counter3) {
          flag = true
          break
        }
        counter3--
        break
    }
  }
  const solution = !flag && !counter1 && !counter2 && !counter3 ? 1 : 0
  console.log('Solution: ', solution)
}

// solution('{[()()]}')
solution('([)()]')

// 100%