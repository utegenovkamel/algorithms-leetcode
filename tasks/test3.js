// 'use strict'
// const users = {
//     status: 'active',
//     users: [
//         {
//             id: 1,
//             name: 'Alex',
//             status: 'active'
//         },
//         {
//             id: 2,
//             name: 'Bob',
//             status: 'inactive'
//         },
//         {
//             id: 3,
//             name: 'John',
//             status: 'active'
//         },
//         {
//             id: 4,
//             name: 'Den',
//             status: 'inactive'
//         }
//     ],
//     getFilteredUsers() {
//         return this.users.filter(function (user) {
//             return user.status === this.status
//         })
//     }
// }
//
// console.log(users.getFilteredUsers())
//
// function curry(foo, length = foo.length) {
//     console.log('length',length)
//     return (...args) => {
//         console.log('args',args, args.length)
//         if (args.length < length) {
//             return curry(
//                 (...otherArgs) => foo(...args, ...otherArgs),
//                 length - args.length
//             );
//         }
//         return foo(...args);1
//     };
// }
//
// function add(a, b, c) {
//     return a + b + c;
// }
//
// const curriedAdd = curry(add);
// console.log(curriedAdd(1)(2, 3));
// console.log(curriedAdd(1, 2, 3));
// console.log(curriedAdd(1)(2)(3));
