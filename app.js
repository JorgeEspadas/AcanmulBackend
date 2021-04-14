const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const puerto = 5000;
const app = express();
const apiRoute = require('./routes/api');
const authRoute = require('./routes/auth');
mongoose.connect(process.env.DB_CON,{ useUnifiedTopology: true , useNewUrlParser: true}, ()=> console.log('Iniciada la conexion a MongoDB'));


app.use(express.json()); // body-parser fue reemplazado por express.json() en express > 4.16
app.use('/api',apiRoute);
app.use('/auth', authRoute);

app.listen(puerto,() =>{
    console.log('Servidor iniciado en puerto ' + puerto);
});