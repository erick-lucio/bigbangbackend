'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      } ,
      password:{
        type:Sequelize.STRING,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false
      },
      permission:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      logged:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },    
      cidade_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references: { model: 'cidade', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
       },
       estado_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references: { model: 'estado', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
       },  
      file_path:{
        type:Sequelize.STRING,
        allowNull:true
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
    return queryInterface.dropTable('usuarios');
  }
};
