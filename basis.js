var website = 'freetuts.net';

console.log(website);

var domain = [
	'abc.net',
	'dantri.net'
];
for (var i=0 ; i<domain.length; i++)
{
	console.log(domain[i]);
}


var storage = require('node-persist');
storage.init({
    dir : "path/to/save",
    ttl : false
});