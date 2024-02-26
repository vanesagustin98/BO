const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');

const server = express();

server.name = 'API';

// Middleware para el análisis de cookies
server.use(cookieParser());

// Middleware para el registro de solicitudes HTTP
server.use(morgan('dev'));

// Middleware para permitir el intercambio de recursos entre diferentes dominios
server.use(cors());

// Middleware para el análisis de datos de solicitud entrante en formato JSON
server.use(bodyParser.json({ limit: '50mb' }));

// Middleware para el análisis de datos de solicitud entrante codificados en la URL
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Middleware para configurar los encabezados de CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas principales
server.use('/', routes);

// Middleware para manejar errores
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;
