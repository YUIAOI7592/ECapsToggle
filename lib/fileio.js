var fs = require('fs');
var path = require('path');
var endOfLine = require('os').EOL;

module.exports = function file() {
	if (process.argv[2] === undefined) throw new Error('You need to open a file.');
	var fileLink = path.normalize(process.argv[2]);
	var writeFile = path.dirname(fileLink) + path.sep + path.basename(fileLink, path.extname(fileLink)) + '_Inverse' + path.extname(fileLink);
	
}