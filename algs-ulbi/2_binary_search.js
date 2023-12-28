const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length - 1

    while(start <= end) {
        let middle = Math.floor((start + end) / 2)

        if(array[middle] === item) {
            return middle
        }

        if(item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }

    return null
}

function recursiveBinarySearch(array, item, start = 0, end = array.length - 1) {
    let middle = Math.floor((start + end) / 2);

    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

function binarySearch2(array, item) {

}

function recursiveBinarySearch2(array, item, start = 0, end = array.length ) {
    if(start > end) return null
    const middle = Math.floor((start + end) / 2)

    if(item === array[item]) {
        return middle
    }

    if(item < array[middle]) {
        return recursiveBinarySearch2(array, item, 0, middle - 1)
    } else {
        return recursiveBinarySearch2(array, item, middle + 1, end)
    }
}

console.log(binarySearch(array, 15))
console.log(array.indexOf(15))

