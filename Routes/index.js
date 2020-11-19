const express = require('express');

//Importar las rutas
const router = express.Router();

//Importar el controlador
const proyectosController = require('../Controllers/proyectosController');

module.exports = function () {
  //Ruta a Home
  router.get('/', proyectosController.proyectosHome);

  return router;
};
