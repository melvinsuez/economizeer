module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncremwnt: true
        },
        firstname: type.STRING,
        lastname: type.STRING,
        adrdress1: type.STRING,
        phone: type.STRING,
        city: type.STRING,
        state: type.STRING,
        cep: type.STRING,
        cpf: type.STRING,
        email: type.STRING,
    })
}