'use strict';
const DATABASE_URL =  process.env.DATABASE_URI ;//|| "postgres://localhost:5432/samah-abujwaied";
const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = {
  dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
} ;
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const product = require('./products.model');
const categorie = require('./categories.model')

module.exports = {
  db: sequelize,
  products: product(sequelize, DataTypes),
  categories: categorie(sequelize, DataTypes)
};