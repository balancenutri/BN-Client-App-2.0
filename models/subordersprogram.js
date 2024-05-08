"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubOrdersProgram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubOrdersProgram.belongsTo(models.OrderDetail, {
        foreignKey: "order_id",
      });
    }
  }
  SubOrdersProgram.init(
    {
      orderId: DataTypes.INTEGER,
      programSessionId: DataTypes.INTEGER,
      totalSessions: DataTypes.INTEGER,
      sentSessions: DataTypes.INTEGER,
      pendingSession: DataTypes.INTEGER,
      mrp: DataTypes.STRING,
      discount: DataTypes.STRING,
      paidAmount: DataTypes.STRING,
      programStatus: DataTypes.ENUM,
      startDate: DataTypes.DATE,
      expiryDate: DataTypes.DATE,
      addedDate: DataTypes.DATE,
      updatedDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "SubOrdersProgram",
    }
  );
  return SubOrdersProgram;
};
