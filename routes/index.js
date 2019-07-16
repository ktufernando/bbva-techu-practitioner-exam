const express = require('express');

const app = express();

app.use(require('./usuario'));
app.use(require('./cuenta'));
app.use(require('./movimiento'));

module.exports = app;