const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuarios = require('../models/Usuarios');
const Chat = require('../models/Chat');
const Estado = require('../models/Estado');
const Cidade = require('../models/Cidade');
const Product = require('../models/Product');
const Product_Category = require('../models/Product_Category');
const Images = require('../models/Images');



const connection = new Sequelize(dbConfig);

Usuarios.init(connection);
Chat.init(connection);
Estado.init(connection);
Cidade.init(connection);
Product.init(connection);
Product_Category.init(connection);
Images.init(connection);

Product.belongsTo(Product_Category,{
    foreignKey:'product_category_id'
});
//
Images.belongsTo(Product,{
    foreignKey:'product_id'
});
//
Usuarios.belongsTo(Estado,{
    foreignKey:'estado_id'
});
Usuarios.belongsTo(Cidade,{
    foreignKey:'cidade_id'
});
//
Cidade.belongsTo(Estado,{
    foreignKey:'estado_id'
});
//
Chat.belongsTo(Usuarios,{
    foreignKey:'to_user'
});
Chat.belongsTo(Usuarios,{
    foreignKey:'from_user'
});



module.exports = connection;