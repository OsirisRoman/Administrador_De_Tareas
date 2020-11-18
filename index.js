const express = require('express');

//Creamos un app de express
const app = express();

//Ruta para el Home
//use() es el middleware de express
app.use('/', (request, response) => {
  response.send('Hola desde el servidor Node');
});

//En que puerto queremos que escuche o corra el servidor
app.listen(3003);
