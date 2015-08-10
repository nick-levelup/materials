// es-2015

// Table
// http://kangax.github.io/compat-table/es6/

// Babel.JS транспайлер
// https://babeljs.io/

// https://babeljs.io/repl/

/**
let and const
*/

/*
Переменная, объявленная через let, видна только в рамках блока {...}, в котором объявлена.

Это, в частности, влияет на объявления внутри if, while или for.
*/

/*----*/
'use strict';

var apples = 5;

if (true) {
  var apples = 10;

  alert(apples); // ?
}

alert(apples); // ?

/*----*/

'use strict';

let apples = 5; // (*)

if (true) {
  let apples = 10;

  alert(apples); // 10 (внутри блока)
}

alert(apples); // 5 (снаружи блока значение не изменилось)

/*----*/

'use strict';

if (true) {
  let apples = 10;

  alert(apples); // 10 (внутри блока)
}

alert(apples); // ошибка!

/*----*/

/*
Переменная let видна только после объявления.
*/

/*----*/

'use strict';

alert(a); //?

var a = 5;

/*----*/

'use strict';

alert(a); // ошибка, нет такой переменной

let a = 5;

/*---- */

'use strict';

let x;
let x; // ошибка: переменная x уже объявлена

/*----*/
'use strict';

// каждый цикл имеет свою переменную i
for(let i = 0; i<10; i++) { /* … */ }
for(let i = 0; i<10; i++) { /* … */ }

alert( i ); // ошибка: глобальной i нет
/*----*/

// При использовании в цикле, для каждой итерации создаётся своя переменная.

for(var i=0; i<10; i++) { /* … */ }

alert(i); // ?

//
// const
//

'use strict';

const apple = 5;
apple = 10; // ошибка

