const foo = (nums) => {
  const obj = {}

  nums.forEach((num, idx) => {
    if(num === 0) {
      obj[100 + idx] = num
    }else {
      obj[idx] = num
    }
  })

  return [...Object.values(obj)]
}

const foo1 = (nums) => {
  if(nums.length === 1) {
    return nums
  }
  let a = 0
  const result = nums.filter(item => {
    if(item === 0) {
      a += 1
    }
    return item !== 0
  })

  for (let i = 0; i < a; i++) {
    result.push(0)
  }

  return result
}

const foo2 = (nums) => {
  let low = 0
  let high = 1

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low += 1
      high += 1
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]]
        continue
      }
      high += 1
    }
  }

  return nums
}


console.log(foo2([0,12, 5]))