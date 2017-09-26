var mysql = require('mysql');

var connection = mysql.createConnection({
	host		: 	'localhost',
	user		: 	'root',
	password	:	'',
	database	: 	'test'
});

connection.connect();
connection.query('select 1+1 as solution', function(error, results, fields) {
	if (error) throw error;
	console.log('result: ', results[0].solution);
});
connection.end();