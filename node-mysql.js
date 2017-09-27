var mysql = require('mysql');

var connection = mysql.createConnection({
	host		: 	'localhost',
	user		: 	'root',
	password	:	'',
	database	: 	'cafina_db'
});

connection.connect();
connection.query('select count(*) as num from banner', function(error, results, fields) {
	if (error) throw error;
	console.log('result: ', results[0].num);
});
connection.end();