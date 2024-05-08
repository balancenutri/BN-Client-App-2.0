'use strict';
import {Model} from 'sequelize';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegisteredUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RegisteredUser.belongsTo(models.SuggestedProgram, {
        foreignKey: 'suggested_program_id',
        // other options as needed
    });
    }
  }
  RegisteredUser.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.ENUM,
    emailId: DataTypes.STRING,
    phoneCode: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER,
    birthDate: DataTypes.DATE,
    mentorAssigned: DataTypes.INTEGER,
    userType: DataTypes.ENUM,
    userStatus: DataTypes.ENUM,
    subUserStatus: DataTypes.ENUM,
    salesStatus: DataTypes.ENUM,
    subSalesStatus: DataTypes.ENUM,
    activeOrderId: DataTypes.INTEGER,
    otp: DataTypes.BIGINT,
    startWeight: DataTypes.STRING,
    latestWeight: DataTypes.STRING,
    appVersion: DataTypes.STRING,
    device: DataTypes.STRING,
    currentScreen: DataTypes.STRING,
    suggestedProgramId: DataTypes.INTEGER,
    addedDate: DataTypes.DATE,
    encPassword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RegisteredUser',
  });
  return RegisteredUser;
};