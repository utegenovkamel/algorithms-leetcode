const resolveFn = (value, timeout) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout, value);
    });
};
const rejectFn = (value, timeout) => {
    return new Promise((_resolve, reject) => {
        setTimeout(reject, timeout, value);
    });
};

const promiseAny = (promises) => {
    return new Promise((resolve, reject) => {
        const errors = {}

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    errors[i] = error
                    if (Object.keys(errors).length === promises.length) {
                        reject(Object.values(errors))
                    }
                })
        }
    })
}

promiseAny([resolveFn(1, 100), resolveFn(2, 50)]).then(res => console.log(res))
promiseAny([rejectFn(1, 100), rejectFn(2, 50)]).then(res => console.log(res)).catch(errors => {
    console.log(errors)
})