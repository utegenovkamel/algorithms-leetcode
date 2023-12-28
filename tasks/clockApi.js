const clockApi = {
  seconds: 0,
  start: async function () {
    const id = setInterval(() => {
      this.seconds += 1
    }, 1000)
    return id
  },
  result: async function (id) {
    clearInterval(id)
    return this.seconds
  },
}

const foo = async (api) => {
  const timeoutId = await api.start()

  let result
  setTimeout(() => {
    result = api.result(timeoutId)
  }, 2000)

  return result
}

console.log(foo(clockApi))

// let id
//
// id = setInterval(() => {
//   console.log('go')
// }, 1000)
//
// setTimeout(() =>{
//   clearInterval(id)
// }, 3000)