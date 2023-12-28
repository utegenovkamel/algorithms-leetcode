// const usersService = {
//     data: [
//         {name: 'Max', status: 'active', id: 1},
//         {name: 'Den', status: 'disabled', id: 2},
//         {name: 'John', status: 'disabled', id: 3},
//         {name: 'Janet', status: 'active', id: 4}
//     ],
//     handleDisableUser: function (id) {
//         this.data = this.data.map(user => {
//             if (user.id === id) {
//                 return {
//                     ...user,
//                     status: 'disabled'
//                 }
//             }
//             return user
//         })
//     }
// }
//
// usersService.handleDisableUser(1)
//

const foo = () => {
    return Promise.all([Promise.resolve('go'), Promise.resolve(new Error('ERROR')), 1])
}

console.log(foo().then(res => console.log('res', res)).catch(error => console.log(error)))


