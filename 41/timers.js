// Синтаксис:
var timerId = setTimeout(func/code, delay[, arg1, arg2...])

/* -------- */
function func() {
  alert('Привет');
}
setTimeout(func, 1000);
/* -------- */


/* ------------ */
function sayHi(who) {
  alert("Привет, я " + who);
}
 
setTimeout(sayHi, 1000, "Вася");
/* ------------ */


/* -------------- */
function sayHi(who) {
  alert("Привет, я " + who);
}
 
setTimeout(function() { sayHi('Вася') }, 1000);
/* -------------- */

// !!! Вызов через setTimeout не передаёт контекст this.


/* -------------- */
function User(id) {
  this.id = id;
 
  this.sayHi = function() {
    alert(this.id);
  };
}
 
var user = new User(12345);
 
setTimeout(user.sayHi, 1000); // ожидается 12345, но выведет "undefined"
/* -------------- */


/* ------------- */
// (1) одна строка
setTimeout(user.sayHi, 1000);
 
// (2) то же самое в две строки
var func = user.sayHi;
setTimeout(func, 1000);
/* ------------- */



/* ------------- */
function User(id) {
  this.id = id;
 
  this.sayHi = function() {
    alert(this.id);
  };
}
 
var user = new User(12345);
 
setTimeout(function() {
  user.sayHi();
}, 1000);  
/* ------------- */


/*
Функция setTimeout возвращает идентификатор timerId, который
можно использовать для отмены действия.

Синтаксис: clearTimeout(timerId).
*/


/* ------------ */
var timerId = setTimeout(function() { alert(1) }, 1000);
 
clearTimeout(timerId);
/* ------------ */



/*
setInterval

Метод setInterval имеет синтаксис, аналогичный setTimeout. 

*/
var timerId = setInterval(func/code, delay[, arg1, arg2...])


// У браузерного таймера есть минимальная возможная задержка.

// Функцию оборачивают в setTimeout(func, 0),
// если хотят запустить ее после окончания текущего скрипта.

/*
Напишите функцию, которая последовательно выводит в консоль
числа от 1 до 20, с интервалом между числами 100мс.
То есть, весь вывод должен занимать 2000мс,
в течение которых каждые 100мс в консоли появляется очередное число.
*/

