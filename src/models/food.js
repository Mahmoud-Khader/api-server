'use strict';

const food = (sequelize, DataTypes) => {
   let food= sequelize.define('food', {
        firstName:{ 
            type: DataTypes.STRING, 
            allowNull: false, 
           
        },
        theMeal: { 
        type: DataTypes.STRING, 
        allowNull: false,
        
    }, 
        drink:{ type: DataTypes.STRING, 
        allowNull: false, 
        
    }
        
    });
    return food
}

module.exports = food;