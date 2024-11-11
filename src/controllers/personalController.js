const express = require('express');
const personalService = require('../services/personalService');

const router = express.Router();

router.get('/', async(req,res)=>{
    const personal = await personalService.getAllPersonal();
    res.json(personal);
});

router.get('/:id', async(req,res)=>{
    const personal = await personalService.getPersonalById(req.params.id);
    if(personal){
        res.json(personal);
    }else{
        res.status(404).json({message: 'Personal not fount'});
    }
});

router.post('/', async(req,res)=>{
    const newPersonal = await personalService.createPersonal(req.body);
    if(newAoleta){
        res.status(201).json(newPersonal);
    }else{
        res.status(404).json(newPersonal);
    }
});

router.put('/id:', async(req,res)=>{
    const updatePersonal = await personalService.updatePersonal(req.params.id, req.body);
    if(updatePersonal){
        res.json(updatePersonal);
    }else{
        res.status(404).json({message: 'Personal not found'});
    }
});

router.delete('/:id', async(req,res)=>{
    const deleted = await personalService.deletePersonal(req.params.id);
    if(deleted){
        res.status(204).send();
    }else{
        res.status(404).json({message: 'Personal dont delete'});
    }
});

module.exports = router;