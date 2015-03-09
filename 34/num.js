0 / 0 // NaN
1 / 0 //Infinity
-1 / 0 //-Infinity

isFinite(NaN) //false
isFinite(Infinity) //false
isFinite(-Infinity) // false

isNaN('1') //false
isNaN('1') //false
isNaN('aa1') //true

// soft convertation string to number
parseInt()
parseFloat()

parseInt('12px'); //12
+'12px' //NaN
parseInt('12px'); //12
parseInt('a12px'); //NaN