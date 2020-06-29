const express = require('express');

const DefaultController = require('./controllers/DefaultController');

const routes = express.Router();

const path = require('path')




routes.get('/getsugestions', function (req, res, next) {
  
    next();
},DefaultController.mainRoute);



module.exports = routes;