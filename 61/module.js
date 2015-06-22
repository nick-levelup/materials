// Пространство имен

// ПОСЛЕ: 1 глобальная переменная
// глобальный объект
var MYAPP = {};

// конструкторы
MYAPP.Parent = function () {};
MYAPP.Child = function () {};
// стр. 129

// переменная
MYAPP.some_var = 1;

// объект
// контейнер
MYAPP.modules = {};

// вложенные объекты
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};


/*

*/

// небезопасный способ
var MYAPP = {};

// так лучше
if (typeof MYAPP === 'undefined') {
    var MYAPP = {};
}

// или немного короче
var MYAPP = MYAPP || {};

/*
namespace();
*/
MYAPP.namespace('MYAPP.modules.module2');

var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;
    // отбросить начальный префикс
    // – имя глобального объекта
    if (parts[0] === 'MYAPP') {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        // создать свойство, если оно отсутствует
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

// присваивать возвращаемое значение локальной переменной
var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2; // true
// опускать начальный префикс `MYAPP`
MYAPP.namespace('modules.module51');


/*
Объявление зависимостей
*/

var myFunction = function () {
    // зависимости
    var event = YAHOO.util.Event,
        dom = YAHOO.util.Dom;
    // остальная часть функции 
    // использует переменные event и
    // dom...
}


var myModule = {
 
  myProperty: "someValue",
 
  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },
 
  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },
 
  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },
 
  // override the current configuration
  updateMyConfig: function( newConfig ) {
 
    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};

// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});

// Outputs: Caching is: disabled
myModule.reportMyConfig();



/*
Шаблон «модуль»
*/

/*
  Пространств имен
  Немедленно вызываемых функций
  Частных и привилегированных членов
  Объявления зависимостей
*/

//
MYAPP.namespace('MYAPP.utilities.array');

//
MYAPP.utilities.array = (function () {
    // частные свойства
    var array_string = '[object Array]',
        ops = Object.prototype.toString,
        // частные методы
        inArray = function (haystack, needle) {
            for (var i = 0, max = haystack.length; i < max; i += 1) {
                if (haystack[i] === needle) {
                    return i;
                }
            }
            return 1;
        },
        isArray = function (a) {
            return ops.call(a) === array_string;
        };
    // конец инструкции var

    // открытие доступа к некоторым методам
    return {
        isArray: isArray,
        indexOf: inArray
    };
}());

/*
Модули, создающие конструкторы
*/

MYAPP.namespace('MYAPP.utilities.Array');

MYAPP.utilities.Array = (function () {
    // зависимости
    var uobj = MYAPP.utilities.object,
        ulang = MYAPP.utilities.lang,
        // частные свойства и методы...
        Constr;
    // конец инструкции var

    // реализация необязательной процедуры инициализации
    // ...
    // общедоступные методы конструктор
    Constr = function (o) {
        this.elements = this.toArray(o);
    };

    // общедоступные методы прототип
    Constr.prototype = {
        constructor: MYAPP.utilities.Array,
        version: '2.0',
        toArray: function (obj) {
            for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
                a[i] = obj[i];
            }
            return a;
        }
    };

    // вернуть конструктор,
    // создающий новое пространство имен
    return Constr;
}());

// Инициализация ?


/*
Шаблон изолированного пространства имен
*/
Sandbox('ajax', 'dom', function (box) {
  // console.log(box);
});

// Asynchronous module definition (AMD)
define(['jquery'] , function ($) {
    return function () {};
});

//Calling define with a dependency array and a factory function
define(
    module_id /*optional*/,
    [dependencies] /*optional*/,
    definition function /*function for instantiating the module or object*/
);


// A module_id (myModule) is used here for demonstration purposes only
define( "myModule",
 
    ["foo", "bar"],
 
    // module definition function
    // dependencies (foo and bar) are mapped to function parameters
    function ( foo, bar ) {
        // return a value that defines the module export
        // (i.e the functionality we want to expose for consumption)
 
        // create your module here
        var myModule = {
            doStuff:function () {
                console.log( "Yay! Stuff" );
            }
        };
 
    return myModule;
});
 
// An alternative version could be..
define( "myModule",
 
    ["math", "graph"],
 
    function ( math, graph ) {
 
        // Note that this is a slightly different pattern
        // With AMD, it's possible to define modules in a few
        // different ways due to it's flexibility with
        // certain aspects of the syntax
        return {
            plot: function( x, y ){
                return graph.drawPie( math.randomGrid( x, y ) );
            }
        };
});

// Consider "foo" and "bar" are two external modules
// In this example, the "exports" from the two modules
// loaded are passed as function arguments to the
// callback (foo and bar) so that they can similarly be accessed
 
require(["foo", "bar"], function ( foo, bar ) {
        // rest of your code here
        foo.doSomething();
});


/*
require js
*/
// <script data-main="scripts/main" src="scripts/require.js"></script>


requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery', 'canvas', 'app/sub'],
function   ($,        canvas,   sub) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});

//my/shirt.js now has some dependencies, a cart and inventory
//module in the same directory as shirt.js
define(["./cart", "./inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);


/*
Шаблон цепочек
*/

myobj.method1('hello').method2().method3('world').method4();
obj.increment().add(3).shout();