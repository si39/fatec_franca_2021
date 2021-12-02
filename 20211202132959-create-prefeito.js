'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('prefeitos', { 
      id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    }, 
    pre_nome: {
      allowNull: false,
      type: Sequelize.STRING(30),
    },       
    pre_apelido: {
      allowNull: false,
      type: Sequelize.STRING(10),
    },               
    pre_partido: {
      allowNull: false,
      type: Sequelize.STRING(10),
    },       
    pre_sexo: {
      allowNull: false,
      type: Sequelize.STRING(1),
    },       
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },       
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },       
  });

  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('prefeitos');
  }
};
