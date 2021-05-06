module.exports = (sequelize, type) => {
    return sequelize.define('advertuser', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncremwnt: true
        },
        idadvertiser: type.INTEGER,         // CREAR RELACION CON ADVERTISER
        iduser: type.INTEGER,         // CREAR RELACION CON USER
        date: type.DATE,
        score: type.FLOAT,
        commentary: type.TEXT,
    })
}