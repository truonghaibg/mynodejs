const importer = require('node-mysql-importer')

importer.config({
   'host': 'localhost',
   'user': 'root',
   'password': '',
   'database': 'canifa_db'
})

importer.importSQL('canifa_db.sql').then( () => {
   console.log('all statements have been executed')
}).catch( err => {
   console.log(`error: ${err}`)
})