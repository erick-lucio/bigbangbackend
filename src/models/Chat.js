const { Model, DataTypes } = require('sequelize');

class Chat extends Model {
  static init(sequelize) {
    super.init({
      message_content:DataTypes.STRING,
      user_id:DataTypes.INTEGER,
      from_user:DataTypes.STRING,
      to_user:DataTypes.STRING,
      }, {
      sequelize,
      modelName: 'chat',
      freezeTableName: true,
    })
    
  }


}

module.exports =  Chat;