var string = 'Hello World!';

// indexOf()

string.indexOf('105000'); // -1
string.indexOf('Hello'); // 0
string.indexOf('World'); // 6
string.indexOf('l', 5); // 2

function hasHttpProtocol (url) {
	return url.indexOf('http://') !== -1;
}

function allIndexOf (string, substring) {
	var position = 0;

	while(true) {
		var index = string.indexOf(substring, position); // -1 OR index

		if (index === -1) { break };

		position = index + 1;

		console.log(index + ' - index of substring ');
	}
}

// substr, substring, slice

// '100500'.substr(start [, length]);
'100500'.substr(3, 1); // 500

// '100500'.substring(start [, end]);
'100500'.substring(3); // 500
'100500'.substring(3, 5); // 50

// '100500'.slice(start [, end]);
'100500'.slice(3); // 500
'100500'.slice(3, 5); // 50


// вася --- Вася
// васЯ --- Вася

function formatName (string) {
	// [0], slice(0,1), charAt(0)
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function formatFullName (string) {
	var spaceIndex = string.indexOf(' '),
		part1, part2,
		result;

	if (spaceIndex !== -1) {
		part1 = formatName(string.slice(0, spaceIndex)); // name
		part2 = formatName(string.slice(spaceIndex + 1)); // surname

		result = part1 + ' ' + part2
	} else {
		result = formatName(string);
	}

	return result;
}



// '101010101010' sa(, 5);
function truncut (string, length) {
	if (string.length > length) {
		return string.slice(0, length - 1) + '…';
	} else {
		return string;
	}
}


var str = '';
for (var i = 65; i < 122; i++) {
	str += String.fromCharCode(i);
}


console.log(str);