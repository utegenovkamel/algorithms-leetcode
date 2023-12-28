const tree = {
  value: 5,
  children: [
    {
      value: 10,
      children: [
        {
          value: 11,
        }
      ]
    },
    {
      value: 7,
      children: [
        {
          value: 5,
          children: [
            {
              value: 1
            }
          ]
        }
      ]
    }
  ]
}


const arrTreeRec = (tree) => {
  const result = [tree.v]

  if (tree.c) {
    tree.c.forEach(node => {
      result.push(...arrTreeRec(node))
    })
    return result
  } else {
    return result
  }
}

const foo = (tree) => {
  const result = [tree.v]
  const stack = [...tree.c]

  while (stack.length) {
    const current
  }

  return result
}

console.log('arrTree', arrTreeRec(tree))