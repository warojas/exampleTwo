const boleta = require('../models/boleta');
const boletaRepository = require('../repositories/boletaRepository');

class boletaService{
    getAllBoleta(){
        return boletaRepository.findAll();
    }

    getBoletaById(id){
        return boletaRepository.findById(id);
    }

    createBoleta(boletaData){
        return boletaRepository.create(boletaData);
    }

    updateBoleta(id, boletaData){
        return boletaRepository.update(id, boletaData);
    }

    deleteBoleta(id){
        return boletaRepository.delete(id);
    }

    //metodo para consultar cliente y boleta, boleta tiene la clave foranea
    async getBoletaByPersonal(boletaId){
        const boleta = await boletaRepository.findById(boletaId);
        if(!boleta){
            throw new Error('Boleta not found');
        }

        const personal = await boletaRepository.findPersonalByBoleta(boletaId);
        const personalbyboleta = {
            data: {
                ...boleta,
                boleta: personal
            }
        }
        return personalbyboleta;
    }
}

module.exports = new boletaService();