const isPathCrossing = function(path) {
  const krdArr = [0, 0]
  const visited = {}
  visited['0-0'] = undefined
  path = path.split('')

  for(let i = 0; i < path.length; i++) {
    const item = path[i]

    if(item === 'N') {
      krdArr[1] = krdArr[1] + 1
    }
    if(item === 'S') {
      krdArr[1] = krdArr[1] - 1
    }
    if(item === 'E') {
      krdArr[0] = krdArr[0] + 1
    }
    if(item === 'W') {
      krdArr[0] = krdArr[0] - 1
    }

    const krd = String(krdArr[0]) + '-' + String(krdArr[1])
    if(visited.hasOwnProperty(krd)) {
      return true
    }
    visited[krd] = undefined
  }

  return false
};

console.log(isPathCrossing('WNSN'))
// NESWW

console.log(String(-1))

