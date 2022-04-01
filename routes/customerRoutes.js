const express = require('express');

const app = express.Router();
const { 
  getAllProductsMiddleware,
  getProductByIdMiddleware,
} = require('../middlewares/getProducts');

const {
  validateProductName,
  validateQuantityProduct,
  validateProductId,
} = require('../services/validateProducts');

const {
  validateQuantitySales,
  validateProductIdSale,
} = require('../services/validateSales');

const { getAllSalesMiddlewares, getOneSaleMiddlewares } = require('../middlewares/getSales');

app.get('/products', getAllProductsMiddleware);
app.get('/products/:id', getProductByIdMiddleware);

app.get('/sales', getAllSalesMiddlewares);
app.get('/sales/:id', getOneSaleMiddlewares);

app.post('/products', validateProductName, validateQuantityProduct);
app.post('/sales', validateQuantitySales, validateProductId);

app.put('/products/:id', validateProductName, validateQuantityProduct);
app.put('/sales/:id', validateQuantitySales, validateProductIdSale);

module.exports = app;
