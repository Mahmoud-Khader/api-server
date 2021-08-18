'use strict';
require('dotenv').config();
const POSTGRES_URI =process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/newlab04";
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./collection-class');

const foodSchema=require('./food');
const clothesSchema=require('./clothes');

let sequelize = new Sequelize(POSTGRES_URI,{});

const foodModel = foodSchema(sequelize,DataTypes);
const clothesModel = clothesSchema(sequelize,DataTypes);

foodModel.hasMany(clothesModel,{foreignKey:'foodId',sourceKey :'id'});
clothesModel.belongsTo(foodModel,{foreignKey:'foodId',targetKey :'id'});

// exports 
const foodCollection=new Collection(foodModel);
const clothesCollection= new Collection(clothesModel);

module.exports={
    food:foodCollection,
    clothes:clothesCollection,
    db:sequelize
}