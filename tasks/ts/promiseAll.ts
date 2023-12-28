// // const promiseAll = (values:readonly unknown[] | []): Promise<[] | unknown[]> => {
// //   return new Promise((resolve, reject) => {
// //     const result: any[] = []
// //
// //     for (const value of values) {
// //       if(value instanceof Promise) {
// //         const response = value
// //         value
// //           .then(response => {
// //             result.push(response)
// //           })
// //           .catch(error => {
// //             reject(error)
// //           })
// //       } else {
// //         result.push(value)
// //       }
// //     }
// //
// //     resolve(result)
// //   })
// // }
// //
// // promiseAll([Promise.resolve('resolve'), Promise.resolve('resolve2'), 1, 2]).then(response => {
// //   console.log(response)
// // })
//
// const promiseAll = (values: [] | unknown[]): Promise<[] | unknown[]> => {
//   return new Promise((resolve, reject) => {
//     let index = 0;
//     const result: unknown[] = [];
//
//     const processNext = () => {
//       const value = values[index];
//
//       if (value instanceof Promise) {
//         value
//           .then((response: unknown) => {
//             result.push(response);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       } else {
//         result.push(value);
//       }
//
//       if (index === values.length) {
//         resolve(result);
//         return;
//       }
//
//       index++;
//     };
//
//     processNext();
//   });
// };
//
// const resolveFn = (value: unknown, timeout: number) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, timeout, value);
//   });
// };
//
// const rejectFn = (value: unknown, timeout: number) => {
//   return new Promise((_resolve, reject) => {
//     setTimeout(reject, timeout, value);
//   });
// };
//
// promiseAll([resolveFn("resolve1", 200), resolveFn("resolve2", 200)]).then(
//   (response) => {
//     console.log(response);
//   }
// );
//
// promiseAll([rejectFn("reject1", 100), resolveFn("resolve2", 200)])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

