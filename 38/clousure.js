// // window = {}
// var prop = 21

// function test (name, list) {
// 	// {name: 'Vasja', list: [1,2]};

// 	alert(time)

// 	// var time;
// }



// // test('Vasja', [1,2])

// var name = 'Vasja';
// // {name: 'Vasja'}

// function sayName (name) {
// 	// {name: 'Petja'}

// 	(function () {
// 		// {name: undefined}
// 		alert(name);

// 		var name;
// 	})();
// }

// sayName('Petja');

// function counter () {
// 	var num = 0;

// 	return function () {
// 		return num++;
// 	}
// }

// var i = counter()

// i() // 0
// i() // 1
// i() // 2


function setCounter () {
	var i = 0;

	return function (num) {
		if (num) {
			i = num;
		};

		i += 1;

		return {
			getCounter: function () {
				return i;
			},

			setCounter: function (num) {
				i = num;

				return i;
			},

			resetCounter: function () {
				i = 0;

				return i;
			}
		}
	}
}

sum(1)(2).join() //3
sum(5)(2) //7



function sum (a) {
	// {a: 1}
	return function (b) {
		// {b: 2}
		return [a + b];
	}
}



