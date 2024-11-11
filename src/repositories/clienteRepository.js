const CrudRepository = require('../lib/cudRepository');
const Cliente = require('../models/cliente');

class ClienteRepository extends CrudRepository{
    constructor(){
        super(Cliente);
    }

    //consulta repositoro by personal
    async findBoletaByCliente(bol_cod){
        const [row] = await this.pool.query(`SELECT * FROM cliente c inner join boleta b on c.cli_cod = b.cli_cod = ?`, [bol_cod]);
        return row;
    }
}

module.exports = new ClienteRepository();