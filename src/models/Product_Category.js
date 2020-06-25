const { Model, DataTypes } = require('sequelize');

class ProductCategory extends Model {
  static init(sequelize) {
    super.init({
      name:DataTypes.STRING,
      description:DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'product_category',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = ProductCategory;