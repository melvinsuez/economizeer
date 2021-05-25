/* Neste arquivo é definida a conexão com o banco de dados e a criação das tabelas é criada ou verificada */

const Sequelize = require('sequelize');

//DEFINIR RUTAS DE LOS MODELOS Y AGREGARLOS EN UNA CONSTANTE
const advert = require('./models/advert');
const advertiser = require('./models/advertiser');
const advertuser = require('./models/advertuser');
const user = require('./models/user');

const sequelize = new Sequelize('economizeer', 'postgres', '1234', {
    port: '5434',
    host: 'localhost',
    dialect: 'postgres'
})

const table1 = advert(sequelize, Sequelize);
const table2 = advertiser(sequelize, Sequelize);
const table3 = advertuser(sequelize, Sequelize);
const table4 = user(sequelize, Sequelize);

sequelize.sync({force: false})
    .then (() => {
        console.log('Tablas creadas y actualizadas');
})

module.exports = {
    table1,
    table2,
    table3,
    table4
}