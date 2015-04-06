[].forEach()

/*
Метод arr.forEach(callback[, thisArg]) вызывает функцию callback для
каждого элемента массива.

Необязательный аргумент thisArg будет передан как this.
Функция вызывается с параметрами: callback(item, i, arr):

    item — очередной элемент массива.
    i — его номер.
    arr — массив, который перебирается.

*/

[].filter()
/*

Метод arr.filter(callback[, thisArg]) создаёт новый массив,
в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.

*/

[].map()
/*
Метод arr.map(callback[, thisArg]) создаёт новый массив,
который будет состоять из результатов вызова callback(item, i, arr)
для каждого элемента arr.

*/

every/some

/*
Метод arr.every(callback[, thisArg]) возвращает true,
если вызов callback вернёт true для каждого элемента arr.

Метод arr.some(callback[, thisArg]) возвращает true,
если вызов callback вернёт true для какого-нибудь элемента arr.
*/


reduce/reduceRight
/*

Метод arr.reduce(reduceCallback[, initialValue]) применяет функцию reduceCallback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.

Аргументы функции reduceCallback(previousValue, currentItem, index, arr):

    previousValue — последний результат вызова функции, он же «промежуточный результат».
    currentItem — текущий элемент массива, элементы перебираются по очереди слева-направо.
    index — номер текущего элемента.
    arr — обрабатываемый массив.

*/