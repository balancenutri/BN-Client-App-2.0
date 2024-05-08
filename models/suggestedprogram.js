'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuggestedProgram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SuggestedProgram.belongsTo(models.RegisteredUser, {
        foreignKey: 'user_id',
    });
    }
  }
  SuggestedProgram.init({
    leadId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    programSessionId: DataTypes.INTEGER,
    suggestedAmount: DataTypes.STRING,
    paymentLink: DataTypes.STRING,
    paymentLinkExpiry: DataTypes.DATE,
    suggestedBy: DataTypes.INTEGER,
    paymentLinkStatus: DataTypes.ENUM,
    addedDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SuggestedProgram',
  });
  return SuggestedProgram;
};