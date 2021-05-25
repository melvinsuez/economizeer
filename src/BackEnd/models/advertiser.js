module.exports = (sequelize, type) => {
    return sequelize.define('advertiser', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncremwnt: true
        },
        name: type.STRING,
        adrdress1: type.STRING,
        phone: type.STRING,
        city: type.STRING,
        state: type.STRING,
        cep: type.STRING,
        cnpj: type.STRING,
        email: type.STRING,
    })
}