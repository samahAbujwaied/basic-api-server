'use strict';
const products = (sequelize, DataTypes) => sequelize.define('products', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  inStock: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING,
  }
});

module.exports = products;