const arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

function quickSort2(array) {
    if (array.length <= 1) {
        return array
    }

    const middleIndex = Math.floor(array.length / 2)
    const middleValue = array[middleIndex]

    const less = []
    const more = []
    for (let i = 0; i < array.length; i++) {
        if (middleIndex === i) continue

        if (array[i] < middleValue) {
            less.push(array[i])
        } else {
            more.push(array[i])
        }
    }

    return [...quickSort2(less), middleValue, ...quickSort2(more)]
}

console.log(quickSort2(arr), quickSort2(arr).length, arr.length )
console.log('count', count)
