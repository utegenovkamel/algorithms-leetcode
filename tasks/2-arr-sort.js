const exampleArr1 = [-2, 1, 3, 5]

const exampleArr2 = [-1, 0, 0]

const sort2Arrays = (array1, array2) => {
  if (!array1.length) {
    return array2
  }
  if (!array2.length) {
    return array1
  }
  if (!array1.length && !array2.length) {
    return []
  }
  const result = []
  let pointer1 = 0
  let pointer2 = 0

  while (pointer1 < array1.length - 1 || pointer2 < array2.length - 1) {
    const value1 = array1[pointer1]
    const value2 = array2[pointer2]

    if(value1 === undefined) {
      result.push(...array2.slice(pointer2))
      return result
    }

    if(value2 === undefined) {
      console.log('go', array1.slice(pointer1))
      result.push(...array1.slice(pointer1))
      return result
    }

    if (value1 < value2) {
      result.push(value1)
      pointer1++
    } else {
      result.push(value2)
      pointer2++
    }
  }

  return result
}

console.log(sort2Arrays(exampleArr1, exampleArr2))
