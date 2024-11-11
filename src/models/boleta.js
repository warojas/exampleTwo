class boleta {
    static tableName = 'boleta';

    constructor(bol_cod, bol_fecha, cli_cod){
        this.bol_cod = bol_cod;
        this.bol_fecha = bol_fecha;
        this.cli_cod = cli_cod;
    }
}

module.exports = boleta;