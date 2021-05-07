const routers = require('express').Router();

const { table1 } = require('./db');
const { table2 } = require('./db');
const { table3 } = require('./db');
const { table4 } = require('./db');

const AdvertiserRouter = require('./routers/r_advertiser');
const AdvertRouter = require('./routers/r_advert');
const UserRouter = require('./routers/r_user');
const InicioRouter = require('./routers/r_inicio');
const AdUserRouter = require('./routers/r_ad_user');

routers.use('/advertiser', AdvertiserRouter);
routers.use('/advert', AdvertRouter);
routers.use('/user', UserRouter);
routers.use('/', InicioRouter);
routers.use('/favorite', InicioRouter);

module.exports = routers;