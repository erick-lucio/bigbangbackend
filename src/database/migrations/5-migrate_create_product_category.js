'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_category', { 
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
     },
     name:{
      type:Sequelize.STRING,
      allowNull:false
     },
     description:{
      type:Sequelize.STRING,
      allowNull:false,
      defaultValue:"Default Description"
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
    return queryInterface.dropTable('product_category');
  }
};
