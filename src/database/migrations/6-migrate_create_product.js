'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', { 
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
     product_category_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'product_category', key: 'id' },
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
    return queryInterface.dropTable('product');
  }
};
