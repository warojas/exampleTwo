const CrudRepository = require('../lib/cudRepository');
const Articulo = require('../models/articulos');

class ArticuloRepository extends CrudRepository{
    constructor(){
        super(Articulo);
    }

    //consulta repositoro by personal
    async findPersonalByArticulo(art_cod){
        const [row] = await this.pool.query(`SELECT * FROM articulo a inner join personal p on a.art_cod = p.art_cod = ?`, [art_cod]);
        return row;
    }
}

module.exports = new ArticuloRepository();