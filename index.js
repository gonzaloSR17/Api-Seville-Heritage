const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./JSON/data1.json'); // Asegúrate de que el archivo se llame así en la carpeta
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`API de Patrimonio Sevillano activa en puerto ${port}`);
});