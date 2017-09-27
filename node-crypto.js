var crypto = require('crypto-js');
var message = crypto.AES.encrypt('tchai', 'abc').toString();
console.log(message);

var bytes = crypto.AES.decrypt(message, 'abc');
var message_decode = bytes.toString(crypto.enc.Utf8);

console.log(message_decode);