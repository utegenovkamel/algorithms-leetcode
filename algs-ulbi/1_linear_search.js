const array = [1,4,5,8,5,1,2,7,5,2,11]
let count = 0
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

function linearSearch2(array, item) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch2(array, 122))

