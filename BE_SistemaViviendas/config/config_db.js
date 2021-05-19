// coneccion a base de datos
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: "root",
    password: "Nicole2630:",
    insecureAuth : false,
    database: 'db_roofit'
  });
 
module.exports = con
