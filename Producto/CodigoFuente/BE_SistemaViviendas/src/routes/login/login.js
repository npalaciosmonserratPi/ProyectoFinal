const express = require('express');
const routes = express.Router();
const jwt = require('jsonwebtoken');
const mysql = require('../../../db/conexion');

routes.get('/login', (req,res) =>{
    mysql.query('Select * from Usuario', (err,rows,fields) =>{
        if(err) throw err;
        res.json(rows);
    })  
});

routes.post('/login',(req,res)=>{
    const {username, password} = req.body;
    mysql.query('Select * from Usuario where nombre=? and pass=?',
    [username,password],(err,rows,fields) =>{
        if(err)throw err;
        if(rows.length > 0){
           let data = JSON.stringify(rows[0]);
           const token = jwt.sign(data,'secretWord');

          res.json({
            ok: true,
            message: 'Credenciales correctas',
            user: username,
            token: token
        });
           
           
        }else{
            res.send('No se obtuvo usuario por parte del servidor');
            console.log('No se obtuvo usuario por parte del servidor');
        }
})});


//Verificación del token


module.exports = routes;