const {Sequelize, sequelize} = require('./db')

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.DataTypes.STRING
    },
    email: {
        type: Sequelize.DataTypes.STRING
    },
    telefone: {
        type: Sequelize.DataTypes.STRING
    },
    sexo: {
        type: Sequelize.DataTypes.STRING
    },
    data: {
        type: Sequelize.DataTypes.DATE
    },
    cidade: {
        type: Sequelize.DataTypes.STRING
    },
    estado: {
        type: Sequelize.DataTypes.STRING
    },
    endereco: {
        type: Sequelize.DataTypes.STRING
    },
});



module.exports = Usuario;