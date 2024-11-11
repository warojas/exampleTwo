const CrudRepository = require('../lib/cudRepository');
const Boleta = require('../models/boleta');

class BoletaRepository extends CrudRepository{
    constructor(){
        super(Boleta);
    }

    //consulta repositoro by personal
    async findPersonalByBoleta(bol_cod){
        const [row] = await this.pool.query(`SELECT * FROM boleta b inner join personal p on b.bol_cod = p.bol_cod = ?`, [bol_cod]);
        return row;
    }
}

module.exports = new BoletaRepository();