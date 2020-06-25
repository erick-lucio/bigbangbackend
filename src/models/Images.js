const { Model, DataTypes } = require('sequelize');

class Images extends Model {
  static init(sequelize) {
    super.init({      
      path:DataTypes.STRING,
      description:DataTypes.STRING,
      product_id:DataTypes.INTEGER,
      main_photo:DataTypes.BOOLEAN
    }, {
      sequelize,
      modelName: 'images',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Images;