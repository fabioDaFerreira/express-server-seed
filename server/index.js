require('babel-register');
const express = require('express');
const routes = require('./lib/routes');
const configFactory = require('./config');
const setEnvironment = require('./set-environment');
const app = express();
const config = configFactory(process.env.NODE_ENV);
require('./app')(app, config, setEnvironment, routes);