'use strict';
const categories = (sequelize, DataTypes) => sequelize.define('categories', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  displayName: {
    type: DataTypes.STRING,
  }

});
module.exports = categories;
