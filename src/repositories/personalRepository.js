const CrudRepository = require('../lib/cudRepository');
const Personal = require('../models/personal');

class PersonalRepository extends CrudRepository{
    constructor(){
        super(Personal);
    }

}

module.exports = new PersonalRepository();