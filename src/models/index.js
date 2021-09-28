'use strict';
const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/samah-abujwaied";
const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const product = require('./products.model');
const categorie = require('./categories.model')

module.exports = {
  db: sequelize,
  products: product(sequelize, DataTypes),
  categories: categorie(sequelize, DataTypes)
};