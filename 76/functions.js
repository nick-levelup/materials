// Параметры по умолчанию

/* ---- */
function showMenu(title = "Без заголовка", width = 100, height = 200) {
  alert(`${title} ${width} ${height}`);
}

showMenu("Меню"); // Меню 100 200
showMenu(undefined, null); // ?
/* ---- */

// Параметр по умолчанию используется при отсутствующем аргументе или равном undefined

/* ---- */
function sayHi(who = getCurrentUser().toUpperCase()) {
  alert(`Привет, ${who}!`);
}

function getCurrentUser() {
  return 'Вася';
}

sayHi(); // Привет, ВАСЯ!
/* ---- */

// Оператор spread вместо arguments
// Оператор … должен быть в конце

/* ---- */
function showName(firstName, lastName, ...rest) {
  alert(`${firstName} ${lastName} - ${rest}`);
}

// выведет: Юлий Цезарь - Император,Рима
showName("Юлий", "Цезарь", "Император", "Рима");
/* ---- */

// для чтения параметров в объявлении функции

/* ---- */
'use strict';

let numbers = [2, 3, 15];

// Оператор ... в вызове передаст массив как список аргументов
// Этот вызов аналогичен Math.max(2, 3, 15)
let max = Math.max(...numbers);

alert( max ); // 15
/* ---- */

/* ---- */
Math.max(...numbers);
Math.max.apply(Math, numbers);
/* ---- */

// Деструктуризация в параметрах

/* ---- */
'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

function showMenu({title, width, height}) {
  alert(`${title} ${width} ${height}`); // Меню 100 200
}

showMenu(options);
/* ---- */

/* ---- */
'use strict';

let options = {
  title: "Меню"
};

function showMenu({title="Заголовок", width:w=100, height:h=200}) {
  alert(`${title} ${w} ${h}`);
}

// объект options будет разбит на переменные
showMenu(options); // Меню 100 200
/* ---- */

/* ---- */
'use strict';

function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) {
  alert(`${title} ${w} ${h}`);
}

showMenu(); // Заголовок 100 200
/* ---- */

//Имя «name»

/* ---- */
'use strict';

function f() {} // f.name == "f"

let g = function g() {}; // g.name == "g"

alert(`${f.name} ${g.name}`) // f g
/* ---- */

/* ---- */
'use strict';

// свойство g.name = "g"
let g = function() {};

let user = {
  // свойство user.sayHi.name == "sayHi"
  sayHi: function() { };
}
/* ---- */

// Функции в блоке

/* ---- */
'use strict';

if (true) {

  sayHi(); // работает

  function sayHi() {
    alert("Привет!");
  }

}
sayHi(); // ошибка, функции не существует
/* ---- */

// Функции через =>

/* ---- */
'use strict';

let inc = x => x+1;

alert( inc(1) ); // 2
/* ---- */

/* ---- */
let inc = x => x+1;

let inc = function(x) { return x + 1; };
/* ---- */

//Если аргументов несколько

/* ---- */
'use strict';

let sum = (a,b) => a + b;

// аналог с function
// let inc = function(a, b) { return a + b; };

alert( sum(1, 2) ); // 3
/* ---- */

// без аргументов

/* ---- */
'use strict';

// вызов getTime() будет возвращать текущее время
let getTime = () => `${new Date().getHours()} : ${new Date().getMinutes()}`;

alert( getTime() ); // текущее время
/* ---- */

// более одной строки

/* ---- */
'use strict';

let getTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};

alert( getTime() ); // текущее время
/* ---- */

/* ---- */
`use strict`;

let arr = [5, 8, 3];

let sorted = arr.sort( (a,b) => a - b );

alert(sorted); // 3, 5, 8
/* ---- */

// this, arguments

/* ---- */
'use strict';

let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList: function() {
    this.students.forEach(
      (student) => alert(`${this.title}: ${student}`)
    )
  }
}

group.showList();
/* ---- */

// !Функции стрелки нельзя запускать с new

/* ---- */
'use strict';

function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // ?
/* ---- */