const articulo = require('../models/articulos');
const articuloRepository = require('../repositories/articulosRepository');

class articuloService{
    getAllArticulo(){
        return articuloRepository.findAll();
    }

    getArticuloById(id){
        return articuloRepository.findById(id);
    }

    createArticulo(articuloData){
        return articuloRepository.create(articuloData);
    }

    updateArticulo(id, articuloData){
        return articuloRepository.update(id, articuloData);
    }

    deleteArticulo(id){
        return articuloRepository.delete(id);
    }

    //metodo para consultar cliente y boleta, boleta tiene la clave foranea
    async getArticuloByPersonal(articuloId){
        const articulo = await articuloRepository.findById(articuloId);
        if(!articulo){
            throw new Error('Articulo not found');
        }

        const personal = await articuloRepository.findPersonalByArticulo(articuloId);
        const personalbyarticulo = {
            data: {
                ...articulo,
                articulo: personal
            }
        }
        return personalbyarticulo;
    }
}

module.exports = new articuloService();