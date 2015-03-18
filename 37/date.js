/* Создание */

// Создает объект Date с текущей датой и временем:
new Date()

// Создает объект Date, значение которого равно количеству миллисекунд (1/1000 секунды), прошедших с 1 января 1970 года GMT+0.
new Date(milliseconds)

// 24 часа после 01.01.1970 GMT+0
new Date(3600*24*1000);

/* Если единственный аргумент - строка,
используется вызов Date.parse для ее разбора. */
new Date(datestring)

/* Дату можно создать, используя компоненты в местной временной зоне. 
Для этого формата обязательны только первые два аргумента. 
Отсутствующие параметры, начиная с hours считаются равными нулю, 
а date — единице. */
new Date(year, month, date, hours, minutes, seconds, ms)
new Date(2011, 0, 1) // 1 января 2011, 00:00:00 в местной временной зоне
new Date(2011, 0) // то же самое, date по умолчанию равно 1
new Date(2011, 0, 1, 0, 0, 0, 0); // то же самое
new Date(2011, 0, 1, 2, 3, 4, 567);

/* Методы */

// Получить год(из 4 цифр)
getFullYear()

// Получить месяц, от 0 до 11.
getMonth()

// Получить число месяца, от 1 до 31.
getDate()

// Получить соответствующие компоненты.
getHours(), getMinutes(), getSeconds(), getMilliseconds()

/* Получить номер дня в неделе. Неделя в JavaScript начинается с воскресенья,
так что результат будет числом от 0(воскресенье) до 6(суббота). */
getDay()

// UTC
//getUTCFullYear(), getUTCMonth(), getUTCDay(), getUTCHours()


/* Установка даты */
//Все они, кроме setTime(), обладают также UTC-вариантом, например: setUTCHours().
setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds) // (устанавливает всю дату по миллисекундам с 01.01.1970 UTC)

/* Автоисправление */
new Date(2013, 0, 32); // 1 февраля 2013!

/* Преобразование к числу, разность дат */
// Когда объект Date используется в числовом контексте,
//он преобразуется в количество миллисекунд:





/* TASK */

//--------------

/* Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
Временная зона — местная. Выведите его на экран.
*/

//--------------

/*
Создайте функцию getWeekDay(date), которая выводит текущий день
недели в коротком формате ‘пн’, ‘вт’, … ‘вс’.

Например:
var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'
*/

//--------------

/*
Напишите функцию, getLocalDay(date) которая возвращает
день недели для даты date.

День нужно возвратить в европейской нумерации, т.е.
понедельник имеет номер 1, вторник номер 2, …, воскресенье - номер 7.

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );      // 2
*/

//--------------

/*
Какое число месяца было 100 дней назад? Какой день недели?

Используйте JavaScript, чтобы вывести эту информацию.
День недели выводите двухбуквенном виде,
т.е. одно значение из (пн, вт, ср, …,вс).

*/

//--------------

/*

Напишите функцию getLastDayInMonth(year, month),
которая возвращает последний день месяца.

Параметры:
    year — 4-значный год, например 2012.
    month — месяц от 0 до 11.

Например, getLastDayInMonth(2012, 1) = 29 (високосный год, февраль).

*/