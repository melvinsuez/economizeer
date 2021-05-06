module.exports = (sequelize, type) => {
    return sequelize.define('advert', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncremwnt: true
        },
        idadvertiser: type.INTEGER,         // CREAR RELACION CON ADVERTISER
        title: type.STRING,
        discount: type.FLOAT,
        price: type.FLOAT,
        offer: type.FLOAT,
        expiration: type.STRING,
        description: type.TEXT,
        image1: type.STRING,
        image2: type.STRING,
        image3: type.STRING,
    })
}