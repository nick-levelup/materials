// В JavaScript все глобальные переменные и функции являются
// свойствами специального объекта,

// который называется «глобальный объект»
// Присваивая или читая глобальную переменную, мы, фактически,
//работаем со свойствами
/* --------------------- */
var a = 5;   // объявление var создаёт свойство window.a
alert(window.a); // 5

window.a = 5;
alert(a); // 5
/* --------------------- */

/*
Выполнение скрипта происходит в две фазы:

    На первой фазе происходит инициализация, подготовка к запуску.

    Во время инициализации скрипт сканируется на предмет объявления функций
    вида Function Declaration, а затем — на предмет объявления переменных
    var. Каждое такое объявление добавляется в window.

    Функции, объявленные как Function Declaration, создаются сразу
    работающими, а переменные — равными undefined.

    На второй фазе — собственно, выполнение.

    Присваивание (=) значений переменных происходит на второй фазе,
    когда поток выполнения доходит до соответствующей строчки кода.
*/


// Конструкции for, if... не влияют на видимость переменных


// Tasks

/* --------------------- */
// Каков будет результат кода?
if ("a" in window) {
    var a = 1;
}
alert(a);
/* --------------------- */


/* --------------------- */
// Каков будет результат кода?
if ("a" in window) {
    a = 1;
}
alert(a);
/* --------------------- */


/* --------------------- */
// Каков будет результат кода?
if ("a" in window) {
    a = 1;
}
var a;

alert(a);
/* --------------------- */