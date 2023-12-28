// -3 2 4
// 4 9 16

const foo = (arr: number[]) => {
  if (arr.length === 0) {
    return []
  }
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i])
  }

  return result
}

console.log(foo([-5, -3, 2, 4]))