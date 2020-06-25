const express = require('express');
const UserController = require('./controllers/UserController');
const ChatController = require('./controllers/ChatController');
const DefaultController = require('./controllers/DefaultController');
const ProductController = require('./controllers/ProductController');
const routes = express.Router();

const path = require('path')

const { function1 } = require('./controllers/ProductController');

function check_autentication(){  
  if(true){
    next();
  }else{
    res.status(500).send("Error Autentication")
  }
}
//REALIZA CONFIGURAÇÃO/ INSERTS INICIAIS PADROES
routes.get('/getsugestions', function (req, res, next) {
    //testa header
    next();
},DefaultController.configDatabase);
//
//RETORNA um usuario
routes.post('/userslogin', function (req, res, next) {
    //testa header 

  next();
},UserController.returnUsers);//UserController.returnAllUsers);
//
//Adicionar Usuario
routes.post('/users', function (req, res, next) {
//testa header
  next();
},UserController.createUser);
//testes
routes.post('/images', multer(multerconfig).single("file"),function (req, res, next) {
  //testa header
  next();
},ProductController.uploadImages);

routes.get('/images/:id',function (req, res, next) {
  //testa header
  next();
},ProductController.downloadImages);
//
routes.post('/product',function (req, res, next) {
  //testa header
  next();
},ProductController.createProduct);

routes.get('/product',function (req, res, next) {
  //testa header
  next();
},ProductController.getProduct);
//
routes.get('/productimg',function (req, res, next) {
  //testa header
  next();
},ProductController.getProductImgs);
//
routes.get('/productimgall',function (req, res, next) {
  //testa header
  next();
},ProductController.getProductImgsAll);

module.exports = routes;