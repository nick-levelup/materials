/*
Если у нас есть много элементов, события на которых нужно
обрабатывать похожим образом, то вместо того,
чтобы назначать обработчик каждому — мы
ставим один обработчик на их общего предка
*/

/*

<ul>
 <li>Mark</li>
 <li>Jane</li>
 <li>Bob</li>
 <li>Kate</li>
</ul>

*/




// Task

// Список с выделением

/*

<ul>
 <li>Downloads</li>
 <li>Games</li>
 <li>Program Files</li>
 <li>Users</li>
 <li>Windows</li>
</ul>


// BG color === blue
// OTHER BG COLOR === transparent
*/


var ul = document.querySelector('ul'),
	li = ul.querySelectorAll('li');

ul.addEventListener('click', function (event) {
	var current = event.target;

	if (current.matches('.selected')) { return };

	if (current.matches('li')) { console.log(1)
	

		for (var i = 0; i < li.length; i++) {
			// li[i].classList.remove('selected');

			if (li[i].classList.contains('selected')) {
				li[i].classList.remove('selected');

				break;
			};
		};

		current.classList.add('selected')

	};
}, false)