'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes')

const server = new Hapi.Server({
  host: 'localhost',
  port: 3000
});

server.route(Routes);


const start =  async function() {
    try {
        await server.start();
    }
    catch (err) {
      console.log("hello")
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
};
start();

// server.start((err) => {
//   Hoek.assert(!err, err);
//
//   console.log(`Server running at: ${server.info.uri}`);
// });
