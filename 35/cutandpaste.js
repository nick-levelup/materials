function cutAndPaste (string, cut, paste) {
	var n, part1, part2;

	// get index of http
	n = string.indexOf(cut);

	if (n !== -1) {
		part1 = string.substr(0, n);
		part2 = string.substr(n + cut.length);

		return part1 + paste + part2;
	} else {
		return string;
	}
}