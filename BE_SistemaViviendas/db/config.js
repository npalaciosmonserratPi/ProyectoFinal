const mysql = require('mysql');

const config = mysql.createConnection({
    host:'database-roofit-dev.c0mrlzynrjhn.us-east-2.rds.amazonaws.com',
    database:'roofITDev',
    user:'admin',
    password:'MiPikachuDicecomo201!'
});

module.exports = config;