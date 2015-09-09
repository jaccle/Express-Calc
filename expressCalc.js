var express = require('express'),
	app = express();

app.set("view engine", "ejs");

app.get('/:op/:num1/:num2', function (req, res) {
		var answer;
		var symbol;
		var op = req.params.op;
		var num1 = parseFloat(req.params.num1);
		var num2 = parseFloat(req.params.num2);
		if (op === 'add') {
			answer = num2 + num1;
			symbol = " + ";
		} else if (op === 'sub') {
			answer = num1 - num2;
			symbol = " - ";
		} else if (op === 'mult') {
			answer = num2 * num1;
			symbol = " x ";
		} else if (op === 'div') {
			answer = num1 / num2;
			symbol =  " ÷ ";
		}
		console.log(req.params);
		res.render('index', {num1: num1, symbol: symbol, num2: num2, answer: answer});
});

app.listen(3000, function () {
	console.log("Starting a server on localhost:3000");
});