// split join

'1 2 3 4 5 6 7'.split(' ');
'Angola'.split(''); // ["A", "n", "g", "o", "l", "a"];

["A", "n", "g", "o", "l", "a"].join('*'); // "A*n*g*o*l*a"


var html = [
	'<div>',
		'<ul>',
			'<li>1</li>',
			'<li>2</li>',
		'</ul>',
	'<div>'
].join('');

var htmlString = '<div><ul><li>1</li><li>2</li></ul><div>';

document.getElementsByTagName('BODY')[0].innerHTML = html

XXX('main-wrapper') // 'mainWrapper'
XXX('sidebar-menu-left') // 'sidebarMenuLeft'

function toCamelCase (string, delimeter) { //sidebar-menu-left
	var newString = '',
		string = string.toLowerCase(),
		array = string.split(delimeter || '-'); //['sidebar', 'menu', 'left']

	for (var i = 0; i < array.length; i++) {
		if (i !== 0) {
			newString += array[i][0].toUpperCase() + array[i].slice(1);
		} else {
			newString += array[i];
		}
	};

	return newString;
}

delete array[5]; // [1,2,3,4,5, undefined, 6,7,8]

// DELETING
array.splice(index [, deleteCount, elem1 ... elemN])
array.splice(1,1) // Delete element index 1, count 1
array.splice(1) // Delete element index 1 to the end of array

//INSERT
array.splice(1,0, 100, 200)

//REPLACE
array.splice(1,2, 100, 200)


var wantToDelete = [1,5,7,10];

var array = [1,2,3,4,5,6,7,8,9,10,11,12];

var newArray = [];

for (var i = 0; i < array.length; i++) {
	var arrayItem = array[i];

	for(var j = 0; j < wantToDelete.length; j++){
		deleteIndex = wantToDelete[j];

		if (deleteIndex === i) {
			wantToDelete.splice(i, 1)
			array.splice(i, 1)

			break;
		};
	}
};

filterRange(array, a, b) //   удаляет все числа вне диапазаона a-b. Меняет сам массив


function filterRange (array, min, max) {

	for (var i = 0; i < array.length; i++) {
		var item = array[i];


		if (item < min || item > max) {
			array.splice(i--, 1)
		};

	};

}


// SLICE
// copy part of array
[1,2,3,4,5].slice(4) // [5]
[1,2,3,4,5].slice(3,5) // [4,5]

// Sort. Sorting array
[5,3,2,6,11].sort([fun]) //[11, 2, 3, 5, 6]

[5,3,2,6,11].sort(sortingFunction);

function sortingFunction (a,b) {
	if (a > b) { return 1 };
	if (b < a) { return -1 };
}

// REVERSE
[1,2,3,4,5].reverse() // [5, 4, 3, 2, 1]

// concat
[1,2,3,4].concat(6,7,8)

// IE < 9
// indexOf, lastIndexOf
['JS', 'HTML', 'HTML5', 'CSS'].indexOf('HTML') // 1



