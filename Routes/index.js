const express = require('express');
const router = express.Router();

module.exports = function () {
  //Ruta a Home
  router.get('/', (request, response) => {
    response.send('Home');
  });
  //Ruta a Nosotros
  router.get('/nosotros', (request, response) => {
    response.send('Nosotros');
  });

  return router;
};
