// // const foo = (str) => {
// //     return new Array(str).map(char => {
// //         // let modifiedChar
// //         // if(char === char.toLowerCase()) {
// //         //     return char.toUpperCase()
// //         // } else {
// //         //     return char.toUpperCase()
// //         // }
// //         return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
// //     })
// // }
// //
// // console.log(foo('heElF'))
//
//
// const objExample = {
//     name: Promise.resolve("John Lennon"),
//     age: Promise.resolve(42),
//     spouse: {
//         name: Promise.resolve("Yoko Ono")
//     }
// }
//
// const foo = (obj) => {
//     let result = {};
//
//     for (const key in obj) {
//         if (obj[key] instanceof Promise) {
//             result[key] = obj[key].then(value => value); // разрешаем промис сразу
//         } else if (typeof obj[key] === 'object') {
//             result[key] = foo(obj[key]);
//         } else {
//             result[key] = obj[key];
//         }
//     }
//
//     return result;
// }
//
// console.log('result', foo(objExample))
//
//
//
// const objExample = {
//     name: Promise.resolve("John Lennon"),
//     age: Promise.resolve(42),
//     spouse: {
//         name: Promise.resolve("Yoko Ono")
//     }
// }
//
// const resolvePromises = async (obj) => {
//     const result = {};
//     for (const key in obj) {
//         if (obj[key] instanceof Promise) {
//             result[key] = await obj[key];
//         } else if (typeof obj[key] === 'object') {
//             result[key] = await resolvePromises(obj[key]);
//         } else {
//             result[key] = obj[key];
//         }
//     }
//     return result;
// }
//
// const foo = async (obj) => {
//     const resolvedObj = await resolvePromises(obj);
//     console.log('res', resolvedObj);
//     return resolvedObj;
// }

// console.log('result', foo(objExample));

// if(true) {
//     let a = ''
//     b = 4
// }
//
// const d = {}
// d['a'] = 2

// const user1 = {
//     name: 'John',
//     getName() {
//         return () => {
//             return this.name
//         }
//     }
// }
//
//
// const user2 = {
//     name: 'Vasya',
//     getName: function () {
//         return this.name
//     }
// }
//
// const getName1 = user1.getName()
// const getName1_2 = user1.getName
// const getName2 = user2.getName
//
// console.log(user1.getName()())

// const user2 = {
//     name: 'Vasya',
//     getName: () => {
//         return this.name
//     }
// }
//
// const go = user2.getName()
//
// console.log('go', go())
//
// const user3 ={
//     name: 'Petya',
//     anotherUser: {
//         getName: () => {
//             return this.name
//         }
//     }
// }
//
// console.log(user2.getName())
// console.log(user3.anotherUser.getName())

// const user = {
//     name: 'Alex',
// }
//
// const foo = () => {
//     console.log(this.name)
// }
//
// console.log(foo.call(user))

//
// "use strict"
// const userService = {
//     currentFilter: 'active',
//     users: [
//         {name: 'John', status: 'active'},
//         {name: 'Vasya', status: 'inactive'},
//         {name: 'Petya', status: 'active'},
//     ],
//     getFilteredUsers() {
//         return this.users.filter(function (user) {
//             return user.status === this.currentFilter
//         })
//     }
// }
//
// console.log(userService.getFilteredUsers())

// 1
// 4
// 6
// foo2
// 3
// 2
// 5
// foo2
// foo2
// max call stack

const user2 = {
    name: 'Oleg',
}

const user = {
    name: 'Alex',
    getName() {
        return () => {
            return this.name
        }
    }
}

const foo = user.getName.bind(user2)()




