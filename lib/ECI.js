module.exports = function ECI(data) {
	for (var result = "", n = 0; n < data.length; n++) {
		var temp = data.charAt(n);
		result += temp == temp.toUpperCase() ? temp.toLowerCase() : temp.toUpperCase();
	}
	return result;
}