const classNames = (names) => {
  const countNames = {}
  const uniqNames = []

  names.forEach(name => {
    if (countNames[name]) {
      countNames[name] = countNames[name] + 1
    } else {
      uniqNames.push(name)
      countNames[name] = 1
    }
  })

  return uniqNames.sort((a, b) => countNames[b] - countNames[a])
}

// console.log(classNames(['aa', 'aa', 'bb', 'aa', 'cc', 'asdf', 'kaka', 'aa', 'va', 'bb']))

let numbers = [10, 5, 8, 1, 7];
numbers.sort(function(a, b) {
  console.log(a, b)
  return a - b;
});

console.log(numbers); // Выведет: [1, 5, 7, 8, 10]
