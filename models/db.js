require('dotenv').config()

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.HOST,
    dialect: 'mysql'
});

console.log(process.env.USERNAME);

function authentication() {
    try {
        sequelize.authenticate()
        console.log('A conexão foi estabelecida com sucesso.');
    } catch (error) {
        console.log('Não foi possível conectar ao banco de dados:')
    }
}

authentication()

module.exports = {Sequelize, sequelize}


