import express from 'express';

const router = express.Router();

router.get('/', function(req, res){
    res.json({msg: 'Hola Mundo en express'})
});

router.get('/nosotros', function(req, res){
    res.send('Información de nosotros')
});

export default router