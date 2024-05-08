'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RegisteredUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM
      },
      emailId: {
        type: Sequelize.STRING
      },
      phoneCode: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      countryId: {
        type: Sequelize.INTEGER
      },
      stateId: {
        type: Sequelize.INTEGER
      },
      cityId: {
        type: Sequelize.INTEGER
      },
      birthDate: {
        type: Sequelize.DATE
      },
      mentorAssigned: {
        type: Sequelize.INTEGER
      },
      userType: {
        type: Sequelize.ENUM
      },
      userStatus: {
        type: Sequelize.ENUM
      },
      subUserStatus: {
        type: Sequelize.ENUM
      },
      salesStatus: {
        type: Sequelize.ENUM
      },
      subSalesStatus: {
        type: Sequelize.ENUM
      },
      activeOrderId: {
        type: Sequelize.INTEGER
      },
      otp: {
        type: Sequelize.BIGINT
      },
      startWeight: {
        type: Sequelize.STRING
      },
      latestWeight: {
        type: Sequelize.STRING
      },
      appVersion: {
        type: Sequelize.STRING
      },
      device: {
        type: Sequelize.STRING
      },
      currentScreen: {
        type: Sequelize.STRING
      },
      suggestedProgramId: {
        type: Sequelize.INTEGER
      },
      addedDate: {
        type: Sequelize.DATE
      },
      encPassword: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RegisteredUsers');
  }
};