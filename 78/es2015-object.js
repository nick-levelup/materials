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

