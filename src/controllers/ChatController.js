const Usuarios = ('../models/Usuarios.js');
const Chat = require('../models/Chat');
const { Op } = require("sequelize");

module.exports = {

  async searchLast100Messages(req, res) {          
    let chat_messages = await Chat.findAll({
      attributes:['messages','time_msg'],
     // where: {

      //},
      include:[{
       model: Usuarios,
       
        attributes:[
          'name_user'
        ]
      }],
      order:[
        ["time_msg","DESC"]
    ],
      //offset:((1-1)*30),
      limit : 100,
         

     
    })
    //console.log(chat_messages[0])
    return res.json(chat_messages);
  },
  async insertChatMessage(req,res){
    
    let {message,name}= req.body;
    let user_find = await Usuarios.findAll({
      attributes:['id'],
        where:[{
          name_user:name
        }]
    });
    //return res.json(user_find[0]);
    //console.log(user_find[0].id)
    if(user_find[0].id != null || user_find[0].id != undefined){
      let ins_msg = await Chat.create({
        messages:message,
        user_id:user_find[0].id,      
                 
        include:[{
          model:Usuarios,
  
        }]
      });
    }

  },

};