const express = require('express');
const http = require('http');

const routesPrefeito = require('./routes/PrefeitoRoutes.js');
const routesCidade = require('./routes/CidadeRoutes.js');

require('./database/indexDB.js');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 3333);


app.use(express.json());
app.use(routesPrefeito);
app.use(routesCidade);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando em ' + app.get('url')+app.get('porta'));
})


