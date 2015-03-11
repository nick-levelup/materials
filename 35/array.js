// Массивы

var array = [];

var names = ['Peter', 'John', 'Nikolas'];

names[0] // 'Peter'
names[1] // 'John'
names[2] // 'Nikolas'

names[3] = 'Mickle';

// get last element
names[names.length - 1] = "3"
// set new el to the end
names[names.length] = 3221

pop/push // add remove at rhe end of array
shift/unshift // add remove el from start array

pop // delete last element and return it
push // add element to the end of array aand return it index // MULTIPLY ADDING

shift // delete first element and return it
unshift // add element to the start of array and return it index // MULTIPLY ADDING

// Create
styles
// Добавить два элемента Jazz Bluz
// Добавить в конец Country
// Заменить последнее значение на Classic
// УDалить первое значение
// Добавить в начало Pop

//
// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomElementFromArray (array) {
	return array[getRandomInt(0, array.length-1)];
}

//
for (var i = 0; i < name.length; i++) {
	name[i]
};


var name1 = ['Peter', 'John', 'Nikolas'];

// for (var i = 0; i < name1.length; i++) {
// 	if (name1[i] === 'John') {
// 		name1[i] = 'Sara'
// 	};
// };


function find (array, smth) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === smth) {
			return i + 1;
		} else {
			return -1;
		}
	};
}

function findRange (array, min, max) {
	var newRange = [];

	for (var i = 0; i < array.length; i++) {
		if (array[i] >= min && array[i] <= max) {
			newRange.push(array[i])
		};
	};

	return newRange;
}

function sortArray (array) {
	var newRange = [];

	for (var i = 0; i < array.length; i++) {
		Math.min(array[i], array[i+1])
	};
}

var array = new Array(1,2,3,4,5) // [1,2,3,4,5]
new Array(5) // [undefined, undefined .... undefined]