const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('advert', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idadvertiser: type.INTEGER,         // CREAR RELACION CON ADVERTISER
        title: type.STRING,
        discount: type.FLOAT,
        price: type.FLOAT,
        offer: type.FLOAT,
        status: type.BOOLEAN,
        description: type.TEXT,
        image1: type.STRING,
        image2: type.STRING,
        image3: type.STRING,
    })
}