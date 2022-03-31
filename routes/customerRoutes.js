const express = require('express');

const app = express.Router();
const { getAllProductsMiddleware } = require('../middlewares/getAllProducts');

// Requisito 2 - retorna TODOS os produtos
app.get('/products', getAllProductsMiddleware);

module.exports = app;
