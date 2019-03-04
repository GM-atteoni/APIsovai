const Hapi = require('hapi');
const DatabaseProdutosMongo = require('./DatabaseProdutosMongo');
const DatabaseEventosMongo = require('./DatabaseEventosMongo');
const comidaService = require('./ComidasService');
const bebidaService = require('./BebidasService');
const eventoService = require('./EventosService');
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const produtoBebida = bebidaService.conectar();
const produtoComida = comidaService.conectar();
const evento = eventoService.conectar();
const databaseBebida = new DatabaseProdutosMongo(produtoBebida);
const databaseComida = new DatabaseProdutosMongo(produtoComida);
const databaseEvento = new DatabaseEventosMongo(evento);

server.route({
    method: 'GET',
    path: '/bebidas/{eventId}',
    handler: (request, h) => {
        // let produtoBebida = bebidasService.conectar();
        // let databaseBebida = new DatabaseProdutosMongo(produtoBebida);
        let result = databaseBebida.listarProdutosPorEvento(encodeURIComponent(request.params.eventId));
        return result;
    }
}
);

server.route({
    method: 'GET',
    path: '/comidas/{eventId}',
    handler: (request, h) => {
        // let produtoComida = comidasService.conectar();
        // let databaseComida = new DatabaseProdutosMongo(produtoComida);
        let result = databaseComida.listarProdutosPorEvento(encodeURIComponent(request.params.eventId));
        return result;
    }
});

server.route({
    method: 'GET',
    path: '/bebida/{id}',
    handler: (request, h) => {
        // let produtoBebida = bebidasService.conectar();
        // let databaseBebida = new DatabaseProdutosMongo(produtoBebida);
        let result = databaseBebida.listarProduto(encodeURIComponent(request.params.id));
        return result;
    }
});

server.route({
    method: 'GET',
    path: '/comida/{id}',
    handler: (request, h) => {
        // let produtoComida = comidasService.conectar();
        // let databaseComida = new DatabaseProdutosMongo(produtoComida);
        let result = databaseComida.listarProduto(encodeURIComponent(request.params.id));
        return result;
    }
});

server.route({
    method: 'GET',
    path: '/eventos',
    handler: (request, h) => {
        // let evento = eventosService.conectar();
        // let databaseEvento = new DatabaseEventosMongo(evento);
        let result = databaseEvento.listarEventos();
        return result;
    }
});

server.route({
    method: 'GET',
    path: '/evento/{id}',
    handler: (request, h) => {
        // let evento = eventosService.conectar();
        // let databaseEvento = new DatabaseEventosMongo(evento);
        let result = databaseEvento.listarEvento(encodeURIComponent(request.params.id));
        return result;
    }
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
