"use strict";
// -5, -3, 2, 4
// 4 9 16 25
const foo = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    const result = [];
    const queue = [];
    let first
    let second

    for (let i = 0; i < arr.length; i++) {
        if(!first) {
            first = arr[i] * arr[i]
        }
        second = arr[i+1] * arr[i+1]

        if(first <= second) {
            result.push(first)
            for (let j = 0; j < queue.length; j++) {
                if(queue[j] <= second) {
                    result.push(queue[j])
                }
            }
            result.push(second)
        } else {
            queue.push(first)
            first = second
        }
    }

    return result;
};
console.log(foo([-5, -3, 2, 4]));


