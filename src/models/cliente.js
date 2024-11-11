class cliente {
    static tableName = 'cliente';

    constructor(cli_cod, cli_nom, cli_telefono, cli_direc){
        this.cli_cod = cli_cod;
        this.cli_nom = cli_nom;
        this.cli_telefono = cli_telefono;
        this.cli_direc = cli_direc
    }
}

module.exports = cliente;