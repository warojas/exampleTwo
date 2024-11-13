class articulo {
    static tableName = 'articulos';

    constructor(art_cod, art_escripcion, art_importe){
        this.art_cod = art_cod;
        this.art_escripcion = art_escripcion;
        this.art_importe = art_importe;
    }
}

module.exports = articulo;