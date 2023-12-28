const str1 = 'racecar'
const str2 = 'table'
const str3 = `А роза упала на лапу Азора`

const palindrom = (str) => {
    str = str.toLowerCase().split(' ').join('')

    return str === str.split('').reverse().join('')
}

let a = 0
a++
console.log(a)

const palindrom2 = (str) => {
    let start = 0
    let end = str.length - 1

    while(start < end) {
        if(str[start].toLowerCase() === str[start].toUpperCase()) {
            start++
            continue
        }
        if(str[end].toLowerCase() === str[end].toUpperCase()) {
            end--
            continue
        }
        if(str[start].toLowerCase() !== str[end].toLowerCase()) {
            return false
        }
        start++
        end--
    }
    return true
}

console.log(palindrom2(str1))
console.log(palindrom2(str2))
console.log(palindrom2(str3))