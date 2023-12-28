const krokodil = (str, search) => {
    let strIdx = 0
    let searchIdx = 0


    while (strIdx <= str.length - 1) {
        if(searchIdx === search.length - 1) {
            return true
        }
        if(str[strIdx] === search[searchIdx]) {
            searchIdx = searchIdx + 1
            strIdx = strIdx + 1
        } else {
            strIdx = strIdx + 1
        }
    }
    return false
}

console.log(krokodil('hello world', 'wrld'))