// var fs = require('fs'),
// 	contents = fs.readFileSync(process.argv[2]);

// console.log(contents.toString().split('\n').length - 1);

//OR

var fs = require('fs'),
	contents = fs.readFile(process.argv[2], function () {
		console.log(contents.toString().split('\n').length - 1);
	});