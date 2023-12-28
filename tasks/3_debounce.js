// function debounce(func, delay) {
//     let timeout;
//
//     // Возвращаем новую функцию, которая будет вызвана после задержки
//     return function (...args) {
//         // Очищаем предыдущий таймаут, чтобы избежать множественных вызовов
//         clearTimeout(timeout);
//
//         // Устанавливаем новый таймаут для вызова функции через указанную задержку
//         timeout = setTimeout(() => {
//             // Вызываем исходную функцию с переданными аргументами и текущим контекстом
//             func.apply(this, args);
//         }, delay);
//     };
// }

const debounce = (fn, delay) => {
    let timeout

    return function(...args) {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}
// Пример использования debounce:

const printMessage = function (message) {
    console.log(message, this.value);
};

const obj = {
    value: 42,
};

// Создаем новую функцию с задержкой
const debouncedPrintMessage = debounce(printMessage, 1000);

// Вызываем функцию с разными аргументами и видим, как изменяется вывод
debouncedPrintMessage.call(obj, "First call"); // Не вызывается
debouncedPrintMessage.call(obj, "Second call"); // Не вызывается
debouncedPrintMessage.call(obj, "Third call"); // Выводит "Third call 42" после 1 секунды


console.log('1');
setTimeout(() => console.log('2'), 0);
setTimeout(() => console.log('3'), 4000);
setTimeout(() => console.log('4'));
setTimeout(() => console.log('5'), 2000);
Promise.resolve().then(() => console.log('6'));
console.log('7');

const obj = {
    firstname: "John",
    lastname: "Lehnon",
    get: function() {
        console.log(this.firstname)
    }
};

obj.get()