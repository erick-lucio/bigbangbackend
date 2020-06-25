'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cidade', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      estado_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: { model: 'estado', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
       },  
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.fn('now')
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.fn('now')
      }


    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cidade');
  }
};
