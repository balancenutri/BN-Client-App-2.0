'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      orderMrp: {
        type: Sequelize.STRING
      },
      orderDiscount: {
        type: Sequelize.STRING
      },
      orderPaidAmount: {
        type: Sequelize.STRING
      },
      paymentCurrency: {
        type: Sequelize.STRING
      },
      paymentMode: {
        type: Sequelize.STRING
      },
      orderDate: {
        type: Sequelize.DATE
      },
      orderTime: {
        type: Sequelize.TIME
      },
      totalItems: {
        type: Sequelize.INTEGER
      },
      orderStatus: {
        type: Sequelize.ENUM
      },
      addedDate: {
        type: Sequelize.DATE
      },
      updatedDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('OrderDetails');
  }
};