const personalRepository = require('../repositories/personalRepository');

class personalService{
    getAllPersonal(){
        return personalRepository.findAll();
    }

    getPerosnalById(id){
        return personalRepository.findById(id);
    }

    createPersonal(personalData){
        return personalRepository.create(personalData);
    }

    updatePersonal(id, personalData){
        return perosonalRepository.update(id, personalData);
    }

    deletePersonal(id){
        return personalRepository.delete(id);
    }

}

module.exports = new personalService();