/*
особый синтаксис присваивания, при котором можно присвоить массив
или объект сразу нескольким переменным, разбив его на части.
*/

// !!! Массив
/* ---- */

'use strict';

let [firstName, lastName] = ["Name", "Last"];

alert(firstName); // Name
alert(lastName);  // Last

/* ---- */

'use strict';

// первый и второй элементы не нужны
let [, , title] = "Юлий Цезарь Император Рима".split(" ");

alert(title); // Император

/* ---- */
//spread
/* ---- */

'use strict';

let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)

/* ---- */

'use strict';

let [firstName, lastName] = [];

alert(firstName); // undefined

/* ---- */

'use strict';

// значения по умолчанию
let [firstName="Гость", lastName="Анонимный"] = [];

alert(firstName); // Гость
alert(lastName);  // Анонимный

/* ---- */

'use strict';

function defaultLastName() {
  return Date.now() + '-visitor';
}

// lastName получит значение, соответствующее текущей дате:
let [firstName, lastName=defaultLastName()] = ["Вася"];

alert(firstName); // Вася
alert(lastName);  // 1436...-visitor

/* ---- */
// !!! Объект
/* ---- */
// syntax
/* ---- */
let {var1, var2} = {var1:…, var2…}

/* ---- */

'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200

/* ---- */

'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {width: w, height: h, title} = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200

/* ---- */

'use strict';

let options = {
  title: "Меню"
};

let {width=100, height=200, title} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200

/* ---- */

'use strict';

let options = {
  title: "Меню"
};

let {width:w=100, height:h=200, title} = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200

/* ---- */

'use strict';

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Пончик", "Пирожное"]
}

let { title="Меню", size: {width, height}, items: [item1, item2] } = options;

// Меню 100 200 Пончик Пирожное
alert(title);  // Меню
alert(width);  // 100
alert(height); // 200
alert(item1);  // Пончик
alert(item2);  // Пирожное