'use strict';

// const sequelize = require("sequelize");

const clothes = (sequelize,DataTypes)=>{
   let clothes= sequelize.define('clothes',{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },

        Shirt:{
            type:DataTypes.STRING,
            // allowNull:false
        },
        Pants:{
            type:DataTypes.STRING,
            // allowNull:false
        },
        Shoes:{
            type:DataTypes.STRING,
            // allowNull:false
        },
        foodId:{
            type:DataTypes.INTEGER,
            // allowNull:false
        }
    });
    return clothes
}

module.exports = clothes;