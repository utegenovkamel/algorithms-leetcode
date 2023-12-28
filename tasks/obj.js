const foo = (strObj) => {
    const keys = strObj.split('.');
    let result = {};
    let current = result;

    keys.forEach(key => {
        console.log('current1',current)
        current[key] = {};
        console.log('current2',current)
        current = current[key];
        console.log('current3',current)
    });

    return result;
};

console.log(foo('a.b.c'));
