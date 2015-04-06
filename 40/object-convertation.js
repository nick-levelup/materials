/*
Если в объекте присутствует метод toString,
который возвращает примитив, то он используется для преобразования.
*/


/* -------------- */
var user = {
  firstName: 'Василий'
};
 
alert(user); // [object Object]
/* -------------- */


/* -------------- */
var user = {
 
  firstName: 'Василий',
 
  toString: function() {
    return 'Пользователь ' + this.firstName;
  }
};
 
alert( user );
/* -------------- */


/*
Все объекты, включая встроенные, имеют свои реализации метода toString,
например:
*/
/* -------------- */
alert( [1,2] );    // toString для массивов выводит список элементов "1,2"
alert( new Date ); // toString для дат выводит дату в виде строки
alert( function() { } ); // toString для функции выводит её код
/* -------------- */


/*
Для численного преобразования объекта используется метод valueOf,
а если его нет — то toString:
*/

/*
У большинства встроенных объектов такого valueOf нет,
поэтому численное и
строковое преобразования для них работают одинаково.
*/

/* -------------- */
var room = {
  number: 777,
 
  valueOf: function() { return this.number; },
  toString: function() { return this.number; }
};
 
alert( +room );  // 777, вызвался valueOf
 
delete room.valueOf;
 
alert( +room );  // 777, вызвался toString

/* -------------- */


/* Итог
При строковом преобразовании объекта используется его метод toString.
Он должен возвращать примитивное значение, причём не обязательно именно
строку.

В стандарте прописано, что если toString нет, или он возвращает не
примитив, а объект, то вызывается valueOf, но обычно toString есть.

При численном преобразовании объекта используется метод valueOf,
а если его нет, то toString. У встроенных объектов valueOf обычно нет.

При операции над объектом, которая требует примитивное значение,
объект первым делом преобразуется в примитив.
Для этого используется численное преобразование,
исключение — встроенный объект Date.
*/


// Почему результат true ?

/* --------------- */
alert( ['x'] == 'x' );
/* --------------- */



/*
Объявлен объект с toString и valueOf.
Какими будут результаты alert?
*/
/* --------------- */
var foo = {
    toString: function () {
        return 'foo';
    },
    valueOf: fun[]ction () {
        return 2;
    }
};
 
alert(foo);
alert(foo + 1);
alert(foo + "3");
/* --------------- */


// Почему первое равенство — неверно, а второе — верно?

/* --------------- */
alert( [] == [] );  // false
alert( [] == ![] ); // true
/* --------------- */