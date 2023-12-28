const ships = [
  [1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
]

const countShips = (matrix) => {
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    const lineArray = matrix[i]
    for2: for (let j = 0; j < lineArray.length; j++) {
      if(lineArray[j] === 1) {
        if(lineArray[j + 1]) {
          count += 1
          j++
          continue for2
        } else if (i !== matrix.length -1 && matrix[i + 1][j] === 1) {
          count += 1
          continue for2
        }
      }
    }
  }

  return count
}

console.log(countShips(ships))


var intersect = function(nums1, nums2) {
  const result = []
  const visited = new Set(...nums1)

  nums2.forEach(item => {
    if(visited.has(item)) {
      result.push(item)
    }
  })

  return result
};

console.log(intersect([1,2,2,1], [2,2]))