'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('cidades', { 
      id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    }, 
    cid_nomecidade: {
      allowNull: false,
      type: Sequelize.STRING(30),
    },       
    cid_estado: {
      allowNull: false,
      type: Sequelize.STRING(2),
    },               
    cid_habitantes: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },       
    cid_economia: {
      allowNull: false,
      type: Sequelize.STRING(20),
    },
    pre_codigo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prefeitos',
        key: 'id',
      }
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
    await queryInterface.dropTable('cidades');
  }
};
