'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SubOrdersPrograms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER
      },
      programSessionId: {
        type: Sequelize.INTEGER
      },
      totalSessions: {
        type: Sequelize.INTEGER
      },
      sentSessions: {
        type: Sequelize.INTEGER
      },
      pendingSession: {
        type: Sequelize.INTEGER
      },
      mrp: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.STRING
      },
      paidAmount: {
        type: Sequelize.STRING
      },
      programStatus: {
        type: Sequelize.ENUM
      },
      startDate: {
        type: Sequelize.DATE
      },
      expiryDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('SubOrdersPrograms');
  }
};