const { Model, DataTypes } = require('sequelize');

class Cidade extends Model {
  static init(sequelize) {
    super.init({
      name:DataTypes.STRING,
      estado_id:DataTypes.STRING
    }, {
      sequelize,
      modelName: 'cidade',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Cidade;