function getCounter(num) {
    let counter = 0
    return () => {
        return counter += num
    }
}

const plusOne = getCounter(1)
const plusTwo= getCounter(2)

console.log(plusOne(), plusOne())
console.log(plusTwo(), plusTwo())