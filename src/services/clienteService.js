const cliente = require('../models/cliente');
const clienteRepository = require('../repositories/clienteRepository');

class clienteService{
    getAllCliente(){
        return clienteRepository.findAll();
    }

    getClienteById(id){
        return clienteRepository.findById(id);
    }

    createCliente(clienteData){
        return clienteRepository.create(clienteData);
    }

    updateCliente(id, clienteData){
        return clienteRepository.update(id, clienteData);
    }

    deleteCliente(id){
        return clienteRepository.delete(id);
    }

    //metodo para consultar cliente y boleta, boleta tiene la clave foranea
    async getClienteByBoleta(clienteId){
        const cliente = await clienteRepository.findById(clienteId);
        if(!cliente){
            throw new Error('Cliente not found');
        }

        const boleta = await clienteRepository.findClienteByBoleta(clienteId);
        const boletabycliente = {
            data: {
                ...cliente,
                boleta: boleta
            }
        }
        return boletabycliente;
    }
}

module.exports = new clienteService();