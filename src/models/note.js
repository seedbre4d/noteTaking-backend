'use strict';
module.exports = (sequelize, DataTypes) => {
  var note = sequelize.define('note', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    created: DataTypes.DATE,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return note;
};