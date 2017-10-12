var fs = require('fs');
var path = require('path');
var endOfLine = require('os').EOL;

String function ECI(String temp){
	var patt = new RegExp('[a-z]|[A-Z]', 'g');
	var result;
	while ((result = patt.exec(temp)) != null)  {
		
	}
}
function(){
	if (process.argv[2] === undefined) throw new Error('You need to open a file.');
    var fileLink = path.normalize(process.argv[2]);
	var writeFile = path.dirname(fileLink) + path.sep + path.basename(fileLink, path.extname(fileLink)) + '_Inverse' + path.extname(fileLink);
	
}