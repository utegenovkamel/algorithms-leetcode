const output = {
  usd: [10000, 30000],
  gbp: [9000, 0],
  eur: [0, 7000],
  uah: [10000, 0]
}

const foo = (input) => {
  const result = {}

  // for (let i = 0; i < input.length; i++) {
  //   const currency = input[i][0]
  //   const type = input[i][1]
  //   const sum = input[i][2]
  //
  //   if (result[currency]) {
  //     if (type === 'buy') {
  //       result[currency] = [result[currency][0] + sum, result[currency][1]]
  //     }
  //     if (type === 'sell') {
  //       result[currency] = [result[currency][0], result[currency][1] + sum]
  //     }
  //   } else {
  //     if (type === 'buy') {
  //       result[currency] = [sum, 0]
  //     }
  //     if (type === 'sell') {
  //       result[currency] = [0, sum]
  //     }
  //   }
  // }

  input.forEach(item => {
    const [currency, type, amount] = item

    if(!result[currency]) {
      result[currency] = [0, 0]
    }

    result[currency][type === 'buy' ? 0 : 1] += amount

  })

  return result
}


console.log(foo([
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000],
]))


