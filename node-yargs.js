
function check_number(n) {
	if (n<2) {
		return false;
	}
	if (n==2) return true;
	if (n%2==0) return false;
	for (var i=3 ; i<n-1 ; i+=2) {
		if (n%i==0) {
			return false;
		}
	}
}
var yargs = require('yargs');

var argv = yargs.argv;
console.log(argv);

if (typeof argv.n == 'undefined') {
	console.log('not n');
} else {
	if (check_number(argv.n)) {
	console.log('OK');
	} else {
		console.log('KO');
	}
}