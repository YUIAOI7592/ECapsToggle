var fs = require('fs');
var path = require('path');
var endOfLine = require('os').EOL;

function ECI(data) {
	for (var result = "", n = 0; n < data.length; n++) {
		var temp = data.charAt(n);
		result += temp == temp.toUpperCase() ? temp.toLowerCase() : temp.toUpperCase();
	}
	return result;
}
function file() {
	if (process.argv[2] === undefined) throw new Error('You need to open a file.');
	var fileLink = path.normalize(process.argv[2]);
	var writeFile = path.dirname(fileLink) + path.sep + path.basename(fileLink, path.extname(fileLink)) + '_Inverse' + path.extname(fileLink);
	
}