require('babel-register');
const express = require('express');
const routes = require('./lib/routes');
const configFactory = require('./config');
const setEnvironment = require('./set-environment');

const config = configFactory(process.env.NODE_ENV);
require('./app')(express(), config, setEnvironment, routes);