// Оператор typeof возвращает тип аргумента. У него есть два синтаксиса:

// Синтаксис оператора: typeof x.
// Синтаксис функции: typeof(x).

/* --------------- */
typeof undefined // "undefined"
 
typeof 0    // "number"
  
typeof true // "boolean"
 
typeof "foo" // "string"
 
typeof {} // "object"
 
typeof null  // "object"
typeof function(){} // "function" 
/* --------------- */


/* --------------- */
alert( typeof {} ); // 'object'
alert( typeof [] ); // 'object'
alert( typeof new Date ); // 'object'
/* --------------- */


// Основная проблема typeof — неумение различать объекты, кроме функций.
// Но есть и другой способ получения типа.

// У всех встроенных объектов есть скрытое свойство [[Class]]
// Дело в том, что toString от стандартного объекта выводит [[Class]]
// в небольшой обертке.

/* --------------- */
var obj = {};
alert( obj ); // [object Object]
/* --------------- */


/* --------------- */
var toClass = {}.toString; // (1)
 
var arr = [1,2];
alert( toClass.call(arr) ); // (2) [object Array]
 
var date = new Date;
alert( toClass.call(date) ); // [object Date]
 
var type = toClass.call(date).slice(8, -1); // (3)
alert(type); // Date
/* --------------- */


// Смысл утиной типизации — в проверке методов и свойств,
// безотносительно типа объекта.

/* --------------- */
var x = [1,2,3];
 
if (x.splice) {
  alert('Массив!');
}
/* --------------- */


// Для проверки, кем был создан объект, есть оператор instanceof.
// Синтаксис:
obj instanceof Func.


/* --------------- */
function Animal(name) {
  this.name = name;
}
var animal = new Animal("Винни-пух");
 
alert( animal instanceof Animal ); // true
/* --------------- */


/* --------------- */
var d = new Date();
alert(d instanceof Date); // true
 
function f() { }
alert(f instanceof Function); // true
/* --------------- */





// Полиморфизм
// https://en.wikipedia.org/wiki/Polymorphism_%28computer_science%29
// В языках программирования и теории типов полиморфизмом
// называется способность функции обрабатывать данные разных типов


/*
Напишите функцию outputDate(date), которая выводит дату в формате dd.mm.yy.

Ее первый аргумент должен содержать дату в одном из видов:

    Как объект Date.
    Как строку в формате yyyy-mm-dd.
    Как число секунд с 01.01.1970.
    Как массив [гггг, мм, дд], месяц начинается с нуля

Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.

Пример работы:*/

/*------------------*/
function outputDate(date) { /* ваш код */ }

outputDate( '2011-10-02' );  // 02.10.11
outputDate( 1234567890 );  // 14.02.09
outputDate( [2000,0,1] ); // 01.01.00
outputDate( new Date(2000,0,1) ); // 01.01.00
/*------------------*/