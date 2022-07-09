'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    statusId: DataTypes.INTEGER,
    staffId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    timeType: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};