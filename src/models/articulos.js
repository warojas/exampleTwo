class articulo {
    static tableName = 'articulo';

    constructor(art_cod, art_descripcion, art_importe){
        this.art_cod = art_cod;
        this.art_descripcion = art_descripcion;
        this.art_importe = art_importe;
    }
}

module.exports = articulo;