/**
 * Created by Nick on 18.08.2015.
 */

// Достаточно указать имя свойства
// А значение будет взято из одноименной переменной

/* ==== */
'use strict';

let name = "Вася";
let isAdmin = true;

let user = {
  name,
  isAdmin
};

/* ==== */

// Написать функцию которая получает два аргумента
// firstName, lastName
// И возвращает новый объект, в котором два свойства равные этим аргументам

/* ==== */

// Имя свойст можно задать через переменную

/* ==== */

'use strict';

let propName = "firstName";

let user = {
  [propName]: "Вася"
};

/* ==== */

// выполнение операций в ключе

/* ==== */

'use strict';

let a = 1;

let user = {
  [a + 1]: "2"
};

/* ==== */

// Создать объект в котором буде одно свойство.
// Имя свойства и значение его должны равнятся текущему домену
// Имя свойства должно быть написанно заглавными буквами
// вывести в консоль

/* ==== */

// Получение прототипа

/* ==== */

// method
Object.getPrototypeOf();
// property
__proto__

/* ==== */

/*
Нарисовать блоки и соеденить их стрелочками

Object.prototype
Number.prototype
Function.prototype
String.prototype

alert,
1
[1,2]

Object
Function
String
Number
*/

/* ==== */

// Установка прототипа

/* ==== */

Object.setPrototypeOf(obj, newProto)

/* ==== */

// Функция Object.assign получает список объектов и копирует в первый target свойства из остальных.

/* ==== */

Object.assign(target, src1, src2...)

/* ==== */

'use strict';

let user = { name: "Вася" };
let visitor = { isAdmin: false, visits: true };
let admin = { isAdmin: true };

Object.assign(user, visitor, admin);

// user <- visitor <- admin
alert( JSON.stringify(user) ); // ?

/* ==== */

'use strict';

let user = { name: "Вася", isAdmin: false };

Object.assign({}, user); // ?

/* ==== */

// Новая функция для проверки равенства значений.
// Возвращает true, если значения value1 и value2 равны, иначе false.
// этот алгоритм сравнения, который называется SameValue

/* ==== */

Object.is(value1, value2)

/* ==== */

// Сравнение +0 и -0
alert( Object.is(+0, -0)); // false
alert( +0 === -0 );        // true

// Сравнение с NaN
alert( Object.is(NaN, NaN) ); // true
alert( NaN === NaN );         // false

/* ==== */

// Методы объекта
// 1. Более короткий синтаксис объявления.

/* ==== */

'use strict';

let name = "Вася";
let user = {
  name,
  // вместо "sayHi: function() {" пишем "sayHi() {"
  sayHi() {
    alert(this.name);
  }
};

user.sayHi(); // Вася

/* ==== */

// 2. super

/* ==== */

'use strict';

let animal = {
  walk() {
    alert("I'm walking");
  }
};

let rabbit = {
  __proto__: animal,
  walk() {
    alert(super.walk); // walk() { … }
    super.walk(); // I'm walking
  }
};

rabbit.walk();

/* ==== */