'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chat', { 
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
     },
     message_content:{
      type:Sequelize.STRING,
      allowNull:false
     },
     from_user:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'usuarios', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
     },
     to_user:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'usuarios', key: 'id' },
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
    return queryInterface.dropTable('chat');
  }
};
