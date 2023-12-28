const memo = (callback, getDeps, opts = {debug: true}) => {
  const cacheResults = {}

  return () => {
    const args = getDeps()

    if(args.join('-') in cacheResults) {
      opts.debug && console.log('from cache')
      return cacheResults[args.join('-')]
    } else {
      const callbackResult = callback(...args)
      cacheResults[args.join('-')] = callbackResult

      return callbackResult
    }
  }
}

let username = 'Kamel'
let age = 25

const memoFn = memo((name, vozrast) => `hello may name is ${name} vozrast ${vozrast}`, () => [username,age])

console.log(memoFn()) // 'hello may name is Kamel'
console.log(memoFn()) // get from cache 'hello may name is Kamel'
username = 'User'
console.log(memoFn()) // 'hello may name is User'
console.log(memoFn()) // get from cache 'hello may name is User'
username = 'Kamel'
console.log(memoFn())
age = 10
console.log(memoFn())

