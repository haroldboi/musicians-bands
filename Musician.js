const {sequelize} = require('./db.js');
const { Sequelize,DataTypes} = require('sequelize');
// TODO - define the Musician model
let Musician =  sequelize.define('Musician',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    instrument:{
        type: DataTypes.STRING,
        allowNull: false
    },

})

module.exports = {
    Musician
};