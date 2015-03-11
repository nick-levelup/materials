0 / 0 // NaN
1 / 0 //Infinity
-1 / 0 //-Infinity

isFinite(NaN) //false
isFinite(Infinity) //false
isFinite(-Infinity) // false

isNaN('1') //false
isNaN('1000') //false
isNaN('aa1') //true

// soft convertation string to number
parseInt()
parseFloat()

parseInt('12px'); //12
+'12px' //NaN
parseInt('12px'); //12
parseInt('a12px'); //NaN

parseInt(' 12.1px'); //12
parseFloat(' 12.1px'); //12.1

function isNumeric (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

// Math.acos
// Math.asin
// Math.atan
// Math.atan2
// Math.exp
// Math.sqrt
// Math.log
// Math.sin
// Math.cos
// Math.tan
// Math.pow
// Math.abs

// Math.round // Округляет до ближайшего целого
// Math.floor // Округляет вниз
// Math.ceil // Округляет вверх

// Math.min
// Math.max
Math.min(1, 10) //1
Math.max(1, 10) //10

// Math.random
// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
// min = 5 max = 15

					// 0.3216 (15-5+1) 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Math.E
// Math.LN2
// Math.LOG2E
// Math.LOG10E
// Math.PI
// Math.SQRT12
// Math.SQRT2
// Math.LN10

40.3232.toFixed() //"40"
40.3232.toFixed(2) //"40.32"