/*
Синтаксические ошибки — когда нарушена структура кода
*/
for (a = 5) { // неправильная конструкция for, пропущены точки с запятой ;

]; // неправильная закрывающая скобка

/*
Семантические ошибки, также называемые «ошибки времени выполнения» —
возникают, когда браузер смог прочитать скрипт и уже выполняет код,
но вдруг натыкается на проблему
*/

alert(nonexistant); // ошибка, переменная не определена!

// Семантические ошибки, в отличие от программных, могут быть частью
// нормальной работы скрипта!

/*
Конструкция try..catch
состоит из двух основных блоков: try, и затем catch. Например:
*/

/* ---------- */
try {
} catch(e) {
}
/* ---------- */


/*

Выполняется код внутри блока try.

Если в нём возникнет ошибка, то выполнение try прерывается,
и управление прыгает в начало блока catch.

Если ошибки нет — блок catch игнорируется.

*/

/*
объект исключения (exception object).

name
    Тип ошибки. Например, при обращении к несуществующей переменной равен "ReferenceError".
message
    Текстовое сообщение о деталях ошибки.
stack
*/


/*
Генерация ошибки: throw
*/

/* ---------- */
try {
  throw 123;
} catch(e) {
  alert(e); // 123
}
/* ---------- */


/* ---------- */
try {
  //...
  throw new Error("Упс, ошибка");
  //...
} catch(e) {
  alert(e.message); // Упс, ошибка
  alert(e.stack); // Где ошибка
}
/* ---------- */