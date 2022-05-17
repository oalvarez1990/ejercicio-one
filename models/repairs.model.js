//Connecting to db thanks to Sequelize
const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const Repair = db.define('repairs', {
    id: { //Llave primaria
        primaryKey: true,
        autoIncrement: true, //
        type: DataTypes.INTEGER , 
        unique: true,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE , //
        //YYYY-MM-DD
        unique: false,
        allowNull: false
    },    
    computerNumber:{
        type: DataTypes.INTEGER 
    },    
    comments:{
        type: DataTypes.STRING ,
        defaultValue: 'pending'
    },
    status:{
        type: DataTypes.STRING ,
        defaultValue: 'pending'
    },
    userId:{
        type: DataTypes.INTEGER , 
        allowNull: false
    }    
})

module.exports = {Repair}
