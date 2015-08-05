<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>QUnit Example</title>
      <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.14.0.css">
   </head>
   <body>
      <div id="qunit"></div>
      <div id="qunit-fixture"></div>
      <script src="//code.jquery.com/qunit/qunit-1.14.0.js"></script>
      <script src="tests.js"></script>
   </body>
</html>

QUnit.test(name, testFunction)

QUnit.test('My first test', function(assert) {
   // Assertions here...
});

deepEqual(value, expected[, message])
	A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
equal(value, expected[, message])
	Verify the value provided is equal the expected parameter using a non-strict comparison (==).
notDeepEqual(value, expected[, message])
	Same as deepEqual() but tests for inequality;
notEqual(value, expected[, message])
	Same as equal() but tests for inequality;
propEqual(value, expected[, message])
	 A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
strictEqual(value, expected[, message])
	Verify the value provided is equal to the expected parameter using a strict comparison (===);
notPropEqual(value, expected[, message])
	Same as propEqual() but tests for inequality;
notStrictEqual(value, expected[, message])
	Same as strictEqual() but tests for inequality;
ok(value[, message]
	An assertion that passes if the first argument is truthy;
throws(function [, expected ] [, message ])
	Test if a callback throws an exception, and optionally compare the thrown error;


var App = {
   max: function() {
      var max = -Infinity;
      for (var i = 0; i < arguments.length; i++) {
         if (arguments[i] > max) {
            max = arguments[i];
         }
      }
 
      return max;
   },
   isOdd: function(number) {
      return number % 2 !== 0;
   },
   sortObj: function(array) {
      array.sort(function(a, b) {
         var date1 = new Date(a.timestamp).getTime();
         var date2 = new Date(b.timestamp).getTime();
 
         if (date1 < date2) {
            return -1;
         } else if (date1 === date2) {
            return 0;
         } else {
            return 1;
         }
      });
   }
};

QUnit.test('max', function (assert) {
    assert.strictEqual(App.max(), -Infinity, 'No parameters');
    assert.strictEqual(App.max(3, 1, 2), 3, 'All positive numbers');
    assert.strictEqual(App.max(-10, 5, 3, 99), 99, 'Positive and negative numbers');
    assert.strictEqual(App.max(-14, -22, -5), -5, 'All positive numbers');
});
 
QUnit.test('isOdd', function (assert) {
    assert.ok(App.isOdd(5), '5 is odd');
    assert.ok(!App.isOdd(2), '5 is not odd');
    assert.ok(!App.isOdd(0), '0 is not odd');
    assert.throws(function () {
        App.isOdd(null);
    },
        /The given argument is not a number/,
        'Passing null raises an Error');
    assert.throws(function () {
        App.isOdd([]);
    },
    new Error('The given argument is not a number'),
        'Passing an array raises an Error');
});
 
 
QUnit.test('sortObj', function (assert) {
    var timestamp = Date.now();
 
    var array = [{
        id: 1,
        timestamp: timestamp
    }, {
        id: 3,
        timestamp: timestamp + 1000
    }, {
        id: 11,
        timestamp: timestamp - 1000
    }];
 
    App.sortObj(array);
 
    assert.propEqual(array, [{
        id: 11,
        timestamp: timestamp - 1000
    }, {
        id: 1,
        timestamp: timestamp
    }, {
        id: 3,
        timestamp: timestamp + 1000
    }]);
    assert.notPropEqual(App.sortObj(array), array, 'sortObj() does not return an array');
    assert.strictEqual(App.sortObj(array), undefined, 'sortObj() returns'
});


  function prettyDate(time){
    var date = new Date(time || ""),
      diff = (((new Date()).getTime() - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);
 
    if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
      return;
 
    return day_diff == 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor( diff / 60 ) +
          " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor( diff / 3600 ) +
          " hours ago") ||
      day_diff == 1 && "Yesterday" ||
      day_diff < 7 && day_diff + " days ago" ||
      day_diff < 31 && Math.ceil( day_diff / 7 ) +
        " weeks ago";
  }