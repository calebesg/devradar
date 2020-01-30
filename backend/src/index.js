const express = require('express');
const moongose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

moongose.connect('mongodb+srv://adm:adm@cluster0-sb8hu.mongodb.net/weak10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// method cors expect optional params
// { 'localhost:3000' }
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);