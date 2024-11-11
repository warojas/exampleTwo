class personal {
    static tableName = 'personal';

    constructor(per_cod, per_nombre, per_estado, per_direccion, per_telefono, art_cod, bol_cod){
        this.per_cod = per_cod,
        this.per_nombre = per_nombre,
        this.per_estado = per_estado,
        this.per_direccion = per_direccion,
        this.per_telefono = per_telefono,
        this.art_cod = art_cod,
        this.bol_cod = bol_cod
    }
}

module.exports = personal;