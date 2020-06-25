const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model {
  static init(sequelize) {
    super.init({
      name:DataTypes.STRING,
      password:DataTypes.STRING,
      email:DataTypes.STRING,
      permission:DataTypes.INTEGER,
      logged:DataTypes.BOOLEAN,
      file_path:DataTypes.STRING,
      cidade_id:DataTypes.INTEGER,
      estado_id:DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'usuarios',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Usuarios;