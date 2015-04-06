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


/* ======= */
[11,12,13,14,15].forEach(function(element, index, array) {
	console.log(arguments)
});
/* ======= */



[].filter()
/*

Метод arr.filter(callback[, thisArg]) создаёт новый массив,
в который войдут только те элементы arr, для которых вызов
callback(item, i, arr) возвратит true.

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

function every (array, callback) {
	var count = 0;

	for (var i = 0; i < array.length; i++) {
		if (callback.call(this, array[i], i, array)) {
			count++;
		};
	};

	return array.length === count;

}

var isBool = every(['100', '320', '8880', '40'], function (element) {
	return element.indexOf('0') !== -1
});

console.log(isBool)


function some (array, callback) {
	var bool = false;

	for (var i = 0; i < array.length; i++) {
		if (callback.call(this, array[i], i, array)) {
			bool = true;
			break;
		};
	};

	return bool;

}

var isBool2 = some(['188', '328', '888', '48'], function (element) {
	return element.indexOf('0') !== -1
});

console.log(isBool2)


reduce/reduceRight
/*

Метод arr.reduce(reduceCallback[, initialValue]) применяет функцию reduceCallback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.

Аргументы функции reduceCallback(previousValue, currentItem, index, arr):

    previousValue — последний результат вызова функции, он же «промежуточный результат».
    currentItem — текущий элемент массива, элементы перебираются по очереди слева-направо.
    index — номер текущего элемента.
    arr — обрабатываемый массив.

*/