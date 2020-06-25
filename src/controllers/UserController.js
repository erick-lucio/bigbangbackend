
const { Op } = require("sequelize");
const bcrypt = require("bcrypt")
const Usuarios = require('../models/Usuarios.js');
const temp_security_key = "ajk85HJH48HJFJHJjht4uhj98uf9898H8YH876876yh876";
module.exports = {
  
  async returnUsers(req, res) {
    const user = await Usuarios.findAll({
            attributes: ['name','password',],
            where: {
                email: req.body.email
            },
          //  include: [{
         //       model: hp_state,
         //       attributes: ['state_id', 'state_name'],
          //      where: {
          //          state_status: 1,
         //           state_name: {
          //              $like: '%ta%'
          //          }
           //     }
            //}]
      });
      
      if (user.length == 0) {
        return res.status(400).send([{succes:false}])
      }
      
      try {
          if(await bcrypt.compare(req.body.password, user[0].password)) {
              //res.setHeader('Content-Type', 'application/json');
              res.send([{ name: user[0].name },{auth_id : temp_security_key},{succes : true}]);

            } else {
              res.send([{succes:false}])
            }
      }catch {
          res.status(500).send([{succes:false}])
      }
        
  },
  async createUser(req, res) {
    let { name, password ,email} = req.body;
    let users_check = await Usuarios.findAll({
      attributes:['password','email'],
      where: {                      
          email: email                  
      }
    });
    if(users_check.length != 0){
      return res.send([{succes:false}])
    }else{
      const hashedPassword = await bcrypt.hash(password, 10)
      let user_create = await Usuarios.create({
        name:name,
        password:hashedPassword,
        email:email
       });
       return res.send([{succes:true}])
    }       
  },

};