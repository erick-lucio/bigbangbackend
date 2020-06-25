const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      name:DataTypes.STRING,
      description:DataTypes.STRING,
      product_category_id:DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'product',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Product;