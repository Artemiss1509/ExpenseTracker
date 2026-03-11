const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../utils/DB-connection')

const Expense = sequelize.define('expense',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Expense;