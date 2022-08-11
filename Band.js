const {sequelize} = require('./db.js');
const { Sequelize,DataTypes} = require('sequelize');
// TODO - define the Band model
const Band = sequelize.define('Band',{
    name:{
        type: DataTypes.STRING,
        allowNull : false
    },
    genre:{
        type: DataTypes.STRING,
        allowNull : false
    }
})

module.exports = {
    Band
};