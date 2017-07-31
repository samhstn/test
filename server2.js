const Hapi = require('hapi');
const port = process.env.PORT || 4000

const server = new Hapi.Server();
server.connection({ port: port });

//random comment
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, server2!');
    }
});

server.route({
    method: 'GET',
    path: '/sayhello2',
    handler: function (request, reply) {
      console.log('working2');
      reply('Howdy, server123456!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
