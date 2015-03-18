/* Создание объекта */

var object = new Object();
var object = {};

/* Операции с объектом */

// 1. Присвоение свойства по ключу.
object.property = 21;
object.isObject = true;
object.array = [1,2,3,4,5];

// 2. Чтение свойства по ключу.
object.property; // 21
object.isObject; // true
object.isObject1; // undefined

// 3. Удаление свойства по ключу.
delete object.isObject;
object.isObject // undefined

// 4. Проверка существования свойства с определенным ключом.
property in object // boolean
'isObject' in object // false

// 5. Доступ через квадратные скобки
// установка
object['property'] = 21;
object['привет привет'] = 'HI';

// чтение
object['привет привет']

// переменная
object[variable] = 'HI';

// 6. Объявление со свойствами
object = {
  property: 21,
  isObject: true,
  array: [1,2,3,4,5],
  'привет привет': 'HI'
}

/* Перебор свойств и значений */

for (key in obj) {
  /* ... делать что-то с obj[key] ... */
}

/* Передача по ссылке */
var user = { name: "Вася" }; // в переменной - ссылка
var admin = user; // скопировали ссылку

/* «Настоящее» копирование объекта */
function clone(obj) {
  var obj2 = {};

  // если свойства могут быть объектами, то нужно перебирать и их
  for(var key in obj) obj2[key] = obj[key];

  return obj2;
}


/* TASK1
Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта.
*/

/* TASK2
Создайте функцию multiplyNumeric, которая получает объект и умножает
все численные свойства на 2.
*/

/* TASK3
Создайте функцию, которая возвращает количество свойств в объекте.
*/
























