// https://www.youtube.com/watch?v=tfvm2k5c9JI&t=1494s&ab_channel=AndroidBroadcast.%D0%92%D1%81%D0%B5%D0%BE%D0%B1%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B5
const array = [-10, -5, 2, 4, 6, 9]

const foo = (arr) => {
  if(arr.length === 1) {
    return [arr[0]**2]
  }
  const result = []
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while(leftIndex < rightIndex) {
    const leftValue = arr[leftIndex]**2
    const rightValue = arr[rightIndex]**2

    if(rightValue > leftValue) {
      result.unshift(rightValue)
      rightIndex--
      if(result.length + 1 === arr.length) {
        result.unshift(leftValue)
      }
    }
    if(leftValue > rightValue) {
      result.unshift(leftValue)
      leftIndex++
      if(result.length + 1 === arr.length) {
        result.unshift(rightValue)
      }
    }
  }

  return result
}

console.log(foo(array)) // [ 4, 16, 25, 36, 81, 100 ]



