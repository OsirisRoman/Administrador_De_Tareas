const express = require('express');
const routes = require('./Routes');
const path = require('path');

//Creamos un app de express
const app = express();

//Habilitar Pug Template Engine
app.set('view engine', 'pug');

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './Views'));

app.use('/', routes());

//En que puerto queremos que escuche o corra el servidor
app.listen(3003);
