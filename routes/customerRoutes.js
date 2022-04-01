const express = require('express');

const app = express.Router();
const {
  getAllProductsMiddleware,
  getProductByIdMiddleware,
  getAllSales,
} = require('../middlewares/getProducts');

// Requisito 2 - retorna TODOS os produtos
app.get('/products', getAllProductsMiddleware);

app.get('/products/:id', getProductByIdMiddleware);

app.get('/sales', getAllSales);

module.exports = app;
