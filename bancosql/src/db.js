const sequelize = require('sequelize');

const database = new sequelize('tabela', 'Davi','1234',
{
    dialect: 'mssql', host:'localhost', port: 1433
});

database.sync();

module.exports = database;