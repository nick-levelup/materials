/* ===== */

class Название [extends Родитель]  {
  constructor
  методы
}

/* ===== */

'use strict';

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("Вася");
user.sayHi(); // Вася

/* ===== */

// Функция constructor запускается при создании new User,
// остальные методы — записываются в User.prototype.

/* ===== */

// Перепешите в старую реализацию

/* ===== */

// User нельзя вызывать без new, будет ошибка.
// Объявление класса с точки зрения области видимости ведёт себя как let.
// В частности, оно видно только текущем в блоке и только в коде, который находится ниже объявления (Function Declaration видно и до объявления).

// Метод sayHi является именно методом, то есть имеет доступ к super.
// Все методы класса работают в режиме use strict, даже если он не указан.
// Все методы класса не перечислимы. То есть в цикле for..in по объекту их не будет.

/* ===== */

// animal
// name
// run, stop

/* ===== */

// Class Expression

/* ===== */

'use strict';

let User = class {
  sayHi() { alert('Привет!'); }
};

new User().sayHi();

/* ===== */

'use strict';

let SiteGuest = class User {
  sayHi() { alert('Привет!'); }
};

new SiteGuest().sayHi(); // Привет
new User(); // ошибка

/* ===== */

// Геттеры, сеттеры

/* ===== */

'use strict';

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // геттер
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // сеттер
  set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' ');
  }

};

let user = new User("Вася", "Пупков");
alert( user.fullName ); // Вася Пупков
user.fullName = "Иван Петров";
alert( user.fullName ); // Иван Петров

/* ===== */