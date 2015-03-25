// При объявлении в объект можно записать функцию.
// Она становится его методом, например:

/* --------------------- */
var user = {
  name: 'Василий',

  // метод
  sayHi: function() {
    alert('Привет!');
  }

};

// Вызов метода
user.sayHi();
/* --------------------- */

// Либо
/* --------------------- */
var user = {
  name: 'Василий'
};
 
user.sayHi = function() {
  alert('Привет!');
};
 
// Вызов метода:
user.sayHi();
/* --------------------- */


// Для доступа к объекту из метода используется ключевое слово this
/* --------------------- */
var user = {
  name: 'Василий',
 
  sayHi: function() {
    alert( this.name );
  }
};
 
user.sayHi();
/* --------------------- */


/*
Создайте объект calculator с тремя методами:
    readValues() запрашивает prompt два значения и сохраняет их как свойства объекта
    sum() возвращает сумму двух значений
    mul() возвращает произведение двух значений

var calculator = {
  ... ваш код...
}

calculator.readValues();
alert( calculator.sum() );
alert( calculator.mul() );

*/

/*
Создайте объект ladder с тремя методами:
  up:
  down:
  getStep:
  setStep

ladder.up(); // 1
ladder.up(); // 2
ladder.down(); // 1
ladder.getStep(); // 1
ladder.down(); // 0
ladder.down(); // -1
ladder.getStep(); // -1
ladder.setStep(10); // 10
ladder.getStep(); // 10


Позже преобразовать в такую цепочку
ladder.up().up().down().up().down().getStep();  // 1
*/