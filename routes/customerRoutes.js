const express = require('express');

const app = express.Router();
const { 
  getAllProductsMiddleware,
  getProductByIdMiddleware,
  newProduct,
} = require('../middlewares/getProducts');

const { validateProductName } = require('../services/validate');

const { getAllSalesMiddlewares, getOneSaleMiddlewares } = require('../middlewares/getSales');

app.get('/products', getAllProductsMiddleware);

app.get('/products/:id', getProductByIdMiddleware);

app.get('/sales', getAllSalesMiddlewares);

app.get('/sales/:id', getOneSaleMiddlewares);

app.post('/products', validateProductName, newProduct);

app.post('/sales');

module.exports = app;
