function pow (x, n) { // 2, 3
	var subnum = x;

	for (var i = 1; i < n; i++) {
		subnum = x * subnum;
	}

	return subnum;
}


// 2, 3
// 2, 2
// 2, 1

// 3, 3
// 3, 2
function powR (x, n) {
	
	if (n === 1) {
		return x; // базис рекурсии
	} else {
		return x * powR(x, n-1); // глубина рекурсии (max - 10 000)
		// 3 * (9)
		// 3 * (3)
	}
}

// n! factorial(5) // 5*4*3*2*1
// sum(5) // 5+4+3+2+1