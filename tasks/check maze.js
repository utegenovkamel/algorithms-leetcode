let maze = [
  [1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0]
];

function checkPath(start, end) {
  const queue = []
  const visited = []

  const validWays = getValidWays(start, visited)
  queue.push(...validWays)

  while (queue.length) {
    const current = queue.shift()

    if (current.x === end.x && current.y === end.y) {
      return true
    } else {
      visited.push(`${current.y},${current.x}`)
      queue.push(...getValidWays(current, visited))
    }
  }

  return false
}

function getValidWays(start, visited) {
  const validWays = []
  let y
  let x

  y = start.y - 1
  x = start.x
  if (maze[y] && !visited.includes(`${y},${x}`) && maze[y][x] === 0) {
    validWays.push({x, y})
  }
  y = start.y + 1
  x = start.x
  if (maze[y] && !visited.includes(`${y},${x}`) && maze[y][x] === 0) {
    validWays.push({x, y})
  }
  y = start.y
  x = start.x - 1
  if (maze[y] && !visited.includes(`${y},${x}`) && maze[y][x] === 0) {
    validWays.push({x, y})
  }
  y = start.y
  x = start.x + 1
  if (maze[y] && !visited.includes(`${y},${x}`) && maze[y][x] === 0) {
    validWays.push({x, y})
  }

  return validWays
}

console.log(checkPath({x: 3, y: 0}, {x: 5, y: 5}));
console.log('maze', maze)
