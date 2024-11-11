const express = require('express');
const articuloService = require('../services/articuloService');

const router = express.Router();

router.get('/', async(req,res)=>{
    const articulo = await articuloService.getAllArticulo();
    res.json(articulo);
});

router.get('/:id', async(req,res)=>{
    const articulo = await articuloService.getArticuloById(req.params.id);
    if(articulo){
        res.json(articulo);
    }else{
        res.status(404).json({message: 'Articulo not fount'});
    }
});

router.post('/', async(req,res)=>{
    const newArticulo = await articuloService.createArticulo(req.body);
    if(newArticulo){
        res.status(201).json(newArticulo);
    }else{
        res.status(404).json(newArticulo);
    }
});

router.put('/id:', async(req,res)=>{
    const updateArticulo = await articuloService.updateArticulo(req.params.id, req.body);
    if(updateArticulo){
        res.json(updateArticulo);
    }else{
        res.status(404).json({message: 'Articulo not found'});
    }
});

router.delete('/:id', async(req,res)=>{
    const deleted = await articuloService.deleteArticulo(req.params.id);
    if(deleted){
        res.status(204).send();
    }else{
        res.status(404).json({message: 'Articulo dont delete'});
    }
});

router.get('/personal/:cod', async(req,res)=>{
    try {
        const result = await articuloService.getArticuloByPersonal(
            req.params.cod
        )
        res.json(result);
    } catch (error) {
        if(error,message === 'Articulo not found'){
            res.status(404).json({error:error.message})
        }else{
            res.status(500).json({error:error.message})
        }
    }
});

module.exports = router;