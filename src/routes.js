const express = require('express');

const DefaultController = require('./controllers/DefaultController');

const routes = express.Router();

const path = require('path')



//REALIZA CONFIGURAÇÃO/ INSERTS INICIAIS PADROES
routes.get('/getsugestions', function (req, res, next) {
    //testa header
    next();
},DefaultController.mainRoute);
//


module.exports = routes;