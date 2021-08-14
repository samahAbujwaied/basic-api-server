'use strict';
const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/user";
const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const food = require('./food.model.js');
const clothes = require('./clothes')

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes),
  clothesData: clothes(sequelize, DataTypes)
};