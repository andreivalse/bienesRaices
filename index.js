/* const express = require('express'); *///common js
import express from "express"; // ecmascript modules
import usuarioRoutes from './routes/usuarioRoutes.js'

//crear la app
const app = express();


//Routing
app.use('/', usuarioRoutes)


//DEfinir un puerto y arrancar el proyecto
const port = 3000

app.listen(port, ()=>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});