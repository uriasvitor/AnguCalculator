const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '123456',
     database:"calc",
     connectionLimit: 10
});
module.exports  = pool
