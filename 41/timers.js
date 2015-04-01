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


var Popup = function (openTime, closeTime) {
  
  this.openTime = openTime * 1000 || 0;
  this.closeTime = closeTime * 1000;

  this.showPopup = function () {
    $('.popup').fadeIn();

    if (this.closeTime) {
      setTimeout(this.hidePopup, this.closeTime);
    };
  }

  this.hidePopup = function () {
    $('.popup').fadeOut();
  }

  this.setPopup = function () {
    var self = this;
    
    setTimeout(function () {
      self.showPopup();
    }, this.openTime);
  }




}


(function(){
  var timer = (function () {
    var counter = 0;

    return function (intervalID) {
      console.log(++counter);

      if (counter === 20) {
        clearInterval(intervalID);
      };
    }
  })()

  var intervalID = setInterval(function () {
    timer(intervalID)
  }, 100);
})();




function Timer () {
  var counter = 0,
    self = this;

  this.log = function () {
    console.log(++counter);

    if (counter < 20) {
      self.setTime();
    };
  };

  this.setTime = function () {
    setTimeout(self.log, 100);
  }
}

var obj = {

  sign: '!',

  sayHi: function (name) {
    console.log(name + this.sign)
  }
}

function z (x) {
  console.log(x)
}


function delay (fn, time) {

  return function () {
    var self = this,
      arg = arguments;

    setTimeout(function () {
      fn.apply(self, arg);
    }, time);

  }

}


delay(obj.sayHi, 1000)('Vasja') // Vasja!


// delay(function () {
//  obj.sayHi('Vasja')
// }, 1000)()
