const express = require('express');
const boletaService = require('../services/boletaService');

const router = express.Router();

router.get('/', async(req,res)=>{
    const boleta = await boletaService.getAllBoleta();
    res.json(boleta);
});

router.get('/:id', async(req,res)=>{
    const boleta = await boletaService.getBoletaById(req.params.id);
    if(boleta){
        res.json(boleta);
    }else{
        res.status(404).json({message: 'Boleta not fount'});
    }
});

router.post('/', async(req,res)=>{
    const newBoleta = await boletaService.createBoleta(req.body);
    if(newBoleta){
        res.status(201).json(newBoleta);
    }else{
        res.status(404).json(newBoleta);
    }
});

router.put('/:id', async(req,res)=>{
    const updateBoleta = await boletaService.updateBoleta(req.params.id, req.body);
    if(updateBoleta){
        res.json(updateBoleta);
    }else{
        res.status(404).json({message: 'Boleta not found'});
    }
});

router.delete('/:id', async(req,res)=>{
    const deleted = await boletaService.deleteBoleta(req.params.id);
    if(deleted){
        res.status(204).send();
    }else{
        res.status(404).json({message: 'Boleta dont delete'});
    }
});

router.get('/personal/:cod', async(req,res)=>{
    try {
        const result = await boletaService.getBoletaByPersonal(
            req.params.cod
        )
        res.json(result);
    } catch (error) {
        if(error,message === 'Boleta not found'){
            res.status(404).json({error:error.message})
        }else{
            res.status(500).json({error:error.message})
        }
    }
});

module.exports = router;