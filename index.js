const express = require('express');
const routes = require('./Routes');

//Creamos un app de express
const app = express();

app.use('/', routes());

//En que puerto queremos que escuche o corra el servidor
app.listen(3003);
