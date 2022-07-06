/* const express = require('express'); *///common js
import express from "express"; // ecmascript modules
import usuarioRoutes from './routes/usuarioRoutes.js'

//crear la app
const app = express();

//Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Routing
app.use('/auth', usuarioRoutes)




//DEfinir un puerto y arrancar el proyecto
const port = 3500

app.listen(port, ()=>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});