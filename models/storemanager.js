'use strict';
const {
  Model
} = require('sequelize');
const crypto = require('crypto');
module.exports = (sequelize, DataTypes) => {
  class StoreManager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StoreManager.hasOne(models.Store)
    }
  }
  StoreManager.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    salary: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StoreManager',
    hooks: {
      beforeCreate: (sm, opts) => {
        sm.password = crypto.createHash('md5').update('secret').digest('hex')
      },
      afterCreate: (sm, opts) => {
        console.log('email send!!')
      }
    }
  });
  return StoreManager;
};