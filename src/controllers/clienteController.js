const express = require('express');
const clienteService = require('../services/clienteService');

const router = express.Router();

router.get('/', async(req,res)=>{
    const cliente = await clienteService.getAllCliente();
    res.json(cliente);
});

router.get('/:id', async(req,res)=>{
    const cliente = await clienteService.getClienteById(req.params.id);
    if(cliente){
        res.json(cliente);
    }else{
        res.status(404).json({message: 'Cliente not fount'});
    }
});

router.post('/', async(req,res)=>{
    const newCliente = await clienteService.createCliente(req.body);
    if(newCliente){
        res.status(201).json(newCliente);
    }else{
        res.status(404).json(newCliente);
    }
});

router.put('/id:', async(req,res)=>{
    const updateCliente = await clienteService.updateCliente(req.params.id, req.body);
    if(updateCliente){
        res.json(updateCliente);
    }else{
        res.status(404).json({message: 'Cliente not found'});
    }
});

router.delete('/:id', async(req,res)=>{
    const deleted = await clienteService.deleteCliente(req.params.id);
    if(deleted){
        res.status(204).send();
    }else{
        res.status(404).json({message: 'Cliente dont delete'});
    }
});

//************************************ */
router.get('/boleta/:cod', async(req,res)=>{
    try {
        const result = await clienteService.getClienteByBoleta(
            req.params.cod
        )
        res.json(result);
    } catch (error) {
        if(error,message === 'Cliente not found'){
            res.status(404).json({error:error.message})
        }else{
            res.status(500).json({error:error.message})
        }
    }
});

module.exports = router;