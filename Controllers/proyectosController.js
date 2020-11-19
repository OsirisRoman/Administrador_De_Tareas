exports.proyectosHome = (request, response) => {
  response.render('index', {
    nombrePagina: 'Administrador de Proyectos',
  });
};
