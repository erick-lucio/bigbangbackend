const { Model, DataTypes } = require('sequelize');

class Estado extends Model {
  static init(sequelize) {
    super.init({
      name:DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'estado',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Estado;