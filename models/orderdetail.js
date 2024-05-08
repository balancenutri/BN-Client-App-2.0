'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        OrderDetail.belongsTo(models.RegisteredUser, {
        foreignKey: 'user_id',
    });
    }
  }
  OrderDetail.init({
    userId: DataTypes.INTEGER,
    orderMrp: DataTypes.STRING,
    orderDiscount: DataTypes.STRING,
    orderPaidAmount: DataTypes.STRING,
    paymentCurrency: DataTypes.STRING,
    paymentMode: DataTypes.STRING,
    orderDate: DataTypes.DATE,
    orderTime: DataTypes.TIME,
    totalItems: DataTypes.INTEGER,
    orderStatus: DataTypes.ENUM,
    addedDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};