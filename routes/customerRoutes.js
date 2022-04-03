const express = require('express');

const app = express.Router();

const { 
  getAllProductsMiddleware,
  getProductByIdMiddleware,
  newProductMiddleware,
  editProduct,
} = require('../middlewares/getProducts');

const {
  validateQuantitySales,
  validateProductIdSale,
} = require('../services/validateSales');

const {
  validateProductName,
  validateQuantityProduct,
  validateProductId,
} = require('../services/validateProducts');

const { getAllSalesMiddlewares, getOneSaleMiddlewares } = require('../middlewares/getSales');

app.get('/products', getAllProductsMiddleware);
app.get('/products/:id', getProductByIdMiddleware);

app.get('/sales', getAllSalesMiddlewares);
app.get('/sales/:id', getOneSaleMiddlewares);

app.post('/products', validateProductName, validateQuantityProduct, newProductMiddleware);
app.post('/sales', validateQuantitySales, validateProductId);

app.put('/products/:id', validateProductName, validateQuantityProduct, editProduct);
app.put('/sales/:id', validateQuantitySales, validateProductIdSale);

module.exports = app;
