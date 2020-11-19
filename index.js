const express = require('express');
const routes = require('./Routes');
const path = require('path');

//Creamos un app de express
const app = express();

//Donde cargar los archivos estáticos
/* De esta manera se enlazan los archivos 
css en las vistas */
app.use(express.static('public'));

//Habilitar Pug Template Engine
app.set('view engine', 'pug');

//Añadir la carpeta de las vistas
/*La función join() une el path del directorio raiz 
junto con el directorio de las vistas.
(__dirname) nos devuelve el directorio principal 
donde se encuentra el archivo index.js, para de ahí 
especificar el path a la carpeta Views*/
app.set('views', path.join(__dirname, './Views'));

app.use('/', routes());

//En que puerto queremos que escuche o corra el servidor
app.listen(3003);
