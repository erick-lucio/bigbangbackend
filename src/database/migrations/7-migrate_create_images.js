'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', { 
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
     },
     path:{
      type:Sequelize.STRING,
      allowNull:false
     },
     main_photo:{
      type:Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
     },
     description:{
      type:Sequelize.STRING,
      allowNull:false,
      defaultValue:"Default Description"
     },
     product_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'product', key: 'id' },
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
    return queryInterface.dropTable('images');
  }
};
