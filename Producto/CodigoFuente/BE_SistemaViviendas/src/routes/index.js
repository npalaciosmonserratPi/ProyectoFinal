const express = require('express');
const ruta = express.Router();

ruta.get('/',(req,res) =>{
    res.send('Holas');
});

module.exports = ruta;