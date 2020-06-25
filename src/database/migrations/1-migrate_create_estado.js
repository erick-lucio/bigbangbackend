'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estado', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      } ,
       name:{
        type:Sequelize.STRING,
        allowNull:false
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
    return queryInterface.dropTable('estado');
  }
};
