'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuggestedPrograms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leadId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      programSessionId: {
        type: Sequelize.INTEGER
      },
      suggestedAmount: {
        type: Sequelize.STRING
      },
      paymentLink: {
        type: Sequelize.STRING
      },
      paymentLinkExpiry: {
        type: Sequelize.DATE
      },
      suggestedBy: {
        type: Sequelize.INTEGER
      },
      paymentLinkStatus: {
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
    await queryInterface.dropTable('SuggestedPrograms');
  }
};