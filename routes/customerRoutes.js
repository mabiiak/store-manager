const express = require('express');

const app = express.Router();
const { 
  getAllProductsMiddleware,
  getProductByIdMiddleware,
} = require('../middlewares/getProducts');

const { getAllSalesMiddlewares, getOneSaleMiddlewares } = require('../middlewares/getSales');

app.get('/products', getAllProductsMiddleware);

app.get('/products/:id', getProductByIdMiddleware);

app.get('/sales', getAllSalesMiddlewares);

app.get('/sales/:id', getOneSaleMiddlewares);

module.exports = app;
