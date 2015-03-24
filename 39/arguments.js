/* --------------------- */
// Список аргументов и доступ к ним осуществляется через 
// «псевдо-массив» arguments.
function sayHi() {
  for (var i = 0; i < arguments.length; i++) {
    alert("Привет, " + arguments[i]);
  }
}
/* --------------------- */

/* --------------------- */
// Как в функции отличить отсутствующий аргумент от undefined?
function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0
/* --------------------- */


/* --------------------- */
// Напишите функцию sum(...), которая возвращает сумму всех своих
// аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2 ,3) = 6
sum(1, 2, 3, 4) = 10
/* --------------------- */


// Именованные аргументы
/* --------------------- */
function showWarning(width, height, title, contents, showYesNo) {
  width = width || 200; // почти все значения - по умолчанию
  height = height || 100;
   
  title = title || "Предупреждение";
 
  //...
}

showWarning(null, null, null, "Предупреждение", true);
/* --------------------- */


/* --------------------- */
var opts = {
  width: 400,
  height: 200,
  contents: "Текст",
  showYesNo: true
};

function showWarning(options) {
  var width = options.width || 200;  // по умолчанию
  var height = options.height || 100;
   
  var title = options.title || "Предупреждение";
 
  // ...
}

showWarning(opts);
/* --------------------- */